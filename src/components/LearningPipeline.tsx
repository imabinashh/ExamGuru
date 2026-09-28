'use client';

import React from 'react';

export default function LearningPipeline() {
  const steps = [
    {
      step: '01',
      tag: 'Foundation',
      title: 'Concept Mastery',
      description:
        'Faculty-led interactive lectures covering every micro-topic with bilingual handbooks, NCERT standard summaries, and fundamental derivation proofs.',
      features: ['Bilingual Notes (Hindi / Eng)', '100% Micro-Syllabus Mapping'],
    },
    {
      step: '02',
      tag: 'Targeted Drill',
      title: 'Adaptive Practice Engine',
      description:
        '50,000+ question bank with Previous Year Question (PYQ) categorization by difficulty. The algorithm personalizes questions as your topic accuracy crosses 80%.',
      features: ['15-Year Solved PYQ Archive', 'Video Solutions for All Questions'],
    },
    {
      step: '03',
      tag: 'Simulation Floor',
      title: 'Exam-Floor CBT Engine',
      description:
        'Identical to the authentic TCS iON & NTA consoles. Exact font sizing, sectional timers, negative marking penalties, and instant question status palettes.',
      features: ['TCS Screen-to-Screen Replication', 'Live All India Sunday Mocks'],
    },
    {
      step: '04',
      tag: 'Normalization',
      title: 'AI Diagnostics & Cutoff',
      description:
        'Granular diagnostic reports pinpoint time wasted on unattempted questions, high-risk guess penalties, and provide a normalized percentile rank among 150,000 test takers.',
      features: ['Negative Marking Penalty Audit', 'Real-Time All India Rank (AIR)'],
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-canvas-slate" id="learning-system">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary font-title-md">
            Pedagogical Rigor
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-brand-indigo-deep font-bold tracking-tight">
            The 4-Stage Authority Learning Pipeline
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Unstructured preparation produces volatile rank fluctuations. ExamGuru locks your daily progress into an authentic 4-tier milestone engine.
          </p>
        </div>

        {/* Connected Stepper Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-surface-white p-6 rounded-xl border border-border-subtle shadow-xs flex flex-col justify-between space-y-5 relative hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-metric-display text-3xl font-extrabold text-primary">
                    {item.step}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-brand-indigo-light text-primary text-[10px] font-bold uppercase font-title-md">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-title-md text-lg font-bold text-brand-indigo-deep">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle space-y-2 text-xs">
                {item.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-text-secondary font-medium">
                    <span className="material-symbols-outlined text-[16px] text-accent-emerald">
                      task_alt
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
