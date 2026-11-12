import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Activity, ArrowDown, ArrowUp, ChevronsDown, ChevronsUp, Clock, Focus, Hand, Layers, Lock,
  Map as MapIcon, Maximize2, Minimize2, Orbit, Pause, Play, RotateCcw, RotateCw, Route, ScrollText,
  ShieldAlert, Shuffle, Target, Video, Volume2, VolumeX, X, Navigation, ArrowLeft, ArrowRight, OctagonAlert,
} from 'lucide-react';
import Scene, { CamMode } from './components/Scene';
import MiniMap from './components/MiniMap';
import { Btn, Logo, Metric, f1, fmtClock } from './components/ui';
import { Briefing, Initializing, Welcome, missionId } from './components/Screens';
import { EventLog, FlightPanel, NavPanel, PerceptionPanel, STATE_LABEL, STATE_TONE, Timeline } from './components/Panels';
import { Action, DASHBOARD_STATES, Engine, LogEntry, RestrictedCommand, Snapshot, Trigger, WARN_DIST } from './sim/engine';
import { sfx } from './audio';

// ---------------------------------------------------------------- hooks
function useEngineSnapshot(engine: Engine) {
  const [snap, setSnap] = useState<Snapshot>(() => engine.snapshot());
  const [log, setLog] = useState<LogEntry[]>(() => engine.log.slice(0, 80));
  useEffect(() => {
    const refresh = () => { setSnap(engine.snapshot()); setLog(engine.log.slice(0, 80)); };
    const id = window.setInterval(refresh, 100); // 10 Hz telemetry display
    const off = engine.on((e) => { if (e.type === 'state' || e.type === 'reset') refresh(); });
    return () => { clearInterval(id); off(); };
  }, [engine]);
  return { snap, log };
}

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => { const id = window.setInterval(() => setNow(new Date()), 1000); return () => clearInterval(id); }, []);
  return now;
}

// ---------------------------------------------------------------- header
function Header({ snap, fs, onFs, muted, onMute }: { snap: Snapshot; fs: boolean; onFs: () => void; muted: boolean; onMute: () => void }) {
  const now = useClock();
  const tone = STATE_TONE[snap.state];
  return (
    <header className="header">
      <div className="brand">
        <span className="brand-mark"><Logo size={24} /></span>
        <span className="brand-name">AEGIS</span>
        <span className="brand-div" />
        <span className="brand-sub">Autonomous Navigation &amp; Mission Intelligence</span>
      </div>
      <div className="header-right">
        <div className="hd-item"><span className="hd-k">Mission</span><span className="hd-v mono">{missionId(snap.seed)}</span></div>
        <div className={`state-chip ${tone}`} data-testid="state-chip"><span className="dot" />{STATE_LABEL[snap.state]}</div>
        <div className="hd-item time"><Clock size={14} /><span className="mono">{now.toLocaleTimeString([], { hour12: false })}</span></div>
        <span className="disclosure" title="All data on this console is generated in the browser. There is no vehicle link.">SYNTHETIC DATA</span>
        <button type="button" className="icon-btn" onClick={(e) => { if (e.detail) e.currentTarget.blur(); onMute(); }} title={muted ? 'Unmute sounds (M)' : 'Mute sounds (M)'} aria-label={muted ? 'Unmute' : 'Mute'}>{muted ? <VolumeX size={16} /> : <Volume2 size={16} />}</button>
        <button type="button" className="icon-btn" onClick={(e) => { if (e.detail) e.currentTarget.blur(); onFs(); }} title={fs ? 'Exit fullscreen (Esc)' : 'Enter fullscreen'} aria-label="Toggle fullscreen">{fs ? <Minimize2 size={16} /> : <Maximize2 size={16} />}</button>
      </div>
    </header>
  );
}

// ---------------------------------------------------------------- overlays
function Countdown({ value, paused }: { value: number; paused: boolean }) {
  const n = Math.max(1, Math.ceil(value));
  const frac = value - Math.floor(value) || 1;
  return (
    <div className="overlay countdown" aria-live="assertive">
      <div className="cd-ring">
        <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" className="cd-track" /><circle cx="100" cy="100" r="90" className="cd-prog" style={{ strokeDashoffset: 565.5 * (1 - frac) }} /></svg>
        <div key={n} className={`cd-num mono ${paused ? '' : 'anim'}`}>{n}</div>
      </div>
      <div className="cd-label">{paused ? 'COUNTDOWN PAUSED' : 'LAUNCH SEQUENCE'}</div>
    </div>
  );
}

