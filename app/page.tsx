import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Hero from '@/components/Hero';
import SectorCard from '@/components/SectorCard';
import FeaturedProjectCard from '@/components/FeaturedProjectCard';
import AwardBlock from '@/components/AwardBlock';
import ClientStrip from '@/components/ClientStrip';
import NewsItem from '@/components/NewsItem';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { SECTORS } from '@/lib/data/sectors';
import { getFeaturedProjects } from '@/lib/data/projects';
import { NEWS } from '@/lib/data/news';
import { CERT_BAR, CONTACT } from '@/lib/data/site';

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* 2. Hero (with inline stats) */}
      <Hero />

      {/* 4. Sectors grid */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we build"
            title="Six sectors, one standard of delivery"
            description="Design-build capability backed by an in-house engineering team and decades of site experience across Sri Lanka."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector, i) => (
              <Reveal key={sector.slug} delay={i * 0.05}>
                <SectorCard sector={sector} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by — clients & partners */}
      <ClientStrip />

      {/* 5. Featured projects */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Landmark projects"
              description="A snapshot of high-value contracts delivered across our sectors."
            />
            <Link href="/projects" className="btn-outline">
              View all projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06}>
                <FeaturedProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Award feature */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <AwardBlock
              title="National Awards for Construction Performance 2015 — Civil Engineering"
              body="Design, construction and completion (Turnkey) of the Ampara Water Supply Project. Recognised at national level for project scale, quality of delivery and outstanding technical execution."
              meta="~LKR 757 Million project"
            />
          </Reveal>
        </div>
      </section>

      {/* 7. Certifications bar */}
      <section className="border-y border-brand-stone bg-white">
        <div className="container-x flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-muted">
            <ShieldCheck className="h-5 w-5 text-brand-green" aria-hidden />
            Certified to international standards
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {CERT_BAR.map((cert) => (
              <li key={cert} className="text-base font-bold text-brand-dark">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. News & events */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <SectionHeading
            eyebrow="News & events"
            title="The latest from Vonlan"
            description="Project awards, completions and milestones across our active sectors."
          />
          <div>
            {NEWS.map((item) => (
              <NewsItem key={item.headline} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact CTA */}
      <section className="relative isolate overflow-hidden bg-brand-dark text-white">
        <div className="bp-grid bp-grid-fade absolute inset-0" aria-hidden />
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-green/15 blur-[120px]" aria-hidden />
        <div className="container-x relative grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow-line">Get in touch</span>
            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
              Discuss your next infrastructure project
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/65">
              Whether you are planning a water supply scheme, road network, power facility or commercial
              building — our team is ready to discuss your requirements and provide the technical expertise
              your project needs.
            </p>
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
