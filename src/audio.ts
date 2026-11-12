// Tiny procedural sound effects (WebAudio, no asset files).
class Sfx {
  ctx: AudioContext | null = null;
  muted = false;
  private get ac() {
    if (!this.ctx) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AC) return null;
      this.ctx = new AC();
    }
    if (this.ctx.state === 'suspended') void this.ctx.resume();
    return this.ctx;
  }
  tone(freq: number, dur = 0.12, type: OscillatorType = 'sine', vol = 0.06, delay = 0) {
    if (this.muted) return;
    try {
      const ac = this.ac;
      if (!ac) return;
      const t0 = ac.currentTime + delay;
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.type = type;
      o.frequency.setValueAtTime(freq, t0);
      g.gain.setValueAtTime(0, t0);
      g.gain.linearRampToValueAtTime(vol, t0 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.connect(g).connect(ac.destination);
      o.start(t0);
      o.stop(t0 + dur + 0.02);
    } catch { /* audio is optional */ }
  }
  click() { this.tone(1400, 0.05, 'sine', 0.03); }
  tick() { this.tone(880, 0.15, 'sine', 0.07); }
  go() { this.tone(660, 0.2, 'triangle', 0.07); this.tone(990, 0.35, 'triangle', 0.07, 0.12); }
  ok() { this.tone(1046, 0.12, 'sine', 0.04); this.tone(1318, 0.18, 'sine', 0.04, 0.08); }
  warn() { this.tone(520, 0.18, 'square', 0.025); }
  deny() { this.tone(220, 0.22, 'sawtooth', 0.05); this.tone(180, 0.3, 'sawtooth', 0.05, 0.2); }
}
export const sfx = new Sfx();
