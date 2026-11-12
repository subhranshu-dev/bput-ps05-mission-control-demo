// Real test-site configuration — the single place for photo, calibration and site parameters.
// Photo set, depth map and calibration are produced OFFLINE by tools/prepare_site.py (see its header).
import calib from './site.calib.json';
import type { World } from './world';

const base = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/';
type V3 = [number, number, number];

export const SITE = {
  name: 'Test site',
  photo: {
    night: `${base}site/night.jpg`,
    day: `${base}site/day.jpg`, // graded from the night photo (no separate day photo exists)
    depth: `${base}site/depth-rg.png`, // 16-bit inverse depth packed in R/G (exact through <canvas>)
    width: calib.size[0],
    height: calib.size[1],
    source: calib.source,
    sourceSize: calib.sourceSize,
    crop: calib.crop,
  },
  calib,
  /** Estimates (UI marks them as such). Changing them requires re-running tools/prepare_site.py. */
  pillarHeightM: calib.assumed.pillarHeightM,
  p1p2DistanceM: calib.assumed.p1p2DistanceM,
  distanceIsEstimate: true,
  distanceM: calib.assumed.p1p2DistanceM,
  /** Mission parameters. */
  targetAltitudeM: 12,
  climbRateMps: 1.5,
  cameraHFovDeg: calib.camera.hfovDegOriginal,
  /** The drone model is ~0.6 m across (≈ the real X-frame); shown 1.2× so it reads clearly at mission distances. */
  droneDisplayScale: 1.2,
  /** Launch point relative to the Point 1 pole axis (world metres) so the drone never intersects the pole. */
  launchOffsetM: { x: -1.1, z: 0.15 },
  quality: 'auto' as 'auto' | 'high' | 'low',
  // engine frame (metres): Point 1 at the origin; Point 2 along the local route axis ("north" = −z)
  start: { x: 0, z: 0 },
  goal: { x: 0, z: -calib.assumed.p1p2DistanceM },
  bounds: { minX: -10, maxX: 10, minZ: -calib.assumed.p1p2DistanceM - 6, maxZ: 6 },
};
export type SiteConfig = typeof SITE;

/** Calibrated photo camera basis (world: y up; camera at (0, h, 0), yaw 0 looking −Z). */
export function photoCamera() {
  const c = calib.camera;
  const pitch = (c.pitchDeg * Math.PI) / 180, roll = (c.rollDeg * Math.PI) / 180;
  const fwd: V3 = [0, -Math.sin(pitch), -Math.cos(pitch)];
  const up0: V3 = [0, Math.cos(pitch), -Math.sin(pitch)];
  const cr = Math.cos(roll), sr = Math.sin(roll);
  const right: V3 = [cr, up0[1] * sr, up0[2] * sr];
  const up: V3 = [-sr + up0[0] * cr, up0[1] * cr, up0[2] * cr];
  return { pos: [0, c.height, 0] as V3, fwd, right, up, f: c.fPx, cx: c.cx, cy: c.cy, pitch, roll };
}

/** Projects a world point into prepared-photo pixels with the calibrated camera (null if behind). */
export function projectToPhoto(p: V3): { x: number; y: number } | null {
  const k = photoCamera();
  const d: V3 = [p[0] - k.pos[0], p[1] - k.pos[1], p[2] - k.pos[2]];
  const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const z = dot(d, k.fwd);
  if (z <= 0.01) return null;
  return { x: k.cx + (k.f * dot(d, k.right)) / z, y: k.cy - (k.f * dot(d, k.up)) / z };
}

/** World positions of the two real pillars (ground contact points) and the drone's launch point. */
export const P1W = calib.p1.world as V3;
export const P2W = calib.p2.world as V3;
export const LAUNCH: V3 = [P1W[0] + SITE.launchOffsetM.x, 0, P1W[2] + SITE.launchOffsetM.z];

/** The site "world": no synthetic obstacles and no synthetic point cloud. */
export function createSiteWorld(seed = 2205): World {
  return { seed, obstacles: [], cloud: { positions: new Float32Array(0), intensity: new Float32Array(0), count: 0 } };
}
