import { Brain, MessageSquare, BookOpen, ArrowRight, Lightbulb, RotateCcw } from 'lucide-react';

import { SlideShell } from '@/components/features/slides/slide-shell';

const anim = (name: string, delay: number, dur = 500) =>
  ({
    animation: `${name} ${dur}ms cubic-bezier(0.16,1,0.3,1) both`,
    animationDelay: `${delay}ms`,
  }) as React.CSSProperties;

const sources = [
  { label: 'Ness Labs', color: '#c97a4a' },
  { label: 'Untools.io', color: '#7dd3c8' },
  { label: 'Systems Thinker', color: '#6ee7b7' },
  { label: 'Product Talks', color: '#a3e635' },
];

const modelCategories = [
  {
    label: 'Decision-making',
    color: '#7dd3c8',
    models: [
      'Inversion ★',
      'Pre-mortem',
      'Second Order',
      'Cynefin',
      'Two-Way Door',
      'Six Hats',
      'Conflict Map',
    ],
  },
  {
    label: 'Problem-framing',
    color: '#c97a4a',
    models: ['First Principles', 'Abstraction Laddering', 'Iceberg Model'],
  },
  {
    label: 'Bias-awareness',
    color: '#f0a080',
    models: ['Confirmation Bias', 'Ladder of Inference', 'Survivorship Bias'],
  },
  {
    label: 'Systems-thinking',
    color: '#6ee7b7',
    models: ['Causal Loop', 'Systems Archetypes'],
  },
];

const stages = [
  { num: '01', label: 'Listen', detail: 'Paraphrase · one question only', color: '#7dd3c8' },
  { num: '02', label: 'Choose Lens', detail: 'Pick 1–2 models from KB', color: '#c97a4a' },
  { num: '03', label: 'Think Together', detail: 'Apply to actual situation', color: '#6ee7b7' },
  { num: '04', label: 'Surface Blind Spot', detail: 'What they are NOT seeing', color: '#f0c080' },
  { num: '05', label: 'Return Ownership', detail: 'Never make the decision', color: '#a3e635' },
];

const convo = [
  {
    who: 'you',
    text: 'I want to be consistent with my ibadah — Quran, dhikr, salah on time — but work always takes over.',
    color: '#c97a4a',
  },
  {
    who: 'claude',
    text: 'When work "takes over" — is it external demands, or do you find yourself choosing work even when there\'s a window?',
    color: '#7dd3c8',
  },
  {
    who: 'you',
    text: 'Both. But honestly — I choose work even when I have time. Ibadah feels hard to start.',
    color: '#c97a4a',
  },
  {
    who: 'claude',
    text: "That's an honest thing to say. Most people stop at 'work is demanding' — you went further. The question isn't really about time.",
    color: '#7dd3c8',
  },
  {
    who: 'you',
    text: 'Restlessness. Like I need to finish one more thing first.',
    color: '#c97a4a',
  },
  {
    who: 'claude',
    text: "If you wanted to guarantee you'd miss salah every day — what would be the perfect strategy?",
    color: '#7dd3c8',
    model: 'inversion',
  },
  {
    who: 'you',
    text: "Wait until I feel ready. I've been doing exactly that.",
    color: '#c97a4a',
  },
  {
    who: 'claude',
    text: 'You already answered it. Waiting to feel ready IS the strategy for missing it.',
    color: '#6ee7b7',
    highlight: true,
  },
];

