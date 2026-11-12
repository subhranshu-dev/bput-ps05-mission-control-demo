// Aerospace simulation field: navy gradient sky + starfield, glowing perspective dot-grid ground, radar range rings,
// two beacons (Point 1 start / Point 2 destination), the planned route, the procedural 3D drone, CSS2D labels with
// collision avoidance, cinematic camera director, day/night lighting and quality tiers.
// No photograph, depth map or calibration is used. Reads the engine's state only — it never moves the aircraft.
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
import { BEACON_H, LAUNCH, P1W, P2W, SITE } from '../sim/site';
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
  /** environment facts for verification: synthetic grid field, no photo / depth / fog */
  env: { kind: 'grid', photo: false, fog: false, gridPoints: 0, beacons: { p1: false, p2: false } },
  hover: false,
  focus: false,
  /** render cost of the last frames: draw calls, triangles, points, CPU ms spent in render() (rolling mean) */
  cost: { calls: 0, triangles: 0, points: 0, renderMs: 0 },
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
    renderer.setClearColor('#03060c');
    el.appendChild(renderer.domElement);
    const labelR = new CSS2DRenderer();
    labelR.domElement.className = 'labels3d';
    el.appendChild(labelR.domElement);

    const scene = new THREE.Scene(); // no fog / haze: depth cues come from the grid's own fade
    const camera = new THREE.PerspectiveCamera(50, 1, 0.05, 2000);
    camera.rotation.order = 'YXZ';

    // ---------------------------------------------------------------- world layout (config scale)
    const P1 = V(P1W), P2 = V(P2W), L = V(LAUNCH);
    const routeDir = new THREE.Vector3(P2.x - L.x, 0, P2.z - L.z).normalize();
    const routePerp = new THREE.Vector3(-routeDir.z, 0, routeDir.x);
    /** default viewing side: behind the launch point, slightly off-axis, looking down the route toward Point 2 */
    const C0 = L.clone().add(new THREE.Vector3(0.55, 0, 1).normalize().multiplyScalar(7)).setY(2.2);

    // ---------------------------------------------------------------- sky: navy vertical gradient + starfield
    const SKY = { night: { top: '#02050b', hor: '#0a1730' }, day: { top: '#0b2246', hor: '#1d4a80' } };
    const skyMat = keep(new THREE.ShaderMaterial({
      uniforms: { top: { value: new THREE.Color(SKY.night.top) }, horizon: { value: new THREE.Color(SKY.night.hor) } },
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 top; uniform vec3 horizon; varying vec3 vP; void main(){ float h = clamp(vP.y * 1.5, 0.0, 1.0); gl_FragColor = vec4(mix(horizon, top, sqrt(h)), 1.0); \n#include <colorspace_fragment>\n }',
      side: THREE.BackSide, depthWrite: false, toneMapped: false,
    }));
    const sky = new THREE.Mesh(keep(new THREE.SphereGeometry(1500, 32, 16)), skyMat);
    scene.add(sky);
    const starGeo = keep(new THREE.BufferGeometry());
    {
      const N = 1400, pos = new Float32Array(N * 3), sz = new Float32Array(N);
      let seed = 7; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      for (let i = 0; i < N; i++) {
        const az = rnd() * Math.PI * 2, el = Math.asin(0.04 + rnd() * 0.96), r = 1200;
        pos.set([Math.cos(az) * Math.cos(el) * r, Math.sin(el) * r, Math.sin(az) * Math.cos(el) * r], i * 3);
        sz[i] = 0.6 + rnd() * rnd() * 2.2;
      }
      starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      starGeo.setAttribute('size', new THREE.BufferAttribute(sz, 1));
    }
    const starMat = keep(new THREE.ShaderMaterial({
      uniforms: { opacity: { value: 0.75 }, pr: { value: 1 } },
      vertexShader: 'attribute float size; uniform float pr; void main(){ gl_PointSize = size * pr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform float opacity; void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5) discard; gl_FragColor = vec4(vec3(0.82,0.9,1.0), opacity * (1.0 - d * 2.0)); }',
      transparent: true, depthWrite: false, toneMapped: false,
    }));
    const stars = new THREE.Points(starGeo, starMat); stars.frustumCulled = false; scene.add(stars);

    // ---------------------------------------------------------------- ground: glowing perspective dot-grid
    const gridMat = keep(new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color('#38d6f5') }, opacity: { value: 0.85 }, center: { value: new THREE.Vector2(L.x, L.z) },
        radius: { value: 60 }, pr: { value: 1 }, horizon: { value: 70 },
      },
      vertexShader: `attribute float major; uniform vec2 center; uniform float radius; uniform float pr; uniform float horizon;
        varying float vA; varying float vMajor;
        void main(){
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          float dist = -mv.z;
          float edge = 1.0 - smoothstep(radius * 0.55, radius, length(position.xz - center));   // fade at the field edge
          float hor = 1.0 - smoothstep(horizon * 0.35, horizon, dist);                            // fade toward the horizon
          vA = edge * hor; vMajor = major;
          gl_PointSize = clamp((major > 0.5 ? 3.2 : 2.1) * pr * 14.0 / max(dist, 0.5), 1.0, (major > 0.5 ? 4.5 : 3.2) * pr);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `uniform vec3 color; uniform float opacity; varying float vA; varying float vMajor;
        void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5 || vA < 0.01) discard;
          float a = opacity * vA * (1.0 - smoothstep(0.25, 0.5, d)) * (vMajor > 0.5 ? 1.0 : 0.62);
          gl_FragColor = vec4(color * (vMajor > 0.5 ? 1.25 : 1.0), a); }`,
      transparent: true, depthWrite: false, toneMapped: false, blending: THREE.AdditiveBlending,
    }));
    let grid: THREE.Points | null = null;
    const buildGrid = (spacing: number, radius: number) => {
      if (grid) { scene.remove(grid); grid.geometry.dispose(); }
      const pos: number[] = [], major: number[] = [];
      const n = Math.floor(radius / spacing);
      for (let i = -n; i <= n; i++) for (let j = -n; j <= n; j++) {
        const x = i * spacing, z = j * spacing;
        if (x * x + z * z > radius * radius) continue;
        pos.push(L.x + x, 0, L.z + z);
        major.push(Math.abs(Math.round(x / 5) * 5 - x) < 1e-3 && Math.abs(Math.round(z / 5) * 5 - z) < 1e-3 ? 1 : 0);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('major', new THREE.Float32BufferAttribute(major, 1));
      grid = new THREE.Points(g, gridMat); grid.frustumCulled = false; grid.renderOrder = 0;
      gridMat.uniforms.radius.value = radius;
      scene.add(grid);
      sceneInfo.env.gridPoints = major.length;
    };

    // ---------------------------------------------------------------- radar range rings (5 / 10 / 15 m) + 30° ticks + sweep
    const radar = new THREE.Group(); radar.position.set(L.x, 0.012, L.z); scene.add(radar);
    const ringMat = keep(new THREE.LineBasicMaterial({ color: '#38d6f5', transparent: true, opacity: 0.32, depthWrite: false, toneMapped: false }));
    const tickMat = keep(new THREE.LineBasicMaterial({ color: '#38d6f5', transparent: true, opacity: 0.14, depthWrite: false, toneMapped: false }));
    for (const r of [5, 10, 15]) {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= 128; i++) { const a = (i / 128) * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r)); }
      radar.add(new THREE.LineLoop(keep(new THREE.BufferGeometry().setFromPoints(pts)), ringMat));
    }
    {
      const seg: THREE.Vector3[] = [];
      for (let k = 0; k < 12; k++) { const a = (k / 12) * Math.PI * 2, c = Math.cos(a), sn = Math.sin(a); seg.push(new THREE.Vector3(c * 1.2, 0, sn * 1.2), new THREE.Vector3(c * 15, 0, sn * 15)); }
      radar.add(new THREE.LineSegments(keep(new THREE.BufferGeometry().setFromPoints(seg)), tickMat));
    }
    const sweepMat = keep(new THREE.ShaderMaterial({ // radar sweep wedge: bright leading edge fading into a trail
      uniforms: { color: { value: new THREE.Color('#38d6f5') }, opacity: { value: 0.16 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 color; uniform float opacity; varying vec2 vUv; void main(){ vec2 p = vUv * 2.0 - 1.0; float t = clamp(atan(p.y, p.x) / 0.55, 0.0, 1.0); float r = length(p); gl_FragColor = vec4(color, opacity * t * t * smoothstep(0.08, 0.3, r) * (1.0 - smoothstep(0.85, 1.0, r))); }',
      transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    }));
    const sweep = new THREE.Mesh(keep(new THREE.CircleGeometry(15, 48, 0, 0.55)), sweepMat);
    sweep.rotation.x = -Math.PI / 2; radar.add(sweep);

    // ---------------------------------------------------------------- lights (drone is the focal point: key + cyan rim + fill)
    const hemi = new THREE.HemisphereLight('#7f95c8', '#0a1424', 0.75); scene.add(hemi);
    const key = new THREE.DirectionalLight('#dbe7ff', 1.8);
    key.position.set(L.x + 8, 22, L.z + 6); key.target.position.set(L.x, 0, L.z);
    key.castShadow = true; key.shadow.mapSize.set(1024, 1024);
    const sc = key.shadow.camera; sc.left = -5; sc.right = 5; sc.top = 5; sc.bottom = -5; sc.near = 1; sc.far = 60;
    key.shadow.bias = -0.0005;
    scene.add(key, key.target);
    const rim = new THREE.DirectionalLight('#7fe8ff', 2.4); scene.add(rim, rim.target); // re-aimed every frame from behind the drone
    const fill = new THREE.DirectionalLight('#ffd6a8', 0.5); fill.position.set(L.x - 20, 10, L.z - 10); scene.add(fill);

    // ---------------------------------------------------------------- beacons: Point 1 (cyan) / Point 2 (amber)
    const beaconMats: THREE.Material[] = [];
    const beacon = (at: THREE.Vector3, color: string) => {
      const g = new THREE.Group(); g.position.set(at.x, 0, at.z);
      const base = new THREE.Mesh(keep(new THREE.RingGeometry(0.55, 0.72, 48)), keep(new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95, side: THREE.DoubleSide, depthWrite: false, toneMapped: false })));
      base.rotation.x = -Math.PI / 2; base.position.y = 0.02; g.add(base);
      const glow = new THREE.Mesh(keep(new THREE.CircleGeometry(1.6, 48)), keep(new THREE.ShaderMaterial({
        uniforms: { color: { value: new THREE.Color(color) } },
        vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
        fragmentShader: 'uniform vec3 color; varying vec2 vUv; void main(){ float d = length(vUv - 0.5) * 2.0; gl_FragColor = vec4(color, 0.38 * (1.0 - smoothstep(0.0, 1.0, d))); }',
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
      })));
      glow.rotation.x = -Math.PI / 2; glow.position.y = 0.015; g.add(glow);
      const pillarMat = keep(new THREE.ShaderMaterial({
        uniforms: { color: { value: new THREE.Color(color) } },
        vertexShader: 'varying float vH; void main(){ vH = uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
        fragmentShader: 'uniform vec3 color; varying float vH; void main(){ gl_FragColor = vec4(color * 1.3, 0.9 * pow(1.0 - vH, 1.6) + 0.06); }',
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, side: THREE.DoubleSide,
      }));
      beaconMats.push(pillarMat);
      const pillar = new THREE.Mesh(keep(new THREE.CylinderGeometry(0.045, 0.06, BEACON_H, 12, 1, true)), pillarMat);
      pillar.position.y = BEACON_H / 2; g.add(pillar);
      const cap = new THREE.Mesh(keep(new THREE.SphereGeometry(0.09, 16, 12)), keep(new THREE.MeshBasicMaterial({ color, toneMapped: false })));
      cap.position.y = BEACON_H; g.add(cap);
      scene.add(g); return g;
    };
    beacon(P1, '#38d6f5');
    beacon(P2, '#fbbf24');

    // ---------------------------------------------------------------- route P1 → P2 (planned, not flown)
    const lineMats: LineMaterial[] = [];
    const routePts: number[] = [];
    for (let i = 0; i <= 40; i++) { const t = i / 40; routePts.push(P1.x + (P2.x - P1.x) * t, 0.04, P1.z + (P2.z - P1.z) * t); }
    const mkLine = (width: number, color: string, opacity: number, dashed: boolean) => {
      const g = keep(new LineGeometry()); g.setPositions(routePts);
      const m = keep(new LineMaterial({ color: new THREE.Color(color).getHex(), linewidth: width, transparent: true, opacity, dashed, dashSize: 0.9, gapSize: 0.6, depthWrite: false }));
      m.toneMapped = false; lineMats.push(m);
      const l = new Line2(g, m); l.computeLineDistances(); l.renderOrder = 2; scene.add(l); return l;
    };
    mkLine(9, '#38d6f5', 0.16, false); // glow
    mkLine(2.5, '#7fe8ff', 0.95, true);

    // ---------------------------------------------------------------- drone rig, shadow, stem, dust
    const rig = buildDrone(SITE.droneDisplayScale);
    scene.add(rig.group);
    // focal halo: a soft screen-constant cyan glow behind the airframe so the dark drone always reads on the navy field
    const haloTex = keep((() => {
      const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d')!;
      const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
      grd.addColorStop(0, 'rgba(160,236,255,0.55)'); grd.addColorStop(0.35, 'rgba(56,214,245,0.22)'); grd.addColorStop(1, 'rgba(56,214,245,0)');
      g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
      const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
    })());
    const haloMat = keep(new THREE.SpriteMaterial({ map: haloTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: false, toneMapped: false }));
    const halo = new THREE.Sprite(haloMat); halo.renderOrder = -1; scene.add(halo);
    const camFill = new THREE.DirectionalLight('#cfe6ff', 0.9); scene.add(camFill, camFill.target); // soft fill from the viewer's side
    const blobTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d')!; const r = g.createRadialGradient(64, 64, 0, 64, 64, 64); r.addColorStop(0, 'rgba(0,0,0,0.85)'); r.addColorStop(0.5, 'rgba(0,0,0,0.45)'); r.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = r; g.fillRect(0, 0, 128, 128); return keep(new THREE.CanvasTexture(c)); })();
    const blob = new THREE.Mesh(keep(new THREE.PlaneGeometry(1, 1)), keep(new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false })));
    blob.rotation.x = -Math.PI / 2; blob.renderOrder = 1; scene.add(blob);
    const shadowCatcher = new THREE.Mesh(keep(new THREE.PlaneGeometry(14, 14)), keep(new THREE.ShadowMaterial({ opacity: 0.45 })));
    shadowCatcher.rotation.x = -Math.PI / 2; shadowCatcher.position.set(L.x, 0.012, L.z); shadowCatcher.receiveShadow = true; scene.add(shadowCatcher);
    const contactMat = keep(new THREE.ShaderMaterial({ // ground-contact glow under the drone (reads on the dark field)
      uniforms: { color: { value: new THREE.Color('#38d6f5') }, strength: { value: 0.5 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 color; uniform float strength; varying vec2 vUv; void main(){ float d = length(vUv - 0.5) * 2.0; gl_FragColor = vec4(color, strength * (1.0 - smoothstep(0.2, 1.0, d)) * smoothstep(0.0, 0.25, d)); }',
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    }));
    const contact = new THREE.Mesh(keep(new THREE.PlaneGeometry(1, 1)), contactMat);
    contact.rotation.x = -Math.PI / 2; contact.position.set(L.x, 0.018, L.z); scene.add(contact);
    const stemGeo = keep(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]));
    const stem = new THREE.Line(stemGeo, keep(new THREE.LineDashedMaterial({ color: '#e8f6ff', dashSize: 0.18, gapSize: 0.12, transparent: true, opacity: 0.85, toneMapped: false })));
    stem.frustumCulled = false; scene.add(stem);
    const DUST = 70;
    const dustPos = new Float32Array(DUST * 3), dustVel = new Float32Array(DUST * 3);
    const dustGeo = keep(new THREE.BufferGeometry()); dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = keep(new THREE.PointsMaterial({ color: '#9fdcff', size: 0.05, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
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
    const bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.9, 0.4, 0.62);
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
    const baseYaw = Math.atan2(C0.x - L.x, C0.z - L.z); // default viewing side (behind the launch point)
    const framePose = (pts: THREE.Vector3[], yawDeg: number, elevDeg: number, fov: number, distMul = 1) => {
      const center = new THREE.Vector3(); pts.forEach((p) => center.add(p)); center.multiplyScalar(1 / pts.length);
      const yaw = baseYaw + THREE.MathUtils.degToRad(yawDeg + user.yaw), el = THREE.MathUtils.degToRad(clamp(elevDeg + user.pitch, 0, 70));
      const dir = new THREE.Vector3(Math.sin(yaw) * Math.cos(el), Math.sin(el), Math.cos(yaw) * Math.cos(el));
      const dist = fitDistance(pts, center, fov, camera.aspect) * distMul * user.zoom;
      return { pos: center.clone().addScaledVector(dir, dist), tgt: center, fov };
    };
    const lerpPose = (a: { pos: THREE.Vector3; tgt: THREE.Vector3; fov: number }, b: { pos: THREE.Vector3; tgt: THREE.Vector3; fov: number }, t: number) =>
      ({ pos: a.pos.clone().lerp(b.pos, t), tgt: a.tgt.clone().lerp(b.tgt, t), fov: a.fov + (b.fov - a.fov) * t });
    /** Closest camera distance (on the default side) at which the ground anchor and the drone both fit the usable lens band. */
    const toCamH = new THREE.Vector3(C0.x - L.x, 0, C0.z - L.z); const baseD = 5.5; toCamH.normalize();
    const craneFrame = (alt: number, yawDeg: number, fov: number, extra = 0, includeP2 = false) => {
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
      if (p === 'WIDE') return craneFrame(alt, -8, 70, 4, true);
      if (p === 'TACTICAL') return framePose([groundL, up2, P2, P1], -10, 52, 56);
      if (p === 'FOLLOW') return craneFrame(alt, -4, 62, 0, true);
      if (p === 'ORBIT') { const a = Math.sin(((now - presetStart) / 1000) * 0.12) * 24; return craneFrame(alt, a, 66, 1, true); }
      // AUTO director
      const tIn = (now - presetStart) / 1000;
      const near = craneFrame(0, -6, 52, 1.5, true);
      if (state === 'STANDBY') return lerpPose(craneFrame(0, -10, 56, 7, true), near, Math.min(1, tIn / 16)); // slow push-in establishing shot
      if (state === 'COUNTDOWN') return lerpPose(near, craneFrame(0, -4, 48, 0, true), Math.min(1, tIn / 5)); // dolly toward P1
      const crane = craneFrame(alt, -4, 62, 0, true);
      if (state === 'TAKEOFF') return lerpPose(near, crane, THREE.MathUtils.smoothstep(alt, 0.3, 4)); // crane up with the drone
      const a = Math.sin(tIn * 0.1) * 18;
      return craneFrame(alt, a, 62, 0.5, true); // hold: slow cinematic orbit around the drone column
    };
    const clampCam = (p: THREE.Vector3) => { p.x = clamp(p.x, -45, 45); p.y = clamp(p.y, 0.8, 60); p.z = clamp(p.z, -60, 60); return p; };

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
      buildGrid(q === 'high' ? 1 : 1.5, q === 'high' ? 60 : 45);
      const pr = Math.min(window.devicePixelRatio, q === 'high' ? 1.75 : 1);
      gridMat.uniforms.pr.value = pr; starMat.uniforms.pr.value = pr;
      stars.visible = true;
      resize();
      sceneInfo.quality = q; sceneInfo.qualityAuto = qualityAuto;
      live.current.onQuality?.(q, qualityAuto);
      renderer.shadowMap.needsUpdate = true;
      scene.traverse((o) => { const m = (o as THREE.Mesh).material as THREE.Material | undefined; if (m) m.needsUpdate = true; });
    };
    const resize = () => {
      const w = el.clientWidth || 1, h = el.clientHeight || 1;
      renderer.setSize(w, h); labelR.setSize(w, h); composer.setSize(w, h);
      const bs = w > 1400 ? 0.6 : 1; bloom.setSize(Math.round(w * bs), Math.round(h * bs)); // large viewports: cheaper bloom chain (glow stays soft)
      camera.aspect = w / h; camera.updateProjectionMatrix();
      lineMats.forEach((m) => m.resolution.set(w, h));
    };
    const ro = new ResizeObserver(resize); ro.observe(el);
    applyQuality(quality);
    sceneInfo.ready = true;

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
      skyMat.uniforms.top.value.set(SKY.night.top).lerp(new THREE.Color(SKY.day.top), k);
      skyMat.uniforms.horizon.value.set(SKY.night.hor).lerp(new THREE.Color(SKY.day.hor), k);
      starMat.uniforms.opacity.value = THREE.MathUtils.lerp(0.75, 0.18, k);
      gridMat.uniforms.color.value.set('#38d6f5').lerp(new THREE.Color('#2fa8d8'), k); // day: a touch darker
      gridMat.uniforms.opacity.value = THREE.MathUtils.lerp(0.85, 0.7, k);
      ringMat.opacity = THREE.MathUtils.lerp(0.32, 0.26, k); tickMat.opacity = THREE.MathUtils.lerp(0.14, 0.11, k);
      hemi.intensity = THREE.MathUtils.lerp(0.75, 1.15, k);
      key.intensity = THREE.MathUtils.lerp(1.8, 2.6, k);
      rim.intensity = THREE.MathUtils.lerp(2.4, 1.6, k);
      bloom.strength = THREE.MathUtils.lerp(0.95, 0.4, k);
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
      // display scale grows with altitude (1.2× on the pad → ~1.54× at 12 m) so the drone reads clearly in hold; visual only
      const dScale = SITE.droneDisplayScale * (1 + SITE.holdScaleBoost * THREE.MathUtils.smoothstep(alt, 1, 10));
      rig.group.scale.setScalar(dScale);
      rig.group.position.copy(dronePos).add(new THREE.Vector3(0, 0.09 * dScale, 0));
      rig.group.rotation.set(0, Math.atan2(-routeDir.x, -routeDir.z) - (engine.heading || 0), 0);
      const hoverAmp = flying ? 0.02 : 0;
      rig.body.position.set(Math.sin(tt * 0.7) * hoverAmp * 0.6 / dScale, Math.sin(tt * 1.3) * hoverAmp / dScale, Math.cos(tt * 0.9) * hoverAmp * 0.6 / dScale);
      const climbPitch = st === 'TAKEOFF' ? -0.05 * clamp(engine.vel.y / 1.5, 0, 1) : 0;
      rig.body.rotation.set(climbPitch + (flying ? Math.sin(tt * 1.7) * 0.012 : 0), 0, flying ? Math.sin(tt * 1.3 + 1) * 0.012 : 0);
      const rpmTarget = st === 'STANDBY' ? 0.12 : st === 'COUNTDOWN' ? 0.25 + 0.5 * (1 - engine.countdown / 5) : flying ? (held ? 0.9 : 1) : 0.12;
      const rpm = engine.state === 'PAUSED' ? 0 : rpmTarget;
      rig.update(engine.state === 'PAUSED' ? 0 : dt, rpm, tt, { strobe: st !== 'STANDBY' && st !== 'WELCOME', ledGain: THREE.MathUtils.lerp(1.5, 0.9, k) });
      // rim light: from behind the drone relative to the camera, so its silhouette separates from the grid and sky
      rim.position.copy(dronePos).addScaledVector(camera.getWorldDirection(new THREE.Vector3()), 6).add(new THREE.Vector3(0, 3, 0));
      rim.target.position.copy(dronePos);
      sweep.rotation.z = -tt * 0.8; // radar sweep
      rig.group.updateMatrixWorld();
      droneWorldBox.copy(rig.bounds).applyMatrix4(rig.group.matrixWorld);
      // contact shadow + altitude stem
      const s = clamp(1 - alt / 16, 0.25, 1);
      blob.position.set(L.x, 0.015, L.z); blob.scale.setScalar(0.95 * SITE.droneDisplayScale * (0.6 + 0.4 * s) * 0.6);
      (blob.material as THREE.MeshBasicMaterial).opacity = (0.25 + 0.6 * s) * (quality === 'high' ? 0.8 : 1);
      contact.scale.setScalar(SITE.droneDisplayScale * (1.2 + 1.4 * (1 - s)));
      contactMat.uniforms.strength.value = (0.55 * s + 0.12) * (1 - 0.35 * k);
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
      camFill.position.copy(camPos).add(new THREE.Vector3(0, 2, 0)); camFill.target.position.copy(rig.group.position);
      halo.position.copy(rig.group.position);
      halo.scale.setScalar(THREE.MathUtils.lerp(0.13, 0.09, k) * (engine.pos.y > 0.3 ? 1 : 0.7));
      haloMat.opacity = THREE.MathUtils.lerp(0.95, 0.6, k);
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
      labels.p1.anchor.set(P1.x, BEACON_H + 0.15, P1.z);
      labels.p2.anchor.set(P2.x, BEACON_H + 0.15, P2.z);
      labels.drone.anchor.copy(dronePos).add(new THREE.Vector3(0, 0.2, 0));
      labels.alt.anchor.set(L.x, alt * 0.5, L.z); labels.alt.visible = flying && alt > 1;
      labels.route.anchor.set(P1.x + (P2.x - P1.x) * 0.55, 0.05, P1.z + (P2.z - P1.z) * 0.55);
      callout.anchor.copy(dronePos); callout.visible = hover || user.focus;
      const vw = el.clientWidth, vh = el.clientHeight;
      const dBox = grow(boxOf([0, 1, 2, 3, 4, 5, 6, 7].map((i) => new THREE.Vector3(i & 1 ? droneWorldBox.max.x : droneWorldBox.min.x, i & 2 ? droneWorldBox.max.y : droneWorldBox.min.y, i & 4 ? droneWorldBox.max.z : droneWorldBox.min.z))), 4);
      const p2Box = grow(boxOf([P2.clone(), P2.clone().add(new THREE.Vector3(0, BEACON_H, 0)), P2.clone().add(new THREE.Vector3(0.7, 0, 0)), P2.clone().add(new THREE.Vector3(-0.7, 0, 0))]), 6);
      const p1Box = grow(boxOf([P1.clone(), P1.clone().add(new THREE.Vector3(0, BEACON_H, 0)), P1.clone().add(new THREE.Vector3(0.7, 0, 0)), P1.clone().add(new THREE.Vector3(-0.7, 0, 0))]), 6);
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
      sceneInfo.env.beacons = { p1: !!placed.p1, p2: !!placed.p2 };
      sceneInfo.droneBox = dBox; sceneInfo.p2Box = p2Box; sceneInfo.labels = placed; sceneInfo.preset = live.current.preset;

      // render
      const r0 = performance.now();
      if (quality === 'high' && bloom.strength > 0.01) composer.render(); else renderer.render(scene, camera);
      labelR.render(scene, camera);
      const ri = renderer.info.render;
      sceneInfo.cost = { calls: ri.calls, triangles: ri.triangles, points: ri.points, renderMs: sceneInfo.cost.renderMs * 0.95 + (performance.now() - r0) * 0.05 };

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

    return () => {
      disposed = true;
      off();
      ro.disconnect();
      cv.removeEventListener('pointerdown', onDown); cv.removeEventListener('pointermove', onMove); cv.removeEventListener('pointerup', onUp);
      cv.removeEventListener('wheel', onWheel); cv.removeEventListener('dblclick', onDbl); cv.removeEventListener('pointerleave', onLeave);
      Object.values(labels).forEach((l) => { scene.remove(l.obj); l.obj.element.remove(); });
      if (grid) grid.geometry.dispose();
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
