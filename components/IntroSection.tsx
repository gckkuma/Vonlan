import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HomeIntroSlider from '@/components/HomeIntroSlider';
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

        {/* Imagery — auto-rotating project photos */}
        <HomeIntroSlider />
      </div>
    </section>
  );
}
