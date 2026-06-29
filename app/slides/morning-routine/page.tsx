import {
  Sun,
  ListTodo,
  MessageSquare,
  GitMerge,
  Mail,
  Calendar,
  FileText,
  ArrowRight,
  Smartphone,
  Shuffle,
  TimerOff,
} from 'lucide-react';

import { SlideShell } from '@/components/features/slides/slide-shell';

const tools = [
  { icon: Sun, label: 'Wake Up', desc: 'Start day' },
  { icon: ListTodo, label: 'ClickUp', desc: "What's overdue?" },
  { icon: MessageSquare, label: 'Slack', desc: 'Who mentioned me?' },
  { icon: GitMerge, label: 'GitLab', desc: 'Any MR feedback?' },
  { icon: Mail, label: 'Gmail', desc: 'Any blockers?' },
  { icon: Calendar, label: 'Calendar', desc: "What's today?" },
  { icon: FileText, label: 'Notes', desc: 'Write down plan' },
];

const painStats = [
  {
    icon: Smartphone,
    value: '6',
    unit: 'apps',
    desc: 'opened every morning',
    color: '#c97a4a',
    bg: '#fff5ee',
    border: '#f0ceae',
  },
  {
    icon: Shuffle,
    value: '6+',
    unit: 'switches',
    desc: 'context switches before first task',
    color: '#b85c38',
    bg: '#fff0e8',
    border: '#f0ceae',
  },
  {
    icon: TimerOff,
    value: '30+',
    unit: 'minutes',
    desc: 'lost before real work starts',
    color: '#9c4a2a',
    bg: '#fde8dc',
    border: '#e8b898',
  },
];

const anim = (name: string, delay: number, dur = 520) =>
  ({
    animation: `${name} ${dur}ms cubic-bezier(0.16,1,0.3,1) both`,
    animationDelay: `${delay}ms`,
  }) as React.CSSProperties;

export default function MorningProblemSlide() {
  return (
    <SlideShell>
      <div className="w-screen h-screen bg-[#f5f0eb] overflow-hidden flex flex-col select-none">
        <div className="h-0.75 bg-[#1e6b62] shrink-0" />

        {/* Header */}
        <header
          className="flex items-center justify-between px-12 py-4 border-b border-[#e3ddd6] shrink-0"
          style={anim('fadeIn', 0)}
        >
          <div className="flex items-center gap-3.5">
            <span className="text-[12px] font-bold text-[#1e6b62] tracking-[0.2em] font-mono">
              01 / 04
            </span>
            <div className="w-px h-4 bg-[#d0cac3]" />
            <span className="text-[12px] text-[#888] tracking-[0.15em] uppercase font-semibold">
              Plot Schedule Task · Problem
            </span>
          </div>
          <span className="text-[12px] font-bold tracking-[0.2em] text-[#1e6b62] uppercase">
            Hack Your Work · 2026
          </span>
        </header>

        {/* Main */}
        <main className="flex-1 grid grid-cols-[1fr_340px] min-h-0">
          {/* LEFT — problem flow */}
          <div className="flex flex-col justify-between px-12 py-8 border-r border-[#e3ddd6] overflow-hidden">
            {/* Title */}
            <div style={anim('fadeUp', 80)}>
              <div className="inline-flex items-center gap-2 bg-[#c97a4a]/10 border border-[#c97a4a]/25 rounded-full px-3.5 py-1.5 mb-4">
                <TimerOff className="w-3.5 h-3.5 text-[#c97a4a]" strokeWidth={2} />
                <span className="text-[11px] font-bold text-[#c97a4a] tracking-[0.15em] uppercase">
                  The Daily Tax
                </span>
              </div>
              <h1 className="text-[3.4rem] font-black tracking-tight text-[#1a1a1a] leading-[1.04]">
                Every morning
                <br />
                steals <span className="text-[#c97a4a]">30+ minutes</span>
                <br />
                <span className="text-[2rem] font-bold text-[#888]">
                  before real work even starts.
                </span>
              </h1>
            </div>

            {/* Flow — single row */}
            <div style={anim('fadeUp', 220)}>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#aaa] uppercase mb-4">
                Morning ritual — every single weekday
              </p>
              <div className="flex items-stretch gap-1.5">
                {tools.map((tool, i) => (
                  <div key={tool.label} className="flex items-center gap-1.5 flex-1 min-w-0">
                    <div className="flex-1 flex flex-col items-center gap-2 py-4 px-2 bg-white rounded-2xl border border-[#e8e3dc] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                      <tool.icon className="w-7 h-7 text-[#1e6b62]" strokeWidth={1.5} />
                      <span className="text-[13px] font-bold text-[#1a1a1a] text-center leading-tight">
                        {tool.label}
                      </span>
                      <span className="text-[10px] text-[#bbb] text-center leading-tight">
                        {tool.desc}
                      </span>
                    </div>
                    {i < tools.length - 1 && (
                      <ArrowRight
                        className="w-3.5 h-3.5 text-[#c5bfb7] shrink-0"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div
              className="bg-white border-l-4 border-[#c97a4a] rounded-r-xl px-5 py-3.5"
              style={anim('slideInLeft', 600)}
            >
              <p className="text-[14px] text-[#555] leading-relaxed italic">
                &ldquo;I haven&apos;t even written a line of code yet, and I&apos;ve already spent
                half an hour just figuring out what to work on.&rdquo;
              </p>
            </div>
          </div>

          {/* RIGHT — pain stats */}
          <div className="flex flex-col justify-center gap-4 px-8 py-8">
            <p
              className="text-[11px] font-bold tracking-[0.2em] text-[#888] uppercase"
              style={anim('fadeIn', 200)}
            >
              The real cost
            </p>

            {painStats.map((stat, i) => (
              <div
                key={stat.value}
                className="rounded-2xl border p-5 flex items-center gap-4"
                style={{
                  backgroundColor: stat.bg,
                  borderColor: stat.border,
                  ...anim('scaleIn', 280 + i * 120),
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: stat.color + '20' }}
                >
                  <stat.icon className="w-5 h-5" style={{ color: stat.color }} strokeWidth={1.5} />
                </div>
                <div>
                  <div
                    className="text-[2.2rem] font-black leading-none"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                    <span className="text-[1.1rem] ml-1 font-bold">{stat.unit}</span>
                  </div>
                  <div className="text-[11px] text-[#888] mt-0.5">{stat.desc}</div>
                </div>
              </div>
            ))}

            {/* Multiplied cost */}
            <div className="bg-[#1a1a1a] rounded-2xl p-5 mt-2" style={anim('fadeUp', 680)}>
              <p className="text-[11px] font-bold tracking-[0.15em] text-white/40 uppercase mb-2">
                Annualised
              </p>
              <div className="flex justify-between">
                <div className="text-center">
                  <div className="text-[1.6rem] font-black text-white">140+</div>
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-wide">
                    min/week
                  </div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-[1.6rem] font-black text-[#c97a4a]">10+</div>
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-wide">
                    hrs/month
                  </div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-[1.6rem] font-black text-[#c97a4a]">120+</div>
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-wide">
                    hrs/year
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer
          className="flex items-center justify-between px-12 py-3 border-t border-[#e3ddd6] shrink-0"
          style={anim('fadeIn', 100)}
        >
          <span className="text-[11px] text-[#bbb] font-medium">
            Maharab Hossain Opi · SE II · Greentech Apps Foundation
          </span>
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#1e6b62] uppercase font-mono">
            The Problem
          </span>
        </footer>
      </div>
    </SlideShell>
  );
}
