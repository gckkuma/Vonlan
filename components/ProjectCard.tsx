import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Globe } from 'lucide-react';
import { StatusBadge, SectorBadge } from './Badges';
import SectorIcon from './SectorIcon';
import { SECTOR_MAP } from '@/lib/data/sectors';
import { projectImage, type Project } from '@/lib/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const img = projectImage(project);
  const sector = SECTOR_MAP[project.sector];
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-stone bg-white transition-all duration-200 hover:-translate-y-1 hover:border-brand-green hover:shadow-lg hover:shadow-brand-green/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-dark">
        {img ? (
          <Image
            src={img}
            alt={project.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white/40">
            <SectorIcon icon={sector.icon} className="h-8 w-8" />
            <span className="text-xs font-semibold uppercase tracking-widest">{sector.shortName}</span>
          </div>
        )}
        <div className="absolute left-3 top-3 flex gap-2">
          <StatusBadge status={project.status} />
          {project.overseas && (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-dark">
              <Globe className="h-3 w-3" aria-hidden /> International
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <SectorBadge sector={project.sector} />
          {project.value && (
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
              {project.value}
            </span>
          )}
        </div>
        <h3 className="mt-3 line-clamp-2 text-base font-bold leading-snug text-brand-dark">
          {project.name}
        </h3>
        <p className="mt-1.5 line-clamp-1 text-sm text-brand-muted">{project.client}</p>
        <div className="mt-auto flex items-center justify-between pt-5 text-sm">
          <span className="font-medium text-brand-muted">{project.year}</span>
          <ArrowUpRight
            className="h-5 w-5 text-brand-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-green"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  );
}
