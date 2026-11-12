// Procedural quadcopter modelled on the team's real drone in the photo (X-frame, dark frame, white props).
// No external assets. Units: metres. Forward = −Z, up = +Y.
import * as THREE from 'three';

export interface DroneRig {
  group: THREE.Group; // world placement (set by the scene)
  body: THREE.Group; // visual-only wobble/drift/pitch applied here
  props: { blades: THREE.Group; disc: THREE.Mesh; dir: 1 | -1 }[];
  strobe: THREE.Mesh;
  strobeLight: THREE.PointLight;
  navRed: THREE.Mesh[];
  navGreen: THREE.Mesh[];
  ring: THREE.Mesh;
  ledMats: THREE.MeshStandardMaterial[];
  bounds: THREE.Box3; // local bounds for hit-testing / screen boxes
  update(dt: number, rpm: number, t: number, opts: { strobe: boolean; ledGain: number }): void;
  dispose(): void;
}

function blurDiscTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  const grd = g.createRadialGradient(64, 64, 8, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,0.0)');
  grd.addColorStop(0.18, 'rgba(255,255,255,0.35)');
  grd.addColorStop(0.85, 'rgba(255,255,255,0.22)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function buildDrone(scale = 1): DroneRig {
  const disposables: { dispose(): void }[] = [];
  const keep = <T extends { dispose(): void }>(x: T) => { disposables.push(x); return x; };
  const group = new THREE.Group();
  const body = new THREE.Group();
  group.add(body);

  const carbon = keep(new THREE.MeshPhysicalMaterial({ color: '#16181c', roughness: 0.38, metalness: 0.35, clearcoat: 0.6, clearcoatRoughness: 0.25 }));
  const plate = keep(new THREE.MeshPhysicalMaterial({ color: '#1f232a', roughness: 0.5, metalness: 0.2, clearcoat: 0.3 }));
  const metal = keep(new THREE.MeshStandardMaterial({ color: '#8a929c', roughness: 0.28, metalness: 0.9 }));
  const dark = keep(new THREE.MeshStandardMaterial({ color: '#0d0f12', roughness: 0.6, metalness: 0.2 }));
  const canopyMat = keep(new THREE.MeshPhysicalMaterial({ color: '#20262f', roughness: 0.18, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.08 }));
  const accent = keep(new THREE.MeshStandardMaterial({ color: '#38d6f5', emissive: '#38d6f5', emissiveIntensity: 0.6, roughness: 0.4 }));
  const propMat = keep(new THREE.MeshStandardMaterial({ color: '#f2f4f6', roughness: 0.45, metalness: 0.05 }));
  const discTex = keep(blurDiscTexture());
  const discMat = keep(new THREE.MeshBasicMaterial({ map: discTex, color: '#ffffff', transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }));
  const lens = keep(new THREE.MeshPhysicalMaterial({ color: '#0a0d12', roughness: 0.05, metalness: 0.2, clearcoat: 1 }));
  const mk = (geo: THREE.BufferGeometry, mat: THREE.Material) => { keep(geo); const m = new THREE.Mesh(geo, mat); m.castShadow = true; return m; };

  // centre body: stacked plates + canopy + battery
  const bottomPlate = mk(new THREE.BoxGeometry(0.17, 0.012, 0.22), plate); bottomPlate.position.y = -0.01; body.add(bottomPlate);
  const topPlate = mk(new THREE.BoxGeometry(0.15, 0.01, 0.2), plate); topPlate.position.y = 0.035; body.add(topPlate);
  const battery = mk(new THREE.BoxGeometry(0.075, 0.035, 0.15), dark); battery.position.set(0, 0.06, 0.01); body.add(battery);
  const strap = mk(new THREE.BoxGeometry(0.08, 0.037, 0.012), accent); strap.position.set(0, 0.06, 0.03); body.add(strap);
  const canopy = mk(new THREE.SphereGeometry(0.075, 24, 14, 0, Math.PI * 2, 0, Math.PI / 2), canopyMat);
  canopy.scale.set(1, 0.55, 1.35); canopy.position.set(0, 0.04, -0.05); body.add(canopy);
  for (const x of [-0.06, 0.06]) for (const z of [-0.08, 0.08]) { const s = mk(new THREE.CylinderGeometry(0.004, 0.004, 0.045, 6), metal); s.position.set(x, 0.012, z); body.add(s); }

  // arms (X-frame) + motor bells + props
  const props: DroneRig['props'] = [];
  const armLen = 0.26;
  const navRed: THREE.Mesh[] = [], navGreen: THREE.Mesh[] = [];
  const ledMats: THREE.MeshStandardMaterial[] = [];
  [[1, -1], [-1, -1], [1, 1], [-1, 1]].forEach(([sx, sz], i) => {
    const ang = Math.atan2(sx, sz);
    const arm = mk(new THREE.BoxGeometry(0.026, 0.014, armLen), carbon);
    arm.position.set((sx * armLen) / 2 * Math.SQRT1_2, 0.012, (sz * armLen) / 2 * Math.SQRT1_2);
    arm.rotation.y = ang;
    body.add(arm);
    const mx = sx * armLen * Math.SQRT1_2, mz = sz * armLen * Math.SQRT1_2;
    const stator = mk(new THREE.CylinderGeometry(0.019, 0.021, 0.022, 20), dark); stator.position.set(mx, 0.03, mz); body.add(stator);
    const bell = mk(new THREE.CylinderGeometry(0.02, 0.02, 0.016, 24), metal); bell.position.set(mx, 0.048, mz); body.add(bell);
    const cap = mk(new THREE.CylinderGeometry(0.006, 0.006, 0.012, 10), metal); cap.position.set(mx, 0.062, mz); body.add(cap);
    const blades = new THREE.Group();
    blades.position.set(mx, 0.062, mz);
    for (const r of [0, Math.PI]) {
      const blade = mk(new THREE.BoxGeometry(0.115, 0.004, 0.022), propMat);
      blade.position.x = Math.cos(r) * 0.062; blade.rotation.y = r; blade.rotation.x = 0.12 * (r ? -1 : 1);
      blades.add(blade);
    }
    body.add(blades);
    const disc = new THREE.Mesh(keep(new THREE.CircleGeometry(0.13, 40)), discMat);
    disc.rotation.x = -Math.PI / 2; disc.position.set(mx, 0.064, mz);
    body.add(disc);
    props.push({ blades, disc, dir: i % 3 === 0 ? 1 : -1 });
    // navigation LEDs under the arm tips: red = port (left, −X), green = starboard (right, +X)
    const isRed = sx < 0;
    const lm = keep(new THREE.MeshStandardMaterial({ color: isRed ? '#ff2a3a' : '#22ff7a', emissive: isRed ? '#ff2a3a' : '#22ff7a', emissiveIntensity: 2.2 }));
    ledMats.push(lm);
    const led = new THREE.Mesh(keep(new THREE.SphereGeometry(0.009, 10, 8)), lm);
    led.position.set(mx, 0.012, mz);
    body.add(led);
    (isRed ? navRed : navGreen).push(led);
    // landing gear leg under each motor
    const leg = mk(new THREE.CylinderGeometry(0.004, 0.004, 0.09, 6), carbon);
    leg.position.set(mx * 0.82, -0.035, mz * 0.82); leg.rotation.z = sx * 0.12; leg.rotation.x = -sz * 0.12;
    body.add(leg);
    const foot = mk(new THREE.SphereGeometry(0.008, 10, 8), dark); foot.position.set(mx * 0.86, -0.08, mz * 0.86); body.add(foot);
  });

  // front gimbal camera
  const gimbalArm = mk(new THREE.BoxGeometry(0.014, 0.03, 0.014), dark); gimbalArm.position.set(0, -0.03, -0.11); body.add(gimbalArm);
  const gimbal = mk(new THREE.SphereGeometry(0.022, 20, 14), metal); gimbal.position.set(0, -0.052, -0.115); body.add(gimbal);
  const lensM = mk(new THREE.CylinderGeometry(0.011, 0.011, 0.012, 16), lens); lensM.rotation.x = Math.PI / 2; lensM.position.set(0, -0.052, -0.135); body.add(lensM);

  // white anti-collision strobe (top) + underside status ring
  const strobeMat = keep(new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#ffffff', emissiveIntensity: 0 }));
  ledMats.push(strobeMat);
  const strobe = new THREE.Mesh(keep(new THREE.SphereGeometry(0.011, 12, 10)), strobeMat);
  strobe.position.set(0, 0.088, 0.04);
  body.add(strobe);
  const strobeLight = new THREE.PointLight('#ffffff', 0, 3.5, 2);
  strobeLight.position.copy(strobe.position);
  body.add(strobeLight);
  const ringMat = keep(new THREE.MeshStandardMaterial({ color: '#38d6f5', emissive: '#38d6f5', emissiveIntensity: 1.6 }));
  ledMats.push(ringMat);
  const ring = new THREE.Mesh(keep(new THREE.TorusGeometry(0.05, 0.004, 8, 40)), ringMat);
  ring.rotation.x = Math.PI / 2; ring.position.y = -0.018;
  body.add(ring);

  group.scale.setScalar(scale);
  const bounds = new THREE.Box3(new THREE.Vector3(-0.32, -0.09, -0.32), new THREE.Vector3(0.32, 0.1, 0.32));

  let strobePhase = 0;
  return {
    group, body, props, strobe, strobeLight, navRed, navGreen, ring, ledMats, bounds,
    update(dt, rpm, t, opts) {
      // rpm 0..1: blades visible at low rpm, blurred disc at speed
      for (const p of props) p.blades.rotation.y += p.dir * dt * (6 + rpm * 160);
      const blur = THREE.MathUtils.smoothstep(rpm, 0.35, 0.8);
      discMat.opacity = 0.55 * blur;
      for (const p of props) (p.blades.children as THREE.Mesh[]).forEach((b) => { (b.material as THREE.MeshStandardMaterial).opacity = 1; b.visible = blur < 0.85; });
      // strobe: double flash every 1.2 s
      strobePhase = opts.strobe ? (strobePhase + dt) % 1.2 : 0;
      const on = opts.strobe && (strobePhase < 0.05 || (strobePhase > 0.16 && strobePhase < 0.21));
      strobeMat.emissiveIntensity = on ? 8 * opts.ledGain : 0.05;
      strobeLight.intensity = on ? 4 * opts.ledGain : 0;
      for (const m of ledMats) if (m !== strobeMat) m.emissiveIntensity = (m === ringMat ? 1.4 + 0.4 * Math.sin(t * 3) : 2.2) * opts.ledGain;
    },
    dispose() { disposables.forEach((d) => d.dispose()); },
  };
}
