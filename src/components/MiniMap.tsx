import { useEffect, useRef } from 'react';
import { Engine, SENSOR_RANGE } from '../sim/engine';
import { WORLD_HALF } from '../sim/world';

export default function MiniMap({ engine }: { engine: Engine }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    const trail: [number, number][] = [];
    let last = { x: 1e9, z: 0 };
    const offReset = engine.on((e) => { if (e.type === 'reset') { trail.length = 0; last = { x: 1e9, z: 0 }; } });
    let acc = 1;
    const draw = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const W = cv.clientWidth, H = cv.clientHeight;
      if (cv.width !== W * dpr || cv.height !== H * dpr) { cv.width = W * dpr; cv.height = H * dpr; }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // map extents: the real site's bounds in site mode, the generated arena otherwise
      const b = engine.site ? engine.site.bounds : { minX: -WORLD_HALF, maxX: WORLD_HALF, minZ: -WORLD_HALF, maxZ: WORLD_HALF };
      const bw = b.maxX - b.minX, bh = b.maxZ - b.minZ;
      const S = Math.min(W / (bw + 4), H / (bh + 4));
      const ox = W / 2 - ((b.minX + b.maxX) / 2) * S, oy = H / 2 - ((b.minZ + b.maxZ) / 2) * S;
      const X = (x: number) => ox + x * S;
      const Y = (z: number) => oy + z * S;
      ctx.clearRect(0, 0, W, H);
      // grid (5 m on the site, 20 m on the generated arena)
      const step = engine.site ? 5 : 20;
      ctx.strokeStyle = 'rgba(47,212,255,0.07)';
      ctx.lineWidth = 1;
      for (let g = Math.ceil(b.minX / step) * step; g <= b.maxX; g += step) { ctx.beginPath(); ctx.moveTo(X(g), Y(b.minZ)); ctx.lineTo(X(g), Y(b.maxZ)); ctx.stroke(); }
      for (let g = Math.ceil(b.minZ / step) * step; g <= b.maxZ; g += step) { ctx.beginPath(); ctx.moveTo(X(b.minX), Y(g)); ctx.lineTo(X(b.maxX), Y(g)); ctx.stroke(); }
      ctx.strokeStyle = 'rgba(47,212,255,0.35)';
      ctx.strokeRect(X(b.minX), Y(b.minZ), bw * S, bh * S);
      const p = engine.pos;
      if (!engine.site) {
        // sensor range (generated environment only — no synthetic LiDAR on the real site)
        ctx.fillStyle = 'rgba(47,212,255,0.06)';
        ctx.beginPath(); ctx.arc(X(p.x), Y(p.z), SENSOR_RANGE * S, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(47,212,255,0.25)'; ctx.stroke();
      }
      // obstacles
      const inR = new Map(engine.inRange.map((r) => [r.o.id, r.d]));
      for (const o of engine.world.obstacles) {
        const d = inR.get(o.id);
        const seen = engine.detected.has(o.id);
        ctx.fillStyle = d !== undefined ? (d < 7 ? 'rgba(255,77,94,0.55)' : 'rgba(255,181,71,0.35)') : seen ? 'rgba(47,140,200,0.35)' : 'rgba(120,150,180,0.13)';
        ctx.strokeStyle = d !== undefined ? 'rgba(255,181,71,0.8)' : 'rgba(47,212,255,0.25)';
        ctx.save();
        ctx.translate(X(o.x), Y(o.z));
        if (o.shape === 'circle') { ctx.beginPath(); ctx.arc(0, 0, o.r * S, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); }
        else { ctx.rotate(-o.rot); ctx.fillRect(-o.hw * S, -o.hd * S, o.hw * 2 * S, o.hd * 2 * S); ctx.strokeRect(-o.hw * S, -o.hd * S, o.hw * 2 * S, o.hd * 2 * S); }
        ctx.restore();
      }
      // path
      if (engine.route) {
        const all = engine.route.samples;
        const stride = Math.max(1, Math.floor(all.length / 200));
        const pts = all.filter((_, i) => i % stride === 0 || i === all.length - 1);
        const k = Math.floor(engine.pathIndexAt(engine.s) / stride);
        ctx.lineWidth = 1.6;
        ctx.strokeStyle = 'rgba(56,214,245,0.9)'; ctx.setLineDash([4, 3]);
        ctx.beginPath(); pts.slice(k).forEach((q, i) => (i ? ctx.lineTo(X(q.x), Y(q.z)) : ctx.moveTo(X(q.x), Y(q.z)))); ctx.stroke();
        ctx.setLineDash([]);
        if (k > 0) { ctx.strokeStyle = '#34d399'; ctx.lineWidth = 2.2; ctx.beginPath(); pts.slice(0, k + 1).forEach((q, i) => (i ? ctx.lineTo(X(q.x), Y(q.z)) : ctx.moveTo(X(q.x), Y(q.z)))); ctx.stroke(); }
        engine.waypoints.forEach((w, i) => {
          if (!i) return;
          const done = i < engine.currentWp || engine.state === 'COMPLETE' || engine.state === 'LANDING';
          ctx.fillStyle = done ? '#34d399' : i === engine.currentWp ? '#ffffff' : '#38d6f5';
          ctx.beginPath(); ctx.arc(X(w.x), Y(w.z), 2.6, 0, Math.PI * 2); ctx.fill();
        });
      }
      // trail
      if (p.y > 0.2 && Math.hypot(p.x - last.x, p.z - last.z) > 0.8) { trail.push([p.x, p.z]); last = { x: p.x, z: p.z }; }
      if (trail.length > 1) {
        ctx.strokeStyle = 'rgba(167,243,208,0.55)'; ctx.lineWidth = 1;
        ctx.beginPath(); trail.forEach(([x, z], i) => (i ? ctx.lineTo(X(x), Y(z)) : ctx.moveTo(X(x), Y(z)))); ctx.stroke();
      }
      // pads
      const sp = engine.startPt, gp = engine.goalPt;
      ctx.lineWidth = 1.6;
      ctx.strokeStyle = '#38d6f5'; ctx.beginPath(); ctx.arc(X(sp.x), Y(sp.z), 6, 0, Math.PI * 2); ctx.stroke();
      ctx.strokeStyle = '#fbbf24'; ctx.beginPath(); ctx.arc(X(gp.x), Y(gp.z), 6, 0, Math.PI * 2); ctx.stroke();
      if (engine.site) {
        ctx.font = '600 10.5px "JetBrains Mono", monospace';
        ctx.fillStyle = '#38d6f5'; ctx.fillText('P1 START', X(sp.x) + 10, Y(sp.z) + 4);
        ctx.fillStyle = '#fbbf24'; ctx.fillText('P2 DEST', X(gp.x) + 10, Y(gp.z) + 4);
        ctx.fillStyle = 'rgba(180,195,210,0.7)'; ctx.fillText(`${engine.site.distanceM.toFixed(1)} m${engine.site.distanceIsEstimate ? ' est.' : ''}`, X(0) - 70, Y((sp.z + gp.z) / 2));
      }
      // drone
      ctx.save();
      ctx.translate(X(p.x), Y(p.z));
      ctx.rotate(engine.heading);
      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.moveTo(0, -7); ctx.lineTo(4.5, 5); ctx.lineTo(0, 2.5); ctx.lineTo(-4.5, 5); ctx.closePath(); ctx.fill();
      ctx.restore();
      // north
      ctx.fillStyle = 'rgba(200,220,240,0.6)'; ctx.font = '600 11px "JetBrains Mono", monospace';
      ctx.fillText(engine.site ? '↑ P2' : 'N ↑', W - 34, 15);
    };
    draw();
    const offFrame = engine.onFrame((dt) => { acc += dt; if (acc >= 1 / 15) { acc = 0; draw(); } });
    return () => { offFrame(); offReset(); };
  }, [engine]);
  return <canvas ref={ref} className="minimap" />;
}
