'use client';

import { useEffect, useRef, useState } from 'react';

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => {
      if (e[0]?.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    });
    io.observe(el);
    // Fallback: ensure the value/bar resolve even if the observer is slow.
    const t = setTimeout(() => setSeen(true), 1200);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  return { ref, seen };
}

function AnimatedValue({ valueLKR }: { valueLKR: number }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  const bn = valueLKR >= 1e9;
  const target = bn ? valueLKR / 1e9 : valueLKR / 1e6;
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target);
      return;
    }
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1500);
      setN((1 - Math.pow(1 - p, 3)) * target);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [seen, target]);
  const shown = bn ? n.toFixed(2) : Math.round(n).toLocaleString();
  return (
    <div ref={ref}>
      <div className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Contract value</div>
      <div className="tnum mt-1 font-display text-5xl font-bold leading-none text-brand-dark sm:text-6xl">
        <span className="text-brand-green">Rs</span> {shown}
        <span className="ml-1 text-2xl text-brand-muted">{bn ? 'Bn' : 'M'}</span>
      </div>
    </div>
  );
}

function ValueBar({ valueLKR, sectorMax, sectorShort }: { valueLKR: number; sectorMax: number; sectorShort: string }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  const pct = Math.max(4, Math.min(100, Math.round((valueLKR / sectorMax) * 100)));
  return (
    <div ref={ref}>
      <div className="flex items-end justify-between text-xs font-semibold uppercase tracking-wider text-brand-muted">
        <span>Scale vs our largest {sectorShort.toLowerCase()} project</span>
        <span className="text-brand-green">{pct}%</span>
      </div>
      <div className="mt-2 h-3 overflow-hidden rounded-full bg-brand-stone">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-green to-brand-greenDark transition-[width] duration-1000 ease-out"
          style={{ width: seen ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function ProjectStats({
  valueLKR,
  sectorMax,
  sectorShort,
  year,
  status,
  capacity,
}: {
  valueLKR: number | null;
  sectorMax: number;
  sectorShort: string;
  year: string;
  status: string;
  capacity: { value: string; label: string }[];
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      {/* value + meta */}
      <div className="lg:col-span-5">
        {valueLKR ? (
          <>
            <AnimatedValue valueLKR={valueLKR} />
            <div className="mt-8">
              <ValueBar valueLKR={valueLKR} sectorMax={sectorMax} sectorShort={sectorShort} />
            </div>
          </>
        ) : (
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Contract value</div>
            <div className="mt-1 font-display text-4xl font-bold text-brand-dark">On record</div>
          </div>
        )}
        <div className="mt-8 flex gap-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Completed</div>
            <div className="mt-1 text-2xl font-bold text-brand-dark">{year}</div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Status</div>
            <div className="mt-1 text-2xl font-bold text-brand-green">{status}</div>
          </div>
        </div>
      </div>

      {/* capacity chips */}
      {capacity.length > 0 && (
        <div className="lg:col-span-7">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Scope & capacity</div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {capacity.map((c, i) => (
              <div key={i} className="rounded-2xl border border-brand-stone bg-white p-6">
                <div className="font-display text-2xl font-bold text-brand-dark">{c.value}</div>
                {c.label && <div className="mt-1 text-sm leading-snug text-brand-muted">{c.label}</div>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
