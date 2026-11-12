// Single authority for mission state, the simulation clock, the route and the virtual flight model.
// Drives ONLY the on-screen virtual aircraft — there is no network / vehicle link anywhere.
//
// Clock policy (one fixed-step clock, Engine.advance):
//   STANDBY / READY / BRIEFING / COMPLETE : nothing advances.
//   COUNTDOWN                             : only the countdown advances.
//   TAKEOFF / TRANSIT / LANDING           : mission time, physics and LiDAR (10 Hz) advance.
//   Takeoff completion (cruise altitude reached, CRUISE_REACHED) enters MANUAL_HOLD exactly once.
//   MANUAL_HOLD                           : physics loop NOT stepped. Position, altitude, heading,
//                                           velocity (0), route/waypoint progress, mission clock and
//                                           LiDAR are all frozen. Only an explicit RESUME AUTO / RESET
//                                           leaves it. Manual flight commands are restricted: they are
//                                           denied and force MANUAL_HOLD; they never move the aircraft.
//   ROUTE_BLOCKED                         : aircraft stationary; mission clock runs; LiDAR monitors.
//   PAUSED                                : everything frozen, including mission time and LiDAR.
import * as THREE from 'three';
import {
  CRUISE_ALT, GOAL, PLAN_CLEARANCE, START, World, Obstacle,
  clearance3D, footprintDistance, generateWorld, planRoute,
} from './world';

// ------------------------------------------------------------------ state machine
export type MissionState =
  | 'WELCOME' | 'INITIALIZING' | 'READY' | 'BRIEFING' | 'STANDBY' | 'COUNTDOWN' | 'TAKEOFF'
  | 'AUTONOMOUS_TRANSIT' | 'MANUAL_HOLD' | 'ROUTE_BLOCKED' | 'LANDING' | 'COMPLETE' | 'PAUSED';

export type Trigger =
  | 'INITIALIZE' | 'INIT_COMPLETE' | 'CONTINUE' | 'PROCEED' | 'START' | 'COUNTDOWN_ELAPSED'
  | 'CRUISE_REACHED' | 'HOLD' | 'DENY_HOLD' | 'RESUME_AUTONOMY' | 'BLOCK' | 'REROUTE' | 'ROUTE_COMPLETE' | 'TOUCHDOWN'
  | 'PAUSE' | 'RESUME' | 'RESET';

const ACTIVE: MissionState[] = ['COUNTDOWN', 'TAKEOFF', 'AUTONOMOUS_TRANSIT', 'MANUAL_HOLD', 'ROUTE_BLOCKED', 'LANDING'];

/** Every legal transition with its source states. Anything not listed here is rejected. */
export const TRANSITIONS: Record<Trigger, { from: MissionState[]; to: MissionState | 'PREVIOUS'; by: 'user' | 'auto' }> = {
  INITIALIZE: { from: ['WELCOME'], to: 'INITIALIZING', by: 'user' },
  INIT_COMPLETE: { from: ['INITIALIZING'], to: 'READY', by: 'auto' }, // checks finished; READY waits for CONTINUE
  CONTINUE: { from: ['READY'], to: 'BRIEFING', by: 'user' },
  PROCEED: { from: ['BRIEFING'], to: 'STANDBY', by: 'user' },
  START: { from: ['STANDBY'], to: 'COUNTDOWN', by: 'user' },
  COUNTDOWN_ELAPSED: { from: ['COUNTDOWN'], to: 'TAKEOFF', by: 'auto' },
  // successful takeoff (cruise altitude reached) → automatic position hold; autonomous transit never starts by itself
  CRUISE_REACHED: { from: ['TAKEOFF'], to: 'MANUAL_HOLD', by: 'auto' },
  HOLD: { from: ['AUTONOMOUS_TRANSIT', 'ROUTE_BLOCKED'], to: 'MANUAL_HOLD', by: 'user' },
  // a restricted manual flight command was denied → forced hold (PAUSED only when paused in flight)
  DENY_HOLD: { from: ['TAKEOFF', 'AUTONOMOUS_TRANSIT', 'ROUTE_BLOCKED', 'LANDING', 'PAUSED'], to: 'MANUAL_HOLD', by: 'auto' },
  RESUME_AUTONOMY: { from: ['MANUAL_HOLD'], to: 'AUTONOMOUS_TRANSIT', by: 'user' }, // replans from current pose
  BLOCK: { from: ['AUTONOMOUS_TRANSIT', 'MANUAL_HOLD'], to: 'ROUTE_BLOCKED', by: 'auto' }, // obstacle on route / no route
  REROUTE: { from: ['ROUTE_BLOCKED'], to: 'AUTONOMOUS_TRANSIT', by: 'user' }, // RECALCULATE succeeded
  ROUTE_COMPLETE: { from: ['AUTONOMOUS_TRANSIT'], to: 'LANDING', by: 'auto' },
  TOUCHDOWN: { from: ['LANDING'], to: 'COMPLETE', by: 'auto' },
  PAUSE: { from: ACTIVE, to: 'PAUSED', by: 'user' },
  RESUME: { from: ['PAUSED'], to: 'PREVIOUS', by: 'user' },
  RESET: { from: [...ACTIVE, 'PAUSED', 'COMPLETE'], to: 'STANDBY', by: 'user' },
};

