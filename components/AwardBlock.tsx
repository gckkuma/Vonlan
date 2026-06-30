import { Trophy } from 'lucide-react';

interface AwardBlockProps {
  title: string;
  body: string;
  meta?: string;
  /** Compact variant for the credentials list (the homepage uses the full hero). */
  compact?: boolean;
}

/**
 * Dark award feature card with a trophy motif — used for the National Award
 * 2015 callout on the homepage and the awards on the credentials page.
 */
export default function AwardBlock({ title, body, meta, compact = false }: AwardBlockProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-brand-forest text-white ${
        compact ? 'p-7' : 'p-8 sm:p-12'
      }`}
    >
      {/* glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-green/20 blur-3xl"
        aria-hidden
      />
      <div className="relative">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-green ring-1 ring-brand-green/30">
          <Trophy className={compact ? 'h-6 w-6' : 'h-7 w-7'} aria-hidden />
        </span>
        <h3 className={`mt-6 font-bold leading-tight ${compact ? 'text-xl' : 'text-2xl sm:text-3xl'}`}>
          {title}
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">{body}</p>
        {meta && (
          <p className="mt-6 inline-flex rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-brand-green">
            {meta}
          </p>
        )}
      </div>
    </div>
  );
}
