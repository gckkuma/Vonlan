import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin } from 'lucide-react';
import SectorIcon from './SectorIcon';
import { StatusBadge } from './Badges';
import { SECTOR_MAP } from '@/lib/data/sectors';
import { projectImage } from '@/lib/images';
import type { Project } from '@/lib/data/projects';

/**
 * Homepage featured-project card: real project photography with the contract
 * value and details overlaid — a confident, photo-led showcase.
 */
export default function FeaturedProjectCard({ project }: { project: Project }) {
  const sector = SECTOR_MAP[project.sector];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-brand-dark text-white"
    >
      <Image
        src={projectImage(project)}
        alt={project.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/55 to-brand-dark/10" aria-hidden />

      {/* top badges */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold backdrop-blur-sm">
          <SectorIcon icon={sector.icon} className="h-3.5 w-3.5 text-brand-green" />
          {sector.shortName}
        </span>
        <StatusBadge status={project.status} />
      </div>

      {/* content */}
      <div className="relative p-6">
        <span className="text-[11px] font-medium uppercase tracking-widest text-white/60">
          Contract value
        </span>
        <div className="tnum text-3xl font-bold sm:text-4xl">{project.value ?? 'On record'}</div>
        <h3 className="mt-3 text-lg font-bold leading-snug">{project.name}</h3>
        <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4">
          <span className="flex items-center gap-1.5 text-sm text-white/65">
            <MapPin className="h-4 w-4 text-brand-green" aria-hidden />
            {project.location?.split(',')[0] ?? 'Sri Lanka'}
          </span>
          <ArrowUpRight
            className="h-5 w-5 text-brand-green transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  );
}
