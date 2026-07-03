'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { TimelineItem } from '@/lib/data/about';

/**
 * Milestone timeline: a vertical rail that draws in on scroll, with each
 * {year, milestone} row staggering into view. Reduced-motion renders static.
 */
export default function Timeline({ items }: { items: TimelineItem[] }) {
  const reduce = useReducedMotion();

  return (
    <div className="relative mt-12 max-w-3xl">
      {/* Connecting rail (draws top → bottom) */}
      <motion.span
        aria-hidden
        className="absolute bottom-6 top-8 left-[5.75rem] w-px origin-top -translate-x-1/2 bg-brand-stone sm:left-[8.75rem]"
        initial={reduce ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      <ol>
        {items.map((t, i) => (
          <motion.li
            key={t.year + t.milestone.slice(0, 10)}
            className="relative grid grid-cols-[5rem_1fr] gap-6 py-6 sm:grid-cols-[8rem_1fr]"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12% 0px' }}
            transition={{ duration: 0.5, delay: reduce ? 0 : Math.min(i * 0.06, 0.36), ease: 'easeOut' }}
          >
            <span className="font-display text-lg font-bold text-brand-green">{t.year}</span>
            <p className="leading-relaxed text-brand-dark">{t.milestone}</p>
            {/* Node on the rail */}
            <span
              aria-hidden
              className="absolute top-8 left-[5.75rem] h-3 w-3 -translate-x-1/2 rounded-full border-2 border-brand-green bg-white sm:left-[8.75rem]"
            />
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
