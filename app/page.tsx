import { Calendar, GitMerge, MessageSquare, Zap } from 'lucide-react';

import { SlideShell } from '@/components/features/slides/slide-shell';

const agenda = [
  {
    num: '01',
    title: 'Morning Routine, Automated',
    desc: 'A scheduled cloud agent that replaces 30+ min of morning context switching with a single Slack brief — delivered before you even open your laptop.',
    label: 'Plot Schedule Task',
  },
  {
    num: '02',
    title: 'Work Demo',
    desc: 'Live walkthrough of the AI-assisted engineering workflow — from task to code to MR, with Claude acting as a co-pilot at every step.',
    label: 'AI in Action',
  },
  {
    num: '03',
    title: 'Thinking with AI',
    desc: 'How I use Claude as a thinking partner — not just for code, but to challenge assumptions, structure decisions, and avoid blind spots.',
    label: 'AI as Collaborator',
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
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-10">
              <Zap className="w-3.5 h-3.5 text-[#c97a4a]" strokeWidth={2} />
              <span className="text-[11px] font-bold tracking-[0.15em] text-white/80 uppercase">
                Hack Your Work · 2026
              </span>
            </div>

            <h1 className="text-[2.8rem] font-black text-white leading-[1.05] tracking-tight">
              Cutting My
              <br />
              Work Time
              <br />
              <span className="text-[#c97a4a]">in Half</span>
            </h1>

            <p className="text-white/60 mt-5 text-[15px] leading-relaxed">
              Three AI workflows that reduced daily engineering overhead — measurably, repeatably,
              and shared enough for the team to adopt.
            </p>
          </div>

          {/* Tools used */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-3">
              Tools connected
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
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#888] uppercase mb-8">
              Agenda
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {agenda.map((item, i) => (
              <div
                key={item.num}
                className="flex gap-5 p-5 bg-white rounded-2xl border border-[#e8e3dc] shadow-[0_2px_8px_rgba(0,0,0,0.04)] group hover:border-[#1e6b62]/30 transition-colors"
                style={anim(200 + i * 100)}
              >
                <div className="text-[2.4rem] font-black text-[#1e6b62]/15 leading-none shrink-0 w-14 text-right">
                  {item.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="text-[17px] font-bold text-[#1a1a1a]">{item.title}</span>
                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#1e6b62] bg-[#edf5f4] border border-[#b8dcd8] px-2 py-0.5 rounded-full uppercase shrink-0">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-[13px] text-[#777] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Time note */}
          <div style={anim(550)} className="mt-7">
            <p className="text-[12px] text-[#aaa]">
              5 min presentation · June 29, 2026 · GTAF Dhaka
            </p>
          </div>
        </div>

        {/* Top accent */}
        <div className="absolute top-0 left-[38%] right-0 h-0.75 bg-[#1e6b62]/20" />
      </div>
    </SlideShell>
  );
}
