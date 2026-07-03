import type { Metadata, Viewport } from 'next';
import { DM_Sans, Sora } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
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
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  category: 'construction',
};

export const viewport: Viewport = {
  themeColor: '#12351A',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

/**
 * Structured data graph (Organization + WebSite) for rich results and
 * answer-engine grounding. Address, contact, service area and capabilities
 * are made explicit so search/AI can confidently describe the company.
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['GeneralContractor', 'Organization'],
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      alternateName: SITE.shortName,
      url: SITE.url,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.png` },
      image: `${SITE.url}/images/hero-construction.jpg`,
      description: SITE.description,
      slogan: 'Uplifting the comforts of the nation by enhancing its infrastructure.',
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
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: CONTACT.phones[0],
        email: CONTACT.email,
        contactType: 'sales',
        areaServed: ['LK', 'MV'],
        availableLanguage: ['en', 'si', 'ta'],
      },
      areaServed: [
        { '@type': 'Country', name: 'Sri Lanka' },
        { '@type': 'Country', name: 'Maldives' },
      ],
      knowsAbout: [
        'Water supply & sewerage construction',
        'Highway & bridge construction',
        'Power plant civil works',
        'Building construction',
        'Irrigation infrastructure',
        'Airport & port infrastructure',
      ],
      award: 'National Award for Construction Performance 2015 — Civil Engineering',
      parentOrganization: { '@type': 'Organization', name: SITE.parent.name, url: SITE.parent.url },
      sameAs: [SITE.parent.url],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { '@id': `${SITE.url}/#organization` },
      inLanguage: 'en-LK',
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-green focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
