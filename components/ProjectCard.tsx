import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { StatusBadge, SectorBadge } from './Badges';
import { projectImage } from '@/lib/images';
import type { Project } from '@/lib/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-stone bg-white transition-all duration-200 hover:-translate-y-1 hover:border-brand-green hover:shadow-lg hover:shadow-brand-green/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-dark">
        <Image
          src={projectImage(project)}
          alt={project.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <StatusBadge status={project.status} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3">
          <SectorBadge sector={project.sector} />
        </div>
        <h3 className="text-base font-bold leading-snug text-brand-dark transition-colors group-hover:text-brand-greenDark">
          {project.name}
        </h3>
        <p className="mt-1.5 text-sm text-brand-muted">{project.client}</p>

        <div className="mt-4 flex items-end justify-between border-t border-brand-stone pt-4">
          <div>
            <span className="block text-[11px] font-medium uppercase tracking-wider text-brand-muted">
              Contract value
            </span>
            <span className="text-sm font-semibold text-brand-dark">
              {project.value ?? 'On record'}
            </span>
          </div>
          <ArrowUpRight className="h-5 w-5 text-brand-muted transition-colors group-hover:text-brand-green" aria-hidden />
        </div>
      </div>
    </Link>
  );
}
