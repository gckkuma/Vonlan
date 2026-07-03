/**
 * Curated "Selected Works" for the homepage — flagship projects with real
 * photography from the 2025 profile and exact LKR values from the registers.
 * (The full ~74-project portfolio lives in projects.json.)
 */
import type { SectorSlug } from './sectors';

export interface Work {
  slug: string;
  /** Keyword used to resolve the real register project this card links to. */
  match: string;
  name: string;
  client: string;
  sector: SectorSlug;
  value?: string;
  year: string;
  status: 'Completed' | 'Ongoing';
  location: string;
  overseas?: boolean;
  blurb: string;
  images: string[]; // under /images/work/
  featured?: boolean;
}

export const WORK: Work[] = [
  {
    slug: 'sobhadanavi-power-station',
    match: 'sobhadanavi',
    name: 'Sobhadanavi 350 MW LNG Power Station',
    client: 'LTL Projects (Pvt) Ltd',
    sector: 'power-energy',
    value: '350 MW · Civil works',
    year: '2025',
    status: 'Completed',
    location: 'Kerawalapitiya',
    blurb:
      'Civil and structural works for a 350 MW LNG combined-cycle power station — power-grade precision on one of the country’s most significant new energy assets.',
    images: ['sobhadanavi-power-1'],
    featured: true,
  },
  {
    slug: 'polonnaruwa-water-supply',
    match: 'polonnaruwa water',
    name: 'Polonnaruwa Water Supply Project',
    client: 'National Water Supply & Drainage Board',
    sector: 'water-supply',
    value: 'Rs 1.68 Bn',
    year: '2012',
    status: 'Completed',
    location: 'Polonnaruwa',
    blurb:
      'A major district water-supply scheme — head works, raw-water transmission and treatment — delivered in joint venture with Hyundai Engineering.',
    images: ['live-polonnaruwa-wsp'],
    featured: true,
  },
  {
    slug: 'outer-circular-highway-viaduct',
    match: 'outer circular',
    name: 'Outer Circular Highway — Viaduct 2',
    client: 'Taisei Corporation',
    sector: 'highways-bridges',
    value: 'Rs 1.06 Bn',
    year: '2015',
    status: 'Completed',
    location: 'Colombo',
    blurb:
      'Expressway-grade civil and structural works for a major viaduct on Colombo’s Outer Circular Highway, delivered for Taisei Corporation.',
    images: ['live-och-viaduct2'],
    featured: true,
  },
  {
    slug: 'premadasa-stadium',
    match: 'premadasa',
    name: 'R. Premadasa International Cricket Stadium',
    client: 'Sri Lanka Cricket',
    sector: 'buildings',
    value: 'Rs 394 M',
    year: '2021',
    status: 'Completed',
    location: 'Khettarama, Colombo',
    blurb:
      'A total refurbishment of the national stadium — upgraded pavilions, lighting and spectator enclosures with a significant increase in seating capacity.',
    images: ['premadasa-stadium'],
    featured: true,
  },
  {
    slug: 'alila-kothaifaru-maldives',
    match: 'alila',
    name: 'Alila Kothaifaru, Maldives',
    client: 'Ballentine (Pvt) Ltd',
    sector: 'buildings',
    value: 'Rs 804 M',
    year: '2021',
    status: 'Completed',
    location: 'Raa Atoll, Maldives',
    overseas: true,
    blurb:
      'A two-year island build of beach and overwater villas — our highest-value building contract, executed to exacting luxury-hospitality standards.',
    images: ['alila-villa-dusk'],
    featured: true,
  },
  {
    slug: 'ritz-carlton-maldives',
    match: 'ritz',
    name: 'The Ritz-Carlton Maldives, Fari Island',
    client: 'CPRC Maldives (Pvt) Ltd',
    sector: 'buildings',
    value: 'Rs 43.2 M',
    year: '2021',
    status: 'Completed',
    location: 'Fari Island, Maldives',
    overseas: true,
    blurb:
      'Beach pool villas, water villas and back-of-house buildings for a flagship Ritz-Carlton resort — opulence and functionality in every detail.',
    images: ['ritz-carlton-villa'],
    featured: true,
  },
];

export const getFeaturedWork = () => WORK.filter((w) => w.featured);
export const workImage = (file: string) => `/images/work/${file}.jpg`;
