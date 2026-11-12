// Headless regression tests for the mission engine (no browser). Run: npm run test:unit
// Time is driven explicitly with engine.advance(seconds) — the same fixed-step clock the UI uses.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ACTIONS, Action, Engine, MissionState, ROUTE_MIN_CLEARANCE, TRANSITIONS, CRUISE_SPEED, GUARD_DIST, RESTRICTED_COMMANDS } from '../src/sim/engine';
import { Obstacle, footprintDistance } from '../src/sim/world';

const toStandby = (e = new Engine(2205)) => {
  assert.ok(e.dispatch('INITIALIZE'));
  e.advance(5);
  assert.equal(e.state, 'READY');
  assert.ok(e.dispatch('CONTINUE'));
  assert.ok(e.dispatch('PROCEED'));
  assert.equal(e.state, 'STANDBY');
  return e;
};
const until = (e: Engine, pred: () => boolean, max = 300, dt = 0.05) => {
  for (let t = 0; t < max; t += dt) { if (pred()) return true; e.advance(dt); }
  return pred();
};
// takeoff now ends in an automatic position hold; transit only after an explicit RESUME AUTO
const toTransit = (e: Engine) => { assert.ok(e.dispatch('START')); assert.ok(until(e, () => e.state === 'MANUAL_HOLD', 30)); assert.ok(e.dispatch('RESUME_AUTONOMY')); return e; };
const key = (e: Engine) => JSON.stringify([e.pos.toArray(), e.s, e.routeFlown, e.currentWp]);
const frozen = (e: Engine) => JSON.stringify([e.pos.toArray(), e.heading, e.s, e.routeFlown, e.currentWp, e.vel.toArray(), e.yawRate, e.pointsInRange, e.pointsMapped, e.scans, e.snapshot().progress, e.snapshot().remaining]);

test('1 welcome stays idle for 60 s', () => {
  const e = new Engine(2205);
  e.advance(60);
  assert.equal(e.state, 'WELCOME');
  assert.equal(e.initT, 0);
});

test('2–5 every stage requires its own explicit action; no skipping', () => {
  const e = new Engine(2205);
  for (const t of ['CONTINUE', 'PROCEED', 'START', 'INIT_COMPLETE'] as const) assert.equal(e.dispatch(t), false, `${t} from WELCOME`);
  assert.ok(e.dispatch('INITIALIZE'));
  assert.equal(e.dispatch('INITIALIZE'), false, 'double initialize');
  e.advance(5);
  assert.equal(e.state, 'READY');
  e.advance(60);
  assert.equal(e.state, 'READY', 'READY waits 60 s');
  for (const t of ['PROCEED', 'START'] as const) assert.equal(e.dispatch(t), false);
  assert.ok(e.dispatch('CONTINUE'));
  e.advance(60);
  assert.equal(e.state, 'BRIEFING', 'BRIEFING waits 60 s');
  assert.equal(e.dispatch('START'), false);
  assert.ok(e.dispatch('PROCEED'));
  assert.equal(e.state, 'STANDBY');
});

test('6 standby is stationary for 60 s (no clock, no motion, no scans)', () => {
  const e = toStandby();
  const k = key(e), scans = e.scans;
  e.advance(60);
  assert.equal(e.state, 'STANDBY');
  assert.equal(key(e), k);
  assert.equal(e.missionTime, 0);
  assert.equal(e.pos.y, 0);
  assert.equal(e.scans, scans);
});

