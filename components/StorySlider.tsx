'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/** Auto-rotating, crossfading image slider for the About "Our story" card. */
export default function StorySlider({ images }: { images: string[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => setI((p) => (p + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, [images.length]);

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
          <Image src={images[i]} alt="" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority={i === 0} />
        </motion.div>
      </AnimatePresence>

      {/* progress dots */}
      <div className="absolute inset-x-0 top-4 z-10 flex justify-center gap-1.5">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-5 bg-white' : 'w-1.5 bg-white/50'}`}
          />
        ))}
      </div>
    </>
  );
}
