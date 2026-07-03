'use client';

import { useRef } from 'react';
import Image from '@/components/Img';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

/** Inner-page hero photo with a gentle scroll parallax (reduced-motion static). */
export default function PageHeaderImage({ src, position = 'center' }: { src: string; position?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-30, 30]);

  return (
    <div ref={ref} aria-hidden className="absolute inset-0 overflow-hidden">
      {/* Oversized so the parallax translate never reveals an edge */}
      <motion.div style={{ y }} className="absolute -inset-y-12 inset-x-0">
        <Image src={src} alt="" fill priority quality={62} sizes="100vw" className="object-cover" style={{ objectPosition: position }} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-forestDeep via-brand-forestDeep/85 to-brand-forestDeep/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-forestDeep to-transparent" />
    </div>
  );
}