test('7–8 countdown starts exactly once, only countdown advances, then takeoff', () => {
  const e = toStandby();
  assert.ok(e.dispatch('START'));
  assert.equal(e.dispatch('START'), false, 'second START rejected');
  e.advance(2);
  assert.ok(Math.abs(e.countdown - 3) < 0.02, `countdown ${e.countdown}`);
  assert.equal(e.dispatch('START'), false);
  e.advance(2.9);
  assert.equal(e.state, 'COUNTDOWN');
  assert.equal(e.missionTime, 0);
  assert.equal(e.pos.y, 0);
  e.advance(0.2);
  assert.equal(e.state, 'TAKEOFF');
  e.advance(0.5);
  const s = e.snapshot();
  assert.ok(s.vz > 0 && s.groundSpeed < 1e-9, `vz ${s.vz} gs ${s.groundSpeed}`);
  assert.ok(until(e, () => e.state === 'MANUAL_HOLD', 20));
  assert.ok(Math.abs(e.pos.y - 8) < 1e-6);
});

test('TAKEOFF → automatic MANUAL_HOLD exactly once; stationary 60 s; no transit', () => {
  const e = toStandby();
  const pad = e.pos.clone(), hdg = e.heading;
  e.dispatch('START');
  const seen = new Set<string>();
  let holds = 0;
  const off = e.on((ev) => { if (ev.type === 'hold') holds++; });
  until(e, () => { seen.add(e.state); return e.state === 'MANUAL_HOLD'; }, 30, 0.01);
  assert.deepEqual([...seen], ['COUNTDOWN', 'TAKEOFF', 'MANUAL_HOLD']);
  assert.equal(e.pos.y, e.route.cruiseAlt, 'exactly at target altitude');
  assert.equal(e.pos.x, pad.x); assert.equal(e.pos.z, pad.z); assert.equal(e.heading, hdg);
  const s = e.snapshot();
  assert.equal(s.groundSpeed, 0); assert.equal(s.vz, 0); assert.equal(s.yawRate, 0);
  assert.equal(s.routeFlown, 0); assert.equal(s.progress, 0); assert.equal(s.currentWp, 1);
  assert.equal(e.log.filter((l) => l.msg.startsWith('Takeoff complete')).length, 1);
  const f0 = frozen(e);
  for (let i = 0; i < 60; i++) { e.advance(1); assert.equal(e.state, 'MANUAL_HOLD'); }
  assert.equal(frozen(e), f0, 'stationary for 60 s');
  for (const c of RESTRICTED_COMMANDS) e.handleRestrictedFlightCommand(c);
  e.advance(30);
  assert.equal(frozen(e), f0, 'restricted commands moved nothing');
  assert.equal(holds, 1, 'hold entered once');
  off();
});

test('9 + 14 + 15 transit kinematics, progress and waypoints are consistent', () => {
  const e = toTransit(toStandby());
  let prev = e.snapshot(), prevPos = e.pos.clone(), prevT = e.missionTime;
  for (let i = 0; i < 150; i++) {
    e.advance(0.1);
    if (e.state !== 'AUTONOMOUS_TRANSIT') break;
    const s = e.snapshot();
    const dt = e.missionTime - prevT;
    const moved = e.pos.distanceTo(prevPos);
    // average speed over the interval lies between the start and end instantaneous speeds (± accel)
    const vAvg = moved / dt;
    const lo = Math.min(Math.hypot(prev.groundSpeed, prev.vz), Math.hypot(s.groundSpeed, s.vz)) - 0.2;
    const hi = Math.max(Math.hypot(prev.groundSpeed, prev.vz), Math.hypot(s.groundSpeed, s.vz)) + 0.2;
    assert.ok(vAvg >= lo && vAvg <= hi, `Δp/Δt ${vAvg} not in [${lo}, ${hi}]`);
    assert.ok(s.groundSpeed <= CRUISE_SPEED + 1e-6);
    assert.ok(Math.abs(s.vz) < 1e-6 || e.route.rev > 1, 'level flight at cruise');
    assert.ok(s.remaining <= prev.remaining + 1e-9, 'remaining decreases');
    assert.ok(s.progress >= prev.progress - 1e-12, 'progress increases');
    assert.ok(Math.abs(s.progress - s.routeFlown / (s.routeFlown + s.remaining)) < 1e-9);
    assert.ok(Math.abs(s.remaining - (e.planLength - e.s)) < 1e-9);
    assert.ok(s.heading >= 0 && s.heading <= 359);
    for (let w = 1; w < e.currentWp; w++) assert.ok(e.s >= e.wpArc[w], 'waypoint passed before being counted');
    if (e.currentWp < e.waypoints.length - 1) assert.ok(e.s < e.wpArc[e.currentWp], 'waypoint reached but not counted');
    assert.equal(s.waypointCount, e.route.waypoints.length - 1);
    assert.equal(s.route.waypointCount, s.waypointCount);
    prev = s; prevPos = e.pos.clone(); prevT = e.missionTime;
  }
});

