import type { Metadata } from 'next';
import { CheckCircle2, Briefcase } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import CareersForm from '@/components/CareersForm';
import Reveal from '@/components/Reveal';
import { CAREERS, ROLES } from '@/lib/data/careers';
import { META_DESCRIPTIONS, SITE } from '@/lib/data/site';
import { PAGE_IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Careers',
  description: META_DESCRIPTIONS.careers,
  alternates: { canonical: '/careers' },
  openGraph: { title: `Careers · ${SITE.shortName}`, description: META_DESCRIPTIONS.careers, url: `${SITE.url}/careers` },
};

export default function CareersPage() {
  return (
    <>
      <PageHeader eyebrow="Careers" title={CAREERS.headline} intro={CAREERS.intro} image={PAGE_IMAGES.careers} />

      {/* Why Vonlan */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Why Vonlan"
            title="A place to do your best work"
            description="We are a growing company with the backing of the Sanken Group, looking for people who share our passion for excellence."
          />
          <ul className="space-y-4">
            {CAREERS.why.map((point, i) => (
              <Reveal key={point} delay={i * 0.05}>
                <li className="flex gap-3 rounded-xl border border-brand-stone bg-white p-4 text-sm leading-relaxed text-brand-dark">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" aria-hidden />
                  <span>{point}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Roles */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Open disciplines"
            title="Roles we recruit for"
            description="We hire across engineering, commercial and support functions. Apply below, even speculatively."
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-brand-stone">
            <table className="w-full border-collapse text-left">
              <thead className="bg-brand-offwhite">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-brand-muted">Role</th>
                  <th className="hidden px-6 py-4 text-sm font-semibold uppercase tracking-wider text-brand-muted sm:table-cell">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-stone">
                {ROLES.map((role) => (
                  <tr key={role.title} className="bg-white">
                    <td className="px-6 py-4 align-top">
                      <div className="flex items-center gap-2 font-semibold text-brand-dark">
                        <Briefcase className="h-4 w-4 text-brand-green" aria-hidden />
                        {role.title}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-brand-muted sm:hidden">{role.description}</p>
                    </td>
                    <td className="hidden px-6 py-4 align-top text-sm leading-relaxed text-brand-muted sm:table-cell">
                      {role.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="section">
        <div className="container-x max-w-3xl">
          <SectionHeading
            eyebrow="Apply"
            title="Submit your application"
            description="Complete the form below and attach your CV. Our HR team reviews every application."
            align="center"
            className="mb-10"
          />
          <CareersForm />
        </div>
      </section>
    </>
  );
}
