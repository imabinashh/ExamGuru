'use client';

import React from 'react';

interface StickyMobileBarProps {
  onOpenCounseling: (topic?: string) => void;
}

export default function StickyMobileBar({ onOpenCounseling }: StickyMobileBarProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-white border-t border-border-subtle px-4 py-2.5 shadow-[0_-4px_16px_rgba(15,23,42,0.06)] font-title-md">
      <div className="grid grid-cols-3 gap-2">
        <a
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-canvas-slate text-text-secondary text-center text-xs hover:bg-slate-200 transition-colors"
          href="tel:18008903456"
        >
          <span className="material-symbols-outlined text-[20px] text-primary">call</span>
          <span className="font-medium mt-0.5">Call Dean</span>
        </a>

        <button
          onClick={() => onOpenCounseling('Mobile WhatsApp Query')}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-accent-emerald-subtle text-emerald-900 text-center text-xs hover:bg-emerald-200 transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px] text-whatsapp-green">chat</span>
          <span className="font-bold mt-0.5">WhatsApp</span>
        </button>

        <a
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-primary text-white text-center text-xs font-bold hover:bg-brand-indigo-hover transition-colors shadow-xs"
          href="#cbt-simulator"
        >
          <span className="material-symbols-outlined text-[20px]">play_circle</span>
          <span className="mt-0.5">Free CBT</span>
        </a>
      </div>
    </div>
  );
}
