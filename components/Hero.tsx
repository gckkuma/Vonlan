'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import CountUp from './CountUp';
import { STATS } from '@/lib/data/site';

interface Slide {
  image: string;
  eyebrow: string;
  headline: string;
  caption: string;
  href: string;
}

const SLIDES: Slide[] = [
  {
    image: '/images/hero/alila.jpg',
    eyebrow: 'Hospitality · Maldives',
    headline: 'Luxury resorts, engineered to last',
    caption: 'Alila Kothaifaru, Maldives · Rs 804 M',
    href: '/projects?filter=international',
  },
  {
    image: '/images/hero/sobhadanavi.jpg',
    eyebrow: 'Power & Energy',
    headline: "Powering Sri Lanka's future",
    caption: 'Sobhadanavi 350 MW LNG Power Station · 2025',
    href: '/projects?filter=power-energy',
  },
  {
    image: '/images/hero/galadari.jpg',
    eyebrow: 'Landmark Interiors',
    headline: 'Spaces, beautifully finished',
    caption: 'Galadari Hotel Ballroom · Colombo',
    href: '/projects?filter=buildings',
  },
  {
    image: '/images/hero/cargills-katana.jpg',
    eyebrow: 'Commercial & Industrial',
    headline: 'Built for industry and commerce',
    caption: 'Cargills Central Distribution Centre · Katana',
    href: '/projects?filter=buildings',
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const go = useCallback((n: number) => setI((p) => (n + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5500);
    return () => clearInterval(id);
  }, [reduce, i]);

  const s = SLIDES[i];

  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-brand-forest text-white lg:min-h-[760px]">
      {/* Slides */}
      <AnimatePresence>
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: reduce ? 1 : 1.05 }}
          animate={{ opacity: 1, scale: reduce ? 1 : 1.1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1 }, scale: { duration: 6.5, ease: 'linear' } }}
          className="absolute inset-0"
        >
          <Image src={s.image} alt={s.caption} fill priority sizes="100vw" className="object-cover object-center" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-forestDeep/95 via-brand-forestDeep/75 to-brand-forestDeep/35" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-forestDeep via-transparent to-brand-forestDeep/40" aria-hidden />

      <div className="container-x relative w-full py-16 lg:py-20">
        <div className="max-w-2xl">
          {/* per-slide text layer */}
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green">
                {s.eyebrow}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {s.headline}
              </h1>
              <p className="mt-5 text-sm font-medium uppercase tracking-wider text-white/65">{s.caption}</p>
            </motion.div>
          </AnimatePresence>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Vonlan Constructions delivers water, highways, power, buildings and aviation
            infrastructure across Sri Lanka and the Maldives — a CIDA C1 infrastructure contractor.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className="btn-green">
              View our projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/about" className="btn-outline-dark">
              About Vonlan
            </Link>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center gap-4">
          <div className="flex gap-2">
            {SLIDES.map((sl, idx) => (
              <button
                key={sl.image}
                type="button"
                onClick={() => go(idx)}
                aria-label={`Slide ${idx + 1}`}
                aria-pressed={idx === i}
                className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-10 bg-brand-green' : 'w-5 bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => go(i - 1)} aria-label="Previous slide" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/60 hover:text-white">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => go(i + 1)} aria-label="Next slide" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/60 hover:text-white">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Stat strip with count-up */}
        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {stat.isText ? stat.suffix : <CountUp value={stat.value} suffix={stat.suffix} />}
              </dt>
              <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-white/65">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
