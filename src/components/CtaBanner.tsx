'use client';

import React from 'react';

interface CtaBannerProps {
  onOpenCounseling: (topic?: string) => void;
}

export default function CtaBanner({ onOpenCounseling }: CtaBannerProps) {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface-white border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-gradient-to-br from-brand-indigo-deep via-primary to-primary-container p-8 lg:p-16 text-on-primary text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-white/15 text-white border border-white/20 text-xs font-bold uppercase tracking-wider inline-block font-title-md">
              Free 7-Day All-Access Pass Active
            </span>

            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold tracking-tight">
              Your Government Career Begins with One Methodical Step.
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto">
              Access 50,000+ PYQs, the official TCS mock simulator, and daily live classes. No credit card required to begin your diagnostic evaluation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 font-title-md">
              <button
                onClick={() => onOpenCounseling('Free Diagnostic Mock Pass')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-surface-white text-primary text-sm font-bold shadow-lg hover:bg-canvas-slate active:scale-[0.98] transition-all"
                type="button"
              >
                <span>Enroll in Free Diagnostic Mock</span>
                <span className="material-symbols-outlined text-[18px] ml-1.5">arrow_forward</span>
              </button>

              <a
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold transition-all"
                href="#offline-centers"
              >
                <span>Locate Offline Centers</span>
              </a>
            </div>

            <div className="pt-6 border-t border-white/15 flex items-center justify-center">
              <button
                onClick={() => onOpenCounseling('Academic Dean WhatsApp Consultation')}
                className="inline-flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-semibold hover:underline font-title-md"
                type="button"
              >
                <span className="material-symbols-outlined text-[20px] text-emerald-400">chat</span>
                <span>Uncertain about cadre selection or age limits? Consult Academic Dean on WhatsApp →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
