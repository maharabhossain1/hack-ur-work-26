'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { DialogOverlay, DialogPortal } from '@/components/ui/dialog';

type StackImage = {
  src: string;
  label: string;
  caption: string;
};

const IMAGES: StackImage[] = [
  {
    src: '/slides/schedule-config.png',
    label: 'Schedule Config',
    caption: 'Claude.ai — Active · Sun–Thu · 8:30 AM',
  },
  {
    src: '/slides/slack-canvas.png',
    label: 'Slack Canvas',
    caption: 'Auto-posted morning brief in team canvas',
  },
  {
    src: '/slides/standup-post.png',
    label: 'Daily Standup',
    caption: 'Structured: tasks · MRs · blockers · meetings',
  },
];

export function ImageStack({
  compact = false,
  images,
}: {
  compact?: boolean;
  images?: StackImage[];
}) {
  const ACTIVE = images ?? IMAGES;
  const [modalIdx, setModalIdx] = useState<number | null>(null);

  const prev = () => setModalIdx(i => (i !== null ? (i - 1 + ACTIVE.length) % ACTIVE.length : 0));
  const next = () => setModalIdx(i => (i !== null ? (i + 1) % ACTIVE.length : 0));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.stopPropagation();
      prev();
    }
    if (e.key === 'ArrowRight') {
      e.stopPropagation();
      next();
    }
  };

  return (
    <DialogPrimitive.Root
      open={modalIdx !== null}
      onOpenChange={open => !open && setModalIdx(null)}
    >
      {/* Thumbnail row */}
      {compact ? (
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-bold tracking-[0.15em] text-[#aaa] uppercase shrink-0">
            Proof ·
          </span>
          <div className="flex gap-1.5">
            {ACTIVE.map((img, i) => (
              <DialogPrimitive.Trigger
                key={img.src}
                onClick={() => setModalIdx(i)}
                title={img.label}
                className="group relative rounded-md overflow-hidden border border-[#e0dbd4] bg-white hover:border-[#1e6b62]/60 hover:shadow-sm transition-all duration-150 shrink-0"
                style={{ width: 72, height: 48 }}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover object-top"
                  sizes="72px"
                />
                <div className="absolute inset-0 bg-[#1e6b62]/0 group-hover:bg-[#1e6b62]/25 transition-colors duration-150 flex items-center justify-center">
                  <Maximize2
                    className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 drop-shadow"
                    strokeWidth={2}
                  />
                </div>
              </DialogPrimitive.Trigger>
            ))}
          </div>
          <span className="text-[9px] text-[#bbb] ml-1">click to expand</span>
        </div>
      ) : (
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#888] uppercase mb-2.5">
            Proof it works — click to expand
          </p>
          <div className="grid grid-cols-3 gap-2">
            {ACTIVE.map((img, i) => (
              <DialogPrimitive.Trigger
                key={img.src}
                onClick={() => setModalIdx(i)}
                className="group relative rounded-xl overflow-hidden border border-[#e0dbd4] shadow-sm bg-white hover:border-[#1e6b62]/50 hover:shadow-md transition-all duration-200"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover object-top"
                  sizes="120px"
                />
                <div className="absolute inset-0 bg-[#1e6b62]/0 group-hover:bg-[#1e6b62]/20 transition-colors duration-200 flex items-center justify-center">
                  <Maximize2
                    className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg"
                    strokeWidth={2}
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-1.5">
                  <p className="text-[9px] font-bold text-white leading-tight truncate">
                    {img.label}
                  </p>
                </div>
              </DialogPrimitive.Trigger>
            ))}
          </div>
        </div>
      )}

      {/* Full-screen modal — Radix portal escapes transform ancestors */}
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[96vw] max-w-7xl bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl outline-none"
          onKeyDown={handleKeyDown}
          onOpenAutoFocus={e => e.preventDefault()}
        >
          {modalIdx !== null && (
            <>
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
                <div>
                  <p className="text-[14px] font-bold text-white">{ACTIVE[modalIdx].label}</p>
                  <p className="text-[11px] text-white/40 mt-0.5">{ACTIVE[modalIdx].caption}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    {ACTIVE.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setModalIdx(i)}
                        className={`rounded-full transition-all duration-200 ${
                          i === modalIdx
                            ? 'bg-[#1e6b62] w-5 h-2'
                            : 'bg-white/25 hover:bg-white/50 w-2 h-2'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="w-px h-4 bg-white/15" />
                  <DialogPrimitive.Close className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                    <X className="w-3.5 h-3.5 text-white/70" strokeWidth={2} />
                  </DialogPrimitive.Close>
                </div>
              </div>

              {/* Image area */}
              <div
                className="relative bg-[#111] flex items-center justify-center"
                style={{ height: '78vh' }}
              >
                <Image
                  src={ACTIVE[modalIdx].src}
                  alt={ACTIVE[modalIdx].label}
                  fill
                  className="object-contain p-4"
                  sizes="90vw"
                  priority
                />
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 border border-white/15 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5 text-white" strokeWidth={1.5} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 border border-white/15 rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5 text-white" strokeWidth={1.5} />
                </button>
                <div className="absolute top-3 right-3 bg-black/50 border border-white/10 rounded-full px-2.5 py-1 backdrop-blur-sm">
                  <span className="text-[11px] text-white/60 font-mono">
                    {modalIdx + 1} / {ACTIVE.length}
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between">
                <p className="text-[11px] text-white/30">← → arrow keys · click outside to close</p>
                <p className="text-[11px] text-white/30">{ACTIVE[modalIdx].caption}</p>
              </div>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPortal>
    </DialogPrimitive.Root>
  );
}