function DeniedModal({ cmd, onClose }: { cmd: string; onClose: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => { ref.current?.focus(); }, []);
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="denied" role="alertdialog" aria-modal="true" aria-labelledby="denied-t" onMouseDown={(e) => e.stopPropagation()}>
        <div className="denied-scan" aria-hidden="true" />
        <div className="denied-head"><ShieldAlert size={20} /><span id="denied-t">COMMAND DENIED</span></div>
        <div className="denied-body">
          <div className="denied-cmd mono">{cmd}</div>
          <p>This command is not available in the virtual environment. The console controls a virtual aircraft only, and nothing was transmitted.</p>
        </div>
        <div className="denied-foot"><button ref={ref} type="button" className="btn danger md" onClick={onClose}>DISMISS</button></div>
      </div>
    </div>
  );
}

function CompleteCard({ snap, onClose }: { snap: Snapshot; onClose: () => void }) {
  return (
    <div className="complete-card" role="status">
      <div className="complete-head"><Target size={16} />Mission complete<button type="button" className="icon-btn sm" onClick={onClose} aria-label="Close summary"><X size={14} /></button></div>
      <div className="complete-grid">
        <Metric label="Flight time" value={fmtClock(snap.missionTime)} />
        <Metric label="Distance flown" value={f1(snap.traveled)} unit="m" />
        <Metric label="Min clearance" value={f1(snap.minClearance)} unit="m" tone="green" />
        <Metric label="Map coverage" value={`${Math.round((snap.pointsMapped / Math.max(1, snap.totalPoints)) * 100)}`} unit="%" />
      </div>
      <p className="complete-hint">Press RESET to prepare a new mission.</p>
    </div>
  );
}

