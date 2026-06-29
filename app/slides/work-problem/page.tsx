import {
  AlertCircle,
  MessageSquare,
  ArrowRight,
  Users,
  FileText,
  ListTodo,
  Search,
  Clock,
  Brain,
  GitMerge,
  Layers,
} from 'lucide-react';

import { SlideShell } from '@/components/features/slides/slide-shell';

const anim = (name: string, delay: number, dur = 520) =>
  ({
    animation: `${name} ${dur}ms cubic-bezier(0.16,1,0.3,1) both`,
    animationDelay: `${delay}ms`,
  }) as React.CSSProperties;

const story = [
  {
    icon: AlertCircle,
    label: 'Problem surfaces',
    detail: 'Apple Sign-In failing in production — mobile clients broken',
    color: '#e05a4a',
    bg: '#fdf0ee',
    border: '#f5c4be',
  },
  {
    icon: MessageSquare,
    label: 'Slack thread explodes',
    detail: '6+ messages back and forth · two teams · no clear owner yet',
    color: '#c97a4a',
    bg: '#fff5ee',
    border: '#f0ceae',
  },
  {
    icon: Users,
    label: 'Meeting #1 with Asad',
    detail: 'Client ID mismatch found · Key/Secret swap · root cause unclear',
    color: '#c97a4a',
    bg: '#fff5ee',
    border: '#f0ceae',
  },
  {
    icon: FileText,
    label: 'Meeting notes → Slack',
    detail: 'Manually write notes · format · post to channel · mention everyone',
    color: '#b85c38',
    bg: '#fff0e8',
    border: '#f0ceae',
  },
  {
    icon: GitMerge,
    label: 'Meeting #2 — scope grows',
    detail: 'allauth 0.57.0 → 0.63.0 upgrade needed · dependency chain found',
    color: '#9c4a2a',
    bg: '#fde8dc',
    border: '#e8b898',
  },
  {
    icon: ListTodo,
    label: 'Ticket · Slack update · Research',
    detail: 'Create ClickUp task · update channel · loop in Asad · find upgrade path',
    color: '#9c4a2a',
    bg: '#fde8dc',
    border: '#e8b898',
  },
];

const pain = [
  { val: '2+', unit: 'meetings', desc: 'before writing a line of code', color: '#e05a4a' },
  { val: '4+', unit: 'manual tasks', desc: 'notes · ticket · Slack · research', color: '#c97a4a' },
  { val: '45+', unit: 'minutes', desc: 'coordination overhead', color: '#9c4a2a' },
];

