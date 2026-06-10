import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, BadgeCheck, Info } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import SectorIcon from '@/components/SectorIcon';
import Reveal from '@/components/Reveal';
import { SECTORS, getSector } from '@/lib/data/sectors';
import { getProjectsByNames, getProjectsBySector } from '@/lib/data/projects';
import { SITE } from '@/lib/data/site';
import { sectorImage } from '@/lib/images';

export function generateStaticParams() {
  return SECTORS.map((s) => ({ sector: s.slug }));
}

export function generateMetadata({ params }: { params: { sector: string } }): Metadata {
  const sector = getSector(params.sector);
  if (!sector) return { title: 'Sector not found' };
  return {
    title: sector.metaTitle,
    description: sector.metaDescription,
    alternates: { canonical: `/services/${sector.slug}` },
    openGraph: {
      title: `${sector.metaTitle} · ${SITE.shortName}`,
      description: sector.metaDescription,
      url: `${SITE.url}/services/${sector.slug}`,
    },
  };
}

export default function SectorPage({ params }: { params: { sector: string } }) {
  const sector = getSector(params.sector);
  if (!sector) notFound();

  const named = getProjectsByNames(sector.featuredProjectNames);
  const related = (named.length ? named : getProjectsBySector(sector.slug)).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow="Services" title={sector.headline} intro={sector.intro} image={sectorImage(sector.slug)}>
        {/* sector switcher */}
        <div className="flex flex-wrap gap-2">
          {SECTORS.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                s.slug === sector.slug
                  ? 'bg-brand-green text-white'
                  : 'border border-white/20 text-white/70 hover:text-white'
              }`}
            >
              <SectorIcon icon={s.icon} className="h-4 w-4" />
              {s.shortName}
            </Link>
          ))}
        </div>
      </PageHeader>

      {/* Key metrics strip */}
      <section className="border-b border-brand-stone bg-white">
        <div className="container-x grid gap-px overflow-hidden py-8 sm:grid-cols-3 sm:gap-6">
          {sector.metrics.map((metric) => (
            <div key={metric} className="flex items-center gap-3 px-2 py-2">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-greenLight text-brand-green">
                <SectorIcon icon={sector.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-brand-dark">{metric}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Scope of work + cert callout */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Scope of work" title="What we deliver in this sector" />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {sector.scope.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-brand-stone bg-white p-4 text-sm leading-relaxed text-brand-dark">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {sector.noteToClient && (
              <p className="mt-6 flex items-start gap-2 rounded-xl bg-brand-greenLight/60 p-4 text-sm text-brand-greenDark">
                <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {sector.noteToClient}
              </p>
            )}
          </div>

          {/* Cert callout */}
          <aside className="h-fit rounded-3xl bg-brand-dark p-8 text-white lg:sticky lg:top-24">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green ring-1 ring-brand-green/30">
              <BadgeCheck className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-5 text-xl font-bold">{sector.certCallout.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{sector.certCallout.body}</p>
            <Link href="/credentials" className="btn-outline-dark mt-6 w-full">
              View all credentials
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </aside>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="section bg-white">
          <div className="container-x">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading eyebrow="Portfolio" title="Related projects" />
              <Link href={`/projects?sector=${sector.slug}`} className="btn-outline">
                All {sector.shortName.toLowerCase()} projects
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.05}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-brand-stone bg-white p-10 text-center sm:p-14">
            <h2 className="max-w-2xl text-2xl font-bold text-brand-dark sm:text-3xl">
              Planning a {sector.shortName.toLowerCase()} project?
            </h2>
            <p className="max-w-xl text-brand-muted">
              Talk to our engineering team about your requirements and timelines.
            </p>
            <Link href="/contact" className="btn-green">
              Contact us
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
