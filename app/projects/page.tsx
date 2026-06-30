import type { Metadata } from 'next';
import { Suspense } from 'react';
import PageHeader from '@/components/PageHeader';
import ProjectsExplorer from '@/components/ProjectsExplorer';
import BlueprintStats from '@/components/BlueprintStats';
import ProjectRegisterTable from '@/components/ProjectRegisterTable';
import SectionHeading from '@/components/SectionHeading';
import { META_DESCRIPTIONS, SITE } from '@/lib/data/site';
import { PROJECTS, PORTFOLIO_VALUE, SECTOR_TOTALS } from '@/lib/data/projects';
import { SECTOR_MAP, type SectorSlug } from '@/lib/data/sectors';

export const metadata: Metadata = {
  title: 'Projects',
  description: META_DESCRIPTIONS.projects,
  alternates: { canonical: '/projects' },
  openGraph: { title: `Projects · ${SITE.shortName}`, description: META_DESCRIPTIONS.projects, url: `${SITE.url}/projects` },
};

const BAR_ORDER: SectorSlug[] = ['water-supply', 'buildings', 'highways-bridges', 'power-energy'];

export default function ProjectsPage() {
  const total = PROJECTS.length;
  const valueBn = (PORTFOLIO_VALUE / 1e9).toFixed(1);
  const bars = BAR_ORDER.map((s) => ({
    label: SECTOR_MAP[s].shortName,
    value: (SECTOR_TOTALS[s]?.value ?? 0) / 1e9,
    count: SECTOR_TOTALS[s]?.count ?? 0,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects delivered across Sri Lanka & the Maldives"
        intro={`${total} infrastructure projects spanning water, buildings, roads & bridges, and power — over Rs ${valueBn} billion in contract value. Filter by sector or view our international work.`}
        image="/images/work/cargills-square-night.jpg"
      />

      {/* Figures — the real numbers behind the portfolio */}
      <section className="relative isolate overflow-hidden bg-brand-forest py-16 text-white sm:py-20">
        <div className="bp-grid absolute inset-0 opacity-40" aria-hidden />
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-green/15 blur-[120px]" aria-hidden />
        <div className="container-x relative">
          <SectionHeading
            dark
            eyebrow="The numbers"
            title="A portfolio measured in billions"
            description="Every figure below is taken from our project records — contract values in Sri Lankan Rupees, across four delivery sectors."
          />
          <div className="mt-10">
            <BlueprintStats projects={total} valueBn={PORTFOLIO_VALUE / 1e9} sectors={6} years={18} bars={bars} />
          </div>
        </div>
      </section>

      {/* Showcase — filterable cards */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Selected work"
            title="Explore the portfolio"
            description="Filter by sector, status or international work."
          />
          <div className="mt-10">
            <Suspense fallback={<div className="py-20 text-center text-brand-muted">Loading projects…</div>}>
              <ProjectsExplorer />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Full register — every project, like the source records */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Complete register"
            title="Every project, by sector"
            description="The full record of valued contracts — names, clients, values, years and status."
          />
          <div className="mt-10">
            <Suspense fallback={<div className="py-10 text-center text-brand-muted">Loading register…</div>}>
              <ProjectRegisterTable />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
