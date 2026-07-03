/**
 * The six infrastructure sectors Vonlan operates in.
 * CIDA grades and emphasis verified against the 2025 Company Profile.
 * `hasPhotos: false` sectors render as typographic "drawing-sheet" plates
 * until real photography is supplied.
 */

export type SectorSlug =
  | 'water-supply'
  | 'highways-bridges'
  | 'power-energy'
  | 'buildings'
  | 'irrigation'
  | 'sea-airport';

export type SectorIcon = 'droplets' | 'milestone' | 'zap' | 'building' | 'sprout' | 'anchor';

export interface Sector {
  slug: SectorSlug;
  name: string;
  shortName: string;
  icon: SectorIcon;
  grade: string | null;
  count: string;
  tagline: string;
  intro: string;
  scope: string[];
  metrics: string[];
  hasPhotos: boolean;
  metaTitle: string;
  metaDescription: string;
}

export const SECTORS: Sector[] = [
  {
    slug: 'water-supply',
    name: 'Water Supply & Sewerage',
    shortName: 'Water',
    icon: 'droplets',
    grade: 'CIDA C1',
    count: '33 projects',
    tagline: 'Our largest discipline — treatment, transmission, storage.',
    intro:
      "Vonlan's deepest sector. Since 2008 we have delivered more than thirty water supply and sewerage contracts across Sri Lanka and the Maldives — from treatment plants and elevated towers to hundreds of kilometres of transmission and distribution mains — working directly for the National Water Supply & Drainage Board and international engineering firms.",
    scope: [
      'Water treatment plants, intakes & pump stations',
      'Elevated towers & ground service reservoirs',
      'Transmission & distribution mains — DI, HDPE, uPVC',
      'Gravity sewerage & potable distribution networks',
      'Desalinated potable water & sewage facilities (Maldives)',
    ],
    metrics: ['33 completed contracts', 'Up to Rs 1.68 Bn single project', 'CIDA grade C1'],
    hasPhotos: false,
    metaTitle: 'Water Supply & Sewerage Construction',
    metaDescription:
      'Water supply & sewerage construction across Sri Lanka — treatment plants, towers, transmission mains. 33 projects. CIDA C1. National Water Board approved.',
  },
  {
    slug: 'highways-bridges',
    name: 'Highways & Bridges',
    shortName: 'Highways',
    icon: 'milestone',
    grade: 'CIDA C3',
    count: '8 projects',
    tagline: 'Expressway viaducts to provincial bridge networks.',
    intro:
      'From expressway viaducts on the Outer Circular Highway to a current programme of KFAED-funded bridges with the Road Development Authority, Vonlan executes technically demanding road and bridge infrastructure alongside leading international and national contractors.',
    scope: [
      'Expressway viaduct construction — RC & prestressed',
      'Bridge construction & rehabilitation (RDA / KFAED)',
      'Provincial road improvement & maintenance',
      'Road drainage, earthworks & pavements',
    ],
    metrics: ['Outer Circular Highway viaducts', '3 KFAED bridge contracts active', 'CIDA grade C3'],
    hasPhotos: false,
    metaTitle: 'Highway & Bridge Construction',
    metaDescription:
      'Highway & bridge construction in Sri Lanka — Outer Circular Highway viaducts, RDA/KFAED bridges, provincial roads. CIDA C3 graded.',
  },
  {
    slug: 'power-energy',
    name: 'Power & Energy',
    shortName: 'Power',
    icon: 'zap',
    grade: null,
    count: '9 projects',
    tagline: 'Civil works for thermal, LNG and hydropower.',
    intro:
      'Vonlan delivers civil and structural works for power generation — from the 300 MW Yugadanavi and 350 MW Sobhadanavi LNG combined-cycle plants at Kerawalapitiya to grid substations and hill-country mini-hydropower. We bring power-grade precision and deep engineering expertise.',
    scope: [
      'Civil & structural works for thermal / LNG plants',
      'Powerhouse & channel works for mini-hydropower',
      'Grid substation civil infrastructure',
      'Turbine, cooling-tower & control-building foundations',
    ],
    metrics: ['Sobhadanavi 350 MW LNG', 'Yugadanavi 300 MW CCPP', '9 completed contracts'],
    hasPhotos: true,
    metaTitle: 'Power Plant & Hydropower Civil Works',
    metaDescription:
      'Power civil works in Sri Lanka — Sobhadanavi 350MW LNG, Yugadanavi 300MW, grid substations, Kirkoswald hydro. Vonlan Constructions.',
  },
  {
    slug: 'buildings',
    name: 'Building Construction',
    shortName: 'Buildings',
    icon: 'building',
    grade: 'CIDA C1',
    count: '24 projects',
    tagline: 'Landmark, hospitality, institutional & aviation.',
    intro:
      'Our fastest-growing sector and a showcase of finish quality — luxury Maldivian resorts (Alila, Ritz-Carlton, OZO), the R. Premadasa International Cricket Stadium, the Galadari ballroom, Ladies’ College, Cargills’ distribution and retail developments, and BIA airport lounges. Individual contracts reach Rs 800 million.',
    scope: [
      'Luxury hospitality & resort construction (Maldives)',
      'Institutional, educational & sports facilities',
      'Commercial, retail & distribution developments',
      'Aviation lounges & interiors',
      'In-house design-build capability',
    ],
    metrics: ['24 projects', 'Up to Rs 804 M (Alila Maldives)', 'CIDA grade C1'],
    hasPhotos: true,
    metaTitle: 'Building Construction',
    metaDescription:
      'Building construction in Sri Lanka & Maldives — Alila & Ritz-Carlton resorts, R. Premadasa Stadium, Galadari, Cargills, BIA lounges. CIDA C1.',
  },
  {
    slug: 'irrigation',
    name: 'Irrigation',
    shortName: 'Irrigation',
    icon: 'sprout',
    grade: null,
    count: 'Capability',
    tagline: 'Channels, reservoirs & rural water infrastructure.',
    intro:
      "Vonlan's irrigation capability supports Sri Lanka's agricultural communities through channel construction, reservoir civil works and rural water distribution — applying the same engineering rigour brought to every Vonlan sector.",
    scope: [
      'Irrigation channel construction & rehabilitation',
      'Reservoir & bund civil works',
      'Rural water distribution networks',
    ],
    metrics: ['Established capability', 'Rural water infrastructure'],
    hasPhotos: false,
    metaTitle: 'Irrigation & Rural Water Infrastructure',
    metaDescription:
      'Irrigation channel construction, reservoir works and rural water distribution across Sri Lanka. Vonlan Constructions infrastructure.',
  },
  {
    slug: 'sea-airport',
    name: 'Seaports & Airports',
    shortName: 'Sea & Air',
    icon: 'anchor',
    grade: null,
    count: 'Aviation & ports',
    tagline: 'Airport infrastructure & specialist port works.',
    intro:
      'Vonlan extends to aviation and port infrastructure — delivering refurbished international lounges at Bandaranaike International Airport for Airport & Aviation Services, and drawing on established relationships with global contractors for specialist port works.',
    scope: [
      'Airport terminal lounges & interiors (BIA)',
      'Aviation ground & civil infrastructure',
      'Port & harbour civil works',
    ],
    metrics: ['BIA Araliya & Lotus lounges', 'Civil Aviation Authority', 'International partners'],
    hasPhotos: false,
    metaTitle: 'Seaport & Airport Infrastructure',
    metaDescription:
      'Airport lounge and port infrastructure in Sri Lanka — BIA Araliya & Lotus lounges, and specialist civil works with global partners.',
  },
];

export const SECTOR_MAP: Record<SectorSlug, Sector> = SECTORS.reduce(
  (acc, s) => ({ ...acc, [s.slug]: s }),
  {} as Record<SectorSlug, Sector>,
);

export function getSector(slug: string): Sector | undefined {
  return SECTOR_MAP[slug as SectorSlug];
}
