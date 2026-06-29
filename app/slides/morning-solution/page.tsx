import {
  Zap,
  AlarmCheck,
  ListTodo,
  MessageSquare,
  Calendar,
  Mail,
  GitMerge,
  ArrowRight,
  CheckCircle,
  Clock,
  RefreshCw,
  Users,
  FileText,
  Send,
  ScanSearch,
} from 'lucide-react';

import { ImageStack } from '@/components/features/slides/image-stack';
import { GlowText, PulseCard } from '@/components/features/slides/motion-wrappers';
import { SlideShell } from '@/components/features/slides/slide-shell';

const pipeline = [
  {
    stage: '01',
    label: 'Collect',
    color: '#7dd3c8',
    items: [
      { icon: ListTodo, text: 'ClickUp sprint tasks' },
      { icon: GitMerge, text: 'GitLab MR status' },
      { icon: MessageSquare, text: 'Slack @mentions' },
      { icon: Calendar, text: 'Google Calendar' },
      { icon: Mail, text: 'Gmail threads' },
    ],
  },
  {
    stage: '02',
    label: 'AI Processes',
    color: '#c97a4a',
    items: [
      { icon: ScanSearch, text: 'Classify tasks by status' },
      { icon: Clock, text: 'Detect blockers (3+ days)' },
      { icon: RefreshCw, text: 'Cross-ref MRs ↔ ClickUp' },
      { icon: MessageSquare, text: 'Find unread Slack threads' },
      { icon: FileText, text: 'Format standup (mrkdwn)' },
    ],
  },
  {
    stage: '03',
    label: 'Delivers',
    color: '#6ee7b7',
    items: [
      { icon: Send, text: 'Slack standup draft' },
      { icon: FileText, text: 'Canvas entry (prepended)' },
      { icon: CheckCircle, text: 'Morning brief printed' },
    ],
  },
];

const criteria = [
  {
    icon: Clock,
    criterion: 'Time Saved',
    metric: '28+ min/day',
    detail: '120+ hrs/year recovered — measured from 47 real scheduled runs',
    color: '#c97a4a',
  },
  {
    icon: RefreshCw,
    criterion: 'Sustained Usability',
    metric: '47 runs logged',
    detail: 'CronCreate · Auto-runs Sun–Thu · Active since setup · zero manual effort',
    color: '#7dd3c8',
  },
  {
    icon: Users,
    criterion: 'Transferable',
    metric: '< 5 min setup',
    detail: 'Skill is documented — any teammate can replicate with the same tools',
    color: '#7dd3c8',
  },
];

const anim = (name: string, delay: number, dur = 500) =>
  ({
    animation: `${name} ${dur}ms cubic-bezier(0.16,1,0.3,1) both`,
    animationDelay: `${delay}ms`,
  }) as React.CSSProperties;

