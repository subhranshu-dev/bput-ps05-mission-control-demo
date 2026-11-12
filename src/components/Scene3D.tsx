// Living 2.5D site scene: the real photo as a depth-displaced mesh (offline depth + calibrated camera),
// a procedural 3D drone, ground route, CSS2D labels with collision avoidance, cinematic camera director,
// day/night lighting and quality tiers. Reads the engine's state only — it never moves the aircraft.
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import type { Engine, Snapshot } from '../sim/engine';
import { LAUNCH, P1W, P2W, SITE, photoCamera } from '../sim/site';
import { buildDrone } from './drone3d';

export type CamPreset = 'AUTO' | 'WIDE' | 'FOLLOW' | 'ORBIT' | 'TACTICAL';
export type Quality = 'high' | 'low';
export type Mode = 'night' | 'day';
type Box = { x0: number; y0: number; x1: number; y1: number };

/** Live scene facts shared with the dashboard (toast placement) and tests. */
export const sceneInfo = {
  ready: false,
  quality: 'high' as Quality,
  qualityAuto: true,
  fps: 0,
  fpsHigh: 0,
  droneBox: null as Box | null,
  p2Box: null as Box | null,
  labels: {} as Record<string, Box>,
  preset: 'AUTO' as CamPreset,
  mode: 'night' as Mode,
  calib: { p1: NaN, p2: NaN },
  hover: false,
  focus: false,
};
if (import.meta.env.DEV) (window as unknown as { __aegisScene: typeof sceneInfo }).__aegisScene = sceneInfo;

const V = (a: number[]) => new THREE.Vector3(a[0], a[1], a[2]);
const hitBox = (a: Box, b: Box) => a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;
const grow = (b: Box, m: number): Box => ({ x0: b.x0 - m, y0: b.y0 - m, x1: b.x1 + m, y1: b.y1 + m });
const clamp = THREE.MathUtils.clamp;

interface Props {
  engine: Engine;
  snap: Snapshot;
  mode: Mode;
  preset: CamPreset;
  presetToken: number;
  qualityPref: 'auto' | 'high' | 'low';
  onQuality?: (q: Quality, auto: boolean) => void;
  onPreset?: (p: CamPreset) => void;
}

