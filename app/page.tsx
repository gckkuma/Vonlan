import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import SectorCard from '@/components/SectorCard';
import WorkCard from '@/components/WorkCard';
import AwardsSection from '@/components/AwardsSection';
import ClientLogoWall from '@/components/ClientLogoWall';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { SECTORS } from '@/lib/data/sectors';
import { getFeaturedWork } from '@/lib/data/work';
import { CIDA_GRADES, CONTACT } from '@/lib/data/site';

export default function HomePage() {
  const works = getFeaturedWork();

  return (
    <>
      <Hero />

      {/* Intro */}
      <IntroSection />

      {/* What we build */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we build"
            title="Six sectors, one standard of delivery"
            description="Design-build capability backed by an in-house engineering team and decades of site experience across Sri Lanka and the Maldives."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector, i) => (
              <Reveal key={sector.slug} delay={i * 0.05}>
                <SectorCard sector={sector} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Landmark projects"
              description="A snapshot of recent work across our sectors — from national venues to luxury resorts and power infrastructure."
            />
            <Link href="/projects" className="btn-outline">
              View all projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((w, i) => (
              <Reveal key={w.slug} delay={i * 0.05}>
                <WorkCard work={w} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & certifications */}
      <AwardsSection />

      {/* CIDA accreditation bar */}
      <section className="border-y border-brand-stone bg-white">
        <div className="container-x flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-muted">
            <ShieldCheck className="h-5 w-5 text-brand-green" aria-hidden />
            CIDA accreditation
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {CIDA_GRADES.map((c) => (
              <li key={c.sector} className="text-center">
                <span className="block text-lg font-bold text-brand-dark">CIDA {c.grade}</span>
                <span className="block text-xs uppercase tracking-wider text-brand-muted">{c.sector}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Clients */}
      <ClientLogoWall />

      {/* Contact CTA */}
      <section className="bg-brand-dark text-white">
        <div className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              dark
              eyebrow="Get in touch"
              title="Discuss your next infrastructure project"
              description="Whether you are planning a water supply scheme, road network, power facility, resort or commercial building — our team is ready to discuss your requirements."
            />
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-semibold uppercase tracking-wider text-white/45">Office</dt>
                <dd className="mt-1 text-white/85">{CONTACT.address}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wider text-white/45">Call us</dt>
                <dd className="mt-1 text-white/85">{CONTACT.phones[0]}</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wider text-white/45">Email</dt>
                <dd className="mt-1 text-white/85">{CONTACT.email}</dd>
              </div>
            </dl>
          </div>
          <ContactForm variant="dark" />
        </div>
      </section>
    </>
  );
}