export default function MorningSolutionSlide() {
  return (
    <SlideShell>
      <div className="w-screen h-screen bg-[#f5f0eb] overflow-hidden flex flex-col select-none">
        {/* Accent line */}
        <div className="h-0.75 bg-[#1e6b62] shrink-0" />

        {/* Header */}
        <header
          className="flex items-center justify-between px-10 py-3.5 border-b border-[#e3ddd6] shrink-0"
          style={anim('fadeIn', 0)}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[13px] font-bold text-[#1e6b62] tracking-[0.2em]">
              02 / 04
            </span>
            <div className="w-px h-3.5 bg-[#d0cac3]" />
            <span className="text-[13px] text-[#888] tracking-[0.15em] uppercase font-semibold">
              Plot Schedule Task · Solution
            </span>
          </div>
          <span className="text-[13px] font-bold tracking-[0.2em] text-[#1e6b62] uppercase">
            Hack Your Work · 2026
          </span>
        </header>

        {/* Body — two columns */}
        <div className="flex-1 flex min-h-0">
          {/* ── LEFT column (58%) ── mist bg */}
          <div
            className="grid grid-rows-[auto_1fr_auto] px-10 py-6 gap-4 border-r border-[#e3ddd6] overflow-hidden"
            style={{ width: '58%' }}
          >
            {/* Title */}
            <div className="flex items-center gap-3" style={anim('fadeUp', 80)}>
              <div className="flex items-center gap-1.5 bg-[#1e6b62]/10 border border-[#1e6b62]/20 rounded-full px-3 py-1 shrink-0">
                <Zap className="w-3 h-3 text-[#1e6b62]" strokeWidth={2} />
                <span className="text-[11px] font-bold text-[#1e6b62] tracking-[0.15em] uppercase">
                  The Solution
                </span>
              </div>
              <h1 className="text-[1.7rem] font-black tracking-tight text-[#1a1a1a] leading-tight">
                One scheduled agent. <span className="text-[#1e6b62]">Zero morning effort.</span>
              </h1>
            </div>

            {/* /schedule card */}
            <div
              className="min-h-0 bg-[#1a5c54] rounded-2xl p-5 flex flex-col gap-3.5 overflow-hidden"
              style={anim('fadeUp', 180)}
            >
              {/* Top bar */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="bg-white/15 border border-white/25 rounded-xl px-4 py-2 shrink-0 text-center">
                  <p className="font-mono text-[13px] font-bold text-white tracking-wide">
                    /schedule
                  </p>
                  <p className="text-[13px] text-white/50 mt-0.5 font-medium">Claude.ai feature</p>
                </div>
                <div className="flex items-center gap-2">
                  <AlarmCheck className="w-4 h-4 text-white/60 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[13px] font-bold text-white leading-tight">
                      Sun – Thu · 8:30 AM
                    </p>
                    <p className="text-[11px] text-white/50">Runs while you sleep · Dhaka time</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-3 py-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[13px] font-bold text-emerald-300">Active</span>
                </div>
              </div>

              {/* Pipeline — 3 stages */}
              <div className="flex-1 min-h-0 flex gap-2">
                {pipeline.map((stage, si) => (
                  <div key={stage.stage} className="flex items-stretch gap-2 flex-1 min-w-0">
                    {/* Stage column */}
                    <div className="flex-1 flex flex-col bg-white/8 border border-white/12 rounded-xl p-3 gap-2">
                      {/* Stage header */}
                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className="text-[13px] font-black tracking-[0.15em] font-mono px-1.5 py-0.5 rounded"
                          style={{ backgroundColor: `${stage.color}25`, color: stage.color }}
                        >
                          {stage.stage}
                        </span>
                        <span className="text-[13px] font-bold text-white">{stage.label}</span>
                      </div>
                      {/* Items */}
                      <div className="flex flex-col gap-1.5">
                        {stage.items.map(item => (
                          <div key={item.text} className="flex items-center gap-1.5">
                            <item.icon
                              className="w-3 h-3 shrink-0"
                              style={{ color: stage.color, opacity: 0.7 }}
                              strokeWidth={1.5}
                            />
                            <span className="text-[10px] text-white/70 leading-tight">
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Arrow between stages */}
                    {si < pipeline.length - 1 && (
                      <div className="flex items-center self-center shrink-0">
                        <ArrowRight className="w-3.5 h-3.5 text-white/25" strokeWidth={1.5} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Output */}
              <div className="flex items-center gap-3 bg-white/10 border border-white/18 rounded-xl px-4 py-2.5">
                <ArrowRight className="w-3.5 h-3.5 text-white/40 shrink-0" strokeWidth={1.5} />
                <div className="flex-1">
                  <p className="text-[11px] font-bold text-white">Delivered to Slack canvas</p>
                  <p className="text-[11px] text-white/55">
                    Structured brief ready before you open your laptop
                  </p>
                </div>
                <CheckCircle className="w-4.5 h-4.5 text-emerald-400 shrink-0" strokeWidth={1.5} />
              </div>
            </div>

            {/* Screenshot thumbnails — compact strip */}
            <div style={anim('fadeUp', 320)}>
              <ImageStack compact />
            </div>
          </div>

          {/* ── RIGHT column (42%) ── DARK IMPACT PANEL */}
          <div
            className="flex flex-col gap-4 px-8 py-6 overflow-hidden"
            style={{ width: '42%', backgroundColor: '#163f3b' }}
          >
            {/* Hero metric row */}
            <div
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
              style={anim('scaleIn', 160)}
            >
              <p className="text-[11px] font-bold tracking-[0.25em] text-white/35 uppercase mb-2">
                Time Recovered — Daily
              </p>
              <div className="flex items-end justify-between gap-3">
                {/* Big number */}
                <div>
                  <div className="flex items-end gap-1 leading-none">
                    <GlowText
                      className="font-black"
                      style={{ fontSize: '5rem', color: '#c97a4a', lineHeight: 1 }}
                      delay={0.8}
                    >
                      28+
                    </GlowText>
                    <span className="text-[1rem] font-bold text-white/50 mb-1.5">min/day</span>
                  </div>
                  <p className="text-[11px] text-white/50 mt-1">before first line of code</p>
                </div>
                {/* Mini stat stack */}
                <div className="flex flex-col gap-1.5 shrink-0">
                  {[
                    { val: '47', lbl: 'runs logged' },
                    { val: '140+', lbl: 'min / week' },
                    { val: '120+', lbl: 'hrs / year' },
                  ].map(s => (
                    <div
                      key={s.lbl}
                      className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-lg px-2.5 py-1"
                    >
                      <span className="text-[13px] font-black text-white">{s.val}</span>
                      <span className="text-[11px] text-white/40">{s.lbl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider + label */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="h-px flex-1 bg-white/10" />
              <p className="text-[9px] font-bold tracking-[0.25em] text-white/30 uppercase shrink-0">
                Judge Criteria Match
              </p>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Criteria cards — fill remaining space */}
            <div className="flex flex-col gap-3 flex-1 min-h-0">
              {criteria.map((c, i) => (
                <PulseCard
                  key={c.criterion}
                  className="flex-1 rounded-xl border px-4 py-3 flex flex-col justify-center"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    borderColor: 'rgba(255,255,255,0.12)',
                    animation: `slideInLeft 500ms cubic-bezier(0.16,1,0.3,1) ${300 + i * 80}ms both`,
                  }}
                  delay={1.2 + i * 0.5}
                  repeatDelay={5}
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${c.color}22` }}
                    >
                      <c.icon
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: c.color }}
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-[13px] font-bold text-white">{c.criterion}</span>
                    <span
                      className="ml-auto text-[12px] font-black shrink-0"
                      style={{ color: c.color }}
                    >
                      {c.metric}
                    </span>
                  </div>
                  <p
                    className="text-[11px] leading-relaxed pl-10"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {c.detail}
                  </p>
                </PulseCard>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="flex items-center justify-between px-10 py-2.5 border-t border-[#e3ddd6] bg-[#f5f0eb] shrink-0"
          style={anim('fadeIn', 100)}
        >
          <span className="text-[11px] text-[#bbb] font-medium">
            Maharab Hossain Opi · SE II · Greentech Apps Foundation
          </span>
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#1e6b62] uppercase">
            The Solution
          </span>
        </footer>
      </div>
    </SlideShell>
  );
}
