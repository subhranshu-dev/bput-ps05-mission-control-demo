// Browser regression tests (real time, real clicks/keys). Requires `npm run dev` on :5180.
// Usage: npm run test:e2e            (IDLE=60 by default; IDLE=5 for a quick run)
//        CHROME=/path/to/chrome npm run test:e2e
const { chromium } = require('playwright-core');
const URL = process.env.URL || 'http://127.0.0.1:5180/';
const IDLE = Number(process.env.IDLE || 60) * 1000;
const OUT = process.env.OUT || '';
const results = [];
const check = (name, ok, detail = '') => { results.push({ name, ok: !!ok }); console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1366, height: 768 } });
  const errs = [];
  p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(`${m.type()}: ${m.text()}`); });
  p.on('pageerror', (e) => errs.push('PAGEERROR: ' + e.message));
  await p.addInitScript(() => {
    const active = new Set(); const si = window.setInterval.bind(window), ci = window.clearInterval.bind(window);
    window.setInterval = (fn, ms, ...a) => { const id = si(fn, ms, ...a); active.add(id); return id; };
    window.clearInterval = (id) => { active.delete(id); ci(id); };
    window.__intervals = () => active.size;
    const raf = window.requestAnimationFrame.bind(window); let calls = 0;
    window.requestAnimationFrame = (cb) => { calls++; return raf(cb); };
    window.__raf = () => calls;
  });

  const S = () => p.evaluate(() => { const e = window.__aegis, s = e.snapshot(); return { ...s, k: JSON.stringify([e.pos.toArray(), e.s, e.routeFlown]), s_: e.s, L: e.planLength }; });
  const state = () => p.evaluate(() => window.__aegis.state);
  const waitState = async (want, ms = 90000) => { const t = Date.now(); while (Date.now() - t < ms) { if ((await state()) === want) return true; await sleep(150); } return false; };
  const btn = (label) => p.locator('button', { hasText: new RegExp(`^\\s*${label}`) }).first();
  const keys = async (k, n) => { for (let i = 0; i < n; i++) { await p.keyboard.press(k); await sleep(100); } };
  const idle = async (name) => { const a = await S(); await sleep(IDLE); const z = await S(); return { a, z, name }; };
  const loopsPerFrame = () => p.evaluate(() => new Promise((res) => { const c0 = window.__raf(); let f = 0; const t0 = performance.now(); const tick = () => { f++; if (performance.now() - t0 < 2000) requestAnimationFrame(tick); else res((window.__raf() - c0 - f) / f); }; requestAnimationFrame(tick); }));
  const shot = (n) => OUT && p.screenshot({ path: `${OUT}/e2e-${n}.png` });

  await p.goto(URL);
  await p.waitForFunction(() => !!window.__aegis);

  // 1–2 welcome idle, Enter/Space cannot initialize
  let r = await idle('WELCOME');
  check(`1 WELCOME idle ${IDLE / 1000}s`, r.z.state === 'WELCOME' && r.z.initStep === 0);
  await keys('Enter', 5); await keys(' ', 3); await keys('Tab', 1); await keys('Enter', 3);
  check('2 Enter/Space (incl. Tab-focused INITIALIZE) cannot initialize', (await state()) === 'WELCOME');
  // 3 initialization requires click
  await btn('INITIALIZE').click();
  check('3 INITIALIZE click → INITIALIZING', (await state()) === 'INITIALIZING');
  check('   init completes to READY', await waitState('READY', 20000));
  r = await idle('READY'); await keys('Enter', 4);
  check(`4 READY waits ${IDLE / 1000}s + Enter (needs CONTINUE)`, (await state()) === 'READY');
  await btn('CONTINUE').click();
  const briefWps = await p.evaluate(() => Number(/(\d+) waypoints/.exec(document.body.textContent)[1]));
  r = await idle('BRIEFING'); await keys('Enter', 4);
  check(`5 BRIEFING waits ${IDLE / 1000}s + Enter (needs PROCEED)`, (await state()) === 'BRIEFING');
  await btn('PROCEED').click();
  check('   PROCEED → STANDBY', (await state()) === 'STANDBY');
  await sleep(1500);
  const baseIntervals = await p.evaluate(() => window.__intervals());
  // 6 standby stationary
  r = await idle('STANDBY'); await keys('Enter', 4); await keys(' ', 4);
  check(`6 STANDBY stationary ${IDLE / 1000}s (+Enter/Space)`, (await state()) === 'STANDBY' && r.a.k === r.z.k && r.z.missionTime === 0 && r.z.pos.z === 0 && r.a.scans === r.z.scans);
  // 15 route consistency briefing ↔ dashboard ↔ 3D labels ↔ map
  const wpDom = await p.evaluate(() => ({ labels: document.querySelectorAll('.tag-wp').length, nav: document.querySelector('.panel .row-v') && [...document.querySelectorAll('.row')].find((x) => x.textContent.startsWith('Route')).textContent }));
  check('15 waypoint count identical: briefing / engine / 3D labels / nav', briefWps === r.z.waypointCount && wpDom.labels === r.z.waypointCount && wpDom.nav.includes(`${r.z.waypointCount} WP`), `brief ${briefWps} engine ${r.z.waypointCount} labels ${wpDom.labels} nav "${wpDom.nav}"`);
  await p.evaluate(() => [...document.querySelectorAll('button')].find((x) => x.textContent.includes('START MISSION')).focus());
  await keys('Enter', 2); await keys(' ', 2);
  check('   START MISSION refuses keyboard activation', (await state()) === 'STANDBY');
  await p.evaluate(() => document.activeElement.blur());
  // 7 countdown exactly once
  await btn('START MISSION').dblclick();
  await sleep(500);
  const c1 = (await S()).countdown;
  await btn('START MISSION').click({ force: true }).catch(() => {});
  await sleep(500);
  const c2 = (await S()).countdown;
  check('7 countdown starts once (double click + extra click ignored)', (await state()) === 'COUNTDOWN' && c2 < c1 && c1 <= 5, `${c1.toFixed(2)} → ${c2.toFixed(2)}`);
  // 8 takeoff after countdown
  check('8 TAKEOFF follows countdown', await waitState('TAKEOFF', 15000));
  check('   takeoff → automatic MANUAL_HOLD', await waitState('MANUAL_HOLD', 30000));
  await p.locator('[data-testid=hold-banner] button').click(); // explicit RESUME AUTO
  check('   RESUME AUTO → AUTONOMOUS_TRANSIT', (await state()) === 'AUTONOMOUS_TRANSIT');
  await shot('transit');
  // 9 + 14 flight consistency
  const sm = [];
  for (let i = 0; i < 25; i++) { sm.push(await S()); await sleep(200); }
  const tr = sm.filter((x) => x.state === 'AUTONOMOUS_TRANSIT');
  let okK = true, okP = true;
  for (let i = 1; i < tr.length; i++) {
    const a = tr[i - 1], c = tr[i]; const dt = c.missionTime - a.missionTime;
    if (dt > 0.05) { const pa = JSON.parse(a.k)[0], pc = JSON.parse(c.k)[0]; const v = Math.hypot(pc[0] - pa[0], pc[2] - pa[2]) / dt; if (Math.abs(v - (a.groundSpeed + c.groundSpeed) / 2) > 0.4) okK = false; }
    if (c.remaining > a.remaining + 1e-9 || c.progress < a.progress - 1e-12 || Math.abs(c.progress - c.routeFlown / (c.routeFlown + c.remaining)) > 1e-9) okP = false;
    if (c.groundSpeed > 6.0001 || c.heading < 0 || c.heading > 359) okK = false;
  }
  check(`9 position/speed consistent over ${tr.length} samples`, tr.length > 10 && okK);
  check('14 progress ↑ / remaining ↓ / progress = flown/(flown+left)', okP);
  // 13 pause
  await btn('PAUSE').click();
  r = await idle('PAUSED');
  check(`13 PAUSED ${IDLE / 1000}s: position, clock, scans frozen; speed 0`, r.z.state === 'PAUSED' && r.a.k === r.z.k && r.a.missionTime === r.z.missionTime && r.a.scans === r.z.scans && r.z.groundSpeed === 0 && r.z.sensor === 'FROZEN');
  await btn('RESUME').click();
  check('   RESUME → AUTONOMOUS_TRANSIT', (await state()) === 'AUTONOMOUS_TRANSIT');
  // 10–11 manual hold
  await btn('HOLD').click();
  await sleep(500);
  const banner = await p.locator('[data-testid=hold-banner]').isVisible();
  r = await idle('MANUAL_HOLD');
  check(`10 MANUAL_HOLD ${IDLE / 1000}s: position/alt/progress frozen, velocity 0`, r.z.state === 'MANUAL_HOLD' && r.a.k === r.z.k && r.z.groundSpeed === 0 && r.z.vz === 0 && r.a.progress === r.z.progress);
  check('11 hold freezes LiDAR (returns, map, scans) and the mission clock', r.a.pointsInRange === r.z.pointsInRange && r.a.pointsMapped === r.z.pointsMapped && r.a.scans === r.z.scans && r.z.sensor === 'HOLD' && r.z.missionTime === r.a.missionTime,
    `returns ${r.a.pointsInRange}→${r.z.pointsInRange} mapped ${r.a.pointsMapped}→${r.z.pointsMapped} sensor ${r.z.sensor} T ${r.a.missionTime.toFixed(1)}→${r.z.missionTime.toFixed(1)}`);
  check('   hold is announced: banner with RESUME AUTO visible, reminder logged', banner && (await p.evaluate(() => window.__aegis.log.some((l) => l.msg.includes('press RESUME AUTO')))));
  check('   RECALCULATE disabled in hold (RESUME AUTO replans)', await btn('RECALCULATE').isDisabled());
  await shot('hold');
  // 12 resume
  const f0 = (await S()).routeFlown;
  await p.locator('[data-testid=hold-banner] button').click();
  await p.waitForFunction((f) => window.__aegis.routeFlown > f + 5, f0, { timeout: 60000 }).catch(() => {});
  const s12 = await S();
  const labels12 = await p.evaluate(() => document.querySelectorAll('.tag-wp').length);
  check('12 RESUME AUTO restarts navigation on revised route', s12.state === 'AUTONOMOUS_TRANSIT' && s12.routeFlown > f0 + 5 && s12.route.rev === 3, `flown +${(s12.routeFlown - f0).toFixed(1)} m, R${s12.route.rev}`);
  check('15 revised route shared by engine / 3D labels / nav panel', labels12 === s12.waypointCount && (await p.evaluate(() => [...document.querySelectorAll('.row')].find((x) => x.textContent.startsWith('Route')).textContent)).startsWith(`RouteR3`));
  // blocked route (obstacle injected through the dev hook) — must not freeze silently
  await p.evaluate(() => { const e = window.__aegis; const q = { x: 0, y: 0, z: 0 }; const v = e.pos.clone(); e.pathPoint(Math.min(e.planLength, e.s + 14), v); e.world.obstacles.push({ id: 'OB-99', kind: 'PILLAR', x: v.x, z: v.z, rot: 0, shape: 'circle', hw: 0, hd: 0, r: 1.5, h: 40, parts: [] }); });
  check('   injected obstacle → ROUTE_BLOCKED', await waitState('ROUTE_BLOCKED', 15000));
  r = await idle('ROUTE_BLOCKED');
  const bText = await p.locator('[data-testid=blocked-banner]').textContent();
  check(`   ROUTE_BLOCKED ${IDLE / 1000}s: stationary, banner names OB-99, offers RECALCULATE`, r.z.state === 'ROUTE_BLOCKED' && r.a.k === r.z.k && bText.includes('OB-99') && bText.includes('RECALCULATE'));
  await shot('blocked');
  await p.locator('[data-testid=blocked-banner] button', { hasText: 'RECALCULATE' }).click();
  check('   RECALCULATE recovers → AUTONOMOUS_TRANSIT', (await state()) === 'AUTONOMOUS_TRANSIT');
  await p.evaluate(() => { const o = window.__aegis.world.obstacles; o.splice(o.findIndex((x) => x.id === 'OB-99'), 1); }); // remove test-only obstacle
  // 16 reset
  await btn('RESET').click();
  const z0 = await S();
  check('16 RESET → fresh STANDBY (pad, alt 0, clock 0, progress 0, R1, WP 1)', z0.state === 'STANDBY' && z0.pos.z === 0 && z0.missionTime === 0 && z0.progress === 0 && z0.route.rev === 1 && z0.currentWp === 1 && z0.waypointCount === briefWps && z0.holdTime === 0 && z0.blocked === null);
  r = await idle('after RESET');
  check(`   no old timer continues (${IDLE / 1000}s)`, r.z.state === 'STANDBY' && r.a.k === r.z.k && r.z.missionTime === 0);
  // 17 second mission
  await btn('START MISSION').click();
  await waitState('MANUAL_HOLD', 60000);
  await p.locator('[data-testid=hold-banner] button').click();
  let early = false; const t0 = Date.now();
  while (Date.now() - t0 < 240000) { const x = await S(); if ((x.state === 'LANDING' && x.s_ < x.L - 1e-6) || (x.state === 'COMPLETE' && x.pos.z > 0)) early = true; if (x.state === 'COMPLETE') break; await sleep(250); }
  const fin = await S();
  if (fin.state !== 'COMPLETE') console.log('   second mission ended in', fin.state, fin.blocked);
  check('17 second mission completes cleanly (landing after route end, complete at touchdown)', fin.state === 'COMPLETE' && !early && fin.progress === 1);
  r = await idle('COMPLETE');
  check(`   COMPLETE stays ${IDLE / 1000}s; only RESET enabled`, r.z.state === 'COMPLETE' && (await btn('START MISSION').isDisabled()) && (await btn('NEW ENVIRONMENT').isDisabled()) && !(await btn('RESET').isDisabled()));
  await shot('complete');
  // 18 duplicate timers / loops
  const ints = await p.evaluate(() => window.__intervals());
  const lpf = await loopsPerFrame();
  check('18 no duplicate intervals or animation loops', ints === baseIntervals && Math.abs(lpf - 1) < 0.15, `intervals ${baseIntervals}→${ints}, rAF loops/frame ${lpf.toFixed(2)}`);
  // 19 console
  check('19 no console errors or warnings', errs.length === 0, errs.slice(0, 3).join(' | '));
  const failed = results.filter((x) => !x.ok).length;
  console.log(`\nE2E SUMMARY: ${results.length - failed}/${results.length} passed (idle waits ${IDLE / 1000}s)`);
  await b.close();
  process.exit(failed ? 1 : 0);
})().catch((e) => { console.error('FATAL', e); process.exit(2); });
