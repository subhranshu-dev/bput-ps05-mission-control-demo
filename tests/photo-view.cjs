// Photo-view verification (screenshots + overlap/visibility/telemetry/denial checks).
// Requires `npm run dev` on :5180.  Usage: OUT=.tests/shots/photo npm run test:photo   (HOLD_S=60 default)
const { chromium } = require('playwright-core');
const fs = require('fs');
const URL = process.env.URL || 'http://127.0.0.1:5180/';
const OUT = process.env.OUT || '.tests/shots/photo';
const HOLD_S = Number(process.env.HOLD_S || 60);
const TEN = ['FORWARD', 'BACKWARD', 'LEFT', 'RIGHT', 'YAW LEFT', 'YAW RIGHT', 'ASCEND', 'DESCEND', 'RESUME AUTO', 'PAUSE'];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let fails = 0;
const check = (n, ok, d = '') => { if (!ok) fails++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${n}${d ? '  — ' + d : ''}`); };
fs.mkdirSync(OUT, { recursive: true });

// geometry of all overlay elements in screen px
const GEOM = () => {
  const R = (el) => { if (!el) return null; const r = el.getBoundingClientRect(); return r.width && r.height ? { x0: r.left, y0: r.top, x1: r.right, y1: r.bottom } : null; };
  const vp = R(document.querySelector('.viewport'));
  const droneG = document.querySelector('[data-testid=drone-marker]');
  const drone = R(droneG && droneG.querySelector('.quad-halo'));
  const p2 = R(document.querySelector('[data-ov=p2]'));
  const labels = [...document.querySelectorAll('[data-ov^=label-]')].filter((e) => getComputedStyle(e).display !== 'none').map((e) => ({ id: e.dataset.ov, r: R(e.querySelector('rect')) })).filter((x) => x.r);
  const toast = R(document.querySelector('[data-testid=restricted-alert]'));
  const chip = R(document.querySelector('[data-testid=hold-chip]'));
  const hud = R(document.querySelector('.vp-hud'));
  const ring = R(document.querySelector('[data-testid=point1] .pt-ring'));
  let topAtDrone = null;
  if (drone) { const cx = (drone.x0 + drone.x1) / 2, cy = (drone.y0 + drone.y1) / 2; const el = document.elementFromPoint(cx, cy); topAtDrone = el ? (el.closest('[data-testid=drone-marker]') ? 'drone' : el.closest('[data-testid=restricted-alert],[data-testid=hold-chip],.vp-hud,.vp-cams,.alt-tape') ? 'COVERED' : 'other') : null; }
  const de = document.documentElement;
  return { vp, drone, p2, labels, toast, chip, hud, ring, topAtDrone, scroll: { h: de.scrollWidth > innerWidth, v: de.scrollHeight > innerHeight } };
};
const hit = (a, b) => !!a && !!b && a.x0 < b.x1 - 0.5 && b.x0 < a.x1 - 0.5 && a.y0 < b.y1 - 0.5 && b.y0 < a.y1 - 0.5;

(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: true });
  const errs = [];
  for (const [w, h] of [[1366, 768], [1920, 1080]]) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(`${w}: ${m.text()}`); });
    p.on('pageerror', (e) => errs.push(`${w}: PAGEERROR ${e.message}`));
    const click = (t) => p.locator('button', { hasText: new RegExp(`^\\s*${t}`) }).first().click();
    const E = () => p.evaluate(() => { const e = window.__aegis; return { state: e.state, k: JSON.stringify([e.pos.toArray(), e.heading, e.s, e.routeFlown, e.currentWp, e.vel.toArray()]), t: e.missionTime, alt: e.pos.y }; });
    const shot = async (name, postCountdown) => {
      await sleep(350);
      await p.screenshot({ path: `${OUT}/${w}x${h}-${name}.png` });
      const g = await p.evaluate(GEOM);
      check(`${w}×${h} ${name}: no page scroll`, !g.scroll.h && !g.scroll.v);
      check(`${w}×${h} ${name}: bottom bar does not cover the Point 1 ring`, !hit(g.hud, g.ring));
      const lab = g.labels;
      const pair = [];
      for (let i = 0; i < lab.length; i++) for (let j = i + 1; j < lab.length; j++) if (hit(lab[i].r, lab[j].r)) pair.push(`${lab[i].id}×${lab[j].id}`);
      for (const l of lab) if (hit(l.r, g.p2)) pair.push(`${l.id}×P2`);
      check(`${w}×${h} ${name}: no two labels/markers overlap`, pair.length === 0, pair.join(', '));
      if (postCountdown) {
        const inVp = g.drone && g.drone.x0 >= g.vp.x0 && g.drone.x1 <= g.vp.x1 + 1 && g.drone.y0 >= g.vp.y0 && g.drone.y1 <= g.vp.y1;
        const sizePx = g.drone ? g.drone.x1 - g.drone.x0 : 0;
        check(`${w}×${h} ${name}: drone visible (${sizePx.toFixed(0)} px), uncovered`, inVp && g.topAtDrone === 'drone' && sizePx >= 40, `top element at drone centre: ${g.topAtDrone}`);
        const dl = lab.filter((l) => hit(l.r, g.drone)).map((l) => l.id);
        check(`${w}×${h} ${name}: drone overlaps neither P2 nor any label, chip or toast`, !hit(g.drone, g.p2) && dl.length === 0 && !hit(g.drone, g.toast) && !hit(g.drone, g.chip), dl.join(','));
      }
      return g;
    };
    await p.goto(URL); await p.waitForFunction(() => !!window.__aegis);
    await click('INITIALIZE'); await p.waitForFunction(() => window.__aegis.state === 'READY'); await click('CONTINUE'); await click('PROCEED');
    await sleep(900); await shot('1-standby', false);
    const t0 = Date.now();
    await click('START MISSION'); await sleep(1600); await shot('2-countdown', false);
    await p.waitForFunction(() => window.__aegis.state === 'TAKEOFF', null, { timeout: 30000 });
    const tk = Date.now();
    await p.waitForFunction(() => window.__aegis.pos.y >= 3.5, null, { timeout: 30000 }); await shot('3-mid-takeoff', true);
    await p.waitForFunction(() => window.__aegis.state === 'MANUAL_HOLD', null, { timeout: 30000 });
    const climbS = (Date.now() - tk) / 1000;
    check(`${w}×${h} climb 0 → 8 m took ${climbS.toFixed(1)} s (configured 1.5 m/s ≈ 5–6 s; headless rendering may stretch it)`, climbS > 4.5 && climbS < 12);
    await sleep(700); await shot('4-hold', true);
    // identical telemetry everywhere
    const tele = await p.evaluate(() => ({
      tape: document.querySelector('.alt-ptr b').textContent,
      panel: document.querySelector('.pos.alt b').textContent,
      label: [...document.querySelectorAll('[data-ov=label-drone] text')].map((t) => t.textContent).join(' '),
      stem: document.querySelector('[data-ov=label-stem] text').textContent,
    }));
    check(`${w}×${h} one telemetry source: tape / panel / drone label / stem tag all show 8.0`, tele.tape === '8.0' && tele.panel === '8.0' && tele.label.includes('ALT 8.0 m') && tele.stem === '8.0 m', JSON.stringify(tele));
    // clock advancing in hold, aircraft fixed
    const a = await E(); await sleep(3000); const z = await E();
    check(`${w}×${h} mission clock T+ advances in MANUAL HOLD; aircraft fixed`, z.t > a.t + 1.5 && z.k === a.k && z.state === 'MANUAL_HOLD', `T ${a.t.toFixed(1)} → ${z.t.toFixed(1)} s`);
    const chipTxt = await p.locator('[data-testid=hold-chip]').textContent();
    check(`${w}×${h} hold shown as compact chip`, chipTxt.includes('MANUAL HOLD') && chipTxt.includes('AIRCRAFT STATIONARY') && (await p.locator('.vp-banner').count()) === 0);
    // the ten restricted controls
    const before = await E();
    let allDenied = true; const bad = [];
    for (const cmd of TEN) {
      await p.locator(`button[data-cmd="${cmd}"]`).click();
      const txt = await p.locator('[data-testid=restricted-alert]').textContent({ timeout: 1500 }).catch(() => '');
      const now = await E();
      const ok = txt.includes('COMMAND DENIED') && txt.includes('CONTROL AUTHORIZATION FAILURE') && txt.includes('MANUAL FLIGHT COMMANDS ARE RESTRICTED') && txt.includes(cmd) && now.k === before.k && now.state === 'MANUAL_HOLD';
      if (!ok) { allDenied = false; bad.push(cmd); }
      if (cmd === 'FORWARD') await shot('5-hold-denied', true);
    }
    await p.keyboard.press(' '); await p.keyboard.press('w');
    check(`${w}×${h} all 10 restricted buttons (+Space, W) show COMMAND DENIED, zero change`, allDenied && (await E()).k === before.k, bad.join(','));
    const gold = await p.evaluate(() => [...document.querySelectorAll('button')].filter((x) => x.classList.contains('accent')).length);
    check(`${w}×${h} no gold-highlighted RESUME AUTO`, gold === 0);
    const logged = await p.evaluate(() => window.__aegis.log.filter((l) => l.msg.startsWith('COMMAND DENIED')).length);
    check(`${w}×${h} denials recorded in the event log`, logged >= 12, `${logged} entries`);
    if (w === 1920) {
      await sleep(HOLD_S * 1000);
      const after = await E();
      check(`${w}×${h} zero position/heading/altitude change over ${HOLD_S} s after the 10 denials`, after.k === before.k && after.state === 'MANUAL_HOLD' && after.alt === 8);
    }
    await p.close();
  }
  check('no console errors or warnings', errs.length === 0, errs.slice(0, 4).join(' | '));
  console.log(`\nPHOTO-VIEW SUMMARY: ${fails ? fails + ' FAIL' : 'ALL PASS'} · screenshots in ${OUT}`);
  await b.close(); process.exit(fails ? 1 : 0);
})().catch((e) => { console.error('FATAL', e); process.exit(2); });
