'use client';

import { motion } from 'framer-motion';
import { CalendarClock, Cpu, FileText, Target, Zap, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const CHIPS = [
  { icon: Cpu, label: 'Claude Code', desc: 'executor', color: '#7dd3c8' },
  { icon: FileText, label: 'CLAUDE.md', desc: 'brain', color: '#c97a4a' },
  { icon: Zap, label: 'Skills', desc: 'reusable flows', color: '#6ee7b7' },
  { icon: Target, label: 'Goals', desc: 'parallel agents', color: '#f0c080' },
  { icon: CalendarClock, label: 'Schedule', desc: 'autonomous runs', color: '#a3e635' },
];

// Accumulative sequence: 0 → 1 → 2 → 3 → 4 → 5 (all lit) → hold → 0 (all off) → pause → repeat
const SEQ = [
  { lit: 0, wait: 600 },
  { lit: 1, wait: 1000 },
  { lit: 2, wait: 1000 },
  { lit: 3, wait: 1000 },
  { lit: 4, wait: 1000 },
  { lit: 5, wait: 2200 }, // all on — hold so judges see the full stack
  { lit: 0, wait: 1400 }, // all off — smooth fade out, then pause
];

export function ProgressiveChips() {
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

    // Small initial delay so the slide entrance animation settles first
    tid = setTimeout(tick, 1200);

    return () => clearTimeout(tid);
  }, []);

  return (
    <div className="flex items-center gap-2 flex-1 min-w-0">
      {CHIPS.map((chip, i) => (
        <div key={chip.label} className="flex items-center gap-1.5">
          <motion.div
            className="flex items-center gap-2 rounded-xl px-3 py-2 shrink-0"
            style={{ backgroundColor: `${chip.color}12`, border: `1px solid ${chip.color}30` }}
            animate={{
              boxShadow:
                i < lit
                  ? `0 0 0 2px ${chip.color}bb, 0 0 28px ${chip.color}40`
                  : '0 0 0 0px transparent',
            }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
          >
            <chip.icon
              className="w-3.5 h-3.5 shrink-0"
              style={{ color: chip.color }}
              strokeWidth={1.5}
            />
            <div>
              <p className="text-[11px] font-bold text-[#1a1a1a] leading-none">{chip.label}</p>
              <p className="text-[9px] text-[#888] leading-none mt-0.5">{chip.desc}</p>
            </div>
          </motion.div>
          {i < CHIPS.length - 1 && (
            <ArrowRight className="w-3 h-3 text-[#d0cac3] shrink-0" strokeWidth={1.5} />
          )}
        </div>
      ))}
    </div>
  );
}
