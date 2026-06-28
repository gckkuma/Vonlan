import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2 } from 'lucide-react';
import { ABOUT } from '@/lib/data/about';

/** Company intro — copy + layered imagery, with a CTA into the About page. */
export default function IntroSection() {
  return (
    <section className="section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <span className="eyebrow">Who we are</span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
            A Sanken Group company building Sri Lanka’s essential infrastructure
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-muted">{ABOUT.story[0]}</p>
          <p className="mt-4 text-lg leading-relaxed text-brand-muted">{ABOUT.story[1]}</p>
          <Link href="/about" className="btn-green mt-8">
            Learn more about us
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        {/* Layered imagery */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/work/cargills-square.jpg"
              alt="Vonlan-built Cargills Square, Bandarawela"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-6 hidden w-44 overflow-hidden rounded-2xl border-4 border-brand-offwhite shadow-xl sm:block lg:w-56">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/work/galadari-ballroom-1.jpg"
                alt="Galadari Hotel ballroom by Vonlan"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -right-4 -top-6 hidden items-center gap-3 rounded-2xl bg-brand-dark px-5 py-4 text-white shadow-xl md:flex">
            <Building2 className="h-7 w-7 text-brand-green" aria-hidden />
            <div>
              <div className="text-2xl font-bold leading-none">18+ yrs</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/60">Since 2007</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