test('10–11 manual hold freezes physics, mission clock and LiDAR', () => {
  const e = toTransit(toStandby());
  e.advance(3);
  assert.ok(e.dispatch('HOLD'));
  let s = e.snapshot();
  assert.equal(s.groundSpeed, 0); assert.equal(s.vz, 0);
  const k = key(e), prog = s.progress, rem = s.remaining, pir = e.pointsInRange, mapped = e.pointsMapped, t0 = e.missionTime, scans = e.scans;
  e.advance(65);
  s = e.snapshot();
  assert.equal(e.state, 'MANUAL_HOLD', 'hold never changes state by itself');
  assert.equal(key(e), k, 'position / route progress frozen');
  assert.equal(s.groundSpeed, 0); assert.equal(s.vz, 0); assert.equal(s.accel, 0);
  assert.equal(s.progress, prog); assert.equal(s.remaining, rem);
  assert.equal(e.pointsInRange, pir); assert.equal(e.pointsMapped, mapped);
  assert.equal(s.sensor, 'HOLD');
  assert.ok(Math.abs(e.missionTime - t0 - 65) < 0.02, 'mission clock T+ keeps running during hold');
  assert.equal(e.scans, scans, 'LiDAR frozen in hold');
  assert.ok(e.log.some((l) => l.msg.includes('press RESUME AUTO')), 'hold reminder logged');
});

test('12 resume restarts navigation on a revised route that every consumer shares', () => {
  const e = toTransit(toStandby());
  e.advance(3);
  e.dispatch('HOLD');
  const flown = e.routeFlown, rev = e.route.rev;
  assert.equal(e.allowed('RECALCULATE'), false, 'RECALCULATE not offered in hold (RESUME AUTO replans)');
  assert.ok(e.dispatch('RESUME_AUTONOMY'));
  assert.equal(e.state, 'AUTONOMOUS_TRANSIT');
  assert.equal(e.route.rev, rev + 1);
  assert.equal(e.route.origin, 'RECALCULATED');
  assert.ok(Math.abs(e.route.cruiseAlt - 8) < 1e-6, 'resumes at the held cruise altitude');
  e.advance(5);
  assert.ok(e.routeFlown > flown + 10, 'navigation genuinely advances');
  const s = e.snapshot();
  assert.equal(s.waypointCount, e.waypoints.length - 1);
  assert.equal(s.route.rev, e.route.rev);
});

test('13 pause freezes everything; resume returns to the previous state', () => {
  const e = toTransit(toStandby());
  e.advance(2);
  assert.ok(e.dispatch('PAUSE'));
  const k = key(e), t = e.missionTime, scans = e.scans;
  e.advance(30);
  assert.equal(key(e), k); assert.equal(e.missionTime, t); assert.equal(e.scans, scans);
  const s = e.snapshot();
  assert.equal(s.groundSpeed, 0); assert.equal(s.sensor, 'FROZEN');
  assert.ok(e.dispatch('RESUME'));
  assert.equal(e.state, 'AUTONOMOUS_TRANSIT');
  // pause during countdown freezes the countdown
  const c = toStandby(); c.dispatch('START'); c.advance(1); c.dispatch('PAUSE');
  const cd = c.countdown; c.advance(20); assert.equal(c.countdown, cd);
  c.dispatch('RESUME'); assert.equal(c.state, 'COUNTDOWN');
});

