import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/data/site';

interface LogoProps {
  /** "dark" applies a white filter so the logo reads on the dark brand background. */
  variant?: 'light' | 'dark';
  /** Rendered height in px; width scales with the logo's 223:74 aspect ratio. */
  height?: number;
  className?: string;
  /** When false, renders the image without a Link wrapper. */
  link?: boolean;
}

const ASPECT = 223 / 74;

export default function Logo({
  variant = 'light',
  height = 38,
  className = '',
  link = true,
}: LogoProps) {
  const width = Math.round(height * ASPECT);

  const image = (
    <Image
      src="/logo.jpeg"
      alt={`${SITE.name} logo`}
      width={width}
      height={height}
      priority
      style={{ height, width: 'auto' }}
    />
  );

  // The logo is a colour JPEG with a solid (non-transparent) background, so a
  // CSS invert filter would just produce a white block on dark surfaces.
  // Instead, present the colour mark on a small white chip when on dark bg.
  const img =
    variant === 'dark' ? (
      <span className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5">{image}</span>
    ) : (
      image
    );

  if (!link) return <span className={className}>{img}</span>;

  return (
    <Link href="/" aria-label={`${SITE.shortName} — home`} className={`inline-flex ${className}`}>
      {img}
    </Link>
  );
}