/** Action-availability matrix used by BOTH the engine (validation) and the UI (enabled state). */
export type Action = 'START' | 'PAUSE' | 'RESUME' | 'HOLD' | 'RESUME_AUTO' | 'RECALCULATE' | 'NEW_ENV' | 'RESET' | 'RESTRICTED_CMD';
export const ACTIONS: Record<Action, MissionState[]> = {
  START: ['STANDBY'],
  PAUSE: ACTIVE,
  RESUME: ['PAUSED'],
  HOLD: ['AUTONOMOUS_TRANSIT', 'ROUTE_BLOCKED'],
  RESUME_AUTO: ['MANUAL_HOLD'],
  RECALCULATE: ['STANDBY', 'AUTONOMOUS_TRANSIT', 'ROUTE_BLOCKED'],
  NEW_ENV: ['STANDBY'],
  RESET: [...ACTIVE, 'PAUSED', 'COMPLETE'],
  // restricted manual flight buttons are clickable whenever the aircraft is in flight; they are always denied
  RESTRICTED_CMD: ['TAKEOFF', 'AUTONOMOUS_TRANSIT', 'MANUAL_HOLD', 'ROUTE_BLOCKED', 'LANDING', 'PAUSED'],
};

export const DASHBOARD_STATES: MissionState[] = ['STANDBY', ...ACTIVE, 'PAUSED', 'COMPLETE'];

export type Level = 'info' | 'ok' | 'warn' | 'alert';
export interface LogEntry { id: number; t: string; level: Level; msg: string }
/** Manual flight commands. ALL are restricted: they are denied and never move the aircraft. */
export const RESTRICTED_COMMANDS = ['FORWARD', 'BACKWARD', 'LEFT', 'RIGHT', 'YAW LEFT', 'YAW RIGHT', 'ASCEND', 'DESCEND'] as const;
export type RestrictedCommand = typeof RESTRICTED_COMMANDS[number];
const IN_FLIGHT: MissionState[] = ['TAKEOFF', 'AUTONOMOUS_TRANSIT', 'MANUAL_HOLD', 'ROUTE_BLOCKED', 'LANDING'];

// ------------------------------------------------------------------ limits
export const SENSOR_RANGE = 28;
export const SCAN_HZ = 10;
export const WARN_DIST = 7;
export const CRUISE_SPEED = 6; // m/s horizontal
export const MAX_VZ = 2.5; // m/s
export const MAX_ALT = 20; // ceiling (m AGL)
export const GUARD_DIST = 2; // proximity guard (m) — route look-ahead
export const ROUTE_MIN_CLEARANCE = 2.9; // validated horizontal clearance of every flown route (m)
const LOOKAHEAD = 8; // m of route checked ahead of the aircraft
const ACCEL = 1.5; // m/s²
const DECEL = 1.4; // m/s²
export const STEP = 1 / 120; // fixed simulation step (s)
const INIT_STEPS = 6;
const INIT_LEAD = 0.35;
const INIT_STEP_T = 0.55;
export const INIT_TOTAL = INIT_LEAD + INIT_STEPS * INIT_STEP_T + 0.25;
export const INIT_CHECK_COUNT = INIT_STEPS;
const HOLD_REMINDER = 60; // s

// ------------------------------------------------------------------ route object
export interface Route {
  id: number; // unique, increments on every new route (renderers rebuild on change)
  rev: number; // R1 = initial plan for this environment, R2… = recalculations
  origin: 'INITIAL' | 'RECALCULATED';
  waypoints: THREE.Vector3[]; // [0] = route start; last = TARGET
  curve: THREE.CatmullRomCurve3;
  length: number;
  wpArc: number[]; // exact arc length of each waypoint along the flown path
  samples: THREE.Vector3[]; // dense flown path (exact through every waypoint)
  cum: Float64Array; // cumulative path length at each sample
  cruiseAlt: number;
  minClearance: number; // minimum horizontal clearance along the curve (m)
  expanded: number; // A* cells expanded
}

