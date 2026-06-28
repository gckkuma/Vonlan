import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { StatusBadge, SectorBadge } from './Badges';
import { workImage, type Work } from '@/lib/data/work';
import { findProject } from '@/lib/data/projects';

/** Project card: real photo, name, client, value, status & sector badges. */
export default function WorkCard({ work }: { work: Work }) {
  const project = findProject(work.match);
  const href = project ? `/projects/${project.slug}` : '/projects';
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-stone bg-white transition-all duration-200 hover:-translate-y-1 hover:border-brand-green hover:shadow-lg hover:shadow-brand-green/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-dark">
        <Image
          src={workImage(work.images[0])}
          alt={work.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <StatusBadge status={work.status} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <SectorBadge sector={work.sector} />
          {work.value && (
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
              {work.value}
            </span>
          )}
        </div>
        <h3 className="mt-3 text-lg font-bold leading-snug text-brand-dark">{work.name}</h3>
        <p className="mt-1.5 text-sm text-brand-muted">{work.client}</p>
        <div className="mt-auto flex items-center justify-between pt-5 text-sm">
          <span className="font-medium text-brand-muted">{work.location}</span>
          <ArrowUpRight
            className="h-5 w-5 text-brand-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-green"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  );
}
