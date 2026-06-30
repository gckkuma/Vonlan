import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectorIcon from './SectorIcon';
import SectorMotif from './SectorMotif';
import type { Sector } from '@/lib/data/sectors';

/** Services-page card: green, flips to dark on hover, with an animated sector motif behind. */
export default function ServiceCard({ sector }: { sector: Sector }) {
  const stat = sector.grade ? `${sector.grade} · ${sector.count}` : sector.count;
  return (
    <Link
      href={`/services/${sector.slug}`}
      className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl bg-brand-green p-7 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-brand-forest hover:shadow-xl hover:shadow-brand-dark/20"
    >
      {/* animated motif */}
      <SectorMotif
        icon={sector.icon}
        className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.14] transition-colors duration-300 group-hover:text-brand-green/30"
      />

      <div className="relative flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white transition-colors duration-300 group-hover:bg-brand-green">
          <SectorIcon icon={sector.icon} />
        </span>
        <ArrowUpRight className="h-5 w-5 text-white/80 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-green" aria-hidden />
      </div>
      <h3 className="relative mt-5 text-lg font-bold">{sector.name}</h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-white/85 transition-colors duration-300 group-hover:text-white/70">
        {sector.tagline}
      </p>
      <p className="relative mt-5 border-t border-white/25 pt-4 text-xs font-semibold uppercase tracking-wider text-white transition-colors duration-300 group-hover:text-brand-green">
        {stat}
      </p>
    </Link>
  );
}
