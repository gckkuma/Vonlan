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
}

export const AWARDS: Award[] = [
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
}

export const CSR = {
  intro:
    'Vonlan believes in giving back to the communities in which we work. Since our founding, we have supported community development alongside our infrastructure projects.',
  items: [
    {
      title: 'Leadership development programme',
      body: 'Vonlan supports youth leadership development in partnership with community organisations, developing the skills and confidence of the next generation of professionals.',
    },
    {
      title: 'Vasanagama Village Hermitage',
      body: 'Vonlan donated a hermitage facility to the Vasanagama Village community, supporting the spiritual and cultural life of the village.',
    },
    {
      title: 'Vasanagama Vidyalaya — school donations',
      body: 'Vonlan has donated school supplies and materials to Vasanagama Vidyalaya, supporting education in rural communities where our infrastructure work takes place.',
    },
  ] as CsrItem[],
};