export default function WorkProblemSlide() {
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
            <span className="font-mono text-[12px] font-bold text-[#1e6b62] tracking-[0.2em]">
              03 / 06
            </span>
            <div className="w-px h-4 bg-[#d0cac3]" />
            <span className="text-[12px] text-[#888] tracking-[0.15em] uppercase font-semibold">
              Work Demo · The Problem
            </span>
          </div>
          <span className="text-[12px] font-bold tracking-[0.2em] text-[#1e6b62] uppercase">
            Hack Your Work · 2026
          </span>
        </header>

        {/* Main */}
        <main className="flex-1 grid grid-cols-[1fr_320px] min-h-0">
          {/* LEFT — story flow */}
          <div className="flex flex-col justify-between px-12 py-7 border-r border-[#e3ddd6] overflow-hidden">
            {/* Title */}
            <div style={anim('fadeUp', 80)}>
              <div className="inline-flex items-center gap-2 bg-[#e05a4a]/10 border border-[#e05a4a]/25 rounded-full px-3.5 py-1.5 mb-3">
                <AlertCircle className="w-3.5 h-3.5 text-[#e05a4a]" strokeWidth={2} />
                <span className="text-[11px] font-bold text-[#e05a4a] tracking-[0.15em] uppercase">
                  Real Story
                </span>
              </div>
              <h1 className="text-[2.8rem] font-black tracking-tight text-[#1a1a1a] leading-[1.05]">
                Before fixing the bug,
                <br />I had to fix <span className="text-[#e05a4a]">the coordination.</span>
              </h1>
              <p className="text-[14px] text-[#888] mt-2 leading-relaxed">
                Apple Sign-In broken · two engineers · three rounds of back-and-forth
              </p>
            </div>

            {/* Story steps — two rows of 3 */}
            <div style={anim('fadeUp', 200)}>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#aaa] uppercase mb-3">
                What actually happened
              </p>
              <div className="grid grid-cols-3 gap-3">
                {story.map((s, i) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border p-4 flex flex-col gap-2 relative"
                    style={{
                      backgroundColor: s.bg,
                      borderColor: s.border,
                      ...anim('scaleIn', 260 + i * 70),
                    }}
                  >
                    {/* Step number */}
                    <span
                      className="absolute top-3 right-3 font-mono text-[10px] font-black opacity-30"
                      style={{ color: s.color }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${s.color}18` }}
                    >
                      <s.icon className="w-4 h-4" style={{ color: s.color }} strokeWidth={1.5} />
                    </div>
                    <p className="text-[13px] font-bold text-[#1a1a1a] leading-tight pr-5">
                      {s.label}
                    </p>
                    <p className="text-[11px] text-[#888] leading-tight">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div
              className="bg-white border-l-4 border-[#e05a4a] rounded-r-xl px-5 py-3"
              style={anim('slideInLeft', 720)}
            >
              <p className="text-[13px] text-[#555] leading-relaxed italic">
                &ldquo;By the time I had all the context in one place and everyone in the loop, half
                the afternoon was already gone — and I hadn&apos;t touched the code yet.&rdquo;
              </p>
            </div>
          </div>

          {/* RIGHT — pain stats */}
          <div className="flex flex-col justify-center gap-4 px-7 py-8">
            <p
              className="text-[11px] font-bold tracking-[0.2em] text-[#888] uppercase"
              style={anim('fadeIn', 200)}
            >
              The real cost
            </p>

            {pain.map((p, i) => (
              <div
                key={p.val}
                className="rounded-2xl border p-5 flex items-center gap-4"
                style={{
                  backgroundColor: p.color + '10',
                  borderColor: p.color + '30',
                  ...anim('scaleIn', 280 + i * 110),
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: p.color + '18' }}
                >
                  {i === 0 && (
                    <Users className="w-5 h-5" style={{ color: p.color }} strokeWidth={1.5} />
                  )}
                  {i === 1 && (
                    <Layers className="w-5 h-5" style={{ color: p.color }} strokeWidth={1.5} />
                  )}
                  {i === 2 && (
                    <Clock className="w-5 h-5" style={{ color: p.color }} strokeWidth={1.5} />
                  )}
                </div>
                <div>
                  <div className="text-[2rem] font-black leading-none" style={{ color: p.color }}>
                    {p.val}
                    <span className="text-[1rem] ml-1 font-bold">{p.unit}</span>
                  </div>
                  <div className="text-[11px] text-[#888] mt-0.5">{p.desc}</div>
                </div>
              </div>
            ))}

            {/* Context scatter callout */}
            <div className="bg-[#1a1a1a] rounded-2xl p-4 mt-1" style={anim('fadeUp', 620)}>
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-3.5 h-3.5 text-white/40" strokeWidth={1.5} />
                <p className="text-[10px] font-bold tracking-[0.15em] text-white/40 uppercase">
                  Context scattered across
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Slack DMs', 'Thread', 'Meeting notes', 'Your memory', 'Docs tabs'].map(t => (
                  <span
                    key={t}
                    className="text-[10px] font-semibold text-white/60 bg-white/8 border border-white/12 rounded-full px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-2.5 flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-[#c97a4a]" strokeWidth={1.5} />
                <p className="text-[11px] font-semibold text-[#c97a4a]">
                  Next: how Claude collapses this into 3 min
                </p>
              </div>
            </div>

            {/* Search icon hint */}
            <div className="flex items-center gap-2 px-1" style={anim('fadeIn', 780)}>
              <Search className="w-3.5 h-3.5 text-[#bbb] shrink-0" strokeWidth={1.5} />
              <p className="text-[10px] text-[#bbb] leading-tight">
                All this before even opening the docs to find the fix
              </p>
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
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#1e6b62] uppercase">
            The Problem
          </span>
        </footer>
      </div>
    </SlideShell>
  );
}
