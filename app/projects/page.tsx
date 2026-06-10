import type { Metadata } from 'next';
import { Suspense } from 'react';
import PageHeader from '@/components/PageHeader';
import ProjectsExplorer from '@/components/ProjectsExplorer';
import { META_DESCRIPTIONS, SITE } from '@/lib/data/site';
import { PROJECTS } from '@/lib/data/projects';
import { PAGE_IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Projects',
  description: META_DESCRIPTIONS.projects,
  alternates: { canonical: '/projects' },
  openGraph: { title: `Projects · ${SITE.shortName}`, description: META_DESCRIPTIONS.projects, url: `${SITE.url}/projects` },
};

export default function ProjectsPage() {
  const total = PROJECTS.length;

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects delivered across Sri Lanka"
        intro={`Browse our portfolio of ${total} infrastructure projects — water supply, highways, power and buildings. Filter by sector and status.`}
        image={PAGE_IMAGES.projects}
      />
      <section className="section">
        <div className="container-x">
          <Suspense fallback={<div className="py-20 text-center text-brand-muted">Loading projects…</div>}>
            <ProjectsExplorer />
          </Suspense>
        </div>
      </section>
    </>
  );
}
