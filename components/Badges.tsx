import type { ProjectStatus } from '@/lib/data/projects';
import { SECTOR_MAP, type SectorSlug } from '@/lib/data/sectors';

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const completed = status === 'Completed';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
        completed ? 'bg-brand-greenLight text-brand-greenDark' : 'bg-amber-100 text-amber-800'
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${completed ? 'bg-brand-green' : 'bg-amber-500'}`}
        aria-hidden
      />
      {status}
    </span>
  );
}

export function SectorBadge({ sector }: { sector: SectorSlug }) {
  const s = SECTOR_MAP[sector];
  return (
    <span className="inline-flex items-center rounded-full border border-brand-stone bg-brand-offwhite px-2.5 py-1 text-xs font-medium text-brand-muted">
      {s?.shortName ?? sector}
    </span>
  );
}
