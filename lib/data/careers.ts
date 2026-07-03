/**
 * Careers-page content: why-Vonlan points and roles.
 * Sourced from the Vonlan Website Content Pack (June 2025).
 */

export const CAREERS = {
  headline: 'Build your career on solid ground',
  intro:
    "At Vonlan, you will work on some of Sri Lanka's most significant infrastructure projects — water supply systems that communities depend on, highways that connect the nation, and buildings that serve thousands. We are a growing company, and we are always looking for talented people who share our passion for excellence.",
  why: [
    'Work on large-scale, nationally significant projects across 6 sectors',
    "One of Sri Lanka's growing construction organisations",
    'ISO-certified quality and safety systems on every project',
    'Training and career development opportunities',
    'A team that values precision, integrity, and doing the job right',
  ],
} as const;

export interface Role {
  title: string;
  description: string;
}

export const ROLES: Role[] = [
  {
    title: 'Civil / Structural Engineers',
    description:
      'Design and site supervision roles across water, highway and building projects. BSc Eng or equivalent required.',
  },
  {
    title: 'Quantity Surveyors',
    description:
      'Preparation of bills of quantities, valuations and contract documentation for ongoing and tendering projects.',
  },
  {
    title: 'Site Managers / Project Managers',
    description:
      'End-to-end delivery of construction contracts. Experience in infrastructure or building projects essential.',
  },
  {
    title: 'Mechanical & Electrical Engineers',
    description:
      'Plant installation, pump stations, power facilities and building services. Water sector experience preferred.',
  },
  {
    title: 'Site Supervisors / Foremen',
    description:
      'On-site supervision and team management. Trade qualifications and site experience required.',
  },
  {
    title: 'Finance & Administration',
    description:
      'Supporting the Finance Planning & Monitoring division. Accounting qualifications preferred.',
  },
];

/** Options for the "Position applied for" dropdown. */
export const ROLE_OPTIONS = ROLES.map((r) => r.title);
