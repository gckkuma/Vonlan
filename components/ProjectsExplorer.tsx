'use client';

import { useCallback, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { PROJECTS, projectImage } from '@/lib/data/projects';

const FILTERS: { label: string; value: string }[] = [
  { label: 'All work', value: 'all' },
  { label: 'Buildings', value: 'buildings' },
  { label: 'Water Supply', value: 'water-supply' },
  { label: 'Roads & Bridges', value: 'highways-bridges' },
  { label: 'Power & Energy', value: 'power-energy' },
  { label: 'International', value: 'international' },
];

const PAGE_SIZE = 12;

// Latest projects first (newest completion year), then photographed, then value —
// so the most recent work leads while the top cards still show photos.
const yearOf = (p: (typeof PROJECTS)[number]) => {
  const years = String(p.year ?? '').match(/\d{4}/g);
  return years ? Math.max(...years.map(Number)) : 0;
};
const ORDERED = [...PROJECTS].sort((a, b) => {
  if (yearOf(b) !== yearOf(a)) return yearOf(b) - yearOf(a);
  const ai = projectImage(a) ? 1 : 0;
  const bi = projectImage(b) ? 1 : 0;
  if (ai !== bi) return bi - ai;
  return (b.valueLKR ?? 0) - (a.valueLKR ?? 0);
});

export default function ProjectsExplorer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filter = searchParams.get('filter') ?? 'all';

  const setFilter = useCallback(
    (value: string) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      if (value === 'all') params.delete('filter');
      else params.set('filter', value);
      const qs = params.toString();
      router.replace(qs ? `/projects?${qs}` : '/projects', { scroll: false });
      setVisible(PAGE_SIZE);
    },
    [router, searchParams],
  );

  const filtered = useMemo(
    () =>
      ORDERED.filter((p) => {
        if (filter === 'all') return true;
        if (filter === 'international') return p.overseas;
        return p.sector === filter;
      }),
    [filter],
  );

  const shown = filtered.slice(0, visible);

  return (
    <div>
      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto border-b border-brand-stone px-1 pb-6">
        {FILTERS.map((pill) => {
          const active = filter === pill.value;
          return (
            <button
              key={pill.value}
              type="button"
              onClick={() => setFilter(pill.value)}
              aria-pressed={active}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active
                  ? 'bg-brand-green text-white'
                  : 'border border-brand-stone bg-white text-brand-dark hover:border-brand-green hover:text-brand-green'
              }`}
            >
              {pill.label}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-brand-muted">
        Showing <span className="font-semibold text-brand-dark">{shown.length}</span> of{' '}
        <span className="font-semibold text-brand-dark">{filtered.length}</span> projects
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((project) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {visible < filtered.length && (
        <div className="mt-12 flex justify-center">
          <button type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)} className="btn-outline">
            Load more projects
          </button>
        </div>
      )}
    </div>
  );
}
