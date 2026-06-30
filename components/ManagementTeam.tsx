import Reveal from './Reveal';
import { MANAGEMENT } from '@/lib/data/management';

/** Card grid of the management team — clean name + designation, no icons or photos. */
export default function ManagementTeam() {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {MANAGEMENT.map((m) => (
        <Reveal key={m.name}>
          <div className="group h-full rounded-2xl border border-brand-stone bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-green hover:shadow-lg hover:shadow-brand-green/5">
            <h3 className="font-bold leading-tight text-brand-dark">{m.name}</h3>
            <p className="mt-1.5 text-sm leading-snug text-brand-green">{m.designation}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
