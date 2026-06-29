import type { SectorIcon } from '@/lib/data/sectors';
import CraneMotif from './CraneMotif';

/**
 * Subtle, sector-specific animated SVG motif used as a card background.
 * Uses currentColor; the card sets opacity. Animations pause under reduced-motion.
 */
function wavePath(y: number) {
  let d = `M -72 ${y}`;
  for (let x = -72; x < 372; x += 72) d += ' q 18 -14 36 0 q 18 14 36 0';
  return d;
}

export default function SectorMotif({ icon, className = '' }: { icon: SectorIcon; className?: string }) {
  // Buildings → reuse the animated tower-crane motif.
  if (icon === 'building') return <CraneMotif className={className} />;

  return (
    <svg viewBox="0 0 240 200" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden className={className}>
      {(icon === 'droplets' || icon === 'sprout') && (
        <g className="mt-flow" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
          <path d={wavePath(70)} opacity={0.9} />
          <path d={wavePath(105)} opacity={0.6} />
          <path d={wavePath(140)} opacity={0.35} />
        </g>
      )}

      {icon === 'milestone' && (
        <g stroke="currentColor" strokeLinecap="round">
          <line x1="-10" y1="64" x2="250" y2="64" strokeWidth={2} opacity={0.5} />
          <line x1="-10" y1="136" x2="250" y2="136" strokeWidth={2} opacity={0.5} />
          <line x1="-10" y1="100" x2="250" y2="100" strokeWidth={4} strokeDasharray="16 16" className="mt-dash" />
        </g>
      )}

      {icon === 'zap' && (
        <g stroke="currentColor" strokeWidth={3} strokeLinejoin="round" strokeLinecap="round" fill="none">
          <polyline className="mt-pulse" points="40,30 110,30 80,100 150,100 110,180 190,80 140,80 170,30" opacity={0.5} />
          <polyline points="0,150 60,150 90,120" strokeWidth={2} opacity={0.3} />
        </g>
      )}

      {icon === 'anchor' && (
        <g stroke="currentColor" strokeWidth={2.5} fill="none">
          {[0, 1.3, 2.6].map((d) => (
            <circle key={d} className="mt-ring" cx="120" cy="100" r="34" style={{ animationDelay: `${d}s` }} />
          ))}
          <circle cx="120" cy="100" r="5" fill="currentColor" stroke="none" />
        </g>
      )}
    </svg>
  );
}
