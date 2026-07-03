'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

export interface StorySlide {
  src: string;
  value: string;
  name: string;
}

/** Auto-rotating slider of milestone projects, each with a contract-value label. */
export default function StorySlider({ slides }: { slides: StorySlide[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, [slides.length]);

  const s = slides[i];

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: reduce ? 1 : 1.07 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.9 }, scale: { duration: 4.5, ease: 'easeOut' } }}
        >
          <Image src={s.src} alt={s.name} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority={i === 0} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-forestDeep/70 via-transparent to-transparent" aria-hidden />
          <div className="absolute left-4 top-4 max-w-[85%]">
            <span className="inline-block rounded-full bg-brand-green px-3 py-1 text-sm font-bold text-white shadow-md">
              {s.value}
            </span>
            <p className="mt-1.5 text-xs font-semibold leading-snug text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
              {s.name}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute right-4 top-4 z-10 flex gap-1.5">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-5 bg-white' : 'w-1.5 bg-white/50'}`}
          />
        ))}
      </div>
    </>
  );
}