export default function ThinkingPartnerSlide() {
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
              07 / 07
            </span>
            <div className="w-px h-3.5 bg-[#d0cac3]" />
            <span className="text-[13px] text-[#888] tracking-[0.15em] uppercase font-semibold">
              AI as Thinking Partner
            </span>
          </div>
          <span className="text-[13px] font-bold tracking-[0.2em] text-[#1e6b62] uppercase">
            Hack Your Work · 2026
          </span>
        </header>

        {/* Body */}
        <div className="flex-1 flex min-h-0">
          {/* ── LEFT (52%) ── */}
          <div
            className="grid grid-rows-[auto_1fr_auto] px-10 py-5 gap-4 border-r border-[#e3ddd6] overflow-hidden"
            style={{ width: '52%' }}
          >
            {/* Title */}
            <div style={anim('fadeUp', 80)}>
              <div className="inline-flex items-center gap-2 bg-[#1e6b62]/10 border border-[#1e6b62]/20 rounded-full px-3 py-1 mb-2.5">
                <Brain className="w-3 h-3 text-[#1e6b62]" strokeWidth={2} />
                <span className="text-[12px] font-bold text-[#1e6b62] tracking-[0.15em] uppercase">
                  Bonus Criterion · AI as Collaborator
                </span>
              </div>
              <h1 className="text-[1.75rem] font-black tracking-tight text-[#1a1a1a] leading-tight">
                Not an answer machine.
                <br />
                <span className="text-[#1e6b62]">A thinking partner with a knowledge base.</span>
              </h1>
            </div>

            {/* Dark card */}
            <div
              className="min-h-0 bg-[#1a5c54] rounded-2xl p-5 flex flex-col gap-4 overflow-hidden"
              style={anim('fadeUp', 160)}
            >
              {/* Knowledge sources */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/35 uppercase mb-2">
                  Built from 4 knowledge sources
                </p>
                <div className="flex gap-2 flex-wrap items-center">
                  {sources.map(s => (
                    <span
                      key={s.label}
                      className="text-[11px] font-bold px-2.5 py-1 rounded-lg"
                      style={{
                        backgroundColor: `${s.color}18`,
                        color: s.color,
                        border: `1px solid ${s.color}30`,
                      }}
                    >
                      {s.label}
                    </span>
                  ))}
                  <span className="text-[10px] text-white/35 ml-1">→ 46 mental models</span>
                </div>
              </div>

              {/* 5-stage loop */}
              <div className="flex flex-col gap-1.5">
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/35 uppercase mb-0.5">
                  5-stage loop — every conversation
                </p>
                {stages.map((s, i) => (
                  <div key={s.num} className="flex items-center gap-2.5">
                    <span
                      className="font-mono text-[10px] font-black w-5 shrink-0 text-right"
                      style={{ color: s.color }}
                    >
                      {s.num}
                    </span>
                    <div
                      className="w-px h-4 shrink-0"
                      style={{ backgroundColor: `${s.color}40` }}
                    />
                    <span className="text-[12px] font-bold text-white shrink-0">{s.label}</span>
                    <span className="text-[10px] text-white/40 truncate">{s.detail}</span>
                    {i < stages.length - 1 && (
                      <ArrowRight
                        className="w-3 h-3 text-white/15 shrink-0 ml-auto"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Models grid */}
              <div className="bg-black/20 border border-white/10 rounded-xl px-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[9px] font-bold tracking-[0.2em] text-white/25 uppercase">
                    15 core models
                  </p>
                  <span className="text-[9px] text-white/20">+31 extended</span>
                </div>
                <div className="flex flex-col gap-2">
                  {modelCategories.map(cat => (
                    <div key={cat.label} className="flex items-start gap-2">
                      <span
                        className="text-[8px] font-bold shrink-0 mt-0.5 tracking-wide"
                        style={{ color: `${cat.color}90`, minWidth: 72 }}
                      >
                        {cat.label}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {cat.models.map(m => (
                          <span
                            key={m}
                            className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded"
                            style={{
                              backgroundColor: `${cat.color}14`,
                              color: m.includes('★') ? cat.color : `${cat.color}cc`,
                              border: m.includes('★')
                                ? `1px solid ${cat.color}50`
                                : `1px solid ${cat.color}20`,
                            }}
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* KB stat row */}
            <div className="flex items-center gap-4" style={anim('fadeUp', 300)}>
              <div className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#1e6b62]" strokeWidth={1.5} />
                <span className="text-[11px] font-bold text-[#555]">
                  15 core models · 31 extended
                </span>
              </div>
              <div className="w-px h-3 bg-[#d0cac3]" />
              <div className="flex items-center gap-2">
                <Lightbulb className="w-3.5 h-3.5 text-[#c97a4a]" strokeWidth={1.5} />
                <span className="text-[11px] text-[#888]">reads KB live during Stage 2</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT (48%) dark ── */}
          <div
            className="flex flex-col px-7 py-5 gap-3 overflow-hidden"
            style={{ width: '48%', backgroundColor: '#163f3b' }}
          >
            {/* Label */}
            <div className="flex items-center justify-between shrink-0" style={anim('fadeIn', 200)}>
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/35 uppercase">
                Live demo — real conversation
              </p>
              <div className="flex items-center gap-1.5 bg-[#c97a4a]/15 border border-[#c97a4a]/25 rounded-full px-2.5 py-1">
                <RotateCcw className="w-2.5 h-2.5 text-[#c97a4a]" strokeWidth={2} />
                <span className="text-[9px] font-bold text-[#c97a4a]">
                  model detected in-context
                </span>
              </div>
            </div>

            {/* Conversation */}
            <div className="flex flex-col gap-2 flex-1 min-h-0 overflow-hidden">
              {convo.map((c, i) => (
                <div
                  key={i}
                  className={`flex gap-2 items-start ${c.who === 'you' ? 'flex-row-reverse' : ''}`}
                  style={anim('fadeUp', 240 + i * 55)}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `${c.color}25` }}
                  >
                    <span className="text-[7px] font-black" style={{ color: c.color }}>
                      {c.who === 'you' ? 'M' : 'AI'}
                    </span>
                  </div>
                  <div
                    className={`relative max-w-[85%] rounded-xl px-3 py-2 ${
                      c.highlight
                        ? 'bg-[#1e6b62]/40 border border-[#7dd3c8]/40'
                        : c.who === 'you'
                          ? 'bg-white/8 border border-white/10'
                          : 'bg-white/5 border border-white/8'
                    }`}
                  >
                    <p
                      className="text-[10.5px] leading-snug"
                      style={{
                        color: c.highlight ? '#7dd3c8' : 'rgba(255,255,255,0.72)',
                      }}
                    >
                      {c.text}
                    </p>
                    {'model' in c && c.model && (
                      <div className="mt-1.5 flex items-center gap-1.5">
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="text-[8px] font-mono font-bold text-[#c97a4a] bg-[#c97a4a]/15 border border-[#c97a4a]/25 rounded px-1.5 py-0.5">
                          model: {c.model}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom insight */}
            <div
              className="flex items-start gap-2.5 bg-white/6 border border-white/10 rounded-xl px-4 py-2.5 shrink-0"
              style={anim('fadeUp', 700)}
            >
              <MessageSquare
                className="w-3.5 h-3.5 text-[#7dd3c8] shrink-0 mt-0.5"
                strokeWidth={1.5}
              />
              <p className="text-[11px] text-white/55 leading-snug">
                The model wasn&apos;t named until asked. Claude picked{' '}
                <span className="text-[#c97a4a] font-bold">inversion</span> from its live KB —
                <span className="text-white/75 font-semibold"> applied, not cited.</span>
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
          <span className="font-mono text-[12px] font-bold tracking-[0.2em] text-[#1e6b62] uppercase">
            Thinking Partner
          </span>
        </footer>
      </div>
    </SlideShell>
  );
}
