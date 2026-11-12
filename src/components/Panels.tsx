import { Compass, Gauge, Radar, Crosshair, MapPin } from 'lucide-react';
import { Panel, Metric, Row, f1, fmtClock } from './ui';
import { LogEntry, MissionState, Snapshot, SENSOR_RANGE, WARN_DIST, wpName } from '../sim/engine';

export const STATE_LABEL: Record<MissionState, string> = {
  WELCOME: 'OFFLINE', INITIALIZING: 'INITIALIZING', READY: 'READY', BRIEFING: 'BRIEFING', STANDBY: 'STANDBY',
  COUNTDOWN: 'COUNTDOWN', TAKEOFF: 'TAKEOFF', AUTONOMOUS_TRANSIT: 'AUTONOMOUS', MANUAL_HOLD: 'MANUAL HOLD',
  ROUTE_BLOCKED: 'ROUTE BLOCKED', LANDING: 'LANDING', COMPLETE: 'COMPLETE', PAUSED: 'PAUSED',
};
export const STATE_TONE: Record<MissionState, string> = {
  WELCOME: 'muted', INITIALIZING: 'cyan', READY: 'green', BRIEFING: 'cyan', STANDBY: 'green', COUNTDOWN: 'amber',
  TAKEOFF: 'cyan', AUTONOMOUS_TRANSIT: 'cyan', MANUAL_HOLD: 'amber', ROUTE_BLOCKED: 'red', LANDING: 'cyan', COMPLETE: 'green', PAUSED: 'amber',
};

function HeadingTape({ heading }: { heading: number }) {
  const marks = [];
  const base = Math.round(heading / 10) * 10;
  for (let a = base - 60; a <= base + 60; a += 10) {
    const off = a - heading;
    if (Math.abs(off) > 58) continue;
    const v = ((a % 360) + 360) % 360;
    const lbl = v === 0 ? 'N' : v === 90 ? 'E' : v === 180 ? 'S' : v === 270 ? 'W' : v % 30 === 0 ? String(v) : '';
    marks.push(<div key={a} className={`ht-m ${lbl ? 'maj' : ''}`} style={{ left: `${50 + off * 0.85}%` }}>{lbl && <span>{lbl}</span>}</div>);
  }
  return <div className="htape" aria-label={`Heading ${heading} degrees`}><div className="ht-c" />{marks}</div>;
}

export function FlightPanel({ snap }: { snap: Snapshot }) {
  return (
    <Panel title="Flight" icon={<Gauge size={15} />} aside={<span className="mono muted">T+{fmtClock(snap.missionTime)}</span>}>
      <div className="pos-grid">
        <div className="pos"><span>EAST</span><b className="mono">{snap.pos.x.toFixed(1)}</b></div>
        <div className="pos"><span>NORTH</span><b className="mono">{snap.pos.y.toFixed(1)}</b></div>
        <div className="pos alt"><span>ALT AGL</span><b className="mono">{snap.pos.z.toFixed(1)}</b></div>
      </div>
      <div className="metric-grid">
        <Metric label="Ground speed" value={snap.groundSpeed.toFixed(1)} unit="m/s" tone="cyan" />
        <Metric label="Vertical speed" value={(snap.vz > 0.05 ? '+' : snap.vz < -0.05 ? '−' : '') + Math.abs(snap.vz).toFixed(1)} unit="m/s" />
      </div>
      <div className="hdg-row">
        <Metric label="Heading" value={String(snap.heading).padStart(3, '0')} unit="°" />
        <HeadingTape heading={snap.heading} />
      </div>
    </Panel>
  );
}

export function NavPanel({ snap }: { snap: Snapshot }) {
  const st = snap.state === 'PAUSED' ? snap.resumeTo ?? 'STANDBY' : snap.state;
  const n = snap.waypointCount;
  const routeDone = st === 'LANDING' || st === 'COMPLETE';
  const wpLabel = snap.site
    ? (routeDone ? 'Point 2 reached' : `Point 2 · ${snap.currentWp} of ${n}`)
    : routeDone ? 'Target reached' : `${wpName(snap.currentWp, n + 1)} · ${snap.currentWp} of ${n}`;
  const status: [string, string] =
    st === 'ROUTE_BLOCKED' ? ['Blocked', 'red'] :
    st === 'MANUAL_HOLD' ? ['Position hold', 'amber'] :
    st === 'AUTONOMOUS_TRANSIT' ? ['Tracking route', 'cyan'] :
    routeDone ? ['Route complete', 'green'] : ['Route ready', 'green'];
  const r = snap.route;
  return (
    <Panel title="Navigation" icon={<Compass size={15} />} aside={<span className="tag-gps">GPS DENIED</span>}>
      <div className="route-prog">
        <div className="route-top"><span>Route progress</span><b className="mono">{Math.round(snap.progress * 100)}%</b></div>
        <div className="bar"><span style={{ width: `${snap.progress * 100}%` }} /></div>
        <div className="route-bot mono"><span>{f1(snap.routeFlown)} m flown</span><span>{f1(snap.remaining)} m left</span></div>
      </div>
      <Row k="Status" v={status[0]} tone={status[1]} />
      <Row k="Waypoint" v={wpLabel} />
      <Row k="Route" v={`R${r.rev} · ${r.origin === 'INITIAL' ? 'planned' : 'recalculated'} · ${r.waypointCount} WP`} />
    </Panel>
  );
}

