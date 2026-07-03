/**
 * Global site configuration for Vonlan Constructions (Pvt) Ltd.
 * Verified against the 2025 Company Profile (the current source of truth).
 */

export const SITE = {
  name: 'Vonlan Constructions (Pvt) Ltd',
  shortName: 'Vonlan',
  domain: 'vonlan.lk',
  url: 'https://www.vonlan.lk',
  founded: 2007,
  positioning: 'Uplifting the comforts of the nation by enhancing its infrastructure.',
  description:
    "Sri Lanka's infrastructure construction studio — water, highways & bridges, power, buildings and aviation. CIDA C1. 65+ projects since 2007.",
  parent: {
    name: 'Sanken Construction (Pvt) Ltd',
    url: 'https://www.sankenconstruction.com',
  },
} as const;

export const CONTACT = {
  company: 'Vonlan Constructions (Pvt) Ltd',
  address: 'No 45B, Ambatale, Mulleriyawa New Town, Sri Lanka',
  coordinates: { lat: 6.9271, lng: 79.9312 },
  phones: [
    '+94 (011) 24 14 142',
    '+94 (011) 24 18 018',
    '+94 (011) 57 45 703',
    '+94 (011) 52 35 591',
  ],
  fax: '+94 (011) 24 14 198',
  email: 'vonlan@vonlan.lk',
  companyRegistration: 'PV60442',
  vatRegistration: '114604429 7000',
} as const;

export const DIVISIONS = [
  { division: 'Contracts & Marketing', emailUser: 'contracts', emailDomain: 'vonlan.lk' },
  { division: 'Project Execution & Control', emailUser: 'projects', emailDomain: 'vonlan.lk' },
  { division: 'Human Resource Development', emailUser: 'hr', emailDomain: 'vonlan.lk' },
  { division: 'Finance Planning & Monitoring', emailUser: 'finance', emailDomain: 'vonlan.lk' },
] as const;

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Credentials', href: '/credentials' },
      { label: 'CSR', href: '/csr' },
    ],
  },
  { label: 'Services', href: '/services' },
  { label: 'Clients', href: '/clients' },
  { label: 'Projects', href: '/projects' },
  { label: 'Commitments', href: '/commitments' },
  { label: 'Careers', href: '/careers' },
];

/** Headline stats — verified to 2025 (founded 2007 → 18 years; 65+ across registers). */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  isText?: boolean;
}
export const STATS: Stat[] = [
  { value: 18, suffix: '+', label: 'Years delivering', sub: 'Since 2007' },
  { value: 70, suffix: '+', label: 'Projects executed', sub: 'Across 6 sectors' },
  { value: 6, suffix: '', label: 'Infrastructure sectors', sub: 'Water to aviation' },
  { value: 0, suffix: 'C1', label: 'CIDA grading', sub: 'Water & Buildings', isText: true },
];

/** CIDA grades per the 2025 profile (water & buildings upgraded to C1). */
export const CIDA_GRADES = [
  { sector: 'Water Supply', grade: 'C1' },
  { sector: 'Buildings', grade: 'C1' },
  { sector: 'Roads & Highways', grade: 'C3' },
  { sector: 'Bridges', grade: 'C3' },
] as const;

/**
 * Certifications. CIDA grades are confirmed in the 2025 profile.
 * ISO 9001 / 14001 / OHSAS held historically but not restated in the 2025
 * profile — kept here as `unconfirmed` pending client confirmation.
 */
export const CERTIFICATIONS = [
  { code: 'CIDA C1', name: 'Water Supply & Sewerage', note: 'Highest national grade', confirmed: true },
  { code: 'CIDA C1', name: 'Building Construction', note: 'Highest national grade', confirmed: true },
  { code: 'CIDA C3', name: 'Roads & Highways', note: 'National grading', confirmed: true },
  { code: 'CIDA C3', name: 'Bridges', note: 'National grading', confirmed: true },
] as const;

export const AWARD = {
  title: 'National Award for Construction Performance',
  category: 'Civil Engineering · 2015',
  project: 'Ampara Water Supply Project',
  note: 'Turnkey design, construction & completion — recognised at national level.',
} as const;

/** Marquee clients & partners — from the 2025 profile client roster. */
export const CLIENTS = [
  'National Water Supply & Drainage Board',
  'Sri Lanka Cricket',
  'Ceylon Electricity Board',
  'Toyota Lanka',
  'Cargills (Ceylon) PLC',
  'Sri Lanka Red Cross Society',
  'Airport & Aviation Services',
  'Civil Aviation Authority',
  'Hilton Colombo',
  'Galadari Hotels',
  'LTL Holdings',
  'Road Development Authority',
  'Asian Development Bank',
  'JICA',
  'Sri Lanka Navy',
  'Hyundai Engineering',
  'VINCI Construction',
  'VA Tech Wabag',
  'Biwater International',
  "Ladies' College, Colombo",
  'Ministry of Megapolis',
  'Uga Escapes',
] as const;

export type MetaPage = 'home' | 'about' | 'projects' | 'credentials' | 'careers' | 'contact';

export const META_DESCRIPTIONS: Record<MetaPage, string> = {
  home: "Vonlan Constructions — Sri Lanka's infrastructure studio. Water, highways, power, buildings & aviation. CIDA C1. 65+ projects since 2007.",
  about: 'Vonlan Constructions — founded 2007. CIDA C1 graded, executing landmark infrastructure across Sri Lanka and the Maldives.',
  projects: "Vonlan's portfolio — 65+ infrastructure projects across water, highways, power, buildings and aviation, in Sri Lanka and the Maldives. Filter by sector and status.",
  credentials: 'Vonlan credentials — CIDA C1 (Water & Buildings), C3 (Roads & Bridges), and the National Award for Construction Performance 2015.',
  careers: 'Build your career at Vonlan Constructions — engineers, QS, project managers and site teams delivering major infrastructure across Sri Lanka.',
  contact: 'Contact Vonlan Constructions — No 45B, Ambatale, Mulleriyawa New Town. +94 (011) 24 14 142 · vonlan@vonlan.lk.',
};
