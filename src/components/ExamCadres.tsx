'use client';

import React, { useState } from 'react';

interface ExamCadresProps {
  onOpenCounseling: (exam?: string) => void;
}

interface CadreCard {
  id: string;
  category: string;
  title: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  description: string;
  metrics: {
    label1: string;
    value1: string;
    label2: string;
    value2: string;
    label3: string;
    value3: string;
  };
}

const cadresData: CadreCard[] = [
  {
    id: 'upsc',
    category: 'upsc-state',
    title: 'UPSC Civil Services (IAS / IPS / IFS)',
    badge: 'Premier Cadre',
    badgeBg: 'bg-brand-indigo-deep',
    badgeColor: 'text-white',
    icon: 'account_balance',
    iconBg: 'bg-brand-indigo-light',
    iconColor: 'text-primary',
    description: 'General Studies Paper I & II (CSAT), Daily Mains Answer Writing with 24-hr evaluation, and interview guidance board.',
    metrics: {
      label1: 'Expected Seats',
      value1: '1,056+',
      label2: 'Last Prelims Cutoff',
      value2: '75.41 / 200',
      label3: 'Batch Pattern',
      value3: 'Mains + PT',
    },
  },
  {
    id: 'ssc',
    category: 'ssc-railways',
    title: 'SSC CGL & CHSL (Tier-1 + Tier-2)',
    badge: '17,700+ Vacancies',
    badgeBg: 'bg-accent-emerald',
    badgeColor: 'text-white',
    icon: 'badge',
    iconBg: 'bg-accent-emerald-subtle',
    iconColor: 'text-accent-emerald',
    description: 'Full syllabus coverage: Advanced Math shortcuts, English comprehension, Reasoning matrices, and Computer Module with negative marking controls.',
    metrics: {
      label1: 'Negative Penalty',
      value1: '-0.50 Mark',
      label2: 'Target Score',
      value2: '150+ Raw',
      label3: 'Full CBTs',
      value3: '60 Mocks',
    },
  },
  {
    id: 'banking',
    category: 'banking-rbi',
    title: 'Banking & Insurance (SBI / IBPS PO & Clerk)',
    badge: 'Speed Intensive',
    badgeBg: 'bg-brand-indigo-light border border-primary/20',
    badgeColor: 'text-primary',
    icon: 'account_balance_wallet',
    iconBg: 'bg-surface-container',
    iconColor: 'text-primary',
    description: 'High-level Seating Arrangements, Multi-Variable DI, Sectional Time-Locked drills, and Financial Awareness daily dossiers.',
    metrics: {
      label1: 'Prelims Cutoff',
      value1: '59.50 / 100',
      label2: 'Timer Protocol',
      value2: '20m / Sec',
      label3: 'AIR Percentile',
      value3: '95%+ Goal',
    },
  },
  {
    id: 'railways',
    category: 'ssc-railways',
    title: 'Railways Recruitment Board (RRB)',
    badge: 'RRB NTPC & Group D',
    badgeBg: 'bg-accent-amber',
    badgeColor: 'text-white',
    icon: 'train',
    iconBg: 'bg-accent-amber-subtle',
    iconColor: 'text-accent-amber',
    description: 'General Science intensive (Physics/Chemistry/Bio NCERT foundation), static GK flashcards, and bilingual full test papers.',
    metrics: {
      label1: 'Exam Engine',
      value1: 'TCS Exact',
      label2: 'Negative Penalty',
      value2: '-0.33 Mark',
      label3: 'Available Medium',
      value3: 'Hindi + Eng',
    },
  },
  {
    id: 'state-psc',
    category: 'upsc-state',
    title: 'State Public Service Commissions',
    badge: 'UPPSC • BPSC • MPPSC',
    badgeBg: 'bg-secondary',
    badgeColor: 'text-white',
    icon: 'map',
    iconBg: 'bg-brand-indigo-light',
    iconColor: 'text-primary',
    description: 'State-specific GK, regional history, administrative law, and 10-year solved state papers evaluated by retired state civil officers.',
    metrics: {
      label1: 'Active States',
      value1: '12 States',
      label2: 'State Modules',
      value2: 'Specialized',
      label3: 'Evaluation',
      value3: '1-on-1 Call',
    },
  },
  {
    id: 'defence',
    category: 'defence',
    title: 'Defence Services & SSB Interview',
    badge: 'NDA / CDS / AFCAT',
    badgeBg: 'bg-brand-indigo-deep',
    badgeColor: 'text-white',
    icon: 'shield',
    iconBg: 'bg-surface-container-high',
    iconColor: 'text-primary',
    description: 'Written syllabus mastery followed by 5-Day SSB protocol: OIR tests, PPDT, GTO tasks, and psychological profiling by ex-Service Selection Officers.',
    metrics: {
      label1: 'SSB Board',
      value1: 'Col. Retd.',
      label2: 'OIR Practice',
      value2: '2,500+ Qs',
      label3: 'Batch Mode',
      value3: 'Hybrid',
    },
  },
];

