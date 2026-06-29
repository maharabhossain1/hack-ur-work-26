import {
  MessageSquare,
  Users,
  Mic,
  ArrowRight,
  ListTodo,
  FileText,
  Send,
  CheckCircle,
  Zap,
  Brain,
  Layers,
} from 'lucide-react';

import { ImageStack } from '@/components/features/slides/image-stack';
import { SlideShell } from '@/components/features/slides/slide-shell';

const anim = (name: string, delay: number, dur = 500) =>
  ({
    animation: `${name} ${dur}ms cubic-bezier(0.16,1,0.3,1) both`,
    animationDelay: `${delay}ms`,
  }) as React.CSSProperties;

const DEMO_IMAGES = [
  {
    src: '/slides/demo-prompt.png',
    label: '01 · The Prompt',
    caption: 'Voice → text via OpenSuperWhisper · goal + /debrief',
  },
  {
    src: '/slides/demo-result.png',
    label: '02 · Claude Result',
    caption: 'All three done — ticket · Slack draft · canvas entry',
  },
  {
    src: '/slides/demo-slack.png',
    label: '03 · Slack Message',
    caption: 'Problem recap · solution · links · ask sent to teammate',
  },
  {
    src: '/slides/demo-clickup.png',
    label: '04 · ClickUp Ticket',
    caption: '[Data Server] Upgrade django-allauth · full context · story points',
  },
];

const outputs = [
  {
    icon: ListTodo,
    title: 'ClickUp Ticket',
    tag: '#86yS4U0w',
    detail: 'Title · root cause · solution · links · story points · assigned',
    color: '#c97a4a',
  },
  {
    icon: Send,
    title: 'Slack Draft',
    tag: 'Group DM',
    detail: 'Problem recap · solution · docs links · direct ask to teammate',
    color: '#7dd3c8',
  },
  {
    icon: FileText,
    title: 'Canvas Entry',
    tag: 'Standup log',
    detail: 'Last day · blocker · today · action items · ticket link',
    color: '#6ee7b7',
  },
];

