import type { Metadata } from 'next';
import { DM_Sans, Sora } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE, META_DESCRIPTIONS, CONTACT } from '@/lib/data/site';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Infrastructure Construction, Sri Lanka`,
    template: `%s · ${SITE.shortName}`,
  },
  description: META_DESCRIPTIONS.home,
  keywords: [
    'Vonlan Constructions',
    'Sri Lanka construction',
    'water supply construction',
    'highway construction Sri Lanka',
    'Sanken Construction subsidiary',
    'CIDA contractor',
    'infrastructure construction',
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_LK',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Infrastructure Construction, Sri Lanka`,
    description: META_DESCRIPTIONS.home,
    images: [
      {
        url: '/images/hero-construction.jpg',
        width: 2400,
        height: 1350,
        alt: 'Vonlan Constructions — infrastructure construction in Sri Lanka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: META_DESCRIPTIONS.home,
    images: ['/images/hero-construction.jpg'],
  },
  robots: { index: true, follow: true },
};

/** Organization structured data for richer search results. */
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  image: `${SITE.url}/images/hero-construction.jpg`,
  description: SITE.description,
  telephone: CONTACT.phones[0],
  faxNumber: CONTACT.fax,
  email: CONTACT.email,
  foundingDate: '2007',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No 45B, Ambatale',
    addressLocality: 'Mulleriyawa New Town',
    addressCountry: 'LK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CONTACT.coordinates.lat,
    longitude: CONTACT.coordinates.lng,
  },
  parentOrganization: { '@type': 'Organization', name: SITE.parent.name, url: SITE.parent.url },
  sameAs: [SITE.parent.url],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sora.variable}`}>
      <head>
        {/* Mark that JS is available so progressive-enhancement reveals can run. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-green focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
