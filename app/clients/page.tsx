import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import { SITE } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'Clients',
  description:
    'Vonlan works for national authorities (NWSDB, CEB, RDA, Civil Aviation) and alongside global partners — Ritz-Carlton, Hilton, Cargills, Toyota, ADB, JICA, VINCI, Hyundai and more.',
  alternates: { canonical: '/clients' },
  openGraph: { title: `Clients · ${SITE.shortName}`, url: `${SITE.url}/clients` },
};

const CLIENT_LOGOS: { slug: string; name: string; dark?: boolean }[] = [
  { slug: 'nwsdb', name: 'National Water Supply & Drainage Board' },
  { slug: 'ceb', name: 'Ceylon Electricity Board' },
  { slug: 'rda', name: 'Road Development Authority' },
  { slug: 'civil-aviation', name: 'Civil Aviation Authority of Sri Lanka' },
  { slug: 'sl-navy', name: 'Sri Lanka Navy' },
  { slug: 'megapolis', name: 'Ministry of Megapolis & Western Development' },
  { slug: 'sri-lanka-cricket', name: 'Sri Lanka Cricket' },
  { slug: 'red-cross', name: 'Sri Lanka Red Cross Society' },
  { slug: 'alila', name: 'Alila Kothaifaru Maldives' },
  { slug: 'hilton', name: 'Hilton Colombo' },
  { slug: 'galadari', name: 'Galadari Hotels' },
  { slug: 'uga', name: 'Uga Escapes' },
  { slug: 'cargills', name: 'Cargills (Ceylon) PLC', dark: true },
  { slug: 'toyota', name: 'Toyota Lanka' },
  { slug: 'vogue', name: 'Vogue Jewellers' },
  { slug: 'adb', name: 'Asian Development Bank' },
  { slug: 'jica', name: 'JICA', dark: true },
  { slug: 'airport-aviation', name: 'Airport & Aviation Services', dark: true },
  { slug: 'vatech-wabag', name: 'VA Tech Wabag' },
  { slug: 'vinci', name: 'VINCI Construction' },
  { slug: 'hyundai', name: 'Hyundai Engineering' },
  { slug: 'biwater', name: 'Biwater International' },
  { slug: 'catic', name: 'CATIC' },
  { slug: 'ltl', name: 'LTL Holdings' },
  { slug: 'ladies-college', name: "Ladies' College, Colombo" },
  { slug: 'sujatha', name: 'Sujatha Vidyalaya' },
  { slug: 'adhitya', name: 'Adhitya Ayurveda' },
  { slug: 'nuga-rosmead', name: 'Nuga Rosmead' },
  { slug: 'dic', name: 'DIC Lanka' },
];

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Clients & partners"
        title="Trusted by those who build the nation"
        intro="From national authorities to global hospitality, engineering and development organisations — Vonlan is the execution partner behind landmark infrastructure across Sri Lanka and the Maldives."
        image="/images/work/araliya-lounge.jpg"
      />

      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our clients"
            title="Direct for authorities, alongside global leaders"
            description="We work directly for Sri Lanka's national authorities and in partnership with leading international contractors and brands."
          />
          <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-brand-stone bg-brand-stone sm:grid-cols-3 lg:grid-cols-4">
            {CLIENT_LOGOS.map((c) => (
              <li
                key={c.slug}
                className={`flex min-h-[130px] items-center justify-center p-8 ${c.dark ? 'bg-brand-dark' : 'bg-white'}`}
                title={c.name}
              >
                <span className="relative block h-12 w-full">
                  <Image src={`/images/clients/${c.slug}.png`} alt={c.name} fill sizes="200px" className="object-contain" />
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-brand-muted">
            Logos shown are a selection of Vonlan’s clients and project partners. Includes work
            delivered for the Ritz-Carlton Maldives and with Suez International (France).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white">
        <div className="container-x flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-xl text-2xl font-bold sm:text-3xl">Become our next valued client</h2>
          <Link href="/contact" className="btn-green">
            Start a conversation <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