test('blocked route: identified, stops, RECALCULATE recovers, mission completes', () => {
  const e = toTransit(toStandby());
  e.advance(2);
  const ahead = e.curve.getPointAt(Math.min(1, (e.s + 14) / e.planLength));
  const ob: Obstacle = { id: 'OB-99', kind: 'PILLAR', x: ahead.x, z: ahead.z, rot: 0, shape: 'circle', hw: 0, hd: 0, r: 1.5, h: 30, parts: [] };
  e.world.obstacles.push(ob);
  assert.ok(until(e, () => e.state === 'ROUTE_BLOCKED', 10));
  const s = e.snapshot();
  assert.equal(s.blocked?.id, 'OB-99');
  assert.ok(s.blocked!.dist! < GUARD_DIST);
  assert.equal(s.groundSpeed, 0);
  const k = key(e); e.advance(20); assert.equal(key(e), k, 'stationary while blocked');
  assert.ok(e.allowed('RECALCULATE') && e.allowed('HOLD') && !e.allowed('START'));
  assert.ok(e.recalculate());
  assert.equal(e.state, 'AUTONOMOUS_TRANSIT');
  assert.ok(until(e, () => e.state === 'COMPLETE', 200), `ended in ${e.state}`);
});

test('validated routes keep clearance for 150 environments', () => {
  const bad: string[] = [];
  for (let seed = 1000; seed < 1150; seed++) {
    const e = new Engine(seed);
    const pts = e.curve.getSpacedPoints(Math.ceil(e.planLength / 0.25));
    let min = Infinity;
    for (const q of pts) for (const o of e.world.obstacles) min = Math.min(min, footprintDistance(o, q.x, q.z));
    if (min < ROUTE_MIN_CLEARANCE - 0.05) bad.push(`${seed}:${min.toFixed(2)}`);
  }
  assert.deepEqual(bad, []);
});

test('16–17 reset restores a fresh session; second mission completes cleanly', () => {
  const fresh = toStandby().snapshot();
  const e = toTransit(toStandby());
  e.advance(4); e.dispatch('HOLD'); e.handleRestrictedFlightCommand('ASCEND'); e.advance(3); e.dispatch('RESUME_AUTONOMY'); e.advance(2);
  assert.ok(e.dispatch('RESET'));
  const s = e.snapshot();
  for (const f of ['state', 'pos', 'groundSpeed', 'vz', 'heading', 'progress', 'routeFlown', 'remaining', 'currentWp', 'waypointCount', 'missionTime', 'holdTime', 'traveled', 'pointsMapped', 'scans', 'blocked', 'route'] as const) {
    assert.deepEqual(s[f], f === 'route' ? { ...fresh.route, id: s.route.id } : fresh[f], `field ${f}`);
  }
  assert.equal(e.log.length, 2);
  const k = key(e); e.advance(30); assert.equal(key(e), k, 'nothing keeps running after reset');
  let landingEarly = false;
  assert.ok(e.dispatch('START'));
  assert.ok(until(e, () => e.state === 'MANUAL_HOLD', 30), 'post-takeoff hold');
  assert.ok(e.dispatch('RESUME_AUTONOMY'));
  assert.ok(until(e, () => { if (e.state === 'LANDING' && e.s < e.planLength - 1e-6) landingEarly = true; return e.state === 'COMPLETE'; }, 200));
  assert.equal(landingEarly, false);
  assert.equal(e.pos.y, 0);
  assert.equal(e.snapshot().progress, 1);
});

test('full autonomous missions complete without blocking (20 environments)', () => {
  for (let seed = 3000; seed < 3020; seed++) {
    const e = toTransit(toStandby(new Engine(seed)));
    let blocked = false;
    until(e, () => { if (e.state === 'ROUTE_BLOCKED') blocked = true; return e.state === 'COMPLETE' || blocked; }, 300, 0.25);
    assert.equal(blocked, false, `seed ${seed} blocked`);
    assert.equal(e.state, 'COMPLETE', `seed ${seed}`);
  }
});

