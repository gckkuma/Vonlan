'use client';

import { useEffect, useState } from 'react';
import Image from '@/components/Img';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const SLIDES = [
  { src: '/images/intro/bridge.jpg', alt: 'A bridge built by Vonlan Constructions', caption: 'Bridge construction' },
  { src: '/images/intro/water.jpg', alt: 'A water-supply project by Vonlan Constructions', caption: 'Water supply scheme' },
  { src: '/images/intro/ampara.jpg', alt: 'Ampara water-supply scheme by Vonlan Constructions', caption: 'Ampara Water Supply Project' },
  { src: '/images/intro/viaduct.jpg', alt: 'Outer Circular Highway viaducts by Vonlan Constructions', caption: 'OCH Viaducts 14 & 15' },
  { src: '/images/intro/tower.jpg', alt: 'An elevated water tower by Vonlan Constructions', caption: 'Elevated water tower' },
];

/**
 * Auto-rotating imagery for the home "Who we are" section. Each photo is shown
 * uncropped (object-contain) over a blurred copy of itself, so mixed aspect
 * ratios fill the frame cleanly without letterbox gaps. Keeps the 18+ yrs badge.
 */
export default function HomeIntroSlider() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (SLIDES.length < 2) return;
    const id = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 4500);
    return () => clearInterval(id);
  }, []);

  const s = SLIDES[i];

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-forestDeep shadow-xl ring-1 ring-brand-stone/60">
        <AnimatePresence initial={false}>
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.8, ease: 'easeInOut' }}
          >
            {/* Blurred fill of the same photo so odd aspect ratios have no empty bars. */}
            <Image
              src={s.src}
              alt=""
              aria-hidden
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="scale-125 object-cover blur-2xl"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-brand-forestDeep/25" aria-hidden />
            {/* The photo itself, shown in full — never cropped or scaled. */}
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              priority={i === 0}
            />
            {/* Caption over a soft scrim for legibility */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />
            <p className="absolute bottom-4 left-4 max-w-[70%] text-sm font-semibold text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]">
              {s.caption}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-4 right-4 z-10 flex gap-1.5">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Show photo ${idx + 1} of ${SLIDES.length}`}
              aria-current={idx === i}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? 'w-5 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Experience badge (kept from the previous static image) */}
      <div className="absolute -right-4 -top-6 hidden items-center gap-3 rounded-2xl bg-brand-forest px-5 py-4 text-white shadow-xl md:flex">
        <Building2 className="h-7 w-7 text-brand-green" aria-hidden />
        <div>
          <div className="text-2xl font-bold leading-none">18+ yrs</div>
          <div className="mt-1 text-xs uppercase tracking-wider text-white/60">Since 2007</div>
        </div>
      </div>
    </div>
  );
}
