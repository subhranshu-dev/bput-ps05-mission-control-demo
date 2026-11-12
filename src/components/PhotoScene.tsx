// Photo-based site view on the landscape test-site photo (native 1280×684).
// Photo and overlays share one SVG coordinate system (image pixels) → overlays stay aligned at any size,
// the photo is never stretched (preserveAspectRatio meet). All values come from the SAME engine snapshot
// the dashboard panels use. Nothing here moves the aircraft.
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Snapshot } from '../sim/engine';
import { SITE, droneImagePoint } from '../sim/site';

export type PhotoView = 'full' | 'drone';
type VB = [number, number, number, number];
type Box = { x0: number; y0: number; x1: number; y1: number };

const W = SITE.photo.width, H = SITE.photo.height;
const VIEWS: Record<PhotoView, VB> = { full: [0, 0, W, H], drone: [700, 110, 580, 574] };

const hit = (a: Box, b: Box) => a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;
const grow = (b: Box, m: number): Box => ({ x0: b.x0 - m, y0: b.y0 - m, x1: b.x1 + m, y1: b.y1 + m });

interface LabelSpec { id: string; anchor: { x: number; y: number }; w: number; h: number; cands: [number, number][] }
type Seg = [number, number, number, number];
/** Does segment (x1,y1)-(x2,y2) cross box b? (sampled — segments here are short relative to label size) */
function segHits(s: Seg, b: Box) {
  for (let i = 0; i <= 60; i++) { const t = i / 60, x = s[0] + (s[2] - s[0]) * t, y = s[1] + (s[3] - s[1]) * t; if (x > b.x0 && x < b.x1 && y > b.y0 && y < b.y1) return true; }
  return false;
}
/** The leaning Point 1 pole as thin horizontal slices (follows its slant instead of one big box). */
function poleSlices(): Box[] {
  const { top, base } = SITE.p1, out: Box[] = [];
  for (let y = top.y - 6; y < base.y + 4; y += 30) {
    const t = Math.max(0, Math.min(1, (y + 15 - top.y) / (base.y - top.y)));
    const cx = top.x + (base.x - top.x) * t, hw = 26;
    out.push({ x0: cx - hw, y0: y, x1: cx + hw, y1: y + 30 });
  }
  return out;
}
/** Greedy label placement: first candidate inside the photo that overlaps no obstacle, line or placed label. */
function placeLabels(specs: LabelSpec[], obstacles: Box[], segs: Seg[], bounds: Box, u: number, pad: number) {
  const placed: Record<string, Box> = {};
  const taken: Box[] = [];
  for (const s of specs) {
    let best: Box | null = null, bestCost = Infinity;
    for (const [dx, dy] of s.cands) {
      const b = { x0: s.anchor.x + dx * u, y0: s.anchor.y + dy * u, x1: s.anchor.x + (dx + s.w) * u, y1: s.anchor.y + (dy + s.h) * u };
      const inside = b.x0 >= bounds.x0 && b.y0 >= bounds.y0 && b.x1 <= bounds.x1 && b.y1 <= bounds.y1;
      const cost = (inside ? 0 : 1000) + [...obstacles, ...taken].filter((o) => hit(grow(b, pad), o)).length * 100 + segs.filter((sg) => segHits(sg, b)).length * 6;
      if (cost < bestCost) { best = b; bestCost = cost; }
      if (cost === 0) break;
    }
    placed[s.id] = best!;
    taken.push(best!);
  }
  return placed;
}
/** Leader from an anchor to the nearest point of a box. */
const leaderEnd = (a: { x: number; y: number }, b: Box) => ({ x: Math.max(b.x0, Math.min(a.x, b.x1)), y: Math.max(b.y0, Math.min(a.y, b.y1)) });

