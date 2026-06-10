import type { Metadata } from 'next';
import { Heart, ShieldCheck, Leaf, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import CertBadge from '@/components/CertBadge';
import AwardBlock from '@/components/AwardBlock';
import Reveal from '@/components/Reveal';
import { CERTIFICATIONS, META_DESCRIPTIONS, SITE } from '@/lib/data/site';
import { AWARDS, CSR } from '@/lib/data/credentials';
import { POLICIES } from '@/lib/data/about';
import { PAGE_IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Credentials & Awards',
  description: META_DESCRIPTIONS.credentials,
  alternates: { canonical: '/credentials' },
  openGraph: { title: `Credentials · ${SITE.shortName}`, description: META_DESCRIPTIONS.credentials, url: `${SITE.url}/credentials` },
};

export default function CredentialsPage() {
  const featuredAward = AWARDS.find((a) => a.featured) ?? AWARDS[0];
  const otherAwards = AWARDS.filter((a) => a !== featuredAward);

  return (
    <>
      <PageHeader
        eyebrow="Credentials"
        title="Certified, awarded and trusted"
        intro="ISO 9001:2015, ISO 14001 and OHSAS 18001 certified, CIDA registered, and recognised at national level for construction performance."
        image={PAGE_IMAGES.credentials}
      />

      {/* Certifications */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Certifications"
            title="International standards, applied on every site"
            description="Scanned certificate copies are displayed here once supplied; the standards below are active across the organisation."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((cert, i) => (
              <Reveal key={cert.code} delay={(i % 3) * 0.05}>
                <CertBadge code={cert.code} name={cert.name} scope={cert.scope} since={cert.since} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Recognition" title="Awards" />
          <div className="mt-10 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <AwardBlock title={featuredAward.title} body={featuredAward.body} meta={featuredAward.meta} />
            </div>
            <div className="space-y-6 lg:col-span-2">
              {otherAwards.map((award) => (
                <div key={award.title} className="rounded-3xl border border-brand-stone bg-brand-offwhite p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-greenLight text-brand-green">
                    <ShieldCheck className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-brand-dark">{award.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">{award.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality + Environmental */}
      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-brand-stone bg-white p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-greenLight text-brand-green">
              <ShieldCheck className="h-6 w-6" aria-hidden />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-brand-dark">{POLICIES.quality.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">{POLICIES.quality.body}</p>
            <ul className="mt-5 space-y-3">
              {POLICIES.quality.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-brand-dark">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-brand-stone bg-white p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-greenLight text-brand-green">
              <Leaf className="h-6 w-6" aria-hidden />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-brand-dark">{POLICIES.environmental.title}</h2>
            <div className="mt-3 space-y-4">
              {POLICIES.environmental.body.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-brand-muted">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSR */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="In the community"
            title="Corporate social responsibility"
            description={CSR.intro}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CSR.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-brand-stone bg-brand-offwhite p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-greenLight text-brand-green">
                    <Heart className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-brand-dark">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