test('F action-availability matrix matches the required table', () => {
  const expect: Partial<Record<MissionState, Action[]>> = {
    STANDBY: ['START', 'RECALCULATE', 'NEW_ENV'],
    COUNTDOWN: ['PAUSE', 'RESET'],
    TAKEOFF: ['PAUSE', 'RESET', 'RESTRICTED_CMD'],
    AUTONOMOUS_TRANSIT: ['PAUSE', 'HOLD', 'RECALCULATE', 'RESET', 'RESTRICTED_CMD'],
    MANUAL_HOLD: ['PAUSE', 'RESUME_AUTO', 'RESET', 'RESTRICTED_CMD'],
    ROUTE_BLOCKED: ['PAUSE', 'HOLD', 'RECALCULATE', 'RESET', 'RESTRICTED_CMD'],
    LANDING: ['PAUSE', 'RESET', 'RESTRICTED_CMD'],
    PAUSED: ['RESUME', 'RESET', 'RESTRICTED_CMD'],
    COMPLETE: ['RESET'],
    WELCOME: [], READY: [], BRIEFING: [],
  };
  for (const [st, list] of Object.entries(expect)) {
    const got = (Object.keys(ACTIONS) as Action[]).filter((a) => ACTIONS[a].includes(st as MissionState)).sort();
    assert.deepEqual(got, [...list!].sort(), st);
  }
  // matrix and transition table agree for actions that are transitions
  const pairs: [Action, keyof typeof TRANSITIONS][] = [['START', 'START'], ['PAUSE', 'PAUSE'], ['RESUME', 'RESUME'], ['HOLD', 'HOLD'], ['RESUME_AUTO', 'RESUME_AUTONOMY'], ['RESET', 'RESET']];
  for (const [a, t] of pairs) assert.deepEqual([...ACTIONS[a]].sort(), [...TRANSITIONS[t].from].sort(), a);
});

test('RESTRICTED: each of the 8 manual commands is denied, forces MANUAL_HOLD and moves nothing (0 s / 3 s / 30 s)', () => {
  assert.equal(RESTRICTED_COMMANDS.length, 8);
  const e = toTransit(toStandby());
  for (const cmd of RESTRICTED_COMMANDS) {
    e.advance(1.5); // flying (moving) before each command
    assert.equal(e.state, 'AUTONOMOUS_TRANSIT');
    const before = { pos: e.pos.clone(), heading: e.heading, s: e.s, wp: e.currentWp, t: e.missionTime };
    const denials = e.deniedCount;
    const r = e.handleRestrictedFlightCommand(cmd);
    assert.equal(r.denied, true); assert.equal(r.known, true);
    assert.equal(e.state, 'MANUAL_HOLD', cmd);
    assert.equal(e.deniedCount, denials + 1);
    // the command itself executed nothing: exactly the pre-command pose
    assert.deepEqual(e.pos.toArray(), before.pos.toArray(), `${cmd} position`);
    assert.equal(e.heading, before.heading, `${cmd} heading`);
    assert.equal(e.s, before.s); assert.equal(e.currentWp, before.wp); assert.equal(e.missionTime, before.t);
    const s0 = e.snapshot();
    assert.equal(s0.groundSpeed, 0); assert.equal(s0.vz, 0); assert.equal(s0.yawRate, 0); assert.equal(s0.accel, 0);
    assert.ok(e.log[0].msg.startsWith(`COMMAND DENIED · ${cmd}`), e.log[0].msg);
    const f0 = frozen(e);
    e.advance(3); assert.equal(frozen(e), f0, `${cmd} moved after 3 s`); assert.equal(e.state, 'MANUAL_HOLD');
    e.advance(27); assert.equal(frozen(e), f0, `${cmd} moved after 30 s`); assert.equal(e.state, 'MANUAL_HOLD');
    assert.ok(e.dispatch('RESUME_AUTONOMY'), 'explicit resume'); // only explicit action leaves hold
  }
});

