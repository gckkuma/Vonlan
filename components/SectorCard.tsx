import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import SectorIcon from './SectorIcon';
import { sectorImage } from '@/lib/images';
import type { Sector } from '@/lib/data/sectors';

export default function SectorCard({ sector, index }: { sector: Sector; index?: number }) {
  return (
    <Link
      href={`/services/${sector.slug}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-brand-dark text-white"
    >
      {/* Photo */}
      <Image
        src={sectorImage(sector.slug)}
        alt={sector.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-brand-dark/5 transition-colors duration-300 group-hover:from-brand-dark group-hover:via-brand-dark/55" aria-hidden />

      {/* index + icon top row */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm ring-1 ring-white/15 transition-colors group-hover:bg-brand-green group-hover:ring-brand-green">
          <SectorIcon icon={sector.icon} className="h-5 w-5" />
        </span>
        {typeof index === 'number' && (
          <span className="tnum text-sm font-semibold text-white/50">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>

      {/* content */}
      <div className="relative p-6">
        <h3 className="text-xl font-bold leading-tight">{sector.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/70">
          {sector.cardDescription}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
            {sector.projectCount}
          </span>
          <ArrowUpRight
            className="h-5 w-5 text-white/70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-green"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  );
}
