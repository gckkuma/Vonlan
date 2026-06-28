import type { Metadata } from 'next';
import { Suspense } from 'react';
import PageHeader from '@/components/PageHeader';
import ProjectsExplorer from '@/components/ProjectsExplorer';
import { META_DESCRIPTIONS, SITE } from '@/lib/data/site';
import { PROJECTS, PORTFOLIO_VALUE } from '@/lib/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: META_DESCRIPTIONS.projects,
  alternates: { canonical: '/projects' },
  openGraph: { title: `Projects · ${SITE.shortName}`, description: META_DESCRIPTIONS.projects, url: `${SITE.url}/projects` },
};

export default function ProjectsPage() {
  const total = PROJECTS.length;
  const valueBn = (PORTFOLIO_VALUE / 1e9).toFixed(1);

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects delivered across Sri Lanka & the Maldives"
        intro={`${total} infrastructure projects spanning water, buildings, roads & bridges, and power — over Rs ${valueBn} billion in contract value. Filter by sector or view our international work.`}
        image="/images/work/cargills-square-night.jpg"
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
