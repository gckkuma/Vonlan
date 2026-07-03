import Image from '@/components/Img';

/** A drifting two-row wall of photo cards — used as a hero backdrop (behind the overlay). */
export default function HeroPhotoWall({ photos, dir }: { photos: string[]; dir: string }) {
  const rows = [
    { items: photos, anim: 'animate-marquee' },
    { items: [...photos].reverse(), anim: 'animate-marquee-rev' },
  ];
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-4 opacity-70">
      {rows.map((row, r) => (
        <div key={r} className="overflow-hidden">
          <ul className={`flex w-max gap-4 ${row.anim}`}>
            {[...row.items, ...row.items].map((src, i) => (
              <li
                key={`${src}-${i}`}
                className="relative h-32 w-52 shrink-0 overflow-hidden rounded-xl sm:h-40 sm:w-64"
              >
                <Image src={`${dir}/${src}.jpg`} alt="" fill sizes="256px" className="object-cover" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
