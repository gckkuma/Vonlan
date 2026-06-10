import { ImageIcon } from 'lucide-react';

interface PlaceholderImageProps {
  /** Centred caption, e.g. "Project photo". */
  label?: string;
  /** Optional secondary line (e.g. a photo brief). */
  sublabel?: string;
  /** Aspect-ratio utility class, e.g. "aspect-[4/3]". */
  aspect?: string;
  className?: string;
  /** Use the elevated dark tone for cards already on a dark surface. */
  tone?: 'dark' | 'darkElevated';
}

/**
 * Intentional, on-brand image placeholder — a dark panel with a centred muted
 * label and a subtle dotted frame. Used everywhere site photography is pending,
 * so the layout reads as designed rather than broken. No external services.
 */
export default function PlaceholderImage({
  label = 'Project photo',
  sublabel,
  aspect = 'aspect-[4/3]',
  className = '',
  tone = 'dark',
}: PlaceholderImageProps) {
  const bg = tone === 'dark' ? 'bg-brand-dark' : 'bg-brand-darkElevated';
  return (
    <div
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden ${bg} ${className}`}
      role="img"
      aria-label={label}
    >
      {/* subtle inner frame */}
      <div className="pointer-events-none absolute inset-3 rounded-lg border border-dashed border-white/10" />
      {/* faint diagonal sheen */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/40">
          <ImageIcon className="h-5 w-5" aria-hidden />
        </span>
        <span className="text-xs font-semibold uppercase tracking-widest text-white/45">{label}</span>
        {sublabel && <span className="max-w-[28ch] text-[11px] leading-snug text-white/30">{sublabel}</span>}
      </div>
    </div>
  );
}
