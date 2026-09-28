# Product Requirements Document (PRD)
**Project Name:** ExamGuru Platform
**Business Category:** EdTech / Local Exam Preparation Institute
**Primary Goal:** Drive online course subscriptions, capture localized counseling leads via WhatsApp, and promote hybrid (online/offline) mock test enrollments.
**Target Audience:** College students, fresh graduates, repeat aspirants, and working professionals preparing for Indian competitive exams.
**Design & UI Vibe:** Premium EdTech SaaS, clean typography, generous whitespace, strong blue/indigo primary color, subtle gradients, and data-driven dashboard UI.
**Tech Stack:** Next.js (React), Tailwind CSS, Node.js/Express, PostgreSQL, AWS.

---

## 1. Executive Summary
**Vision:** To build ExamGuru into India’s premier, all-in-one preparation ecosystem for competitive government examinations.
**The Problem:** Aspirants currently suffer from a fragmented preparation journey—using one platform for video classes, another for mock tests, and relying on local offline centers for counseling and state-specific guidance. This leads to untracked progress and wasted time.
**Business Value:** By unifying Learn, Practice, Test, Analyze, and Improve into a single platform, while retaining strong local trust signals (physical counseling centers, localized state-exam targeting), ExamGuru will maximize user retention, increase lifetime value (LTV), and establish deep trust within local aspirant communities.

---

## 2. Target Personas

### Persona 1: Aarav, The Focused Beginner
*   **Demographics:** 21 years old, final-year college student.
*   **Pain Points:** Overwhelmed by the vast syllabus of SSC CGL; doesn't know where to start; lacks a structured roadmap.
*   **Digital Behavior:** Mobile-first user; heavily relies on YouTube for tips; prefers structured, step-by-step guidance and immediate feedback via dashboards.

### Persona 2: Priya, The Working Aspirant
*   **Demographics:** 26 years old, IT professional, preparing for Banking (SBI PO).
*   **Pain Points:** Extremely time-poor; cannot attend daytime live classes; needs high-quality mock tests and weekend offline doubt-clearing sessions.
*   **Digital Behavior:** Desktop user during evenings; values high-performance web apps, dark mode, and quick WhatsApp communication for queries.

---

## 3. User Stories
*   **As a prospective student**, I want to tap a sticky "Book Free Counseling" CTA on my phone so that I can immediately connect with a local advisor via WhatsApp.
*   **As a beginner**, I want to browse dedicated exam category pages (e.g., UPSC, SSC, State Exams) so that I can find the exact syllabus, course offerings, and localized FAQs relevant to my region.
*   **As an enrolled user**, I want to access a personalized performance dashboard so that I can track my overall progress, accuracy, and subject-wise strengths/weaknesses.
*   **As a local aspirant**, I want to see the institute's exact physical location on an interactive map and view their operating hours so that I can visit the center for offline mock tests.
*   **As a student evaluating the platform**, I want to read verified Google Reviews and view detailed teacher biographies so that I can trust the quality of the education before purchasing a course.

---

## 4. Sitemap & Information Architecture

**Main Navigation (Header)**
*   **Exams** (Dropdown: UPSC, SSC, Banking, Railways, Defence, Teaching, State Exams)
*   **Courses** (Live + Recorded)
*   **Test Series** (Online & Local Offline Centers)
*   **Study Material** (Current Affairs, PYQs, PDFs)
*   **About Us** (Our Story, Staff Bios, Offline Centers)
*   **Utility:** `[ 🔍 Search ]` `[ Login ]` `[ Get Started ]`

**Primary Page Structure (Homepage)**
1.  **Hero Section:** Value prop, trust markers, dual CTA (Explore Courses / Take Free Mock).
2.  **Exam Categories Grid:** Visual cards routing to specific verticals.
3.  **The ExamGuru USP:** Visual timeline (Learn → Practice → Test → Analyze → Improve).
4.  **Popular Courses:** High-converting course cards with pricing and format.
5.  **Interactive Dashboard Preview:** Visual hook showing the analytics UI.
6.  **Trust & Local Section:** Google Reviews, localized counseling CTA.
7.  **Footer:** standard links + Local Business elements.

