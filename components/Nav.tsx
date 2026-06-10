'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS } from '@/lib/data/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith('/services')) return pathname.startsWith('/services');
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-brand-dark transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        {/* Logo left */}
        <Logo variant="dark" height={34} />

        {/* Links centre */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-brand-green'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA right */}
        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn-green hidden sm:inline-flex">
            Contact us
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/10 lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={`block rounded-lg px-3 py-3 text-base font-medium ${
                      isActive(link.href) ? 'bg-white/5 text-brand-green' : 'text-white/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/contact" className="btn-green w-full">
                  Contact us
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
