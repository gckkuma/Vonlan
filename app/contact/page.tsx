import type { Metadata } from 'next';
import { MapPin, Phone, Printer, Mail, Building2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import DivisionContacts from '@/components/DivisionContacts';
import { CONTACT, META_DESCRIPTIONS, SITE } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: META_DESCRIPTIONS.contact,
  alternates: { canonical: '/contact' },
  openGraph: { title: `Contact · ${SITE.shortName}`, description: META_DESCRIPTIONS.contact, url: `${SITE.url}/contact` },
};

const mapSrc = `https://www.google.com/maps?q=${CONTACT.coordinates.lat},${CONTACT.coordinates.lng}&z=15&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Discuss your next infrastructure project"
        intro="Whether you are planning a water supply scheme, road network, power facility, resort or commercial building — our team is ready to discuss your requirements and provide the technical expertise your project needs."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          {/* Details */}
          <div>
            <SectionHeading eyebrow="Head office" title="Get in touch" />
            <dl className="mt-8 space-y-6">
              <Detail icon={MapPin} label="Address">{CONTACT.address}</Detail>
              <Detail icon={Phone} label="Telephone">
                {CONTACT.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/[^+\d]/g, '')}`} className="block hover:text-brand-greenDark">
                    {p}
                  </a>
                ))}
              </Detail>
              <Detail icon={Printer} label="Fax">{CONTACT.fax}</Detail>
              <Detail icon={Mail} label="Email">
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-greenDark">{CONTACT.email}</a>
              </Detail>
              <Detail icon={Building2} label="Registration">
                Reg. No. {CONTACT.companyRegistration} · VAT {CONTACT.vatRegistration}
              </Detail>
            </dl>
          </div>

          {/* Form */}
          <ContactForm variant="light" />
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 sm:pb-24">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-brand-stone">
            <iframe
              title="Vonlan Constructions — Ambatale, Mulleriyawa New Town"
              src={mapSrc}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Division contacts */}
      <section className="section bg-white pt-0">
        <div className="container-x max-w-3xl">
          <SectionHeading
            eyebrow="Departments"
            title="Division contacts"
            description="Reach a specific division directly. Email addresses are revealed on click to deter spam."
          />
          <div className="mt-8">
            <DivisionContacts />
          </div>
        </div>
      </section>
    </>
  );
}

function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-greenLight text-brand-green">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-wider text-brand-muted">{label}</dt>
        <dd className="mt-1 text-sm text-brand-dark">{children}</dd>
      </div>
    </div>
  );
}
