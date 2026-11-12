import { useMemo } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Btn, Logo, f1 } from './ui';
import { INIT_CHECK_COUNT, MAX_ALT, CRUISE_SPEED, SENSOR_RANGE, SCAN_HZ, Snapshot } from '../sim/engine';
import { CRUISE_ALT, GRID_RES, PLAN_CLEARANCE, WORLD_HALF } from '../sim/world';

export const missionId = (seed: number) => `AEG-${String(seed).padStart(4, '0')}`;

export function Welcome({ onInitialize }: { onInitialize: () => void }) {
  return (
    <div className="screen welcome">
      <div className="welcome-horizon" aria-hidden="true" />
      <div className="welcome-inner">
        <div className="welcome-logo"><Logo size={56} /></div>
        <h1 className="welcome-title">AEGIS</h1>
        <p className="welcome-sub">AUTONOMOUS NAVIGATION &amp; MISSION INTELLIGENCE</p>
        <Btn variant="primary" size="lg" onPress={onInitialize} pointerOnly className="welcome-btn">INITIALIZE</Btn>
      </div>
      <div className="welcome-foot">Virtual environment · synthetic data</div>
    </div>
  );
}

export function Initializing({ snap, onContinue }: { snap: Snapshot; onContinue: () => void }) {
  const webgl = useMemo(() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } }, []);
  const checks: [string, string][] = [
    ['Environment generator', `seed ${snap.seed}`],
    ['LiDAR model', `${SENSOR_RANGE} m · ${SCAN_HZ} Hz`],
    ['Flight model', `${CRUISE_SPEED} m/s cruise`],
    ['Route planner', `A* · ${GRID_RES} m grid`],
    ['Telemetry', '10 Hz'],
    ['Renderer', webgl ? 'WebGL' : 'WebGL unavailable'],
  ];
  const ready = snap.state === 'READY';
  const done = ready ? INIT_CHECK_COUNT : Math.max(0, snap.initStep - 1);
  return (
    <div className="screen centered">
      <div className="card init">
        <div className="card-head">
          <div>
            <div className="eyebrow">SYSTEM INITIALIZATION</div>
            <h2 className="card-title">{ready ? 'All systems ready' : 'Initializing…'}</h2>
          </div>
          <div className="init-count mono">{done}/{INIT_CHECK_COUNT}</div>
        </div>
        <div className="init-progress"><span style={{ width: `${(done / INIT_CHECK_COUNT) * 100}%` }} /></div>
        <ul className="checks">
          {checks.map(([name, meta], i) => {
            const st = ready || snap.initStep > i + 1 ? 'ok' : snap.initStep === i + 1 ? 'run' : 'wait';
            return (
              <li key={name} className={`check ${st}`}>
                <span className="check-ic">{st === 'ok' ? <Check size={13} strokeWidth={3} /> : null}</span>
                <span className="check-n">{name}</span>
                <span className="check-m mono">{meta}</span>
                <span className="check-s">{st === 'ok' ? 'Ready' : st === 'run' ? 'Checking' : 'Pending'}</span>
              </li>
            );
          })}
        </ul>
        <div className="card-foot">
          <span className="muted">{snap.obstacleCount} obstacles · {snap.totalPoints.toLocaleString()} LiDAR points generated</span>
          <Btn variant="primary" onPress={onContinue} disabled={!ready} pointerOnly>CONTINUE <ArrowRight size={15} /></Btn>
        </div>
      </div>
    </div>
  );
}

export function Briefing({ snap, onProceed }: { snap: Snapshot; onProceed: () => void }) {
  const rows: [string, string][] = [
    ['Objective', 'Fly autonomously from LAUNCH to TARGET without GPS, avoiding all obstacles, then land.'],
    ['Environment', `${WORLD_HALF * 2} × ${WORLD_HALF * 2} m arena · ${snap.obstacleCount} obstacles · seed ${snap.seed}`],
    ['Perception', `360° LiDAR · ${SENSOR_RANGE} m range · ${SCAN_HZ} Hz · ${snap.totalPoints.toLocaleString()} surface points`],
    ['Route', `${snap.waypointCount} waypoints · ${f1(snap.planLength)} m`],
    ['Planner', `A* on ${GRID_RES} m occupancy grid with line-of-sight smoothing`],
    ['Obstacle clearance', `${PLAN_CLEARANCE.toFixed(1)} m planned · 2.0 m route guard`],
    ['Altitude', `Cruise ${CRUISE_ALT.toFixed(1)} m AGL · ceiling ${MAX_ALT} m`],
    ['Manual flight', 'Restricted · commands are denied and the aircraft is held'],
    ['Speed', `${CRUISE_SPEED.toFixed(1)} m/s cruise`],
    ['Navigation', 'GPS denied · local frame (East / North / Altitude) centred on the arena'],
  ];
  return (
    <div className="screen centered">
      <div className="card brief">
        <div className="card-head">
          <div>
            <div className="eyebrow">MISSION BRIEFING</div>
            <h2 className="card-title mono">{missionId(snap.seed)}</h2>
          </div>
        </div>
        <dl className="brief-list">
          {rows.map(([k, v]) => (<div className="brief-row" key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
        </dl>
        <div className="card-foot end">
          <Btn variant="primary" size="lg" onPress={onProceed} pointerOnly>PROCEED <ArrowRight size={16} /></Btn>
        </div>
      </div>
    </div>
  );
}
