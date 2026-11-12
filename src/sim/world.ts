// Procedural synthetic environment: seeded obstacles, synthetic LiDAR point cloud,
// and a 2D occupancy-grid A* planner. Everything here is synthetic demo data.
import * as THREE from 'three';

export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type ObKind = 'BLOCK' | 'TOWER' | 'WALL' | 'PILLAR' | 'TANK' | 'SPHERE' | 'ROCK';

export interface Obstacle {
  id: string;
  kind: ObKind;
  x: number;
  z: number;
  rot: number;
  shape: 'rect' | 'circle';
  hw: number; // rect half-width (local x)
  hd: number; // rect half-depth (local z)
  r: number; // circle radius
  h: number; // top height (m)
  parts: THREE.BufferGeometry[]; // world-space geometry
}

export const WORLD_HALF = 60;
export const START = { x: -46, z: 46 };
export const GOAL = { x: 46, z: -46 };
export const CRUISE_ALT = 8;
export const PLAN_CLEARANCE = 3.4;
export const GRID_RES = 2;

/** Horizontal distance from (x,z) to the obstacle footprint (0 if inside). */
export function footprintDistance(o: Obstacle, x: number, z: number): number {
  const dx = x - o.x;
  const dz = z - o.z;
  if (o.shape === 'circle') return Math.max(0, Math.hypot(dx, dz) - o.r);
  // rotate into local frame (three.js rotation.y = rot)
  const c = Math.cos(o.rot);
  const s = Math.sin(o.rot);
  const lx = c * dx - s * dz;
  const lz = s * dx + c * dz;
  const ex = Math.max(0, Math.abs(lx) - o.hw);
  const ez = Math.max(0, Math.abs(lz) - o.hd);
  return Math.hypot(ex, ez);
}

/** Nearest point on obstacle (approx: footprint boundary, clamped to its height). */
export function nearestPoint(o: Obstacle, p: THREE.Vector3, out: THREE.Vector3): THREE.Vector3 {
  const y = Math.min(Math.max(p.y, 0), o.h);
  if (o.shape === 'circle') {
    const dx = p.x - o.x;
    const dz = p.z - o.z;
    const d = Math.hypot(dx, dz) || 1;
    const k = Math.min(1, o.r / d);
    return out.set(o.x + dx * k, y, o.z + dz * k);
  }
  const c = Math.cos(o.rot);
  const s = Math.sin(o.rot);
  const dx = p.x - o.x;
  const dz = p.z - o.z;
  const lx = THREE.MathUtils.clamp(c * dx - s * dz, -o.hw, o.hw);
  const lz = THREE.MathUtils.clamp(s * dx + c * dz, -o.hd, o.hd);
  // inverse rotation
  return out.set(o.x + c * lx + s * lz, y, o.z - s * lx + c * lz);
}

/** 3D clearance from a point to the obstacle (uses footprint + height). */
export function clearance3D(o: Obstacle, p: THREE.Vector3): number {
  const d2 = footprintDistance(o, p.x, p.z);
  const dh = Math.max(0, p.y - o.h);
  return Math.hypot(d2, dh);
}

function boundR(o: Obstacle) {
  return o.shape === 'circle' ? o.r : Math.hypot(o.hw, o.hd);
}

function placed(geo: THREE.BufferGeometry, x: number, y: number, z: number, rot: number, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Matrix4().compose(
    new THREE.Vector3(x, y, z),
    new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rot),
    new THREE.Vector3(sx, sy, sz),
  );
  geo.applyMatrix4(m);
  geo.computeVertexNormals();
  return geo;
}