export default function PhotoScene({ snap, view, resetToken }: { snap: Snapshot; view: PhotoView; resetToken: number }) {
  const host = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 900, h: 480 });
  const [vb, setVb] = useState<VB>(VIEWS.full);
  const vbRef = useRef<VB>(VIEWS.full);

  useEffect(() => {
    const el = host.current!;
    const ro = new ResizeObserver(() => setSize({ w: el.clientWidth || 1, h: el.clientHeight || 1 }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => { // eased viewBox tween only while switching views
    const target = VIEWS[view], from = vbRef.current.slice() as VB, t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / 420), e = 1 - Math.pow(1 - t, 3);
      const cur = from.map((v, i) => v + (target[i] - v) * e) as VB;
      vbRef.current = cur; setVb(cur);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [view, resetToken]);

  // image units per screen px (meet) and the photo's on-screen offset inside the host
  const u = Math.max(vb[2] / size.w, vb[3] / size.h);
  const offX = (size.w - vb[2] / u) / 2;
  const fs = (px: number) => px * u;

  const st = snap.state === 'PAUSED' ? snap.resumeTo ?? 'STANDBY' : snap.state;
  const alt = snap.pos.z;
  const airborne = alt > 0.02;
  const hold = snap.state === 'MANUAL_HOLD';
  const iconPx = Math.max(48, Math.min(72, size.h * 0.085)); // 56–72 px at 1080p
  const scale = (iconPx / 64) * u; // icon drawn in a 64-unit design box
  const d = droneImagePoint(alt);
  const half = (iconPx / 2) * u;
  const droneBox: Box = { x0: d.x - half, y0: d.y - half, x1: d.x + half, y1: d.y + half };
  const g = SITE.groundAnchor, p1 = SITE.p1, p2 = SITE.p2;
  const p2Box: Box = grow(p2.box, fs(6));
  const ringP1: Box = { x0: p1.base.x - fs(30), y0: p1.base.y - fs(10), x1: p1.base.x + fs(30), y1: p1.base.y + fs(10) };
  const routeAngle = Math.atan2(p2.base.y - p1.base.y, p2.base.x - p1.base.x); // heading 000° = toward Point 2
  const hdgRad = routeAngle + (snap.heading * Math.PI) / 180;

  const mode = st === 'MANUAL_HOLD' ? 'POSITION HOLD' : st === 'STANDBY' ? 'ON PAD' : st.replace('_', ' ');
  const est = SITE.distanceIsEstimate ? ' est.' : '';
  const L = useMemo(() => ({
    drone: [`AEGIS-1 · ${mode}`, `ALT ${alt.toFixed(1)} m · HDG ${String(snap.heading).padStart(3, '0')}° · GS ${snap.groundSpeed.toFixed(1)} m/s`],
    p1: ['POINT 1 — START', 'Launch position · AEGIS-1'],
    p2: ['POINT 2 — DESTINATION', `${SITE.distanceM.toFixed(1)} m from P1${est} · route not flown`],
  }), [mode, alt, snap.heading, snap.groundSpeed, est]);

  const stemTop = d.y + half;
  const stemMid = { x: g.x, y: (g.y + stemTop) / 2 };
  // screen-space overlays that sit on top of the photo (altitude tape on the left edge of the viewport)
  const tapeBox: Box = { x0: vb[0] + (-20 - offX) * u, y0: -1e4, x1: vb[0] + (72 - offX) * u, y1: 1e4 }; // tape sits at viewport x 14–78 (host starts at 20)
  const obstacles: Box[] = [droneBox, p2Box, ringP1, ...poleSlices(), SITE.realDroneBox, tapeBox];
  const segs: Seg[] = [[p1.base.x, p1.base.y, p2.base.x, p2.base.y], ...(airborne ? [[g.x, g.y, g.x, stemTop] as Seg] : [])];
  const bounds: Box = { x0: vb[0] + fs(6), y0: Math.max(0, vb[1]) + fs(6), x1: Math.min(W, vb[0] + vb[2]) - fs(6), y1: Math.min(H, vb[1] + vb[3]) - fs(6) };
  const specs: LabelSpec[] = [
    { id: 'stem', anchor: { x: g.x, y: airborne ? Math.max(stemTop + fs(6), stemMid.y) : g.y - fs(40) }, w: 54, h: 20, cands: [[-64, -10], [-64, 8], [-64, -30], [10, -10], [-64, 28]] },
    { id: 'drone', anchor: { x: d.x - half, y: d.y }, w: 232, h: 44, cands: [[-244, -22], [-244, -70], [-244, 26], [-320, -22], [-320, -70], [-320, 26], [-400, -22], [-244, -118], [-320, -118], [-400, 26]] },
    { id: 'p1', anchor: { x: p1.base.x - fs(30), y: p1.base.y }, w: 196, h: 44, cands: [[-210, -70], [-210, -120], [-210, -170], [-210, -24], [-420, -70], [-210, -220]] },
    { id: 'p2', anchor: { x: p2.top.x, y: p2.top.y }, w: 252, h: 44, cands: [[34, 34], [34, 80], [34, -20], [-260, 34], [34, -70], [-100, -90]] },
  ];
  const lab = placeLabels(specs, obstacles, segs, bounds, u, fs(4));
  const leader = (id: string, a: { x: number; y: number }) => { const e = leaderEnd(a, lab[id]); return <line x1={a.x} y1={a.y} x2={e.x} y2={e.y} className="leader" strokeWidth={fs(1.2)} />; };
  const box = (id: string, lines: string[], cls: string, big = true) => {
    const b = lab[id];
    return (
      <g className={`lbl ${cls}`} data-ov={`label-${id}`}>
        <rect x={b.x0} y={b.y0} width={b.x1 - b.x0} height={b.y1 - b.y0} rx={fs(5)} className="label-bg" strokeWidth={fs(1)} />
        <text x={b.x0 + fs(9)} y={b.y0 + fs(big ? 17 : 15)} fontSize={fs(big ? 12 : 11)} className="label-t">{lines[0]}</text>
        {lines[1] && <text x={b.x0 + fs(9)} y={b.y0 + fs(34)} fontSize={fs(10.5)} className="label-s">{lines[1]}</text>}
      </g>
    );
  };

  return (
    <div className="photo-host" ref={host}>
      <svg className="photo-svg" viewBox={vb.join(' ')} preserveAspectRatio="xMidYMid meet" role="img" aria-label="Real test-site photograph with navigation overlays">
        <image href={SITE.photo.src} x={0} y={0} width={W} height={H} className="photo-img" preserveAspectRatio="none" />
        <rect x={0} y={0} width={W} height={H} className="photo-frame" vectorEffect="non-scaling-stroke" />

        {/* planned route between the two real pillars (ground line; reference only — not flown) */}
        <g className="route" data-testid="route">
          <line x1={p1.base.x} y1={p1.base.y} x2={p2.base.x} y2={p2.base.y} className="route-halo" strokeWidth={fs(7)} />
          <line x1={p1.base.x} y1={p1.base.y} x2={p2.base.x} y2={p2.base.y} className="route-line" strokeWidth={fs(2.2)} strokeDasharray={`${fs(8)} ${fs(6)}`} />
        </g>

        {/* POINT 2 — DESTINATION (real far pillar) */}
        <g className="pt pt2" data-testid="point2" data-ov="p2">
          <rect x={p2.box.x0 - fs(5)} y={p2.box.y0 - fs(5)} width={p2.box.x1 - p2.box.x0 + fs(10)} height={p2.box.y1 - p2.box.y0 + fs(10)} rx={fs(3)} className="pt-frame" strokeWidth={fs(2)} />
          <ellipse cx={p2.base.x} cy={p2.base.y} rx={fs(14)} ry={fs(4.5)} strokeWidth={fs(1.6)} className="pt-ring" />
        </g>
        {/* POINT 1 — START (real near pillar): ring at its base */}
        <g className="pt pt1" data-testid="point1">
          <ellipse cx={p1.base.x} cy={p1.base.y} rx={fs(30)} ry={fs(10)} strokeWidth={fs(2.2)} className="pt-ring" />
        </g>

        {/* virtual aircraft: shadow, altitude stem, quadcopter icon */}
        <ellipse cx={g.x} cy={g.y} rx={fs(24 - Math.min(10, alt))} ry={fs(7 - Math.min(3, alt * 0.3))} className="drone-shadow" data-testid="drone-shadow" />
        {airborne && <line x1={g.x} y1={g.y} x2={g.x} y2={stemTop} className="drone-stem" strokeWidth={fs(1.8)} strokeDasharray={`${fs(5)} ${fs(4)}`} />}
        <g transform={`translate(${d.x} ${d.y}) scale(${scale})`} data-testid="drone-marker" data-ov="drone">
          <g className={`quad ${airborne ? 'flying' : ''} ${hold ? 'hold' : ''}`}>
            <circle r={30} className="quad-halo" />
            <g className="quad-arms"><line x1={-19} y1={-19} x2={19} y2={19} /><line x1={19} y1={-19} x2={-19} y2={19} /></g>
            {[[-19, -19], [19, -19], [19, 19], [-19, 19]].map(([x, y], i) => (
              <g key={i} transform={`translate(${x} ${y})`}>
                <circle r={11} className="quad-rotor" />
                <g className={`quad-prop ${i % 2 ? 'ccw' : ''}`}><line x1={-9} y1={0} x2={9} y2={0} /><line x1={0} y1={-3} x2={0} y2={3} /></g>
              </g>
            ))}
            <rect x={-9} y={-9} width={18} height={18} rx={4} className="quad-body" />
            <g transform={`rotate(${(hdgRad * 180) / Math.PI})`}><path d="M31 0 L22 -6 L22 6 Z" className="quad-hdg" /></g>
          </g>
        </g>

        {/* auto-placed labels with leader lines */}
        <g className="labels">
          {leader('p2', { x: p2.top.x, y: p2.top.y })}
          {leader('p1', { x: p1.base.x - fs(30), y: p1.base.y })}
          {leader('drone', { x: d.x - half, y: d.y })}
          {box('p2', L.p2, 'p2l')}
          {box('p1', L.p1, 'p1l')}
          {box('drone', L.drone, `dronel ${hold ? 'hold' : ''}`)}
          <g className="lbl stem-tag" data-ov="label-stem" style={{ display: airborne ? undefined : 'none' }}>
            <rect x={lab.stem.x0} y={lab.stem.y0} width={lab.stem.x1 - lab.stem.x0} height={lab.stem.y1 - lab.stem.y0} rx={fs(4)} className="label-bg" strokeWidth={fs(1)} />
            <text x={(lab.stem.x0 + lab.stem.x1) / 2} y={lab.stem.y0 + fs(14)} fontSize={fs(11)} textAnchor="middle" className="label-t">{alt.toFixed(1)} m</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
