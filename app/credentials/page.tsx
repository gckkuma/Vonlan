import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Leaf, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import AwardBlock from '@/components/AwardBlock';
import CertificateGallery from '@/components/CertificateGallery';
import Reveal from '@/components/Reveal';
import { AWARDS } from '@/lib/data/credentials';
import { CIDA_GRADES, META_DESCRIPTIONS, SITE } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'Credentials',
  description: META_DESCRIPTIONS.credentials,
  alternates: { canonical: '/credentials' },
  openGraph: { title: `Credentials · ${SITE.shortName}`, description: META_DESCRIPTIONS.credentials, url: `${SITE.url}/credentials` },
};

const CERTIFICATES = [
  { src: 'national-award-2015', label: 'National Award for Construction Performance 2015 — CIDA' },
  { src: 'nbea-2014', label: 'National Business Excellence Award 2014 — Runner-Up' },
  { src: 'iso-9001', label: 'ISO 9001:2015 — Quality Management' },
  { src: 'iso-14001', label: 'ISO 14001:2004 — Environmental Management' },
  { src: 'ohsas-18001', label: 'OHSAS 18001:2007 — Occupational Health & Safety' },
  { src: 'iso-9001-2008', label: 'ISO 9001:2008 — Quality Management (DNV)' },
];

const CRED_STATS = [
  { value: '18+', label: 'Years of operation', sub: 'Since 2007' },
  { value: '3', label: 'Awards & honours', sub: 'National recognition' },
  { value: '3', label: 'Management systems', sub: 'ISO 9001 · 14001 · OHSAS' },
  { value: '4', label: 'CIDA-graded sectors', sub: 'C1 & C3' },
];

const ISO_CERTS = [
  { code: 'ISO 9001:2015', name: 'Quality Management System', scope: 'Construction & maintenance of civil engineering infrastructure — water, roads, power & buildings.', since: 'Certified since 2017', icon: BadgeCheck },
  { code: 'ISO 14001:2004', name: 'Environmental Management System', scope: 'All project and operational activities, with the 3R concept applied across every site.', since: 'Implemented 2013', icon: Leaf },
  { code: 'OHSAS 18001:2007', name: 'Occupational Health & Safety', scope: 'Water Supply & Drainage and Road & Highway projects.', since: 'Active', icon: ShieldCheck },
];

export default function CredentialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Credentials"
        title="Certified, awarded and accredited"
        intro="CIDA C1 graded, ISO 9001 / 14001 and OHSAS 18001 certified, and recognised at national level for construction performance."
        image="/images/hero/sobhadanavi.jpg"
        imagePosition="center 55%"
      />

      {/* Credentials at a glance */}
      <section className="border-b border-brand-stone bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-10 sm:py-12 lg:grid-cols-4">
          {CRED_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-brand-green sm:text-4xl">{s.value}</div>
              <div className="mt-1.5 text-sm font-semibold text-brand-dark">{s.label}</div>
              <div className="text-xs text-brand-muted">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CIDA grades */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="CIDA accreditation" title="Graded at the highest national level" />
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {CIDA_GRADES.map((c) => (
              <div key={c.sector} className="rounded-2xl border border-brand-stone bg-white p-6 text-center">
                <div className="text-3xl font-bold text-brand-green">CIDA {c.grade}</div>
                <div className="mt-2 text-sm font-medium text-brand-dark">{c.sector}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO certifications */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Management systems" title="ISO & OHSAS certified" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {ISO_CERTS.map((c) => (
              <Reveal key={c.code}>
                <div className="flex h-full flex-col rounded-3xl border border-brand-stone bg-brand-offwhite p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-greenLight text-brand-green">
                    <c.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-brand-dark">{c.code}</h3>
                  <p className="text-sm font-semibold text-brand-green">{c.name}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">{c.scope}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-muted">{c.since}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Awards" title="Recognised at national level" />
          {(() => {
            const featured = AWARDS.find((a) => a.featured) ?? AWARDS[0];
            const rest = AWARDS.filter((a) => a !== featured);
            return (
              <div className="mt-10 space-y-6">
                <Reveal>
                  <AwardBlock title={featured.title} body={featured.body} meta={featured.meta} source={featured.source} />
                </Reveal>
                <div className="grid gap-6 lg:grid-cols-2">
                  {rest.map((a) => (
                    <Reveal key={a.title}>
                      <AwardBlock title={a.title} body={a.body} meta={a.meta} source={a.source} compact />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Certificates — original documents */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Certificates"
            title="The official documents"
            description="Our accreditations and awards, as issued. Click any certificate to view it full size."
          />
          <CertificateGallery items={CERTIFICATES} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-forest text-white">
        <div className="container-x flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-xl text-2xl font-bold sm:text-3xl">Build with a certified, award-winning team</h2>
          <Link href="/contact" className="btn-green">
            Get in touch <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
