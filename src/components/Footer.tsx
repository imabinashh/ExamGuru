'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b1329] text-slate-200 border-t border-slate-800 pt-16 pb-24 lg:pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand & Locations */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-9 px-3 rounded-lg bg-primary text-white flex items-center gap-1.5 shadow-sm font-title-md font-extrabold text-lg tracking-tight">
                <span className="material-symbols-outlined text-[20px] text-emerald-400">school</span>
                <span>Exam<span className="text-emerald-300">Guru</span></span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              ExamGuru is India’s premier authority-first learning ecosystem for UPSC, SSC, Banking, and State civil service aspirants. Built on verified question patterns, TCS iON simulation, and 1-on-1 faculty counseling.
            </p>
            <div className="space-y-1.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-indigo-400 mt-0.5">location_on</span>
                <span>24/8 Mukherjee Nagar, Commercial Complex, Delhi 110009</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-indigo-400">call</span>
                <span>National Academic Helpline: 1800-890-3456</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-whatsapp-green">chat</span>
                <span>WhatsApp Counseling: +91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Col 2: Exams */}
          <div className="space-y-3">
            <h4 className="font-title-md text-sm font-bold text-white">Cadres &amp; Exams</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a className="hover:text-indigo-400 transition-colors" href="#exam-selector">UPSC Civil Services (CSE)</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#exam-selector">SSC CGL Tier 1 &amp; Tier 2</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#exam-selector">SBI PO &amp; Clerk 2026</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#exam-selector">IBPS Specialist Officers</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#exam-selector">Railways RRB NTPC</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#exam-selector">State PSC (UP, Bihar, MP)</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#exam-selector">Defence (NDA &amp; CDS)</a></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="space-y-3">
            <h4 className="font-title-md text-sm font-bold text-white">Free Resources</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a className="hover:text-indigo-400 transition-colors" href="#current-affairs">Daily PIB &amp; Hindu Briefs</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#cbt-simulator">Free TCS Pattern Mocks</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#learning-system">15-Year Solved PYQs</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#courses-grid">Formula &amp; Shortcut Cheatsheets</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#current-affairs">State GK Monthly Capsules</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#cbt-simulator">Cut-off Margin Predictor</a></li>
            </ul>
          </div>

          {/* Col 4: Corporate */}
          <div className="space-y-3">
            <h4 className="font-title-md text-sm font-bold text-white">Academy</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a className="hover:text-indigo-400 transition-colors" href="#offline-centers">Mukherjee Nagar Center</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#offline-centers">Patna Reading Rooms</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#courses-grid">Faculty &amp; Ex-Civil Servants</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#results">Verified Results 2024-25</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#offline-centers">Career Opportunities</a></li>
              <li><a className="hover:text-indigo-400 transition-colors" href="#offline-centers">Institutional Partnerships</a></li>
            </ul>
          </div>

          {/* Col 5: Accreditations */}
          <div className="space-y-3">
            <h4 className="font-title-md text-sm font-bold text-white">Trust &amp; Standards</h4>
            <div className="space-y-2 pt-1 font-title-md">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px] text-emerald-400">verified</span>
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 text-amber-400 border border-amber-500/30 text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px] text-amber-400">star</span>
                <span>Google 4.9/5 (18,200+ Reviews)</span>
              </div>
              <div className="text-[11px] text-slate-400 pt-1 font-sans">
                Encrypted 256-Bit SSL • TCS Pattern Engine Validated
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 ExamGuru Technologies Pvt. Ltd. All rights reserved. Crafted for Indian Aspirants.
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a className="hover:text-white hover:underline transition-colors" href="#">Privacy Policy</a>
            <span>•</span>
            <a className="hover:text-white hover:underline transition-colors" href="#">Terms of Enrollment</a>
            <span>•</span>
            <a className="hover:text-white hover:underline transition-colors" href="#">Student Grievance Cell</a>
            <span>•</span>
            <a className="hover:text-white hover:underline transition-colors" href="#">Refund Policy</a>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-6 pt-4 border-t border-slate-800/60 text-center text-xs font-title-md text-slate-400 tracking-wide">
          Design With <span className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors">Abinash</span>
        </div>
      </div>
    </footer>
  );
}
