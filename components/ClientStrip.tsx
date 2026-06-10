import SectionHeading from './SectionHeading';
import { CLIENTS } from '@/lib/data/site';

/**
 * "Trusted by" credibility band — a clean grid of marquee client and partner
 * names. Static (no marquee) so it reads reliably and prints cleanly.
 */
export default function ClientStrip({
  className = '',
}: {
  className?: string;
}) {
  return (
    <section className={`section border-y border-brand-stone bg-brand-offwhite ${className}`}>
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Trusted by"
          title="Clients & partners across Sri Lanka and beyond"
          description="We work directly for national authorities and alongside leading international contractors."
          className="mx-auto"
        />
        <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-brand-stone bg-brand-stone sm:grid-cols-3 lg:grid-cols-4">
          {CLIENTS.map((client) => (
            <li
              key={client}
              className="flex min-h-[88px] items-center justify-center bg-white px-5 py-6 text-center text-sm font-semibold uppercase tracking-wide text-brand-muted transition-colors hover:text-brand-greenDark"
            >
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
