import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Leaf, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import AwardBlock from '@/components/AwardBlock';
import Reveal from '@/components/Reveal';
import { AWARDS } from '@/lib/data/credentials';
import { CIDA_GRADES, META_DESCRIPTIONS, SITE } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'Credentials',
  description: META_DESCRIPTIONS.credentials,
  alternates: { canonical: '/credentials' },
  openGraph: { title: `Credentials · ${SITE.shortName}`, description: META_DESCRIPTIONS.credentials, url: `${SITE.url}/credentials` },
};

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
        image="/images/work/nwsdb-battaramulla.jpg"
      />

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
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {AWARDS.map((a) => (
              <Reveal key={a.title}>
                <AwardBlock title={a.title} body={a.body} meta={a.meta} source={a.source} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Official certificate graphic */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="container-x">
          <div className="mx-auto max-w-5xl">
            <Image
              src="/images/awards-certifications.jpg"
              alt="Vonlan awards & certifications overview"
              width={1491}
              height={1055}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="h-auto w-full"
            />
          </div>
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
