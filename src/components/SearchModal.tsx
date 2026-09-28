'use client';

import React, { useState, useEffect } from 'react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (hash: string) => void;
}

interface SearchItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  icon: string;
  targetId: string;
}

const searchableData: SearchItem[] = [
  { id: '1', title: 'UPSC Civil Services (IAS / IPS / IFS)', category: 'Exam Cadre', badge: 'Premier', icon: 'account_balance', targetId: 'exam-selector' },
  { id: '2', title: 'SSC CGL & CHSL (Tier 1 + Tier 2)', category: 'Exam Cadre', badge: '17.7k Seats', icon: 'badge', targetId: 'exam-selector' },
  { id: '3', title: 'Banking & Insurance (SBI / IBPS PO & Clerk)', category: 'Exam Cadre', badge: 'Banking', icon: 'account_balance_wallet', targetId: 'exam-selector' },
  { id: '4', title: 'Railways Recruitment Board (RRB NTPC)', category: 'Exam Cadre', badge: 'Railways', icon: 'train', targetId: 'exam-selector' },
  { id: '5', title: 'State PSCs (BPSC, UPPSC, MPPSC)', category: 'Exam Cadre', badge: 'State Exams', icon: 'map', targetId: 'exam-selector' },
  { id: '6', title: 'Defence Services & SSB Interview (NDA/CDS)', category: 'Exam Cadre', badge: 'Defence', icon: 'shield', targetId: 'exam-selector' },
  { id: '7', title: 'SSC CGL Super-100 Intensive Batch 2026-27', category: 'Flagship Course', badge: '₹4,999', icon: 'school', targetId: 'courses-grid' },
  { id: '8', title: 'UPSC Civil Services Foundation 2026-27', category: 'Flagship Course', badge: '₹14,999', icon: 'school', targetId: 'courses-grid' },
  { id: '9', title: 'SBI PO & Clerk Comprehensive Mastery', category: 'Flagship Course', badge: '₹3,999', icon: 'school', targetId: 'courses-grid' },
  { id: '10', title: 'RRB NTPC & Group D Complete Target Batch', category: 'Flagship Course', badge: '₹2,499', icon: 'school', targetId: 'courses-grid' },
  { id: '11', title: 'TCS iON CBT Exam Console Simulation Mock #14', category: 'Test Series', badge: 'Free Mock', icon: 'terminal', targetId: 'cbt-simulator' },
  { id: '12', title: 'Daily Editorial Dossier & PIB Briefs', category: 'Current Affairs', badge: 'Daily 7 AM', icon: 'newspaper', targetId: 'current-affairs' },
  { id: '13', title: 'Mukherjee Nagar Academic Center & CBT Lab (Delhi)', category: 'Offline Center', badge: 'Delhi', icon: 'location_on', targetId: 'offline-centers' },
  { id: '14', title: 'Boring Road Central Center & Reading Room (Patna)', category: 'Offline Center', badge: 'Patna', icon: 'location_on', targetId: 'offline-centers' },
];

export default function SearchModal({ isOpen, onClose, onSelectAction }: SearchModalProps) {
  const [query, setQuery] = useState('');

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? searchableData.slice(0, 6)
    : searchableData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.badge.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (targetId: string) => {
    onSelectAction(targetId);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden font-sans space-y-0 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 bg-slate-50/50">
          <span className="material-symbols-outlined text-primary text-[22px]">search</span>
          <input
            type="text"
            autoFocus
            placeholder="Search exams, courses, mock tests, offline centers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none text-sm font-medium text-slate-800 focus:outline-none placeholder:text-slate-400"
          />
          {query ? (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-1"
            >
              Clear
            </button>
          ) : (
            <kbd className="font-mono text-[10px] bg-white text-slate-500 px-1.5 py-0.5 rounded border border-slate-200">
              ESC
            </kbd>
          )}
        </div>

        {/* Quick Filter Tags */}
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border-b border-slate-100 text-[11px] font-title-md font-semibold overflow-x-auto text-slate-500">
          <span className="text-slate-400">Quick:</span>
          {['UPSC', 'SSC CGL', 'Banking PO', 'Mock Test', 'Mukherjee Nagar', 'Patna'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2 py-0.5 rounded bg-white border border-slate-200 hover:border-primary hover:text-primary transition-colors shrink-0"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.targetId)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 text-left transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 font-title-md group-hover:text-primary transition-colors">
                      {item.title}
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-bold font-title-md">
                    {item.badge}
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-slate-300 group-hover:text-primary transition-colors">
                    chevron_right
                  </span>
                </div>
              </button>
            ))
          ) : (
            <div className="py-8 text-center text-xs text-slate-400 space-y-1">
              <span className="material-symbols-outlined text-[28px] text-slate-300">search_off</span>
              <p>No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-[11px] text-slate-400">Try searching for &ldquo;SSC&rdquo;, &ldquo;UPSC&rdquo;, &ldquo;Mock&rdquo; or &ldquo;Center&rdquo;</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-title-md">
          <span>Click any item to jump directly to section</span>
          <span>ExamGuru Search Index</span>
        </div>
      </div>
    </div>
  );
}
