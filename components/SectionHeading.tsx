import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Render light-on-dark for use on dark sections. */
  dark?: boolean;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow-line ${align === 'center' ? 'justify-center' : ''}`}>{eyebrow}</span>
      )}
      <h2
        className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl ${
          dark ? 'text-white' : 'text-brand-dark'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? 'text-white/70' : 'text-brand-muted'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
