import type { Config } from 'tailwindcss';

/**
 * Palette anchored on the two brand colours (#2A9341 / #221F1A), used as solid
 * trust blocks — dark nav/footer, green CTAs & badges — with warm neutrals.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2A9341',
          greenDark: '#1E6E30',
          greenLight: '#E8F5EC',
          dark: '#221F1A',
          darkCard: '#2E2B25',
          darkElevated: '#3D3830',
          offwhite: '#F7F6F3',
          stone: '#EAE8E3',
          muted: '#7A796F',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
