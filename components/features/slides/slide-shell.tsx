'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { SLIDES } from '@/components/features/slides/slide-config';

export function SlideShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const idx = SLIDES.findIndex(s => s.path === pathname);
  const prev = SLIDES[idx - 1];
  const next = SLIDES[idx + 1];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (next) router.push(next.path);
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (prev) router.push(prev.path);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev, router]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {children}

      {/* Prev arrow */}
      {prev && (
        <button
          onClick={() => router.push(prev.path)}
          className="fixed left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 hover:bg-white border border-[#e3ddd6] rounded-full flex items-center justify-center transition-all shadow-sm z-50 backdrop-blur-sm"
          aria-label={`Previous: ${prev.title}`}
        >
          <ChevronLeft className="w-5 h-5 text-[#555]" strokeWidth={1.5} />
        </button>
      )}

      {/* Next arrow */}
      {next && (
        <button
          onClick={() => router.push(next.path)}
          className="fixed right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 hover:bg-white border border-[#e3ddd6] rounded-full flex items-center justify-center transition-all shadow-sm z-50 backdrop-blur-sm"
          aria-label={`Next: ${next.title}`}
        >
          <ChevronRight className="w-5 h-5 text-[#555]" strokeWidth={1.5} />
        </button>
      )}

      {/* Slide dots */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
        {SLIDES.map((s, i) => (
          <button
            key={s.path}
            onClick={() => router.push(s.path)}
            title={s.title}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === idx ? 'bg-[#1e6b62] w-6' : 'bg-[#ccc] hover:bg-[#999] w-2'
            }`}
            aria-label={`Slide ${i + 1}: ${s.title}`}
          />
        ))}
      </div>
    </div>
  );
}
