/**
 * Image path helpers. Photography (AI mock imagery, pending real site photos)
 * lives in /public/images. Sector images are named by slug; selected case-study
 * projects have their own image keyed by slug, falling back to the sector image.
 */
import type { SectorSlug } from './data/sectors';
import type { Project } from './data/projects';

/** Rotating hero slides (full-bleed). */
export const HERO_IMAGES = [
  '/images/hero-construction.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
];

export const HERO_IMAGE = HERO_IMAGES[0];

/** Per-page header photos. */
export const PAGE_IMAGES = {
  about: '/images/hero-3.jpg',
  credentials: '/images/project-ampara-water-supply.jpg',
  careers: '/images/hero-construction.jpg',
  contact: '/images/sector-buildings.jpg',
  projects: '/images/sector-highways-bridges.jpg',
} as const;

/** Project slugs that have their own dedicated photo in /public/images. */
const PROJECT_IMAGE_SLUGS = new Set([
  'ampara-water-supply',
  'polonnaruwa-water-supply',
  'panama-water-supply',
  'outer-circular-highway-viaduct-2',
  'kerawalapitiya-power-plant',
  'kirkoswald-mini-hydro-power-house',
  'sugathadasa-arena-renovation',
  'toyota-lanka-service-building-negombo',
  'sujatha-vidyalaya-school-building',
  'red-cross-building',
]);

export function sectorImage(slug: SectorSlug): string {
  return `/images/sector-${slug}.jpg`;
}

/** A representative photo for a project: its own image if present, else the sector image. */
export function projectImage(project: Project): string {
  if (PROJECT_IMAGE_SLUGS.has(project.slug)) {
    return `/images/project-${project.slug}.jpg`;
  }
  return sectorImage(project.sector);
}

/** Whether a project has dedicated photography (vs. a shared sector image). */
export function hasProjectImage(project: Project): boolean {
  return PROJECT_IMAGE_SLUGS.has(project.slug);
}
