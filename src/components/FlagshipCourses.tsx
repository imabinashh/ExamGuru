'use client';

import React from 'react';

interface FlagshipCoursesProps {
  onOpenCounseling: (courseName: string) => void;
}

export default function FlagshipCourses({ onOpenCounseling }: FlagshipCoursesProps) {
  const courses = [
    {
      id: 'ssc-cgl-100',
      title: 'SSC CGL Super-100 Intensive Batch 2026-27',
      tag1: 'Tier 1 + 2',
      tag2: 'Live + Recorded',
      rating: '4.9 (4,210)',
      schedule: 'Batch Starts: 15th March • 8:00 AM',
      instructorAvatar: 'RV',
      instructorName: 'Dr. R. K. Verma',
      instructorTitle: 'Ex-IRS • 14 Years Teaching',
      description:
        'Complete arithmetic shortcuts, grammar error detection rules, 45 full-length TCS mocks, and printed workbook delivered to your address.',
      originalPrice: '₹9,999',
      discountedPrice: '₹4,999',
      emi: 'No-Cost EMI: ₹1,666/mo',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYUL6fFKNwt8vlezhuC-1q1jL5_xOLDJfKIEwJxOi4A7xIEwtHmLLOVaDhGN_IYhYtYosn0pnx01tmjOMpVorZzxEF33P9EyGaXEdIAUh54hIrai6qeTJM3paCn7Tcw5yJKtjpL2IoTXYTi7hF2ndcrhEgzDPudD1DwvqUi7f1BkFRqMSPTVeEODW2cw8-thcZoEhjPzOEApILqmtl4Pf_Pnna7NMi_5YVK2OD-YX2EFLrLbXYZ0-8',
    },
    {
      id: 'upsc-foundation',
      title: 'UPSC Civil Services Foundation 2026-27',
      tag1: '12 Months',
      tag2: 'GS + CSAT',
      rating: '4.9 (5,840)',
      schedule: 'Daily 4 Hours • Live Interactive',
      instructorAvatar: 'BM',
      instructorName: 'Faculty Board of Mentors',
      instructorTitle: 'Guided by Retired IAS & IPS Officers',
      description:
        'Complete Prelims + Mains 4-Paper GS syllabus, weekly answer evaluation within 24 hours, and standard NCERT + standard book summaries.',
      originalPrice: '₹29,999',
      discountedPrice: '₹14,999',
      emi: 'Installment: ₹5,000 x 3 Months',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHruOnDyHEVjvixKgEOvu21MAeoh50tfP7iCEaNJbsURxvfUPp1PG7sjFz1gx3i5JW30sX-aDbxQv-KRkdY8fabHM3PLVigrkf-6eM6vL7ZXc6MXlWaI2o7WzK_shTmLXKQSFuQ8jCdbZEIxlT2j3Bxucj8PgGhy8axS4Kt15JDiyBoHXyc8VieaG8EMwVrfOWJHXiAKFZJl7VoTM8Db-0kJAD83qpkA08SLSmT18XqaH5X94YLNXo',
    },
    {
      id: 'sbi-po',
      title: 'SBI PO & Clerk Comprehensive Mastery',
      tag1: 'Fast-Track',
      tag2: 'SBI + IBPS',
      rating: '4.8 (3,120)',
      schedule: 'Daily 2 Hours • High Speed',
      instructorAvatar: 'NS',
      instructorName: 'Neha Saxena',
      instructorTitle: 'SBI PO Rank 4 (2019)',
      description:
        'Special focus on advanced 4-variable puzzles, caselet data interpretation, and descriptive letter/essay correction.',
      originalPrice: '₹7,999',
      discountedPrice: '₹3,999',
      emi: '3-Month Plan Available',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmR-0oyTJThB96kdKWA3BRtdn4k5vVMMe9xSJjiXjaQq5K9WehPwRrvqjzOJsHs4PS_cJztZuFom8U0OMfaFDC4o3FnZ7hcHry1f9VIaRDug74VZHFA0LUlEh_6U3xwjimYWnIRUz4f6ckTUpArOmE-b_juQPWxUripQ8VVg8yF6Uv9d9j2jUbpqqtfkBKlh4oz_7iz0PY1Qkljlo4TEXHcB49qlfVc-d2-Zp8M7zNadIfR_iQzBqW',
    },
    {
      id: 'rrb-ntpc',
      title: 'RRB NTPC & Group D Complete Target Batch',
      tag1: 'CEN 05/2025',
      tag2: 'Bilingual',
      rating: '4.7 (2,680)',
      schedule: 'Recorded + Live Doubt Hub',
      instructorAvatar: 'AM',
      instructorName: 'Er. Amit Mishra',
      instructorTitle: 'Science & GK Specialist',
      description:
        'Special capsule for NCERT General Science, speed arithmetic drills, and 30 bilingual CBT simulator tests.',
      originalPrice: '₹4,999',
      discountedPrice: '₹2,499',
      emi: 'Special Discount Active',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa6s-fjiUiexdMJ1rLgJ02i7XcdktTWjzG3IerxZY8A1hh6HB5EEd-9HASCSgkSM5tu3vGd2Ez2fAI75Lc0Q5NDGaMIA2GjjZAYYhiHl2v4C9lpPxVSmNGhe8XEiHVmRI2vJEGzvodeqhlt_EVPRcwK1Cg1JGrsNeZU3k9razEpIPgtH7lqjU14b7pgoaLZ6h0eDy1efD18hj4oJpHsjiHwWoOxylUDMsT6lgCGaPoFB2wYUCboj9_',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-white border-y border-border-subtle" id="courses-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary font-title-md">
              Curated Master Batches
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-brand-indigo-deep font-bold tracking-tight">
              Featured Flagship Programs
            </h2>
            <p className="text-sm sm:text-base text-text-muted">
              Structured year-long and fast-track cohorts led by former civil servants, rank holders, and seasoned subject deans.
            </p>
          </div>
          <button
            onClick={() => onOpenCounseling('All Batches Prospectus')}
            className="inline-flex items-center gap-1 text-primary text-sm font-bold hover:underline font-title-md"
          >
            <span>Explore All 38 Active Batches</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-canvas-slate rounded-xl border border-border-subtle overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all group"
            >
              <div>
                {/* Course Banner Card Header with Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay gradient for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-900/40"></div>

                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 font-title-md z-10">
                    <span className="px-2 py-0.5 rounded bg-brand-indigo-deep text-white text-[10px] font-bold shadow-xs">
                      {course.tag1}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-accent-emerald text-white text-[10px] font-bold shadow-xs">
                      {course.tag2}
                    </span>
                  </div>

                  <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-surface-white/95 font-bold text-xs text-text-primary flex items-center gap-1 shadow-sm font-title-md z-10">
                    <span className="material-symbols-outlined text-[14px] text-accent-amber" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    {course.rating}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1 text-[11px] text-text-muted font-medium">
                    <span className="material-symbols-outlined text-[14px] text-primary">schedule</span>
                    <span>{course.schedule}</span>
                  </div>

                  <h3 className="font-title-md text-base font-bold text-brand-indigo-deep group-hover:text-primary transition-colors leading-snug">
                    {course.title}
                  </h3>

                  {/* Instructor Credentials */}
                  <div className="p-2.5 rounded bg-surface-white border border-border-subtle flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-brand-indigo-light text-primary flex items-center justify-center font-bold text-xs font-title-md">
                      {course.instructorAvatar}
                    </div>
                    <div className="text-[11px] leading-tight">
                      <span className="font-bold text-text-primary block font-title-md">{course.instructorName}</span>
                      <span className="text-text-muted">{course.instructorTitle}</span>
                    </div>
                  </div>

                  <p className="text-xs text-text-muted line-clamp-2">
                    {course.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-border-subtle mt-2">
                <div className="flex items-center justify-between pt-3">
                  <div>
                    <span className="text-[11px] text-text-muted line-through font-title-md">{course.originalPrice}</span>
                    <div className="text-lg font-bold text-brand-indigo-deep font-metric-display">{course.discountedPrice}</div>
                    <span className="text-[10px] text-accent-emerald font-semibold font-title-md">{course.emi}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => onOpenCounseling(course.title)}
                      className="px-3 py-1.5 rounded bg-primary text-white text-xs font-bold text-center hover:bg-brand-indigo-hover transition-colors font-title-md shadow-xs"
                      type="button"
                    >
                      Enroll Now
                    </button>
                    <button
                      onClick={() => onOpenCounseling(`Demo Video for ${course.title}`)}
                      className="text-[10px] text-center text-primary font-semibold hover:underline font-title-md"
                      type="button"
                    >
                      Watch Free Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
