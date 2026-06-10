'use client';

import { useCallback, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '@/lib/data/projects';
import type { SectorSlug } from '@/lib/data/sectors';

const SECTOR_PILLS: { label: string; value: SectorSlug | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Water', value: 'water-supply' },
  { label: 'Highways', value: 'highways-bridges' },
  { label: 'Power', value: 'power-energy' },
  { label: 'Buildings', value: 'buildings' },
];

const STATUS_PILLS: { label: string; value: 'all' | 'completed' | 'ongoing' }[] = [
  { label: 'All status', value: 'all' },
  { label: 'Completed', value: 'completed' },
  { label: 'Ongoing', value: 'ongoing' },
];

const PAGE_SIZE = 9;

export default function ProjectsExplorer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(PAGE_SIZE);

  const sector = searchParams.get('sector') ?? 'all';
  const status = searchParams.get('status') ?? 'all';

  const setParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      if (value === 'all') params.delete(key);
      else params.set(key, value);
      const qs = params.toString();
      router.replace(qs ? `/projects?${qs}` : '/projects', { scroll: false });
      setVisible(PAGE_SIZE);
    },
    [router, searchParams],
  );

  const filtered = useMemo(
    () =>
      PROJECTS.filter((p) => {
        const sectorOk = sector === 'all' || p.sector === sector;
        const statusOk = status === 'all' || p.status.toLowerCase() === status;
        return sectorOk && statusOk;
      }),
    [sector, status],
  );

  const shown = filtered.slice(0, visible);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col gap-4 border-b border-brand-stone pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
          {SECTOR_PILLS.map((pill) => {
            const isActive = sector === pill.value;
            return (
              <button
                key={pill.value}
                type="button"
                onClick={() => setParam('sector', pill.value)}
                aria-pressed={isActive}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-brand-green text-white'
                    : 'border border-brand-stone bg-white text-brand-dark hover:border-brand-green hover:text-brand-green'
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>
        <div className="flex gap-2">
          {STATUS_PILLS.map((pill) => {
            const isActive = status === pill.value;
            return (
              <button
                key={pill.value}
                type="button"
                onClick={() => setParam('status', pill.value)}
                aria-pressed={isActive}
                className={`whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-brand-dark text-white'
                    : 'border border-brand-stone bg-white text-brand-muted hover:text-brand-dark'
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Count */}
      <p className="mt-6 text-sm text-brand-muted">
        Showing <span className="font-semibold text-brand-dark">{shown.length}</span> of{' '}
        <span className="font-semibold text-brand-dark">{filtered.length}</span> projects
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-brand-muted">No projects match these filters yet.</p>
      ) : (
        <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        </motion.div>
      )}

      {/* Load more */}
      {visible < filtered.length && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="btn-outline"
          >
            Load more projects
          </button>
        </div>
      )}
    </div>
  );
}
