import {
  FileText,
  Zap,
  GitBranch,
  RefreshCw,
  MessageSquare,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

import { PulseCard } from '@/components/features/slides/motion-wrappers';
import { ProgressiveChips } from '@/components/features/slides/progressive-chips';
import { SlideShell } from '@/components/features/slides/slide-shell';

const anim = (name: string, delay: number, dur = 500) =>
  ({
    animation: `${name} ${dur}ms cubic-bezier(0.16,1,0.3,1) both`,
    animationDelay: `${delay}ms`,
  }) as React.CSSProperties;

const skills = [
  '/morning',
  '/debrief',
  '/ticket',
  '/standup',
  '/thinking-partner',
  '/python-backend-review',
  '/load-task',
  '/log-meeting',
  '/leave',
  '/scan-slack',
  '/mr-check',
  '/create-mr',
];

const flow = [
  { label: 'Speak / Type Goal', color: '#c97a4a', icon: MessageSquare },
  { label: 'CLAUDE.md loaded', color: '#7dd3c8', icon: FileText },
  { label: 'Skills picked', color: '#6ee7b7', icon: Zap },
  { label: 'Agents fan out', color: '#f0c080', icon: GitBranch },
  { label: 'Test · Review', color: '#a3e635', icon: CheckCircle },
  { label: 'Commit · Notify', color: '#7dd3c8', icon: CheckCircle },
];

export default function ConclusionSlide() {
  return (
    <SlideShell>
      <div className="w-screen h-screen bg-[#f5f0eb] overflow-hidden flex flex-col select-none">
        <div className="h-0.75 bg-[#1e6b62] shrink-0" />

        {/* Header */}
        <header
          className="flex items-center justify-between px-10 py-3 border-b border-[#e3ddd6] shrink-0"
          style={anim('fadeIn', 0)}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[12px] font-bold text-[#1e6b62] tracking-[0.2em]">
              08 / 08
            </span>
            <div className="w-px h-3.5 bg-[#d0cac3]" />
            <span className="text-[12px] text-[#888] tracking-[0.15em] uppercase font-semibold">
              The Blueprint · Conclusion
            </span>
          </div>
          <span className="text-[12px] font-bold tracking-[0.2em] text-[#1e6b62] uppercase">
            Hack Your Work · 2026
          </span>
        </header>

        {/* ── HERO STRIP — eye lands here first ── */}
        <div
          className="shrink-0 px-10 py-4 border-b border-[#e3ddd6] bg-white"
          style={anim('fadeUp', 60)}
        >
          <div className="flex items-center gap-8">
            {/* Big headline */}
            <div className="shrink-0">
              <p className="text-[10px] font-bold tracking-[0.25em] text-[#888] uppercase mb-1">
                The system — start here
              </p>
              <h1 className="text-[2rem] font-black tracking-tight text-[#1a1a1a] leading-none">
                5 primitives.{' '}
                <span
                  className="text-[#1e6b62]"
                  style={{ animation: 'glowPulse 2s ease-in-out 800ms 1 both' }}
                >
                  50% faster.
                </span>
                <span className="text-[#c97a4a]"> Any teammate.</span>
              </h1>
            </div>

            <div className="w-px h-10 bg-[#e3ddd6] shrink-0" />

            {/* Primitives — progressive spotlight chips */}
            <ProgressiveChips />
          </div>
        </div>

        {/* ── 3 COLUMNS — numbered so eye reads 01 → 02 → 03 ── */}
        <div className="flex-1 flex min-h-0">
          {/* ── 01 · THE STACK ── */}
          <div
            className="flex flex-col border-r border-[#e3ddd6] overflow-hidden"
            style={{ width: '30%' }}
          >
            {/* Col label */}
            <div
              className="flex items-center gap-2.5 px-7 py-2.5 border-b border-[#e3ddd6] shrink-0 bg-[#f5f0eb]"
              style={anim('fadeIn', 120)}
            >
              <span className="font-mono text-[11px] font-black text-[#1e6b62]">01</span>
              <div className="w-px h-3 bg-[#d0cac3]" />
              <span className="text-[11px] font-bold text-[#555] tracking-[0.1em] uppercase">
                The Stack
              </span>
            </div>

            {/* File tree */}
            <div
              className="bg-[#1a1a1a] flex-1 px-5 py-4 font-mono text-[9.5px] flex flex-col gap-0.5 overflow-hidden"
              style={anim('fadeUp', 180)}
            >
              <p className="text-[#7dd3c8] text-[10px]">~/.claude/</p>
              <p className="text-white/50 pl-3">
                ├── CLAUDE.md <span className="text-white/25">← global rules</span>
              </p>
              <p className="text-white/50 pl-3">├── skills/</p>
              {skills.map((s, i) => (
                <p key={s} className="text-[#6ee7b7] pl-6">
                  {i < skills.length - 1 ? '├──' : '└──'} {s}
                </p>
              ))}
              <p className="text-white/50 pl-3 mt-1">
                └── settings.json <span className="text-white/25">← hooks</span>
              </p>

              <div className="mt-2.5 pt-2.5 border-t border-white/8">
                <p className="text-[#c97a4a] text-[10px]">~/project/</p>
                <p className="text-white/50 pl-3">
                  ├── CLAUDE.md <span className="text-white/25">← project brain</span>
                </p>
                <p className="text-white/30 pl-6 text-[8.5px]">
                  rules · ports · docker · skills · MCP
                </p>
                <p className="text-white/50 pl-3">
                  └── ... <span className="text-white/25">your codebase</span>
                </p>
              </div>

              <p className="text-white/20 text-[8px] mt-2.5 pt-2 border-t border-white/8 leading-relaxed">
                Active in: quran-web · hadith · sadiq
                <br />
                nasiha · fundify · gtaf-user-dashboard
              </p>
            </div>
          </div>

          {/* ── 02 · THE LOOP ── */}
          <div
            className="flex flex-col border-r border-[#e3ddd6] overflow-hidden"
            style={{ width: '40%', backgroundColor: '#163f3b' }}
          >
            {/* Col label */}
            <div
              className="flex items-center gap-2.5 px-7 py-2.5 border-b border-white/10 shrink-0"
              style={{ ...anim('fadeIn', 140), backgroundColor: '#1a4a44' }}
            >
              <span className="font-mono text-[11px] font-black text-[#7dd3c8]">02</span>
              <div className="w-px h-3 bg-white/15" />
              <span className="text-[11px] font-bold text-white/60 tracking-[0.1em] uppercase">
                The Loop
              </span>
            </div>

            <div className="flex-1 flex flex-col gap-3.5 px-7 py-4 min-h-0 overflow-hidden">
              {/* Flow */}
              <div style={anim('fadeUp', 160)}>
                <p className="text-[9px] font-bold tracking-[0.2em] text-white/30 uppercase mb-2.5">
                  Replicable loop — every task
                </p>
                <div className="flex flex-col gap-1">
                  {flow.map((f, i) => (
                    <div key={f.label} className="flex items-center gap-2.5">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${f.color}20` }}
                      >
                        <f.icon className="w-3 h-3" style={{ color: f.color }} strokeWidth={1.5} />
                      </div>
                      <span className="text-[12px] font-bold text-white">{f.label}</span>
                      {i < flow.length - 1 && (
                        <div
                          className="ml-auto w-px h-3.5 shrink-0"
                          style={{ backgroundColor: `${f.color}25` }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* What covered */}
              <div
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                style={anim('fadeUp', 220)}
              >
                <p className="text-[9px] font-bold tracking-[0.2em] text-white/30 uppercase mb-2">
                  Covered today
                </p>
                {[
                  { label: 'Routine automation', tag: '/schedule', color: '#a3e635' },
                  { label: 'Coordination → 3 min', tag: '/debrief', color: '#7dd3c8' },
                  { label: 'Code execution · 47 min', tag: 'Goals + agents', color: '#c97a4a' },
                  { label: 'Thinking partner', tag: '/thinking-partner', color: '#f0c080' },
                ].map(r => (
                  <div key={r.label} className="flex items-center gap-2 mb-1.5">
                    <CheckCircle
                      className="w-3 h-3 shrink-0"
                      style={{ color: r.color }}
                      strokeWidth={2}
                    />
                    <span className="text-[11px] font-semibold text-white/80 flex-1">
                      {r.label}
                    </span>
                    <span
                      className="font-mono text-[9px] shrink-0"
                      style={{ color: `${r.color}80` }}
                    >
                      {r.tag}
                    </span>
                  </div>
                ))}
              </div>

              {/* Future */}
              <div
                className="bg-[#c97a4a]/10 border border-[#c97a4a]/20 rounded-xl px-4 py-3 flex-1"
                style={anim('fadeUp', 280)}
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <RefreshCw className="w-3 h-3 text-[#c97a4a]" strokeWidth={2} />
                  <p className="text-[9px] font-bold tracking-[0.2em] text-[#c97a4a] uppercase">
                    Next: scheduled intelligence
                  </p>
                </div>
                {[
                  {
                    cycle: '8:30 AM daily',
                    label: 'Morning brief',
                    detail: 'ClickUp · Slack · Calendar → standup',
                    live: true,
                  },
                  {
                    cycle: 'Every 15 days',
                    label: 'User Jot scanner',
                    detail: 'Scan User Jot → backend problems → ticket',
                    live: false,
                  },
                ].map(s => (
                  <div
                    key={s.label}
                    className="rounded-lg px-3 py-2 mb-1.5"
                    style={{
                      backgroundColor: s.live ? 'rgba(110,231,183,0.08)' : 'rgba(255,255,255,0.04)',
                      border: s.live
                        ? '1px solid rgba(110,231,183,0.18)'
                        : '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="font-mono text-[8px] font-bold"
                        style={{ color: s.live ? '#6ee7b7' : 'rgba(255,255,255,0.35)' }}
                      >
                        {s.cycle}
                      </span>
                      <span
                        className="text-[8px] font-bold"
                        style={{ color: s.live ? '#6ee7b7' : 'rgba(255,255,255,0.25)' }}
                      >
                        {s.live ? '● LIVE' : '◎ planned'}
                      </span>
                    </div>
                    <p className="text-[11px] font-bold text-white/75">{s.label}</p>
                    <p className="text-[9px] text-white/35 leading-tight mt-0.5">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── 03 · CLOSE ── */}
          <div className="flex flex-col overflow-hidden" style={{ width: '30%' }}>
            {/* Col label */}
            <div
              className="flex items-center gap-2.5 px-7 py-2.5 border-b border-[#e3ddd6] shrink-0 bg-[#f5f0eb]"
              style={anim('fadeIn', 160)}
            >
              <span className="font-mono text-[11px] font-black text-[#1e6b62]">03</span>
              <div className="w-px h-3 bg-[#d0cac3]" />
              <span className="text-[11px] font-bold text-[#555] tracking-[0.1em] uppercase">
                Close
              </span>
            </div>

            <div className="flex-1 flex flex-col px-7 py-4 gap-3 min-h-0 overflow-hidden">
              {/* How to replicate */}
              <div style={anim('fadeUp', 200)}>
                <p className="text-[9px] font-bold tracking-[0.2em] text-[#888] uppercase mb-2">
                  Copy this system in 5 steps
                </p>
                {[
                  {
                    n: '01',
                    t: 'Write CLAUDE.md with rules, ports, docker, team norms',
                    c: '#7dd3c8',
                  },
                  { n: '02', t: 'Install or build skills for repeated workflows', c: '#c97a4a' },
                  { n: '03', t: 'Connect MCPs — ClickUp · Slack · Gmail · Calendar', c: '#6ee7b7' },
                  {
                    n: '04',
                    t: 'Give Claude a goal + ticket ID → agents run, test, commit',
                    c: '#f0c080',
                  },
                  { n: '05', t: 'Schedule a routine in Claude.ai with /schedule', c: '#a3e635' },
                ].map(s => (
                  <div key={s.n} className="flex gap-2 items-start mb-1.5">
                    <span
                      className="font-mono text-[10px] font-black shrink-0 mt-0.5"
                      style={{ color: s.c }}
                    >
                      {s.n}
                    </span>
                    <p className="text-[10.5px] text-[#444] leading-snug">{s.t}</p>
                  </div>
                ))}
              </div>

              {/* Criteria */}
              <PulseCard
                className="bg-[#1a5c54] rounded-xl px-4 py-3"
                style={{ animation: 'fadeUp 500ms cubic-bezier(0.16,1,0.3,1) 280ms both' }}
                delay={1.5}
                repeatDelay={7}
              >
                <p className="text-[9px] font-bold tracking-[0.2em] text-white/30 uppercase mb-2">
                  Judge criteria
                </p>
                {[
                  { label: 'Time saved', val: '50%+', color: '#6ee7b7' },
                  { label: 'Sustained usability', val: '28+ runs', color: '#c97a4a' },
                  { label: 'Transferable', val: 'any teammate', color: '#7dd3c8' },
                  { label: 'AI as partner', val: '46 models', color: '#f0c080' },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-2 mb-1">
                    <Sparkles
                      className="w-2.5 h-2.5 shrink-0"
                      style={{ color: c.color }}
                      strokeWidth={2}
                    />
                    <span className="text-[10.5px] text-white/65 flex-1">{c.label}</span>
                    <span className="text-[10.5px] font-bold" style={{ color: c.color }}>
                      {c.val}
                    </span>
                  </div>
                ))}
              </PulseCard>

              {/* Dua */}
              <div
                className="flex-1 flex flex-col items-center justify-center bg-[#1a1a1a] rounded-2xl px-5 gap-2.5"
                style={anim('scaleIn', 380)}
              >
                <div className="w-8 h-px bg-[#c97a4a]/35 rounded-full" />
                <p
                  className="text-center leading-loose text-white/88"
                  style={{ fontFamily: 'serif', fontSize: '1.05rem', direction: 'rtl' }}
                >
                  اللَّهُمَّ انْفَعْنَا بِمَا عَلَّمْتَنَا
                  <br />
                  وَعَلِّمْنَا مَا يَنْفَعُنَا
                </p>
                <p className="text-[10.5px] text-white/38 text-center leading-relaxed italic">
                  &ldquo;O Allah, benefit us with what You taught us,
                  <br />
                  and teach us what will benefit us.&rdquo;
                </p>
                <div className="w-8 h-px bg-[#c97a4a]/35 rounded-full" />
                <p className="text-[9px] font-bold text-[#1e6b62] tracking-[0.1em] text-center">
                  Maharab Hossain Opi · GTAF · 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="flex items-center justify-between px-10 py-2.5 border-t border-[#e3ddd6] bg-[#f5f0eb] shrink-0"
          style={anim('fadeIn', 100)}
        >
          <span className="text-[11px] text-[#bbb] font-medium">
            Claude Code · Skills · Goals · Schedule · MCPs
          </span>
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#1e6b62] uppercase">
            Hack Your Work · 2026
          </span>
        </footer>
      </div>
    </SlideShell>
  );
}
