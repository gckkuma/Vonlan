import type { Metadata } from 'next';
import Image from '@/components/Img';
import Link from 'next/link';
import { Quote, ArrowRight, Building2, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import ManagementTeam from '@/components/ManagementTeam';
import StorySlider from '@/components/StorySlider';
import StrengthDiagram from '@/components/StrengthDiagram';
import Timeline from '@/components/Timeline';
import { ABOUT, TIMELINE, VISION, MISSION } from '@/lib/data/about';
import { LEADERS } from '@/lib/data/leadership';
import { META_DESCRIPTIONS, SITE, CIDA_GRADES } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'About',
  description: META_DESCRIPTIONS.about,
  alternates: { canonical: '/about' },
  openGraph: { title: `About · ${SITE.shortName}`, description: META_DESCRIPTIONS.about, url: `${SITE.url}/about` },
};

const statements = LEADERS.filter((l) => l.statement);

// Highest-value milestone projects, shown as a slideshow in the "Our story" card.
const MILESTONES = [
  { src: '/images/work/live-polonnaruwa-wsp.jpg', value: 'Rs 1.68 Bn', name: 'Polonnaruwa Water Supply Project' },
  { src: '/images/work/live-och-viaduct2.jpg', value: 'Rs 1.06 Bn', name: 'Outer Circular Highway — Viaduct 2' },
  { src: '/images/work/alila-villa-dusk.jpg', value: 'Rs 804 M', name: 'Alila Kothaifaru, Maldives' },
  { src: '/images/work/live-ampara.jpg', value: 'Rs 757 M', name: 'Ampara Water Supply Project' },
  { src: '/images/work/cargills-square.jpg', value: 'Rs 457 M', name: 'Cargills Square, Bandarawela' },
  { src: '/images/work/premadasa-stadium.jpg', value: 'Rs 394 M', name: 'R. Premadasa Cricket Stadium' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={ABOUT.headline}
        intro="Vonlan Constructions, a subsidiary of the Sanken Group, executing landmark infrastructure across Sri Lanka and the Maldives since 2007."
        image="/images/hero/about.jpg"
      />

      {/* Story */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Our story" title="Built to serve the nation" />
            <div className="mt-6 space-y-5">
              {ABOUT.story.map((p) => (
                <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-brand-dark">
                  {p}
                </p>
              ))}
            </div>
            <Link href="/credentials" className="btn-outline mt-8">
              View our credentials
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-brand-forest">
              <StorySlider slides={MILESTONES} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-forestDeep/80 via-brand-forestDeep/10 to-transparent" aria-hidden />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-brand-forest/95 px-5 py-4 text-white shadow-xl backdrop-blur-sm">
                <Building2 className="h-8 w-8 shrink-0 text-brand-green" aria-hidden />
                <div>
                  <div className="text-sm font-bold leading-tight">Vonlan Constructions</div>
                  <div className="mt-0.5 text-xs uppercase tracking-wider text-white/60">
                    Established 2007 · 18+ years
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Leadership"
            title="Guided by experience"
            description="A focused executive team with decades of construction experience."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERS.map((l) => (
              <Reveal key={l.name} className="flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-stone">
                  {l.photo ? (
                    <Image
                      src={`/images/team/${l.photo}.jpg`}
                      alt={l.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 20vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <span className="flex h-full items-center justify-center font-display text-3xl text-brand-muted">
                      {l.name.split(' ').slice(-1)[0][0]}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-base font-bold text-brand-dark">{l.name}</h3>
                <p className="text-sm font-semibold text-brand-green">{l.role}</p>
                <p className="mt-1 text-xs leading-relaxed text-brand-muted">{l.qualifications}</p>
              </Reveal>
            ))}
          </div>

          {/* CEO / COO statements */}
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {statements.map((l) => (
              <Reveal key={l.name} className="rounded-3xl border border-brand-stone bg-brand-offwhite p-8">
                <Quote className="h-8 w-8 text-brand-green" aria-hidden />
                <p className="mt-4 text-lg leading-relaxed text-brand-dark">{l.statement}</p>
                <p className="mt-6 text-sm font-bold text-brand-dark">{l.name}</p>
                <p className="text-sm text-brand-muted">{l.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Management team */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Management team"
            title="The team behind delivery"
            description="Day-to-day leadership across operations, finance, procurement, projects and engineering."
          />
          <ManagementTeam />
        </div>
      </section>

      {/* Our strength */}
      <section className="section overflow-hidden bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our strength" title="A complete construction ecosystem" />
            <p className="mt-6 text-lg leading-relaxed text-brand-muted">
              Vonlan draws on a full network of specialist companies — giving every project deep,
              end-to-end capability and resources at scale, from first design to final handover.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {[
                'Design & planning',
                'Piling & foundations',
                'Ready-mix concrete',
                'Structural steel & aluminium',
                'MEP engineering',
                'Overseas construction',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-brand-dark">
                  <Check className="h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <StrengthDiagram />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-brand-forest text-white">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading dark eyebrow="Vision" title="Our purpose" />
            <p className="mt-6 text-2xl font-display font-semibold leading-snug text-white">{VISION}</p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {CIDA_GRADES.map((c) => (
                <div key={c.sector} className="border-t border-white/15 pt-3">
                  <div className="text-2xl font-bold text-brand-green">CIDA {c.grade}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/55">{c.sector}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/55">Mission</h3>
            <ul className="mt-6 space-y-5">
              {MISSION.map((m, i) => (
                <li key={i} className="flex gap-4 border-b border-white/10 pb-5 last:border-0">
                  <span className="shrink-0 font-display text-lg font-bold text-brand-green">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="leading-relaxed text-white/75">{m}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Milestones" title="Eighteen years of delivery" />
          <Timeline items={TIMELINE} />
        </div>
      </section>
    </>
  );
}