export interface Snapshot {
  state: MissionState;
  resumeTo: MissionState | null;
  initStep: number;
  countdown: number;
  seed: number;
  pos: { x: number; y: number; z: number }; // local frame: x=E, y=N, z=alt AGL
  groundSpeed: number;
  vz: number;
  yawRate: number; // deg/s
  accel: number; // |a| m/s²
  heading: number; // 0–359
  progress: number; // route progress 0–1
  routeFlown: number;
  remaining: number;
  planLength: number;
  traveled: number;
  route: { id: number; rev: number; origin: Route['origin']; waypointCount: number; cruiseAlt: number; minClearance: number };
  waypointCount: number;
  currentWp: number;
  obstacleCount: number;
  obstaclesInRange: number;
  nearest: { id: string; kind: string; dist: number } | null;
  minClearance: number;
  pointsInRange: number;
  pointsMapped: number;
  totalPoints: number;
  scans: number;
  sensor: 'IDLE' | 'SCANNING' | 'STATIONARY' | 'FROZEN' | 'HOLD';
  missionTime: number;
  holdTime: number;
  blocked: { id: string | null; kind: string | null; dist: number | null; reason: string } | null;
  deniedCount: number;
}

type Listener = (e: { type: string; level?: Level }) => void;
type FrameFn = (dt: number, animTime: number) => void;

const PER_SEG = 240; // path samples per waypoint segment

/** Samples the curve uniformly in t so waypoint i is exactly sample i*PER_SEG. */
function samplePath(curve: THREE.CatmullRomCurve3, nSeg: number) {
  const M = nSeg * PER_SEG;
  const samples: THREE.Vector3[] = [];
  for (let k = 0; k <= M; k++) samples.push(curve.getPoint(k / M));
  const cum = new Float64Array(M + 1);
  for (let k = 1; k <= M; k++) cum[k] = cum[k - 1] + samples[k].distanceTo(samples[k - 1]);
  return { samples, cum };
}

function buildCurve(points: THREE.Vector3[], obstacles: Obstacle[]) {
  // Catmull-Rom variants from smoothest to tightest; tension 0 is the exact A* polyline, whose
  // segments the planner has already verified clear. Pick the smoothest variant that keeps clearance.
  const variants: [THREE.CurveType, number][] = [['centripetal', 0.5], ['catmullrom', 0.35], ['catmullrom', 0.15], ['catmullrom', 0]];
  const startClear = Math.min(...obstacles.map((o) => footprintDistance(o, points[0].x, points[0].z)));
  const need = Math.min(ROUTE_MIN_CLEARANCE, startClear - 0.05);
  let best: { curve: THREE.CatmullRomCurve3; min: number; samples: THREE.Vector3[]; cum: Float64Array } | null = null;
  for (const [type, tension] of variants) {
    const curve = new THREE.CatmullRomCurve3(points, false, type, tension);
    curve.arcLengthDivisions = 800;
    const path = samplePath(curve, points.length - 1);
    let min = Infinity;
    for (let k = 0; k < path.samples.length; k += 2) {
      const q = path.samples[k];
      for (const o of obstacles) min = Math.min(min, footprintDistance(o, q.x, q.z));
    }
    if (!best || min > best.min) best = { curve, min, ...path };
    if (min >= need) return { curve, min, ...path };
  }
  return best!;
}

export class Engine {
  // environment / route
  world!: World;
  worldVersion = 0;
  route!: Route;
  private routeIds = 0;
  private basePlan: { x: number; z: number }[] = [];
  private baseExpanded = 0;

  // state machine
  state: MissionState = 'WELCOME';
  resumeTo: MissionState | null = null;
  initT = 0;
  countdown = 0;

  // authoritative virtual flight state
  pos = new THREE.Vector3();
  vel = new THREE.Vector3();
  acc = new THREE.Vector3();
  heading = 0; // radians, compass (0 = north = -z), normalised to [0, 2π)
  speed = 0; // along-route speed (transit)
  s = 0; // arc length along current route
  routeFlown = 0; // route distance completed (across recalculations)
  traveled = 0; // actual distance flown
  missionTime = 0;
  holdTime = 0;
  minClearance = Infinity;
  currentWp = 1;
  yawRate = 0; // rad/s
  deniedCount = 0;
  blocked: Snapshot['blocked'] = null;

  // perception
  inRange: { o: Obstacle; d: number }[] = [];
  detected = new Set<string>();
  warned = new Set<string>();
  mapped!: Uint8Array;
  inRangeMask!: Uint8Array;
  pointsInRange = 0;
  pointsMapped = 0;
  scans = 0;
  lidarVersion = 0;
  private scanAcc = 0;

  log: LogEntry[] = [];
  private logId = 0;
  private listeners = new Set<Listener>();
  private frames = new Set<FrameFn>();

  // clock
  private raf = 0;
  private last = 0;
  private accT = 0;
  animTime = 0;
  steps = 0;

  constructor(seed = 2205) {
    this.load(seed, true);
  }

  // route accessors (all consumers read the same route object)
  get waypoints() { return this.route.waypoints; }
  get curve() { return this.route.curve; }
  get planLength() { return this.route.length; }
  get wpArc() { return this.route.wpArc; }
  get planVersion() { return this.route.id; }

