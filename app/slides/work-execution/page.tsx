import {
  GitBranch,
  ArrowRight,
  CheckCircle,
  Zap,
  Search,
  Shield,
  FileCode,
  Terminal,
  Clock,
  Users,
  Cpu,
} from 'lucide-react';

import { ImageStack } from '@/components/features/slides/image-stack';
import { GlowText } from '@/components/features/slides/motion-wrappers';
import { ProgressiveDeliverables } from '@/components/features/slides/progressive-deliverables';
import { SlideShell } from '@/components/features/slides/slide-shell';

const anim = (name: string, delay: number, dur = 500) =>
  ({
    animation: `${name} ${dur}ms cubic-bezier(0.16,1,0.3,1) both`,
    animationDelay: `${delay}ms`,
  }) as React.CSSProperties;

const EXEC_IMAGES = [
  {
    src: '/slides/exec-prompt.png',
    label: '01 · The Prompt',
    caption: 'Ticket ID + goal + instructions: explore, branch, test, review',
  },
  {
    src: '/slides/exec-agents.png',
    label: '02 · Parallel Explore',
    caption: '3 Explore agents fan out — auth code, allauth docs, migrations',
  },
  {
    src: '/slides/exec-review.png',
    label: '03 · Code Review',
    caption: '4 agents: diff scan, cross-file trace, efficiency, conventions',
  },
  {
    src: '/slides/exec-commit.png',
    label: '04 · Final Commit',
    caption: 'feat(auth): upgrade django-allauth 0.57.1 → 0.63.0 · multi-app Apple Sign-In',
  },
];

const phases = [
  {
    time: '12:26',
    label: 'Prompt sent',
    detail: 'Ticket ID + goal + test + review instructions',
    color: '#c97a4a',
    icon: Terminal,
  },
  {
    time: '12:27',
    label: '3 agents explore',
    detail: 'Auth code · allauth docs · migrations — parallel',
    color: '#7dd3c8',
    icon: Search,
  },
  {
    time: '12:43',
    label: '4 agents review',
    detail: '/python-backend-review fans out across 4 angles',
    color: '#6ee7b7',
    icon: Shield,
  },
  {
    time: '12:57',
    label: 'Commit ready',
    detail: 'feat(auth): allauth 0.63.0 · Apple Sign-In multi-app',
    color: '#a3e635',
    icon: CheckCircle,
  },
];

const pattern = [
  {
    label: 'CLAUDE.md',
    desc: 'Project brain — conventions, skills, rules',
    color: '#c97a4a',
    icon: FileCode,
  },
  {
    label: 'ClickUp MCP',
    desc: 'Full task context pulled live, not copy-pasted',
    color: '#7dd3c8',
    icon: Cpu,
  },
  {
    label: 'Skills',
    desc: '/load-task · /python-backend-review · /caveman',
    color: '#6ee7b7',
    icon: Zap,
  },
];

