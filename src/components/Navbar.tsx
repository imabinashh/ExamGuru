'use client';

import React, { useState } from 'react';

interface NavbarProps {
  onOpenCounseling: (exam?: string) => void;
  onOpenSearch: () => void;
}

export default function Navbar({ onOpenCounseling, onOpenSearch }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [examsDropdownOpen, setExamsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 shadow-sm font-sans">
      {/* 1. Top Dark Utility Bar */}
      <div className="bg-[#0f172a] text-slate-300 text-xs py-2 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="inline-flex items-center gap-1.5 font-medium text-white">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>🎓 Admissions Open for 2026-2027 Batches</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <a 
              className="hidden sm:inline-flex items-center text-slate-300 hover:text-white transition-colors" 
              href="tel:18008903456"
            >
              📞 National Helpline: 1800-890-3456
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors" 
              href="#offline-centers"
            >
              <span className="material-symbols-outlined text-[15px] text-slate-400">location_on</span>
              <span>📍 Offline Centers</span>
            </a>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onOpenCounseling('General')}
              className="inline-flex items-center gap-1 text-emerald-400 hover:brightness-110 font-medium transition-all"
            >
              <span>💬 Free Counseling Call</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="bg-white border-b border-slate-200/80 shadow-sm py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left / Brand Area */}
          <div className="flex items-center">
            <a className="flex items-center gap-2 group" href="#">
              <div className="h-9 px-3 rounded-lg bg-primary text-white flex items-center gap-1.5 shadow-sm font-title-md font-extrabold text-lg tracking-tight">
                <span className="material-symbols-outlined text-[20px] text-emerald-400">school</span>
                <span>Exam<span className="text-emerald-300">Guru</span></span>
              </div>
            </a>
            <div className="hidden md:block h-8 w-px bg-slate-200 mx-3"></div>
            <div className="hidden md:flex flex-col text-[10px] uppercase font-bold tracking-tight leading-tight font-title-md">
              <span className="text-slate-500">Prepare Smarter.</span>
              <span className="text-primary">Compete Stronger.</span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-slate-700 font-title-md relative">
            <div className="relative">
              <button 
                onClick={() => setExamsDropdownOpen(!examsDropdownOpen)}
                className="flex items-center gap-1 hover:text-primary transition-colors py-1 group"
              >
                <span>Exams</span>
                <span className={`material-symbols-outlined text-[18px] text-slate-400 group-hover:text-primary transition-transform ${examsDropdownOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>

              {/* Dropdown Menu */}
              {examsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-surface-white rounded-xl border border-border-strong shadow-xl p-3 space-y-1 z-50 animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setExamsDropdownOpen(false)}
                >
                  <a href="#exam-selector" onClick={() => setExamsDropdownOpen(false)} className="flex items-center gap-2 p-2 rounded-lg hover:bg-canvas-slate text-xs font-semibold text-text-primary">
                    <span className="material-symbols-outlined text-primary text-[18px]">account_balance</span>
                    UPSC Civil Services (IAS)
                  </a>
                  <a href="#exam-selector" onClick={() => setExamsDropdownOpen(false)} className="flex items-center gap-2 p-2 rounded-lg hover:bg-canvas-slate text-xs font-semibold text-text-primary">
                    <span className="material-symbols-outlined text-accent-emerald text-[18px]">badge</span>
                    SSC CGL & CHSL (Tier 1+2)
                  </a>
                  <a href="#exam-selector" onClick={() => setExamsDropdownOpen(false)} className="flex items-center gap-2 p-2 rounded-lg hover:bg-canvas-slate text-xs font-semibold text-text-primary">
                    <span className="material-symbols-outlined text-primary text-[18px]">account_balance_wallet</span>
                    Banking (SBI / IBPS PO)
                  </a>
                  <a href="#exam-selector" onClick={() => setExamsDropdownOpen(false)} className="flex items-center gap-2 p-2 rounded-lg hover:bg-canvas-slate text-xs font-semibold text-text-primary">
                    <span className="material-symbols-outlined text-accent-amber text-[18px]">train</span>
                    Railways RRB NTPC
                  </a>
                  <a href="#exam-selector" onClick={() => setExamsDropdownOpen(false)} className="flex items-center gap-2 p-2 rounded-lg hover:bg-canvas-slate text-xs font-semibold text-text-primary">
                    <span className="material-symbols-outlined text-secondary text-[18px]">map</span>
                    State PSCs (BPSC, UPPSC)
                  </a>
                </div>
              )}
            </div>

            <a className="hover:text-primary transition-colors py-1" href="#courses-grid">Courses</a>
            <a className="hover:text-primary transition-colors py-1" href="#cbt-simulator">Test Series</a>
            <a className="hover:text-primary transition-colors py-1" href="#learning-system">Study Material</a>
            <a className="hover:text-primary transition-colors py-1" href="#current-affairs">Current Affairs</a>
            <a className="hover:text-primary transition-colors py-1" href="#offline-centers">Hybrid Centers</a>
          </nav>

          {/* Right / Utilities & CTA */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div 
              onClick={onOpenSearch} 
              className="hidden xl:flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-1.5 text-xs text-slate-600 w-52 hover:border-primary/50 transition-colors cursor-pointer shadow-sm group"
            >
              <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-primary transition-colors">search</span>
              <span className="truncate text-slate-400 group-hover:text-slate-600">Search exams, courses...</span>
              <kbd className="ml-auto font-mono text-[10px] bg-white text-slate-500 px-1.5 py-0.5 rounded border border-slate-200 group-hover:border-primary/40">⌘K</kbd>
            </div>

            {/* Login */}
            <button 
              onClick={() => onOpenCounseling('Student Portal Login')}
              className="hidden sm:inline-block text-sm font-bold text-slate-700 hover:text-primary px-3 py-1.5 transition-colors font-title-md"
            >
              Login
            </button>

            {/* Get Started CTA Button */}
            <button 
              onClick={() => onOpenCounseling('Free Trial Registration')}
              className="bg-primary hover:bg-brand-indigo-hover text-white text-xs md:text-sm font-bold px-4 py-2 rounded-lg shadow-sm shadow-indigo-200 transition-all inline-flex items-center justify-center font-title-md gap-1"
            >
              <span>Get Started</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-primary"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-4 space-y-3 font-title-md animate-in slide-in-from-top-2">
          {/* Mobile Search Button */}
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenSearch(); }}
            className="w-full flex items-center gap-2 p-2.5 rounded-xl bg-slate-100 text-xs font-semibold text-slate-600 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[18px] text-primary">search</span>
            <span>Search exams, courses, centers...</span>
          </button>

          <a 
            href="#exam-selector" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-700 hover:text-primary border-b border-slate-100"
          >
            🎯 Exam Cadres & Syllabus
          </a>
          <a 
            href="#courses-grid" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-700 hover:text-primary border-b border-slate-100"
          >
            📚 Master Batches & Courses
          </a>
          <a 
            href="#cbt-simulator" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-700 hover:text-primary border-b border-slate-100"
          >
            🖥️ TCS iON CBT Exam Simulator
          </a>
          <a 
            href="#current-affairs" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-700 hover:text-primary border-b border-slate-100"
          >
            📰 Daily PIB & Editorial Briefs
          </a>
          <a 
            href="#offline-centers" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-700 hover:text-primary border-b border-slate-100"
          >
            📍 Delhi & Patna Offline Centers
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenCounseling(); }}
              className="w-full py-2.5 rounded-lg bg-primary text-white text-xs font-bold text-center"
            >
              Book In-Person Counseling
            </button>
            <a 
              href="tel:18008903456" 
              className="w-full py-2 rounded-lg bg-canvas-slate border border-slate-200 text-xs font-bold text-slate-700 text-center flex items-center justify-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              Call Helpline: 1800-890-3456
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
