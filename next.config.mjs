/**
 * Next.js configuration for Vonlan Constructions.
 *
 * Note: the brief specified `next.config.ts`, but TypeScript config files are
 * only read by Next.js 15+. This project targets Next.js 14 (App Router), which
 * loads `next.config.mjs`. The behaviour requested — the /achivements -> /credentials
 * 301 redirect — is implemented below and is fully functional.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Our largest source art is ~2200px; drop the 3840 variant so ultra-wide
    // screens don't pull a needlessly huge image for 100vw heroes.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Optimised images are keyed by their params — cache them hard.
    minimumCacheTTL: 2678400, // 31 days
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async redirects() {
    return [
      {
        source: '/achivements',
        destination: '/credentials',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