test('RESTRICTED: rapid repeated commands while held change nothing; unknown commands also denied', () => {
  const e = toTransit(toStandby());
  e.advance(2);
  e.handleRestrictedFlightCommand('FORWARD');
  const f0 = frozen(e);
  for (let i = 0; i < 200; i++) { e.handleRestrictedFlightCommand(RESTRICTED_COMMANDS[i % 8]); e.advance(0.01); }
  e.handleRestrictedFlightCommand('TELEPORT');
  assert.equal(e.log[0].msg.includes('UNKNOWN'), true);
  e.advance(30);
  assert.equal(frozen(e), f0);
  assert.equal(e.state, 'MANUAL_HOLD');
  assert.equal(e.deniedCount, 202);
});

test('RESTRICTED: forces hold from TAKEOFF, LANDING, ROUTE_BLOCKED and PAUSED-in-flight; ignored on the ground', () => {
  const a = toStandby(); a.dispatch('START'); until(a, () => a.state === 'TAKEOFF', 10); a.advance(1);
  const y = a.pos.y; a.handleRestrictedFlightCommand('ASCEND'); a.advance(10);
  assert.equal(a.state, 'MANUAL_HOLD'); assert.equal(a.pos.y, y, 'climb frozen mid-takeoff');
  const b = toTransit(toStandby()); b.advance(2); b.dispatch('PAUSE');
  const p = b.pos.toArray(); b.handleRestrictedFlightCommand('LEFT'); b.advance(10);
  assert.equal(b.state, 'MANUAL_HOLD'); assert.deepEqual(b.pos.toArray(), p); assert.equal(b.resumeTo, null);
  const c = toTransit(toStandby()); until(c, () => c.state === 'LANDING', 200); c.advance(0.5);
  const cy = c.pos.y; c.handleRestrictedFlightCommand('DESCEND'); c.advance(10);
  assert.equal(c.state, 'MANUAL_HOLD'); assert.equal(c.pos.y, cy);
  for (const st of ['STANDBY', 'COUNTDOWN'] as const) {
    const g = toStandby(); if (st === 'COUNTDOWN') g.dispatch('START');
    assert.equal(g.restrictedAvailable(), false);
    g.handleRestrictedFlightCommand('FORWARD');
    assert.equal(g.state, st); assert.equal(g.pos.y, 0);
  }
});

// ---------------------------------------------------------------- real test site (photo) mode
import { SITE, projectToPhoto, P1W, P2W, LAUNCH } from '../src/sim/site';

test('SITE: calibration — P1/P2 3D anchors reproject onto the measured pillar bases within 6 px', () => {
  assert.deepEqual(SITE.photo.sourceSize, [1280, 684]);
  const e1 = projectToPhoto(P1W as [number, number, number])!, e2 = projectToPhoto(P2W as [number, number, number])!;
  const d1 = Math.hypot(e1.x - SITE.calib.p1.base[0], e1.y - SITE.calib.p1.base[1]);
  const d2 = Math.hypot(e2.x - SITE.calib.p2.base[0], e2.y - SITE.calib.p2.base[1]);
  assert.ok(d1 < 6 && d2 < 6, `P1 ${d1.toFixed(2)} px, P2 ${d2.toFixed(2)} px`);
  assert.ok(Math.abs(Math.hypot(P1W[0] - P2W[0], P1W[2] - P2W[2]) - SITE.p1p2DistanceM) < 0.05, 'P1–P2 distance matches config');
  // launch point is clear of the Point 1 pole and the drone column never reaches Point 2
  assert.ok(Math.hypot(LAUNCH[0] - P1W[0], LAUNCH[2] - P1W[2]) > 0.8);
  assert.ok(Math.hypot(LAUNCH[0] - P2W[0], LAUNCH[2] - P2W[2]) > 20);
});