function makeObstacle(kind: ObKind, x: number, z: number, rot: number, rnd: () => number, idx: number): Obstacle {
  const id = `OB-${String(idx + 1).padStart(2, '0')}`;
  const base = { id, kind, x, z, rot, hw: 0, hd: 0, r: 0, h: 0, parts: [] as THREE.BufferGeometry[] };
  const R = (a: number, b: number) => a + (b - a) * rnd();
  switch (kind) {
    case 'BLOCK': {
      const w = R(6, 12), d = R(6, 12), h = R(5, 13);
      return { ...base, shape: 'rect', hw: w / 2, hd: d / 2, h, parts: [placed(new THREE.BoxGeometry(w, h, d), x, h / 2, z, rot)] };
    }
    case 'TOWER': {
      const w = R(5, 8), d = R(5, 8), h1 = R(12, 20), h2 = R(3, 7);
      return {
        ...base, shape: 'rect', hw: w / 2, hd: d / 2, h: h1 + h2,
        parts: [
          placed(new THREE.BoxGeometry(w, h1, d), x, h1 / 2, z, rot),
          placed(new THREE.BoxGeometry(w * 0.6, h2, d * 0.6), x, h1 + h2 / 2, z, rot),
        ],
      };
    }
    case 'WALL': {
      const l = R(18, 26), t = 1.2, h = R(6, 10);
      return { ...base, shape: 'rect', hw: l / 2, hd: t / 2, h, parts: [placed(new THREE.BoxGeometry(l, h, t), x, h / 2, z, rot)] };
    }
    case 'PILLAR': {
      const r = R(0.9, 1.6), h = R(9, 18);
      return { ...base, shape: 'circle', r, h, parts: [placed(new THREE.CylinderGeometry(r, r, h, 16, 1), x, h / 2, z, 0)] };
    }
    case 'TANK': {
      const r = R(3, 5.2), h = R(5, 9);
      return { ...base, shape: 'circle', r, h, parts: [placed(new THREE.CylinderGeometry(r, r, h, 28, 1), x, h / 2, z, 0)] };
    }
    case 'SPHERE': {
      const r = R(2.6, 4.6);
      return { ...base, shape: 'circle', r, h: 2 * r, parts: [placed(new THREE.SphereGeometry(r, 24, 16), x, r, z, 0)] };
    }
    case 'ROCK': {
      const r = R(2.5, 4.5), sy = R(0.9, 1.6);
      const g = new THREE.IcosahedronGeometry(r, 1);
      const pos = g.attributes.position as THREE.BufferAttribute;
      // displace shared vertices consistently (non-indexed geometry duplicates verts)
      const cache = new Map<string, number>();
      for (let i = 0; i < pos.count; i++) {
        const key = `${pos.getX(i).toFixed(3)},${pos.getY(i).toFixed(3)},${pos.getZ(i).toFixed(3)}`;
        let k = cache.get(key);
        if (k === undefined) { k = 0.75 + rnd() * 0.45; cache.set(key, k); }
        pos.setXYZ(i, pos.getX(i) * k, pos.getY(i) * k, pos.getZ(i) * k);
      }
      placed(g, x, r * sy * 0.45, z, rot, 1, sy, 1);
      g.computeBoundingBox();
      const bb = g.boundingBox!;
      const rr = Math.max(bb.max.x - x, x - bb.min.x, bb.max.z - z, z - bb.min.z);
      return { ...base, shape: 'circle', r: rr, h: bb.max.y, parts: [g] };
    }
  }
}

export interface PointCloud {
  positions: Float32Array;
  intensity: Float32Array; // base reflectivity
  count: number;
}

function sampleGeometry(geo: THREE.BufferGeometry, rnd: () => number, density: number, cap: number, out: number[]) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const p = g.attributes.position as THREE.BufferAttribute;
  const tris: { a: THREE.Vector3; b: THREE.Vector3; c: THREE.Vector3; ny: number }[] = [];
  const areas: number[] = [];
  let total = 0;
  const e1 = new THREE.Vector3(), e2 = new THREE.Vector3(), n = new THREE.Vector3();
  for (let i = 0; i < p.count; i += 3) {
    const a = new THREE.Vector3().fromBufferAttribute(p, i);
    const b = new THREE.Vector3().fromBufferAttribute(p, i + 1);
    const c = new THREE.Vector3().fromBufferAttribute(p, i + 2);
    e1.subVectors(b, a); e2.subVectors(c, a); n.crossVectors(e1, e2);
    const area = n.length() / 2;
    if (area < 1e-6) continue;
    n.normalize();
    if (n.y < -0.85) continue; // skip undersides
    tris.push({ a, b, c, ny: n.y });
    total += area;
    areas.push(total);
  }
  const count = Math.min(cap, Math.round(total * density));
  const v = new THREE.Vector3();
  for (let k = 0; k < count; k++) {
    const t = rnd() * total;
    let lo = 0, hi = areas.length - 1;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (areas[mid] < t) lo = mid + 1; else hi = mid; }
    const tri = tris[lo];
    let u = rnd(), w = rnd();
    if (u + w > 1) { u = 1 - u; w = 1 - w; }
    v.copy(tri.a).addScaledVector(e1.subVectors(tri.b, tri.a), u).addScaledVector(e2.subVectors(tri.c, tri.a), w);
    let y = v.y;
    if (Math.abs(tri.ny) < 0.75) y = Math.round(y / 0.55) * 0.55; // LiDAR beam layering
    if (y < 0.05) continue;
    out.push(v.x + (rnd() - 0.5) * 0.06, y, v.z + (rnd() - 0.5) * 0.06, 1);
  }
}

