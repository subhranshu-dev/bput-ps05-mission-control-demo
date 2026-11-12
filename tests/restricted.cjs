// Browser test for the ten restricted controls (8 manual flight + RESUME AUTO + PAUSE while held). Requires `npm run dev` on :5180.
// Usage: npm run test:restricted    (LONG=30 s by default; set LONG=5 for a quick run)
const { chromium } = require('playwright-core');
const URL = process.env.URL || 'http://127.0.0.1:5180/';
const LONG = Number(process.env.LONG || 30) * 1000;
const OUT = process.env.OUT || '';
const FLIGHT8 = ['FORWARD', 'BACKWARD', 'LEFT', 'RIGHT', 'YAW LEFT', 'YAW RIGHT', 'ASCEND', 'DESCEND'];
const BUTTONS = [...FLIGHT8, 'RESUME AUTO', 'PAUSE'];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const rows = []; let fails = 0;
const check = (name, ok, detail = '') => { if (!ok) fails++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`); return !!ok; };

(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 1366, height: 768 } });
  const errs = [];
  p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.text()); });
  p.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message));
  // frozen-state fingerprint: every authoritative flight value incl. clock and LiDAR
  const F = () => p.evaluate(() => { const e = window.__aegis, s = e.snapshot(); return { state: e.state, pos: e.pos.toArray(), heading: e.heading, hdg: s.heading, alt: s.pos.z, gs: s.groundSpeed, vz: s.vz, yaw: s.yawRate, prog: s.progress, wp: e.currentWp, s: e.s, t: e.missionTime, scans: e.scans, k: JSON.stringify([e.pos.toArray(), e.heading, e.s, e.routeFlown, e.currentWp, e.vel.toArray(), e.yawRate, e.scans, e.pointsMapped]), denied: e.deniedCount, log0: e.log[0].msg }; });
  const state = () => p.evaluate(() => window.__aegis.state);
  const waitState = async (w, ms = 60000) => { const t = Date.now(); while (Date.now() - t < ms) { if ((await state()) === w) return true; await sleep(120); } return false; };
  const click = (t) => p.locator('button', { hasText: new RegExp(`^\\s*${t}`) }).first().click();
  const rxBtn = (cmd) => p.locator(`button.rx-btn[data-cmd="${cmd}"]`);
  const alertText = () => p.locator('[data-testid=restricted-alert]').textContent({ timeout: 500 }).catch(() => null);

  await p.goto(URL); await p.waitForFunction(() => !!window.__aegis);
  await click('INITIALIZE'); await waitState('READY'); await click('CONTINUE'); await click('PROCEED');
  check('manual flight buttons disabled on the pad (STANDBY)', (await Promise.all(FLIGHT8.map((c) => rxBtn(c).isDisabled()))).every(Boolean));
  await click('START MISSION');
  // FORWARD is pressed while actually climbing (TAKEOFF): it must freeze the aircraft in MANUAL_HOLD mid-climb.
  await p.waitForFunction(() => window.__aegis.state === 'TAKEOFF' && window.__aegis.pos.y > 1.5, null, { timeout: 60000 });

  for (const cmd of BUTTONS) {
    const pre = await F();
    await rxBtn(cmd).click();
    const s0 = await F();
    const txt = await alertText();
    const hold0 = await p.evaluate(() => window.__aegis.state);
    const latency = Math.hypot(s0.pos[0] - pre.pos[0], s0.pos[2] - pre.pos[2]);
    await sleep(3300);
    const s3 = await F();
    const alertGone = (await p.locator('[data-testid=restricted-alert]').count()) === 0;
    await sleep(LONG - 3300);
    const s30 = await F();
    const r = {
      error: !!txt && txt.includes('COMMAND DENIED') && txt.includes('CONTROL AUTHORIZATION FAILURE') && txt.includes('MANUAL FLIGHT COMMANDS ARE RESTRICTED') && txt.includes(cmd),
      hold: hold0 === 'MANUAL_HOLD' && s3.state === 'MANUAL_HOLD' && s30.state === 'MANUAL_HOLD',
      pos: s0.pos.join() === s3.pos.join() && s3.pos.join() === s30.pos.join(),
      alt: s0.alt === s3.alt && s3.alt === s30.alt,
      heading: s0.heading === s3.heading && s3.heading === s30.heading,
      vel0: s0.gs === 0 && s0.vz === 0 && s0.yaw === 0 && s30.gs === 0 && s30.vz === 0 && s30.yaw === 0,
      progress: s0.prog === s3.prog && s3.prog === s30.prog,
      waypoint: s0.wp === s3.wp && s3.wp === s30.wp,
      still3s: s0.k === s3.k,
      still30s: s0.k === s30.k,
      afterAlert: alertGone && s3.k === s30.k,
      logged: s0.log0.startsWith(`COMMAND DENIED · ${cmd}`) || s0.log0.includes(cmd),
    };
    const ok = Object.values(r).every(Boolean);
    rows.push([cmd, r, latency]);
    check(`button ${cmd.padEnd(11)} → denied, MANUAL_HOLD, frozen 0/3/${LONG / 1000} s`, ok,
      `${Object.entries(r).filter(([, v]) => !v).map(([k]) => k).join(',') || 'all 12 checks'} · pre-click→hold ${latency.toFixed(2)} m (click latency while climbing)`);
    if (OUT && cmd === 'FORWARD') { await rxBtn('FORWARD').click(); await sleep(450); await p.screenshot({ path: `${OUT}/rx-alert.png` }); await sleep(3200); }
  }

  // rapid repeated clicks (buttons + keys) while held
  await rxBtn('ASCEND').click();
  const r0 = await F();
  for (let i = 0; i < 40; i++) await rxBtn(BUTTONS[i % BUTTONS.length]).click({ delay: 0 });
  for (const k of ['w', 's', 'q', 'e', 'a', 'd', 'r', 'f', 'w', 'w']) await p.keyboard.press(k);
  const alerts = await p.locator('[data-testid=restricted-alert]').count();
  await sleep(3500);
  const r1 = await F();
  await sleep(10000);
  const r2 = await F();
  check('rapid clicks: 40 button clicks + 10 key presses → still held, nothing moved, one alert', r1.state === 'MANUAL_HOLD' && r0.k === r1.k && r1.k === r2.k && alerts === 1 && r2.denied - r0.denied === 50,
    `denials +${r2.denied - r0.denied}, alerts on screen ${alerts}`);
  check('alert auto-dismissed, hold persists, no auto-resume', (await p.locator('[data-testid=restricted-alert]').count()) === 0 && r2.state === 'MANUAL_HOLD');
  check('no console errors', errs.length === 0, errs.slice(0, 3).join(' | '));
  console.log(`\nRESTRICTED SUMMARY: ${fails === 0 ? 'ALL PASS' : fails + ' FAIL'} (long wait ${LONG / 1000}s)`);
  await b.close();
  process.exit(fails ? 1 : 0);
})().catch((e) => { console.error('FATAL', e); process.exit(2); });
