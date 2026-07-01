'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  src: string;
  caption: string;
}

/** Horizontal card carousel — scroll-snap cards with prev/next arrows. */
export default function PhotoSlider({ items, dir = '/images/csr' }: { items: Slide[]; dir?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (n: number) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: n * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <div className="relative mt-12">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        {items.map((g) => (
          <figure
            key={g.src}
            className="group w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl border border-brand-stone bg-white sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.6875rem)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-stone">
              <Image
                src={`${dir}/${g.src}.jpg`}
                alt={g.caption}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="px-4 py-3 text-xs leading-relaxed text-brand-muted">{g.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-stone text-brand-dark transition-colors hover:border-brand-green hover:text-brand-green"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-stone text-brand-dark transition-colors hover:border-brand-green hover:text-brand-green"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
