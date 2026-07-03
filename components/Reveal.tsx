'use client';

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from 'react';

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Entry direction: fade-up (default), from a side, or fade-only. */
  direction?: 'up' | 'left' | 'right' | 'none';
}

const DIR_CLASS = { up: '', left: 'reveal-left', right: 'reveal-right', none: 'reveal-none' } as const;

/**
 * Scroll-into-view reveal via progressive enhancement.
 *
 * Content is visible by default in the SSR markup (no inline opacity:0), so
 * crawlers and no-JS users always see it. The reveal animation only runs when
 * JS is present (the <html> gets a `js` class) and prefers-reduced-motion is
 * off — see the `.reveal` rules in globals.css.
 */
export default function Reveal({ children, delay = 0, direction = 'up', className = '', style, ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -60px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${DIR_CLASS[direction]} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
