/**
 * About-page content: company story, timeline, vision and mission.
 * Sourced from the Vonlan Website Content Pack (June 2025).
 */

export const ABOUT = {
  headline: 'Uplifting the comforts of the nation by enhancing its infrastructure',
  story: [
    "Vonlan Constructions (Pvt) Ltd was founded on 27th June 2007 with a singular focus: to build the infrastructure that serves communities across Sri Lanka.",
    'From its first water-supply contracts, Vonlan grew across highways, power and — since 2015 — building construction. Today it executes landmark work across six infrastructure sectors in Sri Lanka and the Maldives, from 350 MW power stations and national venues to luxury island resorts.',
    "Vonlan holds CIDA's C1 grade in both Water Supply and Building Construction, and C3 in Roads, Highways and Bridges. Guided by a leadership team driving sustainability, green building and build-operate-transfer projects, quality and safety are embedded in every project we deliver.",
  ],
} as const;

export interface TimelineItem {
  year: string;
  milestone: string;
}

export const TIMELINE: TimelineItem[] = [
  { year: '2007', milestone: 'Vonlan Constructions (Pvt) Ltd founded' },
  { year: '2009–2011', milestone: 'First major water-supply contracts — Pottuvil, Negombo, and the award-winning Ampara scheme (Rs 757M)' },
  { year: '2012', milestone: 'Polonnaruwa Water Supply Project completed (Rs 1,683M) — JV with Hyundai Engineering' },
  { year: '2015', milestone: 'National Award for Construction Performance — Ampara Water Supply Project' },
  { year: '2015–2016', milestone: 'Diversification into building construction' },
  { year: '2019–2021', milestone: 'CIDA upgrade to C1; landmark builds — Premadasa Stadium, Red Cross HQ, Maldives resorts (Alila, Ritz-Carlton, OZO)' },
  { year: '2023', milestone: 'Cargills Distribution Centre & Cargills Square; Battaramulla NWSDB office — value-engineered delivery' },
  { year: '2025', milestone: 'Sobhadanavi 350 MW LNG power station completed; BIA Lotus Lounge; Medirigiriya Phase III' },
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
