import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { SITE, CONTACT, CIDA_GRADES } from '@/lib/data/site';
import { SECTORS } from '@/lib/data/sectors';

const COMPANY = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Credentials', href: '/credentials' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer>
      {/* Main footer over the skyline background */}
      <div className="relative isolate overflow-hidden bg-brand-offwhite text-brand-dark">
        <Image
          src="/images/footer-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-offwhite via-brand-offwhite/90 to-brand-offwhite/30" aria-hidden />

        <div className="container-x relative grid grid-cols-2 gap-x-8 gap-y-12 pb-44 pt-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand — logo + 3 lines */}
          <div className="col-span-2 md:col-span-1">
            <Logo variant="light" height={38} />
            <p className="mt-5 text-sm font-semibold text-brand-dark">{SITE.name}</p>
            <p className="mt-1 max-w-xs text-sm text-brand-muted">{CONTACT.address}</p>
            <p className="mt-1 text-sm text-brand-muted">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-greenDark">{CONTACT.email}</a>
              {' · '}
              {CONTACT.phones[0]}
            </p>
          </div>

          <FooterCol title="Company" items={COMPANY} />
          <FooterCol
            title="Capabilities"
            items={SECTORS.map((s) => ({ label: s.name, href: `/services/${s.slug}` }))}
          />

          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-dark">Accreditation</h3>
            <ul className="mt-5 space-y-2 text-sm">
              {CIDA_GRADES.map((c) => (
                <li key={c.sector} className="flex items-center justify-between gap-6 text-brand-muted">
                  <span>{c.sector}</span>
                  <span className="font-semibold text-brand-greenDark">CIDA {c.grade}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="bg-brand-forest">
        <div className="container-x flex flex-col gap-3 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} {SITE.name}. All rights reserved · Reg. No.{' '}
              {CONTACT.companyRegistration}
            </p>
            <p>
              Web Design &amp; Development by{' '}
              <a href="https://lkwebdesign.com" target="_blank" rel="noopener noreferrer" className="font-medium text-white/70 hover:text-white">
                lkwebdesign.com
              </a>
              {' | '}
              <a href="https://isletech.io" target="_blank" rel="noopener noreferrer" className="font-medium text-white/70 hover:text-white">
                Isletech.io
              </a>
            </p>
          </div>
          <a href="#main" className="inline-flex items-center gap-1.5 font-medium text-white/70 hover:text-white">
            Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
  className = '',
}: {
  title: string;
  items: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-dark">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className="text-brand-muted transition-colors hover:text-brand-greenDark">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
