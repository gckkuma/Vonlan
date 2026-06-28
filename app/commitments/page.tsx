import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, GraduationCap, BadgeCheck, Leaf, HeartHandshake, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { POLICIES } from '@/lib/data/about';
import { CSR } from '@/lib/data/credentials';
import { SITE } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'Commitments',
  description:
    'Vonlan’s commitments — safety excellence, staff development, ISO 9001 quality assurance, ISO 14001 environmental responsibility, and corporate social responsibility.',
  alternates: { canonical: '/commitments' },
  openGraph: { title: `Commitments · ${SITE.shortName}`, url: `${SITE.url}/commitments` },
};

const COMMITMENTS = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    body: 'Ensuring safety in every aspect of our projects is paramount. From comprehensive risk assessments to meticulous planning and execution, we prioritise the well-being of our team members, clients and the communities in which we operate — fostering a culture of safety excellence at every stage, from inception to completion.',
    points: ['OHSAS 18001:2007 certified', 'Project-wide risk assessment', 'Method statements for every work package'],
  },
  {
    icon: GraduationCap,
    title: 'Staff Development',
    body: 'We recognise that the cornerstone of our success is our workforce. We nurture the talents of our employees through a comprehensive array of training programmes and workshops — from technical training to leadership development — providing opportunities for growth and advancement.',
    points: ['Technical & leadership training', 'Ongoing performance review', 'Lifelong career development'],
  },
  {
    icon: BadgeCheck,
    title: POLICIES.quality.title,
    body: POLICIES.quality.body,
    points: POLICIES.quality.points,
  },
  {
    icon: Leaf,
    title: POLICIES.environmental.title,
    body: POLICIES.environmental.body[0],
    points: ['3R concept — Reduce, Reuse, Recycle', 'ISO 14001 certified since 2013', 'Consistent standards across all sites'],
  },
];

export default function CommitmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Commitments"
        title="Built on safety, people and responsibility"
        intro="Beyond delivery, Vonlan is committed to the safety of every site, the growth of every employee, the quality of every handover, and the communities we serve."
        image="/images/work/premadasa-stadium.jpg"
      />

      {/* Commitments grid */}
      <section className="section">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {COMMITMENTS.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.05}>
              <div className="flex h-full flex-col rounded-3xl border border-brand-stone bg-white p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-greenLight text-brand-green">
                  <c.icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-bold text-brand-dark">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-brand-muted">{c.body}</p>
                <ul className="mt-5 space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm font-medium text-brand-dark">
                      <Check className="h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CSR */}
      <section className="section bg-brand-dark text-white">
        <div className="container-x">
          <SectionHeading
            dark
            eyebrow="Corporate social responsibility"
            title="Serving society & the people"
            description={CSR.intro}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {CSR.items.map((item) => (
              <Reveal key={item.title}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                  <HeartHandshake className="h-7 w-7 text-brand-green" aria-hidden />
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="container-x flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-xl text-2xl font-bold text-brand-dark sm:text-3xl">
            Work with a contractor that does it right
          </h2>
          <Link href="/contact" className="btn-green">
            Get in touch <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
