import Link from 'next/link';
import { MapPin, Phone, Mail, Printer, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { SITE, CONTACT, CERT_BAR } from '@/lib/data/site';
import { SECTORS } from '@/lib/data/sectors';

const COMPANY_LINKS = [
  { label: 'About Vonlan', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Credentials', href: '/credentials' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-3">
        {/* Brand + address */}
        <div>
          <Logo variant="dark" height={36} />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Infrastructure construction across Sri Lanka since 2007. A subsidiary of{' '}
            <a
              href={SITE.parent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 underline decoration-brand-green/60 underline-offset-2 hover:text-white"
            >
              {SITE.parent.name}
            </a>
            .
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
              <span>
                {CONTACT.phones.slice(0, 2).map((phone) => (
                  <span key={phone} className="block">
                    {phone}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Printer className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
              <span>Fax {CONTACT.fax}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
              <span>{CONTACT.email}</span>
            </li>
          </ul>
        </div>

        {/* Company links */}
        <div className="md:justify-self-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services links */}
        <div className="md:justify-self-end">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {SECTORS.map((sector) => (
              <li key={sector.slug}>
                <Link
                  href={`/services/${sector.slug}`}
                  className="transition-colors hover:text-white"
                >
                  {sector.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cert + legal bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved. · Reg. No.{' '}
            {CONTACT.companyRegistration}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {CERT_BAR.map((c) => (
                <li key={c} className="font-medium text-white/60">
                  {c}
                </li>
              ))}
            </ul>
            <a
              href="#main"
              className="inline-flex items-center gap-1.5 font-medium text-white/60 transition-colors hover:text-white"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
