import Image from 'next/image';

/** All client logo slugs (files in /public/images/clients). */
const LOGOS = [
  'nwsdb', 'ceb', 'rda', 'civil-aviation', 'sl-navy', 'megapolis', 'sri-lanka-cricket',
  'red-cross', 'alila', 'hilton', 'galadari', 'uga', 'toyota', 'vogue', 'adb',
  'vatech-wabag', 'vinci', 'hyundai', 'biwater', 'catic', 'ltl', 'ladies-college',
  'sujatha', 'adhitya', 'nuga-rosmead', 'dic',
];

const ROWS = [
  { items: LOGOS.slice(0, 9), anim: 'animate-marquee' },
  { items: LOGOS.slice(9, 18), anim: 'animate-marquee-rev' },
  { items: LOGOS.slice(18), anim: 'animate-marquee-slow' },
];

/** A drifting wall of client logos — used as a header backdrop behind the dark overlay. */
export default function ClientLogoBackdrop() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-4 opacity-30">
      {ROWS.map((row, r) => (
        <div key={r} className="overflow-hidden">
          <ul className={`flex w-max gap-4 ${row.anim}`}>
            {[...row.items, ...row.items].map((slug, i) => (
              <li
                key={`${slug}-${i}`}
                className="flex h-14 w-32 shrink-0 items-center justify-center rounded-lg bg-white/90 px-4"
              >
                <span className="relative block h-8 w-full">
                  <Image src={`/images/clients/${slug}.png`} alt="" fill sizes="128px" className="object-contain" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
