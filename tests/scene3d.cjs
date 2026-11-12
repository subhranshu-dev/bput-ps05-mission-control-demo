// 2.5D WebGL scene verification: night + day, 1366×768 + 1920×1080, real GPU (ANGLE GL) by default.
// Requires `npm run dev` on :5180.  Usage: npm run test:scene   (HOLD_S=60, OUT=.tests/shots/scene)
const { chromium } = require('playwright-core');
const fs = require('fs');
const URL = process.env.URL || 'http://127.0.0.1:5180/';
const OUT = process.env.OUT || '.tests/shots/scene';
const HOLD_S = Number(process.env.HOLD_S || 60);
const GL = process.env.GL === 'swiftshader' ? ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] : ['--use-angle=gl'];
const TEN = ['FORWARD', 'BACKWARD', 'LEFT', 'RIGHT', 'YAW LEFT', 'YAW RIGHT', 'ASCEND', 'DESCEND', 'RESUME AUTO', 'PAUSE'];
const PRESETS = ['WIDE', 'FOLLOW', 'ORBIT', 'TACTICAL', 'RESET'];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let fails = 0; const fpsReport = [];
const check = (n, ok, d = '') => { if (!ok) fails++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${n}${d ? '  — ' + d : ''}`); return ok; };
const hit = (a, b) => !!a && !!b && a.x0 < b.x1 - 0.5 && b.x0 < a.x1 - 0.5 && a.y0 < b.y1 - 0.5 && b.y0 < a.y1 - 0.5;
fs.mkdirSync(OUT, { recursive: true });

// all geometry in viewport (page) coordinates
const GEOM = () => {
  const S = window.__aegisScene, host = document.querySelector('.scene3d').getBoundingClientRect();
  const off = (b) => b && { x0: b.x0 + host.left, y0: b.y0 + host.top, x1: b.x1 + host.left, y1: b.y1 + host.top };
  const R = (sel) => { const e = document.querySelector(sel); if (!e) return null; const r = e.getBoundingClientRect(); return r.width ? { x0: r.left, y0: r.top, x1: r.right, y1: r.bottom } : null; };
  // labels: the REAL on-screen rectangles of every visible label box
  const labels = Object.fromEntries([...document.querySelectorAll('.l3')].filter((e) => e.offsetParent && getComputedStyle(e.parentElement).display !== 'none').map((e) => { const r = e.getBoundingClientRect(); return [e.dataset.ov.replace('label-', ''), { x0: r.left, y0: r.top, x1: r.right, y1: r.bottom }]; }).filter(([, r]) => r.x1 - r.x0 > 2));
  const de = document.documentElement;
  return {
    host: { x0: host.left, y0: host.top, x1: host.right, y1: host.bottom }, drone: off(S.droneBox), p2: off(S.p2Box), labels,
    toast: R('[data-testid=restricted-alert]'), chip: R('[data-testid=hold-chip]'), tag: R('.vp-tag'), cams: R('.vp-cams'), hud: R('.vp-hud'), tape: R('.alt-tape'),
    scroll: de.scrollWidth > innerWidth || de.scrollHeight > innerHeight, calib: S.calib, fps: S.fps, quality: S.quality, auto: S.qualityAuto, mode: S.mode,
  };
};

(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: true, args: [...GL, '--ignore-gpu-blocklist'] });
  const glName = await (async () => { const p = await b.newPage(); const r = await p.evaluate(() => { const g = document.createElement('canvas').getContext('webgl2'); const e = g && g.getExtension('WEBGL_debug_renderer_info'); return e ? g.getParameter(e.UNMASKED_RENDERER_WEBGL) : 'n/a'; }); await p.close(); return r; })();
  console.log('WebGL renderer:', glName);
  const errs = [];
  for (const mode of ['night', 'day']) for (const [w, h] of [[1366, 768], [1920, 1080]]) {
    const tag = `${mode} ${w}×${h}`;
    const ctx = await b.newContext({ viewport: { width: w, height: h } });
    await ctx.addInitScript((m) => { try { localStorage.setItem('aegis.mode', m); localStorage.setItem('aegis.quality', 'auto'); } catch {} }, mode);
    const p = await ctx.newPage();
    p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(`${tag}: ${m.text()}`); });
    p.on('pageerror', (e) => errs.push(`${tag}: PAGEERROR ${e.message}`));
    const click = (t) => p.locator('button', { hasText: new RegExp(`^\\s*${t}`) }).first().click();
    const E = () => p.evaluate(() => { const e = window.__aegis; return { state: e.state, k: JSON.stringify([e.pos.toArray(), e.heading, e.s, e.routeFlown, e.currentWp, e.vel.toArray()]), t: e.missionTime, alt: e.pos.y }; });
    const park = () => p.mouse.move(40, h - 40); // keep the pointer off the scene (no hover callout)
    let n = 0;
    const shot = async (name, post) => {
      await park(); await sleep(400);
      await p.screenshot({ path: `${OUT}/${mode}-${w}x${h}-${String(++n).padStart(2, '0')}-${name}.png` });
      const g = await p.evaluate(GEOM);
      const fails0 = fails;
      check(`${tag} ${name}: no page scroll`, !g.scroll);
      check(`${tag} ${name}: mode ${mode}`, g.mode === mode);
      const L = Object.entries(g.labels), pair = [];
      for (let i = 0; i < L.length; i++) for (let j = i + 1; j < L.length; j++) if (hit(L[i][1], L[j][1])) pair.push(`${L[i][0]}×${L[j][0]}`);
      check(`${tag} ${name}: labels do not overlap each other`, pair.length === 0, pair.join(','));
      if (post) {
        const inside = g.drone && g.drone.x0 >= g.host.x0 && g.drone.x1 <= g.host.x1 && g.drone.y0 >= g.host.y0 && g.drone.y1 <= g.host.y1;
        const covered = ['toast', 'chip', 'tag', 'cams', 'hud', 'tape'].filter((k) => hit(g.drone, g[k]));
        const size = g.drone ? Math.max(g.drone.x1 - g.drone.x0, g.drone.y1 - g.drone.y0) : 0;
        check(`${tag} ${name}: drone visible (${size.toFixed(0)} px) and uncovered`, inside && covered.length === 0 && size >= 14, covered.join(','));
        const onLabels = L.filter(([k, v]) => k !== 'callout' && hit(v, g.drone)).map(([k]) => k);
        check(`${tag} ${name}: drone box overlaps neither P2 nor its label (nor any label)`, !hit(g.drone, g.p2) && onLabels.length === 0, onLabels.join(','));
      }
      return fails === fails0;
    };
    await p.goto(URL); await p.waitForFunction(() => !!window.__aegis);
    await click('INITIALIZE'); await p.waitForFunction(() => window.__aegis.state === 'READY'); await click('CONTINUE'); await click('PROCEED');
    await p.waitForFunction(() => window.__aegisScene && window.__aegisScene.ready, null, { timeout: 30000 });
    await sleep(2500);
    const g0 = await p.evaluate(GEOM);
    check(`${tag} calibration: P1/P2 anchors within 6 px at the photo pose`, g0.calib.p1 < 6 && g0.calib.p2 < 6, `P1 ${g0.calib.p1.toFixed(2)} px · P2 ${g0.calib.p2.toFixed(2)} px`);
    await shot('standby', false);
    await click('START MISSION'); await sleep(1800); await shot('countdown', false);
    await p.waitForFunction(() => window.__aegis.state === 'TAKEOFF', null, { timeout: 30000 });
    await p.waitForFunction(() => window.__aegis.pos.y >= 6, null, { timeout: 30000 }); await shot('mid-takeoff', true);
    await p.waitForFunction(() => window.__aegis.state === 'MANUAL_HOLD', null, { timeout: 30000 }); await sleep(2500); await shot('hold', true);
    const tele = await p.evaluate(() => ({ tape: document.querySelector('.alt-ptr b').textContent, panel: document.querySelector('.pos.alt b').textContent, label: document.querySelector('[data-ov=label-drone]').textContent, stem: document.querySelector('[data-ov=label-alt]').textContent }));
    check(`${tag} ALT 12.0 at hold: tape / panel / drone label / stem label identical`, tele.tape === '12.0' && tele.panel === '12.0' && tele.label.includes('ALT 12.0 m') && tele.stem === '12.0 m', JSON.stringify(tele));
    await p.locator('button[data-cmd="FORWARD"]').click(); await sleep(350); await shot('hold-denied', true);
    await sleep(3200);
    for (const pr of PRESETS) { await p.locator(`.vp-cams button[data-preset="${pr}"]`).click(); await sleep(2800); await shot(`preset-${pr.toLowerCase()}`, true); }
    // FPS: let the auto-quality settle, then read it
    await sleep(6000);
    const f = await p.evaluate(GEOM);
    const fh = await p.evaluate(() => window.__aegisScene.fpsHigh);
    fpsReport.push(`${tag}: ${f.fps} fps · quality ${f.quality}${f.auto ? ' (auto)' : ''} · last measured on HIGH ${fh} fps`);
    check(`${tag} performance: ≥ 45 fps on HIGH, or automatic fallback to LOW`, (f.quality === 'high' && f.fps >= 45) || (f.auto && f.quality === 'low'), `${f.fps} fps, ${f.quality}`);
    if (mode === 'night' && w === 1920) {
      // 60 s of hold while pressing all ten restricted buttons: zero position change, clock running
      const a = await E();
      const t0 = Date.now(); let presses = 0, allDenied = true;
      while (Date.now() - t0 < HOLD_S * 1000) {
        const cmd = TEN[presses % TEN.length];
        await p.locator(`button[data-cmd="${cmd}"]`).click(); presses++;
        const txt = await p.locator('[data-testid=restricted-alert]').textContent({ timeout: 1500 }).catch(() => '');
        if (!txt.includes('COMMAND DENIED') || !txt.includes(cmd)) allDenied = false;
        await sleep(1500);
      }
      const z = await E();
      check(`${tag} ${HOLD_S} s hold with ${presses} restricted presses (all 10 buttons): zero position change`, z.k === a.k && z.state === 'MANUAL_HOLD' && z.alt === 12 && allDenied);
      check(`${tag} mission clock advances during hold`, z.t > a.t + HOLD_S - 3, `T ${a.t.toFixed(1)} → ${z.t.toFixed(1)} s`);
      // day/night toggle: 1 s crossfade, remembered
      await p.locator('[data-testid=mode-toggle]').click(); await sleep(1600);
      const m2 = await p.evaluate(() => ({ mode: window.__aegisScene.mode, stored: localStorage.getItem('aegis.mode') }));
      check(`${tag} day/night toggle crossfades and is remembered`, m2.mode === 'day' && m2.stored === 'day', JSON.stringify(m2));
    }
    await ctx.close();
  }
  check('no console errors or warnings', errs.length === 0, errs.slice(0, 4).join(' | '));
  console.log('\nFPS:\n  ' + fpsReport.join('\n  '));
  console.log(`\nSCENE3D SUMMARY: ${fails ? fails + ' FAIL' : 'ALL PASS'} · screenshots in ${OUT}`);
  await b.close(); process.exit(fails ? 1 : 0);
})().catch((e) => { console.error('FATAL', e); process.exit(2); });
