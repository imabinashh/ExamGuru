'use client';

import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ananya Sharma',
      tag: 'Cleared SSC CGL Tier 1 (168 Raw) • Delhi',
      avatar: 'AS',
      avatarBg: 'bg-indigo-600',
      quote:
        '“ExamGuru’s negative marking penalty audit stopped me from losing 14-16 marks on blind guesses in SSC CGL Tier 1. The TCS mock interface is so authentic that the actual exam hall felt like another routine practice test.”',
    },
    {
      name: 'Rohan Kulkarni',
      tag: 'SBI PO Finalist • Pune',
      avatar: 'RK',
      avatarBg: 'bg-emerald-600',
      quote:
        '“Managing full-time IT shifts left me with 3 hours daily. Neha ma\'am\'s high-level puzzle capsules and weekend sectional speed drills enabled me to clear SBI PO Prelims on my first attempt with a 98.4 percentile.”',
    },
    {
      name: 'Meera Patel',
      tag: '69th BPSC Qualified • Patna',
      avatar: 'MP',
      avatarBg: 'bg-amber-600',
      quote:
        '“The BPSC Mains answer evaluation turnaround was within 24 hours. The faculty noted specific areas in my Bihar administrative geography answers that pushed my score well above the general cutoff.”',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-white border-t border-border-subtle" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary font-title-md">
            Aspirant Hall of Fame
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-brand-indigo-deep font-bold tracking-tight">
            Verified Rank Holders &amp; Aspirants
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Independent testimonials from candidates who transitioned from random preparation to systematic cutoff clearance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-canvas-slate rounded-xl border border-border-subtle p-6 shadow-xs flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex text-accent-amber">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-xs text-text-secondary italic leading-relaxed">
                  {t.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.avatarBg} text-white font-bold flex items-center justify-center text-xs font-title-md ring-2 ring-primary/20 shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-indigo-deep font-title-md">
                    {t.name}
                  </div>
                  <span className="text-[11px] text-text-muted font-sans">
                    {t.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
