import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { Engine, SENSOR_RANGE, WARN_DIST, wpName } from '../sim/engine';
import { GOAL, START, WORLD_HALF, Obstacle, ObKind, nearestPoint } from '../sim/world';

export type CamMode = 'follow' | 'orbit' | 'top';

interface Props {
  engine: Engine;
  camMode: CamMode;
  camResetToken: number;
}

const C = {
  cyan: new THREE.Color('#38d6f5'),
  amber: new THREE.Color('#fbbf24'),
  red: new THREE.Color('#f87171'),
};

const KIND_STYLE: Record<ObKind, { fill: string; edge: string }> = {
  BLOCK: { fill: '#1b2b40', edge: '#5aa9e6' },
  TOWER: { fill: '#1b2b40', edge: '#5aa9e6' },
  WALL: { fill: '#2a2640', edge: '#9d8cf0' },
  PILLAR: { fill: '#163338', edge: '#4fd1c5' },
  TANK: { fill: '#163338', edge: '#4fd1c5' },
  SPHERE: { fill: '#2b2a33', edge: '#a3b1c6' },
  ROCK: { fill: '#2b2a33', edge: '#a3b1c6' },
};

function label(text: string, cls = 'tag') {
  const el = document.createElement('div');
  el.className = cls;
  el.textContent = text;
  return new CSS2DObject(el);
}

function dotTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.45, 'rgba(255,255,255,0.85)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function buildDrone() {
  const g = new THREE.Group();
  const shell = new THREE.MeshStandardMaterial({ color: '#d7e1ec', metalness: 0.35, roughness: 0.35 });
  const dark = new THREE.MeshStandardMaterial({ color: '#202a36', metalness: 0.6, roughness: 0.4 });
  const glow = new THREE.MeshBasicMaterial({ color: '#38d6f5' });
  g.add(new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.26, 1.25), shell));
  const top = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.14, 0.8), dark);
  top.position.set(0, 0.2, 0.05);
  g.add(top);
  const sensor = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.14, 20), dark);
  sensor.position.set(0, 0.34, 0.05);
  g.add(sensor);
  const sensorRing = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.025, 6, 24), glow);
  sensorRing.rotation.x = Math.PI / 2;
  sensorRing.position.set(0, 0.34, 0.05);
  g.add(sensorRing);
  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.06, 0.05), glow);
  nose.position.set(0, 0.02, -0.64);
  g.add(nose);
  const props: THREE.Group[] = [];
  const discs: THREE.Mesh[] = [];
  const strobes: THREE.Mesh[] = [];
  const discMat = new THREE.MeshBasicMaterial({ color: '#9fdcff', transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false });
  for (const [x, z] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.07, 1.3), dark);
    arm.position.set(x * 0.46, 0, z * 0.46);
    arm.rotation.y = Math.atan2(x, z);
    g.add(arm);
    const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.2, 14), dark);
    motor.position.set(x * 0.92, 0.06, z * 0.92);
    g.add(motor);
    const prop = new THREE.Group();
    prop.position.set(x * 0.92, 0.19, z * 0.92);
    prop.add(new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.015, 0.09), shell));
    g.add(prop);
    props.push(prop);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(0.52, 28), discMat);
    disc.rotation.x = -Math.PI / 2;
    disc.position.set(x * 0.92, 0.2, z * 0.92);
    g.add(disc);
    discs.push(disc);
    const led = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), new THREE.MeshBasicMaterial({ color: z < 0 ? '#34d399' : '#f87171' }));
    led.position.set(x * 0.92, -0.06, z * 0.92);
    g.add(led);
    strobes.push(led);
  }
  g.scale.setScalar(2.6);
  return { group: g, props, discMat, strobes };
}

