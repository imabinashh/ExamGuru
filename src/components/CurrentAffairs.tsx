'use client';

import React, { useState } from 'react';

interface CurrentAffairsProps {
  onOpenCounseling: (topic?: string) => void;
}

export default function CurrentAffairs({ onOpenCounseling }: CurrentAffairsProps) {
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const handleDownloadPdf = () => {
    setDownloadToast('📰 Downloading March 2026 Comprehensive Monthly Current Affairs Capsule (PDF)...');
    setTimeout(() => {
      setDownloadToast(null);
    }, 3500);
  };

  const articles = [
    {
      id: 'semiconductor',
      tag: 'General Studies II & III',
      readTime: 'Today • 7 Min Read',
      title: 'Cabinet Approves ₹12,000 Cr Mission for Semiconductor Clusters',
      description:
        'Critical UPSC & SSC takeaways: India Semiconductor Mission (ISM) Phase 2 incentives, fabrication subsidies, silicon wafer supply chain bottlenecks, and export comparisons with East Asia.',
      topicTag: 'Tagged: UPSC Mains GS-3',
      badgeBg: 'bg-brand-indigo-light text-primary',
    },
    {
      id: 'rbi-repo',
      tag: 'Banking & Monetary Policy',
      readTime: 'Today • 5 Min Read',
      title: 'RBI MPC Keeps Repo Rate Steady at 6.5%: Cutoff Impact Analysis',
      description:
        'Crucial for SBI PO & RBI Grade B: Liquidity Coverage Ratio (LCR) buffers, core CPI projection curves, stance shifted from ‘Withdrawal of Accommodation’ to ‘Neutral’, and bond yields.',
      topicTag: 'Tagged: Banking Awareness',
      badgeBg: 'bg-accent-emerald-subtle text-accent-emerald',
    },
    {
      id: 'isro-cryo',
      tag: 'Science & National Defence',
      readTime: 'Yesterday • 6 Min Read',
      title: 'ISRO Successfully Hot-Tests Semi-Cryogenic Engine Pre-Burner',
      description:
        'Exam relevance for NDA, CDS & SSC: Liquid Propulsion Systems Centre (LPSC) achievements, Isogrid design features, RP-1 kerosene propellant vs liquid hydrogen comparisons.',
      topicTag: 'Tagged: Defence / Science',
      badgeBg: 'bg-accent-amber-subtle text-accent-amber',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-white border-y border-border-subtle relative" id="current-affairs">
      {/* Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-20 right-6 z-50 bg-brand-indigo-deep text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl border border-indigo-400/30 flex items-center gap-2 animate-in slide-in-from-bottom-4">
          <span className="material-symbols-outlined text-accent-emerald text-[20px]">file_download_done</span>
          <span>{downloadToast}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary font-title-md">
              Published Every Morning at 7:00 AM IST
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-brand-indigo-deep font-bold tracking-tight">
              Current Affairs — <span className="text-primary">Daily Revision</span>
            </h2>
            <h3 className="font-title-md text-base sm:text-lg font-semibold text-slate-700">
              Daily Editorial Dossier &amp; PIB Briefs
            </h3>
            <p className="text-sm sm:text-base text-text-muted">
              Cut through newspaper clutter. Our editorial cell filters 200+ news articles every morning down to 3 exam-critical analyses with direct PYQ cross-references.
            </p>
          </div>
          <button
            onClick={handleDownloadPdf}
            className="inline-flex items-center gap-1 text-primary text-sm font-bold hover:underline font-title-md"
            type="button"
          >
            <span>Download Monthly Current Affairs PDF</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-canvas-slate rounded-xl border border-border-subtle p-6 hover:shadow-lg transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-title-md">
                  <span className={`px-2.5 py-1 rounded font-bold ${article.badgeBg}`}>
                    {article.tag}
                  </span>
                  <span className="text-text-muted">{article.readTime}</span>
                </div>
                <h3
                  onClick={() => onOpenCounseling(`Editorial Article: ${article.title}`)}
                  className="font-headline-sm text-xl font-bold text-brand-indigo-deep hover:text-primary transition-colors cursor-pointer leading-snug"
                >
                  {article.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {article.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle flex items-center justify-between font-title-md">
                <span className="text-[11px] font-bold text-text-muted">{article.topicTag}</span>
                <button
                  onClick={() => onOpenCounseling(`Analysis: ${article.title}`)}
                  className="text-xs font-bold text-primary hover:underline"
                  type="button"
                >
                  Read Full Breakdown →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
