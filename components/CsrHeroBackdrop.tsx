import Image from 'next/image';

const PHOTOS = [
  'school-donation',
  'hermitage-opening',
  'school-students',
  'hermitage-dana',
  'school-ceremony',
  'hermitage-procession',
];

const ROWS = [
  { items: PHOTOS, anim: 'animate-marquee' },
  { items: [...PHOTOS].reverse(), anim: 'animate-marquee-rev' },
];

/** A drifting wall of CSR photo cards — used as the CSR hero backdrop behind the overlay. */
export default function CsrHeroBackdrop() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-4 opacity-50">
      {ROWS.map((row, r) => (
        <div key={r} className="overflow-hidden">
          <ul className={`flex w-max gap-4 ${row.anim}`}>
            {[...row.items, ...row.items].map((src, i) => (
              <li
                key={`${src}-${i}`}
                className="relative h-32 w-52 shrink-0 overflow-hidden rounded-xl sm:h-40 sm:w-64"
              >
                <Image src={`/images/csr/${src}.jpg`} alt="" fill sizes="256px" className="object-cover" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
