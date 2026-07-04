'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  Building2,
  Cog,
  DraftingCompass,
  Drill,
  Frame,
  Globe,
  HardHat,
  PencilRuler,
  Plug,
  ShoppingCart,
  TreePine,
  Truck,
  type LucideIcon,
} from 'lucide-react';

interface Company {
  name: string;
  cap: string;
  Icon: LucideIcon;
}

/** The group ecosystem, ordered design → build → overseas → materials → supply. */
const COMPANIES: Company[] = [
  { name: 'San Developers', cap: 'Design & planning', Icon: DraftingCompass },
  { name: 'Sanken Design Dept.', cap: 'Design work', Icon: PencilRuler },
  { name: 'San Piling', cap: 'Piling work', Icon: Drill },
  { name: 'Sanken Construction', cap: 'General construction', Icon: Building2 },
  { name: 'Sanhil Engineering', cap: 'Central region', Icon: HardHat },
  { name: 'Sanken Overseas', cap: 'Overseas construction', Icon: Globe },
  { name: 'Skills Trading', cap: 'Steel & aluminium', Icon: Frame },
  { name: 'Sanken Ready-mix', cap: 'Ready-mix supply', Icon: Truck },
  { name: 'City Concrete', cap: 'Ready-mix supply', Icon: Truck },
  { name: 'San Ready-mix', cap: 'Ready-mix supply', Icon: Truck },
  { name: 'Mesas International', cap: 'MEP design', Icon: Plug },
  { name: 'Sanken Timber Yard', cap: 'Timber material', Icon: TreePine },
  { name: 'San Mech', cap: 'All machinery', Icon: Cog },
  { name: 'San Trading', cap: 'Hardware materials', Icon: ShoppingCart },
];

const N = COMPANIES.length;
const R = 40; // node ring radius, % of the square
const NODES = COMPANIES.map((c, i) => {
  const a = ((-90 + (i * 360) / N) * Math.PI) / 180;
  return { ...c, x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
});

const spokeV: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i: number) => ({ pathLength: 1, opacity: 1, transition: { delay: 0.15 + i * 0.045, duration: 0.5 } }),
};
const nodeV: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: 0.35 + i * 0.05, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } }),
};
const centerV: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

function NodeFace({ name, cap, Icon, compact }: Company & { compact?: boolean }) {
  return (
    <>
      <span className={`flex items-center justify-center rounded-full bg-brand-greenLight text-brand-green ${compact ? 'h-6 w-6' : 'h-8 w-8'}`}>
        <Icon className={compact ? 'h-3.5 w-3.5' : 'h-4 w-4'} aria-hidden />
      </span>
      <span className={`mt-1 font-bold leading-tight text-brand-dark ${compact ? 'text-[10px]' : 'text-xs'}`}>{name}</span>
      <span className={`leading-tight text-brand-muted ${compact ? 'text-[9px]' : 'text-[11px]'}`}>{cap}</span>
    </>
  );
}

export default function StrengthDiagram() {
  const reduce = useReducedMotion();

  return (
    <div>
      {/* Radial hub-and-spoke — md and up */}
      <motion.div
        className="relative mx-auto hidden aspect-square w-full max-w-[600px] md:block"
        initial={reduce ? false : 'hidden'}
        animate={reduce ? 'show' : undefined}
        whileInView={reduce ? undefined : 'show'}
        viewport={reduce ? undefined : { once: true, margin: '-12%' }}
      >
        {/* Spokes + decorative ring */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          <motion.circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#2A9341"
            strokeOpacity="0.18"
            strokeWidth="0.3"
            strokeDasharray="1.5 2.5"
            style={{ transformOrigin: '50px 50px' }}
            animate={reduce ? undefined : { rotate: 360 }}
            transition={reduce ? undefined : { duration: 60, ease: 'linear', repeat: Infinity }}
          />
          {NODES.map((n, i) => (
            <motion.line
              key={n.name}
              x1="50"
              y1="50"
              x2={n.x}
              y2={n.y}
              stroke="#2A9341"
              strokeOpacity="0.35"
              strokeWidth="0.4"
              custom={i}
              variants={spokeV}
            />
          ))}
        </svg>

        {/* Centre hub — outer div positions (static), inner motion animates */}
        <div className="absolute left-1/2 top-1/2 aspect-square w-[38%] -translate-x-1/2 -translate-y-1/2">
          <motion.div
            variants={centerV}
            className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white text-center shadow-lg ring-1 ring-brand-green/20"
          >
            <Building2 className="h-6 w-6 text-brand-green" aria-hidden />
            <span className="mt-1 font-display text-base font-bold leading-none text-brand-forest sm:text-lg">Vonlan</span>
            <span className="font-display text-xs font-semibold leading-tight text-brand-forest">Constructions</span>
            <span className="mt-1 text-[9px] uppercase tracking-wider text-brand-muted">Group ecosystem</span>
          </motion.div>
        </div>

        {/* Satellite nodes — outer div positions (static), inner motion animates */}
        {NODES.map((n, i) => (
          <div
            key={n.name}
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            className="absolute z-10 w-[17%] -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              custom={i}
              variants={nodeV}
              className="flex flex-col items-center rounded-2xl bg-white px-1.5 py-2 text-center shadow-sm ring-1 ring-brand-stone"
            >
              <NodeFace {...n} compact />
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Grid fallback — small screens */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:hidden">
        <div className="col-span-2 flex flex-col items-center justify-center rounded-2xl bg-brand-forest px-4 py-5 text-center text-white sm:col-span-3">
          <Building2 className="h-7 w-7 text-brand-green" aria-hidden />
          <span className="mt-1 font-display text-lg font-bold leading-none">Vonlan Constructions</span>
          <span className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Group ecosystem</span>
        </div>
        {COMPANIES.map((c) => (
          <div key={c.name} className="flex flex-col items-center rounded-2xl bg-white px-2 py-3 text-center shadow-sm ring-1 ring-brand-stone">
            <NodeFace {...c} />
          </div>
        ))}
      </div>
    </div>
  );
}