  // ---------------------------------------------------------------- clock
  /** Starts the one and only real-time driver of the simulation clock. Idempotent. */
  start() {
    if (this.raf) return;
    this.last = performance.now();
    const loop = (now: number) => {
      this.raf = requestAnimationFrame(loop);
      const dt = Math.min(0.25, Math.max(0, (now - this.last) / 1000));
      this.last = now;
      this.advance(dt);
      if (this.state !== 'PAUSED' && this.state !== 'MANUAL_HOLD') this.animTime += dt;
      this.frames.forEach((f) => f(dt, this.animTime));
    };
    this.raf = requestAnimationFrame(loop);
  }
  stop() { cancelAnimationFrame(this.raf); this.raf = 0; }
  get running() { return this.raf !== 0; }

  /** Advances simulated time in fixed steps. Used by the real-time loop and by headless tests. */
  advance(seconds: number) {
    this.accT += seconds;
    while (this.accT >= STEP) { this.step(STEP); this.accT -= STEP; }
  }

  onFrame(f: FrameFn) { this.frames.add(f); return () => { this.frames.delete(f); }; }
  on(l: Listener) { this.listeners.add(l); return () => { this.listeners.delete(l); }; }
  private emit(type: string, level?: Level) { this.listeners.forEach((l) => l({ type, level })); }

  addLog(level: Level, msg: string) {
    const t = new Date().toTimeString().slice(0, 8);
    this.log.unshift({ id: ++this.logId, t, level, msg });
    if (this.log.length > 120) this.log.pop();
    this.emit('log', level);
  }

  // ---------------------------------------------------------------- availability & transitions
  allowed(a: Action) { return ACTIONS[a].includes(this.state); }
  can(tr: Trigger) { return TRANSITIONS[tr].from.includes(this.state); }

  dispatch(tr: Trigger): boolean {
    const rule = TRANSITIONS[tr];
    if (!rule.from.includes(this.state)) {
      if (import.meta.env.DEV) console.debug(`[aegis] rejected ${tr} in ${this.state}`);
      return false;
    }
    const from = this.state;
    const to = rule.to === 'PREVIOUS' ? (this.resumeTo ?? 'STANDBY') : rule.to;
    switch (tr) {
      case 'INITIALIZE': this.initT = 0; break;
      case 'START': this.countdown = 5; this.addLog('info', 'Mission start · T−5 countdown'); break;
      case 'COUNTDOWN_ELAPSED': this.addLog('ok', `Liftoff · climbing to ${this.route.cruiseAlt.toFixed(1)} m AGL`); break;
      case 'CRUISE_REACHED':
        this.pos.y = this.waypoints[0].y; // exact target altitude
        this.stopAt(this.pos); // zero horizontal, vertical and angular velocity; position/heading preserved
        this.blocked = null;
        this.holdTime = 0;
        this.scan(); // LiDAR snapshot from the exact hold position
        this.addLog('ok', `Takeoff complete at ${this.pos.y.toFixed(1)} m AGL · position hold engaged`);
        break;
      case 'HOLD':
        this.stopAt(this.pos);
        this.blocked = null;
        this.holdTime = 0;
        this.scan();
        this.addLog('warn', 'Manual hold · aircraft stationary · press RESUME AUTO to continue');
        break;
      case 'DENY_HOLD':
        this.stopAt(this.pos);
        this.blocked = null;
        this.resumeTo = null;
        this.holdTime = 0;
        this.addLog('alert', 'Manual hold enforced · aircraft frozen · press RESUME AUTO to continue');
        break;
      case 'RESUME_AUTONOMY':
        if (!this.replanFromHere()) {
          this.setBlocked(null, 'No feasible route from the current position');
          return this.dispatch('BLOCK');
        }
        this.addLog('ok', `Autonomy resumed on route R${this.route.rev}`);
        break;
      case 'BLOCK':
        this.stopAt(this.pos);
        this.holdTime = 0;
        this.scan();
        this.addLog('alert', `Route blocked · ${this.blocked?.reason ?? 'unknown'} · RECALCULATE to recover`);
        break;
      case 'REROUTE': this.blocked = null; this.addLog('ok', `Recovered · autonomous tracking on route R${this.route.rev}`); break;
      case 'ROUTE_COMPLETE': this.addLog('ok', 'Route complete · autonomous descent'); break;
      case 'TOUCHDOWN': this.addLog('ok', `Touchdown · mission complete · ${this.traveled.toFixed(1)} m flown`); break;
      case 'PAUSE': this.resumeTo = from; this.vel.set(0, 0, 0); this.acc.set(0, 0, 0); this.addLog('warn', 'Paused · simulation frozen'); break;
      case 'RESUME': this.resumeTo = null; this.addLog('info', 'Resumed'); break;
      case 'RESET': this.resetFlight(); break;
    }
    this.state = to;
    this.emit('state');
    if (tr === 'COUNTDOWN_ELAPSED') this.emit('liftoff');
    if (tr === 'TOUCHDOWN') this.emit('complete');
    if (tr === 'START') this.emit('countdown');
    if (tr === 'BLOCK') this.emit('blocked');
    if (tr === 'RESET') this.emit('reset');
    if (tr === 'DENY_HOLD' || tr === 'HOLD' || tr === 'CRUISE_REACHED') this.emit('hold');
    return true;
  }

