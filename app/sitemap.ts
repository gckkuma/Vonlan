import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/data/site';
import { SECTORS } from '@/lib/data/sectors';
import { PROJECTS } from '@/lib/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const staticRoutes = ['', '/about', '/services', '/projects', '/clients', '/commitments', '/credentials', '/careers', '/contact'].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    }),
  );

  const sectorRoutes = SECTORS.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...sectorRoutes, ...projectRoutes];
}
