import type { ReactNode } from 'react';
import PageHeaderImage from './PageHeaderImage';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
  /** Optional background photo path (e.g. a sector image). */
  image?: string;
  /** CSS object-position for the background image (e.g. 'center 35%'). */
  imagePosition?: string;
  /** Optional custom animated backdrop (e.g. a logo wall), used instead of a photo. */
  backdrop?: ReactNode;
  /** Lighten the overlay over a backdrop so the imagery shows through more. */
  lightBackdrop?: boolean;
}

/** Dark hero band used at the top of inner pages. */
export default function PageHeader({
  eyebrow,
  title,
  intro,
  children,
  image,
  imagePosition = 'center',
  backdrop,
  lightBackdrop = false,
}: PageHeaderProps) {
  const hasBg = Boolean(image || backdrop);
  return (
    <section
      className={`relative isolate overflow-hidden bg-brand-forest text-white ${
        hasBg ? 'flex min-h-[420px] items-center sm:min-h-[500px]' : ''
      }`}
    >
      {backdrop ? (
        <>
          {backdrop}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              lightBackdrop
                ? 'from-brand-forestDeep/95 via-brand-forestDeep/55 to-brand-forestDeep/25'
                : 'from-brand-forestDeep via-brand-forestDeep/88 to-brand-forestDeep/65'
            }`}
            aria-hidden
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${
              lightBackdrop ? 'from-brand-forestDeep/70 to-transparent' : 'from-brand-forestDeep to-transparent'
            }`}
            aria-hidden
          />
        </>
      ) : image ? (
        <PageHeaderImage src={image} position={imagePosition} />
      ) : (
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-green/15 blur-3xl"
          aria-hidden
        />
      )}
      <div className="container-x relative w-full py-16 sm:py-20">
        {eyebrow && <span className="eyebrow-line">{eyebrow}</span>}
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