---

## 5. Functional Requirements

### Core Platform Features
*   **Authentication & Profiles:** JWT-based login (Phone/OTP and Email), user profile management.
*   **Course Delivery:** Video player integration (HLS streaming), module tracking, PDF viewer.
*   **Testing Engine:** Timed exams, sectional navigation, auto-grading, and detailed analytics generation.

### Local Business & Conversion Elements (CRITICAL)
*   **Local NAP Visibility:** Name, Address, and Phone number hardcoded into the global footer. Phone number present in the top utility bar.
*   **Embedded Interactive Google Map:** A dedicated "Visit Our Center" section on the homepage and Contact page featuring an embedded Google Map, physical address, and live operating hours.
*   **Sticky CTAs:** A mobile-only sticky bottom bar with "Call Today" (Click-to-Call protocol) and "WhatsApp Chat" buttons.
*   **Frictionless Lead Forms:** "Request a Callback" modal requiring only 3 fields (Name, Phone Number, Target Exam) routing directly to the sales team's CRM/WhatsApp.
*   **Trust Elements:** 
    *   Dynamic Google Reviews widget in the homepage body.
    *   "Meet the Faculty" section with staff bios and credentials.
    *   Trust badges (e.g., "10,000+ Selections", SSL secure checkout).
*   **Dedicated Service Pages & Localized FAQs:** Unique landing pages for State-level exams (e.g., Assam PSC, UPPSC) featuring localized SEO content and FAQs addressing state-specific syllabus queries and local center availability.

---

## 6. Non-Functional Requirements

### Performance Targets
*   **Load Time:** Initial First Contentful Paint (FCP) < 1.5s; fully interactive < 3s.
*   **Asset Optimization:** Next/Image for webP/AVIF image delivery; lazy-loading for video previews and below-the-fold components (like the Google Map).

### Technical SEO Constraints
*   **Schema Markup:** MUST implement `LocalBusiness` schema for the physical counseling/test centers and `Course` schema for all educational products.
*   **Semantic HTML:** Strict adherence to hierarchical heading structures (H1, H2, H3), `<nav>`, `<main>`, and `<article>` tags.
*   **Server-Side Rendering (SSR):** Next.js App Router utilization to ensure course pages and localized landing pages are fully indexed by search engines.

### Accessibility & Mobile-First
*   **Standards:** WCAG 2.1 AA compliance (contrast ratios, ARIA labels for custom dashboard components).
*   **Responsiveness:** Mobile-first CSS development. The dashboard UI must degrade gracefully into stacked cards on mobile devices.

---

## 7. Design & UI/UX Guidelines

*   **Color Palette:**
    *   Primary: Indigo (`#4F46E5`) for primary actions and brand identity.
    *   Secondary: Slate (`#0F172A`) for high-contrast text and dark-mode elements.
    *   Accents: Emerald (`#10B981`) for success states/progress bars; Amber (`#F59E0B`) for warnings/alerts.
*   **Typography:** 'Inter' for UI elements (dashboards, buttons) and 'Merriweather' or 'Roboto Serif' for long-form study material/blog reading.
*   **Layout Principles:** 
    *   Heavy use of CSS Grid for the dashboard and exam category cards.
    *   Bento-box style layout for the "Why ExamGuru?" features section.
    *   Soft drop shadows (`shadow-sm` to `shadow-md` in Tailwind) to elevate cards and create depth against a light gray (`#F8FAFC`) background.
*   **Breakpoints:** Standard Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px). Ensure the complex analytics dashboard switches from a sidebar layout on desktop to a bottom-sheet/hamburger navigation on mobile.

---

## 8. Future Scope (v2.0)
1.  **AI Doubt Resolution System:** Integration of an LLM-based chatbot that can analyze screenshots of mock test questions and provide step-by-step hints.
2.  **Franchise / Multi-Location Portal:** Expanding the local business footprint by adding a dynamic "Find a Center Near You" locator with geo-routing for multiple offline test centers.
3.  **Native Mobile Application:** Wrapping the core web application into a React Native build for iOS and Android to allow offline video downloads and push notification alerts for exam dates.