export default function Scene3D(props: Props) {
  const host = useRef<HTMLDivElement>(null);
  const live = useRef(props);
  live.current = props;
  const tokenRef = useRef({ preset: props.preset, token: props.presetToken });

  useEffect(() => {
    const el = host.current!;
    let disposed = false;
    const disposables: { dispose(): void }[] = [];
    const keep = <T extends { dispose(): void }>(x: T) => { disposables.push(x); return x; };

    // ---------------------------------------------------------------- renderer / overlays
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    } catch {
      el.innerHTML = '<div class="webgl-fail">WebGL is unavailable. Enable hardware acceleration to view the 3D site.</div>';
      return;
    }
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor('#06090f');
    el.appendChild(renderer.domElement);
    const labelR = new CSS2DRenderer();
    labelR.domElement.className = 'labels3d';
    el.appendChild(labelR.domElement);

    const scene = new THREE.Scene();
    // atmosphere colours sampled from the photos (night haze #c2cadf / grass #574d35; day haze #c8d7f6 / grass #7f7968)
    const fogNight = new THREE.Color('#8e97b2'), fogDay = new THREE.Color('#bccbea');
    scene.fog = new THREE.FogExp2(fogNight.clone(), 0.012);
    const camera = new THREE.PerspectiveCamera(50, 1, 0.05, 1200);
    camera.rotation.order = 'YXZ';

    // ---------------------------------------------------------------- photo mesh (depth-displaced)
    const W = SITE.photo.width, H = SITE.photo.height;
    const pc = photoCamera();
    const C0 = V(pc.pos), R0 = V(pc.right), U0 = V(pc.up), F0 = V(pc.fwd);
    const loader = new THREE.TextureLoader();
    const tex = (src: string) => { const t = keep(loader.load(src)); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; t.generateMipmaps = true; return t; };
    const tNight = tex(SITE.photo.night), tDay = tex(SITE.photo.day);
    const photoMat = keep(new THREE.ShaderMaterial({
      uniforms: {
        tNight: { value: tNight }, tDay: { value: tDay }, mixDay: { value: 0 },
        fogColor: { value: fogNight.clone() }, fogDensity: { value: 0.012 }, gain: { value: 1.0 },
      },
      vertexShader: `varying vec2 vUv; varying float vDist;
        void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.0); vDist = -mv.z; gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform sampler2D tNight; uniform sampler2D tDay; uniform float mixDay; uniform vec3 fogColor; uniform float fogDensity; uniform float gain;
        varying vec2 vUv; varying float vDist;
        void main(){
          vec3 c = mix(texture2D(tNight, vUv).rgb, texture2D(tDay, vUv).rgb, mixDay) * gain;
          float f = 1.0 - exp(-pow(max(vDist - 6.0, 0.0) * fogDensity, 2.0));
          float e = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
          float a = smoothstep(0.0, 0.07, e);                 // feather the photo border into the scene
          gl_FragColor = vec4(mix(c, fogColor, clamp(f, 0.0, 0.85)), a);
          #include <colorspace_fragment>
        }`,
      toneMapped: false,
      transparent: true,
    }));
    let depth: Float32Array | null = null;
    let photoMesh: THREE.Mesh | null = null;
    const sampleZ = (x: number, y: number) => {
      const xi = clamp(x, 0, W - 1), yi = clamp(y, 0, H - 1);
      const x0 = Math.floor(xi), y0 = Math.floor(yi), x1 = Math.min(W - 1, x0 + 1), y1 = Math.min(H - 1, y0 + 1);
      const fx = xi - x0, fy = yi - y0, d = depth!;
      const a = d[y0 * W + x0], b = d[y0 * W + x1], c = d[y1 * W + x0], e = d[y1 * W + x1];
      return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + e * fx) * fy;
    };
    const buildPhotoMesh = (nx: number) => {
      if (!depth) return;
      if (photoMesh) { scene.remove(photoMesh); photoMesh.geometry.dispose(); }
      const ny = Math.round((nx * H) / W);
      const pos = new Float32Array((nx + 1) * (ny + 1) * 3), uv = new Float32Array((nx + 1) * (ny + 1) * 2), zs = new Float32Array((nx + 1) * (ny + 1));
      for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) {
        const k = j * (nx + 1) + i, px = (i / nx) * W, py = (j / ny) * H;
        const z = sampleZ(px, py); zs[k] = z;
        const ax = (px - pc.cx) / pc.f, ay = -(py - pc.cy) / pc.f;
        pos[k * 3] = C0.x + (R0.x * ax + U0.x * ay + F0.x) * z;
        pos[k * 3 + 1] = C0.y + (R0.y * ax + U0.y * ay + F0.y) * z;
        pos[k * 3 + 2] = C0.z + (R0.z * ax + U0.z * ay + F0.z) * z;
        uv[k * 2] = i / nx; uv[k * 2 + 1] = 1 - j / ny;
      }
      const idx: number[] = [];
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
        const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, d = c + 1;
        const zz = [zs[a], zs[b], zs[c], zs[d]];
        if (Math.max(...zz) / Math.min(...zz) > 2.2) continue; // depth discontinuity
        // drop triangles seen almost edge-on from the photo camera (stretched "spikes" when the view moves)
        for (const [p, q, r] of [[a, c, b], [b, c, d]]) {
          const ax = pos[q * 3] - pos[p * 3], ay = pos[q * 3 + 1] - pos[p * 3 + 1], az = pos[q * 3 + 2] - pos[p * 3 + 2];
          const bx = pos[r * 3] - pos[p * 3], by = pos[r * 3 + 1] - pos[p * 3 + 1], bz = pos[r * 3 + 2] - pos[p * 3 + 2];
          const nx_ = ay * bz - az * by, ny_ = az * bx - ax * bz, nz_ = ax * by - ay * bx;
          const mx = (pos[p * 3] + pos[q * 3] + pos[r * 3]) / 3 - C0.x, my = (pos[p * 3 + 1] + pos[q * 3 + 1] + pos[r * 3 + 1]) / 3 - C0.y, mz = (pos[p * 3 + 2] + pos[q * 3 + 2] + pos[r * 3 + 2]) / 3 - C0.z;
          const cos = Math.abs(nx_ * mx + ny_ * my + nz_ * mz) / (Math.hypot(nx_, ny_, nz_) * Math.hypot(mx, my, mz) + 1e-9);
          if (cos > 0.09) idx.push(p, q, r);
        }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
      g.setIndex(idx);
      photoMesh = new THREE.Mesh(g, photoMat);
      photoMesh.frustumCulled = false;
      scene.add(photoMesh);
    };
    const depthImg = new Image();
    depthImg.onload = () => {
      if (disposed) return;
      const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
      const cx = cv.getContext('2d', { willReadFrequently: true })!;
      cx.drawImage(depthImg, 0, 0);
      const px = cx.getImageData(0, 0, W, H).data;
      const zn = SITE.calib.depth.zNear, zf = SITE.calib.depth.zFar;
      depth = new Float32Array(W * H);
      for (let i = 0; i < W * H; i++) {
        const q = (px[i * 4] * 256 + px[i * 4 + 1]) / 65535;
        depth[i] = 1 / (q * (1 / zn - 1 / zf) + 1 / zf);
      }
      buildPhotoMesh(quality === 'high' ? 512 : 256);
      sceneInfo.ready = true;
    };
    depthImg.src = SITE.photo.depth;

    // ---------------------------------------------------------------- atmosphere: sky dome + ground beyond the photo
    const skyMat = keep(new THREE.ShaderMaterial({
      uniforms: { top: { value: new THREE.Color('#3b4459') }, horizon: { value: new THREE.Color('#aab3cc') } },
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 top; uniform vec3 horizon; varying vec3 vP; void main(){ float h = clamp(vP.y * 1.6, 0.0, 1.0); h = h * h; gl_FragColor = vec4(mix(horizon, top, h), 1.0); \n#include <colorspace_fragment>\n }',
      side: THREE.BackSide, depthWrite: false, toneMapped: false,
    }));
    const sky = new THREE.Mesh(keep(new THREE.SphereGeometry(900, 32, 16)), skyMat);
    scene.add(sky);
    const groundMat = keep(new THREE.MeshBasicMaterial({ color: '#4a4230' }));
    const ground = new THREE.Mesh(keep(new THREE.PlaneGeometry(1600, 1600)), groundMat);
    ground.rotation.x = -Math.PI / 2; ground.position.y = -0.06; ground.receiveShadow = false;
    scene.add(ground);

    // ---------------------------------------------------------------- lights
    const hemi = new THREE.HemisphereLight('#7f95c8', '#1b2014', 0.55); scene.add(hemi);
    const key = new THREE.DirectionalLight('#a9c1ff', 1.4);
    key.position.set(LAUNCH[0] + 8, 22, LAUNCH[2] + 6); key.target.position.set(LAUNCH[0], 0, LAUNCH[2]);
    key.castShadow = true; key.shadow.mapSize.set(2048, 2048);
    const sc = key.shadow.camera; sc.left = -6; sc.right = 6; sc.top = 6; sc.bottom = -6; sc.near = 1; sc.far = 60;
    key.shadow.bias = -0.0005;
    scene.add(key, key.target);
    const flood = new THREE.DirectionalLight('#ffbe7a', 0.9); flood.position.set(-30, 18, -40); scene.add(flood);

    // ---------------------------------------------------------------- real-site anchors, route
    const P1 = V(P1W), P2 = V(P2W), L = V(LAUNCH);
    const routeDir = new THREE.Vector3(P2.x - L.x, 0, P2.z - L.z).normalize();
    const routePerp = new THREE.Vector3(-routeDir.z, 0, routeDir.x);
    const ring = (at: THREE.Vector3, r: number, color: string) => {
      const m = new THREE.Mesh(keep(new THREE.RingGeometry(r * 0.82, r, 48)), keep(new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false, toneMapped: false })));
      m.rotation.x = -Math.PI / 2; m.position.set(at.x, 0.03, at.z); m.renderOrder = 3; scene.add(m); return m;
    };
    ring(P1, 0.45, '#38d6f5');
    ring(P2, 0.9, '#fbbf24');
    const lineMats: LineMaterial[] = [];
    const routePts: number[] = [];
    for (let i = 0; i <= 40; i++) { const t = i / 40; routePts.push(P1.x + (P2.x - P1.x) * t, 0.05, P1.z + (P2.z - P1.z) * t); }
    const mkLine = (width: number, color: string, opacity: number, dashed: boolean) => {
      const g = keep(new LineGeometry()); g.setPositions(routePts);
      const m = keep(new LineMaterial({ color: new THREE.Color(color).getHex(), linewidth: width, transparent: true, opacity, dashed, dashSize: 0.9, gapSize: 0.6, depthWrite: false }));
      m.toneMapped = false; lineMats.push(m);
      const l = new Line2(g, m); l.computeLineDistances(); l.renderOrder = 2; scene.add(l); return l;
    };
    mkLine(9, '#38d6f5', 0.18, false); // glow
    mkLine(3, '#7fe8ff', 0.95, true);

    // ---------------------------------------------------------------- drone rig, shadow, stem, dust
    const rig = buildDrone(SITE.droneDisplayScale);
    scene.add(rig.group);
    const blobTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d')!; const r = g.createRadialGradient(64, 64, 0, 64, 64, 64); r.addColorStop(0, 'rgba(0,0,0,0.85)'); r.addColorStop(0.5, 'rgba(0,0,0,0.45)'); r.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = r; g.fillRect(0, 0, 128, 128); return keep(new THREE.CanvasTexture(c)); })();
    const blob = new THREE.Mesh(keep(new THREE.PlaneGeometry(1, 1)), keep(new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false })));
    blob.rotation.x = -Math.PI / 2; blob.renderOrder = 1; scene.add(blob);
    const shadowCatcher = new THREE.Mesh(keep(new THREE.PlaneGeometry(14, 14)), keep(new THREE.ShadowMaterial({ opacity: 0.45 })));
    shadowCatcher.rotation.x = -Math.PI / 2; shadowCatcher.position.set(L.x, 0.012, L.z); shadowCatcher.receiveShadow = true; scene.add(shadowCatcher);
    const stemGeo = keep(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]));
    const stem = new THREE.Line(stemGeo, keep(new THREE.LineDashedMaterial({ color: '#e8f6ff', dashSize: 0.18, gapSize: 0.12, transparent: true, opacity: 0.85, toneMapped: false })));
    stem.frustumCulled = false; scene.add(stem);
    const DUST = 70;
    const dustPos = new Float32Array(DUST * 3), dustVel = new Float32Array(DUST * 3);
    const dustGeo = keep(new THREE.BufferGeometry()); dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = keep(new THREE.PointsMaterial({ color: '#d9d2bd', size: 0.05, transparent: true, opacity: 0, depthWrite: false }));
    const dust = new THREE.Points(dustGeo, dustMat); dust.frustumCulled = false; scene.add(dust);
    let dustT = -1;
    const fireDust = () => {
      dustT = 0;
      for (let i = 0; i < DUST; i++) {
        const a = Math.random() * Math.PI * 2, s = 0.8 + Math.random() * 1.6;
        dustPos.set([L.x + Math.cos(a) * 0.25, 0.03 + Math.random() * 0.05, L.z + Math.sin(a) * 0.25], i * 3);
        dustVel.set([Math.cos(a) * s, 0.15 + Math.random() * 0.35, Math.sin(a) * s], i * 3);
      }
      dustGeo.attributes.position.needsUpdate = true;
    };

    // ---------------------------------------------------------------- composer (HIGH)
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.7, 0.35, 0.82);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());

    // ---------------------------------------------------------------- labels (CSS2D + collision avoidance)
    type Lab = { id: string; obj: CSS2DObject; box: HTMLDivElement; svg: SVGSVGElement; line: SVGLineElement; w: number; h: number; text: string; cands: [number, number][]; anchor: THREE.Vector3; visible: boolean };
    const labels: Record<string, Lab> = {};
    const mkLabel = (id: string, cls: string, cands: [number, number][]) => {
      const wrap = document.createElement('div'); wrap.className = 'l3-wrap';
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('class', 'l3-leader');
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line'); svg.appendChild(line);
      const box = document.createElement('div'); box.className = `l3 ${cls}`; box.dataset.ov = `label-${id}`;
      wrap.append(svg, box);
      const obj = new CSS2DObject(wrap); scene.add(obj);
      labels[id] = { id, obj, box, svg, line, w: 0, h: 0, text: '', cands, anchor: new THREE.Vector3(), visible: true };
      return labels[id];
    };
    const ring8 = (w: number, near: number, far: number): [number, number][] => [
      [near, -64], [-w - near, -64], [near, 18], [-w - near, 18], [near, -118], [-w - near, -118], [-w / 2, -110], [-w / 2, 40],
      [far, -64], [-w - far, -64], [far, 18], [-w - far, 18], [-w / 2, -170], [-w / 2, 96], [far, -150], [-w - far, -150],
    ];
    mkLabel('p2', 'l3-p2', ring8(220, 24, 120));
    mkLabel('p1', 'l3-p1', ring8(210, 28, 140));
    mkLabel('drone', 'l3-drone', [[-262, -30], [36, -30], [-262, -84], [36, -84], [-262, 28], [36, 28], [-120, -110], [-120, 54]]);
    mkLabel('alt', 'l3-alt', [[12, -11], [-76, -11], [12, 14], [-76, 14]]);
    mkLabel('route', 'l3-route', [[-100, 14], [-100, -40], [20, 14], [-220, 14], [20, -40], [-100, 60], [-100, -86], [60, 50], [-320, 14]]);
    const callout = mkLabel('callout', 'l3-callout', [[40, -120], [-300, -120], [40, 20], [-300, 20]]);
    callout.visible = false;
    const setText = (lab: Lab, html: string) => { if (lab.text !== html) { lab.box.innerHTML = html; lab.text = html; lab.w = lab.box.offsetWidth; lab.h = lab.box.offsetHeight; } };

    // ---------------------------------------------------------------- camera director
    let quality: Quality = live.current.qualityPref === 'low' ? 'low' : 'high';
    let qualityAuto = live.current.qualityPref === 'auto';
    const camPos = new THREE.Vector3(), camTgt = new THREE.Vector3(); let camFov = 50, camInit = false;
    const user = { yaw: 0, pitch: 0, zoom: 1, dragging: false, moved: 0, lastX: 0, lastY: 0, idleUntil: 0, focus: false };
    let presetStart = performance.now();
    const fitDistance = (pts: THREE.Vector3[], center: THREE.Vector3, fovV: number, aspect: number) => {
      let r = 0; for (const p of pts) r = Math.max(r, p.distanceTo(center));
      const fovH = 2 * Math.atan(Math.tan((fovV * Math.PI) / 360) * aspect);
      return (r + 0.6) / Math.sin(Math.min((fovV * Math.PI) / 180, fovH) / 2);
    };
    const baseYaw = Math.atan2(C0.x - L.x, C0.z - L.z); // look roughly along the photo direction → least parallax
    const framePose = (pts: THREE.Vector3[], yawDeg: number, elevDeg: number, fov: number, distMul = 1) => {
      const center = new THREE.Vector3(); pts.forEach((p) => center.add(p)); center.multiplyScalar(1 / pts.length);
      const yaw = baseYaw + THREE.MathUtils.degToRad(yawDeg + user.yaw), el = THREE.MathUtils.degToRad(clamp(elevDeg + user.pitch, 0, 70));
      const dir = new THREE.Vector3(Math.sin(yaw) * Math.cos(el), Math.sin(el), Math.cos(yaw) * Math.cos(el));
      const dist = fitDistance(pts, center, fov, camera.aspect) * distMul * user.zoom;
      return { pos: center.clone().addScaledVector(dir, dist), tgt: center, fov };
    };
    const levelFwd = new THREE.Vector3(F0.x, F0.y, F0.z).normalize();
    /** The photo-true viewpoint (horizon levelled): pure rotation of the original camera — no parallax at all. */
    const photoPose = (push: number, fov: number, lookAt?: THREE.Vector3) => {
      const back = new THREE.Vector3(-levelFwd.x, 0, -levelFwd.z).normalize();
      const pos = C0.clone().addScaledVector(back, push);
      return { pos, tgt: lookAt ?? C0.clone().add(levelFwd), fov };
    };
    const lerpPose = (a: { pos: THREE.Vector3; tgt: THREE.Vector3; fov: number }, b: { pos: THREE.Vector3; tgt: THREE.Vector3; fov: number }, t: number) =>
      ({ pos: a.pos.clone().lerp(b.pos, t), tgt: a.tgt.clone().lerp(b.tgt, t), fov: a.fov + (b.fov - a.fov) * t });
    /**
     * Smallest pull-back along the photo's own sightline (through the launch point) at which both the ground anchor and
     * the drone fit inside the lens — keeps the camera as close to the photo viewpoint as possible (least parallax).
     */
    const toCamH = new THREE.Vector3(C0.x - L.x, 0, C0.z - L.z); const baseD = toCamH.length(); toCamH.normalize();
    const craneFrame = (alt: number, yawDeg: number, fov: number, extra = 0, includeP2 = false) => {
      // keep the drone and the ground anchor inside the band not covered by the top UI strip (~80 px) and the status bar (~80 px)
      const vh = el.clientHeight || 600, usable = Math.max(0.45, 1 - 160 / vh);
      const hc = C0.y + 0.4, top = Math.max(1.8, alt + 1.0), fr = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(fov) / 2) * usable) * 0.94;
      let D = baseD;
      for (; D < 60; D += 0.25) {
        const span = Math.atan((top - hc) / D) - Math.atan(-hc / D);
        if (span <= fr) break;
      }
      D += extra;
      const yaw = THREE.MathUtils.degToRad(yawDeg + user.yaw);
      const dir = toCamH.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
      const pos = L.clone().addScaledVector(dir, D * user.zoom); pos.y = hc + user.pitch * 0.15;
      const mid = (Math.atan((top - pos.y) / D) + Math.atan(-pos.y / D)) / 2;
      let look = dir.clone().negate();
      if (includeP2) { const toP2 = new THREE.Vector3(P2.x - pos.x, 0, P2.z - pos.z).normalize(); look = look.add(toP2).normalize(); }
      const tgt = pos.clone().addScaledVector(look, Math.cos(mid) * 10).add(new THREE.Vector3(0, Math.sin(mid) * 10, 0));
      return { pos, tgt, fov };
    };
    const resolvePose = (dronePos: THREE.Vector3, alt: number, state: string, now: number) => {
      const p = live.current.preset;
      const droneC = dronePos.clone().add(new THREE.Vector3(0, 0.2, 0));
      const groundL = L.clone(), up2 = L.clone().add(new THREE.Vector3(0, Math.max(1.8, alt + 0.7), 0));
      if (user.focus) return framePose([droneC.clone().add(new THREE.Vector3(0, 0.5, 0)), droneC.clone().add(new THREE.Vector3(0, -0.5, 0))], -8, 6, 40, 1.4);
      if (p === 'WIDE') return craneFrame(alt, -6, 72, 2.5, true);
      if (p === 'TACTICAL') return framePose([groundL, up2, P2, P1], -10, 52, 56);
      if (p === 'FOLLOW') return craneFrame(alt, -4, 66);
      if (p === 'ORBIT') { const a = Math.sin(((now - presetStart) / 1000) * 0.12) * 24; return craneFrame(alt, a, 68, 0.8); }
      // AUTO director
      const tIn = (now - presetStart) / 1000;
      const near = photoPose(0, 44, groundL.clone().add(new THREE.Vector3(0, 0.6, 0)).lerp(C0.clone().add(levelFwd.clone().multiplyScalar(10)), 0.55));
      if (state === 'STANDBY') return lerpPose(photoPose(1.6, 46), near, Math.min(1, tIn / 16)); // slow push-in
      if (state === 'COUNTDOWN') return lerpPose(near, photoPose(-0.6, 40, groundL.clone().add(new THREE.Vector3(0, 0.6, 0))), Math.min(1, tIn / 5)); // dolly toward P1
      const crane = craneFrame(alt, -4, 66);
      if (state === 'TAKEOFF') return lerpPose(near, crane, THREE.MathUtils.smoothstep(alt, 0.3, 4)); // crane up with the drone
      const a = Math.sin(tIn * 0.1) * 18;
      return craneFrame(alt, a, 66, 0.5); // hold: slow cinematic orbit around the drone column
    };
    const clampCam = (p: THREE.Vector3) => { p.x = clamp(p.x, -30, 30); p.y = clamp(p.y, 0.8, 45); p.z = clamp(p.z, -10, 55); return p; };

    // interaction: drag = orbit (clamped), wheel = zoom (clamped), click = focus drone, double-click = reset
    const cv = renderer.domElement;
    const raycaster = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    const droneWorldBox = new THREE.Box3();
    let hover = false, pointerIn = false;
    const onDown = (e: PointerEvent) => { user.dragging = true; user.moved = 0; user.lastX = e.clientX; user.lastY = e.clientY; cv.setPointerCapture(e.pointerId); };
    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      if (user.dragging) {
        const dx = e.clientX - user.lastX, dy = e.clientY - user.lastY; user.lastX = e.clientX; user.lastY = e.clientY;
        user.moved += Math.abs(dx) + Math.abs(dy);
        if (user.moved > 4) { user.yaw = clamp(user.yaw - dx * 0.15, -38, 38); user.pitch = clamp(user.pitch + dy * 0.12, -10, 30); user.idleUntil = performance.now() + 8000; }
      }
      ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      pointerIn = true;
    };
    const onLeave = () => { pointerIn = false; hover = false; };
    const onUp = (e: PointerEvent) => {
      user.dragging = false; try { cv.releasePointerCapture(e.pointerId); } catch { /* ignore */ }
      if (user.moved <= 4 && hover) { user.focus = true; user.idleUntil = performance.now() + 8000; }
    };
    const onWheel = (e: WheelEvent) => { e.preventDefault(); user.zoom = clamp(user.zoom * (e.deltaY > 0 ? 1.08 : 1 / 1.08), 0.6, 1.5); user.idleUntil = performance.now() + 8000; };
    const onDbl = () => { user.yaw = 0; user.pitch = 0; user.zoom = 1; user.focus = false; user.idleUntil = 0; live.current.onPreset?.('AUTO'); presetStart = performance.now(); };
    cv.addEventListener('pointerdown', onDown); cv.addEventListener('pointermove', onMove); cv.addEventListener('pointerup', onUp);
    cv.addEventListener('wheel', onWheel, { passive: false }); cv.addEventListener('dblclick', onDbl); cv.addEventListener('pointerleave', onLeave);

    // ---------------------------------------------------------------- quality
    const applyQuality = (q: Quality) => {
      quality = q;
      renderer.shadowMap.enabled = q === 'high';
      key.castShadow = q === 'high';
      shadowCatcher.visible = q === 'high';
      rig.group.traverse((o) => { (o as THREE.Mesh).castShadow = q === 'high'; });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, q === 'high' ? 1.75 : 1));
      if (depth) buildPhotoMesh(q === 'high' ? 512 : 256);
      resize();
      sceneInfo.quality = q; sceneInfo.qualityAuto = qualityAuto;
      live.current.onQuality?.(q, qualityAuto);
      renderer.shadowMap.needsUpdate = true;
      scene.traverse((o) => { const m = (o as THREE.Mesh).material as THREE.Material | undefined; if (m) m.needsUpdate = true; });
    };
    const resize = () => {
      const w = el.clientWidth || 1, h = el.clientHeight || 1;
      renderer.setSize(w, h); labelR.setSize(w, h); composer.setSize(w, h);
      bloom.setSize(w, h);
      camera.aspect = w / h; camera.updateProjectionMatrix();
      lineMats.forEach((m) => m.resolution.set(w, h));
    };
    const ro = new ResizeObserver(resize); ro.observe(el);
    applyQuality(quality);

    // ---------------------------------------------------------------- frame loop (driven by the engine's single clock)
    let modeMix = live.current.mode === 'day' ? 1 : 0;
    let fpsAcc = 0, fpsN = 0, fpsWindowStart = performance.now(), warm = 0, slow = 0;
    let lastState = '';
    let sceneT = 0; // scene's own animation clock (hover drift keeps going during hold; stops when paused)
    const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3();
    const project = (p: THREE.Vector3) => { tmp2.copy(p).project(camera); const w = el.clientWidth, h = el.clientHeight; return { x: (tmp2.x * 0.5 + 0.5) * w, y: (-tmp2.y * 0.5 + 0.5) * h, z: tmp2.z }; };
    const boxOf = (pts: THREE.Vector3[]): Box => { const ps = pts.map(project); return { x0: Math.min(...ps.map((q) => q.x)), y0: Math.min(...ps.map((q) => q.y)), x1: Math.max(...ps.map((q) => q.x)), y1: Math.max(...ps.map((q) => q.y)) }; };

    const off = live.current.engine.onFrame((dtRaw) => {
      if (disposed || document.hidden) return;
      const dt = Math.min(dtRaw, 0.1);
      const { engine, snap, mode } = live.current;
      const now = performance.now();
      // preset button pressed
      if (tokenRef.current.token !== live.current.presetToken || tokenRef.current.preset !== live.current.preset) {
        tokenRef.current = { token: live.current.presetToken, preset: live.current.preset };
        user.yaw = 0; user.pitch = 0; user.zoom = 1; user.focus = false; user.idleUntil = 0; presetStart = now;
      }
      if (live.current.qualityPref !== 'auto' && live.current.qualityPref !== quality) { qualityAuto = false; applyQuality(live.current.qualityPref); }
      if (live.current.qualityPref === 'auto' && !qualityAuto) { qualityAuto = true; warm = 0; slow = 0; fpsWindowStart = now; fpsAcc = 0; fpsN = 0; if (quality !== 'high') applyQuality('high'); }

      // day / night crossfade (1 s)
      const want = mode === 'day' ? 1 : 0;
      modeMix += clamp(want - modeMix, -dt, dt);
      const k = modeMix;
      photoMat.uniforms.mixDay.value = k;
      (scene.fog as THREE.FogExp2).color.copy(fogNight).lerp(fogDay, k);
      (scene.fog as THREE.FogExp2).density = THREE.MathUtils.lerp(0.010, 0.006, k);
      photoMat.uniforms.fogColor.value.copy((scene.fog as THREE.FogExp2).color);
      photoMat.uniforms.fogDensity.value = (scene.fog as THREE.FogExp2).density;
      skyMat.uniforms.top.value.set('#3b4459').lerp(new THREE.Color('#7f9fd2'), k);
      skyMat.uniforms.horizon.value.set('#aab3cc').lerp(new THREE.Color('#c8d7f6'), k);
      groundMat.color.set('#4a4230').lerp(new THREE.Color('#77715f'), k);
      hemi.intensity = THREE.MathUtils.lerp(0.55, 1.1, k);
      hemi.color.set('#7f95c8').lerp(new THREE.Color('#dfeaff'), k);
      key.color.set('#a9c1ff').lerp(new THREE.Color('#fff1d6'), k);
      key.intensity = THREE.MathUtils.lerp(1.3, 2.6, k);
      flood.intensity = THREE.MathUtils.lerp(0.9, 0.0, k);
      bloom.strength = THREE.MathUtils.lerp(0.75, 0.0, k);
      el.dataset.mode = k > 0.5 ? 'day' : 'night';
      sceneInfo.mode = k > 0.5 ? 'day' : 'night';

      // aircraft state (engine frame → world)
      const st = engine.state === 'PAUSED' ? engine.resumeTo ?? 'STANDBY' : engine.state;
      const ep = engine.pos;
      const alt = ep.y;
      const dronePos = tmp.copy(L).addScaledVector(routeDir, -ep.z).addScaledVector(routePerp, ep.x);
      dronePos.y = alt;
      const flying = alt > 0.02;
      const held = engine.state === 'MANUAL_HOLD';
      if (st === 'TAKEOFF' && lastState !== 'TAKEOFF' && quality === 'high') fireDust();
      lastState = st;
      // visual-only motion (world position is the engine's): hover drift ±2 cm, micro wobble, climb pitch
      if (engine.state !== 'PAUSED') sceneT += dt;
      const tt = sceneT;
      rig.group.position.copy(dronePos).add(new THREE.Vector3(0, 0.09 * SITE.droneDisplayScale, 0));
      rig.group.rotation.set(0, Math.atan2(-routeDir.x, -routeDir.z) - (engine.heading || 0), 0);
      const hoverAmp = flying ? 0.02 : 0;
      rig.body.position.set(Math.sin(tt * 0.7) * hoverAmp * 0.6 / SITE.droneDisplayScale, Math.sin(tt * 1.3) * hoverAmp / SITE.droneDisplayScale, Math.cos(tt * 0.9) * hoverAmp * 0.6 / SITE.droneDisplayScale);
      const climbPitch = st === 'TAKEOFF' ? -0.05 * clamp(engine.vel.y / 1.5, 0, 1) : 0;
      rig.body.rotation.set(climbPitch + (flying ? Math.sin(tt * 1.7) * 0.012 : 0), 0, flying ? Math.sin(tt * 1.3 + 1) * 0.012 : 0);
      const rpmTarget = st === 'STANDBY' ? 0.12 : st === 'COUNTDOWN' ? 0.25 + 0.5 * (1 - engine.countdown / 5) : flying ? (held ? 0.9 : 1) : 0.12;
      const rpm = engine.state === 'PAUSED' ? 0 : rpmTarget;
      rig.update(engine.state === 'PAUSED' ? 0 : dt, rpm, tt, { strobe: st !== 'STANDBY' && st !== 'WELCOME', ledGain: THREE.MathUtils.lerp(1, 0.35, k) });
      rig.group.updateMatrixWorld();
      droneWorldBox.copy(rig.bounds).applyMatrix4(rig.group.matrixWorld);
      // contact shadow + altitude stem
      const s = clamp(1 - alt / 16, 0.25, 1);
      blob.position.set(L.x, 0.015, L.z); blob.scale.setScalar(0.95 * SITE.droneDisplayScale * (0.6 + 0.4 * s) * 0.6);
      (blob.material as THREE.MeshBasicMaterial).opacity = (0.25 + 0.6 * s) * (quality === 'high' ? 0.8 : 1);
      stem.visible = flying;
      stemGeo.setFromPoints([new THREE.Vector3(L.x, 0.02, L.z), new THREE.Vector3(dronePos.x, Math.max(0.02, alt - 0.05), dronePos.z)]);
      stem.computeLineDistances();
      // dust ring
      if (dustT >= 0) {
        dustT += dt;
        for (let i = 0; i < DUST; i++) { for (let a = 0; a < 3; a++) dustPos[i * 3 + a] += dustVel[i * 3 + a] * dt; dustVel[i * 3 + 1] -= 0.4 * dt; dustVel[i * 3] *= 0.97; dustVel[i * 3 + 2] *= 0.97; }
        dustGeo.attributes.position.needsUpdate = true;
        dustMat.opacity = clamp(0.7 * (1 - dustT / 2.2), 0, 0.7);
        if (dustT > 2.3) { dustT = -1; dustMat.opacity = 0; }
      }
      if (engine.state === 'STANDBY' && dustT >= 0) { dustT = -1; dustMat.opacity = 0; }

      // camera director (damped)
      if (user.idleUntil && now > user.idleUntil && !user.dragging) { user.idleUntil = 0; user.focus = false; }
      if (!user.idleUntil && !user.dragging) { user.yaw *= 1 - Math.min(1, dt * 0.8); user.pitch *= 1 - Math.min(1, dt * 0.8); user.zoom += (1 - user.zoom) * Math.min(1, dt * 0.8); }
      const pose = resolvePose(dronePos, alt, st, now);
      clampCam(pose.pos);
      if (!camInit) { camPos.copy(pose.pos); camTgt.copy(pose.tgt); camFov = pose.fov; camInit = true; }
      const kk = 1 - Math.exp(-dt * 1.6);
      camPos.lerp(pose.pos, kk); camTgt.lerp(pose.tgt, kk); camFov += (pose.fov - camFov) * kk;
      camera.position.copy(camPos); camera.lookAt(camTgt);
      if (Math.abs(camera.fov - camFov) > 0.01) { camera.fov = camFov; camera.updateProjectionMatrix(); }
      camera.updateMatrixWorld();

      // hover: re-tested every frame (the drone or camera may move under a still pointer)
      if (pointerIn) { raycaster.setFromCamera(ndc, camera); hover = raycaster.ray.intersectsBox(droneWorldBox); cv.style.cursor = hover ? 'pointer' : user.dragging ? 'grabbing' : 'grab'; } else hover = false;
      // labels: content from the same snapshot as the panels
      const est = SITE.distanceIsEstimate ? ' <em>est.</em>' : '';
      const mdl = st === 'MANUAL_HOLD' ? 'POSITION HOLD' : st === 'STANDBY' ? 'ON PAD' : st.replace('_', ' ');
      setText(labels.p1, `<b>POINT 1 — START</b><span>Launch position · AEGIS-1</span>`);
      setText(labels.p2, `<b>POINT 2 — DESTINATION</b><span>${SITE.distanceM.toFixed(1)} m from P1${est}</span>`);
      setText(labels.drone, `<b>AEGIS-1 · ${mdl}</b><span>ALT ${snap.pos.z.toFixed(1)} m · HDG ${String(snap.heading).padStart(3, '0')}° · GS ${snap.groundSpeed.toFixed(1)} m/s</span>`);
      setText(labels.alt, `${snap.pos.z.toFixed(1)} m`);
      setText(labels.route, `Planned route · route not flown · ${SITE.distanceM.toFixed(1)} m${est}`);
      setText(callout, `<b>AEGIS-1 · X-frame quad</b><span>ALT ${snap.pos.z.toFixed(1)} m · HDG ${String(snap.heading).padStart(3, '0')}°</span><span>Battery 92 % <em>synthetic</em> · ${mdl}</span>`);
      labels.p1.anchor.set(P1.x, SITE.pillarHeightM + 0.05, P1.z);
      labels.p2.anchor.set(P2.x, SITE.pillarHeightM, P2.z);
      labels.drone.anchor.copy(dronePos).add(new THREE.Vector3(0, 0.2, 0));
      labels.alt.anchor.set(L.x, alt * 0.5, L.z); labels.alt.visible = flying && alt > 1;
      labels.route.anchor.set(P1.x + (P2.x - P1.x) * 0.55, 0.05, P1.z + (P2.z - P1.z) * 0.55);
      callout.anchor.copy(dronePos); callout.visible = hover || user.focus;
      const vw = el.clientWidth, vh = el.clientHeight;
      const dBox = grow(boxOf([0, 1, 2, 3, 4, 5, 6, 7].map((i) => new THREE.Vector3(i & 1 ? droneWorldBox.max.x : droneWorldBox.min.x, i & 2 ? droneWorldBox.max.y : droneWorldBox.min.y, i & 4 ? droneWorldBox.max.z : droneWorldBox.min.z))), 4);
      const p2Box = grow(boxOf([P2.clone(), P2.clone().add(new THREE.Vector3(0, SITE.pillarHeightM, 0)), P2.clone().add(new THREE.Vector3(0.9, 0, 0)), P2.clone().add(new THREE.Vector3(-0.9, 0, 0))]), 6);
      const p1Box = grow(boxOf([P1.clone(), P1.clone().add(new THREE.Vector3(0, SITE.pillarHeightM, 0))]), 10);
      const hostR = el.getBoundingClientRect();
      const uiBoxes: Box[] = [...(el.parentElement?.querySelectorAll('.vp-cams, .vp-tag, .hold-chip, .alt-tape, .vp-hud') ?? [])].map((n) => { const r = n.getBoundingClientRect(); return { x0: r.left - hostR.left, y0: r.top - hostR.top, x1: r.right - hostR.left, y1: r.bottom - hostR.top }; });
      const obstacles: Box[] = [dBox, p2Box, p1Box, ...uiBoxes];
      const taken: Box[] = [];
      const placed: Record<string, Box> = {};
      for (const id of ['callout', 'alt', 'drone', 'p2', 'p1', 'route']) {
        const lab = labels[id];
        const a = project(lab.anchor);
        const show = lab.visible && a.z < 1 && a.x > -40 && a.x < vw + 40 && a.y > -40 && a.y < vh + 40;
        lab.obj.position.copy(lab.anchor);
        lab.obj.visible = show; // CSS2DRenderer derives the element's display from the object's visibility
        if (!show) continue;
        // real on-screen size (the element is only attached once CSS2DRenderer has rendered it visible once)
        if (lab.box.isConnected && lab.obj.element.style.display !== 'none') { lab.w = lab.box.offsetWidth || lab.w; lab.h = lab.box.offsetHeight || lab.h; }
        if (!lab.w) { lab.w = 220; lab.h = 40; } // first frame estimate until measured
        let best: Box | null = null, bestCost = Infinity, bestOff: [number, number] = [0, 0];
        for (const [dx, dy] of lab.cands) {
          const b = { x0: a.x + dx, y0: a.y + dy, x1: a.x + dx + lab.w, y1: a.y + dy + lab.h };
          const inside = b.x0 >= 4 && b.y0 >= 4 && b.x1 <= vw - 4 && b.y1 <= vh - 4;
          const cost = (inside ? 0 : 50) + [...obstacles, ...taken].filter((o) => hitBox(grow(b, 3), o)).length * 100;
          if (cost < bestCost) { best = b; bestCost = cost; bestOff = [dx, dy]; }
          if (cost === 0) break;
        }
        if (bestCost >= 100 && (id === 'route' || id === 'alt')) { lab.obj.visible = false; continue; } // secondary label: never overlap — hide instead
        taken.push(best!); placed[id] = best!;
        lab.box.style.transform = `translate(${bestOff[0]}px, ${bestOff[1]}px)`;
        const ex = clamp(0, bestOff[0], bestOff[0] + lab.w), ey = clamp(0, bestOff[1], bestOff[1] + lab.h);
        lab.line.setAttribute('x2', String(ex)); lab.line.setAttribute('y2', String(ey));
        lab.svg.style.display = Math.hypot(ex, ey) > 10 ? '' : 'none';
      }
      sceneInfo.hover = hover; sceneInfo.focus = user.focus;
      sceneInfo.droneBox = dBox; sceneInfo.p2Box = p2Box; sceneInfo.labels = placed; sceneInfo.preset = live.current.preset;

      // render
      if (quality === 'high' && bloom.strength > 0.01) composer.render(); else renderer.render(scene, camera);
      labelR.render(scene, camera);

      // FPS (rolling 2 s) and automatic fallback to LOW
      fpsAcc += dtRaw; fpsN++;
      if (now - fpsWindowStart > 2000) {
        sceneInfo.fps = Math.round(fpsN / fpsAcc);
        if (quality === 'high') sceneInfo.fpsHigh = sceneInfo.fps;
        warm++;
        slow = sceneInfo.fps < 45 ? slow + 1 : 0;
        if (qualityAuto && quality === 'high' && warm > 2 && slow >= 2) applyQuality('low');
        fpsAcc = 0; fpsN = 0; fpsWindowStart = now;
      }
    });

    // ---------------------------------------------------------------- calibration check (base photo pose)
    {
      // a three.js camera built from the calibrated basis (incl. roll) and the principal-point offset
      const cam = new THREE.PerspectiveCamera((2 * Math.atan(H / 2 / pc.f) * 180) / Math.PI, W / H, 0.05, 2000);
      cam.position.copy(C0);
      cam.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(R0, U0, F0.clone().negate()));
      cam.updateMatrixWorld(); cam.updateProjectionMatrix();
      const toPx = (p: THREE.Vector3) => { const v = p.clone().project(cam); return { x: (v.x * 0.5 + 0.5) * W + (pc.cx - W / 2), y: (-v.y * 0.5 + 0.5) * H + (pc.cy - H / 2) }; };
      const e1 = toPx(P1), e2 = toPx(P2);
      sceneInfo.calib = { p1: Math.hypot(e1.x - SITE.calib.p1.base[0], e1.y - SITE.calib.p1.base[1]), p2: Math.hypot(e2.x - SITE.calib.p2.base[0], e2.y - SITE.calib.p2.base[1]) };
    }

    return () => {
      disposed = true;
      off();
      ro.disconnect();
      cv.removeEventListener('pointerdown', onDown); cv.removeEventListener('pointermove', onMove); cv.removeEventListener('pointerup', onUp);
      cv.removeEventListener('wheel', onWheel); cv.removeEventListener('dblclick', onDbl); cv.removeEventListener('pointerleave', onLeave);
      Object.values(labels).forEach((l) => { scene.remove(l.obj); l.obj.element.remove(); });
      if (photoMesh) photoMesh.geometry.dispose();
      rig.dispose();
      disposables.forEach((d) => d.dispose());
      composer.dispose(); bloom.dispose();
      renderer.dispose();
      el.innerHTML = '';
      sceneInfo.ready = false;
    };
  }, []);

  return <div ref={host} className="scene3d" />;
}
