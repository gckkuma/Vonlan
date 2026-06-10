/**
 * Complete project database for Vonlan Constructions.
 * Sourced from the 2018 company brochure via the Vonlan Website Content Pack.
 * Values in Sri Lankan Rupees (Millions). Rich case-study copy is attached to
 * priority projects via the `caseStudy` field; every project still gets a
 * detail page at /projects/[slug].
 */

import type { SectorSlug } from './sectors';

export type ProjectStatus = 'Completed' | 'Ongoing';

export interface CaseStudy {
  /** Overview paragraphs */
  overview: string[];
  /** Detailed scope-of-work bullets (optional for summary case studies) */
  scope?: string[];
  /** Number of placeholder gallery tiles to render */
  galleryCount: number;
  /** Photo brief from the content pack, shown as a muted caption */
  photoBrief?: string;
}

export interface Project {
  slug: string;
  name: string;
  client: string;
  /** Display value, e.g. "Rs 3,300M". Undefined when not on record. */
  value?: string;
  /** Numeric value in millions, for sorting. */
  valueM?: number;
  /** Display year/period, e.g. "Jan 2012" or "Ongoing". */
  year?: string;
  status: ProjectStatus;
  sector: SectorSlug;
  location?: string;
  /** National award note, if any. */
  award?: string;
  featured?: boolean;
  caseStudy?: CaseStudy;
}

