import Image from '@/components/Img';
import SectionHeading from './SectionHeading';

/**
 * Animated client-logo marquee. Real logos on clean white tiles, scrolling
 * continuously (paused on hover, static under reduced-motion).
 */
const LOGOS: { slug: string; name: string }[] = [
  { slug: 'alila', name: 'Alila Kothaifaru Maldives' },
  { slug: 'hilton', name: 'Hilton Colombo' },
  { slug: 'sri-lanka-cricket', name: 'Sri Lanka Cricket' },
  { slug: 'galadari', name: 'Galadari Hotels' },
  { slug: 'toyota', name: 'Toyota Lanka' },
  { slug: 'adb', name: 'Asian Development Bank' },
  { slug: 'sl-navy', name: 'Sri Lanka Navy' },
  { slug: 'vatech-wabag', name: 'VA Tech Wabag' },
  { slug: 'vinci', name: 'VINCI Construction' },
  { slug: 'hyundai', name: 'Hyundai Engineering' },
  { slug: 'rda', name: 'Road Development Authority' },
  { slug: 'nwsdb', name: 'National Water Supply & Drainage Board' },
  { slug: 'civil-aviation', name: 'Civil Aviation Authority' },
  { slug: 'red-cross', name: 'Sri Lanka Red Cross Society' },
  { slug: 'ceb', name: 'Ceylon Electricity Board' },
  { slug: 'ladies-college', name: "Ladies' College, Colombo" },
  { slug: 'ltl', name: 'LTL Holdings' },
  { slug: 'biwater', name: 'Biwater International' },
  { slug: 'uga', name: 'Uga Escapes' },
  { slug: 'vogue', name: 'Vogue Jewellers' },
  { slug: 'catic', name: 'CATIC' },
  { slug: 'cargills', name: 'Cargills (Ceylon) PLC' },
  { slug: 'jica', name: 'JICA' },
  { slug: 'airport-aviation', name: 'Airport & Aviation Services' },
];

const ROWS = [
  { items: LOGOS.slice(0, 8), anim: 'animate-marquee' },
  { items: LOGOS.slice(8, 16), anim: 'animate-marquee-rev' },
  { items: LOGOS.slice(16), anim: 'animate-marquee-slow' },
];

function LogoItem({ slug, name }: { slug: string; name: string }) {
  return (
    <li className="flex h-24 w-56 shrink-0 items-center justify-center rounded-xl border border-brand-stone bg-white px-6">
      <span className="relative block h-14 w-full">
        <Image src={`/images/clients/${slug}.png`} alt={name} fill sizes="200px" className="object-contain" />
      </span>
    </li>
  );
}

export default function ClientLogoWall() {
  return (
    <section className="section border-y border-brand-stone bg-brand-offwhite">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Trusted by"
          title="Clients & partners across Sri Lanka and the Maldives"
          description="We work directly for national authorities and alongside leading international hospitality, engineering and infrastructure organisations."
          className="mx-auto"
        />
      </div>

      <div className="mt-12 space-y-4">
        {ROWS.map((row, r) => (
          <div key={r} className="marquee-row edge-fade overflow-hidden">
            <ul className={`flex w-max gap-4 ${row.anim}`}>
              {[...row.items, ...row.items].map((logo, idx) => (
                <LogoItem key={`${logo.slug}-${idx}`} {...logo} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="container-x mt-10 text-center text-sm text-brand-muted">
        …and many more, including the Ritz-Carlton Maldives and Suez International.
      </p>
    </section>
  );
}