/** Red COMMAND DENIED alert for restricted manual flight commands (UI only; ~3 s; never touches the engine). */
function RestrictedAlert({ cmd, leaving, count }: { cmd: string; leaving: boolean; count: number }) {
  return (
    <div className={`rx-alert ${leaving ? 'out' : ''}`} role="alert" aria-live="assertive" data-testid="restricted-alert">
      <div className="rx-scan" aria-hidden="true" />
      <div className="rx-icon"><OctagonAlert size={34} strokeWidth={1.8} /></div>
      <div className="rx-text">
        <div className="rx-l1">COMMAND DENIED</div>
        <div className="rx-l2">CONTROL AUTHORIZATION FAILURE</div>
        <div className="rx-l3">MANUAL FLIGHT COMMANDS ARE RESTRICTED</div>
        <div className="rx-cmd mono">{cmd}{count > 1 ? ` ×${count}` : ''} · aircraft held</div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------- app
/** Keyboard shortcuts for the restricted commands — routed to the same denial handler. */
const KEYMAP: Record<string, RestrictedCommand> = { w: 'FORWARD', s: 'BACKWARD', q: 'LEFT', e: 'RIGHT', a: 'YAW LEFT', d: 'YAW RIGHT', r: 'ASCEND', f: 'DESCEND' };
const ALERT_MS = 3000;
const ALERT_EXIT_MS = 350;

export default function App() {
  const engine = useMemo(() => new Engine(2205), []);
  useEffect(() => {
    engine.start();
    if (import.meta.env.DEV) (window as unknown as { __aegis: Engine }).__aegis = engine;
    return () => engine.stop();
  }, [engine]);

  const { snap, log } = useEngineSnapshot(engine);
  const [fs, setFs] = useState(false);
  const [muted, setMuted] = useState(false);
  const [camMode, setCamMode] = useState<CamMode>('follow');
  const [camToken, setCamToken] = useState(0);
  const [denied, setDenied] = useState<string | null>(null);
  const [summaryClosed, setSummaryClosed] = useState(false);
  const [toast, setToast] = useState<{ msg: string; tone: string } | null>(null);
  const toastTimer = useRef(0);
  const [rx, setRx] = useState<{ cmd: string; n: number; leaving: boolean } | null>(null);
  const rxTimers = useRef<number[]>([]);

  const showToast = useCallback((msg: string, tone = 'cyan') => {
    setToast({ msg, tone });
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 1800);
  }, []);
  useEffect(() => () => { window.clearTimeout(toastTimer.current); rxTimers.current.forEach(clearTimeout); }, []);

  // engine events → sounds / transient UI
  useEffect(() => engine.on((e) => {
    switch (e.type) {
      case 'countdown': case 'tick': sfx.tick(); break;
      case 'liftoff': sfx.go(); break;
      case 'proximity': sfx.warn(); break;
      case 'guard': sfx.deny(); break;
      case 'blocked': sfx.warn(); break;
      case 'complete': sfx.ok(); break;
      case 'reset':
        rxTimers.current.forEach(clearTimeout); setRx(null);
        setDenied(null); setToast(null); setSummaryClosed(false); setCamToken((x) => x + 1);
        break;
    }
  }), [engine]);

  // fullscreen
  useEffect(() => {
    const h = () => setFs(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', h);
    return () => document.removeEventListener('fullscreenchange', h);
  }, []);
  const toggleFs = useCallback(() => {
    const p = document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.();
    p?.catch(() => showToast('Fullscreen is not available in this browser', 'amber'));
  }, [showToast]);
  const toggleMute = useCallback(() => { const m = !sfx.muted; sfx.muted = m; setMuted(m); }, []);

  // drop lingering focus whenever the top-level stage changes
  const stage = snap.state === 'WELCOME' ? 'welcome' : snap.state === 'INITIALIZING' || snap.state === 'READY' ? 'init' : snap.state === 'BRIEFING' ? 'brief' : 'console';
  useEffect(() => { (document.activeElement as HTMLElement | null)?.blur?.(); }, [stage]);

  const send = useCallback((t: Trigger) => engine.dispatch(t), [engine]);

  /**
   * Shared handler for all eight restricted manual flight controls (buttons + keys).
   * The engine forces MANUAL_HOLD and freezes the flight state; nothing here can move the aircraft.
   * The alert timers below only hide the notification — they never call the engine.
   */
  const handleRestrictedFlightCommand = useCallback((cmd: RestrictedCommand) => {
    if (!engine.restrictedAvailable()) return;
    engine.handleRestrictedFlightCommand(cmd);
    sfx.deny();
    rxTimers.current.forEach(clearTimeout);
    setRx((prev) => ({ cmd, n: prev && prev.cmd === cmd && !prev.leaving ? prev.n + 1 : 1, leaving: false }));
    rxTimers.current = [
      window.setTimeout(() => setRx((p) => (p ? { ...p, leaving: true } : p)), ALERT_MS - ALERT_EXIT_MS),
      window.setTimeout(() => setRx(null), ALERT_MS),
    ];
  }, [engine]);

  const replan = useCallback(() => {
    if (engine.recalculate()) showToast(`Route R${engine.route.rev} · ${engine.waypoints.length - 1} waypoints`);
    else showToast('No feasible route from this position', 'red');
  }, [engine, showToast]);
  const newEnv = useCallback(() => { if (engine.newEnvironment()) showToast('New environment generated'); }, [engine, showToast]);
  const deny = useCallback((cmd: string) => {
    sfx.deny();
    engine.addLog('alert', `Command denied · ${cmd} · not available in the virtual environment`);
    setDenied(cmd);
  }, [engine]);

  // single keyboard handler, registered once; reads live state through refs
  const live = useRef({ state: snap.state, denied });
  live.current = { state: snap.state, denied };
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const { state, denied: modalOpen } = live.current;
      if (e.key === 'Escape') { if (modalOpen) { e.preventDefault(); setDenied(null); } return; }
      if (modalOpen || e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
      const tgt = e.target as HTMLElement | null;
      const tag = tgt?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tgt?.isContentEditable) return;
      if (!DASHBOARD_STATES.includes(state)) return; // no shortcuts before the console
      const key = e.key.toLowerCase();
      if (key === ' ') {
        if (tag === 'BUTTON' || tag === 'A') return; // let the focused control handle it natively
        e.preventDefault();
        if (engine.allowed('RESUME')) engine.dispatch('RESUME');
        else if (engine.allowed('PAUSE')) engine.dispatch('PAUSE');
        return; // Space never starts a mission
      }
      if (KEYMAP[key]) { e.preventDefault(); handleRestrictedFlightCommand(KEYMAP[key]); return; }
      if (key === 'c') setCamToken((x) => x + 1);
      if (key === 'm') toggleMute();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [engine, handleRestrictedFlightCommand, toggleMute]);

  const st = snap.state;
  const effective = st === 'PAUSED' ? snap.resumeTo ?? 'STANDBY' : st;
  const ok = (a: Action) => engine.allowed(a); // single action-availability matrix (engine ACTIONS)
  const hold = st === 'MANUAL_HOLD';
  const rxOk = engine.restrictedAvailable();
  const rxTitle = (k: string) => rxOk ? `Restricted (${k}) — command will be denied and the aircraft held` : 'Restricted — available in flight only (always denied)';
  const showProx = snap.nearest && snap.nearest.dist < WARN_DIST && ['AUTONOMOUS_TRANSIT', 'TAKEOFF', 'LANDING'].includes(st);

  return (
    <div className={`app stage-${stage}`} data-state={st}>
      {stage !== 'welcome' && <Header snap={snap} fs={fs} onFs={toggleFs} muted={muted} onMute={toggleMute} />}
      {stage === 'welcome' && <Welcome onInitialize={() => send('INITIALIZE')} />}
      {stage === 'init' && <Initializing snap={snap} onContinue={() => send('CONTINUE')} />}
      {stage === 'brief' && <Briefing snap={snap} onProceed={() => send('PROCEED')} />}
      {stage === 'console' && (
        <main className="console">
          <aside className="col left" aria-label="Flight data">
            <FlightPanel snap={snap} />
            <NavPanel snap={snap} />
            <PerceptionPanel snap={snap} />
          </aside>

          <section className="center" aria-label="3D environment">
            <div className="viewport">
              <Scene engine={engine} camMode={camMode} camResetToken={camToken} />
              <div className="vp-tag"><span className="dot" />SYNTHETIC LiDAR · VIRTUAL ENVIRONMENT</div>
              <div className="vp-cams" role="group" aria-label="Camera">
                {([['follow', 'Follow', Video], ['orbit', 'Orbit', Orbit], ['top', 'Top', Layers]] as const).map(([m, l, Icon]) => (
                  <button key={m} type="button" className={`seg ${camMode === m ? 'on' : ''}`} aria-pressed={camMode === m} title={`${l} camera`}
                    onClick={(e) => { if (e.detail) e.currentTarget.blur(); setCamMode(m); setCamToken((x) => x + 1); }}><Icon size={14} />{l}</button>
                ))}
                <button type="button" className="seg" title="Reset camera (C)" onClick={(e) => { if (e.detail) e.currentTarget.blur(); setCamToken((x) => x + 1); }}><Focus size={14} />Reset</button>
              </div>
              <div className="vp-hud">
                <div className={`hud-state ${STATE_TONE[st]}`}>{STATE_LABEL[st]}</div>
                <div className="hud-clock mono">T+{fmtClock(snap.missionTime)}</div>
                <div className="hud-bar"><span style={{ width: `${snap.progress * 100}%` }} /></div>
                <div className="hud-pct mono">{Math.round(snap.progress * 100)}%</div>
              </div>
              <div className="vp-legend" aria-hidden="true">
                <span><i className="lgd cyan" />Planned</span><span><i className="lgd green" />Completed</span><span><i className="lgd white" />Current WP</span><span><i className="lgd amber" />In range</span><span><i className="lgd red" />&lt; {WARN_DIST} m</span>
              </div>
              {effective === 'COUNTDOWN' && <Countdown value={snap.countdown} paused={st === 'PAUSED'} />}
              {st === 'PAUSED' && effective !== 'COUNTDOWN' && <div className="paused-badge"><Pause size={14} />PAUSED</div>}
              {st === 'COMPLETE' && !summaryClosed && <CompleteCard snap={snap} onClose={() => setSummaryClosed(true)} />}
              {hold && (
                <div className="vp-banner amber" role="status" data-testid="hold-banner">
                  <div className="vb-text"><b>MANUAL HOLD</b><span>Aircraft frozen. Autonomous navigation is suspended until you press RESUME AUTO.</span></div>
                  <Btn variant="accent" onPress={() => send('RESUME_AUTONOMY')}><Navigation size={15} />RESUME AUTO</Btn>
                </div>
              )}
              {st === 'ROUTE_BLOCKED' && (
                <div className="vp-banner red" role="alert" data-testid="blocked-banner">
                  <div className="vb-text"><b>ROUTE BLOCKED{snap.blocked?.id ? ` · ${snap.blocked.id}` : ''}{snap.blocked?.dist != null ? ` · ${snap.blocked.dist.toFixed(1)} m` : ''}</b><span>{snap.blocked?.reason}</span></div>
                  <Btn variant="primary" onPress={replan}><Route size={15} />RECALCULATE</Btn>
                  <Btn onPress={() => send('HOLD')}><Hand size={15} />HOLD</Btn>
                </div>
              )}
              {showProx && <div className="prox-banner" role="status">Proximity advisory · {snap.nearest!.id} · {snap.nearest!.dist.toFixed(1)} m</div>}
              {toast && <div className={`toast ${toast.tone}`} role="status">{toast.msg}</div>}
              {rx && <><div key={`f${rx.n}${rx.cmd}`} className="rx-flash" aria-hidden="true" /><RestrictedAlert cmd={rx.cmd} leaving={rx.leaving} count={rx.n} /></>}
            </div>

            <div className="dock">
              <div className="dock-g mission">
                <div className="dock-h">Mission</div>
                <div className="dock-grid">
                  <Btn variant="primary" pointerOnly disabled={!ok('START')} onPress={() => send('START')} title="Start the mission countdown (mouse click only)"><Play size={15} />START MISSION</Btn>
                  {st === 'PAUSED'
                    ? <Btn onPress={() => send('RESUME')} title="Resume (Space)"><Play size={15} />RESUME</Btn>
                    : <Btn disabled={!ok('PAUSE')} onPress={() => send('PAUSE')} title="Pause the simulation (Space)"><Pause size={15} />PAUSE</Btn>}
                  <Btn disabled={!ok('RESET')} onPress={() => send('RESET')} title="Return to launch pad and clear the mission"><RotateCcw size={15} />RESET</Btn>
                  {hold
                    ? <Btn variant="accent" disabled={!ok('RESUME_AUTO')} onPress={() => send('RESUME_AUTONOMY')} title="Recalculate from here and continue autonomously"><Navigation size={15} />RESUME AUTO</Btn>
                    : <Btn disabled={!ok('HOLD')} onPress={() => send('HOLD')} title="Stop and hold position"><Hand size={15} />HOLD</Btn>}
                  <Btn disabled={!ok('RECALCULATE')} onPress={replan} title={hold ? 'In hold, RESUME AUTO recalculates the route' : 'Recalculate the route (standby, transit or blocked)'}><Route size={15} />RECALCULATE</Btn>
                  <Btn disabled={!ok('NEW_ENV')} onPress={newEnv} title="Generate a new environment (standby only)"><Shuffle size={15} />NEW ENVIRONMENT</Btn>
                </div>
              </div>
              <div className="dock-g flight">
                <div className="dock-h">Manual control <span className="dock-note red"><Lock size={11} />restricted</span></div>
                <div className="dock-grid four">
                  {([
                    ['YAW LEFT', 'YAW L', RotateCcw, 'A'], ['FORWARD', 'FORWARD', ArrowUp, 'W'], ['YAW RIGHT', 'YAW R', RotateCw, 'D'], ['ASCEND', 'ASCEND', ChevronsUp, 'R'],
                    ['LEFT', 'LEFT', ArrowLeft, 'Q'], ['BACKWARD', 'BACKWARD', ArrowDown, 'S'], ['RIGHT', 'RIGHT', ArrowRight, 'E'], ['DESCEND', 'DESCEND', ChevronsDown, 'F'],
                  ] as const).map(([cmd, label, Icon, k]) => (
                    <Btn key={cmd} className="rx-btn" disabled={!rxOk} silent data-cmd={cmd} onPress={() => handleRestrictedFlightCommand(cmd)} title={rxTitle(k)}><Icon size={15} />{label}<kbd>{k}</kbd></Btn>
                  ))}
                </div>
              </div>
              <div className="dock-g link">
                <div className="dock-h" title="Hardware commands are not available in the virtual environment">Vehicle link <span className="dock-note lbl-long"><Lock size={11} />not available</span></div>
                <div className="dock-grid one">
                  <Btn variant="locked" silent onPress={() => deny('HARDWARE UPLINK')} title="Not available in the virtual environment"><Lock size={13} /><span className="lbl-long">HARDWARE </span>UPLINK</Btn>
                  <Btn variant="locked" silent onPress={() => deny('GEOFENCE OVERRIDE')} title="Not available in the virtual environment"><Lock size={13} />GEOFENCE<span className="lbl-long"> OVERRIDE</span></Btn>
                </div>
              </div>
            </div>
          </section>

          <aside className="col right" aria-label="Mission overview">
            <section className="panel map-panel">
              <header className="panel-h"><span className="panel-ic"><MapIcon size={15} /></span><h3 className="panel-t">Map</h3><span className="panel-aside mono muted">120 × 120 m</span></header>
              <div className="panel-b"><MiniMap engine={engine} /></div>
            </section>
            <section className="panel">
              <header className="panel-h"><span className="panel-ic"><Activity size={15} /></span><h3 className="panel-t">Timeline</h3></header>
              <div className="panel-b"><Timeline snap={snap} /></div>
            </section>
            <section className="panel log-panel">
              <header className="panel-h"><span className="panel-ic"><ScrollText size={15} /></span><h3 className="panel-t">Event log</h3></header>
              <div className="panel-b"><EventLog log={log} /></div>
            </section>
          </aside>
        </main>
      )}
      {denied && <DeniedModal cmd={denied} onClose={() => setDenied(null)} />}
    </div>
  );
}
