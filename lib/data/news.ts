/**
 * News & events shown on the homepage.
 * Sourced from the Vonlan Website Content Pack (June 2025).
 * Dates are pending confirmation from Vonlan (content gap), so a neutral
 * "Recent" label is shown until real publication dates are supplied.
 */

import type { SectorSlug } from './sectors';

export interface NewsItem {
  date: string;
  headline: string;
  sector: string;
  /** Optional link to a related sector page */
  sectorSlug?: SectorSlug;
}

export const NEWS: NewsItem[] = [
  {
    date: 'Recent',
    headline: 'Vonlan awarded Matara and Kandy Toyota 2S facility projects',
    sector: 'Buildings',
    sectorSlug: 'buildings',
  },
  {
    date: 'Recent',
    headline: 'Sujatha Vidyalaya school building project awarded to Vonlan',
    sector: 'Buildings',
    sectorSlug: 'buildings',
  },
  {
    date: 'Recent',
    headline: 'Panama Water Tower and Water Supply Project successfully completed',
    sector: 'Water',
    sectorSlug: 'water-supply',
  },
  {
    date: 'Recent',
    headline: 'Toyota Lanka Wattala head office expansion — construction completed',
    sector: 'Buildings',
    sectorSlug: 'buildings',
  },
];
