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
  const briefWps = await p.evaluate(() => Number(/(\d+) waypoints?/.exec(document.body.textContent)[1]));
  r = await idle('BRIEFING'); await keys('Enter', 4);
  check(`5 BRIEFING waits ${IDLE / 1000}s + Enter (needs PROCEED)`, (await state()) === 'BRIEFING');
  await btn('PROCEED').click();
  check('   PROCEED → STANDBY', (await state()) === 'STANDBY');
  await sleep(1500);
  const baseIntervals = await p.evaluate(() => window.__intervals());
  // 6 standby stationary
  r = await idle('STANDBY'); await keys('Enter', 4); await keys(' ', 4);
  check(`6 STANDBY stationary ${IDLE / 1000}s (+Enter/Space)`, (await state()) === 'STANDBY' && r.a.k === r.z.k && r.z.missionTime === 0 && r.z.pos.z === 0 && r.a.scans === r.z.scans);
  // 15 route consistency briefing ↔ engine ↔ photo overlay ↔ nav panel
  const wpDom = await p.evaluate(() => ({ dest: document.querySelectorAll('[data-testid=point2]').length, nav: [...document.querySelectorAll('.row')].find((x) => x.textContent.startsWith('Route')).textContent }));
  check('15 waypoint count identical: briefing / engine / photo overlay / nav', briefWps === r.z.waypointCount && wpDom.dest === r.z.waypointCount && wpDom.nav.includes(`${r.z.waypointCount} WP`), `brief ${briefWps} engine ${r.z.waypointCount} overlay ${wpDom.dest} nav "${wpDom.nav}"`);
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
  // 13 pause during the climb freezes everything; resume continues the climb
  await sleep(800);
  await btn('PAUSE').click();
  r = await idle('PAUSED');
  check(`13 PAUSED ${IDLE / 1000}s mid-climb: position, clock frozen; speeds 0`, r.z.state === 'PAUSED' && r.a.k === r.z.k && r.a.missionTime === r.z.missionTime && r.z.groundSpeed === 0 && r.z.vz === 0 && r.z.sensor === 'FROZEN');
  await btn('RESUME').click();
  check('   RESUME → TAKEOFF (previous state)', (await state()) === 'TAKEOFF');
  check('   takeoff → automatic MANUAL_HOLD', await waitState('MANUAL_HOLD', 30000));
  await sleep(500);
  const chip = await p.locator('[data-testid=hold-chip]').textContent();
  // 10–11 the post-takeoff hold
  r = await idle('MANUAL_HOLD');
  check(`10 MANUAL_HOLD ${IDLE / 1000}s after takeoff: position/alt/progress frozen, velocity 0`, r.z.state === 'MANUAL_HOLD' && r.a.k === r.z.k && r.z.groundSpeed === 0 && r.z.vz === 0 && r.a.progress === r.z.progress && r.z.progress === 0 && r.z.pos.z === 8);
  check('11 hold: mission clock T+ keeps running, sensor shown as held', r.z.missionTime > r.a.missionTime + IDLE / 1000 - 1 && r.z.sensor === 'HOLD');
  check('   hold shown as a compact chip', chip.includes('MANUAL HOLD') && chip.includes('AIRCRAFT STATIONARY'));
  check('   in hold START, RECALCULATE and NEW ENVIRONMENT are disabled; RESET available', (await btn('START MISSION').isDisabled()) && (await btn('RECALCULATE').isDisabled()) && (await btn('NEW ENVIRONMENT').isDisabled()) && !(await btn('RESET').isDisabled()));
  await shot('hold');
  // 9 one telemetry source
  const tele = await p.evaluate(() => ({ tape: document.querySelector('.alt-ptr b').textContent, panel: document.querySelector('.pos.alt b').textContent, label: [...document.querySelectorAll('[data-ov=label-drone] text')].map((t) => t.textContent).join(' '), stem: document.querySelector('[data-ov=label-stem] text').textContent }));
  check('9 tape / panel / drone label / stem tag show identical altitude', tele.tape === '8.0' && tele.panel === '8.0' && tele.label.includes('ALT 8.0 m') && tele.stem === '8.0 m', JSON.stringify(tele));
  // 12 RESUME AUTO, PAUSE and Space are denied while held
  const k0 = (await S()).k;
  const deny = async (sel) => { await p.locator(sel).click(); return (await p.locator('[data-testid=restricted-alert]').textContent({ timeout: 1500 }).catch(() => '')).includes('COMMAND DENIED'); };
  const d1 = await deny('button[data-cmd="RESUME AUTO"]');
  const d2 = await deny('button[data-cmd="PAUSE"]');
  await p.mouse.click(5, 300); await keys(' ', 2);
  await sleep(1500);
  const k1 = await S();
  check('12 RESUME AUTO, PAUSE and Space show COMMAND DENIED; aircraft stays held, unmoved', d1 && d2 && k1.state === 'MANUAL_HOLD' && k1.k === k0);
  // 16 reset
  await btn('RESET').click();
  const z0 = await S();
  check('16 RESET → fresh STANDBY (pad, alt 0, clock 0, progress 0, R1, WP 1)', z0.state === 'STANDBY' && z0.pos.z === 0 && z0.missionTime === 0 && z0.progress === 0 && z0.route.rev === 1 && z0.currentWp === 1 && z0.waypointCount === briefWps && z0.holdTime === 0 && z0.blocked === null);
  r = await idle('after RESET');
  check(`   no old timer continues (${IDLE / 1000}s)`, r.z.state === 'STANDBY' && r.a.k === r.z.k && r.z.missionTime === 0);
  // 17 second mission
  await btn('START MISSION').click();
  const ok17 = await waitState('MANUAL_HOLD', 60000);
  await sleep(500);
  const h2 = await S();
  r = await idle('second hold');
  check('17 second mission: countdown → takeoff → automatic hold again at 8 m, stationary', ok17 && h2.pos.z === 8 && h2.pos.x === 0 && h2.pos.y === 0 && r.a.k === r.z.k && r.z.state === 'MANUAL_HOLD');
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
