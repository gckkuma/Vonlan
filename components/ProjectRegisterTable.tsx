import Link from 'next/link';
import { StatusBadge } from './Badges';
import { PROJECTS, SECTOR_TOTALS } from '@/lib/data/projects';
import { SECTOR_MAP, type SectorSlug } from '@/lib/data/sectors';

const ORDER: SectorSlug[] = ['water-supply', 'buildings', 'power-energy', 'highways-bridges'];

function fmtBn(v: number) {
  return v >= 1e9 ? `Rs ${(v / 1e9).toFixed(2)} Bn` : `Rs ${Math.round(v / 1e6)} M`;
}

/** Complete project register, grouped by sector — mirrors the source spreadsheets. */
export default function ProjectRegisterTable() {
  return (
    <div className="space-y-12">
      {ORDER.map((slug) => {
        const sector = SECTOR_MAP[slug];
        const rows = PROJECTS.filter((p) => p.sector === slug).sort(
          (a, b) => (b.valueLKR ?? 0) - (a.valueLKR ?? 0),
        );
        if (rows.length === 0) return null;
        const totals = SECTOR_TOTALS[slug];
        return (
          <div key={slug}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-brand-dark pb-3">
              <h3 className="text-lg font-bold text-brand-dark">{sector.name}</h3>
              <span className="font-mono text-xs uppercase tracking-wider text-brand-muted">
                {totals.count} projects · {fmtBn(totals.value)}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="font-mono text-[0.68rem] uppercase tracking-wider text-brand-muted">
                    <th className="py-3 pr-4 font-medium">Project</th>
                    <th className="py-3 pr-4 font-medium">Client</th>
                    <th className="py-3 pr-4 font-medium">Value</th>
                    <th className="py-3 pr-4 font-medium">Year</th>
                    <th className="py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((p) => (
                    <tr key={p.slug} className="border-t border-brand-stone align-top hover:bg-brand-offwhite">
                      <td className="py-3 pr-4">
                        <Link href={`/projects/${p.slug}`} className="font-medium text-brand-dark hover:text-brand-greenDark">
                          {p.name}
                        </Link>
                      </td>
                      <td className="py-3 pr-4 text-brand-muted">{p.client}</td>
                      <td className="whitespace-nowrap py-3 pr-4 font-mono text-xs font-semibold text-brand-greenDark">
                        {p.value ?? '—'}
                      </td>
                      <td className="whitespace-nowrap py-3 pr-4 text-brand-muted">{p.year}</td>
                      <td className="py-3">
                        <StatusBadge status={p.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}