export default function WorkDemoSlide() {
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
              04 / 06
            </span>
            <div className="w-px h-3.5 bg-[#d0cac3]" />
            <span className="text-[13px] text-[#888] tracking-[0.15em] uppercase font-semibold">
              Work Demo · AI in Action
            </span>
          </div>
          <span className="text-[13px] font-bold tracking-[0.2em] text-[#1e6b62] uppercase">
            Hack Your Work · 2026
          </span>
        </header>

        {/* Body */}
        <div className="flex-1 flex min-h-0">
          {/* ── LEFT (58%) ── */}
          <div
            className="grid grid-rows-[auto_1fr_auto] px-10 py-5 gap-4 border-r border-[#e3ddd6] overflow-hidden"
            style={{ width: '58%' }}
          >
            {/* Title */}
            <div style={anim('fadeUp', 80)}>
              <div className="inline-flex items-center gap-2 bg-[#1e6b62]/10 border border-[#1e6b62]/20 rounded-full px-3 py-1 mb-2.5">
                <Zap className="w-3 h-3 text-[#1e6b62]" strokeWidth={2} />
                <span className="text-[12px] font-bold text-[#1e6b62] tracking-[0.15em] uppercase">
                  Work Demo
                </span>
              </div>
              <h1 className="text-[1.6rem] font-black tracking-tight text-[#1a1a1a] leading-tight">
                Slack problem → three deliverables.
                <br />
                <span className="text-[#1e6b62]">One voice prompt. ~3 minutes.</span>
              </h1>
            </div>

            {/* Teal card — prompt formula + flow */}
            <div
              className="min-h-0 bg-[#1a5c54] rounded-2xl p-5 flex flex-col gap-3.5 overflow-hidden"
              style={anim('fadeUp', 160)}
            >
              {/* Trigger row */}
              <div className="flex items-center gap-2">
                {[
                  { icon: MessageSquare, label: 'Problem in Slack', color: '#c97a4a' },
                  { icon: Users, label: 'Quick meeting', color: '#c97a4a' },
                  { icon: Mic, label: 'Voice → Claude', color: '#7dd3c8' },
                ].map((s, i) => (
                  <div key={s.label} className="flex items-center gap-2 flex-1 min-w-0">
                    <div className="flex-1 bg-white/10 border border-white/15 rounded-xl px-2.5 py-2 flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${s.color}22` }}
                      >
                        <s.icon className="w-3 h-3" style={{ color: s.color }} strokeWidth={1.5} />
                      </div>
                      <span className="text-[12px] font-semibold text-white/85 leading-tight">
                        {s.label}
                      </span>
                    </div>
                    {i < 2 && (
                      <ArrowRight className="w-3 h-3 text-white/25 shrink-0" strokeWidth={1.5} />
                    )}
                  </div>
                ))}
              </div>

              {/* Prompt formula */}
              <div className="bg-white/8 border border-white/12 rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="text-[12px] font-bold text-white/40 shrink-0">Formula:</span>
                <span className="bg-[#c97a4a]/20 border border-[#c97a4a]/30 rounded-lg px-2.5 py-1 text-[13px] font-bold text-[#c97a4a]">
                  goal
                </span>
                <span className="text-white/30 text-[16px]">+</span>
                <span className="bg-white/15 border border-white/25 rounded-lg px-2.5 py-1 font-mono text-[13px] font-bold text-white">
                  /debrief
                </span>
                <ArrowRight className="w-3 h-3 text-white/25 shrink-0" strokeWidth={1.5} />
                <span className="text-[12px] text-white/55 leading-tight">
                  chains /ticket · /log-meeting · Slack MCP
                </span>
              </div>

              {/* OpenSuperWhisper callout */}
              <div className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 flex items-start gap-3">
                <div className="w-7 h-7 bg-[#7dd3c8]/15 border border-[#7dd3c8]/25 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Mic className="w-3.5 h-3.5 text-[#7dd3c8]" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[13px] font-bold text-white">OpenSuperWhisper</span>
                    <span className="bg-[#7dd3c8]/15 border border-[#7dd3c8]/25 rounded-full px-2 py-0.5 text-[10px] font-bold text-[#7dd3c8]">
                      3× faster than typing
                    </span>
                  </div>
                  <p className="text-[11px] text-white/55 leading-relaxed">
                    Voice → transcript in seconds. Speak full context naturally — no typing
                    bottleneck. Full prompt delivered while walking to my desk.
                  </p>
                </div>
              </div>

              {/* In-context learning */}
              <div className="flex gap-3">
                <div className="flex-1 bg-white/8 border border-white/12 rounded-xl px-3 py-2.5 flex items-start gap-2">
                  <Brain className="w-3.5 h-3.5 text-[#c97a4a] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-[12px] font-bold text-white mb-0.5">In-context learning</p>
                    <p className="text-[10px] text-white/50 leading-tight">
                      Task context + links in prompt → Claude reasons over real data, not guesses
                    </p>
                  </div>
                </div>
                <div className="flex-1 bg-white/8 border border-white/12 rounded-xl px-3 py-2.5 flex items-start gap-2">
                  <Layers
                    className="w-3.5 h-3.5 text-[#7dd3c8] shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-[12px] font-bold text-white mb-0.5">Parallel agents</p>
                    <p className="text-[10px] text-white/50 leading-tight">
                      Skills fan out — ticket · Slack · canvas run concurrently via MCPs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 proof thumbnails */}
            <div style={anim('fadeUp', 300)}>
              <ImageStack images={DEMO_IMAGES} compact />
            </div>
          </div>

          {/* ── RIGHT (42%) dark ── */}
          <div
            className="flex flex-col gap-4 px-8 py-6 overflow-hidden"
            style={{ width: '42%', backgroundColor: '#163f3b' }}
          >
            {/* Hero metric */}
            <div
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
              style={anim('scaleIn', 200)}
            >
              <p className="text-[11px] font-bold tracking-[0.25em] text-white/35 uppercase mb-2">
                Time to complete
              </p>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <div className="flex items-end gap-2 leading-none">
                    <span
                      className="font-black"
                      style={{ fontSize: '4rem', color: '#c97a4a', lineHeight: 1 }}
                    >
                      ~3
                    </span>
                    <span className="text-[1.1rem] font-bold text-white/50 mb-1.5">min</span>
                  </div>
                  <p className="text-[11px] text-white/45 mt-1">start to all three delivered</p>
                </div>
                <div className="flex flex-col gap-1.5 shrink-0">
                  {[
                    { val: '15–20', lbl: 'min manual' },
                    { val: '3', lbl: 'deliverables' },
                    { val: '0', lbl: 'tab switches' },
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
                What was delivered
              </p>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Output cards */}
            <div className="flex flex-col gap-3 flex-1 min-h-0">
              {outputs.map((o, i) => (
                <div
                  key={o.title}
                  className="flex-1 rounded-xl border px-4 py-3 flex flex-col justify-center"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    borderColor: 'rgba(255,255,255,0.12)',
                    ...anim('slideInLeft', 320 + i * 90),
                  }}
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${o.color}20` }}
                    >
                      <o.icon
                        className="w-3.5 h-3.5"
                        style={{ color: o.color }}
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-[14px] font-bold text-white">{o.title}</span>
                    <span
                      className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md ml-auto"
                      style={{ backgroundColor: `${o.color}20`, color: o.color }}
                    >
                      {o.tag}
                    </span>
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" strokeWidth={1.5} />
                  </div>
                  <p
                    className="text-[11px] leading-relaxed pl-10"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {o.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom line */}
            <div
              className="flex items-center gap-2.5 bg-white/6 border border-white/10 rounded-xl px-4 py-2.5 shrink-0"
              style={anim('fadeUp', 580)}
            >
              <Zap className="w-3.5 h-3.5 text-[#c97a4a] shrink-0" strokeWidth={1.5} />
              <p className="text-[11px] text-white/55 leading-snug">
                No tab-switching. No copy-paste. No lost context.
                <span className="text-white/80 font-semibold"> Just talk and move on.</span>
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
            Work Demo
          </span>
        </footer>
      </div>
    </SlideShell>
  );
}
