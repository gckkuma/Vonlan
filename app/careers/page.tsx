import type { Metadata } from 'next';
import { Check, Briefcase } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import CareersForm from '@/components/CareersForm';
import Reveal from '@/components/Reveal';
import { CAREERS, ROLES } from '@/lib/data/careers';
import { META_DESCRIPTIONS, SITE } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'Careers',
  description: META_DESCRIPTIONS.careers,
  alternates: { canonical: '/careers' },
  openGraph: { title: `Careers · ${SITE.shortName}`, description: META_DESCRIPTIONS.careers, url: `${SITE.url}/careers` },
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title={CAREERS.headline}
        intro={CAREERS.intro}
        image="/images/work/sobhadanavi-power-1.jpg"
      />

      {/* Why Vonlan */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Why Vonlan" title="Build something that matters" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAREERS.why.map((w) => (
              <li key={w} className="flex gap-3 rounded-2xl border border-brand-stone bg-white p-6">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-greenLight text-brand-green">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                <span className="text-sm leading-relaxed text-brand-dark">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Roles */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Open disciplines" title="Roles we recruit for" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROLES.map((r) => (
              <Reveal key={r.title}>
                <div className="flex h-full flex-col rounded-2xl border border-brand-stone bg-brand-offwhite p-6">
                  <Briefcase className="h-6 w-6 text-brand-green" aria-hidden />
                  <h3 className="mt-4 text-base font-bold text-brand-dark">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{r.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading
            eyebrow="Apply now"
            title="Send us your application"
            description="Tell us about yourself and attach your CV. Our HR team reviews every application and will be in touch if your profile matches a current opening."
          />
          <CareersForm />
        </div>
      </section>
    </>
  );
}