export default function WorkExecutionSlide() {
  return (
    <SlideShell>
      <div className="w-screen h-screen bg-[#f5f0eb] overflow-hidden flex flex-col select-none">
        <div className="h-0.75 bg-[#1e6b62] shrink-0" />

        {/* Header */}
        <header
          className="flex items-center justify-between px-10 py-3.5 border-b border-[#e3ddd6] shrink-0"
          style={anim('fadeIn', 0)}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[13px] font-bold text-[#1e6b62] tracking-[0.2em]">
              06 / 07
            </span>
            <div className="w-px h-3.5 bg-[#d0cac3]" />
            <span className="text-[13px] text-[#888] tracking-[0.15em] uppercase font-semibold">
              Work Demo · The Execution
            </span>
          </div>
          <span className="text-[13px] font-bold tracking-[0.2em] text-[#1e6b62] uppercase">
            Hack Your Work · 2026
          </span>
        </header>

        {/* Body */}
        <div className="flex-1 flex min-h-0">
          {/* ── LEFT (60%) ── */}
          <div
            className="grid grid-rows-[auto_1fr_auto] px-10 py-5 gap-4 border-r border-[#e3ddd6] overflow-hidden"
            style={{ width: '60%' }}
          >
            {/* Title */}
            <div style={anim('fadeUp', 80)}>
              <div className="inline-flex items-center gap-2 bg-[#1e6b62]/10 border border-[#1e6b62]/20 rounded-full px-3 py-1 mb-2.5">
                <GitBranch className="w-3 h-3 text-[#1e6b62]" strokeWidth={2} />
                <span className="text-[12px] font-bold text-[#1e6b62] tracking-[0.15em] uppercase">
                  Phase 2 · Execution
                </span>
              </div>
              <h1 className="text-[1.7rem] font-black tracking-tight text-[#1a1a1a] leading-tight">
                Ticket in hand → Claude executes.
                <br />
                <span className="text-[#1e6b62]">4 agents. 47 minutes. Done.</span>
              </h1>
            </div>

            {/* Dark card — prompt + timeline */}
            <div
              className="min-h-0 bg-[#1a5c54] rounded-2xl p-5 flex flex-col gap-3.5 overflow-hidden"
              style={anim('fadeUp', 160)}
            >
              {/* Prompt excerpt */}
              <div className="bg-black/25 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/35 uppercase mb-2">
                  The prompt
                </p>
                <p className="text-[12px] text-white/75 leading-relaxed font-mono">
                  <span className="text-[#c97a4a] font-bold">task:</span> #86yS4U0w{' '}
                  <span className="text-white/35">·</span>{' '}
                  <span className="text-[#7dd3c8]">goal:</span> upgrade allauth, zero breaks{' '}
                  <span className="text-white/35">·</span>{' '}
                  <span className="text-[#6ee7b7]">run parallel explore</span>{' '}
                  <span className="text-white/35">·</span> make branches{' '}
                  <span className="text-white/35">·</span> test{' '}
                  <span className="text-white/35">·</span>{' '}
                  <span className="text-[#a3e635]">/python-backend-review</span>{' '}
                  <span className="text-white/35">·</span> commit
                </p>
              </div>

              {/* Phase timeline */}
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/35 uppercase">
                  31-minute run — what happened
                </p>
                {phases.map((p, i) => (
                  <div key={p.time} className="flex items-center gap-3">
                    <div
                      className="w-14 text-right font-mono text-[11px] font-bold shrink-0"
                      style={{ color: p.color }}
                    >
                      {p.time}
                    </div>
                    <div
                      className="w-px self-stretch shrink-0"
                      style={{ backgroundColor: `${p.color}40` }}
                    />
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${p.color}20` }}
                    >
                      <p.icon className="w-3 h-3" style={{ color: p.color }} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0 flex items-center gap-2">
                      <span className="text-[13px] font-bold text-white shrink-0">{p.label}</span>
                      <span className="text-[10px] text-white/45 truncate">{p.detail}</span>
                    </div>
                    {i < phases.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-white/20 shrink-0" strokeWidth={1.5} />
                    )}
                  </div>
                ))}
              </div>

              {/* Replicable pattern */}
              <div className="bg-white/6 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/35 uppercase mb-2.5">
                  Replicable by any teammate
                </p>
                <div className="flex gap-2">
                  {pattern.map(p => (
                    <div
                      key={p.label}
                      className="flex-1 rounded-lg px-2.5 py-2 flex flex-col gap-1"
                      style={{ backgroundColor: `${p.color}12`, border: `1px solid ${p.color}25` }}
                    >
                      <div className="flex items-center gap-1.5">
                        <p.icon
                          className="w-3 h-3 shrink-0"
                          style={{ color: p.color }}
                          strokeWidth={1.5}
                        />
                        <span className="text-[11px] font-bold" style={{ color: p.color }}>
                          {p.label}
                        </span>
                      </div>
                      <p className="text-[10px] text-white/45 leading-tight">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Proof strip */}
            <div style={anim('fadeUp', 300)}>
              <ImageStack images={EXEC_IMAGES} compact />
            </div>
          </div>

          {/* ── RIGHT (40%) dark ── */}
          <div
            className="flex flex-col gap-4 px-8 py-6 overflow-hidden"
            style={{ width: '40%', backgroundColor: '#163f3b' }}
          >
            {/* Hero metric */}
            <div
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
              style={anim('scaleIn', 200)}
            >
              <p className="text-[11px] font-bold tracking-[0.25em] text-white/35 uppercase mb-2">
                Total task time
              </p>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <div className="flex items-end gap-2 leading-none">
                    <GlowText
                      className="font-black"
                      style={{ fontSize: '4.5rem', color: '#c97a4a', lineHeight: 1 }}
                      delay={0.8}
                    >
                      47
                    </GlowText>
                    <span className="text-[1.1rem] font-bold text-white/50 mb-2">min</span>
                  </div>
                  <p className="text-[11px] text-white/45 mt-1">prompt to commit, start to end</p>
                </div>
                <div className="flex flex-col gap-1.5 shrink-0">
                  {[
                    { val: '2', lbl: 'story points' },
                    { val: '50%', lbl: 'time saved' },
                    { val: '4', lbl: 'agents used' },
                  ].map(s => (
                    <div
                      key={s.lbl}
                      className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-lg px-2.5 py-1"
                    >
                      <span className="text-[13px] font-black text-white">{s.val}</span>
                      <span className="text-[10px] text-white/40">{s.lbl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="h-px flex-1 bg-white/10" />
              <p className="text-[9px] font-bold tracking-[0.25em] text-white/30 uppercase shrink-0">
                What Claude handled
              </p>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Deliverables — progressive amber spotlight */}
            <ProgressiveDeliverables />

            {/* Bottom line */}
            <div
              className="flex items-center gap-2.5 bg-white/6 border border-white/10 rounded-xl px-4 py-2.5 shrink-0"
              style={anim('fadeUp', 560)}
            >
              <Users className="w-3.5 h-3.5 text-[#c97a4a] shrink-0" strokeWidth={1.5} />
              <p className="text-[11px] text-white/55 leading-snug">
                Same pattern works for any teammate —
                <span className="text-white/80 font-semibold"> CLAUDE.md + skill + ticket ID.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="flex items-center justify-between px-10 py-2.5 border-t border-[#e3ddd6] bg-[#f5f0eb] shrink-0"
          style={anim('fadeIn', 100)}
        >
          <span className="text-[12px] text-[#bbb] font-medium">
            Maharab Hossain Opi · SE II · Greentech Apps Foundation
          </span>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-[#1e6b62]" strokeWidth={1.5} />
            <span className="font-mono text-[12px] font-bold tracking-[0.2em] text-[#1e6b62] uppercase">
              47 min · 2sp · 50% faster
            </span>
          </div>
        </footer>
      </div>
    </SlideShell>
  );
}
