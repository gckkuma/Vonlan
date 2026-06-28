'use client';

import { useEffect, useRef, useState } from 'react';

/** Counts up to `value` once when scrolled into view. Respects reduced-motion. */
export default function CountUp({
  value,
  suffix = '',
  duration = 1600,
  className = '',
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting || done.current) return;
      done.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setN(Math.round((1 - Math.pow(1 - t, 3)) * value));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.disconnect();
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {n}
      {suffix}
    </span>
  );
}
