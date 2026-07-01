import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HeartHandshake, GraduationCap, Leaf, Landmark, Quote } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { CSR } from '@/lib/data/credentials';
import { SITE } from '@/lib/data/site';

const GALLERY = [
  { src: 'school-donation', caption: 'Donating learning materials to students of Vasanagama Vidyalaya' },
  { src: 'hermitage-opening', caption: 'Opening of the hermitage at Vasanagama Village' },
  { src: 'school-students', caption: 'Handing over supplies to young learners' },
  { src: 'hermitage-dana', caption: 'Alms offering at the Vasanagama hermitage' },
  { src: 'school-ceremony', caption: 'School donation ceremony, Vasanagama Vidyalaya' },
  { src: 'hermitage-procession', caption: 'Blessings at the Vasanagama hermitage' },
];

export const metadata: Metadata = {
  title: 'Corporate Social Responsibility',
  description:
    'Vonlan Constructions gives back to the communities it serves — supporting education, youth development, the environment, and cultural and spiritual heritage across Sri Lanka.',
  alternates: { canonical: '/csr' },
  openGraph: { title: `Corporate Social Responsibility · ${SITE.shortName}`, url: `${SITE.url}/csr` },
};

const FOCUS_ICONS = { HeartHandshake, GraduationCap, Leaf, Landmark } as const;

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE.url}/about` },
    { '@type': 'ListItem', position: 3, name: 'CSR', item: `${SITE.url}/csr` },
  ],
};

export default function CsrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <PageHeader
        eyebrow="About · CSR"
        title="Corporate social responsibility"
        intro={CSR.intro}
      />

      {/* Philosophy */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Our approach" title="Building more than infrastructure" />
            <div className="mt-6 space-y-5">
              {CSR.philosophy.map((p) => (
                <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-brand-muted">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col justify-center rounded-3xl border border-brand-stone bg-brand-offwhite p-8 sm:p-10">
              <Quote className="h-9 w-9 text-brand-green" aria-hidden />
              <p className="mt-5 font-display text-xl font-semibold leading-snug text-brand-dark sm:text-2xl">
                “Uplifting the comforts of the nation by enhancing its infrastructure.”
              </p>
              <p className="mt-4 text-sm text-brand-muted">
                Our guiding purpose — and the reason responsibility to community sits at the heart of
                how we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Where we focus"
            title="Four areas of commitment"
            description="Our community work concentrates where we can make the most lasting difference."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CSR.focus.map((f) => {
              const Icon = FOCUS_ICONS[f.icon];
              return (
                <Reveal key={f.title}>
                  <div className="group flex h-full flex-col rounded-2xl border border-brand-stone bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-green hover:shadow-lg hover:shadow-brand-green/5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-greenLight text-brand-greenDark transition-colors group-hover:bg-brand-green group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-brand-dark">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">{f.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="section bg-brand-forest text-white">
        <div className="container-x">
          <SectionHeading
            dark
            eyebrow="In the community"
            title="Initiatives we're proud of"
            description="A selection of the community, education and heritage projects Vonlan has supported."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {CSR.items.map((item) => (
              <Reveal key={item.title}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                  {item.meta && (
                    <span className="font-mono text-xs uppercase tracking-wider text-brand-green">{item.meta}</span>
                  )}
                  <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="In pictures"
            title="Moments from the community"
            description="From the opening of the Vasanagama hermitage to donations for local schoolchildren."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((g) => (
              <Reveal key={g.src}>
                <figure className="group overflow-hidden rounded-2xl border border-brand-stone bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-stone">
                    <Image
                      src={`/images/csr/${g.src}.jpg`}
                      alt={g.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-xs leading-relaxed text-brand-muted">{g.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="container-x flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-xl text-2xl font-bold text-brand-dark sm:text-3xl">
            Partner with a contractor that builds responsibly
          </h2>
          <Link href="/contact" className="btn-green">
            Get in touch <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
