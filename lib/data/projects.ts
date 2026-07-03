/**
 * Project portfolio — generated register (projects.json) from the authoritative
 * 2025 spreadsheets + PDF, with exact LKR values. Real photography is mapped to
 * the projects that have it; the rest use a branded placeholder.
 */
import raw from './projects.json';
import galleries from './galleries.json';
import type { SectorSlug } from './sectors';

export type ProjectStatus = 'Completed' | 'Ongoing';

export interface Project {
  slug: string;
  name: string;
  client: string;
  valueLKR: number | null;
  value: string | null;
  year: string;
  status: ProjectStatus;
  sector: SectorSlug;
  overseas: boolean;
  capacity: string;
  description: string;
}

export const PROJECTS = raw as Project[];

/** Keyword → real image files (under /images/work). First match wins. */
const IMAGE_RULES: { test: RegExp; files: string[] }[] = [
  // Authentic site photographs sourced from Vonlan's own project records (precise
  // slug matches first, so they take priority over the broader keyword rules below).
  { test: /rehabilitation-and-extension-of-baddegama/, files: ['live-baddegama'] },
  { test: /construction-and-completion-of-head-works/, files: ['live-polonnaruwa-wsp'] },
  { test: /negombo-water-supply-and-optimization/, files: ['live-negombo-wtp'] },
  { test: /rehabilitation-and-upgrade-of-kantale/, files: ['live-kantale'] },
  { test: /alankuda/, files: ['live-alankuda'] },
  { test: /galle-10/, files: ['live-galle10'] },
  { test: /ampara-water/, files: ['live-ampara'] },
  { test: /hithadhoo/, files: ['live-hithadhoo'] },
  { test: /mudalappali/, files: ['live-mudalappali'] },
  { test: /clear-water-reservoir/, files: ['live-kandy-reservoir'] },
  { test: /gonigoda/, files: ['live-gonigoda'] },
  { test: /rathnapura/, files: ['live-rathnapura'] },
  { test: /1000m3-water-tower/, files: ['live-panama-tower'] },
  { test: /kilinochchi/, files: ['live-kilinochchi'] },
  { test: /flocculation/, files: ['live-flocculation'] },
  { test: /medirigiriya/, files: ['live-medirigiriya'] },
  { test: /orunedwewa/, files: ['wp-orunedwewa'] },
  { test: /galpaya/, files: ['wp-galpaya'] },
  { test: /saddatissa/, files: ['wp-saddatissa'] },
  { test: /1000-cum-capacity-water-tower/, files: ['live-polonnaruwa-1000'] },
  { test: /280nun-hdpe/, files: ['live-kaduruwela-280'] },
  { test: /line-shifting/, files: ['live-pibidemu-lineshift'] },
  { test: /1500-cum-water-tower/, files: ['live-polonnaruwa-1500'] },
  { test: /kaduwela-bridge/, files: ['live-kaduwela-bridge'] },
  { test: /palawatta/, files: ['live-palawatta'] },
  { test: /viaduct-2/, files: ['live-och-viaduct2'] },
  { test: /viaducts-14/, files: ['live-och-viaduct14'] },
  { test: /300mw-combined-cycle/, files: ['live-300mw'] },
  { test: /upper-kotmale/, files: ['live-kotmale'] },
  { test: /uma-oya/, files: ['live-umaoya'] },
  { test: /relocated-houses-for-gatambe/, files: ['live-gatambe'] },
  { test: /supply-replacement-of-defective-valves/, files: ['live-kelaniya-office'] },
  { test: /sugathdasa-stadium/, files: ['live-sugathadasa'] },
  { test: /demolition-of-existing-old-building/, files: ['live-redcross'] },
  { test: /13-000-ft-2-floor-area-building-at-kandy/, files: ['live-toyota-kandy'] },
  { test: /9-700-ft-2-floor-area-building-at-matara/, files: ['live-toyota-matara'] },
  { test: /ritz/, files: ['ritz-carlton-villa'] },
  { test: /alila/, files: ['alila-villa-dusk', 'alila-aerial'] },
  { test: /bentota/, files: ['taj-bentota'] },
  { test: /indoor.?net/, files: ['premadasa-indoor-net'] },
  { test: /major.?refurbishment/, files: ['premadasa-refurb'] },
  { test: /premadasa/, files: ['premadasa-stadium'] },
  { test: /katana|distribution cent/, files: ['cargills-katana'] },
  { test: /bandarawela|empire/, files: ['cargills-square'] },
  { test: /galadari/, files: ['galadari-ballroom-1', 'galadari-ballroom-2', 'galadari-ballroom-3'] },
  { test: /sobhadanavi/, files: ['sobhadanavi-power-1'] },
  { test: /araliya|lotus/, files: ['araliya-lounge'] },
  { test: /battaramulla|area-engineer/, files: ['nwsdb-battaramulla'] },
  { test: /red-cross|dharmapala/, files: ['red-cross'] },
  { test: /ayurv/, files: ['ayurveda'] },
  { test: /mabel-simon|ladies/, files: ['ladies-college-1', 'ladies-college-2', 'ladies-college-3'] },
  { test: /akbar/, files: ['akbarally-residence-1'] },
  { test: /sujatha/, files: ['sujatha-college-1'] },
  { test: /car park area building/, files: ['toyota-wattala'] },
  { test: /floor area building at negombo/, files: ['toyota-negombo'] },
  { test: /toyota/, files: ['toyota-1'] },
];