export interface World {
  seed: number;
  obstacles: Obstacle[];
  cloud: PointCloud;
}

export function generateWorld(seed: number): World {
  const rnd = mulberry32(seed);
  const obs: Obstacle[] = [];
  const kinds: ObKind[] = ['BLOCK', 'BLOCK', 'TOWER', 'TOWER', 'PILLAR', 'PILLAR', 'TANK', 'SPHERE', 'ROCK', 'ROCK'];

  // Two barrier walls across the start→goal diagonal force a non-trivial route.
  const walls: [number, number][] = [[-14, 14], [16, -16]];
  for (const [cx, cz] of walls) {
    const off = (rnd() - 0.5) * 18;
    const x = cx + off * Math.SQRT1_2;
    const z = cz + off * Math.SQRT1_2;
    obs.push(makeObstacle('WALL', x, z, -Math.PI / 4 + (rnd() - 0.5) * 0.5, rnd, obs.length));
  }

  let attempts = 0;
  while (obs.length < 28 && attempts < 3000) {
    attempts++;
    const kind = kinds[Math.floor(rnd() * kinds.length)];
    const x = (rnd() * 2 - 1) * 52;
    const z = (rnd() * 2 - 1) * 52;
    if (Math.hypot(x - START.x, z - START.z) < 14 || Math.hypot(x - GOAL.x, z - GOAL.z) < 14) continue;
    const cand = makeObstacle(kind, x, z, rnd() * Math.PI, rnd, obs.length);
    const cr = boundR(cand);
    if (Math.abs(x) + cr > 56 || Math.abs(z) + cr > 56) continue;
    let ok = true;
    for (const o of obs) {
      if (footprintDistance(o, x, z) - cr < 7.5) { ok = false; break; }
    }
    if (ok) obs.push(cand);
  }

  // Synthetic LiDAR point cloud
  const pts: number[] = [];
  for (const o of obs) for (const g of o.parts) sampleGeometry(g, rnd, 1.7, 2600, pts);
  for (let x = -WORLD_HALF; x <= WORLD_HALF; x += 1.7) {
    for (let z = -WORLD_HALF; z <= WORLD_HALF; z += 1.7) {
      pts.push(x + (rnd() - 0.5) * 1.1, 0.02, z + (rnd() - 0.5) * 1.1, 0.32);
    }
  }
  const count = pts.length / 4;
  const positions = new Float32Array(count * 3);
  const intensity = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = pts[i * 4];
    positions[i * 3 + 1] = pts[i * 4 + 1];
    positions[i * 3 + 2] = pts[i * 4 + 2];
    intensity[i] = pts[i * 4 + 3];
  }
  return { seed, obstacles: obs, cloud: { positions, intensity, count } };
}

// ---------------- Planner: A* on 2D occupancy grid + line-of-sight smoothing --------------

const N = Math.ceil((WORLD_HALF * 2) / GRID_RES);
const toCell = (v: number) => Math.min(N - 1, Math.max(0, Math.floor((v + WORLD_HALF) / GRID_RES)));
const cellCenter = (i: number) => -WORLD_HALF + (i + 0.5) * GRID_RES;

