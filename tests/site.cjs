// Browser test for the real-site photo view. Requires `npm run dev` on :5180.  Usage: npm run test:site
const { chromium } = require('playwright-core');
const URL = process.env.URL || 'http://127.0.0.1:5180/';
let fails = 0;
const check = (n, ok, d = '') => { if (!ok) fails++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${n}${d ? '  — ' + d : ''}`); };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: true });
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  const errs = [];
  p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.text()); });
  p.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message));
  await p.goto(URL); await p.waitForFunction(() => !!window.__aegis);
  const click = (t) => p.locator('button', { hasText: new RegExp(`^\\s*${t}`) }).first().click();
  await click('INITIALIZE'); await p.waitForFunction(() => window.__aegis.state === 'READY'); await click('CONTINUE'); await click('PROCEED');
  await sleep(1200);

  // photo: the chosen landscape original, served at native resolution
  const photo = await p.evaluate(async () => { const href = document.querySelector('.photo-img').getAttribute('href'); const img = new Image(); img.src = href; await img.decode(); return { href, w: img.naturalWidth, h: img.naturalHeight }; });
  check('landscape site photo served at native resolution (1280×684)', photo.w === 1280 && photo.h === 684 && photo.href.endsWith('/site/test-site-landscape.jpg'), JSON.stringify(photo));
  const synth = await p.evaluate(() => ({ canvases: document.querySelectorAll('.viewport canvas').length, obLabels: document.querySelectorAll('.tag-ob, .labels-layer').length, obstacles: window.__aegis.world.obstacles.length, cloud: window.__aegis.world.cloud.count }));
  check('no artificial 3D scene, generated obstacles or synthetic point cloud', synth.canvases === 0 && synth.obLabels === 0 && synth.obstacles === 0 && synth.cloud === 0, JSON.stringify(synth));
  const labels = await p.evaluate(() => [...document.querySelectorAll('[data-ov=label-p1] text, [data-ov=label-p2] text')].map((t) => t.textContent).join(' | '));
  check('Point 1 labelled START, Point 2 labelled DESTINATION', labels.includes('POINT 1 — START') && labels.includes('POINT 2 — DESTINATION'), labels);

  // alignment: overlay anchors sit on the measured pillar pixels of the displayed photo, at any size
  const measure = () => p.evaluate(() => {
    const img = document.querySelector('.photo-img').getBoundingClientRect();
    const s = img.width / 1280;
    const toScreen = (x, y) => ({ x: img.left + x * s, y: img.top + y * s });
    const center = (el) => { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; };
    const d = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
    const route = document.querySelector('[data-testid=route] .route-line');
    const pt = (x, y) => new DOMPoint(x, y).matrixTransform(route.getScreenCTM());
    return {
      aspect: img.width / img.height,
      p2: d(center(document.querySelector('[data-testid=point2] .pt-ring')), toScreen(259, 305)),
      p1: d(center(document.querySelector('[data-testid=point1] .pt-ring')), toScreen(1249, 636)),
      shadow: d(center(document.querySelector('[data-testid=drone-shadow]')), toScreen(1249, 640)),
      routeEnd: d(pt(+route.getAttribute('x2'), +route.getAttribute('y2')), toScreen(259, 305)),
      routeStart: d(pt(+route.getAttribute('x1'), +route.getAttribute('y1')), toScreen(1249, 636)),
    };
  });
  for (const [w, h] of [[1920, 1080], [1366, 768], [1536, 864], [1280, 720], [1093, 614]]) {
    await p.setViewportSize({ width: w, height: h }); await sleep(900);
    for (const view of ['Full', 'Drone']) {
      await p.locator('.seg', { hasText: view }).click(); await sleep(700);
      const r = await measure();
      const worst = Math.max(r.p2, r.p1, r.shadow, r.routeEnd, r.routeStart);
      check(`${w}×${h} ${view}: undistorted; P1 ring, P2 ring, drone shadow, route ends within 1.5 px of measured pillar pixels`,
        Math.abs(r.aspect - 1280 / 684) < 0.003 && worst < 1.5, `aspect ${r.aspect.toFixed(4)} worst ${worst.toFixed(2)} px`);
    }
  }
  check('no console errors', errs.length === 0, errs.slice(0, 3).join(' | '));
  console.log(`\nSITE SUMMARY: ${fails ? fails + ' FAIL' : 'ALL PASS'}`);
  await b.close(); process.exit(fails ? 1 : 0);
})().catch((e) => { console.error('FATAL', e); process.exit(2); });
