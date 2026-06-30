import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check, BadgeCheck } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import SectorIcon from '@/components/SectorIcon';
import SectorMotif from '@/components/SectorMotif';
import { SECTORS, getSector, type SectorSlug } from '@/lib/data/sectors';
import { getProjectsBySector } from '@/lib/data/projects';
import { SITE } from '@/lib/data/site';

const HEADER_IMAGES: Record<SectorSlug, string | undefined> = {
  'water-supply': '/images/work/nwsdb-battaramulla.jpg',
  'highways-bridges': undefined,
  'power-energy': '/images/work/sobhadanavi-power-1.jpg',
  buildings: '/images/work/cargills-square.jpg',
  irrigation: undefined,
  'sea-airport': '/images/work/araliya-lounge.jpg',
};

export function generateStaticParams() {
  return SECTORS.map((s) => ({ sector: s.slug }));
}

export function generateMetadata({ params }: { params: { sector: string } }): Metadata {
  const s = getSector(params.sector);
  if (!s) return { title: 'Services' };
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.name} · ${SITE.shortName}`, description: s.metaDescription, url: `${SITE.url}/services/${s.slug}` },
  };
}

export default function ServicePage({ params }: { params: { sector: string } }) {
  const sector = getSector(params.sector);
  if (!sector) notFound();

  const projects = getProjectsBySector(sector.slug).slice(0, 3);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE.url}/services` },
      { '@type': 'ListItem', position: 3, name: sector.name, item: `${SITE.url}/services/${sector.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHeader eyebrow="Services" title={sector.name} intro={sector.intro} image={HEADER_IMAGES[sector.slug]} />

      {/* Sector switcher */}
      <div className="border-b border-brand-stone bg-white">
        <div className="container-x no-scrollbar flex gap-2 overflow-x-auto py-4">
          {SECTORS.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                s.slug === sector.slug
                  ? 'bg-brand-green text-white'
                  : 'border border-brand-stone text-brand-dark hover:border-brand-green hover:text-brand-green'
              }`}
            >
              <SectorIcon icon={s.icon} className="h-4 w-4" />
              {s.shortName}
            </Link>
          ))}
        </div>
      </div>

      {/* Scope + metrics */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Scope of work" title="What we deliver" />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {sector.scope.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-greenLight text-brand-green">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-brand-dark">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative isolate overflow-hidden rounded-3xl bg-brand-forest p-8 text-white">
              <SectorMotif
                icon={sector.icon}
                className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.08]"
              />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green ring-1 ring-brand-green/25">
                  <SectorIcon icon={sector.icon} />
                </span>
                <h3 className="mt-5 text-xs font-semibold uppercase tracking-wider text-white/55">Key facts</h3>
                <ul className="mt-4 space-y-4">
                  {sector.metrics.map((m) => (
                    <li key={m} className="border-b border-white/10 pb-4 text-lg font-semibold leading-snug last:border-0">
                      {m}
                    </li>
                  ))}
                </ul>
                {sector.grade && (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-green/15 px-4 py-2 text-sm font-semibold text-brand-green">
                    <BadgeCheck className="h-4 w-4" aria-hidden /> {sector.grade}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {projects.length > 0 && (
        <section className="section bg-white">
          <div className="container-x">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading eyebrow="Selected work" title={`${sector.shortName} projects`} />
              <Link href={`/projects?filter=${sector.slug}`} className="btn-outline">
                View all {sector.shortName.toLowerCase()} work
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-brand-forest text-white">
        <div className="container-x flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-xl text-2xl font-bold sm:text-3xl">
            Planning a {sector.shortName.toLowerCase()} project?
          </h2>
          <Link href="/contact" className="btn-green">
            Talk to our team <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
