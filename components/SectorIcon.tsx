import { Droplets, Milestone, Zap, Building2, Sprout, Anchor, type LucideIcon } from 'lucide-react';
import type { SectorIcon as SectorIconKey } from '@/lib/data/sectors';

const ICONS: Record<SectorIconKey, LucideIcon> = {
  droplets: Droplets,
  milestone: Milestone,
  zap: Zap,
  building: Building2,
  sprout: Sprout,
  anchor: Anchor,
};

export default function SectorIcon({
  icon,
  className = 'h-6 w-6',
}: {
  icon: SectorIconKey;
  className?: string;
}) {
  const Icon = ICONS[icon];
  return <Icon className={className} aria-hidden />;
}
