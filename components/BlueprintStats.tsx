'use client';

import { useEffect, useRef, useState } from 'react';

const CYCLE_MS = 5200;

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => e[0]?.isIntersecting && (setSeen(true), io.disconnect()));
    io.observe(el);
    const t = setTimeout(() => setSeen(true), 1200);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  return { ref, seen };
}

/** Counter that re-runs its 0→value count-up on each `run`. */
function Counter({ value, run, decimals = 0, prefix = '', suffix = '' }: { value: number; run: number; decimals?: number; prefix?: string; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (run === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setN(value);
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1500);
      setN((1 - Math.pow(1 - p, 3)) * value);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, value]);
  return (
    <span className="tnum">
      {prefix}
      {decimals ? n.toFixed(decimals) : Math.round(n)}
      {suffix}
    </span>
  );
}

interface Bar { label: string; value: number; count: number }

export default function BlueprintStats({
  projects,
  valueBn,
  sectors,
  years,
  bars,
}: {
  projects: number;
  valueBn: number;
  sectors: number;
  years: number;
  bars: Bar[];
}) {
  const { ref, seen } = useInView<HTMLDivElement>();
  const [run, setRun] = useState(0);
  const [open, setOpen] = useState(false);
  const max = Math.max(...bars.map((b) => b.value));

  // Drive a continuous loop once in view (respecting reduced-motion).
  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRun(1);
      setOpen(true);
      return;
    }
    setRun(1);
    const id = setInterval(() => setRun((r) => r + 1), CYCLE_MS);
    return () => clearInterval(id);
  }, [seen]);

  // Each run: collapse the bars then expand, so they re-draw.
  useEffect(() => {
    if (run === 0) return;
    setOpen(false);
    const t = setTimeout(() => setOpen(true), 80);
    return () => clearTimeout(t);
  }, [run]);

  const counters = [
    { node: <Counter value={projects} run={run} suffix="+" />, label: 'Projects executed' },
    { node: <Counter value={valueBn} run={run} decimals={1} prefix="Rs " suffix=" Bn" />, label: 'Contract value' },
    { node: <Counter value={sectors} run={run} />, label: 'Sectors served' },
    { node: <Counter value={years} run={run} suffix="+" />, label: 'Years delivering' },
  ];

  return (
    <div ref={ref}>
      {/* counters */}
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] lg:grid-cols-4">
        {counters.map((c, i) => (
          <div key={i} className="bg-brand-dark/40 px-6 py-7">
            <div className="font-display text-4xl font-bold text-white sm:text-5xl">{c.node}</div>
            <div className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-white/50">{c.label}</div>
          </div>
        ))}
      </div>

      {/* draft chart */}
      <div className="relative mt-6 rounded-2xl border border-white/15 p-6 sm:p-9">
        {[
          'left-3 top-3 border-l border-t',
          'right-3 top-3 border-r border-t',
          'left-3 bottom-3 border-l border-b',
          'right-3 bottom-3 border-r border-b',
        ].map((c) => (
          <span key={c} className={`pointer-events-none absolute h-4 w-4 border-brand-green/60 ${c}`} aria-hidden />
        ))}

        <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/45">
          <span>Fig. 01 — Contract value by sector</span>
          <span className="text-brand-green">Rs Bn</span>
        </div>

        <div className="mt-7 space-y-5">
          {bars.map((b) => (
            <div key={b.label} className="grid grid-cols-[7.5rem_1fr_auto] items-center gap-4">
              <span className="truncate font-mono text-xs uppercase tracking-wide text-white/70">{b.label}</span>
              <span className="relative block h-7 rounded-sm border border-white/10 bg-white/[0.04]">
                <span
                  className="draft-bar absolute inset-y-0 left-0 rounded-sm"
                  style={{ width: open ? `${Math.max(4, (b.value / max) * 100)}%` : '0%' }}
                />
              </span>
              <span className="w-24 text-right font-mono text-xs text-white">
                {b.value.toFixed(2)} <span className="text-white/40">· {b.count}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t border-dashed border-white/20 pt-2">
          <div className="flex justify-between font-mono text-[0.62rem] text-white/35">
            <span>0</span>
            <span>{(max / 2).toFixed(0)}</span>
            <span>{Math.ceil(max)} Rs Bn</span>
          </div>
        </div>
      </div>
    </div>
  );
}
