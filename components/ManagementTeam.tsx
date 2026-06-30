import {
  Crown,
  Star,
  Building2,
  UserCog,
  ShoppingCart,
  Banknote,
  Users,
  Rocket,
  Megaphone,
  HardHat,
  Cog,
  ClipboardList,
  type LucideIcon,
} from 'lucide-react';
import Reveal from './Reveal';
import { MANAGEMENT } from '@/lib/data/management';

/** Pick an icon that reflects the role. Order matters — most specific first. */
function roleIcon(designation: string): LucideIcon {
  const d = designation.toLowerCase();
  if (d.includes('deputy chief executive')) return Star;
  if (d.includes('chief executive')) return Crown;
  if (d.includes('procurement')) return ShoppingCart;
  if (d.includes('finance')) return Banknote;
  if (/\bhr\b|human/.test(d)) return Users;
  if (d.includes('special project')) return Rocket;
  if (d.includes('contract') || d.includes('marketing')) return Megaphone;
  if (d.includes('mechanical') || d.includes('engineer')) return Cog;
  if (d.includes('deputy general manager')) return Building2;
  if (d.includes('assistant general manager')) return UserCog;
  if (d.includes('project')) return HardHat;
  if (d.includes('manager')) return ClipboardList;
  return UserCog;
}

/** Card grid of the management team — no photos, role icon per designation. */
export default function ManagementTeam() {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {MANAGEMENT.map((m) => {
        const Icon = roleIcon(m.designation);
        return (
          <Reveal key={m.name}>
            <div className="group flex h-full items-start gap-4 rounded-2xl border border-brand-stone bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-green hover:shadow-lg hover:shadow-brand-green/5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-greenLight text-brand-greenDark transition-colors group-hover:bg-brand-green group-hover:text-white">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="font-bold leading-tight text-brand-dark">{m.name}</h3>
                <p className="mt-1 text-sm leading-snug text-brand-muted">{m.designation}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
