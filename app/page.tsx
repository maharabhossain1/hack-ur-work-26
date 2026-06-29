import { Calendar, GitMerge, MessageSquare, Zap, Sun, Briefcase, Brain } from 'lucide-react';

import { SlideShell } from '@/components/features/slides/slide-shell';

const dayPhases = [
  {
    time: '8:30 AM',
    icon: Sun,
    title: 'Morning Brief, Automated',
    desc: 'Claude Code delivers a full context brief to Slack — tasks, mentions, calendar — before you open your laptop.',
    tag: 'Morning',
    color: '#c97a4a',
  },
  {
    time: '10:00 AM',
    icon: Briefcase,
    title: 'Bug hits. Context collapses.',
    desc: 'Apple Sign-In breaks. Two meetings, Slack threads, a ticket, a research trail — Claude Code handles all the coordination overhead.',
    tag: 'Work',
    color: '#1e6b62',
  },
  {
    time: '3:00 PM',
    icon: Brain,
    title: 'Stuck on a decision?',
    desc: 'Claude Code as a thinking partner — challenges assumptions, structures trade-offs, and helps you ship with confidence.',
    tag: 'Think',
    color: '#7c5cbc',
  },
];

const anim = (delay: number) =>
  ({
    animation: `fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) both`,
    animationDelay: `${delay}ms`,
  }) as React.CSSProperties;

export default function IntroSlide() {
  return (
    <SlideShell>
      <div className="w-screen h-screen bg-[#f5f0eb] overflow-hidden flex">
        {/* Left panel */}
        <div
          className="w-[38%] bg-[#1e6b62] flex flex-col justify-between p-12 shrink-0"
          style={{ animation: 'fadeIn 0.5s ease both' }}
        >
          {/* Top badge */}
          <div>
            <div className="flex flex-col items-start gap-2 mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                <Zap className="w-3.5 h-3.5 text-[#c97a4a]" strokeWidth={2} />
                <span className="text-[11px] font-bold tracking-[0.15em] text-white/80 uppercase">
                  Hack Your Work · 2026
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-lg px-3 py-1">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#c97a4a] uppercase">
                  Solution
                </span>
                <span className="text-[10px] font-black text-white/80 tracking-wide">
                  Claude Code
                </span>
              </div>
            </div>

            <h1 className="text-[2.6rem] font-black text-white leading-[1.05] tracking-tight">
              One Tool.
              <br />
              One Work Day.
              <br />
              <span className="text-[#c97a4a]">Zero Overhead.</span>
            </h1>

            <p className="text-white/60 mt-5 text-[14px] leading-relaxed">
              From the morning brief to shipping the fix — a real developer&apos;s day, hacked with
              a single tool.
            </p>
          </div>

          {/* Tools connected */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-3">
              Integrations
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {[
                { icon: MessageSquare, label: 'Slack' },
                { icon: Calendar, label: 'Calendar' },
                { icon: GitMerge, label: 'GitLab' },
                { icon: MessageSquare, label: 'ClickUp' },
              ].map(t => (
                <div
                  key={t.label}
                  className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-lg px-2.5 py-1.5"
                >
                  <t.icon className="w-3 h-3 text-white/60" strokeWidth={1.5} />
                  <span className="text-[11px] text-white/60 font-medium">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Author */}
          <div className="border-t border-white/15 pt-5">
            <p className="text-white font-bold text-[15px]">Maharab Hossain Opi</p>
            <p className="text-white/50 text-[13px] mt-0.5">
              Software Engineer II · Greentech Apps Foundation
            </p>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 flex flex-col justify-center px-14 py-12">
          <div style={anim(100)}>
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#888] uppercase mb-1">
              A day in the life
            </p>
            <p className="text-[13px] text-[#aaa] mb-8">
              Same tool. Three moments. One hacked workday.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col gap-0">
            {/* Vertical line */}
            <div
              className="absolute left-[52px] top-6 bottom-6 w-px bg-[#e3ddd6]"
              style={{ ...anim(150) }}
            />

            {dayPhases.map((phase, i) => (
              <div key={phase.tag} className="flex gap-5 relative" style={anim(220 + i * 120)}>
                {/* Time + dot */}
                <div className="flex flex-col items-center shrink-0 w-[105px]">
                  <span className="text-[10px] font-bold text-[#aaa] font-mono mb-2">
                    {phase.time}
                  </span>
                  <div
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center z-10"
                    style={{
                      backgroundColor: phase.color + '18',
                      borderColor: phase.color + '60',
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: phase.color }}
                    />
                  </div>
                </div>

                {/* Card */}
                <div
                  className="flex-1 mb-5 p-5 bg-white rounded-2xl border border-[#e8e3dc] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                  style={{ borderLeftColor: phase.color + '50', borderLeftWidth: 3 }}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <phase.icon
                      className="w-4 h-4 shrink-0"
                      style={{ color: phase.color }}
                      strokeWidth={1.5}
                    />
                    <span className="text-[16px] font-bold text-[#1a1a1a]">{phase.title}</span>
                    <span
                      className="text-[10px] font-bold tracking-[0.15em] px-2 py-0.5 rounded-full uppercase shrink-0"
                      style={{
                        color: phase.color,
                        backgroundColor: phase.color + '15',
                        border: `1px solid ${phase.color}30`,
                      }}
                    >
                      {phase.tag}
                    </span>
                  </div>
                  <p className="text-[12.5px] text-[#777] leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div style={anim(600)} className="mt-2">
            <p className="text-[12px] text-[#aaa]">5 min · June 29, 2026 · GTAF Dhaka</p>
          </div>
        </div>

        {/* Top accent */}
        <div className="absolute top-0 left-[38%] right-0 h-0.75 bg-[#1e6b62]/20" />
      </div>
    </SlideShell>
  );
}
