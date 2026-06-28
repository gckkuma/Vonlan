import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/data/site';

interface LogoProps {
  /** "dark" uses the light-on-dark logo variant (green mark + white wordmark). */
  variant?: 'light' | 'dark';
  /** Rendered height in px; width scales with the logo's 2.5:1 aspect ratio. */
  height?: number;
  className?: string;
  /** When false, renders the image without a Link wrapper. */
  link?: boolean;
}

const ASPECT = 1983 / 793;

export default function Logo({
  variant = 'light',
  height = 36,
  className = '',
  link = true,
}: LogoProps) {
  const width = Math.round(height * ASPECT);
  // Transparent PNGs: full-colour for light surfaces, green-mark + white wordmark for dark.
  const src = variant === 'dark' ? '/logo-light.png' : '/logo.png';

  const img = (
    <Image
      src={src}
      alt={`${SITE.name} logo`}
      width={width}
      height={height}
      priority
      style={{ height, width: 'auto' }}
    />
  );

  if (!link) return <span className={className}>{img}</span>;

  return (
    <Link href="/" aria-label={`${SITE.shortName} — home`} className={`inline-flex ${className}`}>
      {img}
    </Link>
  );
}