export const PROJECTS: Project[] = [
  // ───────────────────────────── Water Supply & Sewerage ─────────────────────────────
  {
    slug: 'polonnaruwa-water-supply',
    name: 'Polonnaruwa Water Supply Project',
    client: 'Hyundai Engineering Co Ltd',
    value: 'Rs 3,300M',
    valueM: 3300,
    year: 'Jan 2012',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Polonnaruwa District, North Central Province',
    caseStudy: {
      overview: [
        "At Rs 3,300 million, the Polonnaruwa Water Supply Project is the single largest project in Vonlan's portfolio. Delivered as a sub-contractor to Hyundai Engineering Co Ltd, the project encompassed an 18,000 m³/day intake and treatment plant, a 13,500 m³/day treatment expansion, and 39 kilometres of transmission and distribution mains — supplying clean water to the historic city of Polonnaruwa and its surrounding communities.",
        "Vonlan also constructed the associated office and laboratory building and staff quarters as part of the same contract, demonstrating the company's capacity to deliver complex, multi-discipline infrastructure programmes on schedule.",
      ],
      scope: [
        'Water intake structure — 18,000 m³/day capacity',
        'Water treatment plant — 13,500 m³/day',
        '39 km transmission and distribution network',
        'Office and laboratory building',
        'Staff quarters',
      ],
      galleryCount: 4,
    },
  },
  {
    slug: 'kantale-water-treatment-plant',
    name: 'Kantale Water Treatment Plant — 54,000m³/day',
    client: 'VINCI Construction Co Ltd',
    value: 'Rs 212M',
    valueM: 212,
    year: 'Mar 2013',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Kantale, Trincomalee District',
  },
  {
    slug: 'negombo-water-treatment-plant',
    name: 'Negombo Water Treatment Plant — 12,000 MLD',
    client: 'Biwater Contracting B.V',
    value: 'Rs 162M',
    valueM: 162,
    year: 'Feb 2010',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Negombo, Western Province',
  },
  {
    slug: 'pottuvil-elevated-water-tower',
    name: 'Pottuvil 1000m³ Elevated Water Tower',
    client: 'Sri Lanka Red Cross Society',
    value: 'Rs 67M',
    valueM: 67,
    year: 'Oct 2009',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Pottuvil, Ampara District',
  },
  {
    slug: 'baddegama-water-treatment-plant',
    name: 'Baddegama Water Treatment Plant — 18,000m³/day',
    client: 'Hitachi Plant Technologies Ltd',
    value: 'Rs 50M',
    valueM: 50,
    year: 'Oct 2009',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Baddegama, Galle District',
  },
  {
    slug: 'kandy-clear-water-reservoir',
    name: 'Kandy Clear Water Reservoir',
    client: 'National Water Supply & Drainage Board',
    value: 'Rs 202M',
    valueM: 202,
    year: 'Dec 2014',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Kandy, Central Province',
  },
  {
    slug: 'kandy-flocculation-sedimentation-tank',
    name: 'Kandy Flocculation & Sedimentation Tank — 36,000m³/day',
    client: 'National Water Supply & Drainage Board',
    value: 'Rs 251M',
    valueM: 251,
    year: 'Sep 2014',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Kandy, Central Province',
  },
  {
    slug: 'galle-wsp-transmission',
    name: 'Galle 10 WSP — 7km Transmission',
    client: 'National Water Supply & Drainage Board',
    value: 'Rs 106M',
    valueM: 106,
    year: 'Apr 2011',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Galle, Southern Province',
  },
  {
    slug: 'pottuvil-transmission-distribution',
    name: 'Pottuvil Transmission & Distribution — 7km + 31km',
    client: 'Sri Lanka Red Cross Society',
    value: 'Rs 92M',
    valueM: 92,
    year: 'Jan 2010',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Pottuvil, Ampara District',
  },
  {
    slug: 'ampara-water-supply',
    name: 'Ampara Water Supply Project — Turnkey Design & Build',
    client: 'Sri Lanka Red Cross Society',
    value: 'Rs 757M',
    valueM: 757,
    year: 'Jun 2011',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Ampara District, Eastern Province',
    award: 'National Awards for Construction Performance 2015 — Civil Engineering',
    featured: true,
    caseStudy: {
      overview: [
        "The Ampara Water Supply Project stands as one of Vonlan's most significant achievements — a turnkey contract encompassing design, construction and commissioning of a 253-kilometre distribution system serving communities across the Ampara District in Sri Lanka's Eastern Province.",
        'Awarded in the aftermath of the 2004 tsunami, the project was funded through the Sri Lanka Red Cross Society and represented a critical piece of post-conflict recovery infrastructure for the region. Vonlan delivered the complete scheme — from intake structures and pump stations to the final distribution network reaching homes and community facilities — to the highest quality standards, on time and within budget.',
        "The project's scale, technical complexity and social impact earned Vonlan national recognition: in 2015, the company received the National Awards for Construction Performance in the Civil Engineering category, the highest honour in Sri Lanka's construction industry.",
      ],
      scope: [
        '253 km water distribution network — HDPE and ductile iron mains',
        'Pump stations and booster stations along the transmission route',
        'Service reservoirs and break pressure tanks',
        'Community standpipes and household connections',
        'Full design and project management under turnkey contract',
      ],
      galleryCount: 4,
      photoBrief:
        'Pipe laying works in field, completed pump station building, distribution network in community, National Award photograph.',
    },
  },
  {
    slug: 'hithadhoo-wsp-maldives',
    name: 'Hithadhoo WSP Maldives — Portable Distribution & Sewer',
    client: 'Bi Water International Ltd',
    value: 'Rs 298M',
    valueM: 298,
    year: 'Jul 2012',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Hithadhoo, Maldives',
  },
  {
    slug: 'negombo-water-supply',
    name: 'Negombo Water Supply Project — 136km Distribution',
    client: 'National Water Supply & Drainage Board',
    value: 'Rs 314M',
    valueM: 314,
    year: 'Dec 2013',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Negombo, Western Province',
  },
  {
    slug: 'alankuda-mudalappali-wsp',
    name: 'Alankuda/Mudalappali WSP — 175m³ Tower & 46km Distribution',
    client: 'Ministry of Resettlement',
    value: 'Rs 84M',
    valueM: 84,
    year: 'Dec 2011',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Kalpitiya, Puttalam District',
  },
  {
    slug: 'gonigoda-pump-house',
    name: 'Gonigoda Pump House & Service Reservoir',
    client: 'National Water Supply & Drainage Board',
    value: 'Rs 195M',
    valueM: 195,
    year: 'May 2015',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Gonigoda, Central Province',
  },
  {
    slug: 'ratnapura-water-supply',
    name: 'Ratnapura Water Supply Project — Treatment Plant Intake',
    client: 'ABEIMA INDIA (Pvt) Ltd',
    value: 'Rs 217M',
    valueM: 217,
    year: 'Mar 2015',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Ratnapura, Sabaragamuwa Province',
  },
  {
    slug: 'wanathamulla-sewerage-network',
    name: 'Wanathamulla Gravity Sewerage Network — Colombo',
    client: 'Ministry of Local Government & Provincial Council',
    value: 'Rs 290M',
    valueM: 290,
    status: 'Completed',
    sector: 'water-supply',
    location: 'Wanathamulla, Colombo',
  },
  {
    slug: 'panama-water-supply',
    name: 'Panama Water Supply Project — 1000m³ Tower, 37km T&D',
    client: 'National Water Supply & Drainage Board',
    value: 'Rs 469M',
    valueM: 469,
    status: 'Completed',
    sector: 'water-supply',
    location: 'Panama, Ampara District, Eastern Province',
    caseStudy: {
      overview: [
        'A 1000m³ elevated water tower and 37km transmission and distribution system serving the Panama community in the Eastern Province. Delivered for the National Water Supply & Drainage Board, the project brought a reliable, treated water supply to a rural coastal community.',
      ],
      galleryCount: 4,
    },
  },
  {
    slug: 'dambulla-water-supply',
    name: 'Dambulla Water Supply Project — 9km Transmission',
    client: 'VA TECH WABAG Ltd',
    value: 'Rs 130M',
    valueM: 130,
    status: 'Completed',
    sector: 'water-supply',
    location: 'Dambulla, Matale District',
  },
  {
    slug: 'greater-dambulla-ground-reservoirs',
    name: 'Greater Dambulla WSP — Ground Reservoirs at Kandalama & Dambulla',
    client: 'VA TECH WABAG Ltd',
    value: 'Rs 39M',
    valueM: 39,
    year: '2016',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Dambulla, Matale District',
  },
  {
    slug: 'greater-dambulla-elevated-tower-habarana',
    name: 'Greater Dambulla WSP — 500m³ Elevated Tower at Habarana',
    client: 'VA TECH WABAG Ltd',
    value: 'Rs 30M',
    valueM: 30,
    year: '2016',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Habarana, Anuradhapura District',
  },
  {
    slug: 'kilinochchi-paranthan-distribution',
    name: 'Supply & Laying Distribution System — Kilinochchi Paranthan',
    client: 'National Water Supply & Drainage Board',
    value: 'Rs 143.37M',
    valueM: 143.37,
    year: '2017',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Paranthan, Kilinochchi District',
  },
  {
    slug: 'kalmunai-water-supply',
    name: 'Kalmunai Water Supply Project — 29km Transmission',
    client: 'National Water Supply & Drainage Board',
    value: 'Rs 347M',
    valueM: 347,
    year: '2016',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Kalmunai, Ampara District',
  },
  {
    slug: 'kelaniya-water-supply',
    name: 'Kelaniya Water Supply Project — PVC Pipe Supply & Laying',
    client: 'National Water Supply & Drainage Board',
    value: 'Rs 216M',
    valueM: 216,
    year: '2016',
    status: 'Completed',
    sector: 'water-supply',
    location: 'Kelaniya, Gampaha District',
  },
  {
    slug: 'medirigiriya-wsp',
    name: 'Medirigiriya WSP — 250km T&D System',
    client: 'National Water Supply & Drainage Board',
    value: 'Rs 1,363M',
    valueM: 1363,
    year: 'Ongoing',
    status: 'Ongoing',
    sector: 'water-supply',
    location: 'Medirigiriya, Polonnaruwa District',
  },
  {
    slug: 'polonnaruwa-elevated-tower',
    name: 'Polonnaruwa WSP — 1000m³ Elevated Tower',
    client: 'National Water Supply & Drainage Board',
    value: 'Rs 77.5M',
    valueM: 77.5,
    year: 'Ongoing',
    status: 'Ongoing',
    sector: 'water-supply',
    location: 'Polonnaruwa, North Central Province',
  },
  {
    slug: 'kaduruwela-hdpe-transmission',
    name: 'Supply & Laying 280mm HDPE Transmission — Kaduruwela to New Town',
    client: 'National Water Supply & Drainage Board',
    value: 'Rs 97M',
    valueM: 97,
    year: 'Ongoing',
    status: 'Ongoing',
    sector: 'water-supply',
    location: 'Kaduruwela, Polonnaruwa District',
  },
  {
    slug: 'pibidemu-polonnaruwa-pipes',
    name: 'HDPE/DI Pipes for Pibidemu Polonnaruwa Development Programme',
    client: 'National Water Supply & Drainage Board',
    value: 'Rs 136M',
    valueM: 136,
    year: 'Ongoing',
    status: 'Ongoing',
    sector: 'water-supply',
    location: 'Polonnaruwa District',
  },
  {
    slug: 'greater-polonnaruwa-township-tower',
    name: 'Greater Polonnaruwa Township — 1500m³ Elevated Tower',
    client: 'National Water Supply & Drainage Board',
    value: 'Rs 133M',
    valueM: 133,
    year: 'Ongoing',
    status: 'Ongoing',
    sector: 'water-supply',
    location: 'Polonnaruwa, North Central Province',
  },

  // ───────────────────────────── Highways & Bridges ─────────────────────────────
  {
    slug: 'outer-circular-highway-viaduct-2',
    name: 'Outer Circular Highway — Viaduct 2',
    client: 'Taisei Corporation',
    value: 'Rs 1,057M',
    valueM: 1057,
    year: 'Mar 2015',
    status: 'Completed',
    sector: 'highways-bridges',
    location: 'Colombo Outer Circular Highway',
    featured: true,
    caseStudy: {
      overview: [
        "Sri Lanka's Outer Circular Highway demanded engineering precision at scale. Vonlan delivered Viaduct 2 — a major reinforced concrete structure forming part of the expressway alignment — in sub-contract to Taisei Corporation of Japan.",
        'At Rs 1,057 million, the contract stands among the highest-value projects in our portfolio and demonstrates our ability to execute technically demanding road infrastructure to international standards, working alongside one of the world’s leading contractors.',
      ],
      galleryCount: 4,
    },
  },
  {
    slug: 'outer-circular-highway-viaducts-14-15',
    name: 'Outer Circular Highway — Viaducts 14 & 15',
    client: 'Taisei Corporation',
    value: 'Rs 513M',
    valueM: 513,
    year: 'Mar 2015',
    status: 'Completed',
    sector: 'highways-bridges',
    location: 'Colombo Outer Circular Highway',
  },
  {
    slug: 'palawatta-morawaka-road',
    name: 'Palawatta – Morawaka Road',
    client: 'CATIC Engineering',
    value: 'Rs 52M',
    valueM: 52,
    year: 'Mar 2014',
    status: 'Completed',
    sector: 'highways-bridges',
    location: 'Morawaka, Matara District',
  },
  {
    slug: 'provincial-road-improvement-dambulla',
    name: 'Provincial Road Improvement Project — Dambulla',
    client: 'State Engineering Corporation',
    value: 'Rs 230M',
    valueM: 230,
    year: 'Jan 2014',
    status: 'Completed',
    sector: 'highways-bridges',
    location: 'Dambulla, Matale District',
  },
  {
    slug: 'kiran-ferry-oddumavady-road',
    name: 'Improvement of Kiran Ferry and Oddumavady Road',
    client: 'V.V. Karunarathne & Company',
    value: 'Rs 105M',
    valueM: 105,
    year: 'Mar 2012',
    status: 'Completed',
    sector: 'highways-bridges',
    location: 'Batticaloa District',
  },
  {
    slug: 'kaduwela-bridge',
    name: 'Kaduwela Bridge',
    client: 'Sanken Construction (Pvt) Ltd',
    value: 'Rs 63M',
    valueM: 63,
    year: 'May 2012',
    status: 'Completed',
    sector: 'highways-bridges',
    location: 'Kaduwela, Colombo District',
  },

  // ───────────────────────────── Power & Energy ─────────────────────────────
  {
    slug: 'kerawalapitiya-power-plant',
    name: 'Kerawalapitiya Power Plant — 300 MW',
    client: 'LTL Projects (Pvt) Ltd',
    value: 'Rs 290M',
    valueM: 290,
    year: 'Mar 2009',
    status: 'Completed',
    sector: 'power-energy',
    location: 'Kerawalapitiya, Western Province',
    caseStudy: {
      overview: [
        "Civil and structural works for a 300 MW thermal power generation facility — Vonlan's entry into power infrastructure. Delivered for LTL Projects alongside Sanken's engineering expertise, the project required precision construction to the exacting tolerances demanded by power generation plant.",
      ],
      galleryCount: 4,
    },
  },
  {
    slug: 'kirkoswald-mini-hydro-power-house',
    name: 'Kirkoswald Mini Hydro Power Project — Power House',
    client: 'BOGO Power (Pvt) Ltd',
    value: 'Rs 120M',
    valueM: 120,
    year: 'Nov 2011',
    status: 'Completed',
    sector: 'power-energy',
    location: 'Hill Country, Sri Lanka',
    caseStudy: {
      overview: [
        'Construction of the powerhouse and water channel for a mini hydropower scheme in the hill country for BOGO Power — two simultaneous contracts totalling Rs 225 million. The works combined sensitive civil construction in mountainous terrain with the precision required for hydro generation infrastructure.',
      ],
      galleryCount: 4,
    },
  },
  {
    slug: 'kirkoswald-mini-hydro-channel',
    name: 'Kirkoswald Mini Hydropower Project — Channel',
    client: 'BOGO Power (Pvt) Ltd',
    value: 'Rs 105M',
    valueM: 105,
    year: 'Nov 2011',
    status: 'Completed',
    sector: 'power-energy',
    location: 'Hill Country, Sri Lanka',
  },
  {
    slug: 'uma-oya-multipurpose-development',
    name: 'Uma Oya Multipurpose Development Project',
    client: 'On company record',
    year: 'On record',
    status: 'Completed',
    sector: 'power-energy',
    location: 'Uva Province, Sri Lanka',
  },
  {
    slug: 'batticaloa-substation-roads',
    name: 'Batticaloa Substation (Roads)',
    client: 'On company record',
    year: 'On record',
    status: 'Completed',
    sector: 'power-energy',
    location: 'Batticaloa, Eastern Province',
  },

  // ───────────────────────────── Buildings ─────────────────────────────
  {
    slug: 'office-laboratory-building-polonnaruwa',
    name: 'Office & Laboratory Building — Polonnaruwa WSP',
    client: 'Hyundai Engineering',
    year: 'Jan 2012',
    status: 'Completed',
    sector: 'buildings',
    location: 'Polonnaruwa, North Central Province',
  },
  {
    slug: 'staff-quarters-polonnaruwa',
    name: 'Staff Quarters — Polonnaruwa WSP',
    client: 'Hyundai Engineering',
    year: 'Jan 2012',
    status: 'Completed',
    sector: 'buildings',
    location: 'Polonnaruwa, North Central Province',
  },
  {
    slug: 'canteen-building-toyota-lanka',
    name: 'Canteen Building — Toyota Lanka',
    client: 'Toyota Lanka',
    year: '2008',
    status: 'Completed',
    sector: 'buildings',
    location: 'Wattala, Gampaha District',
  },
  {
    slug: 'kelaniya-wsp-area-engineers-office',
    name: "Kelaniya WSP — Area Engineer's Office",
    client: 'National Water Supply & Drainage Board',
    value: 'Rs 103M',
    valueM: 103,
    year: '2016',
    status: 'Completed',
    sector: 'buildings',
    location: 'Kelaniya, Gampaha District',
  },
  {
    slug: 'sugathadasa-arena-renovation',
    name: 'Renovation of Main Arena — Sugathadasa National Sports Complex',
    client: 'Sugathadasa National Sport Complex Authority',
    value: 'Rs 48M',
    valueM: 48,
    year: '2016',
    status: 'Completed',
    sector: 'buildings',
    location: 'Colombo',
    caseStudy: {
      overview: [
        'Vonlan delivered the renovation of the main arena at the Sugathadasa National Sports Complex — a nationally significant venue in Colombo. Working within operational constraints, the team completed structural and finishing works to restore the arena to international standards.',
      ],
      galleryCount: 4,
    },
  },
  {
    slug: 'toyota-lanka-service-building-negombo',
    name: 'New Service Building — Toyota Lanka (Pvt) Ltd, Negombo',
    client: 'Toyota Lanka (Pvt) Ltd',
    value: 'Rs 115M',
    valueM: 115,
    year: '2016',
    status: 'Completed',
    sector: 'buildings',
    location: 'Negombo, Western Province',
    caseStudy: {
      overview: [
        "Vonlan's relationship with Toyota Lanka (Pvt) Ltd began with the construction of a canteen building in 2008, and has since grown into one of the company's most valued client partnerships. The Negombo service building — a modern commercial facility designed for vehicle servicing operations — marked Vonlan's entry into landmark commercial building contracts.",
        'The completed building reflects Toyota Lanka’s international brand standards, with the Vonlan team delivering precision construction, professional finishes, and on-time handover. The success of this project led directly to further Toyota Lanka contracts in Wattala, Kandy and Matara.',
      ],
      galleryCount: 4,
      photoBrief:
        'Exterior facade with Toyota signage, interior service bay, completed building from street, construction progress shot.',
    },
  },
  {
    slug: 'toyota-lanka-head-office-wattala',
    name: 'Toyota Lanka Head Office Expansion — Wattala',
    client: 'Toyota Lanka (Pvt) Ltd',
    value: 'Rs 55M',
    valueM: 55,
    status: 'Completed',
    sector: 'buildings',
    location: 'Wattala, Gampaha District',
  },
  {
    slug: 'krrish-transwork-house-renovation',
    name: 'Renovation of Krrish Transwork House Building',
    client: 'Krrish Transwork Colombo (Pvt) Ltd',
    value: 'Rs 4.6M',
    valueM: 4.6,
    year: '2016',
    status: 'Completed',
    sector: 'buildings',
    location: 'Colombo',
  },
  {
    slug: 'bandaragama-stadium-drain',
    name: 'Bandaragama Stadium — Rainwater Drain Modification',
    client: 'Western Province Cricket Association',
    value: 'Rs 1.6M',
    valueM: 1.6,
    year: '2017',
    status: 'Completed',
    sector: 'buildings',
    location: 'Bandaragama, Kalutara District',
  },
  {
    slug: 'sujatha-vidyalaya-school-building',
    name: 'School Building for Sujatha Vidyalaya',
    client: 'Sujatha School',
    value: 'Rs 465M',
    valueM: 465,
    year: 'Ongoing',
    status: 'Ongoing',
    sector: 'buildings',
    location: 'Matara, Southern Province',
    caseStudy: {
      overview: [
        "A multi-storey school building for one of Sri Lanka's established educational institutions. Vonlan is delivering the full structural, civil and finishing works under a direct contract — a project that combines institutional scale with the care required for an active educational campus.",
      ],
      galleryCount: 4,
    },
  },
  {
    slug: 'red-cross-building',
    name: 'Red Cross Building',
    client: 'Sri Lanka Red Cross Society',
    value: 'Rs 685M',
    valueM: 685,
    year: 'Ongoing',
    status: 'Ongoing',
    sector: 'buildings',
    location: 'Colombo',
    featured: true,
    caseStudy: {
      overview: [
        'A large-scale building project for the Sri Lanka Red Cross Society — currently the highest-value ongoing building contract in Vonlan’s portfolio at Rs 685 million.',
        'The project continues a long relationship between Vonlan and the Sri Lanka Red Cross Society, which began with critical water supply infrastructure in the Eastern Province and now extends to landmark building construction in the capital.',
      ],
      galleryCount: 4,
    },
  },
  {
    slug: 'toyota-lanka-2s-kandy',
    name: 'Toyota Lanka 2S Facility — Kandy',
    client: 'Toyota Lanka (Pvt) Ltd',
    value: 'Rs 65M',
    valueM: 65,
    year: 'Ongoing',
    status: 'Ongoing',
    sector: 'buildings',
    location: 'Kandy, Central Province',
  },
  {
    slug: 'toyota-lanka-2s-matara',
    name: 'Toyota Lanka 2S Facility — Matara',
    client: 'Toyota Lanka (Pvt) Ltd',
    value: 'Rs 50M',
    valueM: 50,
    year: 'Ongoing',
    status: 'Ongoing',
    sector: 'buildings',
    location: 'Matara, Southern Province',
  },
  {
    slug: 'okaya-lanka-factory-refurbishment',
    name: 'Refurbishment — Okaya Lanka Factory Building, Katunayake',
    client: 'Okaya Lanka (Pvt) Ltd',
    value: 'Rs 14M',
    valueM: 14,
    year: 'Ongoing',
    status: 'Ongoing',
    sector: 'buildings',
    location: 'Katunayake, Gampaha District',
  },
];

/* ───────────────────────────── Helpers ───────────────────────────── */

export const PROJECT_MAP: Record<string, Project> = PROJECTS.reduce(
  (acc, p) => ({ ...acc, [p.slug]: p }),
  {} as Record<string, Project>,
);

export function getProject(slug: string): Project | undefined {
  return PROJECT_MAP[slug];
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

export function getProjectsBySector(sector: SectorSlug): Project[] {
  return PROJECTS.filter((p) => p.sector === sector);
}

export function getProjectsByNames(names: string[]): Project[] {
  return names
    .map((name) => PROJECTS.find((p) => p.name === name))
    .filter((p): p is Project => Boolean(p));
}

/** Projects that have full / summary case-study copy, for "related" strips. */
export function getCaseStudyProjects(): Project[] {
  return PROJECTS.filter((p) => p.caseStudy);
}

/** Pick up to `count` related projects in the same sector, excluding `slug`. */
export function getRelatedProjects(slug: string, sector: SectorSlug, count = 3): Project[] {
  return PROJECTS.filter((p) => p.sector === sector && p.slug !== slug).slice(0, count);
}
