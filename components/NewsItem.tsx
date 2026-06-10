import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { NewsItem as NewsItemType } from '@/lib/data/news';

export default function NewsItem({ item }: { item: NewsItemType }) {
  const inner = (
    <div className="group flex items-start gap-4 border-b border-brand-stone py-5 last:border-b-0">
      <div className="w-24 shrink-0">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
          {item.date}
        </span>
      </div>
      <div className="flex-1">
        <span className="mb-1 inline-flex rounded-full bg-brand-greenLight px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-greenDark">
          {item.sector}
        </span>
        <p className="text-base font-medium leading-snug text-brand-dark transition-colors group-hover:text-brand-greenDark">
          {item.headline}
        </p>
      </div>
      {item.sectorSlug && (
        <ArrowRight
          className="mt-1 h-4 w-4 shrink-0 text-brand-muted opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden
        />
      )}
    </div>
  );

  if (item.sectorSlug) {
    return <Link href={`/services/${item.sectorSlug}`}>{inner}</Link>;
  }
  return inner;
}
