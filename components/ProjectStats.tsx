'use client';

import { useEffect, useRef, useState } from 'react';

type Align = 'center' | 'start';

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
    const t = setTimeout(() => setSeen(true), 1200);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  return { ref, seen };
}

function AnimatedValue({ valueLKR, align }: { valueLKR: number; align: Align }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  const bn = valueLKR >= 1e9;
  const target = bn ? valueLKR / 1e9 : valueLKR / 1e6;
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setN(target);
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
    <div ref={ref} className={align === 'start' ? 'text-left' : 'text-center'}>
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Contract value</div>
      <div className="tnum mt-2 font-display text-6xl font-bold leading-none text-white sm:text-7xl">
        <span className="text-brand-green">Rs</span> {shown}
        <span className="ml-1 text-3xl text-white/50">{bn ? 'Bn' : 'M'}</span>
      </div>
    </div>
  );
}

function ValueBar({
  valueLKR,
  sectorMax,
  sectorShort,
  align,
}: {
  valueLKR: number;
  sectorMax: number;
  sectorShort: string;
  align: Align;
}) {
  const { ref, seen } = useInView<HTMLDivElement>();
  const pct = Math.max(4, Math.min(100, Math.round((valueLKR / sectorMax) * 100)));
  return (
    <div ref={ref} className={`mt-8 max-w-md ${align === 'start' ? 'mx-0' : 'mx-auto'}`}>
      <div className="flex items-end justify-between text-[0.7rem] font-semibold uppercase tracking-wider text-white/50">
        <span>Scale vs our largest {sectorShort.toLowerCase()} project</span>
        <span className="text-brand-green">{pct}%</span>
      </div>
      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-green to-brand-greenDark transition-[width] duration-1000 ease-out"
          style={{ width: seen ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  );
}

function Tile({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-[120px] rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-5 text-center backdrop-blur-sm">
      <div className="font-display text-2xl font-bold text-white">{value}</div>
      <div className="mt-1 text-xs leading-snug text-white/55">{label}</div>
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
  align = 'center',
}: {
  valueLKR: number | null;
  sectorMax: number;
  sectorShort: string;
  year: string;
  status: string;
  capacity: { value: string; label: string }[];
  align?: Align;
}) {
  return (
    <div className={`relative max-w-3xl ${align === 'start' ? 'mx-0' : 'mx-auto'}`}>
      {valueLKR ? (
        <>
          <AnimatedValue valueLKR={valueLKR} align={align} />
          <ValueBar valueLKR={valueLKR} sectorMax={sectorMax} sectorShort={sectorShort} align={align} />
        </>
      ) : (
        <div className={align === 'start' ? 'text-left' : 'text-center'}>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Contract value</div>
          <div className="mt-2 font-display text-5xl font-bold text-white">On record</div>
        </div>
      )}

      <div className={`mt-10 flex flex-wrap gap-3 ${align === 'start' ? 'justify-start' : 'justify-center'}`}>
        <Tile value={year} label={status === 'Ongoing' ? 'In progress' : 'Completed'} />
        <Tile value={status} label="Status" />
        {capacity.map((c, i) => (
          <Tile key={i} value={c.value} label={c.label} />
        ))}
      </div>
    </div>
  );
}
