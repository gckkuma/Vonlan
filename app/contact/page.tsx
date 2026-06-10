import type { Metadata } from 'next';
import { MapPin, Phone, Printer, Mail, Building2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import DivisionContacts from '@/components/DivisionContacts';
import { CONTACT, META_DESCRIPTIONS, SITE } from '@/lib/data/site';
import { PAGE_IMAGES } from '@/lib/images';

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
        intro="Whether you are planning a water supply scheme, road network, power facility or commercial building — our team is ready to discuss your requirements and provide the technical expertise your project needs."
        image={PAGE_IMAGES.contact}
      />

      {/* Details + form */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          {/* Left: details */}
          <div>
            <SectionHeading eyebrow="Head office" title="Get in touch" />
            <dl className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-greenLight text-brand-green">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Address</dt>
                  <dd className="mt-1 text-sm text-brand-dark">{CONTACT.address}</dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-greenLight text-brand-green">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Telephone</dt>
                  <dd className="mt-1 space-y-0.5 text-sm text-brand-dark">
                    {CONTACT.phones.map((phone) => (
                      <div key={phone}>
                        <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="hover:text-brand-greenDark">
                          {phone}
                        </a>
                      </div>
                    ))}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-greenLight text-brand-green">
                  <Printer className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Fax</dt>
                  <dd className="mt-1 text-sm text-brand-dark">{CONTACT.fax}</dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-greenLight text-brand-green">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Email</dt>
                  <dd className="mt-1 text-sm text-brand-dark">
                    <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-greenDark">
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-greenLight text-brand-green">
                  <Building2 className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Registration</dt>
                  <dd className="mt-1 text-sm text-brand-dark">
                    Reg. No. {CONTACT.companyRegistration} · VAT {CONTACT.vatRegistration}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Right: form */}
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
