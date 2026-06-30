import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import BlueprintStats from '@/components/BlueprintStats';
import Reveal from '@/components/Reveal';
import { SECTORS, SECTOR_MAP, type SectorSlug } from '@/lib/data/sectors';
import { PROJECTS, PORTFOLIO_VALUE, SECTOR_TOTALS } from '@/lib/data/projects';
import { SITE } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Vonlan’s capabilities across six infrastructure sectors — water supply, highways & bridges, power & energy, buildings, irrigation, and seaports & airports. CIDA C1 graded.',
  alternates: { canonical: '/services' },
  openGraph: { title: `Services · ${SITE.shortName}`, url: `${SITE.url}/services` },
};

const BAR_ORDER: SectorSlug[] = ['water-supply', 'buildings', 'highways-bridges', 'power-energy'];

export default function ServicesIndexPage() {
  const bars = BAR_ORDER.map((s) => ({
    label: SECTOR_MAP[s].shortName,
    value: (SECTOR_TOTALS[s]?.value ?? 0) / 1e9,
    count: SECTOR_TOTALS[s]?.count ?? 0,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="What we build"
        intro="Design-build capability backed by an in-house engineering team and decades of site experience — delivering infrastructure across six sectors in Sri Lanka and the Maldives."
        image="/images/hero/sobhadanavi.jpg"
      />

      {/* Portfolio at a glance — engineering-draft graph */}
      <section className="relative isolate overflow-hidden bg-brand-forest py-16 text-white sm:py-20">
        <div className="bp-grid absolute inset-0 opacity-40" aria-hidden />
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-green/15 blur-[120px]" aria-hidden />
        <div className="container-x relative">
          <SectionHeading
            dark
            eyebrow="Portfolio at a glance"
            title="By the numbers"
            description="Seventy-plus projects across six sectors — measured and mapped."
          />
          <div className="mt-10">
            <BlueprintStats projects={PROJECTS.length} valueBn={PORTFOLIO_VALUE / 1e9} sectors={6} years={18} bars={bars} />
          </div>
        </div>
      </section>

      {/* Sector cards */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Six sectors"
            title="One standard of delivery"
            description="Explore each capability for scope of work, key facts and selected projects."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector, i) => (
              <Reveal key={sector.slug} delay={i * 0.05}>
                <ServiceCard sector={sector} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-forest text-white">
        <div className="container-x flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-xl text-2xl font-bold sm:text-3xl">Have a project in mind?</h2>
          <Link href="/contact" className="btn-green">
            Talk to our team <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
