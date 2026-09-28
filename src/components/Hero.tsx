'use client';

import React, { useState } from 'react';

interface HeroProps {
  onOpenCounseling: (exam?: string) => void;
}

export default function Hero({ onOpenCounseling }: HeroProps) {
  const [inputValue, setInputValue] = useState('');

  const handleStartTrial = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenCounseling('Free Trial (Hero)');
  };

  return (
    <section className="w-full relative overflow-hidden pt-8 pb-16 lg:pb-20 bg-gradient-to-b from-surface-white via-brand-indigo-light/20 to-canvas-slate border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (Hero Content) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo-light text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider font-title-md">
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
              Fast-Track CBT Preparation 2026
            </div>

            <h1 className="font-headline-xl text-4xl sm:text-5xl lg:text-[56px] text-brand-indigo-deep font-extrabold tracking-tight leading-[1.12]">
              Your Government Exam Preparation, <span className="text-primary">All in One Place.</span>
            </h1>

            <p className="font-body-lg text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
              Prepare for UPSC, SSC, Banking, Railways, Defence, Teaching and State-level examinations with structured courses, expert classes, real-pattern mock tests and granular progress tracking.
            </p>

            {/* Lead Capture Form / CTA bar */}
            <div className="max-w-xl">
              <form onSubmit={handleStartTrial} className="bg-surface-white p-2 rounded-xl border-2 border-border-strong shadow-lg flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="flex items-center gap-3 px-3 flex-1">
                  <span className="material-symbols-outlined text-text-muted text-[20px]">phone_iphone</span>
                  <input
                    className="w-full border-none focus:outline-none text-sm font-medium text-text-primary placeholder:text-text-muted bg-transparent p-1 font-sans"
                    placeholder="Enter mobile number for free counseling"
                    type="tel"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-primary hover:bg-brand-indigo-hover text-white text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 shrink-0 font-title-md"
                >
                  <span>Start Free Trial</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </form>

              {/* Secondary Links */}
              <div className="flex flex-wrap items-center gap-4 pt-3 text-xs font-semibold text-text-secondary font-title-md">
                <a className="text-primary hover:underline inline-flex items-center gap-1" href="#courses-grid">
                  <span>Explore 35+ Courses</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
                <span className="text-text-muted">•</span>
                <a className="hover:text-primary inline-flex items-center gap-1.5 text-text-secondary" href="#cbt-simulator">
                  <span className="material-symbols-outlined text-accent-emerald text-[18px]">play_circle</span>
                  <span>Take Free Sample Mock</span>
                </a>
              </div>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm font-semibold text-text-secondary font-title-md">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[18px] font-bold">check_circle</span>
                <span>Live &amp; Recorded Classes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[18px] font-bold">check_circle</span>
                <span>15,000+ TCS Pattern Mocks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[18px] font-bold">check_circle</span>
                <span>State &amp; Central Coverage</span>
              </div>
            </div>

            {/* Social Proof Rating Block */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center -space-x-2">
                <div className="w-9 h-9 rounded-full border-2 border-white bg-indigo-500 text-white font-bold text-xs flex items-center justify-center">AS</div>
                <div className="w-9 h-9 rounded-full border-2 border-white bg-emerald-500 text-white font-bold text-xs flex items-center justify-center">RK</div>
                <div className="w-9 h-9 rounded-full border-2 border-white bg-amber-500 text-white font-bold text-xs flex items-center justify-center">MP</div>
                <div className="w-9 h-9 rounded-full border-2 border-white bg-brand-indigo-deep text-white text-[11px] font-bold flex items-center justify-center font-title-md">
                  +450k
                </div>
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-accent-amber text-xs">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-text-primary font-title-md">4.9 / 5</span>
                </div>
                <p className="text-xs text-text-muted">Trusted by 450,000+ aspirants across India (18,200+ reviews)</p>
              </div>
            </div>
          </div>

          {/* Right Column (Student Preparation Dashboard Widget) */}
          <div className="lg:col-span-5 relative space-y-4">
            {/* Card 1: Today's Target Course Card with Badge */}
            <div className="relative bg-surface-white rounded-2xl border-2 border-border-strong shadow-xl p-5 pt-6 space-y-4">
              {/* Top Right Qualified Badge */}
              <div className="absolute -top-3.5 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent-amber text-brand-indigo-deep text-[11px] font-extrabold tracking-wider uppercase border border-amber-300 shadow-sm font-title-md">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                <span>TIER 1 + 2 QUALIFIED</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider font-title-md">TODAY&apos;S TARGET COURSE</span>
                <button 
                  onClick={() => onOpenCounseling('Quantitative Aptitude')} 
                  className="text-text-muted hover:text-text-primary"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                </button>
              </div>

              <h3 className="font-title-md text-base sm:text-lg font-bold text-brand-indigo-deep leading-snug">
                Quantitative Aptitude: Number Systems &amp; Algebra
              </h3>

              {/* Green Inner Card */}
              <div className="bg-emerald-600 rounded-xl p-4 text-white flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full border-4 border-emerald-300 flex items-center justify-center text-xs font-extrabold font-metric-display shrink-0">
                    80%
                  </div>
                  <div>
                    <h4 className="font-title-md font-bold text-sm leading-tight text-white">Advanced Speed Drills</h4>
                    <div className="flex items-center gap-3 text-[11px] text-emerald-100 mt-1">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">check_circle</span> 25 lessons
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">schedule</span> 45 min daily
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onOpenCounseling('Speed Drills Module')}
                  className="px-3.5 py-2 rounded-lg bg-surface-white hover:bg-slate-50 text-emerald-900 text-xs font-bold shrink-0 transition-colors shadow-xs inline-flex items-center gap-1 font-title-md"
                  type="button"
                >
                  <span>Continue</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>

              {/* Card 1 Footer */}
              <div className="pt-1 flex items-center justify-between text-xs font-medium">
                <span className="text-emerald-700 font-semibold font-title-md">80% accuracy score on ExamGuru</span>
                <span className="text-text-muted text-[11px]">Module 4 of 6 • 8 assignments left</span>
              </div>
            </div>

            {/* Bottom 2 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 2: Performance Graph Card */}
              <div className="bg-surface-white rounded-2xl border-2 border-border-strong shadow-lg p-4 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-title-md text-sm font-bold text-brand-indigo-deep">Performance</h4>
                    <span className="px-2 py-0.5 rounded bg-accent-emerald-subtle text-accent-emerald text-[11px] font-bold font-title-md">Top 2%</span>
                  </div>
                  <p className="text-[11px] text-text-muted mt-0.5">Accuracy vs Expected Cutoff</p>
                </div>

                {/* Spline / Wave Graph SVG */}
                <div className="py-1">
                  <svg className="w-full h-20 overflow-visible" viewBox="0 0 240 80">
                    {/* Cutoff baseline / amber curve */}
                    <path d="M 0 65 Q 40 60, 80 62 T 160 56 T 240 50" fill="none" stroke="#F59E0B" strokeLinecap="round" strokeWidth="2.5"></path>
                    {/* User score / indigo curve */}
                    <path d="M 0 72 C 40 68, 60 50, 100 35 C 140 20, 170 55, 200 45 C 220 38, 230 25, 240 20" fill="none" stroke="#4f46e5" strokeLinecap="round" strokeWidth="3"></path>
                    {/* High point dot */}
                    <circle cx="240" cy="20" fill="#4f46e5" r="4"></circle>
                  </svg>
                  {/* X Axis Labels */}
                  <div className="flex justify-between text-[9px] font-medium text-text-muted pt-1 border-t border-border-subtle mt-1 font-title-md">
                    <span>Nov</span>
                    <span>Dec</span>
                    <span>Jan</span>
                    <span>Feb</span>
                    <span className="text-primary font-bold">Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-between text-[11px] pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                    <span className="text-text-primary font-semibold font-title-md">Your Score (92%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent-amber"></span>
                    <span className="text-text-muted">Cutoff (68%)</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Scheduled Today Card */}
              <div className="bg-surface-white rounded-2xl border-2 border-border-strong shadow-lg p-4 space-y-3 flex flex-col justify-between">
                <div>
                  <h4 className="font-title-md text-sm font-bold text-brand-indigo-deep">Scheduled Today</h4>
                </div>
                <div className="space-y-2">
                  {/* Indigo Item */}
                  <div className="p-2.5 rounded-xl bg-indigo-700 text-white flex items-center justify-between gap-2 shadow-xs">
                    <div className="flex items-center gap-2 truncate">
                      <span className="material-symbols-outlined text-[16px] text-white shrink-0">check_circle</span>
                      <span className="text-xs font-bold truncate font-title-md">SSC CGL Full Mock #09</span>
                    </div>
                    <span className="font-mono text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded shrink-0 font-bold">10:00 AM</span>
                  </div>
                  {/* Amber Item */}
                  <div className="p-2.5 rounded-xl bg-amber-400 text-brand-indigo-deep flex items-center justify-between gap-2 shadow-xs">
                    <div className="flex items-center gap-2 truncate">
                      <span className="material-symbols-outlined text-[16px] text-brand-indigo-deep shrink-0">check_circle</span>
                      <span className="text-xs font-bold truncate font-title-md">Daily CA Capsule &amp; Quiz</span>
                    </div>
                    <span className="font-mono text-[10px] bg-black/10 text-brand-indigo-deep px-1.5 py-0.5 rounded shrink-0 font-bold">8:00 AM</span>
                  </div>
                </div>

                {/* Bottom Link & Reminders */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-text-muted inline-flex items-center gap-1 text-[11px]">
                    <span className="material-symbols-outlined text-[14px] text-accent-emerald">notifications_active</span>
                    <span>Live reminders on</span>
                  </span>
                  <a className="text-primary font-bold hover:underline inline-flex items-center gap-0.5 text-[11px] font-title-md" href="#cbt-simulator">
                    <span>View all</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