  private stopAt(_p: THREE.Vector3) {
    this.speed = 0;
    this.vel.set(0, 0, 0);
    this.acc.set(0, 0, 0);
    this.yawRate = 0;
  }

  private setBlocked(o: Obstacle | null, reason: string, dist: number | null = null) {
    const near = o ?? this.inRange[0]?.o ?? null;
    this.blocked = { id: near?.id ?? null, kind: near?.kind ?? null, dist: dist ?? (near ? clearance3D(near, this.pos) : null), reason };
  }

  // ---------------------------------------------------------------- environment & planning
  private load(seed: number, initial = false) {
    for (let tries = 0; tries < 12; tries++) {
      const w = generateWorld(seed + tries);
      const plan = planRoute(w.obstacles, START.x, START.z, GOAL.x, GOAL.z);
      if (!plan) continue;
      this.world = w;
      this.mapped = new Uint8Array(w.cloud.count);
      this.inRangeMask = new Uint8Array(w.cloud.count);
      this.basePlan = plan.points;
      this.baseExpanded = plan.expanded;
      this.worldVersion++;
      this.resetFlight();
      if (!initial) this.emit('reset');
      return;
    }
    throw new Error('Unable to generate a plannable environment');
  }

  newEnvironment(seed = 1000 + Math.floor(Math.random() * 9000)) {
    if (!this.allowed('NEW_ENV')) return false;
    this.load(seed);
    this.emit('state');
    return true;
  }

  private setRoute(pts: { x: number; z: number }[], expanded: number, startY: number, cruiseAlt: number, origin: Route['origin'], rev: number) {
    const waypoints = pts.map((p, i) => new THREE.Vector3(p.x, i === 0 ? startY : cruiseAlt, p.z));
    const { curve, min, samples, cum } = buildCurve(waypoints, this.world.obstacles);
    const n = waypoints.length;
    // Catmull-Rom passes through control point i at t = i/(n-1) = sample i*PER_SEG: exact waypoint arc.
    const wpArc = waypoints.map((_, i) => cum[i * PER_SEG]);
    this.route = { id: ++this.routeIds, rev, origin, waypoints, curve, length: cum[cum.length - 1], wpArc, samples, cum, cruiseAlt, minClearance: min, expanded };
    this.s = 0;
    this.currentWp = Math.min(1, n - 1);
  }

  /** RECALCULATE button. STANDBY: from the pad. TRANSIT: from here, continue. ROUTE_BLOCKED: from here, recover. */
  recalculate(): boolean {
    if (!this.allowed('RECALCULATE')) return false;
    if (this.state === 'STANDBY') {
      const plan = planRoute(this.world.obstacles, START.x, START.z, GOAL.x, GOAL.z);
      if (!plan) return false;
      this.setRoute(plan.points, plan.expanded, CRUISE_ALT, CRUISE_ALT, 'RECALCULATED', this.route.rev + 1);
      this.addLog('ok', `Route R${this.route.rev} · ${this.waypoints.length - 1} waypoints · ${this.planLength.toFixed(1)} m`);
      this.emit('route');
      return true;
    }
    const prevN = this.waypoints.length - 1;
    if (!this.replanFromHere()) {
      if (this.state === 'AUTONOMOUS_TRANSIT') { this.setBlocked(null, 'No feasible route from the current position'); this.dispatch('BLOCK'); }
      else this.addLog('alert', 'Recalculation failed · still blocked · HOLD to reposition manually');
      return false;
    }
    this.addLog('ok', `Route R${this.route.rev} replaces previous route (${prevN} → ${this.waypoints.length - 1} waypoints)`);
    if (this.state === 'ROUTE_BLOCKED') this.dispatch('REROUTE');
    this.emit('route');
    return true;
  }

  private replanFromHere(): boolean {
    const plan = planRoute(this.world.obstacles, this.pos.x, this.pos.z, GOAL.x, GOAL.z);
    if (!plan) return false;
    // keep current altitude if above cruise (never descend onto obstacle tops); climb to cruise if below
    const cruise = THREE.MathUtils.clamp(this.pos.y, CRUISE_ALT, MAX_ALT);
    const keepSpeed = this.state === 'AUTONOMOUS_TRANSIT' ? this.speed : 0;
    this.setRoute(plan.points, plan.expanded, this.pos.y, cruise, 'RECALCULATED', this.route.rev + 1);
    this.speed = keepSpeed;
    return true;
  }