export function isBlocked(obs: Obstacle[], x: number, z: number, clearance: number) {
  if (Math.abs(x) > WORLD_HALF - 2 || Math.abs(z) > WORLD_HALF - 2) return true;
  for (const o of obs) if (footprintDistance(o, x, z) < clearance) return true;
  return false;
}

function segmentClear(obs: Obstacle[], ax: number, az: number, bx: number, bz: number, clearance: number) {
  const len = Math.hypot(bx - ax, bz - az);
  const steps = Math.max(1, Math.ceil(len / 0.5));
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    if (isBlocked(obs, ax + (bx - ax) * t, az + (bz - az) * t, clearance)) return false;
  }
  return true;
}

export interface PlanResult {
  points: { x: number; z: number }[]; // smoothed waypoints, first = start
  expanded: number;
}

export function planRoute(obs: Obstacle[], sx: number, sz: number, gx: number, gz: number): PlanResult | null {
  const occ = new Uint8Array(N * N);
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) occ[i * N + j] = isBlocked(obs, cellCenter(i), cellCenter(j), PLAN_CLEARANCE) ? 1 : 0;
  const si = toCell(sx), sj = toCell(sz), gi = toCell(gx), gj = toCell(gz);
  occ[gi * N + gj] = 0;
  const g = new Float32Array(N * N).fill(Infinity);
  const parent = new Int32Array(N * N).fill(-1);
  const closed = new Uint8Array(N * N);
  const heap: [number, number][] = [];
  const push = (f: number, k: number) => {
    heap.push([f, k]);
    let i = heap.length - 1;
    while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; }
  };
  const pop = () => {
    const top = heap[0]; const last = heap.pop()!;
    if (heap.length) {
      heap[0] = last; let i = 0;
      for (;;) {
        const l = 2 * i + 1, r = l + 1; let m = i;
        if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
        if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
        if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m;
      }
    }
    return top;
  };
  const h = (i: number, j: number) => { const dx = Math.abs(i - gi), dy = Math.abs(j - gj); return Math.max(dx, dy) + (Math.SQRT2 - 1) * Math.min(dx, dy); };
  const s = si * N + sj, goal = gi * N + gj;
  g[s] = 0; push(h(si, sj), s);
  let expanded = 0;
  while (heap.length) {
    const [, k] = pop();
    if (closed[k]) continue;
    closed[k] = 1; expanded++;
    if (k === goal) break;
    const ci = Math.floor(k / N), cj = k % N;
    const curOcc = occ[k];
    for (let di = -1; di <= 1; di++) for (let dj = -1; dj <= 1; dj++) {
      if (!di && !dj) continue;
      const ni = ci + di, nj = cj + dj;
      if (ni < 0 || nj < 0 || ni >= N || nj >= N) continue;
      const nk = ni * N + nj;
      // allow escaping an inflated zone only (start inside clearance after manual flight)
      if (occ[nk] && !curOcc) continue;
      if (di && dj && !curOcc && (occ[ci * N + nj] || occ[ni * N + cj])) continue;
      const ng = g[k] + (di && dj ? Math.SQRT2 : 1) + (occ[nk] ? 20 : 0);
      if (ng < g[nk]) { g[nk] = ng; parent[nk] = k; push(ng + h(ni, nj), nk); }
    }
  }
  if (!closed[goal]) return null;
  const cells: { x: number; z: number }[] = [];
  for (let k = goal; k !== -1; k = parent[k]) cells.push({ x: cellCenter(Math.floor(k / N)), z: cellCenter(k % N) });
  cells.reverse();
  cells[0] = { x: sx, z: sz };
  cells[cells.length - 1] = { x: gx, z: gz };
  // greedy line-of-sight shortcutting
  const out = [cells[0]];
  let i = 0;
  while (i < cells.length - 1) {
    let j = cells.length - 1;
    while (j > i + 1 && !segmentClear(obs, cells[i].x, cells[i].z, cells[j].x, cells[j].z, PLAN_CLEARANCE - 0.4)) j--;
    out.push(cells[j]);
    i = j;
  }
  return { points: out, expanded };
}
