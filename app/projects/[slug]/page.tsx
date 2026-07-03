import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from '@/components/Img';
import { ArrowLeft, ArrowRight, Building2, MapPin, Globe } from 'lucide-react';
import ProjectStats from '@/components/ProjectStats';
import CraneMotif from '@/components/CraneMotif';
import SectionHeading from '@/components/SectionHeading';
import SectorIcon from '@/components/SectorIcon';
import { StatusBadge, SectorBadge } from '@/components/Badges';
import {
  PROJECTS,
  getProject,
  projectHero,
  projectGallery,
  capacityStats,
  SECTOR_MAX,
} from '@/lib/data/projects';
import { SECTOR_MAP } from '@/lib/data/sectors';
import { SITE } from '@/lib/data/site';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  if (!p) return { title: 'Project' };
  const desc = (p.description || `${p.name} — ${p.client}. ${p.value ?? ''} ${p.status}.`).slice(0, 160);
  return {
    title: p.name,
    description: desc,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { title: `${p.name} · ${SITE.shortName}`, description: desc, url: `${SITE.url}/projects/${p.slug}` },
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const sector = SECTOR_MAP[project.sector];
  const hero = projectHero(project);
  const gallery = projectGallery(project).filter((g) => g !== hero);
  const capacity = capacityStats(project.capacity);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE.url}/projects` },
      { '@type': 'ListItem', position: 3, name: project.name, item: `${SITE.url}/projects/${project.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-forest text-white">
        {hero ? (
          <Image src={hero} alt={project.name} fill priority quality={62} sizes="100vw" className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/10">
            <SectorIcon icon={sector.icon} className="h-40 w-40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-forestDeep via-brand-forestDeep/75 to-brand-forestDeep/45" aria-hidden />
        <div className="container-x relative flex min-h-[460px] flex-col justify-end py-12 lg:min-h-[540px]">
          <Link href="/projects" className="mb-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden /> All projects
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <SectorBadge sector={project.sector} />
            <StatusBadge status={project.status} />
            {project.overseas && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white">
                <Globe className="h-3 w-3" aria-hidden /> International
              </span>
            )}
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{project.name}</h1>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-brand-green" aria-hidden /> {project.client}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-green" aria-hidden /> Sri Lanka
            </span>
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="relative isolate overflow-hidden bg-brand-forest py-20 text-white sm:py-24">
        <div className="bp-grid absolute inset-0 opacity-40" aria-hidden />
        <div className="pointer-events-none absolute -right-10 bottom-0 hidden h-[115%] w-auto text-white/[0.07] lg:block" aria-hidden>
          <CraneMotif className="h-full w-auto" />
        </div>
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-brand-green/15 blur-[120px]" aria-hidden />
        <div className="container-x relative">
          <SectionHeading dark align="center" eyebrow="By the numbers" title="Project at a glance" className="mx-auto" />
          <div className="mt-12">
            <ProjectStats
              valueLKR={project.valueLKR}
              sectorMax={SECTOR_MAX[project.sector] ?? project.valueLKR ?? 1}
              sectorShort={sector.shortName}
              year={project.year}
              status={project.status}
              capacity={capacity}
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      {project.description && (
        <section className="pt-16 sm:pt-20">
          <div className="container-x max-w-3xl">
            <h2 className="text-2xl font-bold text-brand-dark">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-muted">{project.description}</p>
          </div>
        </section>
      )}

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="section">
          <div className="container-x">
            <SectionHeading eyebrow="Gallery" title={`Photography (${gallery.length})`} />
            <div className="mt-8 overflow-hidden rounded-3xl">
              <div className="relative aspect-[16/9]">
                <Image src={gallery[0]} alt={project.name} fill sizes="(max-width:1024px) 100vw, 1100px" className="object-cover" />
              </div>
            </div>
            {gallery.length > 1 && (
              <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
                {gallery.slice(1).map((src) => (
                  <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image src={src} alt={project.name} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-brand-forest text-white">
        <div className="container-x flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-xl text-2xl font-bold sm:text-3xl">Planning a similar project?</h2>
          <Link href="/contact" className="btn-green">
            Discuss your project <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
