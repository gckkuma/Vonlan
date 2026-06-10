/**
 * Global site configuration for Vonlan Constructions (Pvt) Ltd.
 * Single source of truth for navigation, contact details, stats and certifications.
 * Content sourced from the Vonlan Website Content Pack (June 2025).
 */

export const SITE = {
  name: 'Vonlan Constructions (Pvt) Ltd',
  shortName: 'Vonlan',
  domain: 'vonlan.lk',
  url: 'https://www.vonlan.lk',
  tagline: 'Passion for excellence since 2007',
  description:
    "Sri Lanka's trusted infrastructure contractor. Water supply, highways, power and buildings. ISO certified. 50+ projects delivered since 2007.",
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
  bankers: [
    'Commercial Bank of Ceylon PLC',
    'Bank of Ceylon',
    'Hatton National Bank PLC',
    "People's Bank",
  ],
  auditors: 'Jayasinghe & Company',
  secretaries: 'G W Secretaries & Accountants (Pvt) Ltd',
} as const;

/**
 * Division contacts. Emails are stored split (user/domain) so they can be
 * assembled client-side on click — never rendered as plain-text mailto links,
 * to deter spam harvesters (per the content pack instruction).
 */
export const DIVISIONS = [
  { division: 'Contracts & Marketing', person: 'Division Head', emailUser: 'contracts', emailDomain: 'vonlan.lk' },
  { division: 'Project Execution & Control', person: 'Division Head', emailUser: 'projects', emailDomain: 'vonlan.lk' },
  { division: 'Human Resource Development', person: 'Division Head', emailUser: 'hr', emailDomain: 'vonlan.lk' },
  { division: 'Finance Planning & Monitoring', person: 'Division Head', emailUser: 'finance', emailDomain: 'vonlan.lk' },
] as const;

export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services/water-supply' },
  { label: 'Projects', href: '/projects' },
  { label: 'Credentials', href: '/credentials' },
  { label: 'Careers', href: '/careers' },
] as const;

export const STATS = [
  { value: '17+', label: 'Years active' },
  { value: '50+', label: 'Projects delivered' },
  { value: '6', label: 'Sectors served' },
  { value: 'ISO', label: '9001 · 14001 · OHSAS' },
] as const;

export const CERTIFICATIONS = [
  {
    code: 'ISO 9001:2015',
    name: 'Quality Management System',
    scope:
      'Construction and maintenance of civil engineering infrastructure — water supply, roads, highways, power & buildings',
    since: '2017',
  },
  {
    code: 'ISO 14001:2004',
    name: 'Environmental Management System',
    scope: 'All project and operational activities',
    since: 'Since 2013',
  },
  {
    code: 'OHSAS 18001:2007',
    name: 'Occupational Health & Safety Management System',
    scope: 'Water Supply & Drainage, Road & Highway projects',
    since: 'Active',
  },
  {
    code: 'CIDA C2',
    name: 'Construction Industry Development Authority',
    scope: 'Water Supply sector grading',
    since: 'Active',
  },
  {
    code: 'CIDA C3',
    name: 'Construction Industry Development Authority',
    scope: 'Highways, Bridges, Irrigation & Buildings grading',
    since: 'Active',
  },
  {
    code: 'NCASL Member',
    name: 'National Chamber — Major & Specialist Constructors',
    scope: 'Full member',
    since: 'Active',
  },
] as const;

/** Compact cert bar used on the homepage and footer. */
export const CERT_BAR = ['ISO 9001:2015', 'ISO 14001:2004', 'OHSAS 18001:2007', 'CIDA Registered'] as const;

/**
 * Marquee clients and international partners Vonlan has delivered for —
 * sourced from the project database. Used in the "Trusted by" credibility strip.
 */
export const CLIENTS = [
  'National Water Supply & Drainage Board',
  'Sanken Construction',
  'Toyota Lanka',
  'Sri Lanka Red Cross Society',
  'Hyundai Engineering',
  'Taisei Corporation',
  'VINCI Construction',
  'Biwater',
  'VA TECH WABAG',
  'Hitachi Plant Technologies',
  'LTL Projects',
  'State Engineering Corporation',
] as const;

export type MetaPage =
  | 'home'
  | 'about'
  | 'projects'
  | 'credentials'
  | 'careers'
  | 'contact';

/** Meta descriptions from the content pack (each ≤ 160 chars). */
export const META_DESCRIPTIONS: Record<MetaPage, string> = {
  home:
    "Vonlan Constructions — Sri Lanka's trusted infrastructure contractor. Water supply, highways, power, buildings. ISO certified. 50+ projects delivered since 2007.",
  about:
    'Learn about Vonlan Constructions — incorporated 2007, wholly-owned Sanken subsidiary, ISO 9001/14001/OHSAS certified, CIDA registered infrastructure contractor.',
  projects:
    "Browse Vonlan's portfolio of 50+ infrastructure projects — water supply, highways, power, and buildings across Sri Lanka. Filterable by sector and status.",
  credentials:
    'ISO 9001:2015, ISO 14001, OHSAS 18001. National Award for Construction Performance 2015. CIDA C2/C3. National Business Excellence Award 2014 runner-up.',
  careers:
    'Build your career at Vonlan Constructions. We recruit Civil Engineers, QS, Project Managers and Site Supervisors for major Sri Lanka infrastructure projects.',
  contact:
    'Contact Vonlan Constructions — No 45B, Ambatale, Mulleriyawa New Town. Tel: +94 (011) 24 14 142. Email: vonlan@vonlan.lk. Discuss your next project.',
};
