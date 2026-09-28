'use client';

import React, { useState, useEffect } from 'react';

interface CbtSimulatorProps {
  onOpenCounseling: (exam?: string) => void;
}

export default function CbtSimulator({ onOpenCounseling }: CbtSimulatorProps) {
  // Timer state (seconds remaining, starts at 34 mins 18 secs = 2058s)
  const [secondsRemaining, setSecondsRemaining] = useState(2058);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Active section
  const [activeSection, setActiveSection] = useState<'reasoning' | 'ga' | 'quant' | 'english'>('quant');

  // Active question number (default 42)
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(42);

  // User responses map { [questionNumber]: selectedOption }
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qNum: number]: string }>({
    42: 'B',
  });

  // Question statuses { [qNum]: 'answered' | 'not_answered' | 'review' | 'not_visited' }
  const [questionStatuses, setQuestionStatuses] = useState<{ [qNum: number]: string }>({
    31: 'answered',
    32: 'answered',
    33: 'answered',
    34: 'not_answered',
    35: 'review',
    36: 'answered',
    37: 'answered',
    38: 'answered',
    39: 'not_answered',
    40: 'answered',
    41: 'review',
    42: 'answered',
    43: 'not_visited',
    44: 'not_visited',
    45: 'not_visited',
    46: 'not_visited',
    47: 'not_visited',
    48: 'not_visited',
    49: 'not_visited',
    50: 'not_visited',
  });

  // Test submission dialog
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);

  // Countdown timer effect
  useEffect(() => {
    if (!isTimerRunning || secondsRemaining <= 0) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, secondsRemaining]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleSelectOption = (optionKey: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionNumber]: optionKey,
    }));
  };

  const handleSaveAndNext = () => {
    const currentAnswer = selectedAnswers[currentQuestionNumber];
    setQuestionStatuses((prev) => ({
      ...prev,
      [currentQuestionNumber]: currentAnswer ? 'answered' : 'not_answered',
    }));
    if (currentQuestionNumber < 50) {
      setCurrentQuestionNumber(currentQuestionNumber + 1);
    }
  };

  const handleMarkForReview = () => {
    setQuestionStatuses((prev) => ({
      ...prev,
      [currentQuestionNumber]: 'review',
    }));
    if (currentQuestionNumber < 50) {
      setCurrentQuestionNumber(currentQuestionNumber + 1);
    }
  };

  const handleClearResponse = () => {
    setSelectedAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestionNumber];
      return copy;
    });
    setQuestionStatuses((prev) => ({
      ...prev,
      [currentQuestionNumber]: 'not_answered',
    }));
  };

  // Count metrics for palette
  const answeredCount = Object.values(questionStatuses).filter((s) => s === 'answered').length;
  const notAnsweredCount = Object.values(questionStatuses).filter((s) => s === 'not_answered').length;
  const reviewCount = Object.values(questionStatuses).filter((s) => s === 'review').length;
  const notVisitedCount = Object.values(questionStatuses).filter((s) => s === 'not_visited').length;

  return (
    <section className="w-full py-16 lg:py-24 bg-canvas-slate" id="cbt-simulator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary font-title-md">
            Zero Exam Day Surprise
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-brand-indigo-deep font-bold tracking-tight">
            The Exact TCS iON Exam Console Simulation
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Do not lose 10 to 15 marks to clumsy navigation on exam day. Train your reflexes inside our pixel-accurate NTA/TCS testing console with authentic negative marking dynamics.
          </p>
        </div>

        {/* CBT Simulator Mockup Window */}
        <div className="rounded-2xl border-2 border-border-strong shadow-2xl bg-surface-white overflow-hidden relative">
          {/* Header Bar */}
          <div className="bg-brand-indigo-deep text-on-primary px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
                CBT
              </div>
              <div>
                <h4 className="font-title-md text-sm sm:text-base font-bold text-white">
                  SSC CGL Tier-1 Official Pattern Mock #14 (All India Live)
                </h4>
                <p className="text-xs text-slate-300 font-sans">
                  Marking Scheme: Correct +2.00 • Negative -0.50 Penalty • Language: English
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Live Ticking Timer */}
              <div className="px-3.5 py-1.5 rounded-lg bg-surface-white/10 border border-surface-white/20 flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-amber text-[18px] animate-pulse">timer</span>
                <span className="font-mono text-sm sm:text-base font-bold text-white tracking-wider">
                  Remaining: {formatTimer(secondsRemaining)}
                </span>
              </div>

              <button
                onClick={() => setIsTestSubmitted(true)}
                className="px-4 py-2 rounded bg-error text-white text-xs font-bold hover:bg-error/90 transition-colors shadow-xs font-title-md"
                type="button"
              >
                Submit Test Paper
              </button>
            </div>
          </div>

          {/* Section Navigation Strip */}
          <div className="bg-canvas-slate border-b border-border-subtle px-6 py-2 flex flex-wrap items-center gap-2 text-xs font-semibold font-title-md">
            <button
              onClick={() => setActiveSection('reasoning')}
              className={`px-3.5 py-1.5 rounded transition-all ${
                activeSection === 'reasoning'
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-surface-white border border-border-subtle text-text-secondary hover:text-primary'
              }`}
              type="button"
            >
              Section 1: General Intelligence &amp; Reasoning (25)
            </button>
            <button
              onClick={() => setActiveSection('ga')}
              className={`px-3.5 py-1.5 rounded transition-all ${
                activeSection === 'ga'
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-surface-white border border-border-subtle text-text-secondary hover:text-primary'
              }`}
              type="button"
            >
              Section 2: General Awareness (25)
            </button>
            <button
              onClick={() => setActiveSection('quant')}
              className={`px-3.5 py-1.5 rounded transition-all ${
                activeSection === 'quant'
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-surface-white border border-border-subtle text-text-secondary hover:text-primary'
              }`}
              type="button"
            >
              Section 3: Quantitative Aptitude (25)
            </button>
            <button
              onClick={() => setActiveSection('english')}
              className={`px-3.5 py-1.5 rounded transition-all ${
                activeSection === 'english'
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-surface-white border border-border-subtle text-text-secondary hover:text-primary'
              }`}
              type="button"
            >
              Section 4: English Comprehension (25)
            </button>
          </div>

          {/* Main Split Console Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
            {/* Left 8 Cols: Question Display */}
            <div className="lg:col-span-8 p-6 lg:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border-subtle bg-surface-white space-y-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base text-brand-indigo-deep font-title-md">
                      Question {currentQuestionNumber}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-brand-indigo-light text-primary text-[11px] font-bold font-title-md">
                      Single Choice MCQ
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-title-md">
                    <span className="text-accent-emerald font-bold">+2.00</span>
                    <span className="text-text-muted">•</span>
                    <span className="text-accent-rose font-bold">-0.50 Mark</span>
                  </div>
                </div>

                <p className="font-body-md text-base text-text-primary font-medium leading-relaxed">
                  A shopkeeper marks an article 35% above the cost price and allows a discount of 20% on the marked price. If he also offers an additional promotional rebate of ₹48 on cash payment and still registers a net gain of 5%, what is the original cost price (CP) of the article?
                </p>

                {/* Options Grid */}
                <div className="space-y-3 pt-2">
                  {[
                    { key: 'A', text: '₹1,400' },
                    { key: 'B', text: '₹1,600 (Selected Response)' },
                    { key: 'C', text: '₹1,750' },
                    { key: 'D', text: '₹1,800' },
                  ].map((option) => {
                    const isSelected = selectedAnswers[currentQuestionNumber] === option.key;
                    return (
                      <label
                        key={option.key}
                        onClick={() => handleSelectOption(option.key)}
                        className={`flex items-center gap-3 p-3.5 rounded-lg border cursor-pointer transition-all text-sm ${
                          isSelected
                            ? 'border-2 border-primary bg-brand-indigo-light/50 font-bold text-primary font-title-md shadow-xs'
                            : 'border-border-subtle hover:bg-canvas-slate text-text-primary'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`cbt_q_${currentQuestionNumber}`}
                          checked={isSelected}
                          onChange={() => handleSelectOption(option.key)}
                          className="text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                        />
                        <span>
                          {option.key}) {option.text}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Question Controls */}
              <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 text-xs font-semibold font-title-md">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleMarkForReview}
                    className="px-4 py-2 rounded bg-canvas-slate border border-border-strong text-text-secondary hover:bg-border-subtle transition-colors"
                    type="button"
                  >
                    Mark for Review &amp; Next
                  </button>
                  <button
                    onClick={handleClearResponse}
                    className="px-4 py-2 rounded bg-canvas-slate border border-border-strong text-text-secondary hover:bg-border-subtle transition-colors"
                    type="button"
                  >
                    Clear Response
                  </button>
                </div>
                <button
                  onClick={handleSaveAndNext}
                  className="px-6 py-2.5 rounded bg-primary text-white font-bold hover:bg-brand-indigo-hover shadow-sm font-title-md transition-all flex items-center gap-1"
                  type="button"
                >
                  <span>Save &amp; Next</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Right 4 Cols: Question Palette Matrix */}
            <div className="lg:col-span-4 p-6 bg-canvas-slate flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h5 className="text-xs font-bold text-text-muted uppercase tracking-wider font-title-md">
                  Question Status Palette
                </h5>

                {/* Status Legend */}
                <div className="grid grid-cols-2 gap-2 text-xs font-title-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-accent-emerald text-white text-[9px] flex items-center justify-center font-bold">
                      {answeredCount}
                    </span>
                    <span className="text-text-secondary">Answered</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-accent-rose text-white text-[9px] flex items-center justify-center font-bold">
                      {notAnsweredCount}
                    </span>
                    <span className="text-text-secondary">Not Answered</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-accent-amber text-white text-[9px] flex items-center justify-center font-bold">
                      {reviewCount}
                    </span>
                    <span className="text-text-secondary">Marked Review</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded bg-surface-white border border-border-strong text-text-secondary text-[9px] flex items-center justify-center font-bold">
                      {notVisitedCount}
                    </span>
                    <span className="text-text-secondary">Not Visited</span>
                  </div>
                </div>

                {/* Number Grid for Section 3 (Questions 31 to 50) */}
                <div className="pt-2">
                  <div className="text-[11px] font-semibold text-text-muted mb-2 font-title-md">
                    Quant Section Matrix (Click to Jump):
                  </div>
                  <div className="grid grid-cols-5 gap-2 font-mono text-xs">
                    {Array.from({ length: 20 }, (_, i) => 31 + i).map((num) => {
                      const status = questionStatuses[num] || 'not_visited';
                      const isCurrent = currentQuestionNumber === num;

                      let cellBg = 'bg-surface-white border border-border-strong text-text-secondary';
                      if (status === 'answered') cellBg = 'bg-accent-emerald text-white font-bold shadow-xs';
                      else if (status === 'not_answered') cellBg = 'bg-accent-rose text-white font-bold shadow-xs';
                      else if (status === 'review') cellBg = 'bg-accent-amber text-white font-bold shadow-xs';

                      return (
                        <button
                          key={num}
                          onClick={() => setCurrentQuestionNumber(num)}
                          className={`h-8 rounded flex items-center justify-center transition-all cursor-pointer font-bold ${cellBg} ${
                            isCurrent ? 'ring-2 ring-primary ring-offset-2 scale-105' : 'hover:opacity-90'
                          }`}
                        >
                          {num}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* CBT Diagnostic Action CTA */}
              <div className="pt-4 border-t border-border-subtle space-y-2 font-title-md">
                <button
                  onClick={() => onOpenCounseling('Full 100-Question Free Diagnostic Mock')}
                  className="w-full py-2.5 px-4 rounded bg-primary text-white text-xs font-bold text-center block hover:bg-brand-indigo-hover transition-colors shadow-xs"
                >
                  Take Full Free 100-Question Mock
                </button>
                <a
                  className="w-full py-2 px-4 rounded bg-surface-white border border-border-strong text-text-secondary text-xs font-semibold text-center block hover:bg-canvas-slate transition-colors"
                  href="#learning-system"
                >
                  View Syllabus Checklist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Diagnostic Modal */}
      {isTestSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-surface-white rounded-2xl border-2 border-border-strong shadow-2xl p-6 sm:p-8 max-w-lg w-full space-y-6">
            <div className="flex items-center justify-between border-b border-border-subtle pb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-emerald text-[24px]">verified</span>
                <h4 className="font-headline-sm text-lg font-bold text-brand-indigo-deep">
                  Mock Exam Submitted!
                </h4>
              </div>
              <button
                onClick={() => setIsTestSubmitted(false)}
                className="w-8 h-8 rounded-full bg-canvas-slate text-text-muted hover:text-text-primary flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-brand-indigo-light rounded-xl">
                <span className="text-[11px] text-text-muted block font-semibold">Your Score</span>
                <span className="text-xl font-extrabold text-primary font-metric-display">168 / 200</span>
              </div>
              <div className="p-3 bg-accent-emerald-subtle rounded-xl">
                <span className="text-[11px] text-emerald-800 block font-semibold">Accuracy</span>
                <span className="text-xl font-extrabold text-accent-emerald font-metric-display">94.2%</span>
              </div>
              <div className="p-3 bg-accent-amber-subtle rounded-xl">
                <span className="text-[11px] text-amber-900 block font-semibold">AIR Percentile</span>
                <span className="text-xl font-extrabold text-accent-amber font-metric-display">99.1%</span>
              </div>
            </div>

            <div className="p-4 bg-canvas-slate rounded-xl border border-border-subtle text-xs text-text-secondary space-y-2">
              <p className="font-bold text-brand-indigo-deep">
                🎯 ExamGuru Normalized Cutoff Clearance: <span className="text-accent-emerald font-extrabold">QUALIFIED (Tier 1 Cleared)</span>
              </p>
              <p className="text-text-muted leading-relaxed">
                You gained +12 marks by skipping 3 negative trap questions in General Intelligence. A detailed section-wise PDF diagnostic with question-level video explanations is ready.
              </p>
            </div>

            <div className="space-y-2 font-title-md">
              <button
                onClick={() => {
                  setIsTestSubmitted(false);
                  onOpenCounseling('Full Diagnostic Result Audit');
                }}
                className="w-full py-3 rounded-xl bg-primary text-white font-bold text-xs hover:bg-brand-indigo-hover transition-colors shadow-sm"
              >
                Review Detailed Solutions &amp; Faculty Analysis
              </button>
              <button
                onClick={() => setIsTestSubmitted(false)}
                className="w-full py-2 rounded-lg bg-surface-white border border-border-strong text-text-secondary font-semibold text-xs hover:bg-canvas-slate"
              >
                Resume Simulation Console
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
