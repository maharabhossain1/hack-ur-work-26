'use client';

import { motion } from 'framer-motion';
import { CheckCircle, GitBranch, Search, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

const CARDS = [
  {
    icon: Search,
    title: 'Deep exploration',
    detail: 'Auth code · allauth 0.63.0 breaking changes · migration chain',
    color: '#7dd3c8',
    tag: '3 agents',
  },
  {
    icon: GitBranch,
    title: 'Branch + implementation',
    detail: 'SOCIALACCOUNT_PROVIDERS · multi-app Bundle ID / Services ID split',
    color: '#c97a4a',
    tag: 'auto-branch',
  },
  {
    icon: Shield,
    title: 'Code review',
    detail: 'Diff scan · cross-file trace · efficiency · CLAUDE.md conventions',
    color: '#6ee7b7',
    tag: '4 agents',
  },
  {
    icon: CheckCircle,
    title: 'Commit ready',
    detail: 'feat(auth): allauth 0.63.0 · migrations 0006-0009 · JSON field',
    color: '#a3e635',
    tag: 'reviewed',
  },
];

const GLOW = 'rgba(201,122,74,0.7), 0 0 28px rgba(201,122,74,0.3)';

const SEQ = [
  { lit: 0, wait: 700 },
  { lit: 1, wait: 1100 },
  { lit: 2, wait: 1100 },
  { lit: 3, wait: 1100 },
  { lit: 4, wait: 2200 }, // all on — hold
  { lit: 0, wait: 1300 }, // all off — pause
];

export function ProgressiveDeliverables() {
  const [lit, setLit] = useState(0);

  useEffect(() => {
    let step = 0;
    let tid: ReturnType<typeof setTimeout>;

    const tick = () => {
      const entry = SEQ[step % SEQ.length];
      setLit(entry.lit);
      step++;
      tid = setTimeout(tick, entry.wait);
    };

    tid = setTimeout(tick, 1000);

    return () => clearTimeout(tid);
  }, []);

  return (
    <div className="flex flex-col gap-2.5 flex-1 min-h-0">
      {CARDS.map((card, i) => (
        <motion.div
          key={card.title}
          className="flex-1 rounded-xl border px-4 py-2.5 flex flex-col justify-center"
          style={{
            backgroundColor: 'rgba(255,255,255,0.06)',
            borderColor: 'rgba(255,255,255,0.10)',
            animation: `slideInLeft 500ms cubic-bezier(0.16,1,0.3,1) ${300 + i * 80}ms both`,
          }}
          animate={{
            boxShadow: i < lit ? `0 0 0 2px ${GLOW}` : '0 0 0 0px transparent',
          }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
          <div className="flex items-center gap-2.5 mb-1">
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${card.color}20` }}
            >
              <card.icon className="w-3 h-3" style={{ color: card.color }} strokeWidth={1.5} />
            </div>
            <span className="text-[13px] font-bold text-white flex-1">{card.title}</span>
            <span
              className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded"
              style={{ backgroundColor: `${card.color}20`, color: card.color }}
            >
              {card.tag}
            </span>
          </div>
          <p
            className="text-[10px] leading-snug pl-8.5"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            {card.detail}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
