'use client';

import React from 'react';

interface HybridCentersProps {
  onOpenCounseling: (centerName?: string) => void;
}

export default function HybridCenters({ onOpenCounseling }: HybridCentersProps) {
  return (
    <section className="w-full py-16 lg:py-24 bg-canvas-slate" id="offline-centers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary font-title-md">
            In-Person Academic Guidance
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-brand-indigo-deep font-bold tracking-tight">
            Visit Our Hybrid Learning Centers
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Prefer classroom doubt-clearing and dedicated silent library desks? Walk into our flagship learning centers in Delhi and Bihar for 1-on-1 counselor guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Center 1: Mukherjee Nagar */}
          <div className="bg-surface-white rounded-2xl border border-border-subtle p-6 lg:p-8 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-brand-indigo-deep text-white text-xs font-bold uppercase tracking-wider font-title-md">
                  North India Flagship
                </span>
                <span className="text-xs text-accent-emerald font-bold flex items-center gap-1 font-title-md">
                  <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
                  Open Daily: 8:00 AM - 9:00 PM
                </span>
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-brand-indigo-deep">
                Mukherjee Nagar Academic Center &amp; CBT Lab
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                24/8 Commercial Complex, Near GTB Nagar Metro Station (Gate 2), Mukherjee Nagar, New Delhi 110009.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-canvas-slate rounded-lg border border-border-subtle">
                  <span className="font-bold text-text-primary block font-title-md">120-Seat CBT Lab</span>
                  <span className="text-text-muted">Actual TCS exam layout terminals</span>
                </div>
                <div className="p-3 bg-canvas-slate rounded-lg border border-border-subtle">
                  <span className="font-bold text-text-primary block font-title-md">Faculty Chambers</span>
                  <span className="text-text-muted">Daily 1-on-1 doubt counters</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 font-title-md">
              <a
                className="inline-flex items-center gap-1.5 text-xs font-bold text-text-primary hover:text-primary transition-colors"
                href="tel:01145678900"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">call</span>
                <span>Call Center: 011-4567-8900</span>
              </a>
              <button
                onClick={() => onOpenCounseling('Mukherjee Nagar (Delhi)')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-emerald-subtle text-emerald-900 text-xs font-bold hover:bg-accent-emerald hover:text-white transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px] text-whatsapp-green">chat</span>
                <span>Book In-Person Counseling</span>
              </button>
            </div>
          </div>

          {/* Center 2: Patna */}
          <div className="bg-surface-white rounded-2xl border border-border-subtle p-6 lg:p-8 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-brand-indigo-deep text-white text-xs font-bold uppercase tracking-wider font-title-md">
                  East India Hub
                </span>
                <span className="text-xs text-accent-emerald font-bold flex items-center gap-1 font-title-md">
                  <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
                  Open Daily: 8:00 AM - 8:30 PM
                </span>
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-brand-indigo-deep">
                Boring Road Central Center &amp; Reading Room
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                4th Floor, Surya Crystal Tower, Near Boring Road Crossing, Patna, Bihar 800001.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-canvas-slate rounded-lg border border-border-subtle">
                  <span className="font-bold text-text-primary block font-title-md">BPSC Special Cell</span>
                  <span className="text-text-muted">State administrative paper specialists</span>
                </div>
                <div className="p-3 bg-canvas-slate rounded-lg border border-border-subtle">
                  <span className="font-bold text-text-primary block font-title-md">24/7 Silent Desk Access</span>
                  <span className="text-text-muted">High-speed Wi-Fi &amp; charging</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 font-title-md">
              <a
                className="inline-flex items-center gap-1.5 text-xs font-bold text-text-primary hover:text-primary transition-colors"
                href="tel:06122548910"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">call</span>
                <span>Call Center: 0612-2548-910</span>
              </a>
              <button
                onClick={() => onOpenCounseling('Boring Road (Patna)')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-emerald-subtle text-emerald-900 text-xs font-bold hover:bg-accent-emerald hover:text-white transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px] text-whatsapp-green">chat</span>
                <span>Book In-Person Counseling</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