  /** Restores a freshly-proceeded STANDBY. Called on RESET and environment load. */
  private resetFlight() {
    this.setRoute(this.basePlan, this.baseExpanded, CRUISE_ALT, CRUISE_ALT, 'INITIAL', 1);
    this.resumeTo = null;
    this.countdown = 0;
    this.pos.set(START.x, 0, START.z);
    this.vel.set(0, 0, 0);
    this.acc.set(0, 0, 0);
    this.speed = 0;
    this.routeFlown = 0;
    this.traveled = 0;
    this.missionTime = 0;
    this.holdTime = 0;
    this.minClearance = Infinity;
    this.blocked = null;
    const first = this.waypoints[1];
    this.heading = norm(Math.atan2(first.x - START.x, -(first.z - START.z)));
    this.yawRate = 0;
    this.deniedCount = 0;
    this.inRange = [];
    this.detected.clear();
    this.warned.clear();
    this.mapped.fill(0);
    this.inRangeMask.fill(0);
    this.pointsInRange = 0;
    this.pointsMapped = 0;
    this.scans = 0;
    this.scanAcc = 0;
    this.accT = 0;
    this.log = [];
    const w = this.world;
    this.addLog('ok', `Environment ready · seed ${w.seed} · ${w.obstacles.length} obstacles · ${w.cloud.count.toLocaleString()} LiDAR points`);
    this.addLog('info', `Route R1 · ${this.waypoints.length - 1} waypoints · ${this.planLength.toFixed(1)} m · cruise ${CRUISE_ALT.toFixed(1)} m`);
    this.updatePerception(false);
    this.scan(); // single standby scan from the pad (not repeated until flight)
  }

  // ---------------------------------------------------------------- restricted manual flight commands
  /** True when the restricted buttons are clickable (aircraft in flight, or paused in flight). */
  restrictedAvailable() {
    if (!this.allowed('RESTRICTED_CMD')) return false;
    return this.state !== 'PAUSED' || IN_FLIGHT.includes(this.resumeTo ?? 'STANDBY');
  }

  /**
   * The ONLY handler for manual flight commands. It never moves the aircraft:
   * validates the command, forces MANUAL_HOLD (physics loop stops stepping), zeroes all
   * velocities, freezes the authoritative flight state, and logs the denial.
   * Idempotent: repeated clicks while already held change nothing but the log/counter.
   */
  handleRestrictedFlightCommand(command: string): { denied: true; state: MissionState; known: boolean } {
    const known = (RESTRICTED_COMMANDS as readonly string[]).includes(command);
    if (this.restrictedAvailable() && this.state !== 'MANUAL_HOLD') this.dispatch('DENY_HOLD');
    if (this.state === 'MANUAL_HOLD') this.stopAt(this.pos); // re-assert zero velocity
    this.deniedCount++;
    this.addLog('alert', `COMMAND DENIED · ${known ? command : 'UNKNOWN'} · control authorization failure · manual flight commands are restricted`);
    this.emit('denied');
    return { denied: true, state: this.state, known };
  }

