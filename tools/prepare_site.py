#!/usr/bin/env python3
"""Offline site preparation (run ONCE; nothing here runs in the browser).

  tools/.venv/bin/python tools/prepare_site.py

1. Photo: ~/ms_demo/"WhatsApp Image 2026-11-12 at 8.18.53 PM (1).jpeg" (1280×684, the highest-resolution
   original that shows both pillars side-on). Crop only the blown-out floodlight bulb strip (top 60 px) and
   the left 80 px (sky/edge shrubs). Mild denoise + sharpen + contrast. No inpainting, nothing invented.
   NOTE: the real drone on the grass (y 598–684) shares rows with the Point 1 base (y ≈ 636) — cropping it out
   would cut Point 1's base, so it stays. The horizon is levelled in 3D (camera roll), not by resampling.
2. DAY image: a careful grade of the night photo (exposure, white balance, lifted shadows, reduced bloom).
3. Depth: Depth-Anything-V2-Small (ONNX, onnxruntime, CPU) → relative inverse depth.
4. Calibration (least squares): camera height, pitch, roll from the measured pillar pixels, pillar height and
   Point 1 → Point 2 distance; then a metric fit of the depth map against the calibrated ground plane.
Outputs: public/site/{night.jpg, day.jpg, depth.png (16-bit z), depth-rg.png (runtime 16-bit in R/G)}
         src/sim/site.calib.json
"""
import json, math, os, sys
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance, ImageOps
from scipy.optimize import least_squares
import onnxruntime as ort

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.expanduser('~/ms_demo/WhatsApp Image 2026-11-12 at 8.18.53 PM (1).jpeg')
MODEL = os.path.join(ROOT, 'tools/models/depth-anything-v2-small.onnx')
OUT = os.path.join(ROOT, 'public/site')
CALIB = os.path.join(ROOT, 'src/sim/site.calib.json')

CROP = (80, 60, 1280, 684)                 # x0, y0, x1, y1 in original pixels
HFOV_DEG = 67.0                            # phone main camera (~26 mm eq.), horizontal, on the ORIGINAL 1280 px width
PILLAR_H = 1.5                             # m (estimate, config pillarHeightM)
P1P2_M = 24.2                              # m (estimate, config p1p2DistanceM)
Z_FAR = 180.0                              # m, sky / far trees clamp
# measured on the ORIGINAL photo (white-pixel analysis + gridded zoom crops)
MEAS = {'p1_base': (1248.5, 635.5), 'p1_top': (1150.0, 141.0), 'p2_base': (259.0, 305.0), 'p2_top': (241.5, 250.0)}
REAL_DRONE = (640, 598, 872, 684)          # original px — excluded from fits


def to_crop(p):
    return (p[0] - CROP[0], p[1] - CROP[1])