test('SITE: direct Point 1 → Point 2 route, no synthetic obstacles or LiDAR cloud, fixed environment', () => {
  const e = new Engine(SITE);
  assert.equal(e.world.obstacles.length, 0);
  assert.equal(e.world.cloud.count, 0);
  assert.equal(e.waypoints.length, 2);
  assert.ok(Math.abs(e.planLength - SITE.distanceM) < 0.05, `${e.planLength}`);
  assert.deepEqual([e.pos.x, e.pos.y, e.pos.z], [0, 0, 0]);
  assert.equal(e.snapshot().heading, 0);
  toStandby(e);
  assert.equal(e.allowed('NEW_ENV'), false);
  assert.equal(e.newEnvironment(), false);
});

test('SITE: takeoff at Point 1 → automatic hold at 12 m; 60 s stationary; 8 commands denied; never travels to Point 2', () => {
  const e = toStandby(new Engine(SITE));
  e.dispatch('START');
  const seen = new Set<string>();
  until(e, () => { seen.add(e.state); return e.state === 'MANUAL_HOLD'; }, 30, 0.01);
  assert.deepEqual([...seen], ['COUNTDOWN', 'TAKEOFF', 'MANUAL_HOLD']);
  const s = e.snapshot();
  assert.deepEqual([s.pos.x, s.pos.y, s.pos.z], [0, 0, 12]);
  assert.equal(SITE.targetAltitudeM, 12);
  assert.equal(s.heading, 0); assert.equal(s.groundSpeed, 0); assert.equal(s.vz, 0); assert.equal(s.yawRate, 0);
  assert.equal(s.progress, 0); assert.equal(s.routeFlown, 0); assert.ok(Math.abs(s.traveled - 12) < 1e-9);
  assert.ok(Math.abs(s.distToGoal - SITE.distanceM) < 1e-9);
  const f0 = frozen(e);
  e.advance(60);
  for (const c of RESTRICTED_COMMANDS) { e.handleRestrictedFlightCommand(c); e.advance(1); }
  e.advance(30);
  assert.equal(frozen(e), f0);
  assert.equal(e.state, 'MANUAL_HOLD');
});

test('SITE: smooth ease-in/out climb at the configured 1.5 m/s (≈ 9.5 s to 12 m); clock runs in hold; RESUME AUTO / PAUSE denied while held', () => {
  const e = toStandby(new Engine(SITE));
  assert.equal(SITE.climbRateMps, 1.5);
  e.dispatch('START');
  until(e, () => e.state === 'TAKEOFF', 10, 0.01);
  const t0 = e.missionTime;
  e.advance(0.5); const v05 = e.snapshot().vz; e.advance(2); const v25 = e.snapshot().vz;
  assert.ok(v05 > 0.3 && v05 < 0.8, `eases in: vz ${v05}`); assert.ok(Math.abs(v25 - 1.5) < 1e-6, `cruise climb vz ${v25}`);
  until(e, () => e.state === 'MANUAL_HOLD', 30, 0.01);
  const climb = e.missionTime - t0;
  assert.ok(climb > 9 && climb < 10.5, `climb took ${climb.toFixed(2)} s`);
  const f0 = frozen(e), tm = e.missionTime;
  assert.equal(e.allowed('RESUME_AUTO'), false); assert.equal(e.allowed('PAUSE'), false);
  assert.equal(e.dispatch('RESUME_AUTONOMY'), false); assert.equal(e.dispatch('PAUSE'), false);
  for (const c of ['RESUME AUTO', 'PAUSE']) { const r = e.handleRestrictedFlightCommand(c); assert.equal(r.known, true); }
  e.advance(30);
  assert.equal(e.state, 'MANUAL_HOLD'); assert.equal(frozen(e), f0);
  assert.ok(e.missionTime > tm + 29.9, 'T+ advances during hold');
  assert.ok(e.dispatch('RESET'), 'RESET still leaves the hold');
});
