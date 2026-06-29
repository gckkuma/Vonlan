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
