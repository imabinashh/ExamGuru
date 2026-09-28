# 🎓 ExamGuru — Government Exam Preparation Platform

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> **"Master the Pattern. Clear the Cutoff. Secure Your Rank."**  
> An authority-first, modern EdTech SaaS landing page and interactive exam preparation ecosystem tailored for Indian competitive examinations (UPSC, SSC CGL, Banking, Railways, State PSCs, and Defence).

---

## 📌 Project Overview

ExamGuru solves the fragmented preparation journey faced by millions of Indian aspirants by unifying structured syllabus learning, 15,000+ TCS-pattern mock tests, granular analytics, and local hybrid counseling centers (Delhi & Patna) into a single, high-conversion web platform.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**, this project features interactive micro-applications directly within the landing page to demonstrate product value before sign-up.

---

## ✨ Key Features & Interactive Demos

### 🖥️ Authentic TCS iON CBT Exam Console Simulation
* **Live Countdown Timer:** Real-time ticking exam clock (formatted `MM:SS`).
* **Interactive Question Controls:** Clickable MCQ options (A, B, C, D) with active response indicators.
* **Palette Matrix (Q1–Q20/50):** Dynamic status indicators for *Answered (Green)*, *Marked for Review (Amber)*, *Not Answered (Rose)*, and *Not Visited*.
* **Exam Action Handlers:** Fully functional *Save & Next*, *Mark for Review & Next*, and *Clear Response* buttons.
* **Instant Evaluation Modal:** Calculates simulated score (+2.00 / -0.50 penalty), accuracy percentage, All India Percentile (AIR), and diagnostic feedback.

### 🔍 Interactive Command Palette Search (`⌘K` / `Ctrl+K`)
* Global search dialog accessible from the navbar search bar or keyboard shortcut.
* Real-time query filtering across exams, courses, mock test simulators, and offline centers.
* One-click smooth scrolling to any target section on the page.

### 🎯 Exam Cadre Specialization Engine
* Interactive category tabs: **All Cadres**, **UPSC & State PSC**, **SSC & Railways**, **Banking & RBI**, and **Defence**.
* Deep metric cards displaying expected vacancies, previous year cutoffs, negative penalties, and batch formats.
* Instant feedback toast when triggering *"Download Syllabus PDF"*.

### 📚 Featured Flagship Programs
* Curated cohort cards featuring authentic study desk and exam prep photography.
* Transparent pricing models with strikethrough original fees and monthly EMI options.
* Faculty credentials (Ex-IRS officers, SBI PO rankers, and subject deans).

### 📰 Current Affairs — Daily Revision
* Curated morning editorial dossiers filtering 200+ news articles into 3 exam-critical analyses with direct PYQ tagging (GS-3, Banking, Defence).
* Actionable monthly PDF download trigger with visual toast feedback.

### 🏢 Hybrid Learning Centers (Local Trust Architecture)
* Dedicated physical center cards for **Mukherjee Nagar (Delhi)** and **Boring Road (Patna)**.
* Key facilities highlighted: 120-seat CBT computer labs, 24/7 silent reading desks, and faculty chambers.
* Direct Click-to-Call protocol and *"Book In-Person Counseling"* workflows.

### 💬 Frictionless 1-on-1 Counseling Modal
* Streamlined 3-field modal (*Student Name*, *10-Digit Mobile*, *Target Exam*, *Preferred Center*).
* Instant simulated WhatsApp confirmation state with academic advisor routing.

### 📱 Mobile-First Conversion Architecture
* Sticky bottom bar for mobile screens featuring instant **Call Dean**, **WhatsApp Chat**, and **Free CBT** shortcuts.
* Responsive drawer menu with integrated mobile search and section navigation.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict mode) |
| **Styling** | [Tailwind CSS v3.4](https://tailwindcss.com/) (Custom EdTech color palette tokens) |
| **Typography** | `Plus Jakarta Sans` (Headlines) & `Inter` (UI / Body) via Google Fonts |
| **Iconography** | Google Material Symbols Outlined & Lucide Icons |
| **SEO & Schema** | OpenGraph metadata + JSON-LD `EducationalOrganization` structured data |

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18.17+ or v20+) and **npm** installed on your system.

```bash
node -v
npm -v
```

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/examguru.git
cd examguru
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open your browser and navigate to **[http://localhost:3000](http://localhost:3000)**.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```text
ExamGuru/
├── public/                     # Static assets & public images
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind directives & base typography
│   │   ├── layout.tsx          # Root layout, Google Fonts, JSON-LD Schema
│   │   └── page.tsx            # Main landing page assembling all components
│   └── components/
│       ├── Navbar.tsx          # Fixed header, exams dropdown, search trigger
│       ├── Hero.tsx            # Value prop, lead input & dashboard preview
│       ├── ExamCadres.tsx      # Category filtering & syllabus downloads
│       ├── LearningPipeline.tsx# 4-stage pedagogy stepper timeline
│       ├── FlagshipCourses.tsx # Curated cohorts with photography & pricing
│       ├── CbtSimulator.tsx    # Interactive TCS iON exam simulation console
│       ├── CurrentAffairs.tsx  # Daily PIB & Hindu editorial dossier
│       ├── HybridCenters.tsx   # Delhi & Patna offline center showcase
│       ├── Testimonials.tsx    # Verified rank holders & reviews
│       ├── CtaBanner.tsx       # Closing high-conversion pass banner
│       ├── SearchModal.tsx     # Command palette (⌘K) quick navigation
│       ├── CounselingModal.tsx # 3-field callback form & WhatsApp toast
│       ├── StickyMobileBar.tsx # Mobile bottom bar (Call / WhatsApp / CBT)
│       └── Footer.tsx          # Full NAP, certifications & legal links
├── package.json
├── tailwind.config.js          # Custom theme tokens & font families
├── postcss.config.js
├── tsconfig.json
└── README.md
```

---

## 🔮 Future Roadmap (v2.0)

1. **AI Doubt Resolution System:** LLM-powered screenshot analysis for instant, step-by-step mock test hints using the Gemini API.
2. **Multi-Location Franchise Portal:** Interactive *"Find a Center Near You"* locator with live seat availability and geo-routing.
3. **Full LMS & Test Engine:** Backend integration with PostgreSQL, Prisma ORM, and Redis for authenticated user profiles and timed test grading.
4. **React Native Mobile App:** Cross-platform mobile build for offline video downloads and exam notification alerts.

---

## 👨‍💻 Author & Attribution

**Designed with ❤️ by Abinash**  
Crafted with passion for Indian government exam aspirants.
