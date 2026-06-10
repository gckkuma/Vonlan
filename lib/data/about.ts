/**
 * About-page content: company story, timeline, vision and mission.
 * Sourced from the Vonlan Website Content Pack (June 2025).
 */

export const ABOUT = {
  headline: 'Passion for excellence since 2007',
  story: [
    "Vonlan Constructions (Pvt) Ltd was incorporated on 27th June 2007 as an associate company to Sanken Construction (Pvt) Ltd, one of Sri Lanka's most respected construction companies. Built on the same passion for excellence, Vonlan was established with a singular focus: infrastructure that serves communities.",
    'In the years that followed, Vonlan steadily grew its portfolio across water supply, highways and power. By 2015, the company diversified into building construction — adding commercial and institutional projects to its capabilities. In 2016, Vonlan became a wholly-owned subsidiary of Sanken, cementing its place within one of the country\'s leading construction groups.',
    'Today, Vonlan holds CIDA grading C2 for Water Supply and C3 for Highways, Bridges, Irrigation and Buildings. The company is a registered member of the National Chamber of the Association of Specialised & Licensed Contractors (NCASL) under the Major and Specialist Constructors category. With ISO 9001:2015, ISO 14001:2004 and OHSAS 18001:2007 certifications active, quality and safety are embedded in every project we deliver.',
  ],
} as const;

export interface TimelineItem {
  year: string;
  milestone: string;
}

export const TIMELINE: TimelineItem[] = [
  { year: 'June 2007', milestone: 'Vonlan Constructions (Pvt) Ltd incorporated as associate of Sanken Construction (Pvt) Ltd' },
  { year: '2008–2010', milestone: 'First major water supply contracts — Negombo WTP, Pottuvil Tower & Transmission' },
  { year: '2011–2012', milestone: 'Polonnaruwa WSP (Rs 3,300M) and Galle WSP completed; Hithadhoo Maldives project' },
  { year: '2013', milestone: 'Kantale Water Treatment Plant (Rs 212M) and Negombo WSP completed' },
  { year: '2013', milestone: 'ISO 14001:2004 Environmental Management certification' },
  { year: '2014', milestone: 'National Business Excellence Award — Runner-Up, Construction Sector' },
  { year: '2015', milestone: 'National Award for Construction Performance — Ampara Water Supply (Rs 757M)' },
  { year: '2015', milestone: 'Diversification into building construction; Toyota Lanka Negombo completed' },
  { year: '2016', milestone: 'Vonlan becomes wholly-owned subsidiary of Sanken Construction (Pvt) Ltd' },
  { year: '2017', milestone: 'ISO 9001:2015 Quality Management certification' },
  {
    year: '2017–present',
    milestone:
      'Active projects: Medirigiriya WSP, Polonnaruwa Township Tower, Toyota Lanka Kandy & Matara, Red Cross Building, Sujatha Vidyalaya',
  },
];

export const VISION = 'To be the passionate leader in infrastructure construction in the region.';

export const MISSION: string[] = [
  'Redefine customer satisfaction with genuine care for seamless long-term relationships by providing quality construction on time with a value-added commitment.',
  'Always to be a trusted partner for our business associates by providing financial assistance, modern technology, confidence and capacity building for innovative systems.',
  'Develop the competency of employees by providing training and improving performance, creating a better working environment and challenging tasks to achieve lifelong career satisfaction.',
  'Serve the region by introducing sustainable and environmentally friendly construction solutions, and developing the leadership qualities of the younger generation to meet the challenges of the future.',
  'Build investor confidence by diversifying the business scope and guaranteeing the return on investment.',
];

export const POLICIES = {
  quality: {
    title: 'Quality Assurance',
    body: 'As an ISO 9001:2015 certified company, Vonlan employees are trained in quality management principles and apply them on every project we deliver.',
    points: [
      'Execution of Project Information System — structured project documentation from award to handover',
      'Preparation of Method Statements — detailed construction methodology for every work package',
      'Development of staff competency — ongoing training and performance review',
      'Selection criteria for materials, machinery and workers — consistent standards at every site',
    ],
  },
  environmental: {
    title: 'Environmental Commitment',
    body: [
      'Vonlan is highly committed to protecting the environment during construction and operational works. We practise the 3R concept — Reduce, Reuse, Recycle — across all our projects, workshops, stores and offices.',
      'To strengthen this commitment further, Vonlan has successfully implemented an Environmental Management System certified to ISO 14001 since 2013, maintaining consistent environmental protection standards across the organisation and all active sites.',
    ],
  },
} as const;
