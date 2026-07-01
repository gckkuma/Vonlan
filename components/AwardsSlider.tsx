'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AwardBlock from './AwardBlock';
import type { Award } from '@/lib/data/credentials';

/** Awards carousel — one card at a time, with arrows, dots and pause-on-hover autoplay. */
export default function AwardsSlider({ awards }: { awards: Award[] }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const go = useCallback(
    (n: number) => {
      setDir(n);
      setIndex((prev) => (prev + n + awards.length) % awards.length);
    },
    [awards.length],
  );

  useEffect(() => {
    if (paused || awards.length < 2) return;
    const id = setInterval(() => {
      setDir(1);
      setIndex((prev) => (prev + 1) % awards.length);
    }, 6500);
    return () => clearInterval(id);
  }, [paused, awards.length]);

  const a = awards[index];
  const offset = reduce ? 0 : 40;

  return (
    <div
      className="relative mt-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: dir >= 0 ? offset : -offset }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir >= 0 ? -offset : offset }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <AwardBlock title={a.title} body={a.body} meta={a.meta} source={a.source} />
          </motion.div>
        </AnimatePresence>
      </div>

      {awards.length > 1 && (
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2" role="tablist" aria-label="Awards">
            {awards.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Show award ${i + 1} of ${awards.length}`}
                aria-selected={i === index}
                role="tab"
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-brand-green' : 'w-2.5 bg-brand-stone hover:bg-brand-muted'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous award"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-stone text-brand-dark transition-colors hover:border-brand-green hover:text-brand-green"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next award"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-stone text-brand-dark transition-colors hover:border-brand-green hover:text-brand-green"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
