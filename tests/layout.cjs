// Layout regression: every screen/state at 1366×768 and 1920×1080 — no page overflow, no clipped
// text, no element outside the window, no overflowing side columns, no overlapping buttons.
// Requires `npm run dev` on :5180.  Usage: npm run test:layout   (OUT=dir saves screenshots)
const { chromium } = require('playwright-core');
const URL = process.env.URL || 'http://127.0.0.1:5180/';
const OUT = process.env.OUT || '';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: true });
  let fails = 0; const errs = [];
  // 1920×1080 at 100/125/150 % → 1920×1080, 1536×864, 1280×720 CSS px; 1366×768 at 100/125 % → 1366×768, 1093×614
  for (const [w, h] of [[1280, 720], [1366, 768], [1536, 864], [1920, 1080], [1093, 614]]) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.text()); });
    p.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message));
    const state = () => p.evaluate(() => window.__aegis.state);
    const wait = async (s, ms = 90000) => { const t = Date.now(); while (Date.now() - t < ms) { if ((await state()) === s) return true; await sleep(150); } return false; };
    const lay = async (tag) => {
      await sleep(700);
      const r = await p.evaluate(() => {
        const de = document.documentElement;
        const vis = (el) => el.offsetParent !== null || getComputedStyle(el).position === 'fixed';
        const clipped = [...document.querySelectorAll('button, .state-chip, .panel-t, .metric-v, .row-v, .hud-state, .card-title, .welcome-sub, .check-n, .brief-row dd, .dock-h, .tl-n')]
          .filter((el) => vis(el) && el.scrollWidth > el.clientWidth + 1).map((el) => el.textContent.trim());
        const out = [...document.querySelectorAll('button, .panel, .card')].filter((el) => { const q = el.getBoundingClientRect(); return vis(el) && (q.right > innerWidth + .5 || q.bottom > innerHeight + .5 || q.left < -.5); }).map((el) => el.textContent.trim().slice(0, 20));
        const cols = [...document.querySelectorAll('.col')].map((c) => c.scrollHeight - c.clientHeight);
        const bs = [...document.querySelectorAll('button')].filter(vis).map((e) => [e.textContent.trim(), e.getBoundingClientRect()]);
        const ov = [];
        for (let i = 0; i < bs.length; i++) for (let j = i + 1; j < bs.length; j++) { const a = bs[i][1], c = bs[j][1]; if (a.left < c.right - 1 && c.left < a.right - 1 && a.top < c.bottom - 1 && c.top < a.bottom - 1) ov.push(bs[i][0] + '×' + bs[j][0]); }
        return { h: de.scrollWidth > innerWidth, v: de.scrollHeight > innerHeight, clipped, out, cols, ov };
      });
      const ok = !r.h && !r.v && !r.clipped.length && !r.out.length && r.cols.every((x) => x <= 0) && !r.ov.length;
      if (!ok) fails++;
      console.log(`${ok ? 'PASS' : 'FAIL'} ${w}x${h} ${tag}` + (ok ? '' : ' ' + JSON.stringify(r)));
      if (OUT) await p.screenshot({ path: `${OUT}/L-${w}-${tag}.png` });
    };
    const click = (t) => p.locator('button', { hasText: new RegExp(`^\\s*${t}`) }).first().click();
    await p.goto(URL); await p.waitForFunction(() => !!window.__aegis);
    await sleep(800); await lay('welcome');
    await click('INITIALIZE'); await sleep(1500); await lay('init');
    await wait('READY'); await lay('ready');
    await click('CONTINUE'); await lay('brief');
    await click('PROCEED'); await sleep(1200); await lay('standby');
    await click('START MISSION'); await sleep(2200); await lay('countdown');
    await click('PAUSE'); await lay('paused'); await click('RESUME');
    await wait('TAKEOFF'); await sleep(1200); await lay('takeoff');
    await wait('MANUAL_HOLD'); await sleep(1500); await lay('hold-after-takeoff');
    await p.locator('button.rx-btn[data-cmd="ASCEND"]').click(); await sleep(900); await lay('command-denied'); await sleep(2600);
    await click('HARDWARE'); await lay('link-denied'); await p.keyboard.press('Escape');
    await p.close();
  }
  console.log('console errors:', errs.length ? errs : 'none');
  console.log(fails ? `LAYOUT FAILS: ${fails}` : 'ALL LAYOUT CHECKS PASS');
  await b.close();
  process.exit(fails ? 1 : 0);
})().catch((e) => { console.error('FATAL', e); process.exit(2); });