function footprintOutline(o: Obstacle) {
  const pts: THREE.Vector3[] = [];
  if (o.shape === 'circle') {
    const r = o.r + 0.6;
    for (let i = 0; i <= 48; i++) { const a = (i / 48) * Math.PI * 2; pts.push(new THREE.Vector3(o.x + Math.cos(a) * r, 0.06, o.z + Math.sin(a) * r)); }
  } else {
    const c = Math.cos(o.rot), s = Math.sin(o.rot);
    const hw = o.hw + 0.6, hd = o.hd + 0.6;
    for (const [lx, lz] of [[-hw, -hd], [hw, -hd], [hw, hd], [-hw, hd], [-hw, -hd]]) pts.push(new THREE.Vector3(o.x + c * lx + s * lz, 0.06, o.z - s * lx + c * lz));
  }
  return new THREE.BufferGeometry().setFromPoints(pts);
}

const FLYING = new Set(['TAKEOFF', 'AUTONOMOUS_TRANSIT', 'MANUAL_HOLD', 'ROUTE_BLOCKED', 'LANDING']);

export default function Scene({ engine, camMode, camResetToken }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const modeRef = useRef(camMode);
  modeRef.current = camMode;
  const applyCamRef = useRef<() => void>(() => {});

  useEffect(() => { applyCamRef.current(); }, [camResetToken, camMode]);

  useEffect(() => {
    const el = host.current!;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    } catch {
      el.innerHTML = '<div class="webgl-fail">WebGL is unavailable. Enable hardware acceleration in the browser to view the 3D environment.</div>';
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor('#070c14');
    el.appendChild(renderer.domElement);
    const labels = new CSS2DRenderer();
    labels.domElement.className = 'labels-layer';
    el.appendChild(labels.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog('#070c14', 110, 300);
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 800);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.maxPolarAngle = Math.PI * 0.48;
    controls.minDistance = 8;
    controls.maxDistance = 240;
    controls.autoRotateSpeed = 0.5;
    controls.addEventListener('start', () => { controls.autoRotate = false; });

    scene.add(new THREE.HemisphereLight('#8fb7e0', '#0b1220', 1.1));
    const key = new THREE.DirectionalLight('#ffffff', 1.4);
    key.position.set(40, 90, 30);
    scene.add(key);
    const rim = new THREE.DirectionalLight('#38d6f5', 0.35);
    rim.position.set(-60, 30, -60);
    scene.add(rim);

    // Ground
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), new THREE.MeshBasicMaterial({ color: '#0a111c' }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.05;
    scene.add(floor);
    const arena = new THREE.Mesh(new THREE.PlaneGeometry(WORLD_HALF * 2, WORLD_HALF * 2), new THREE.MeshBasicMaterial({ color: '#0d1724' }));
    arena.rotation.x = -Math.PI / 2;
    arena.position.y = -0.03;
    scene.add(arena);
    scene.add(new THREE.GridHelper(WORLD_HALF * 2, 60, '#1a3049', '#142538'));
    const major = new THREE.GridHelper(WORLD_HALF * 2, 6, '#28507a', '#28507a');
    major.position.y = 0.01;
    scene.add(major);
    scene.add(new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints([[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([x, z]) => new THREE.Vector3(x * WORLD_HALF, 0.04, z * WORLD_HALF))),
      new THREE.LineBasicMaterial({ color: '#38d6f5', transparent: true, opacity: 0.4 }),
    ));

    const pad = (x: number, z: number, color: string, text: string) => {
      const g = new THREE.Group();
      const disk = new THREE.Mesh(new THREE.CircleGeometry(3.4, 48), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.08 }));
      disk.rotation.x = -Math.PI / 2;
      g.add(disk);
      const ring = new THREE.Mesh(new THREE.RingGeometry(3.25, 3.45, 64), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, side: THREE.DoubleSide }));
      ring.rotation.x = -Math.PI / 2;
      g.add(ring);
      const l = label(text, 'tag tag-pad');
      l.position.set(0, 0.3, 4.8);
      g.add(l);
      g.position.set(x, 0.05, z);
      scene.add(g);
    };
    pad(START.x, START.z, '#34d399', 'LAUNCH');
    pad(GOAL.x, GOAL.z, '#fbbf24', 'TARGET');

    // Drone
    const drone = buildDrone();
    scene.add(drone.group);
    const droneLabel = label('', 'tag tag-drone');
    droneLabel.position.set(0, 1.5, 0);
    drone.group.add(droneLabel);
    const shadow = new THREE.Mesh(new THREE.CircleGeometry(1.8, 32), new THREE.MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.45, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2;
    scene.add(shadow);
    const tetherGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
    const tether = new THREE.Line(tetherGeo, new THREE.LineDashedMaterial({ color: '#38d6f5', dashSize: 0.5, gapSize: 0.5, transparent: true, opacity: 0.45 }));
    tether.frustumCulled = false;
    scene.add(tether);

    // Scan effects (subtle)
    const scanRing = new THREE.Mesh(new THREE.RingGeometry(0.97, 1, 128), new THREE.MeshBasicMaterial({ color: '#38d6f5', transparent: true, opacity: 0.4, side: THREE.DoubleSide, depthWrite: false }));
    scanRing.rotation.x = -Math.PI / 2;
    scene.add(scanRing);
    const rangeRing = new THREE.Mesh(new THREE.RingGeometry(SENSOR_RANGE - 0.2, SENSOR_RANGE, 160), new THREE.MeshBasicMaterial({ color: '#38d6f5', transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false }));
    rangeRing.rotation.x = -Math.PI / 2;
    scene.add(rangeRing);
    const sweep = new THREE.Mesh(new THREE.CircleGeometry(SENSOR_RANGE, 48, 0, 0.5), new THREE.MeshBasicMaterial({ color: '#38d6f5', transparent: true, opacity: 0.06, side: THREE.DoubleSide, depthWrite: false }));
    sweep.rotation.x = -Math.PI / 2;
    const sweepPivot = new THREE.Group();
    sweepPivot.add(sweep);
    scene.add(sweepPivot);

    // Actual flown track (thin)
    const TRAIL_MAX = 6000;
    const trailPos = new Float32Array(TRAIL_MAX * 3);
    const trailGeo = new THREE.BufferGeometry();
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
    trailGeo.setDrawRange(0, 0);
    const trail = new THREE.Line(trailGeo, new THREE.LineBasicMaterial({ color: '#a7f3d0', transparent: true, opacity: 0.55 }));
    trail.frustumCulled = false;
    scene.add(trail);
    let trailN = 0;
    const lastTrail = new THREE.Vector3(1e9, 0, 0);
    const clearTrail = () => { trailN = 0; trailGeo.setDrawRange(0, 0); lastTrail.set(1e9, 0, 0); };

    // Proximity indicators
    const prox = Array.from({ length: 3 }, () => {
      const geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
      const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: '#fbbf24', transparent: true, opacity: 0.95 }));
      line.frustumCulled = false;
      const tag = label('', 'tag tag-dist');
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 8), new THREE.MeshBasicMaterial({ color: '#fbbf24' }));
      scene.add(line, tag, dot);
      return { line, geo, tag, dot };
    });

    // World / plan dependent objects
    const dot = dotTexture();
    let worldGroup = new THREE.Group();
    let planGroup = new THREE.Group();
    let outlines = new Map<string, { mat: THREE.LineBasicMaterial; tag: CSS2DObject }>();
    let points: THREE.Points | null = null;
    let colors = new Float32Array(0);
    let wpObjs: { mesh: THREE.Mesh; ring: THREE.Mesh; tag: CSS2DObject }[] = [];
    let doneLine: Line2 | null = null;
    const lineMats: LineMaterial[] = [];
    let builtWorld = -1, builtPlan = -1, builtLidar = -1;
    let pathStride = 1;

    const disposeGroup = (g: THREE.Object3D) => {
      g.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.geometry) m.geometry.dispose();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose()); else mat?.dispose();
        if (o instanceof CSS2DObject) o.element.remove();
      });
      g.removeFromParent();
    };

    const buildWorld = () => {
      disposeGroup(worldGroup);
      worldGroup = new THREE.Group();
      outlines = new Map();
      const w = engine.world;
      const mats = new Map<ObKind, { solid: THREE.Material; edge: THREE.LineBasicMaterial }>();
      for (const o of w.obstacles) {
        let m = mats.get(o.kind);
        if (!m) {
          const st = KIND_STYLE[o.kind];
          m = {
            solid: new THREE.MeshStandardMaterial({ color: st.fill, metalness: 0.25, roughness: 0.7, transparent: true, opacity: 0.82, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }),
            edge: new THREE.LineBasicMaterial({ color: st.edge, transparent: true, opacity: 0.55 }),
          };
          mats.set(o.kind, m);
        }
        for (const part of o.parts) {
          worldGroup.add(new THREE.Mesh(part, m.solid));
          worldGroup.add(new THREE.LineSegments(new THREE.EdgesGeometry(part, 25), m.edge));
        }
        const mat = new THREE.LineBasicMaterial({ color: '#38d6f5', transparent: true, opacity: 0 });
        const tag = label(`${o.id} · ${o.kind}`, 'tag tag-ob');
        tag.position.set(o.x, o.h + 1.4, o.z);
        tag.visible = false;
        worldGroup.add(new THREE.Line(footprintOutline(o), mat), tag);
        outlines.set(o.id, { mat, tag });
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(w.cloud.positions, 3));
      colors = new Float32Array(w.cloud.count * 3);
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      points = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.42, map: dot, alphaTest: 0.05, vertexColors: true, transparent: true, depthWrite: false, sizeAttenuation: true }));
      points.frustumCulled = false;
      worldGroup.add(points);
      scene.add(worldGroup);
      builtWorld = engine.worldVersion;
      builtLidar = -1;
    };

    const fatLine = (pts: THREE.Vector3[], color: string, width: number, opacity = 1) => {
      const g = new LineGeometry();
      g.setPositions(pts.flatMap((p) => [p.x, p.y, p.z]));
      const m = new LineMaterial({ color: new THREE.Color(color).getHex(), linewidth: width, transparent: opacity < 1, opacity });
      m.resolution.set(el.clientWidth || 1, el.clientHeight || 1);
      lineMats.push(m);
      return new Line2(g, m);
    };

    const buildPlan = () => {
      disposeGroup(planGroup);
      lineMats.length = 0;
      planGroup = new THREE.Group();
      wpObjs = [];
      const all = engine.route.samples;
      pathStride = Math.max(1, Math.floor(all.length / 700));
      const pts = all.filter((_, i) => i % pathStride === 0 || i === all.length - 1);
      planGroup.add(fatLine(pts, '#38d6f5', 3, 0.95));
      doneLine = fatLine(pts.map((p) => p.clone().add(new THREE.Vector3(0, 0.03, 0))), '#34d399', 4.5);
      (doneLine.geometry as LineGeometry).instanceCount = 0;
      planGroup.add(doneLine);
      planGroup.add(fatLine(pts.map((p) => new THREE.Vector3(p.x, 0.08, p.z)), '#38d6f5', 1.5, 0.25));
      const n = engine.waypoints.length;
      engine.waypoints.forEach((w, i) => {
        if (i === 0) return;
        const mesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.75), new THREE.MeshBasicMaterial({ color: '#38d6f5', wireframe: true }));
        mesh.position.copy(w);
        const ring = new THREE.Mesh(new THREE.RingGeometry(1.1, 1.35, 40), new THREE.MeshBasicMaterial({ color: '#38d6f5', transparent: true, opacity: 0.55, side: THREE.DoubleSide }));
        ring.rotation.x = -Math.PI / 2;
        ring.position.set(w.x, 0.07, w.z);
        const beam = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(w.x, 0, w.z), w.clone()]), new THREE.LineBasicMaterial({ color: '#38d6f5', transparent: true, opacity: 0.35 }));
        const tag = label(wpName(i, n), 'tag tag-wp');
        tag.position.set(w.x, w.y + 1.8, w.z);
        planGroup.add(mesh, ring, beam, tag);
        wpObjs.push({ mesh, ring, tag });
      });
      scene.add(planGroup);
      builtPlan = engine.planVersion;
    };

    // Camera modes: FOLLOW tracks the aircraft, ORBIT circles the arena, TOP looks straight down.
    const applyCam = () => {
      const p = engine.pos;
      const mode = modeRef.current;
      controls.autoRotate = false;
      controls.enableRotate = true;
      if (mode === 'top') {
        camera.position.set(0, 175, 0.01);
        controls.target.set(0, 0, 0);
        controls.enableRotate = false;
      } else if (mode === 'follow') {
        const back = new THREE.Vector3(-Math.sin(engine.heading), 0, Math.cos(engine.heading));
        controls.target.set(p.x, p.y + 1, p.z);
        camera.position.set(p.x + back.x * 26, p.y + 14, p.z + back.z * 26);
      } else {
        camera.position.set(-78, 62, 88);
        controls.target.set(0, 4, 0);
        controls.autoRotate = true;
      }
      controls.update();
    };
    applyCamRef.current = applyCam;

    const resize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      labels.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      lineMats.forEach((m) => m.resolution.set(w, h));
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();
    buildWorld();
    buildPlan();
    applyCam();

    const offEvents = engine.on((e) => {
      if (e.type === 'reset') { clearTrail(); applyCam(); }
      if (e.type === 'liftoff' && modeRef.current === 'follow') applyCam();
    });

    const tmp = new THREE.Vector3();
    const prevTarget = new THREE.Vector3();
    const offFrame = engine.onFrame((dt, t) => {
      if (builtWorld !== engine.worldVersion) { buildWorld(); buildPlan(); clearTrail(); applyCam(); }
      if (builtPlan !== engine.planVersion) buildPlan();
      const st = engine.state;
      const active = st === 'PAUSED' ? engine.resumeTo ?? 'STANDBY' : st;
      const flying = FLYING.has(active);
      const running = FLYING.has(st);
      const p = engine.pos;

      drone.group.position.set(p.x, p.y + 0.45, p.z);
      drone.group.rotation.set(0, -engine.heading, 0);
      const gs = running ? Math.hypot(engine.vel.x, engine.vel.z) : 0;
      drone.group.rotateX(-Math.min(0.22, gs * 0.03));
      const spin = running && st !== 'MANUAL_HOLD' ? 1 : st === 'COUNTDOWN' ? 0.25 : 0; // hold: no animated motion
      drone.props.forEach((pr, i) => { pr.rotation.y += (i % 2 ? 1 : -1) * spin * 1.1; pr.visible = spin < 0.6; });
      drone.discMat.opacity = spin > 0.6 ? 0.28 : 0;
      const strobeOn = !running || Math.sin(t * 9) > -0.6;
      drone.strobes.forEach((s) => { s.visible = strobeOn; });
      (droneLabel.element as HTMLElement).textContent = `AEGIS-1 · ${p.y.toFixed(1)} m`;
      shadow.position.set(p.x, 0.06, p.z);
      shadow.scale.setScalar(1 + p.y * 0.03);
      (shadow.material as THREE.MeshBasicMaterial).opacity = Math.max(0.12, 0.45 - p.y * 0.015);
      tetherGeo.setFromPoints([new THREE.Vector3(p.x, 0.1, p.z), p.clone()]);
      tether.computeLineDistances();
      tether.visible = p.y > 0.5;

      const ph = (t % 1.8) / 1.8;
      scanRing.visible = flying;
      scanRing.position.set(p.x, 0.09, p.z);
      scanRing.scale.setScalar(0.5 + ph * SENSOR_RANGE);
      (scanRing.material as THREE.MeshBasicMaterial).opacity = 0.4 * (1 - ph);
      rangeRing.position.set(p.x, 0.08, p.z);
      sweepPivot.visible = flying;
      sweepPivot.position.set(p.x, Math.max(0.1, p.y), p.z);
      sweepPivot.rotation.y = -t * 2.4;

      if (running && p.distanceTo(lastTrail) > 0.5 && trailN < TRAIL_MAX) {
        trailPos.set([p.x, p.y, p.z], trailN * 3);
        trailN++;
        lastTrail.copy(p);
        trailGeo.setDrawRange(0, trailN);
        trailGeo.attributes.position.needsUpdate = true;
      }

      // completed portion of the current route
      if (doneLine) {
        (doneLine.geometry as LineGeometry).instanceCount = Math.floor(engine.pathIndexAt(engine.s) / pathStride);
      }

      // LiDAR colours from the engine's latest scan
      if (points && builtLidar !== engine.lidarVersion) {
        builtLidar = engine.lidarVersion;
        const { positions, intensity, count } = engine.world.cloud;
        const mask = engine.inRangeMask, mapped = engine.mapped;
        for (let i = 0; i < count; i++) {
          const k = intensity[i];
          let r: number, g: number, b: number;
          if (mask[i]) {
            const dx = positions[i * 3] - p.x, dy = positions[i * 3 + 1] - p.y, dz = positions[i * 3 + 2] - p.z;
            const f = 1 - Math.sqrt(dx * dx + dy * dy + dz * dz) / SENSOR_RANGE;
            const v = (0.45 + 0.55 * f) * k;
            r = 0.22 * v; g = 0.84 * v; b = 0.96 * v;
          } else if (mapped[i]) {
            r = 0.1 * k; g = 0.32 * k; b = 0.55 * k;
          } else {
            r = 0.05 * k; g = 0.09 * k; b = 0.14 * k;
          }
          colors[i * 3] = r; colors[i * 3 + 1] = g; colors[i * 3 + 2] = b;
        }
        (points.geometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;
      }

      outlines.forEach((v, id) => {
        const r = engine.inRange.find((x) => x.o.id === id);
        if (r && flying) {
          const c = r.d < WARN_DIST ? C.red : r.d < 14 ? C.amber : C.cyan;
          v.mat.color.copy(c);
          v.mat.opacity = r.d < WARN_DIST ? 0.65 + 0.35 * Math.sin(t * 6) : 0.75;
          v.tag.visible = r.d < 16;
          v.tag.element.classList.toggle('warn', r.d < WARN_DIST);
        } else {
          v.mat.opacity = engine.detected.has(id) ? 0.2 : 0;
          v.tag.visible = false;
        }
      });
      prox.forEach((pr, i) => {
        const r = engine.inRange[i];
        const show = !!r && r.d < 16 && flying;
        pr.line.visible = pr.dot.visible = pr.tag.visible = show;
        if (!show) return;
        nearestPoint(r.o, p, tmp);
        pr.geo.setFromPoints([p.clone(), tmp.clone()]);
        pr.dot.position.copy(tmp);
        pr.tag.position.copy(tmp).lerp(p, 0.5);
        pr.tag.element.textContent = `${r.d.toFixed(1)} m`;
        const c = r.d < WARN_DIST ? C.red : C.amber;
        (pr.line.material as THREE.LineBasicMaterial).color.copy(c);
        (pr.dot.material as THREE.MeshBasicMaterial).color.copy(c);
        pr.tag.element.classList.toggle('warn', r.d < WARN_DIST);
      });

      const routeDone = st === 'COMPLETE' || active === 'LANDING';
      wpObjs.forEach((w, idx) => {
        const i = idx + 1;
        const done = routeDone || i < engine.currentWp;
        const cur = !done && i === engine.currentWp;
        const col = done ? '#34d399' : cur ? '#ffffff' : '#38d6f5';
        (w.mesh.material as THREE.MeshBasicMaterial).color.set(col);
        (w.ring.material as THREE.MeshBasicMaterial).color.set(col);
        w.mesh.rotation.y = t * (cur ? 1.8 : 0.5);
        w.mesh.scale.setScalar(cur ? 1.3 + 0.12 * Math.sin(t * 4) : 1);
        w.tag.element.classList.toggle('cur', cur);
        w.tag.element.classList.toggle('done', done);
      });

      if (modeRef.current === 'follow') {
        prevTarget.copy(controls.target);
        controls.target.lerp(tmp.set(p.x, p.y + 1, p.z), 1 - Math.exp(-dt * 3));
        camera.position.add(tmp.copy(controls.target).sub(prevTarget));
      }
      controls.update();
      renderer.render(scene, camera);
      labels.render(scene, camera);
    });

    return () => {
      offFrame();
      offEvents();
      ro.disconnect();
      controls.dispose();
      disposeGroup(worldGroup);
      disposeGroup(planGroup);
      dot.dispose();
      renderer.dispose();
      el.innerHTML = '';
    };
  }, [engine]);

  return <div ref={host} className="scene-host" />;
}
