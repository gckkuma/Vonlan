import { BadgeCheck } from 'lucide-react';

interface CertBadgeProps {
  code: string;
  name: string;
  scope?: string;
  since?: string;
}

export default function CertBadge({ code, name, scope, since }: CertBadgeProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-brand-stone bg-white p-6">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-greenLight text-brand-green">
          <BadgeCheck className="h-6 w-6" aria-hidden />
        </span>
        {since && (
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">{since}</span>
        )}
      </div>
      <h3 className="mt-4 text-lg font-bold text-brand-dark">{code}</h3>
      <p className="mt-1 text-sm font-medium text-brand-greenDark">{name}</p>
      {scope && <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">{scope}</p>}
    </div>
  );
}
