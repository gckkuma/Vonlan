'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { StatusBadge } from './Badges';
import { PROJECTS, matchesQuery } from '@/lib/data/projects';
import { SECTOR_MAP, type SectorSlug } from '@/lib/data/sectors';

const ORDER: SectorSlug[] = ['water-supply', 'buildings', 'power-energy', 'highways-bridges'];

function fmtBn(v: number) {
  return v >= 1e9 ? `Rs ${(v / 1e9).toFixed(2)} Bn` : `Rs ${Math.round(v / 1e6)} M`;
}

/** Complete project register, grouped by sector — kept in sync with the ?filter= used by the card showcase. */
export default function ProjectRegisterTable() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter') ?? 'all';
  const q = searchParams.get('q') ?? '';

  const groups = useMemo(() => {
    return ORDER.map((slug) => {
      let rows = PROJECTS.filter((p) => p.sector === slug);
      if (filter === 'international') rows = rows.filter((p) => p.overseas);
      else if (filter !== 'all') rows = slug === filter ? rows : [];
      if (q.trim()) rows = rows.filter((p) => matchesQuery(p, q));
      rows = [...rows].sort((a, b) => (b.valueLKR ?? 0) - (a.valueLKR ?? 0));
      return { slug, rows, value: rows.reduce((s, p) => s + (p.valueLKR ?? 0), 0) };
    }).filter((g) => g.rows.length > 0);
  }, [filter, q]);

  const total = groups.reduce((s, g) => s + g.rows.length, 0);
  const narrowed = filter !== 'all' || Boolean(q.trim());

  return (
    <div>
      <p className="mb-8 text-sm text-brand-muted">
        Showing <span className="font-semibold text-brand-dark">{total}</span>{' '}
        {narrowed ? 'matching projects' : 'projects'}
        {narrowed && (
          <Link href="/projects" className="ml-2 font-medium text-brand-green hover:text-brand-greenDark">
            · clear
          </Link>
        )}
      </p>

      {groups.length === 0 ? (
        <p className="py-10 text-center text-brand-muted">No projects match.</p>
      ) : (
        <div className="space-y-12">
          {groups.map(({ slug, rows, value }) => {
            const sector = SECTOR_MAP[slug];
            return (
              <div key={slug}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-brand-green pb-3">
                  <h3 className="text-lg font-bold text-brand-dark">{sector.name}</h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-brand-muted">
                    {rows.length} {rows.length === 1 ? 'project' : 'projects'} · {fmtBn(value)}
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
      )}
    </div>
  );
}
