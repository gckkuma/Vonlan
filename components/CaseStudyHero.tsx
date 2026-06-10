import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Award } from 'lucide-react';
import { StatusBadge } from './Badges';
import { SECTOR_MAP } from '@/lib/data/sectors';
import { projectImage } from '@/lib/images';
import type { Project } from '@/lib/data/projects';

/**
 * Case-study hero for /projects/[slug]: a dark full-width band with the project
 * title, sector, status and an optional award ribbon, over a placeholder image.
 */
export default function CaseStudyHero({ project }: { project: Project }) {
  const sector = SECTOR_MAP[project.sector];

  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      {/* photo backdrop */}
      <Image
        src={projectImage(project)}
        alt={project.name}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/85 to-brand-dark/55" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 to-transparent" aria-hidden />

      <div className="container-x relative py-16 sm:py-24">
        {/* breadcrumb */}
        <nav className="flex items-center gap-1 text-sm text-white/60" aria-label="Breadcrumb">
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden />
          <Link href={`/services/${sector.slug}`} className="hover:text-white">
            {sector.shortName}
          </Link>
        </nav>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          <span className="inline-flex items-center rounded-full border border-white/20 px-2.5 py-1 text-xs font-medium text-white/80">
            {sector.name}
          </span>
        </div>

        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">
          {project.name}
        </h1>

        {project.award && (
          <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-green/15 px-4 py-2 text-sm font-semibold text-brand-green ring-1 ring-brand-green/30">
            <Award className="h-4 w-4" aria-hidden />
            {project.award}
          </p>
        )}
      </div>
    </section>
  );
}
