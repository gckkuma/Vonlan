import type { Metadata } from 'next';
import Image from 'next/image';
import { Target, Compass, Leaf, ShieldCheck, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import ClientStrip from '@/components/ClientStrip';
import Reveal from '@/components/Reveal';
import { ABOUT, TIMELINE, VISION, MISSION, POLICIES } from '@/lib/data/about';
import { DIRECTORS } from '@/lib/data/directors';
import { META_DESCRIPTIONS, SITE } from '@/lib/data/site';
import { PAGE_IMAGES } from '@/lib/images';

/** Initials from a name, e.g. "A.A. Lalith Adikari" -> "LA". */
function initials(name: string): string {
  const words = name.replace(/[.]/g, ' ').split(/\s+/).filter((w) => w.length > 1);
  const picked = words.length >= 2 ? [words[0], words[words.length - 1]] : words;
  return picked.map((w) => w[0]?.toUpperCase()).join('');
}

export const metadata: Metadata = {
  title: 'About Vonlan',
  description: META_DESCRIPTIONS.about,
  alternates: { canonical: '/about' },
  openGraph: { title: `About · ${SITE.shortName}`, description: META_DESCRIPTIONS.about, url: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={ABOUT.headline}
        intro="Vonlan Constructions (Pvt) Ltd — a subsidiary of Sanken Construction, delivering infrastructure that serves communities across Sri Lanka."
        image={PAGE_IMAGES.about}
      />

      {/* Company story */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            <SectionHeading eyebrow="Our story" title="Built on a passion for excellence" />
            {ABOUT.story.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-brand-muted">
                {para}
              </p>
            ))}
          </div>
          <div className="lg:pt-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/project-polonnaruwa-water-supply.jpg"
                alt="Vonlan water treatment infrastructure"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-brand-dark text-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green ring-1 ring-brand-green/30">
              <Compass className="h-6 w-6" aria-hidden />
            </span>
            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">Our vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">{VISION}</p>
          </div>
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green ring-1 ring-brand-green/30">
              <Target className="h-6 w-6" aria-hidden />
            </span>
            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">Our mission</h2>
            <ul className="mt-5 space-y-4">
              {MISSION.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-white/70">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our journey"
            title="Milestones since 2007"
            description="From our first water supply contracts to a wholly-owned subsidiary of the Sanken Group."
          />
          <ol className="mt-10 border-l border-brand-stone">
            {TIMELINE.map((item, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <li className="relative pb-8 pl-8 last:pb-0">
                  <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-brand-green bg-brand-offwhite" />
                  <span className="text-sm font-bold text-brand-green">{item.year}</span>
                  <p className="mt-1 text-base leading-relaxed text-brand-dark">{item.milestone}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Trusted by — clients & partners */}
      <ClientStrip />

      {/* Board of Directors */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Leadership"
            title="Board of Directors"
            description="Decades of combined engineering and management experience, drawn from across the Sanken Group."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DIRECTORS.map((director, i) => (
              <Reveal key={director.name} delay={(i % 3) * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-brand-stone bg-brand-offwhite p-6">
                  <div className="flex items-center gap-4">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-dark text-lg font-bold tracking-wide text-brand-green">
                      {initials(director.name)}
                    </span>
                    <span className="h-px flex-1 bg-brand-stone" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-dark">{director.name}</h3>
                  <p className="text-sm font-semibold text-brand-green">{director.role}</p>
                  <p className="mt-1 text-xs font-medium text-brand-muted">{director.qualifications}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">{director.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-brand-stone bg-white p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-greenLight text-brand-green">
              <ShieldCheck className="h-6 w-6" aria-hidden />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-brand-dark">{POLICIES.quality.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">{POLICIES.quality.body}</p>
            <ul className="mt-5 space-y-3">
              {POLICIES.quality.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-brand-dark">
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
    </>
  );
}
