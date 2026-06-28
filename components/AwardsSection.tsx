import Link from 'next/link';
import {
  Trophy,
  BadgeCheck,
  Leaf,
  ShieldCheck,
  Medal,
  Sparkles,
  Handshake,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const CERTS = [
  { code: 'ISO 9001:2015', name: 'Quality Management System', meta: 'Certified since 2017', icon: BadgeCheck },
  { code: 'ISO 14001:2004', name: 'Environmental Management', meta: 'Implemented 2013', icon: Leaf },
  { code: 'OHSAS 18001:2007', name: 'Occupational Health & Safety', meta: 'Active', icon: ShieldCheck },
  { code: 'NBEA 2014', name: 'Business Excellence — Runner-up', meta: 'Construction Sector', icon: Medal },
];

const PILLARS = [
  { icon: Sparkles, label: 'Proven Excellence' },
  { icon: ShieldCheck, label: 'Safety First' },
  { icon: Leaf, label: 'Environmental Responsibility' },
  { icon: Handshake, label: 'Built on Trust' },
];

export default function AwardsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark py-20 text-white sm:py-28">
      {/* depth glows */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-brand-green/15 blur-[130px]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[26rem] w-[26rem] rounded-full bg-brand-green/10 blur-[130px]" aria-hidden />

      <div className="container-x relative">
        <SectionHeading
          dark
          align="center"
          eyebrow="Recognition"
          title="Award-winning. Fully certified."
          description="Recognised at national level for construction performance, and certified for quality, safety and environmental responsibility."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Featured National Award */}
          <Reveal className="lg:col-span-5">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green to-brand-greenDark p-8 shadow-xl shadow-brand-green/20 sm:p-10">
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" aria-hidden />
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                <Trophy className="h-8 w-8 text-white" aria-hidden />
              </span>
              <p className="mt-7 font-mono text-xs uppercase tracking-[0.2em] text-white/80">
                National Award · 2015
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                National Award for Construction Performance
              </h3>
              <p className="mt-3 leading-relaxed text-white/85">
                Civil Engineering category — for the turnkey design, construction and completion of
                the <span className="font-semibold">Ampara Water Supply Project</span>. Sri Lanka’s
                highest construction honour.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold">~LKR 760 M</span>
                <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold">Eastern Province</span>
              </div>
            </div>
          </Reveal>

          {/* Certification cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {CERTS.map((c, i) => (
              <Reveal key={c.code} delay={i * 0.06} className="h-full">
                <div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:bg-white/[0.07]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green ring-1 ring-brand-green/25 transition-colors group-hover:bg-brand-green group-hover:text-white">
                    <c.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h4 className="mt-5 text-lg font-bold">{c.code}</h4>
                  <p className="mt-1 text-sm text-white/70">{c.name}</p>
                  <p className="mt-auto pt-4 font-mono text-xs uppercase tracking-wider text-brand-green">
                    {c.meta}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Value pillars */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div key={p.label} className="flex items-center gap-3">
              <p.icon className="h-6 w-6 shrink-0 text-brand-green" aria-hidden />
              <span className="text-sm font-semibold text-white/85">{p.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/credentials" className="btn-outline-dark">
            View full credentials
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