  // ---------------------------------------------------------------- simulation step
  private step(dt: number) {
    this.steps++;
    const st = this.state;
    if (st === 'INITIALIZING') {
      this.initT += dt;
      if (this.initT >= INIT_TOTAL) this.dispatch('INIT_COMPLETE');
      return;
    }
    if (st === 'COUNTDOWN') {
      const before = Math.ceil(this.countdown);
      this.countdown = Math.max(0, this.countdown - dt);
      if (Math.ceil(this.countdown) !== before && this.countdown > 0) this.emit('tick');
      if (this.countdown <= 0) this.dispatch('COUNTDOWN_ELAPSED');
      return;
    }
    if (st === 'MANUAL_HOLD') { // physics loop stopped: nothing in the flight state may change
      this.holdTime += dt; // wall-clock hold duration, used only for the reminder log
      if (Math.floor(this.holdTime / HOLD_REMINDER) !== Math.floor((this.holdTime - dt) / HOLD_REMINDER)) {
        this.addLog('info', `Position hold · ${Math.round(this.holdTime)} s · aircraft stationary`);
      }
      return;
    }
    if (st !== 'TAKEOFF' && st !== 'AUTONOMOUS_TRANSIT' && st !== 'ROUTE_BLOCKED' && st !== 'LANDING') return;

    const prev = this.pos.clone();
    const prevVel = this.vel.clone();
    const prevHeading = this.heading;
    this.missionTime += dt;

    if (st === 'TAKEOFF') {
      const target = this.waypoints[0].y;
      const vy = Math.min(MAX_VZ, Math.max(0.4, (target - this.pos.y) * 1.2));
      this.pos.y = Math.min(target, this.pos.y + vy * dt);
    } else if (st === 'AUTONOMOUS_TRANSIT') {
      const L = this.planLength;
      const remaining = L - this.s;
      const brake = Math.sqrt(2 * DECEL * Math.max(0, remaining)) + 0.3;
      const target = Math.min(CRUISE_SPEED, brake);
      this.speed += THREE.MathUtils.clamp(target - this.speed, -3 * dt, ACCEL * dt);
      const ds = Math.min(this.speed * dt, L - this.s);
      this.s += ds;
      this.routeFlown += ds;
      const tan = this.pathPoint(this.s, this.pos);
      this.turnTowards(Math.atan2(tan.x, -tan.z), dt, 3);
      while (this.currentWp < this.waypoints.length - 1 && this.s >= this.wpArc[this.currentWp]) {
        this.addLog('ok', `${wpName(this.currentWp, this.waypoints.length)} reached`);
        this.currentWp++;
      }
    } else if (st === 'LANDING') {
      const vy = Math.min(MAX_VZ, Math.max(0.4, this.pos.y * 0.6));
      this.pos.y = Math.max(0, this.pos.y - vy * dt);
    }
    // ROUTE_BLOCKED: aircraft stationary

    if (st === 'ROUTE_BLOCKED') {
      this.holdTime += dt;
      if (Math.floor(this.holdTime / HOLD_REMINDER) !== Math.floor((this.holdTime - dt) / HOLD_REMINDER)) {
        this.addLog('warn', `Blocked ${Math.round(this.holdTime)} s · press RECALCULATE to recover`);
      }
    }

    // authoritative kinematics: velocity = exact position derivative, acceleration = velocity derivative
    this.vel.copy(this.pos).sub(prev).divideScalar(dt);
    this.acc.copy(this.vel).sub(prevVel).divideScalar(dt);
    this.yawRate = angDiff(this.heading, prevHeading) / dt;
    this.traveled += this.pos.distanceTo(prev);
    this.updatePerception();
    this.scanAcc += dt;
    if (this.scanAcc >= 1 / SCAN_HZ) { this.scanAcc -= 1 / SCAN_HZ; this.scan(); }

    // automatic transitions
    if (st === 'TAKEOFF' && this.pos.y >= this.waypoints[0].y - 1e-6) this.dispatch('CRUISE_REACHED');
    else if (st === 'AUTONOMOUS_TRANSIT') {
      if (this.s >= this.planLength - 1e-6) {
        this.currentWp = this.waypoints.length - 1;
        this.speed = 0;
        this.dispatch('ROUTE_COMPLETE');
      } else {
        const hit = this.lookAhead();
        if (hit) { this.setBlocked(hit.o, `${hit.o.id} (${hit.o.kind}) within ${GUARD_DIST} m of route ahead`, hit.d); this.dispatch('BLOCK'); }
      }
    } else if (st === 'LANDING' && this.pos.y <= 0) {
      this.vel.set(0, 0, 0);
      this.dispatch('TOUCHDOWN');
    }
  }

