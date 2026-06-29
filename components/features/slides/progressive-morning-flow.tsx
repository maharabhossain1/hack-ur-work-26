'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type SvgNode =
  | { tag: 'path'; d: string }
  | { tag: 'circle'; cx: number; cy: number; r: number }
  | { tag: 'rect'; x: number; y: number; width: number; height: number; rx?: number };

const TOOLS: { label: string; desc: string; nodes: SvgNode[] }[] = [
  {
    label: 'Wake Up',
    desc: 'Start day',
    nodes: [
      { tag: 'circle', cx: 12, cy: 12, r: 4 },
      { tag: 'path', d: 'M12 2v2' },
      { tag: 'path', d: 'M12 20v2' },
      { tag: 'path', d: 'm4.93 4.93 1.41 1.41' },
      { tag: 'path', d: 'm17.66 17.66 1.41 1.41' },
      { tag: 'path', d: 'M2 12h2' },
      { tag: 'path', d: 'M20 12h2' },
      { tag: 'path', d: 'm6.34 17.66-1.41 1.41' },
      { tag: 'path', d: 'm19.07 4.93-1.41 1.41' },
    ],
  },
  {
    label: 'ClickUp',
    desc: "What's overdue?",
    nodes: [
      { tag: 'rect', x: 3, y: 4, width: 6, height: 6, rx: 1 },
      { tag: 'path', d: 'M13 5h8' },
      { tag: 'path', d: 'M13 12h8' },
      { tag: 'path', d: 'M13 19h8' },
      { tag: 'path', d: 'm3 17 2 2 4-4' },
    ],
  },
  {
    label: 'Slack',
    desc: 'Who mentioned me?',
    nodes: [
      {
        tag: 'path',
        d: 'M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z',
      },
    ],
  },
  {
    label: 'GitLab',
    desc: 'Any MR feedback?',
    nodes: [
      { tag: 'circle', cx: 6, cy: 6, r: 3 },
      { tag: 'circle', cx: 18, cy: 18, r: 3 },
      { tag: 'path', d: 'M6 21V9a9 9 0 0 0 9 9' },
    ],
  },
  {
    label: 'Gmail',
    desc: 'Any blockers?',
    nodes: [
      { tag: 'rect', x: 2, y: 4, width: 20, height: 16, rx: 2 },
      { tag: 'path', d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7' },
    ],
  },
  {
    label: 'Calendar',
    desc: "What's today?",
    nodes: [
      { tag: 'rect', x: 3, y: 4, width: 18, height: 18, rx: 2 },
      { tag: 'path', d: 'M8 2v4' },
      { tag: 'path', d: 'M16 2v4' },
      { tag: 'path', d: 'M3 10h18' },
    ],
  },
  {
    label: 'Notes',
    desc: 'Write down plan',
    nodes: [
      {
        tag: 'path',
        d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z',
      },
      { tag: 'path', d: 'M14 2v5a1 1 0 0 0 1 1h5' },
      { tag: 'path', d: 'M10 9H8' },
      { tag: 'path', d: 'M16 13H8' },
      { tag: 'path', d: 'M16 17H8' },
    ],
  },
];

// lit = how many cards are active (0–7)
// card[i] active when lit > i
// arrow[i] active when lit > i + 1 (draws after the destination card starts)
const SEQ = [
  { val: 0, wait: 400 },
  { val: 1, wait: 650 },
  { val: 2, wait: 650 },
  { val: 3, wait: 650 },
  { val: 4, wait: 650 },
  { val: 5, wait: 650 },
  { val: 6, wait: 650 },
  { val: 7, wait: 2200 }, // all drawn — hold
  { val: 0, wait: 800 }, // all un-draw — pause
];

function IconSvg({ nodes, active }: { nodes: SvgNode[]; active: boolean }) {
  const dur = 0.4;
  const stagger = 0.05;

  const transition = (i: number) => ({
    duration: dur,
    ease: 'easeInOut' as const,
    delay: active ? i * stagger : 0,
  });

  const animate = { pathLength: active ? 1 : 0, opacity: active ? 1 : 0 };
  const initial = { pathLength: 0, opacity: 0 };

  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="#1e6b62"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {nodes.map((node, i) => {
        const t = transition(i);
        if (node.tag === 'path') {
          return (
            <motion.path key={i} d={node.d} initial={initial} animate={animate} transition={t} />
          );
        }
        if (node.tag === 'circle') {
          return (
            <motion.circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              initial={initial}
              animate={animate}
              transition={t}
            />
          );
        }
        if (node.tag === 'rect') {
          return (
            <motion.rect
              key={i}
              x={node.x}
              y={node.y}
              width={node.width}
              height={node.height}
              rx={node.rx ?? 0}
              initial={initial}
              animate={animate}
              transition={t}
            />
          );
        }
        return null;
      })}
    </svg>
  );
}

function AnimatedArrow({ active }: { active: boolean }) {
  const animate = { pathLength: active ? 1 : 0, opacity: active ? 1 : 0 };
  const initial = { pathLength: 0, opacity: 0 };
  const t = { duration: 0.3, ease: 'easeInOut' as const };

  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="#c5bfb7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <motion.path d="M5 12h14" initial={initial} animate={animate} transition={t} />
      <motion.path
        d="m12 5 7 7-7 7"
        initial={initial}
        animate={animate}
        transition={{ ...t, delay: active ? 0.18 : 0 }}
      />
    </svg>
  );
}

export function ProgressiveMorningFlow() {
  const [lit, setLit] = useState(0);

  useEffect(() => {
    let step = 0;
    let tid: ReturnType<typeof setTimeout>;

    const tick = () => {
      const entry = SEQ[step % SEQ.length];
      setLit(entry.val);
      step++;
      tid = setTimeout(tick, entry.wait);
    };

    tid = setTimeout(tick, 1000);

    return () => clearTimeout(tid);
  }, []);

  return (
    <div className="flex items-stretch gap-1.5">
      {TOOLS.map((tool, i) => (
        <div key={tool.label} className="flex items-center gap-1.5 flex-1 min-w-0">
          <div className="flex-1 flex flex-col items-center gap-2 py-4 px-2 bg-white rounded-2xl border border-[#e8e3dc] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
            <IconSvg nodes={tool.nodes} active={lit > i} />
            <span className="text-[13px] font-bold text-[#1a1a1a] text-center leading-tight">
              {tool.label}
            </span>
            <span className="text-[10px] text-[#bbb] text-center leading-tight">{tool.desc}</span>
          </div>
          {i < TOOLS.length - 1 && <AnimatedArrow active={lit > i + 1} />}
        </div>
      ))}
    </div>
  );
}
