'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { HERO_IMAGES } from '@/lib/images';
import { STATS } from '@/lib/data/site';

/**
 * Full-bleed photographic hero with a 3-image crossfade slideshow behind a
 * fixed headline and stat strip. Heavy-construction feel — no SaaS card.
 */
export default function Hero() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return; // respect reduced-motion: no autoplay
    const id = setInterval(() => setActive((i) => (i + 1) % HERO_IMAGES.length), 5500);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-brand-dark text-white lg:min-h-[760px]">
      {/* Crossfading photos */}
      <AnimatePresence>
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.02 }}
          animate={{ opacity: 1, scale: reduceMotion ? 1 : 1.09 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.1, ease: 'easeInOut' }, scale: { duration: 7, ease: 'linear' } }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_IMAGES[active]}
            alt="Vonlan infrastructure construction in Sri Lanka"
            fill
            priority={active === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Legibility overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/20" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/30" aria-hidden />

      <div className="container-x relative w-full py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow-line">Infrastructure Construction · Sri Lanka</span>

          <h1 className="mt-7 text-[2.7rem] font-bold leading-[1.03] tracking-tight sm:text-6xl lg:text-[4.4rem]">
            Building the infrastructure that moves Sri Lanka forward
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Water supply networks, highways, power plants and landmark buildings — Vonlan has
            delivered over 50 major infrastructure projects since 2007, as a subsidiary of Sanken
            Construction.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className="btn-green">
              View our projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/about" className="btn-outline-dark">
              <PlayCircle className="h-4 w-4" aria-hidden />
              Our story
            </Link>
          </div>
        </div>

        {/* Inline stat strip + slide indicators */}
        <div className="mt-16 flex flex-wrap items-end justify-between gap-8 border-t border-white/15 pt-8">
          <dl className="grid max-w-3xl flex-1 grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="tnum text-3xl font-bold sm:text-4xl">{stat.value}</dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
          <div className="flex gap-2">
            {HERO_IMAGES.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}`}
                aria-pressed={i === active}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? 'w-8 bg-brand-green' : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
