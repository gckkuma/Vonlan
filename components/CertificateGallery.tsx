'use client';

import { useState, useEffect } from 'react';
import Image from '@/components/Img';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Expand } from 'lucide-react';

interface Cert {
  src: string;
  label: string;
}

/** Certificate grid with an in-page lightbox (click to enlarge; Esc / backdrop / × to close). */
export default function CertificateGallery({ items }: { items: Cert[] }) {
  const [active, setActive] = useState<Cert | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <figure key={c.src} className="group overflow-hidden rounded-2xl border border-brand-stone bg-white">
            <button
              type="button"
              onClick={() => setActive(c)}
              aria-label={`View ${c.label}`}
              className="relative block aspect-[3/4] w-full cursor-zoom-in bg-brand-offwhite"
            >
              <Image
                src={`/images/certificates/${c.src}.jpg`}
                alt={c.label}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-dark/5 text-brand-muted opacity-0 transition-opacity group-hover:opacity-100">
                <Expand className="h-4 w-4" aria-hidden />
              </span>
            </button>
            <figcaption className="border-t border-brand-stone px-4 py-3 text-xs font-medium text-brand-muted">
              {c.label}
            </figcaption>
          </figure>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/85 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.label}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" aria-hidden />
            </button>
            <motion.figure
              className="flex max-h-full flex-col items-center"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/certificates/${active.src}.jpg`}
                alt={active.label}
                className="max-h-[82vh] w-auto rounded-lg bg-white shadow-2xl"
              />
              <figcaption className="mt-4 max-w-md text-center text-sm text-white/80">{active.label}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
