import React from 'react';
import { sfx } from '../audio';

interface BtnProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  onPress: () => void;
  variant?: 'primary' | 'default' | 'ghost' | 'danger' | 'locked' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  /** Ignore keyboard-synthesised clicks (Enter/Space on a focused button). */
  pointerOnly?: boolean;
  silent?: boolean;
}

/**
 * Button that (1) drops focus after a pointer click so a later Enter/Space cannot re-fire it,
 * and (2) can optionally refuse keyboard activation for mission-critical actions.
 */
export function Btn({ onPress, variant = 'default', size = 'md', pointerOnly, silent, className = '', children, ...rest }: BtnProps) {
  return (
    <button
      type="button"
      {...rest}
      className={`btn ${variant} ${size} ${className}`}
      onClick={(e) => {
        const fromPointer = e.detail > 0;
        if (fromPointer) e.currentTarget.blur();
        if (pointerOnly && !fromPointer) return;
        if (!silent) sfx.click();
        onPress();
      }}
    >
      {children}
    </button>
  );
}

export function Panel({ title, icon, aside, children, className = '' }: { title: string; icon: React.ReactNode; aside?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <section className={`panel ${className}`}>
      <header className="panel-h">
        <span className="panel-ic">{icon}</span>
        <h3 className="panel-t">{title}</h3>
        {aside && <span className="panel-aside">{aside}</span>}
      </header>
      <div className="panel-b">{children}</div>
    </section>
  );
}

export function Metric({ label, value, unit, tone, big }: { label: string; value: string; unit?: string; tone?: 'cyan' | 'green' | 'amber' | 'red'; big?: boolean }) {
  return (
    <div className={`metric ${big ? 'big' : ''}`}>
      <div className="metric-l">{label}</div>
      <div className={`metric-v ${tone ?? ''}`}>{value}{unit && <span className="metric-u">{unit}</span>}</div>
    </div>
  );
}

export function Row({ k, v, tone }: { k: string; v: React.ReactNode; tone?: string }) {
  return <div className="row"><span className="row-k">{k}</span><span className={`row-v ${tone ?? ''}`}>{v}</span></div>;
}

export function Logo({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <path d="M16 3 L29 27 L16 21 L3 27 Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 10 L21.5 22 L16 19.5 L10.5 22 Z" fill="currentColor" opacity=".35" />
    </svg>
  );
}

export const fmtClock = (s: number) => {
  const m = Math.floor(s / 60), r = Math.floor(s % 60);
  return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
};
export const f1 = (n: number) => (Number.isFinite(n) ? n.toFixed(1) : '—');
