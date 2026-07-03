/**
 * Credentials-page content: awards and CSR.
 * (Certifications and quality/environmental policy live in site.ts and about.ts.)
 * Sourced from the Vonlan Website Content Pack (June 2025).
 */

export interface Award {
  title: string;
  body: string;
  meta?: string;
  featured?: boolean;
  source?: { label: string; href: string };
}

export const AWARDS: Award[] = [
  {
    title: 'National Construction Excellence Award — Excellence Award, Rs 150–450 M category',
    body: 'Presented by the Construction Industry Development Authority (CIDA) at the National Construction Excellence Awards, for the construction of the Aditya Ayurveda Hospital building in Anuradhapura for Gunawardena Ayurveda Holdings (Pvt) Ltd — recognising quality, timely delivery and technical execution.',
    meta: 'Rs 150–450 M category · CIDA',
    featured: true,
    source: {
      label: 'Read the coverage — Daily Mirror',
      href: 'https://www.dailymirror.lk/business/Vonlan-Constructions-honoured-with-Excellence-Award/215-266336',
    },
  },
  {
    title: 'National Awards for Construction Performance 2015 — Civil Engineering Category',
    body: 'Presented by the Construction Industry Development Authority of Sri Lanka (CIDA) in recognition of design, construction and completion (Turnkey) of the Ampara Water Supply Project. Vonlan was recognised at national level for project scale, quality of delivery and technical execution.',
    meta: '~Rs 757 Million  ·  Eastern Province, Sri Lanka',
    featured: true,
  },
  {
    title: 'National Business Excellence Awards 2014 — Runner-Up, Construction Sector',
    body: 'Presented by the National Chamber of Commerce of Sri Lanka to Vonlan Constructions (Pvt) Ltd in recognition of business excellence in the construction sector.',
  },
];

export interface CsrItem {
  title: string;
  body: string;
  meta?: string;
}

export interface CsrFocus {
  /** lucide-react icon name handled in the CSR page. */
  icon: 'HeartHandshake' | 'GraduationCap' | 'Leaf' | 'Landmark';
  title: string;
  body: string;
}

export const CSR = {
  intro:
    'For Vonlan, construction is a form of service. Alongside every project, we invest in the people, places and institutions around us — giving back to the communities our infrastructure is built to serve.',
  philosophy: [
    'The water networks, roads, bridges and buildings we deliver exist for one reason: to improve everyday life for communities across Sri Lanka. That sense of purpose shapes how we work — responsibility to people and place is built into our projects, not treated as an afterthought.',
    'We carry that responsibility beyond our own site boundaries — supporting education and youth development, protecting the environment we build in, and helping preserve the cultural and spiritual landmarks that hold communities together.',
  ],
  focus: [
    {
      icon: 'HeartHandshake',
      title: 'Community upliftment',
      body: 'Supporting the villages and neighbourhoods around our project sites — from local employment and infrastructure to direct assistance for community needs.',
    },
    {
      icon: 'GraduationCap',
      title: 'Education & youth',
      body: 'Investing in the next generation through school donations, skills development and youth leadership programmes that build confidence and capability.',
    },
    {
      icon: 'Leaf',
      title: 'Environment & responsibility',
      body: 'Building responsibly — ISO 14001-aligned environmental management, careful stewardship of natural resources, and minimising our footprint on every site.',
    },
    {
      icon: 'Landmark',
      title: 'Culture & heritage',
      body: 'Helping preserve the religious, cultural and historical landmarks that give our communities their identity and continuity.',
    },
  ] as CsrFocus[],
  items: [
    {
      title: 'Vasanagama Village Hermitage',
      body: 'Vonlan built and donated a hermitage (aranya) facility for the Vasanagama Village community, supporting the spiritual life and quiet reflection of the village and its monks.',
      meta: 'Vasanagama Village',
    },
    {
      title: 'Vasanagama Vidyalaya school donation',
      body: 'We donated learning materials and school supplies to the students of Vasanagama Vidyalaya, helping young learners in the community get the resources they need to thrive.',
      meta: 'Education',
    },
    {
      title: 'Mattumagala Ragama Sacred Heart Church cemetery',
      body: 'Vonlan refurbished the cemetery at the Sacred Heart Church, Mattumagala, Ragama — helping preserve a site of historical, cultural and spiritual significance for the parish community.',
      meta: 'Heritage',
    },
    {
      title: 'Youth leadership development',
      body: 'In partnership with community organisations, Vonlan supports leadership development programmes that grow the skills and confidence of young people entering the workforce.',
      meta: 'Youth',
    },
  ] as CsrItem[],
};
