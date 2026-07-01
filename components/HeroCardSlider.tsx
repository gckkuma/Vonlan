'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface Slide {
  src: string;
  caption: string;
}

/** Compact auto-rotating photo card for use inside a hero. */
export default function HeroCardSlider({ items, dir = '/images/csr' }: { items: Slide[]; dir?: string }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (items.length < 2) return;
    const id = setInterval(() => setI((p) => (p + 1) % items.length), 4000);
    return () => clearInterval(id);
  }, [items.length]);

  const g = items[i];

  return (
    <div className="w-full max-w-lg">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-2xl shadow-black/40">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: reduce ? 1 : 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src={`${dir}/${g.src}.jpg`}
              alt={g.caption}
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
              priority={i === 0}
            />
          </motion.div>
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-forestDeep/85 via-transparent to-transparent" aria-hidden />
        <p className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white/90">{g.caption}</p>
      </div>
      <div className="mt-3 flex gap-1.5">
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Show photo ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? 'w-6 bg-brand-green' : 'w-1.5 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
