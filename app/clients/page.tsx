import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import ClientLogoBackdrop from '@/components/ClientLogoBackdrop';
import { findProject } from '@/lib/data/projects';
import { SITE } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'Clients',
  description:
    'Vonlan works for national authorities (NWSDB, CEB, RDA, Civil Aviation) and alongside global partners — Ritz-Carlton, Hilton, Cargills, Toyota, ADB, JICA, VINCI, Hyundai and more.',
  alternates: { canonical: '/clients' },
  openGraph: { title: `Clients · ${SITE.shortName}`, url: `${SITE.url}/clients` },
};

// slug = logo file; kw = keyword to resolve a representative project; caption = project shown.
const CLIENT_LOGOS: { slug: string; name: string; dark?: boolean; kw?: string; caption?: string }[] = [
  { slug: 'nwsdb', name: 'National Water Supply & Drainage Board', kw: 'battaramulla', caption: 'Area Engineer’s Office, Battaramulla' },
  { slug: 'ceb', name: 'Ceylon Electricity Board', kw: 'gunasinghepura', caption: 'Gunasinghepura Grid Substation' },
  { slug: 'rda', name: 'Road Development Authority', kw: 'bridge no', caption: 'KFAED bridge programme' },
  { slug: 'civil-aviation', name: 'Civil Aviation Authority', kw: 'araliya', caption: 'BIA Araliya Lounge' },
  { slug: 'sl-navy', name: 'Sri Lanka Navy' },
  { slug: 'megapolis', name: 'Ministry of Megapolis', kw: 'ocean pathway', caption: 'Ocean Pathway' },
  { slug: 'sri-lanka-cricket', name: 'Sri Lanka Cricket', kw: 'premadasa', caption: 'R. Premadasa Stadium' },
  { slug: 'red-cross', name: 'Sri Lanka Red Cross Society', kw: 'red cross', caption: 'Red Cross Society Building' },
  { slug: 'alila', name: 'Alila Kothaifaru Maldives', kw: 'alila', caption: 'Alila Kothaifaru, Maldives' },
  { slug: 'hilton', name: 'Hilton Colombo' },
  { slug: 'galadari', name: 'Galadari Hotels', kw: 'galadari', caption: 'Galadari Hotel Ballroom' },
  { slug: 'uga', name: 'Uga Escapes' },
  { slug: 'cargills', name: 'Cargills (Ceylon) PLC', kw: 'distribution cent', caption: 'Cargills Distribution Centre' },
  { slug: 'toyota', name: 'Toyota Lanka', kw: 'toyota', caption: 'Toyota Lanka facilities' },
  { slug: 'vogue', name: 'Vogue Jewellers', kw: 'vogue', caption: 'Vogue Jewellers' },
  { slug: 'adb', name: 'Asian Development Bank' },
  { slug: 'jica', name: 'JICA' },
  { slug: 'airport-aviation', name: 'Airport & Aviation Services', kw: 'araliya', caption: 'BIA Araliya & Lotus Lounges' },
  { slug: 'vatech-wabag', name: 'VA Tech Wabag', kw: 'wabag', caption: 'Water treatment works' },
  { slug: 'vinci', name: 'VINCI Construction', kw: 'kantale', caption: 'Kantale Water Treatment Plant' },
  { slug: 'hyundai', name: 'Hyundai Engineering', kw: 'polonnaruwa water', caption: 'Polonnaruwa Water Supply' },
  { slug: 'biwater', name: 'Biwater International', kw: 'hithadhoo', caption: 'Hithadhoo Water & Sewerage' },
  { slug: 'catic', name: 'CATIC', kw: 'palawatta', caption: 'Palawatta–Morawaka Road' },
  { slug: 'ladies-college', name: "Ladies' College, Colombo", kw: 'mabel', caption: "Mabel Simon Hall" },
  { slug: 'sujatha', name: 'Sujatha Vidyalaya', kw: 'sujatha', caption: 'Sujatha Vidyalaya School' },
  { slug: 'adhitya', name: 'Adhitya Ayurveda', kw: 'ayurv', caption: 'Adhitya Ayurveda Centre' },
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
        backdrop={<ClientLogoBackdrop />}
      />

      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our clients"
            title="Direct for authorities, alongside global leaders"
            description="Select a client to view the project we delivered for them."
          />
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {CLIENT_LOGOS.map((c) => {
              const project = c.kw ? findProject(c.kw) : undefined;
              const href = project ? `/projects/${project.slug}` : '/projects';
              return (
                <li key={c.slug}>
                  <Link
                    href={href}
                    className="group block overflow-hidden rounded-2xl border border-brand-stone bg-white transition-all duration-200 hover:-translate-y-1 hover:border-brand-green hover:shadow-lg hover:shadow-brand-green/5"
                  >
                    <div className={`flex min-h-[120px] items-center justify-center p-8 ${c.dark ? 'bg-brand-dark' : 'bg-white'}`}>
                      <span className="relative block h-12 w-full">
                        <Image src={`/images/clients/${c.slug}.png`} alt={c.name} fill sizes="200px" className="object-contain" />
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2 border-t border-brand-stone px-4 py-3">
                      <span className="truncate text-xs font-medium text-brand-muted">
                        {c.caption ?? c.name}
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-stone transition-colors group-hover:text-brand-green" aria-hidden />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-sm text-brand-muted">
            Includes work delivered for the Ritz-Carlton Maldives and with Suez International (France).
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
