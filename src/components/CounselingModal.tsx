'use client';

import React, { useState } from 'react';

interface CounselingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultExam?: string;
}

export default function CounselingModal({ isOpen, onClose, defaultExam = 'SSC CGL' }: CounselingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [targetExam, setTargetExam] = useState(defaultExam);
  const [preferredCenter, setPreferredCenter] = useState('Mukherjee Nagar (Delhi)');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      // simulate auto close after reading confirmation
    }, 4000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-surface-white rounded-2xl border-2 border-border-strong shadow-2xl p-6 sm:p-8 space-y-5 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-canvas-slate hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {!submitted ? (
          <>
            <div className="space-y-1.5 pr-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-indigo-light text-primary text-xs font-bold font-title-md uppercase tracking-wider">
                <span className="material-symbols-outlined text-[14px]">support_agent</span>
                1-on-1 Academic Counseling
              </div>
              <h3 className="font-headline-sm text-2xl font-bold text-brand-indigo-deep">
                Book Free Expert Session
              </h3>
              <p className="text-xs text-text-muted">
                Speak directly with an ex-civil servant or senior subject mentor. Get your personalized syllabus roadmap and offline batch schedule.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-1 font-sans">
              <div>
                <label className="block text-xs font-bold text-text-primary mb-1.5 font-title-md">
                  Student Name *
                </label>
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border-strong bg-canvas-slate focus-within:border-primary focus-within:bg-white transition-all">
                  <span className="material-symbols-outlined text-text-muted text-[18px]">person</span>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none text-text-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-text-primary mb-1.5 font-title-md">
                  WhatsApp / Mobile Number *
                </label>
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border-strong bg-canvas-slate focus-within:border-primary focus-within:bg-white transition-all">
                  <span className="text-xs font-bold text-text-muted font-mono">+91</span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none text-text-primary font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-text-primary mb-1.5 font-title-md">
                    Target Examination
                  </label>
                  <select
                    value={targetExam}
                    onChange={(e) => setTargetExam(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-border-strong bg-canvas-slate text-xs font-medium text-text-primary focus:outline-none focus:border-primary"
                  >
                    <option value="UPSC Civil Services">UPSC Civil Services (IAS/IPS)</option>
                    <option value="SSC CGL & CHSL">SSC CGL & CHSL Tier 1+2</option>
                    <option value="Banking & Insurance">SBI / IBPS PO & Clerk</option>
                    <option value="Railways RRB">Railways RRB NTPC</option>
                    <option value="State PSC">State PSC (BPSC, UPPSC, MP)</option>
                    <option value="Defence Services">Defence (NDA / CDS / AFCAT)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-primary mb-1.5 font-title-md">
                    Preferred Center / Mode
                  </label>
                  <select
                    value={preferredCenter}
                    onChange={(e) => setPreferredCenter(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-border-strong bg-canvas-slate text-xs font-medium text-text-primary focus:outline-none focus:border-primary"
                  >
                    <option value="Mukherjee Nagar (Delhi)">Mukherjee Nagar (Delhi Center)</option>
                    <option value="Boring Road (Patna)">Boring Road (Patna Center)</option>
                    <option value="Online Virtual Meet">Online 1-on-1 Video Session</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-primary hover:bg-brand-indigo-hover text-white text-sm font-bold shadow-md shadow-indigo-200 transition-all flex items-center justify-center gap-2 font-title-md"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  Confirm Counseling Request
                </button>
              </div>

              <p className="text-[11px] text-center text-text-muted">
                🔒 Safe & Confidential. No spam. You will receive an immediate confirmation on WhatsApp.
              </p>
            </form>
          </>
        ) : (
          <div className="py-6 text-center space-y-4 font-sans animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-accent-emerald-subtle text-accent-emerald flex items-center justify-center mx-auto border-2 border-emerald-300">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <div className="space-y-1">
              <h4 className="font-headline-sm text-2xl font-bold text-brand-indigo-deep font-title-md">
                Counseling Slot Reserved!
              </h4>
              <p className="text-sm text-text-secondary max-w-sm mx-auto">
                Thank you <strong className="text-text-primary">{name || 'Aspirant'}</strong>! Our senior counselor for <strong className="text-primary">{targetExam}</strong> will connect with you at <strong className="font-mono text-text-primary">+91 {phone}</strong> within 15 minutes.
              </p>
            </div>
            <div className="p-3 bg-canvas-slate rounded-xl border border-border-subtle text-xs text-text-muted text-left space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-text-primary font-title-md">
                <span className="material-symbols-outlined text-[16px] text-accent-emerald">mark_chat_read</span>
                Instant WhatsApp Update Sent
              </div>
              <p>We have dispatched the latest 2026-27 syllabus capsule and cut-off sheet directly to your phone.</p>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-brand-indigo-deep text-white text-xs font-bold font-title-md hover:bg-slate-800 transition-colors"
            >
              Back to ExamGuru Platform
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