def main():
    os.makedirs(OUT, exist_ok=True)
    orig = Image.open(SRC).convert('RGB')
    print('source', SRC, orig.size)
    img = orig.crop(CROP)
    W, H = img.size
    print('prepared size', (W, H))

    # ---------------- night: mild denoise / contrast / sharpen
    den = Image.blend(img, img.filter(ImageFilter.MedianFilter(3)), 0.45)
    night = ImageOps.autocontrast(den, cutoff=(0.3, 0.3), preserve_tone=True)
    lut = [v if v <= 205 else int(205 + (v - 205) * 0.72) for v in range(256)]   # floodlight roll-off
    night = night.point(lut * 3)
    night = ImageEnhance.Contrast(night).enhance(1.06)
    night = ImageEnhance.Color(night).enhance(1.05)
    night = night.filter(ImageFilter.UnsharpMask(radius=1.2, percent=50, threshold=3))
    night.save(os.path.join(OUT, 'night.jpg'), quality=92, optimize=True, progressive=True, subsampling=0)

    # ---------------- day: grade of the night photo (no objects added or removed)
    a = np.asarray(night).astype(np.float32) / 255.0
    lum = a.mean(axis=2, keepdims=True)
    a = np.clip(a * 1.0 + (1 - a) * 0.18 * (1 - lum), 0, 1)              # lift shadows
    a = a ** 0.78                                                            # exposure
    a[..., 0] *= 0.97; a[..., 1] *= 1.00; a[..., 2] *= 1.05                  # cooler / neutral white balance
    hi = np.clip((lum - 0.78) / 0.22, 0, 1)                                  # reduce floodlight bloom
    a = a * (1 - 0.25 * hi) + 0.25 * hi * np.array([0.80, 0.84, 0.90])
    gray = a.mean(axis=2, keepdims=True)
    a = np.clip(gray + (a - gray) * 1.12, 0, 1)                              # a little more colour in daylight
    day = Image.fromarray((np.clip(a, 0, 1) * 255).astype(np.uint8))
    day = ImageEnhance.Contrast(day).enhance(1.04)
    day.save(os.path.join(OUT, 'day.jpg'), quality=92, optimize=True, progressive=True, subsampling=0)

    # ---------------- depth (Depth-Anything-V2-Small, ONNX)
    sess = ort.InferenceSession(MODEL, providers=['CPUExecutionProvider'])
    ih = 518; iw = int(round(W * ih / H / 14)) * 14
    x = np.asarray(night.resize((iw, ih), Image.BICUBIC)).astype(np.float32) / 255.0
    x = (x - np.array([0.485, 0.456, 0.406])) / np.array([0.229, 0.224, 0.225])
    x = x.transpose(2, 0, 1)[None].astype(np.float32)
    disp = sess.run(None, {'pixel_values': x})[0][0]
    disp = np.asarray(Image.fromarray(disp.astype(np.float32)).resize((W, H), Image.BILINEAR))
    print('depth model output', disp.shape, 'range', float(disp.min()), float(disp.max()))

    # ---------------- camera calibration (least squares)
    f = (1280 / 2) / math.tan(math.radians(HFOV_DEG / 2))
    cx, cy = 1280 / 2 - CROP[0], 684 / 2 - CROP[1]
    m = {k: to_crop(v) for k, v in MEAS.items()}

    def axes(pitch, roll):
        fwd = np.array([0, -math.sin(pitch), -math.cos(pitch)])
        up = np.array([0, math.cos(pitch), -math.sin(pitch)])
        right = np.array([1.0, 0, 0])
        cr, sr = math.cos(roll), math.sin(roll)                 # roll about the forward axis
        right2 = right * cr + up * sr
        up2 = up * cr - right * sr
        return right2, up2, fwd

    def project(P, h, pitch, roll):
        r, u, fw = axes(pitch, roll)
        d = np.asarray(P) - np.array([0, h, 0])
        z = d @ fw
        return np.array([cx + f * (d @ r) / z, cy - f * (d @ u) / z]), z

    def resid(q):
        h, pitch, roll, x1, z1, x2, z2 = q
        out = []
        for key, P, wgt in (('p1_base', (x1, 0, z1), 2.0), ('p1_top', (x1, PILLAR_H, z1), 1.0),
                            ('p2_base', (x2, 0, z2), 2.0), ('p2_top', (x2, PILLAR_H, z2), 1.0)):
            uv, _ = project(P, h, pitch, roll)
            out += list((uv - np.array(m[key])) * wgt)
        out.append((math.hypot(x1 - x2, z1 - z2) - P1P2_M) * 20)
        return out

    q0 = [1.4, math.radians(10), math.radians(-11), 1.5, -2.5, -10, -24]
    sol = least_squares(resid, q0, method='lm')
    h, pitch, roll, x1, z1, x2, z2 = sol.x
    reproj = {}
    for key, P in (('p1_base', (x1, 0, z1)), ('p1_top', (x1, PILLAR_H, z1)), ('p2_base', (x2, 0, z2)), ('p2_top', (x2, PILLAR_H, z2))):
        uv, _ = project(P, h, pitch, roll)
        reproj[key] = {'measured': list(map(float, m[key])), 'reprojected': [float(uv[0]), float(uv[1])], 'errorPx': float(np.hypot(*(uv - np.array(m[key]))))}
    print('camera h %.3f m pitch %.2f° roll %.2f°' % (h, math.degrees(pitch), math.degrees(roll)))
    print('P1 (%.2f, 0, %.2f)  P2 (%.2f, 0, %.2f)  |P1P2| %.2f m' % (x1, z1, x2, z2, math.hypot(x1 - x2, z1 - z2)))
    for k, v in reproj.items():
        print(f'  {k:8s} err {v["errorPx"]:.2f} px')

    # ---------------- metric depth fit: 1/z = a·disp + b on calibrated ground-plane pixels
    r, u, fw = axes(pitch, roll)
    ys, xs = np.mgrid[0:H, 0:W]
    dirs = (r[None, None] * ((xs - cx) / f)[..., None] + u[None, None] * (-(ys - cy) / f)[..., None] + fw[None, None])
    t = -h / dirs[..., 1]                                       # ray hits y = 0 when dir.y < 0
    zg = np.where(dirs[..., 1] < -1e-3, t, np.inf)               # z-depth along the optical axis (dirs have fw-component 1)
    mask = np.isfinite(zg) & (zg > 1.0) & (zg < 60)
    ox, oy = CROP[0], CROP[1]
    mask[max(0, 136 - oy):640 - oy, max(0, 1120 - ox):] = False  # Point 1 pillar region
    mask[REAL_DRONE[1] - oy:, REAL_DRONE[0] - ox:REAL_DRONE[2] - ox] = False
    hz = int(np.nanmin(np.where(mask, ys, np.nan))) if mask.any() else 0
    mask[: hz + 25] = False                                      # stay clear of the tree line / horizon
    sel = np.argwhere(mask)[:: 37]
    dd = disp[sel[:, 0], sel[:, 1]]; iz = 1.0 / zg[sel[:, 0], sel[:, 1]]
    fit = least_squares(lambda p: p[0] * dd + p[1] - iz, [1e-3, 0.0], loss='soft_l1', f_scale=0.02)
    a_, b_ = fit.x
    z_aff = 1.0 / np.maximum(a_ * disp + b_, 1.0 / Z_FAR)
    # monocular depth compresses far range → power-law correction z = c·z_aff^p, fitted on the ground pixels
    za = z_aff[sel[:, 0], sel[:, 1]]; zt = 1.0 / iz
    pw = least_squares(lambda q: np.log(q[0]) + q[1] * np.log(za) - np.log(zt), [1.0, 1.0], loss='soft_l1', f_scale=0.1).x
    z = np.clip(pw[0] * z_aff ** pw[1], 0.3, Z_FAR)
    # physical constraint: nothing visible lies beyond the point where its ray meets the ground; ground-like
    # pixels (within ±30 % of the ground-plane depth) snap onto the calibrated plane.
    below = np.isfinite(zg)
    ratio = np.where(below, z / np.where(below, zg, 1), 0)
    snap = below & (ratio > 0.55) & (ratio < 1.60)
    z = np.where(snap, zg, z)
    z = np.where(below, np.minimum(z, zg * 1.02), z)
    # standing objects (poles, shrubs, tree line) take the depth of the ground right beneath them, column by column;
    # pixels the model sees as much nearer than that ground (e.g. the top of the leaning near pole) keep their depth.
    sky = (z_aff > 0.6 * Z_FAR)
    for col in range(W):
        last = None
        for row in range(H - 1, -1, -1):
            if snap[row, col]:
                last = zg[row, col]
            elif sky[row, col]:
                z[row, col] = Z_FAR
            elif last is not None and z[row, col] >= 0.5 * last:
                z[row, col] = last
    # the two poles are vertical at calibrated positions: give their pixels exact geometric depth along the pole axis
    for key, hw0, hw1 in (('p1', 22, 25), ('p2', 3, 3)):
        P = (x1, z1) if key == 'p1' else (x2, z2)
        (tx, ty), (bx, by) = m[key + '_top'], m[key + '_base']
        _, ztop = project((P[0], PILLAR_H, P[1]), h, pitch, roll)
        _, zbase = project((P[0], 0, P[1]), h, pitch, roll)
        for row in range(int(ty) - 2, int(by) + 2):
            if row < 0 or row >= H: continue
            t_ = (row - ty) / (by - ty)
            cxp = tx + (bx - tx) * t_; hw = hw0 + (hw1 - hw0) * t_
            c0, c1 = max(0, int(cxp - hw)), min(W, int(cxp + hw) + 1)
            # every pixel inside the measured pole outline gets the pole's geometric depth
            z[row, c0:c1] = ztop + (zbase - ztop) * min(1, max(0, t_))
    z = np.clip(z, 0.3, Z_FAR)
    rel = np.abs(np.clip(pw[0] * za ** pw[1], 0.3, Z_FAR) - zt) / zt
    print('depth fit: affine a=%.5g b=%.5g, power c=%.4g p=%.4g on %d ground px; median rel err %.1f %%; %.0f %% of pixels snapped to ground' % (a_, b_, pw[0], pw[1], len(dd), 100 * np.median(rel), 100 * snap.mean()))
    at = lambda p: float(z[int(round(p[1])), int(round(p[0]))])
    _, zp1 = project((x1, 0, z1), h, pitch, roll); _, zp2 = project((x2, 0, z2), h, pitch, roll)
    print('depth at P1 base %.2f m (calibrated %.2f) · P2 base %.2f m (calibrated %.2f)' % (at(m['p1_base']), zp1, at(m['p2_base']), zp2))

    # save depth: 16-bit z (archival) + runtime RG-encoded 16-bit inverse-depth (exact through <canvas>)
    Image.fromarray(np.round(z / Z_FAR * 65535).astype(np.uint16)).save(os.path.join(OUT, 'depth.png'))
    inv = (1.0 / z - 1.0 / Z_FAR) / (1.0 / 0.3 - 1.0 / Z_FAR)
    q = np.round(np.clip(inv, 0, 1) * 65535).astype(np.uint32)
    rg = np.zeros((H, W, 3), np.uint8); rg[..., 0] = q >> 8; rg[..., 1] = q & 255
    Image.fromarray(rg).save(os.path.join(OUT, 'depth-rg.png'))

    calib = {
        'source': os.path.basename(SRC), 'sourceSize': list(orig.size), 'crop': list(CROP), 'size': [W, H],
        'camera': {'fPx': f, 'cx': cx, 'cy': cy, 'hfovDegOriginal': HFOV_DEG, 'height': h, 'pitchDeg': math.degrees(pitch), 'rollDeg': math.degrees(roll)},
        'assumed': {'pillarHeightM': PILLAR_H, 'p1p2DistanceM': P1P2_M},
        'p1': {'world': [x1, 0, z1], 'base': list(map(float, m['p1_base'])), 'top': list(map(float, m['p1_top']))},
        'p2': {'world': [x2, 0, z2], 'base': list(map(float, m['p2_base'])), 'top': list(map(float, m['p2_top']))},
        'reprojection': reproj,
        'depth': {'encoding': 'R*256+G = 65535*(1/z - 1/zFar)/(1/zNear - 1/zFar)', 'zNear': 0.3, 'zFar': Z_FAR, 'fitA': a_, 'fitB': b_, 'powC': float(pw[0]), 'powP': float(pw[1]),
                  'groundPixels': int(len(dd)), 'medianRelErr': float(np.median(rel))},
        'realDroneBox': [REAL_DRONE[0] - ox, REAL_DRONE[1] - oy, REAL_DRONE[2] - ox, REAL_DRONE[3] - oy],
    }
    with open(CALIB, 'w') as fh:
        json.dump(calib, fh, indent=2)
    print('wrote', CALIB)


if __name__ == '__main__':
    sys.exit(main())
