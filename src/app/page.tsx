'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ExamCadres from '@/components/ExamCadres';
import LearningPipeline from '@/components/LearningPipeline';
import FlagshipCourses from '@/components/FlagshipCourses';
import CbtSimulator from '@/components/CbtSimulator';
import CurrentAffairs from '@/components/CurrentAffairs';
import HybridCenters from '@/components/HybridCenters';
import Testimonials from '@/components/Testimonials';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';
import CounselingModal from '@/components/CounselingModal';
import SearchModal from '@/components/SearchModal';

export default function Home() {
  const [isCounselingOpen, setIsCounselingOpen] = useState(false);
  const [counselingExam, setCounselingExam] = useState('SSC CGL');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleOpenCounseling = (exam: string = 'SSC CGL') => {
    setCounselingExam(exam);
    setIsCounselingOpen(true);
  };

  const handleCloseCounseling = () => {
    setIsCounselingOpen(false);
  };

  const handleSelectSearchResult = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {/* Top Fixed Navigation */}
      <Navbar 
        onOpenCounseling={handleOpenCounseling} 
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Areas */}
      <main className="w-full pt-28 pb-8 bg-canvas-slate min-h-screen flex-1">
        {/* Section 1: Hero & Dashboard Preview */}
        <Hero onOpenCounseling={handleOpenCounseling} />

        {/* Section 2: Exam Cadres Grid & Filter */}
        <ExamCadres onOpenCounseling={handleOpenCounseling} />

        {/* Section 3: 4-Stage Authority Learning Pipeline */}
        <LearningPipeline />

        {/* Section 4: Flagship Curated Cohorts */}
        <FlagshipCourses onOpenCounseling={handleOpenCounseling} />

        {/* Section 5 & 6: Interactive TCS iON CBT Exam Console Simulation */}
        <CbtSimulator onOpenCounseling={handleOpenCounseling} />

        {/* Section 7: Daily Editorial Dossier & PIB Briefs */}
        <CurrentAffairs onOpenCounseling={handleOpenCounseling} />

        {/* Section 8: Offline Hybrid Learning Centers (Delhi & Patna) */}
        <HybridCenters onOpenCounseling={handleOpenCounseling} />

        {/* Section 9: Verified Aspirants & Rank Holders */}
        <Testimonials />

        {/* Section 10: High-Converting Closing CTA */}
        <CtaBanner onOpenCounseling={handleOpenCounseling} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Sticky Bar for quick Call, WhatsApp, CBT */}
      <StickyMobileBar onOpenCounseling={handleOpenCounseling} />

      {/* Interactive 1-on-1 Academic Counseling Modal */}
      <CounselingModal
        isOpen={isCounselingOpen}
        onClose={handleCloseCounseling}
        defaultExam={counselingExam}
      />

      {/* Interactive Search Modal / Command Palette */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectAction={handleSelectSearchResult}
      />
    </div>
  );
}
