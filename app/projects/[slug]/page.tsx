import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Building, MapPin, Wallet, Calendar, Activity, Camera } from 'lucide-react';
import CaseStudyHero from '@/components/CaseStudyHero';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { PROJECTS, getProject, getRelatedProjects, type Project } from '@/lib/data/projects';
import { SECTOR_MAP } from '@/lib/data/sectors';
import { SITE } from '@/lib/data/site';
import { projectImage } from '@/lib/images';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: 'Project not found' };
  const desc = caseStudyOverview(project)[0].slice(0, 158);
  return {
    title: project.name,
    description: desc,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: `${project.name} · ${SITE.shortName}`, description: desc, url: `${SITE.url}/projects/${project.slug}` },
  };
}

/** Use the rich case-study copy where present, otherwise build an honest overview from facts. */
function caseStudyOverview(project: Project): string[] {
  if (project.caseStudy?.overview?.length) return project.caseStudy.overview;
  const sector = SECTOR_MAP[project.sector];
  const valuePart = project.value ? ` Valued at ${project.value},` : '';
  const yearPart = project.year && project.year !== 'Ongoing' ? ` (${project.year})` : '';
  return [
    `${project.name}${yearPart} was delivered by Vonlan Constructions for ${project.client} as part of our ${sector.name.toLowerCase()} portfolio.${valuePart} the project reflects Vonlan's commitment to quality, safety and on-time delivery across Sri Lanka's infrastructure.`,
  ];
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const overview = caseStudyOverview(project);
  const related = getRelatedProjects(project.slug, project.sector, 3);

  const facts = [
    { icon: Building, label: 'Client', value: project.client },
    { icon: MapPin, label: 'Location', value: project.location ?? 'Sri Lanka' },
    { icon: Wallet, label: 'Contract value', value: project.value ?? 'On record' },
    { icon: Calendar, label: 'Year', value: project.year ?? 'On record' },
    { icon: Activity, label: 'Status', value: project.status },
  ];

  return (
    <>
      <CaseStudyHero project={project} />

      {/* Key facts strip */}
      <section className="border-b border-brand-stone bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-8 sm:grid-cols-3 lg:grid-cols-5">
          {facts.map((fact) => (
            <div key={fact.label}>
              <div className="flex items-center gap-1.5 text-brand-muted">
                <fact.icon className="h-4 w-4 text-brand-green" aria-hidden />
                <span className="text-[11px] font-semibold uppercase tracking-wider">{fact.label}</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-brand-dark">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview + scope */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Overview" title="Project overview" />
            <div className="mt-6 space-y-5">
              {overview.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-brand-muted">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {project.caseStudy?.scope && (
            <aside className="h-fit rounded-3xl border border-brand-stone bg-white p-8">
              <h3 className="text-lg font-bold text-brand-dark">Scope of work</h3>
              <ul className="mt-5 space-y-3">
                {project.caseStudy.scope.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-brand-dark">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Gallery" title="Project photography" />
          <div className="mt-8 overflow-hidden rounded-3xl">
            <div className="relative aspect-[21/9]">
              <Image
                src={projectImage(project)}
                alt={project.name}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </div>
          <p className="mt-4 flex items-start gap-2 text-sm text-brand-muted">
            <Camera className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
            Additional site photography to be supplied from Vonlan&rsquo;s archive
            {project.caseStudy?.photoBrief ? `: ${project.caseStudy.photoBrief}` : '.'}
          </p>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="section">
          <div className="container-x">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="More work"
                title={`More ${SECTOR_MAP[project.sector].shortName.toLowerCase()} projects`}
              />
              <Link href={`/projects?sector=${project.sector}`} className="btn-outline">
                View all
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section bg-brand-dark text-white">
        <div className="container-x flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-2xl text-2xl font-bold sm:text-3xl">
            Have a similar project in mind?
          </h2>
          <p className="max-w-xl text-white/70">
            Our team would be glad to discuss your requirements and how Vonlan can deliver.
          </p>
          <Link href="/contact" className="btn-green">
            Discuss your project
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
