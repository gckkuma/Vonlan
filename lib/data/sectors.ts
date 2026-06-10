/**
 * The six sectors Vonlan operates in. Used by the homepage sector grid,
 * the dynamic /services/[sector] pages, the projects filter and navigation.
 * Content sourced from the Vonlan Website Content Pack (June 2025).
 */

export type SectorSlug =
  | 'water-supply'
  | 'highways-bridges'
  | 'power-energy'
  | 'buildings'
  | 'irrigation'
  | 'sea-airport';

/** Lucide icon name keys, mapped to components in components/SectorIcon.tsx */
export type SectorIcon =
  | 'droplets'
  | 'milestone'
  | 'zap'
  | 'building'
  | 'sprout'
  | 'anchor';

export interface Sector {
  slug: SectorSlug;
  name: string;
  /** Short label for filter pills and compact UI */
  shortName: string;
  icon: SectorIcon;
  cardDescription: string;
  projectCount: string;
  headline: string;
  intro: string;
  scope: string[];
  metrics: string[];
  featuredProjectNames: string[];
  certCallout: { title: string; body: string };
  metaTitle: string;
  metaDescription: string;
  noteToClient?: string;
}

export const SECTORS: Sector[] = [
  {
    slug: 'water-supply',
    name: 'Water Supply & Sewerage',
    shortName: 'Water',
    icon: 'droplets',
    cardDescription:
      'Design, construction and commissioning of water treatment plants, transmission mains, distribution networks and elevated storage towers.',
    projectCount: '31 projects completed',
    headline: 'Water supply & sewerage',
    intro:
      "Vonlan's single largest sector by project volume. Since 2008, we have delivered over 20 completed water supply and sewerage projects across Sri Lanka — from elevated storage towers serving rural communities to large-scale treatment plants handling tens of thousands of cubic metres per day. We work directly for the National Water Supply & Drainage Board, international engineering firms, and overseas clients.",
    scope: [
      'Design and construction of water intake structures and treatment plants',
      'Elevated water towers and ground-level service reservoirs',
      'Transmission mains — ductile iron, HDPE, and PVC pipelines',
      'Water distribution networks across urban and rural areas',
      'Pump houses, booster stations, and associated mechanical works',
      'Gravity sewerage networks and sewage collection systems',
      'Portable water distribution systems (overseas projects: Maldives)',
    ],
    metrics: [
      '20+ completed water supply projects',
      'Largest single project value: Rs 3,300 Million',
      'CIDA grading C2 for Water Supply',
    ],
    featuredProjectNames: [
      'Ampara Water Supply Project — Turnkey Design & Build',
      'Polonnaruwa Water Supply Project',
      'Panama Water Supply Project — 1000m³ Tower, 37km T&D',
    ],
    certCallout: {
      title: 'CIDA C2 — Water Supply',
      body: 'Highest grading Vonlan holds, reflecting our depth of experience across treatment, transmission and distribution. Backed by ISO 9001:2015 quality systems on every scheme.',
    },
    metaTitle: 'Water Supply & Sewerage Construction',
    metaDescription:
      'Water supply and sewerage construction across Sri Lanka. Treatment plants, transmission mains, elevated towers. 20+ projects. National Water Board approved.',
  },
  {
    slug: 'highways-bridges',
    name: 'Highways & Bridges',
    shortName: 'Highways',
    icon: 'milestone',
    cardDescription:
      'Road improvement, viaduct construction and bridge works across Sri Lanka, including major expressway contracts.',
    projectCount: '6 projects completed',
    headline: 'Highways & bridges',
    intro:
      "From rural road improvement programmes to major expressway contracts, Vonlan has delivered highway and bridge projects totalling over Rs 2,000 million. Our work on the Outer Circular Highway — including Viaduct 2 (Rs 1,057M) and Viaducts 14 & 15 (Rs 513M) — demonstrates our capability to execute high-value, technically demanding road infrastructure alongside leading international contractors.",
    scope: [
      'Expressway viaduct construction — reinforced concrete and prestressed works',
      'Rural road improvement and provincial road rehabilitation',
      'Bridge construction and pipe bridge installation',
      'Road drainage and earthworks',
      'Road surface and pavement works',
    ],
    metrics: [
      '6 completed highway and bridge projects',
      'Largest project: Rs 1,057 Million',
      'CIDA grading C3',
    ],
    featuredProjectNames: [
      'Outer Circular Highway — Viaduct 2',
      'Outer Circular Highway — Viaducts 14 & 15',
      'Provincial Road Improvement Project — Dambulla',
    ],
    certCallout: {
      title: 'CIDA C3 — Highways & Bridges',
      body: 'Registered for high-value road and bridge contracts, with OHSAS 18001 occupational health & safety systems applied across all road and highway projects.',
    },
    metaTitle: 'Highway & Bridge Construction',
    metaDescription:
      'Highway and bridge construction in Sri Lanka. Outer Circular Highway viaducts, provincial roads, bridge works. CIDA C3 graded. Rs 1B+ project experience.',
  },
  {
    slug: 'power-energy',
    name: 'Power & Energy',
    shortName: 'Power',
    icon: 'zap',
    cardDescription:
      'Power plant civil works, mini hydropower construction, and substation infrastructure.',
    projectCount: '6 projects completed',
    headline: 'Power & energy',
    intro:
      "Vonlan has delivered civil and structural works for power generation facilities, including a 300 MW thermal power plant and two mini hydropower projects in the hill country. Working alongside Sanken's in-house engineering expertise, we bring precision construction to energy infrastructure that demands the highest standards of quality and safety.",
    scope: [
      'Civil and structural works for thermal power plants',
      'Powerhouse construction for mini and micro hydropower schemes',
      'Hydropower channel construction — lined concrete channels',
      'Substation and electrical infrastructure civil works',
      'Uma Oya Multipurpose Development Project works',
    ],
    metrics: [
      '6 completed power & energy projects',
      'Kerawalapitiya Power Plant 300 MW (Rs 290M)',
    ],
    featuredProjectNames: [
      'Kerawalapitiya Power Plant — 300 MW',
      'Kirkoswald Mini Hydro Power Project — Power House',
      'Kirkoswald Mini Hydropower Project — Channel',
    ],
    certCallout: {
      title: 'Engineering depth from the Sanken Group',
      body: "Power projects draw on parent company Sanken's specialist engineering expertise, delivered under Vonlan's ISO 9001:2015 quality and OHSAS 18001 safety frameworks.",
    },
    metaTitle: 'Power Plant & Hydropower Civil Works',
    metaDescription:
      'Power plant civil works and mini hydropower construction. Kerawalapitiya 300MW plant, Kirkoswald hydro project. Vonlan Constructions, Sri Lanka.',
  },
  {
    slug: 'buildings',
    name: 'Buildings',
    shortName: 'Buildings',
    icon: 'building',
    cardDescription:
      'Commercial, institutional and industrial buildings — from design-build to fit-out.',
    projectCount: '9 completed · 5 ongoing',
    headline: 'Buildings',
    intro:
      'Since diversifying into building construction in 2015, Vonlan has completed nine buildings and has five ongoing — working for clients including Toyota Lanka, the Sri Lanka Red Cross, and the Sugathadasa National Sports Complex. Our portfolio spans commercial showrooms, institutional buildings, school buildings and industrial facilities, with individual project values reaching Rs 685 million.',
    scope: [
      'Commercial buildings — showrooms, office buildings, service centres',
      'Institutional and educational buildings',
      'Industrial and factory buildings — construction and refurbishment',
      'Sports and recreational facility construction and renovation',
      "Design-build capability through Sanken's in-house design team",
    ],
    metrics: [
      '9 completed buildings',
      '5 ongoing',
      'Largest ongoing project: Rs 685 Million (Red Cross Building)',
    ],
    featuredProjectNames: [
      'Red Cross Building',
      'School Building for Sujatha Vidyalaya',
      'New Service Building — Toyota Lanka (Pvt) Ltd, Negombo',
    ],
    certCallout: {
      title: 'CIDA C3 — Buildings',
      body: "Design-build capability through Sanken's in-house design team, delivered to ISO 9001:2015 quality standards and international brand requirements.",
    },
    metaTitle: 'Commercial & Institutional Building Construction',
    metaDescription:
      'Commercial and institutional building construction in Sri Lanka. Toyota Lanka, Red Cross, Sugathadasa Arena. ISO certified. Design-build capability.',
  },
  {
    slug: 'irrigation',
    name: 'Irrigation',
    shortName: 'Irrigation',
    icon: 'sprout',
    cardDescription:
      'Irrigation channel construction, reservoir works, and rural water infrastructure.',
    projectCount: 'Active capability',
    headline: 'Irrigation',
    intro:
      "Vonlan's irrigation capability supports Sri Lanka's agricultural communities through construction of irrigation channels, rural water distribution systems, and related civil works. As one of our established sectors under CIDA C3 grading, we apply the same rigour to irrigation infrastructure that we bring to all our projects.",
    scope: [
      'Irrigation channel construction and rehabilitation',
      'Rural water distribution networks',
      'Reservoir and bund civil works',
      'CIDA C3 graded for Irrigation',
    ],
    metrics: ['CIDA grading C3 for Irrigation', 'Rural water infrastructure capability'],
    featuredProjectNames: [],
    certCallout: {
      title: 'CIDA C3 — Irrigation',
      body: 'Registered for irrigation civil works and channel construction, applying the same ISO 9001:2015 quality standards used across all Vonlan sectors.',
    },
    metaTitle: 'Irrigation & Rural Water Infrastructure',
    metaDescription:
      'Irrigation channel construction, reservoir works and rural water distribution across Sri Lanka. CIDA C3 graded. Vonlan Constructions infrastructure.',
    noteToClient:
      'Specific irrigation project names and values will be added as Vonlan supplies them from company records.',
  },
  {
    slug: 'sea-airport',
    name: 'Sea & Airport',
    shortName: 'Sea & Airport',
    icon: 'anchor',
    cardDescription: 'Port and airport support infrastructure construction.',
    projectCount: 'Active capability',
    headline: 'Sea & airport',
    intro:
      "Vonlan's capabilities extend to port and airport infrastructure construction, drawing on parent company Sanken's long experience in these specialist sectors. We have both the CIDA registration and the technical relationships — with international partners including Ballast Nedam, Vinci, and Hyundai Engineering — to support port and aviation infrastructure projects.",
    scope: [
      'Airport civil and ground infrastructure works',
      'Port and harbour civil construction',
      'Specialist civil works in partnership with international contractors',
    ],
    metrics: [
      'International contractor partnerships',
      'Sanken Group specialist experience',
    ],
    featuredProjectNames: [],
    certCallout: {
      title: 'Partnerships with global contractors',
      body: 'Technical relationships with international partners including Ballast Nedam, Vinci and Hyundai Engineering support specialist port and aviation infrastructure works.',
    },
    metaTitle: 'Sea & Airport Infrastructure',
    metaDescription:
      "Port and airport support infrastructure construction in Sri Lanka, drawing on Sanken Group experience and international contractor partnerships.",
    noteToClient:
      'Specific sea and airport project examples will be added as Vonlan confirms them from company records.',
  },
];

export const SECTOR_MAP: Record<SectorSlug, Sector> = SECTORS.reduce(
  (acc, s) => ({ ...acc, [s.slug]: s }),
  {} as Record<SectorSlug, Sector>,
);

export function getSector(slug: string): Sector | undefined {
  return SECTOR_MAP[slug as SectorSlug];
}