  /** Index of the last path sample at or before arc length sa. */
  pathIndexAt(sa: number) {
    const { cum } = this.route;
    let lo = 0, hi = cum.length - 1;
    if (sa >= cum[hi]) return hi;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (cum[m] <= sa) lo = m; else hi = m; }
    return lo;
  }

  /** Exact point on the flown path at arc length sa; returns the unit direction of travel there. */
  pathPoint(sa: number, out: THREE.Vector3): THREE.Vector3 {
    const { cum, samples } = this.route;
    const last = cum.length - 1;
    const x = Math.max(0, Math.min(cum[last], sa));
    let lo = 0, hi = last;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (cum[m] <= x) lo = m; else hi = m; }
    const seg = cum[hi] - cum[lo];
    const f = seg > 1e-12 ? (x - cum[lo]) / seg : 0;
    out.lerpVectors(samples[lo], samples[hi], f);
    return new THREE.Vector3().subVectors(samples[hi], samples[lo]).normalize();
  }

  /** Checks the next LOOKAHEAD metres of route for an obstacle closer than GUARD_DIST. */
  private lookAhead(): { o: Obstacle; d: number } | null {
    const L = this.planLength;
    const q = new THREE.Vector3();
    for (let a = 1; a <= LOOKAHEAD; a += 1) {
      const sa = Math.min(L, this.s + a);
      this.pathPoint(sa, q);
      for (const o of this.world.obstacles) {
        const d = clearance3D(o, q);
        if (d < GUARD_DIST) return { o, d };
      }
      if (sa >= L) break;
    }
    return null;
  }

  private turnTowards(target: number, dt: number, rate: number, maxRate = Math.PI) {
    const d = angDiff(target, this.heading);
    const stepA = THREE.MathUtils.clamp(d * (1 - Math.exp(-dt * rate)), -maxRate * dt, maxRate * dt);
    this.heading = Math.abs(d) < 1e-4 ? norm(target) : norm(this.heading + stepA);
  }

  private updatePerception(announce = true) {
    this.inRange = [];
    const airborne = this.state !== 'TAKEOFF' && this.state !== 'LANDING' && this.pos.y > 1;
    for (const o of this.world.obstacles) {
      const d = clearance3D(o, this.pos);
      if (airborne) this.minClearance = Math.min(this.minClearance, d);
      if (d >= SENSOR_RANGE) continue;
      this.inRange.push({ o, d });
      if (!announce) continue;
      if (!this.detected.has(o.id)) {
        this.detected.add(o.id);
        this.addLog('info', `${o.id} (${o.kind}) detected at ${d.toFixed(1)} m`);
      }
      if (d < WARN_DIST && !this.warned.has(o.id)) {
        this.warned.add(o.id);
        this.addLog('warn', `Proximity advisory · ${o.id} at ${d.toFixed(1)} m`);
        this.emit('proximity');
      }
    }
    this.inRange.sort((a, b) => a.d - b.d);
  }

  /** One synthetic LiDAR revolution: returns within range from the current position. */
  private scan() {
    const { positions, count } = this.world.cloud;
    const p = this.pos;
    const R2 = SENSOR_RANGE * SENSOR_RANGE;
    let inR = 0, mapped = 0;
    for (let i = 0; i < count; i++) {
      const dx = positions[i * 3] - p.x, dy = positions[i * 3 + 1] - p.y, dz = positions[i * 3 + 2] - p.z;
      const hit = dx * dx + dy * dy + dz * dz < R2 ? 1 : 0;
      this.inRangeMask[i] = hit;
      if (hit) { inR++; this.mapped[i] = 1; }
      mapped += this.mapped[i];
    }
    this.pointsInRange = inR;
    this.pointsMapped = mapped;
    this.scans++;
    this.lidarVersion++;
  }

  // ---------------------------------------------------------------- derived telemetry
  private get effectiveState(): MissionState { return this.state === 'PAUSED' ? this.resumeTo ?? 'STANDBY' : this.state; }

  /** Remaining route distance, plus the offset back to the route while stopped off it. */
  remainingDistance() {
    const st = this.effectiveState;
    if (st === 'LANDING' || st === 'COMPLETE') return 0;
    const onRoute = new THREE.Vector3(); this.pathPoint(this.s, onRoute);
    const off = st === 'MANUAL_HOLD' || st === 'ROUTE_BLOCKED' ? onRoute.distanceTo(this.pos) : 0;
    return Math.max(0, this.planLength - this.s) + off;
  }

  snapshot(): Snapshot {
    const st = this.effectiveState;
    const remaining = this.remainingDistance();
    const progress = st === 'LANDING' || st === 'COMPLETE' ? 1 : this.routeFlown + remaining > 0 ? this.routeFlown / (this.routeFlown + remaining) : 0;
    const near = this.inRange[0];
    const paused = this.state === 'PAUSED';
    const flying = ['TAKEOFF', 'AUTONOMOUS_TRANSIT', 'LANDING'].includes(this.state);
    const sensor: Snapshot['sensor'] = paused ? 'FROZEN' : flying ? 'SCANNING' : this.state === 'MANUAL_HOLD' ? 'HOLD' : this.state === 'ROUTE_BLOCKED' ? 'STATIONARY' : 'IDLE';
    const r = this.route;
    return {
      state: this.state,
      resumeTo: this.resumeTo,
      initStep: Math.max(0, Math.min(INIT_STEPS + 1, Math.floor((this.initT - INIT_LEAD) / INIT_STEP_T) + 1)),
      countdown: this.countdown,
      seed: this.world.seed,
      pos: { x: this.pos.x, y: -this.pos.z, z: this.pos.y },
      groundSpeed: Math.hypot(this.vel.x, this.vel.z),
      vz: this.vel.y,
      yawRate: THREE.MathUtils.radToDeg(this.yawRate),
      accel: this.acc.length(),
      heading: Math.round(THREE.MathUtils.radToDeg(this.heading)) % 360,
      progress,
      routeFlown: this.routeFlown,
      remaining,
      planLength: r.length,
      traveled: this.traveled,
      route: { id: r.id, rev: r.rev, origin: r.origin, waypointCount: r.waypoints.length - 1, cruiseAlt: r.cruiseAlt, minClearance: r.minClearance },
      waypointCount: r.waypoints.length - 1,
      currentWp: this.currentWp,
      obstacleCount: this.world.obstacles.length,
      obstaclesInRange: this.inRange.length,
      nearest: near ? { id: near.o.id, kind: near.o.kind, dist: near.d } : null,
      minClearance: this.minClearance,
      pointsInRange: this.pointsInRange,
      pointsMapped: this.pointsMapped,
      totalPoints: this.world.cloud.count,
      scans: this.scans,
      sensor,
      missionTime: this.missionTime,
      holdTime: this.holdTime,
      blocked: this.blocked,
      deniedCount: this.deniedCount,
    };
  }
}

export { PLAN_CLEARANCE };

function norm(a: number) { const t = Math.PI * 2; return ((a % t) + t) % t; }
function angDiff(a: number, b: number) { const d = a - b; return Math.atan2(Math.sin(d), Math.cos(d)); }

export function wpName(i: number, n: number) {
  return i >= n - 1 ? 'TGT' : `WP-${String(i).padStart(2, '0')}`;
}
