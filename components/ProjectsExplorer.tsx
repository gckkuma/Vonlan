'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { PROJECTS, hasImage, matchesQuery } from '@/lib/data/projects';

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
// Only photographed projects appear as cards; photo-less ones stay in the register
// and reappear here automatically once a photo is added.
const ORDERED = PROJECTS.filter(hasImage).sort((a, b) => {
  if (yearOf(b) !== yearOf(a)) return yearOf(b) - yearOf(a);
  return (b.valueLKR ?? 0) - (a.valueLKR ?? 0);
});

export default function ProjectsExplorer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [query, setQuery] = useState(searchParams.get('q') ?? '');

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

  // Debounced sync of the search term to the URL so the register table follows too.
  // Reads the live URL at fire time so a filter change mid-debounce isn't clobbered.
  useEffect(() => {
    const t = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      if (query.trim()) params.set('q', query.trim());
      else params.delete('q');
      const qs = params.toString();
      router.replace(qs ? `/projects?${qs}` : '/projects', { scroll: false });
    }, 250);
    return () => clearTimeout(t);
  }, [query, router]);

  // Typing changes the visible page size back to the first page.
  useEffect(() => setVisible(PAGE_SIZE), [query]);

  const filtered = useMemo(
    () =>
      ORDERED.filter((p) => {
        const sectorOk = filter === 'all' || (filter === 'international' ? p.overseas : p.sector === filter);
        return sectorOk && matchesQuery(p, query);
      }),
    [filter, query],
  );

  const shown = filtered.slice(0, visible);

  return (
    <div>
      <div className="relative mb-5">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" aria-hidden />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects by name, client, sector or year…"
          aria-label="Search projects"
          className="w-full rounded-full border border-brand-stone bg-white py-3 pl-11 pr-11 text-sm text-brand-dark placeholder:text-brand-muted focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-brand-muted transition-colors hover:bg-brand-offwhite hover:text-brand-dark"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        )}
      </div>

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

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-brand-muted">
          No projects match your search{query ? <> for “<span className="font-semibold text-brand-dark">{query}</span>”</> : null}.
        </p>
      ) : (
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
      )}

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