export function projectImages(p: Project): string[] {
  // Match against slug + name + client so keyword rules (ritz, premadasa, toyota…)
  // still hit projects whose slug is generic (e.g. "proposed-major-refurbishment…").
  const hay = `${p.slug} ${p.name} ${p.client}`.toLowerCase();
  for (const rule of IMAGE_RULES) if (rule.test.test(hay)) return rule.files;
  return [];
}
export function projectImage(p: Project): string | null {
  const f = projectImages(p)[0];
  return f ? `/images/work/${f}.jpg` : null;
}
export const workSrc = (file: string) => `/images/work/${file}.jpg`;

/** Composed hero banners (16:9) for selected flagship projects. */
const HERO_RULES: { test: RegExp; file: string }[] = [
  { test: /alila/i, file: 'alila' },
  { test: /galadari/i, file: 'galadari' },
  { test: /sobhadanavi/i, file: 'sobhadanavi' },
  { test: /cargills central distribution|distribution cent|katana/i, file: 'cargills-katana' },
];
/** Returns a dedicated composed hero image for a project, if one exists. */
export function projectHero(p: Project): string | null {
  for (const r of HERO_RULES) if (r.test.test(p.name)) return `/images/hero/${r.file}.jpg`;
  return projectImage(p);
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
/** First project whose name or client matches a keyword — used to link client logos. */
export function findProject(keyword: string): Project | undefined {
  const kw = keyword.toLowerCase();
  return PROJECTS.find((p) => `${p.name} ${p.client}`.toLowerCase().includes(kw));
}
export function getProjectsBySector(sector: SectorSlug): Project[] {
  // Photographed projects first for stronger cards.
  return PROJECTS.filter((p) => p.sector === sector).sort(
    (a, b) => (projectImage(b) ? 1 : 0) - (projectImage(a) ? 1 : 0) || (b.valueLKR ?? 0) - (a.valueLKR ?? 0),
  );
}
export function getRelatedProjects(slug: string, sector: SectorSlug, count = 3): Project[] {
  const withPhoto = PROJECTS.filter((p) => p.sector === sector && p.slug !== slug && projectImage(p));
  const rest = PROJECTS.filter((p) => p.sector === sector && p.slug !== slug && !projectImage(p));
  return [...withPhoto, ...rest].slice(0, count);
}

/** Total listed contract value across the register (LKR). */
export const PORTFOLIO_VALUE = PROJECTS.reduce((s, p) => s + (p.valueLKR ?? 0), 0);

/** Per-sector totals (project count + listed value) for portfolio graphs. */
export const SECTOR_TOTALS: Record<SectorSlug, { count: number; value: number }> = PROJECTS.reduce(
  (acc, p) => {
    const t = (acc[p.sector] ??= { count: 0, value: 0 });
    t.count += 1;
    t.value += p.valueLKR ?? 0;
    return acc;
  },
  {} as Record<SectorSlug, { count: number; value: number }>,
);

/** Highest listed contract value within each sector — used for value-bar graphics. */
export const SECTOR_MAX: Record<SectorSlug, number> = PROJECTS.reduce(
  (acc, p) => {
    if (p.valueLKR && p.valueLKR > (acc[p.sector] ?? 0)) acc[p.sector] = p.valueLKR;
    return acc;
  },
  {} as Record<SectorSlug, number>,
);

const GALLERY_COUNTS = galleries as Record<string, number>;

/** Which gallery folder (if any) holds the full photo set for a project. */
function galleryKey(p: Project): string | null {
  const n = p.name.toLowerCase();
  const c = p.client.toLowerCase();
  if (/alila/.test(n)) return 'alila';
  if (/bentota/.test(n)) return 'taj-bentota';
  if (/indoor.?net/.test(n)) return 'premadasa-indoor-net';
  if (/major.?refurbishment/.test(n)) return 'premadasa-refurb';
  if (/premadasa/.test(n)) return 'premadasa';
  if (/galadari/.test(n)) return 'galadari';
  if (/mabel simon|ladies/.test(n)) return 'ladies-college';
  if (/akbar/.test(n)) return 'akbarally';
  if (/distribution cent|katana/.test(n)) return 'cargills-katana';
  if (/bandarawela|cargills square/.test(n)) return 'cargills-square';
  if (/araliya/.test(n)) return 'araliya-lounge';
  if (/sobhadanavi/.test(n)) return 'sobhadanavi';
  if (/ayurv/.test(n)) return 'ayurveda';
  if (/red cross|dharmapala/.test(n)) return 'red-cross';
  if (/sujatha/.test(n)) return 'sujatha';
  if (c.includes('toyota') && /kandy/.test(n)) return 'toyota-kandy';
  return null;
}

/** All available images for a project: its full folder gallery, else its work image(s). */
export function projectGallery(p: Project): string[] {
  const key = galleryKey(p);
  if (key && GALLERY_COUNTS[key]) {
    return Array.from({ length: GALLERY_COUNTS[key] }, (_, i) => `/images/gallery/${key}/${i + 1}.jpg`);
  }
  return projectImages(p).map(workSrc);
}

const UNIT = String.raw`(?:km|m³|cum|m3|mld|ft²|ft2|mw|nos|units)`;

/** Parse a capacity string ("1000 cum WTP 73 km Pipe Laying") into stat chips. */
export function capacityStats(capacity: string): { value: string; label: string }[] {
  if (!capacity) return [];
  // Split before each "<number> <unit>" token so each spec becomes its own segment.
  const segmented = capacity.replace(new RegExp(String.raw`(?!^)\s(?=[\d,.]+\s?${UNIT}\b)`, 'gi'), '|');
  const tok = new RegExp(String.raw`([\d,.]+\s?${UNIT})\b`, 'i');
  const out = segmented
    .split(/\||\n|;/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((part) => {
      const m = part.match(tok);
      if (m) {
        const value = m[1].replace(/\bcum\b|\bm3\b/i, 'm³').replace(/\bft2\b/i, 'ft²').toUpperCase().replace('KM', 'km').replace('MW', 'MW');
        const label = part.replace(m[1], '').replace(/^[\s\-–:,.]+|[\s\-–:,.]+$/g, '').trim();
        return { value: value.replace(/M³/i, 'm³'), label: label || 'Capacity' };
      }
      return null;
    })
    .filter((x): x is { value: string; label: string } => Boolean(x));
  return out.slice(0, 4);
}
