import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectorIcon from './SectorIcon';
import type { Sector } from '@/lib/data/sectors';

/**
 * Sector card — solid brand green to match the logo, flipping to brand-dark
 * on hover (with the icon turning green) for a clear, tactile colour change.
 */
export default function SectorCard({ sector }: { sector: Sector }) {
  const stat = sector.grade ? `${sector.grade} · ${sector.count}` : sector.count;
  return (
    <Link
      href={`/services/${sector.slug}`}
      className="group flex h-full flex-col rounded-2xl bg-brand-green p-7 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand-dark/20"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white transition-colors duration-300 group-hover:bg-brand-green">
          <SectorIcon icon={sector.icon} />
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-white/80 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-green"
          aria-hidden
        />
      </div>
      <h3 className="mt-5 text-lg font-bold text-white">{sector.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/85 transition-colors duration-300 group-hover:text-white/70">
        {sector.tagline}
      </p>
      <p className="mt-5 border-t border-white/25 pt-4 text-xs font-semibold uppercase tracking-wider text-white transition-colors duration-300 group-hover:text-brand-green">
        {stat}
      </p>
    </Link>
  );
}