export default function ExamCadres({ onOpenCounseling }: ExamCadresProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [downloadNotification, setDownloadNotification] = useState<string | null>(null);

  const filteredCadres = cadresData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const handleDownload = (cadreTitle: string) => {
    setDownloadNotification(`📥 Downloading official 2026-27 Syllabus Breakdown for ${cadreTitle}...`);
    setTimeout(() => {
      setDownloadNotification(null);
    }, 3500);
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-white border-b border-border-subtle relative" id="exam-selector">
      {/* Toast Notification */}
      {downloadNotification && (
        <div className="fixed bottom-20 right-6 z-50 bg-brand-indigo-deep text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl border border-indigo-400/30 flex items-center gap-2 animate-in slide-in-from-bottom-4">
          <span className="material-symbols-outlined text-accent-emerald text-[20px]">check_circle</span>
          <span>{downloadNotification}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary font-title-md">
              Cadre Specialization Engine
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-brand-indigo-deep font-bold tracking-tight">
              Select Your Examination Cadre
            </h2>
            <p className="text-sm sm:text-base text-text-muted">
              Choose your targeted commission. Access authentic syllabus breakdowns, historical cutoff margins, previous 15-year question trends, and structured mentorship.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-canvas-slate rounded-lg border border-border-subtle text-xs font-semibold font-title-md">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-md transition-all ${
                activeFilter === 'all'
                  ? 'bg-brand-indigo-deep text-white shadow-xs'
                  : 'text-text-secondary hover:text-primary'
              }`}
              type="button"
            >
              All Cadres ({cadresData.length})
            </button>
            <button
              onClick={() => setActiveFilter('upsc-state')}
              className={`px-3.5 py-1.5 rounded-md transition-all ${
                activeFilter === 'upsc-state'
                  ? 'bg-brand-indigo-deep text-white shadow-xs'
                  : 'text-text-secondary hover:text-primary'
              }`}
              type="button"
            >
              UPSC &amp; State PSC
            </button>
            <button
              onClick={() => setActiveFilter('ssc-railways')}
              className={`px-3.5 py-1.5 rounded-md transition-all ${
                activeFilter === 'ssc-railways'
                  ? 'bg-brand-indigo-deep text-white shadow-xs'
                  : 'text-text-secondary hover:text-primary'
              }`}
              type="button"
            >
              SSC &amp; Railways
            </button>
            <button
              onClick={() => setActiveFilter('banking-rbi')}
              className={`px-3.5 py-1.5 rounded-md transition-all ${
                activeFilter === 'banking-rbi'
                  ? 'bg-brand-indigo-deep text-white shadow-xs'
                  : 'text-text-secondary hover:text-primary'
              }`}
              type="button"
            >
              Banking &amp; RBI
            </button>
            <button
              onClick={() => setActiveFilter('defence')}
              className={`px-3.5 py-1.5 rounded-md transition-all ${
                activeFilter === 'defence'
                  ? 'bg-brand-indigo-deep text-white shadow-xs'
                  : 'text-text-secondary hover:text-primary'
              }`}
              type="button"
            >
              Defence
            </button>
          </div>
        </div>

        {/* Rich Authority Exam Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCadres.map((card) => (
            <div
              key={card.id}
              className="bg-canvas-slate rounded-xl border border-border-subtle hover:border-primary p-6 transition-all hover:shadow-lg flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl ${card.iconBg} ${card.iconColor} flex items-center justify-center font-bold`}>
                    <span className="material-symbols-outlined text-[28px]">{card.icon}</span>
                  </div>
                  <span className={`px-2.5 py-1 rounded ${card.badgeBg} ${card.badgeColor} text-[11px] font-bold font-title-md`}>
                    {card.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-headline-sm text-xl font-bold text-brand-indigo-deep group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Cadre Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-border-subtle text-center text-xs">
                  <div>
                    <span className="text-text-muted block text-[10px]">{card.metrics.label1}</span>
                    <span className="font-bold text-text-primary font-title-md">{card.metrics.value1}</span>
                  </div>
                  <div>
                    <span className="text-text-muted block text-[10px]">{card.metrics.label2}</span>
                    <span className="font-bold text-primary font-title-md">{card.metrics.value2}</span>
                  </div>
                  <div>
                    <span className="text-text-muted block text-[10px]">{card.metrics.label3}</span>
                    <span className="font-bold text-accent-emerald font-title-md">{card.metrics.value3}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => handleDownload(card.title)}
                  className="text-xs font-bold text-text-secondary hover:text-primary flex items-center gap-1 font-title-md transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  <span>Download Syllabus PDF</span>
                </button>
                <button
                  onClick={() => onOpenCounseling(card.title)}
                  className="px-3.5 py-1.5 rounded bg-primary text-white text-xs font-bold hover:bg-brand-indigo-hover transition-colors font-title-md"
                  type="button"
                >
                  Start Prep →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