const SENSOR_LABEL: Record<Snapshot['sensor'], [string, string]> = {
  IDLE: ['Standby scan', 'muted'], HOLD: ['Held · frozen', 'amber'], SCANNING: ['Scanning · 10 Hz', 'cyan'], STATIONARY: ['Scanning · stationary', 'amber'], FROZEN: ['Frozen (paused)', 'amber'],
};

/** Real-site geometry: derived from the measured photo points and the engine's authoritative position. */
export function SitePanel({ snap }: { snap: Snapshot }) {
  const site = snap.site;
  if (!site) return <PerceptionPanel snap={snap} />;
  return (
    <Panel title="Test site" icon={<MapPin size={15} />} aside={<span className="mono muted">static photo</span>}>
      <div className="metric-grid">
        <Metric label="Point 1 → Point 2" value={site.distanceM.toFixed(1)} unit="m" tone="cyan" />
        <Metric label="To destination" value={snap.distToGoal.toFixed(1)} unit="m" />
      </div>
      <div className="site-extra">
        <Row k="Start" v="Point 1 · near pillar" />
        <Row k="Destination" v="Point 2 · far pillar" />
      </div>
      <Row k="Distance source" v={site.estimated ? 'Photo estimate' : 'Measured'} tone={site.estimated ? 'amber' : undefined} />
    </Panel>
  );
}

export function PerceptionPanel({ snap }: { snap: Snapshot }) {
  const pct = snap.totalPoints ? snap.pointsMapped / snap.totalPoints : 0;
  const warn = snap.nearest && snap.nearest.dist < WARN_DIST;
  const [sl, st] = SENSOR_LABEL[snap.sensor];
  return (
    <Panel title="LiDAR" icon={<Radar size={15} />} aside={<span className={`mono ${st}`}>{sl}</span>}>
      <div className="metric-grid">
        <Metric label="Returns in range" value={snap.pointsInRange.toLocaleString()} tone="cyan" />
        <Metric label="Map coverage" value={(pct * 100).toFixed(0)} unit="%" />
      </div>
      <div className={`nearest ${warn ? 'warn' : ''}`}>
        <Crosshair size={14} />
        {snap.nearest ? <span>Nearest <b>{snap.nearest.id}</b> · {snap.nearest.kind.toLowerCase()}</span> : <span>Clear within {SENSOR_RANGE} m</span>}
        {snap.nearest && <b className="mono nearest-d">{snap.nearest.dist.toFixed(1)} m</b>}
      </div>
    </Panel>
  );
}

const TL: { key: MissionState[]; name: string }[] = [
  { key: ['STANDBY'], name: 'Standby' },
  { key: ['COUNTDOWN'], name: 'Countdown' },
  { key: ['TAKEOFF'], name: 'Takeoff' },
  { key: ['AUTONOMOUS_TRANSIT', 'MANUAL_HOLD', 'ROUTE_BLOCKED'], name: 'Transit' },
  { key: ['LANDING'], name: 'Landing' },
  { key: ['COMPLETE'], name: 'Complete' },
];

export function Timeline({ snap }: { snap: Snapshot }) {
  const st = snap.state === 'PAUSED' ? snap.resumeTo ?? 'STANDBY' : snap.state;
  const cur = TL.findIndex((x) => x.key.includes(st));
  return (
    <ol className="timeline">
      {TL.map((x, i) => {
        const done = i < cur || st === 'COMPLETE';
        const active = i === cur && st !== 'COMPLETE';
        let note = '';
        if (active && st === 'MANUAL_HOLD') note = 'hold';
        else if (active && st === 'ROUTE_BLOCKED') note = 'blocked';
        else if (active && st === 'AUTONOMOUS_TRANSIT') note = `WP ${snap.currentWp}/${snap.waypointCount} · R${snap.route.rev}`;
        else if (active && snap.state === 'PAUSED') note = 'paused';
        const name = i === 3 && st === 'MANUAL_HOLD' && snap.routeFlown === 0 ? 'Position hold' : x.name;
        if (name === 'Position hold') note = '';
        return (
          <li key={x.name} className={`tl ${done ? 'done' : ''} ${active ? 'cur' : ''}`}>
            <span className="tl-dot" /><span className="tl-n">{name}</span>{note && <span className="tl-note mono">{note}</span>}
          </li>
        );
      })}
    </ol>
  );
}

export function EventLog({ log }: { log: LogEntry[] }) {
  return (
    <div className="log" role="log" aria-live="polite">
      {log.map((e) => (
        <div key={e.id} className={`log-r ${e.level}`}><span className="log-t mono">{e.t}</span><span className="log-m">{e.msg}</span></div>
      ))}
    </div>
  );
}
