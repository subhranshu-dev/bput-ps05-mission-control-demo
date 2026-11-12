// Browser test: successful takeoff → automatic position hold → no autonomous movement.
// Requires `npm run dev` on :5180. Usage: npm run test:takeoff   (HOLD_S=60 default)
const { chromium } = require('playwright-core');
const URL = process.env.URL || 'http://127.0.0.1:5180/';
const HOLD_S = Number(process.env.HOLD_S || 60);
const OUT = process.env.OUT || '';
const BUTTONS = ['FORWARD', 'BACKWARD', 'LEFT', 'RIGHT', 'YAW LEFT', 'YAW RIGHT', 'ASCEND', 'DESCEND'];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let fails = 0;
const check = (n, ok, d = '') => { if (!ok) fails++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${n}${d ? '  — ' + d : ''}`); };

(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1366, height: 768 } });
  const errs = [];
  p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.text()); });
  p.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message));
  const F = () => p.evaluate(() => { const e = window.__aegis, s = e.snapshot(); return { state: e.state, s, k: JSON.stringify([e.pos.toArray(), e.heading, e.s, e.routeFlown, e.currentWp, e.missionTime, e.vel.toArray(), e.yawRate, e.scans, e.pointsMapped, e.pointsInRange]), y: e.pos.y, x: e.pos.x, z: e.pos.z, h: e.heading, cruise: e.route.cruiseAlt, log: e.log.map((l) => l.msg) }; });
  const click = (t) => p.locator('button', { hasText: new RegExp(`^\\s*${t}`) }).first().click();
  // record every state the engine passes through (sampled each animation frame in the page)
  await p.addInitScript(() => { window.__states = []; const tick = () => { const e = window.__aegis; if (e && window.__states[window.__states.length - 1] !== e.state) window.__states.push(e.state); requestAnimationFrame(tick); }; requestAnimationFrame(tick); });

  await p.goto(URL); await p.waitForFunction(() => !!window.__aegis);
  await click('INITIALIZE'); await p.waitForFunction(() => window.__aegis.state === 'READY'); await click('CONTINUE'); await click('PROCEED');
  const pad = await F();
  await click('START MISSION');
  check('1 mission starts (COUNTDOWN)', (await F()).state === 'COUNTDOWN');
  await p.waitForFunction(() => window.__aegis.state === 'TAKEOFF', null, { timeout: 30000 });
  check('2 countdown completes → TAKEOFF', true);
  await sleep(800);
  const climb = await F();
  check('3 drone takes off normally (climbing, no horizontal motion)', climb.s.vz > 0 && climb.s.groundSpeed === 0 && climb.y > 0, `alt ${climb.y.toFixed(2)} m, vz ${climb.s.vz.toFixed(2)}`);
  await p.waitForFunction(() => window.__aegis.state !== 'TAKEOFF', null, { timeout: 60000 });
  const h0 = await F();
  check('4 reaches target altitude', h0.y === h0.cruise, `${h0.y} m (target ${h0.cruise} m)`);
  const states = await p.evaluate(() => window.__states);
  check('5 automatically enters MANUAL_HOLD (exactly once, no transit)', h0.state === 'MANUAL_HOLD' && h0.log.filter((m) => m.startsWith('Takeoff complete')).length === 1 && !states.includes('AUTONOMOUS_TRANSIT'), states.join('→'));
  check('   hold position = pad X/Y, heading preserved, velocities 0', h0.x === pad.x && h0.z === pad.z && h0.h === pad.h && h0.s.groundSpeed === 0 && h0.s.vz === 0 && h0.s.yawRate === 0);
  if (OUT) { await sleep(600); await p.screenshot({ path: `${OUT}/takeoff-hold.png` }); }
  // 6 stationary for HOLD_S seconds (sampled every second)
  let still = true, neverTransit = true;
  for (let i = 0; i < HOLD_S; i++) { await sleep(1000); const f = await F(); if (f.k !== h0.k) still = false; if (f.state !== 'MANUAL_HOLD') neverTransit = false; }
  check(`6 stationary for ${HOLD_S} s (position, alt, heading, clock, LiDAR identical every second)`, still && neverTransit);
  // 7–8 restricted buttons
  for (const cmd of BUTTONS) {
    const before = await F();
    await p.locator(`button.rx-btn[data-cmd="${cmd}"]`).click();
    const txt = await p.locator('[data-testid=restricted-alert]').textContent({ timeout: 1000 }).catch(() => '');
    await sleep(3300);
    const after = await F();
    const gone = (await p.locator('[data-testid=restricted-alert]').count()) === 0;
    check(`7–8 ${cmd.padEnd(9)} → COMMAND DENIED, still MANUAL_HOLD, no movement`, txt.includes('COMMAND DENIED') && txt.includes('CONTROL AUTHORIZATION FAILURE') && txt.includes('MANUAL FLIGHT COMMANDS ARE RESTRICTED') && after.state === 'MANUAL_HOLD' && after.k === before.k && gone);
  }
  // 9 telemetry shown on screen matches a stationary drone
  const dom = await p.evaluate(() => ({ pos: [...document.querySelectorAll('.pos b')].map((x) => x.textContent), gs: document.querySelectorAll('.metric-v')[0].textContent, vz: document.querySelectorAll('.metric-v')[1].textContent, prog: document.querySelector('.hud-pct').textContent, chip: document.querySelector('[data-testid=state-chip]').textContent, clock: document.querySelector('.hud-clock').textContent }));
  const f9 = await F();
  check('9 telemetry consistent with stationary drone', dom.pos[0] === pad.s.pos.x.toFixed(1) && dom.pos[1] === pad.s.pos.y.toFixed(1) && dom.pos[2] === h0.cruise.toFixed(1) && dom.gs.startsWith('0.0') && dom.vz.startsWith('0.0') && dom.prog === '0%' && dom.chip.includes('MANUAL HOLD') && f9.k === h0.k, JSON.stringify(dom));
  // 10 still no transit
  const states2 = await p.evaluate(() => window.__states);
  check('10 no automatic autonomous transit at any point', !states2.includes('AUTONOMOUS_TRANSIT') && f9.state === 'MANUAL_HOLD', states2.join('→'));
  check('   no console errors', errs.length === 0, errs.slice(0, 3).join(' | '));
  console.log(`\nTAKEOFF-HOLD SUMMARY: ${fails ? fails + ' FAIL' : 'ALL PASS'} (hold ${HOLD_S}s)`);
  await b.close(); process.exit(fails ? 1 : 0);
})().catch((e) => { console.error('FATAL', e); process.exit(2); });
