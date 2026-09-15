# 🤝 Contributing to Experio Verse

Thank you for your interest in contributing to **Experio Verse**! We are building a premier B2B corporate employee experience platform designed to help organizations craft engaging workplace cultures, wellness programs, celebrations, and offsite retreats.

This document serves as the **comprehensive guide** for developers, designers, and contributors. It details our complete repository structure, explains every single file and directory in depth, outlines our architectural patterns, and provides step-by-step instructions for contributing code, components, and documentation.

---

## 📑 Table of Contents

1. [🌟 Project Overview & Architecture](#-project-overview--architecture)
2. [🌳 Complete Directory & File Structure](#-complete-directory--file-structure)
3. [📁 Detailed File & Folder Breakdown](#-detailed-file--folder-breakdown)
   - [Root Configuration & Documentation](#1-root-configuration--documentation-files)
   - [Public Assets (`public/`)](#2-public-assets-public)
   - [Application Core (`src/app/`)](#3-application-core-srcapp)
   - [Page Routes (`src/app/*/`)](#4-page-routes)
   - [Reusable UI Components (`src/app/components/`)](#5-reusable-ui-components-srcappcomponents)
4. [🎨 Design System & Styling Guidelines](#-design-system--styling-guidelines)
5. [🚀 Getting Started & Local Development](#-getting-started--local-development)
6. [💻 Coding Standards & Conventions](#-coding-standards--conventions)
7. [🧩 How-To Contribution Guides](#-how-to-contribution-guides)
   - [Adding a New Component](#how-to-create-a-new-ui-component)
   - [Adding or Modifying a Page Route](#how-to-add-a-new-page-route)
   - [Updating the 12-Month Calendar](#how-to-update-the-annual-experience-calendar)
   - [Adding a New Experience Category](#how-to-add-a-new-serviceexperience-category)
8. [🌿 Git Workflow & Commit Guidelines](#-git-workflow--commit-guidelines)
9. [🚢 Deployment & Verification](#-deployment--verification)
10. [📞 Community & Support](#-community--support)

---

## 🌟 Project Overview & Architecture

Experio Verse is built as a high-performance, modern B2B corporate platform utilizing:

- **Next.js 16 (App Router)**: Utilizing React Server Components (RSC) by default for lightning-fast loads, streaming SSR, and optimal SEO indexing.
- **React 19**: Modern concurrent React architecture and hooks.
- **Tailwind CSS v4 & Vanilla CSS Variables**: Pure CSS custom property design system combined with Tailwind v4 `@theme inline` extensions.
- **Google Fonts (`@next/font`)**: `Outfit` for modern geometric headings and `Inter` for clean, accessible body typography.
- **Vercel Hosting**: Continuous deployment, Edge network distribution, and serverless optimization.

---

## 🌳 Complete Directory & File Structure

Below is the complete, exhaustive tree of the entire project repository:

```text
Experioverse/
│
├── .git/                                # Git version control metadata
├── .gitignore                           # Git ignore rules for node_modules, build artifacts, etc.
├── .next/                               # Next.js build cache and compiled server/client bundles (generated)
│
├── REQUIREMENTS.md                      # Complete product requirements specification & blueprint
├── README.md                            # High-level project summary and quickstart guide
├── CONTRIBUTION.md                      # Detailed contribution guidelines & file structure reference (this file)
├── AGENTS.md                            # AI Agent rules & framework directives
├── CLAUDE.md                            # Claude code guidelines
├── Final Logo.png                       # High-resolution brand logo asset
├── image.png                            # Reference imagery & mockup asset
│
├── package.json                         # Project dependencies, scripts, and package metadata
├── package-lock.json                    # Exact dependency lockfile for npm
├── next.config.mjs                      # Next.js compiler and runtime configuration
├── postcss.config.mjs                   # PostCSS plugins configuration (@tailwindcss/postcss)
├── eslint.config.mjs                    # ESLint flat configuration for Next.js and React
├── jsconfig.json                        # JavaScript language service & path alias configuration (@/*)
├── vercel.json                          # Vercel deployment and routing settings
│
├── node_modules/                        # Installed npm dependencies (generated)
│
├── public/                              # Static public assets served from root URL (/)
│   ├── file.svg                         # Next.js template icon
│   ├── globe.svg                        # Next.js template icon
│   ├── logo.png                         # Experio Verse standard logo
│   ├── logo-icon.png                    # Experio Verse square icon badge
│   ├── logo-icon-transparent.png        # Experio Verse transparent navbar logo badge (legacy blue)
│   ├── new-logo-transparent.png         # ✅ ACTIVE — New purple brand logo icon, white-bg removed (used in Header & Footer)
│   ├── experioverse-transparent.png     # ✅ ACTIVE — Wordmark: "ExperioVerse / WHERE PEOPLE CONNECT", transparent (Header & Footer)
│   ├── next.svg                         # Next.js framework brand icon
│   ├── vercel.svg                       # Vercel hosting brand icon
│   └── window.svg                       # Next.js template icon
│
└── src/                                 # Source code root
    └── app/                             # Next.js App Router root directory
        ├── favicon.ico                  # Browser tab favicon
        ├── globals.css                  # Global CSS variables, design tokens, utility classes & animations
        ├── layout.js                    # Root Layout: fonts, global HTML shell, Header & Footer injection
        ├── page.js                      # Home Page (redesigned Sep 2026): Hero → Brands → Solutions → Why EV → How We Work → Gallery → Testimonials → CTA
        │
        ├── contact/                     # ✅ ACTIVE — Contact & lead capture route (/contact)
        │   └── page.js                  # Contact Page: Request a Call lead form, enquiry channels, contact info
        │
        │   # ─── DELETED (2026-09-10) ───────────────────────────────────────────────────
        │   # about/            → REMOVED. Content may be added back to the homepage later.
        │   # services/         → REMOVED. Solutions link to /contact for now.
        │   # how-we-work/      → REMOVED. Content lives as a section in homepage (HowWeWork.js).
        │   # why-experio-verse/ → REMOVED. Content lives as a section in homepage (WhyExperioverse.js).
        │
        └── components/                  # Shared, reusable UI component library
            ├── index.js                 # Central barrel export file for all components
            ├── Header.js                # REBUILT (Sep 2026) — Dark translucent sticky nav, pink gradient CTA
            ├── Footer.js                # REBUILT (Sep 2026) — 5-column dark footer (Brand, Quick Links, Solutions, About, Contact)
            ├── HeroSection.js           # REBUILT (Sep 2026) — Split-screen dark purple hero with animated headline & stats
            ├── TrustedBrands.js         # NEW (Sep 2026) — White brand logo strip
            ├── SolutionsGrid.js         # NEW (Sep 2026) — 6-card static grid replacing old carousel on homepage
            ├── WhyExperioverse.js       # NEW (Sep 2026) — Dark section: heading + 5 differentiator cards
            ├── HowWeWork.js             # NEW (Sep 2026) — White section: 5-step process
            ├── ExperiencesGallery.js    # NEW (Sep 2026) — Dark section: text left + 2x3 photo grid
            ├── Testimonials.js          # NEW (Sep 2026) — Dark section: 3-card testimonials + dot nav
            ├── Button.js                # Polymorphic button/link component with multiple variants & icons
            ├── Section.js               # Standardized section wrapper & SectionHeader component
            └── SolutionsCarousel.js     # Legacy carousel (preserved, no longer used on homepage)
```

---

## 📁 Detailed File & Folder Breakdown

### 1. Root Configuration & Documentation Files

| File / Folder | Purpose & Functionality |
|---|---|
| [`package.json`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/package.json) | Declares package metadata, scripts (`dev`, `build`, `start`, `lint`), dependencies (`next: 16.2.12`, `react: 19.2.4`, `react-dom: 19.2.4`), and devDependencies (`@tailwindcss/postcss`, `tailwindcss: ^4`, `eslint`, `eslint-config-next`). |
| [`package-lock.json`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/package-lock.json) | Locks exact versions of all installed packages in the dependency tree to guarantee reproducible builds across environments. |
| [`next.config.mjs`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/next.config.mjs) | Next.js configuration module (ESM format). Configures Next.js compiler settings, images domain whitelisting, redirect rules, and headers. |
| [`postcss.config.mjs`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/postcss.config.mjs) | Configures PostCSS processing pipeline with `@tailwindcss/postcss` for Tailwind CSS v4 compilation. |
| [`eslint.config.mjs`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/eslint.config.mjs) | ESLint 9+ flat configuration, extending `eslint-config-next` rules for code quality and accessibility linting. |
| [`jsconfig.json`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/jsconfig.json) | Configures the JavaScript language server with base path `./src` and path alias `@/*` mapping directly to `./src/*`. |
| [`vercel.json`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/vercel.json) | Vercel platform configuration file for deployment overrides, caching rules, and edge routing. |
| [`.gitignore`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/.gitignore) | Instructs Git to ignore `node_modules/`, `.next/`, `.env*.local`, build caches, and system files. |
| [`REQUIREMENTS.md`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/REQUIREMENTS.md) | Single Source of Truth (SSOT) document containing the full functional specification, feature roadmaps, wireframe schemas, content blueprints, and design tokens for the entire platform. |
| [`README.md`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/README.md) | High-level repository documentation containing project overview, technology matrix, quickstart steps, and license info. |
| [`CONTRIBUTION.md`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/CONTRIBUTION.md) | This document — exhaustive developer guidelines, directory architecture, and code contribution standards. |
| [`AGENTS.md`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/AGENTS.md) | Context and instruction guidelines for AI coding assistants and automation agents working on Next.js 16 code. |

---

### 2. Public Assets (`public/`)

The `public/` directory contains static assets served directly from the domain root `/`:

| Asset File | Usage & Description |
|---|---|
| `new-logo-transparent.png` | ✅ **Active logo icon** — New purple mark (EVo symbol), white background removed. Used alongside wordmark in Header & Footer. |
| `experioverse-transparent.png` | ✅ **Active wordmark** — "ExperioVerse / WHERE PEOPLE CONNECT" typographic lockup, transparent PNG. Used in Header (full colour) and Footer (inverted white). |
| `logo-icon-transparent.png` | Legacy blue brand icon (transparent background). Replaced by `new-logo-transparent.png`. |
| `logo-icon.png` | Square icon with solid background for social sharing, mobile bookmark icons, and rich previews. |
| `logo.png` | Full brand lockup logo with symbol and typography. |
| `Final Logo.png` | High-resolution master brand logo asset for marketing and high-DPI displays. |
| `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` | Default framework and vector assets used for web platform utilities. |

---

### 3. Application Core (`src/app/`)

The `src/app/` folder is the heart of the Next.js App Router architecture.

#### 📄 [`src/app/layout.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/layout.js) — Root Layout
- **Purpose**: Global master shell wrapping every page in the application.
- **Key Responsibilities**:
  - Injects Google Fonts (`Outfit` for headings as `--font-outfit`, `Inter` for body text as `--font-inter`) using `next/font/google` with `display: swap` for zero layout shift.
  - Defines global metadata (default title, title templates `%s | Experio Verse`, description, OpenGraph, Twitter Card metadata, and indexing rules).
  - Renders the global [`Header`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Header.js) component.
  - Wraps `<main>` with responsive top padding (`pt-28 md:pt-24 lg:pt-20`) to prevent header overlap.
  - Renders the global [`Footer`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Footer.js) component.

#### 🎨 [`src/app/globals.css`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/globals.css) — Design System & Global Styles
- **Purpose**: Central style definition declaring CSS custom properties, Tailwind CSS v4 `@theme inline` mapping, glassmorphism utilities, card styles, and animations.
- **Key Sections**:
  - `:root` design tokens: Primary navies (`--ev-navy: #0B1D3A`, `--ev-section-bg: #060c18`), Accents (`--ev-accent: #E07A5F`, `--ev-gold: #D4A843`), 5 Category colors (`--ev-celebrate`, `--ev-connect`, `--ev-move`, `--ev-reset`, `--ev-explore`), Neutrals, Radius scale, Shadow scales.
  - `@theme inline` mappings connecting CSS tokens to Tailwind utilities (e.g. `bg-ev-navy`, `text-ev-accent`, `font-heading`, `font-sans`).
  - Base resets (`box-sizing`, smooth scrolling, custom scrollbar styling).
  - Layout & typography utilities (`.ev-container`, `.ev-section`, `.ev-section-dark`, `.ev-section-title`, `.ev-section-label`, `.ev-badge`, `.ev-card`, `.ev-glass`).

---

### 4. Page Routes

Each folder inside `src/app/` containing a `page.js` corresponds to a public URL route:

#### 🏠 [`src/app/page.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/page.js) — Home Page (`/`)

> [!IMPORTANT]
> **Homepage Redesigned (2026-09-09)**: Fully rebuilt to match the reference design at experioverse.com. Old structure (Aurora Hero + SolutionsCarousel + Calendar + CTA) replaced with 8-section layout below.

- **Route**: `http://localhost:3000/`
- **Architecture Note**: `page.js` is a **Server Component** (no `'use client'`). Hover effects on elements directly in `page.js` use CSS classes (e.g. `.cta-white-btn`) rather than inline JS handlers. All child components with interactive hover effects are individually marked `'use client'`.
- **Sections (in render order)**:
  1. **Hero** — [`HeroSection`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/HeroSection.js): Split-screen dark purple. Left: animated headline + stats strip. Right: image placeholder.
  2. **Trusted Brands** — [`TrustedBrands`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/TrustedBrands.js): White section. Text-based logos: Google, Microsoft, amazon, TCS, Deloitte, zomato, Infosys, Dropbox.
  3. **Solutions Grid** — [`SolutionsGrid`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/SolutionsGrid.js): White section. 6-card grid with "View All Solutions" header button.
  4. **Why Experioverse** — [`WhyExperioverse`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/WhyExperioverse.js): Dark purple. Left heading with pink SVG underline. Right: 5 differentiator cards.
  5. **How We Work** — [`HowWeWork`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/HowWeWork.js): White section. 5 step cards: Understand, Ideate, Plan, Execute, Delight.
  6. **Experiences Gallery** — [`ExperiencesGallery`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/ExperiencesGallery.js): Dark section. Text left + 2x3 gradient photo grid right. Replace gradients with real photos when available.
  7. **Testimonials** — [`Testimonials`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Testimonials.js): Dark section. 3-card testimonial grid with `useState` dot navigation.
  8. **CTA Banner** (inline in `page.js`): Pink/purple/orange gradient. White pill button uses `.cta-white-btn` CSS class.


> [!WARNING]
> **DELETED (2026-09-10)**: `about/`, `services/`, `how-we-work/`, `why-experio-verse/` have all been removed.
> Only **Home** (`/`) and **Contact** (`/contact`) are active routes. If these pages are rebuilt in the future, recreate them following the "How to Add a New Page Route" guide below.

#### 📞 [`src/app/contact/page.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/contact/page.js) — Contact & Lead Capture (`/contact`) ✅ ACTIVE
- **Route**: `http://localhost:3000/contact`
- **Purpose**: Enterprise lead generation hub containing:
  - **"Request a Call" Enquiry Form**: Captures company name, team size, selected interest categories, preferred timeline, and contact information.
  - **Direct Coordinates**: Phone number, corporate email, office locations, and operational hours.
  - **Instant Consultation Scheduling**.

---

### 5. Reusable UI Components (`src/app/components/`)

All reusable UI components live in `src/app/components/` and are centrally exported from [`index.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/index.js):

| Component File | Type | Description & Features |
|---|---|---|
| [`Header.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Header.js) | `'use client'` | **MEGA-MENU REBUILD Sep 2026-09-15.** Dark glass sticky navbar (unchanged colours). Nav items: `Offsite Events`, `Team Building`, `Rewards & Recognition`, `Theme Events`, `Wellness Programs`. Each triggers a **hover mega-menu** dropdown (`position: fixed; top: 70px`) with white panel. Hover bridge: 120ms `setTimeout` on `onMouseLeave` cleared by `onMouseEnter` on both trigger and panel — prevents panel closing when moving mouse between them. **Offsite Events**: dark left panel (badge + heading + desc + image slot) + 3 columns (National, International, Day Outings) + right image slot. **Team Building / R&R / Wellness**: header row + 3 columns + right image slot + CTA. **Theme Events**: header row + 2 columns + 2×2 image grid. All image slots are dashed purple placeholder boxes — replace with `<img src="...">` when photos are ready. `Popular` badge rendered inline on Signature Experiences items. Mobile: slide-down drawer with simple list links. `navLinks` array replaced by `MENU_DATA` object keyed by nav item name. |
| [`Footer.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Footer.js) | `'use client'` | **REBUILT Sep 2026.** 5-column dark footer (`#0f051e` to `#070310`). Col 1: logo + tagline + social icons. Col 2: Quick Links. Col 3: Solutions (8 items). Col 4: About Us + Pan India badge. Col 5: phone, email, location. Bottom bar: copyright + legal links. |
| [`HeroSection.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/HeroSection.js) | `'use client'` | **REBUILT Sep 2026.** Split-screen dark purple hero. Left: "We create experiences" headline + pink "people never forget" + italic "moments". Stats strip: 500+ Experiences, 100+ Companies, 10+ Cities, 1M+ Lives. Two CTAs + radial aurora orbs. |
| [`TrustedBrands.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/TrustedBrands.js) | `'use client'` | **NEW Sep 2026.** White section with "Trusted by Amazing Brands" label. Horizontal flex strip of styled text logos: Google, Microsoft, amazon, TCS, Deloitte, zomato, Infosys, Dropbox. Hover: opacity + translateY lift. |
| [`SolutionsGrid.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/SolutionsGrid.js) | `'use client'` | **NEW Sep 2026.** White section. Header: "SOLUTIONS FOR EVERY *Experience*" + "View All Solutions" outlined button. Auto-fill 3-col card grid. Each card: gradient placeholder image, icon, title, description, pink "Learn more" arrow. 6 solutions: Employee Engagement, Corporate Celebrations, Wellness, Mental Health, Leadership, Sports & Fitness. |
| [`WhyExperioverse.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/WhyExperioverse.js) | `'use client'` | **NEW Sep 2026.** Dark purple section with radial glows. 2-col grid: left = "WHY EXPERIOVERSE?" with pink wavy SVG underline. Right = 5 glass-border cards: One Stop Solution, Creative & Fresh Ideas, End-to-End Execution, Experienced Team, Pan India Presence. |
| [`HowWeWork.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/HowWeWork.js) | `'use client'` | **REDESIGNED Sep 2026-09-11.** White section. Heading: "HOW" + italic gradient "WE WORK" (`.gradient-text-pink-purple` CSS class). Subtitle text. Horizontal timeline: 5 icon circles (`72px`, solid white bg, purple border) connected by a `2px dashed rgba(124,58,237,0.30)` horizontal line at `top: 35px`. Line sits at `zIndex: 0`; circles at `zIndex: 2` so they visually cover the line. Each node: SVG icon, pink step number (`01.`), bold title, grey description. Hover: circle lifts (`translateY(-4px)`) + pink glow shadow. Steps: 01 Understand, 02 Ideate, 03 Plan, 04 Execute, 05 Delight. Mobile (< 700px): stacks vertically via `globals.css` media query. |
| [`ExperiencesGallery.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/ExperiencesGallery.js) | `'use client'` | **NEW Sep 2026.** Dark gradient section. 2-col: left = "EXPERIENCES THAT *SPEAK* FOR US" + "View Our Work" CTA. Right = 2x3 grid of gradient placeholder cards. **To add real photos**: replace each card's `background: photo.gradient` with a `next/image` component. |
| [`Testimonials.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Testimonials.js) | `'use client'` | **NEW Sep 2026.** Dark section. "LOVED BY PEOPLE, *TRUSTED BY BRANDS* ♡" heading. 3-col card grid: large quote mark, italic quote, avatar initials circle, name, role. Bottom: dot indicator pills controlled by `useState`. |
| [`SolutionsCarousel.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/SolutionsCarousel.js) | `'use client'` | **Legacy — no longer used on homepage.** Preserved for potential inner-page reuse. Interactive horizontal carousel with swipe/scroll navigation. |
| [`Button.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Button.js) | Polymorphic | Reusable button supporting variants (`primary`, `secondary`, `outline`, `ghost`, `dark`), sizes (`sm`, `md`, `lg`), custom icons. |
| [`Section.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Section.js) | Server Component | Standardized layout wrapper with `SectionHeader` (badge label, title, subtitle, alignment). |
| [`index.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/index.js) | Barrel Export | Central import hub: `import { Header, Footer, Button, Section } from './components';` |


---

## 🎨 Design System & Styling Guidelines

Experio Verse adheres to a strict, premium corporate design system.

> [!IMPORTANT]
> **Brand Rebrand (2026-08-29)**: Migrated from old Purple x Magenta to Pink x Purple x Deep Violet.
>
> **Palette Update (2026-09-09)**: Further refined to match the live site at experioverse.com. Primary accent is now hot pink `#e91e8c` and vivid purple `#7c3aed`. Deepest background is `#0f051e`.

### 🎨 Color Palette & CSS Variables (current as of 2026-09-09)

| Variable Name | Hex Code | Purpose / Usage |
|---|---|---|
| `--ev-navy` | `#1a0a3c` | Primary brand deep-purple — headings, primary dark backgrounds |
| `--ev-navy-light` | `#2d1557` | Secondary dark purple — cards, elevated surfaces |
| `--ev-navy-mid` | `#3d1f6e` | Mid-tone purple — gradients, hover backgrounds |
| `--ev-section-bg` | `#0f051e` | Deepest dark background — hero & dark sections |
| `--ev-section-bg-light` | `#1a0a3c` | Slightly lighter dark bg — alternate dark sections |
| `--ev-section-bg-mid` | `#2d1557` | Mid dark bg — section transitions |
| `--ev-accent` | `#e91e8c` | **Primary CTA — Hot Pink** (buttons, badges, highlights) |
| `--ev-accent-hover` | `#d4147e` | Hot pink hover state |
| `--ev-accent-light` | `#f06292` | Soft pink — tints and badges |
| `--ev-accent-deep` | `#c0117a` | Deep pink — section labels, decorative lines |
| `--ev-gold` | `#7c3aed` | **Secondary accent — Vivid Purple** |
| `--ev-gold-light` | `#9f6ef5` | Light purple — subtle highlights |
| `--ev-gold-vivid` | `#6d28d9` | Deep vivid purple — secondary interactive elements |
| `--ev-blue` | `#7c3aed` | Alias for vivid purple — links, connect category |
| `--ev-blue-light` | `#9f6ef5` | Light purple — secondary interactive |
| `--ev-off-white` | `#FAF5FF` | Light section background with soft lavender tint |
| `--ev-dark` | `#0f051e` | Alias for deepest dark background |

#### 🖼️ Dark Section Background Gradient (Hero, Why EV, Gallery, Testimonials, Footer)
```css
background: linear-gradient(160deg, #0f051e 0%, #1a0a3c 40%, #2d1557 100%);
```

#### ✨ Primary CTA Gradient (buttons, CTA banner)
```css
background: linear-gradient(135deg, #e91e8c 0%, #7c3aed 100%);  /* Hot Pink → Vivid Purple */
```

#### 🌈 Experience Category Colours

| Variable | Hex | Pillar |
|---|---|---|
| `--ev-celebrate` | `#e91e8c` | Celebrate — Hot Pink |
| `--ev-connect` | `#7c3aed` | Connect — Vivid Purple |
| `--ev-move` | `#10B981` | Move — Emerald (kept) |
| `--ev-reset` | `#9f6ef5` | Reset — Light Purple |
| `--ev-explore` | `#f97316` | Explore — Orange |

#### 🌟 Glow Shadow Tokens
```css
--shadow-glow:        0 0 40px rgba(233, 30, 140, 0.35);   /* Hot pink glow */
--shadow-glow-purple: 0 0 40px rgba(124, 58, 237, 0.40);   /* Vivid purple glow */
```



### 🔤 Typography

- **Heading Font**: `Outfit` (`var(--font-heading)`) — Clean, modern geometric font. Always used for `h1` through `h6`, section labels, and prominent badges.
- **Body Font**: `Inter` (`var(--font-body)`) — Highly legible neutral sans-serif. Used for all paragraphs, lists, forms, and general content.

### 📐 Glassmorphism & UI Rules

1. **Avoid pure harsh `#000000` or `#ffffff` backgrounds**: Use `--ev-section-bg` (`#100C1E`) for dark sections and `--ev-off-white` (`#FAF5FF`) for light sections.
2. **Glassmorphism Panels**: Use `.ev-glass` (`backdrop-filter: blur(20px)` with `rgba(238,146,208,0.18)` pink border) for floating navigation and dark overlays.
3. **Buttons**: Main call-to-action buttons always use `linear-gradient(135deg, #EE92D0 0%, #5D4781 100%)` with a pink glow shadow (`box-shadow: 0 8px 32px rgba(238,146,208,0.45)`). CTA button text is dark (`#231B35`) to contrast against the light pink gradient.
4. **Interactive States**: Interactive elements should have `hover:scale-[1.02]` and `active:scale-[0.98]` micro-interactions with smooth 200ms transitions.
5. **Section Label Lines**: Use `linear-gradient(90deg, #EE92D0, #5D4781)` for the decorative `::before` lines on `.ev-section-label`.
6. **Scrollbar**: Styled with the pink → purple gradient (`linear-gradient(180deg, #EE92D0, #5D4781)`) for brand consistency.

---

## 🚀 Getting Started & Local Development

### 1. Prerequisites
Ensure you have the following installed on your workstation:
- **Node.js**: `v18.17.0` or higher (Recommended: `v20.x` or `v22.x LTS`)
- **npm**: `v9.x` or higher (or `pnpm` / `yarn`)
- **Git**: `v2.x`

### 2. Setup Steps

```bash
# 1. Clone the repository
git clone https://github.com/Gautamdas77/Experioverse.git

# 2. Navigate to project root
cd Experioverse/Experioverse

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

The application will be accessible at: **`http://localhost:3000`**

### 3. Available npm Scripts

| Script | Command | Purpose |
|---|---|---|
| `npm run dev` | `next dev` | Starts local Next.js development server with hot-reload (Turbopack support). |
| `npm run build` | `next build` | Compiles and builds the production bundle, generating static pages and server bundles. |
| `npm run start` | `next start` | Starts the production server using the compiled `.next` build. |
| `npm run lint` | `eslint` | Runs ESLint over all `.js`, `.jsx`, and `.mjs` files to check for errors and style violations. |

---

## 💻 Coding Standards & Conventions

### 1. Server vs. Client Components
- **Default to React Server Components (RSC)**: Keep components server-side unless they require browser APIs, state (`useState`), effects (`useEffect`), or DOM event listeners (`onClick`, `onChange`).
- **Use `'use client'` explicitly**: When a component needs user interactivity (e.g. Header dropdowns, Carousel sliders, Hero animations, Form handlers), add `'use client';` at the very first line of the file.

### 2. Component Guidelines
- Place reusable UI components inside `src/app/components/`.
- Always export new components from [`src/app/components/index.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/index.js) to support atomic imports.
- Make components flexible by accepting `className`, `children`, and passing through extra props (`...props`).
- Ensure accessible markup: include `aria-label` attributes on icon-only buttons, proper `alt` text on images, and semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).

### 3. Styling Best Practices
- Combine Tailwind v4 classes with our custom design tokens:
  ```jsx
  // Good:
  <div className="bg-ev-navy text-white rounded-2xl p-6 shadow-lg">
  
  // Also Good (when using CSS variables directly):
  <div style={{ color: 'var(--ev-accent)' }}>
  ```
- Do **not** hardcode arbitrary magic numbers or random hex codes in component styles when a design token exists.

---

## 🧩 How-To Contribution Guides

### How to Create a New UI Component

1. Create a new file in `src/app/components/MyComponent.js`:
   ```jsx
   export default function MyComponent({ title, description, className = '' }) {
     return (
       <div className={`p-6 rounded-2xl bg-white border border-ev-gray-100 shadow-sm ${className}`}>
         <h3 className="text-xl font-bold text-ev-navy mb-2 font-heading">{title}</h3>
         <p className="text-ev-gray-500 text-sm">{description}</p>
       </div>
     );
   }
   ```
2. Export it in `src/app/components/index.js`:
   ```javascript
   export { default as MyComponent } from './MyComponent';
   ```
3. Import and use it anywhere in your pages:
   ```jsx
   import { MyComponent } from './components';
   ```

---

### How to Add a New Page Route

1. Create a new directory inside `src/app/` with the desired URL path (e.g. `src/app/case-studies/`).
2. Add a `page.js` file inside the new directory:
   ```jsx
   import { Section, SectionHeader } from '../components';

   export const metadata = {
     title: 'Case Studies | Experio Verse',
     description: 'Explore successful employee experience transformation stories from Experio Verse.',
   };

   export default function CaseStudiesPage() {
     return (
       <Section>
         <SectionHeader
           label="Client Success"
           title="Case Studies & Stories"
           subtitle="Discover how top enterprises elevated their employee engagement with Experio Verse."
           align="center"
         />
         {/* Page content */}
       </Section>
     );
   }
   ```
3. If navigation is needed, add the new section to the `MENU_DATA` object in [`src/app/components/Header.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Header.js) (see mega-menu structure) and add the corresponding quick link to [`src/app/components/Footer.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Footer.js).

---

### How to Update the Annual Experience Calendar

The 12-Month Calendar data is declared in [`src/app/page.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/page.js#L47-L60). To add or modify month themes:
```javascript
const calendarData = [
  { month: 'January', experience: 'New Year Kickoff & Strategy Rally', abbr: 'JAN' },
  { month: 'February', experience: 'Fitness & Step Challenge', abbr: 'FEB' },
  // ... update remaining months
];
```

---

### How to Add a New Service/Experience Category

1. Add the category definition to `categories` array in [`src/app/page.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/page.js#L8-L44).
2. Define the corresponding color variable in [`src/app/globals.css`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/globals.css).
3. Add the detailed service catalog entry in [`src/app/experiences/page.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/experiences/page.js).

---

## 🌿 Git Workflow & Commit Guidelines

### 1. Branch Naming
Create descriptive branch names following the format: `category/short-description`
- `feature/add-testimonials-carousel`
- `fix/mobile-menu-scroll-lock`
- `docs/update-contributing-guide`
- `refactor/header-nav-active-states`
- `chore/upgrade-tailwind-v4`

### 2. Commit Message Standards (Conventional Commits)
Format commit messages using the standard format:
`<type>(<scope>): <short summary>`

Types:
- `feat`: A new user-facing feature or page
- `fix`: A bug fix or visual defect repair
- `docs`: Documentation changes only
- `style`: Formatting, spacing, CSS token adjustments (no functional changes)
- `refactor`: Code restructuring without adding features or fixing bugs
- `perf`: Performance improvements
- `chore`: Updating dependencies, build configurations, or tooling

Examples:
```text
feat(experiences): add detailed breakdown modal for offsite retreats
fix(header): correct z-index overlap on mobile safari drawer
docs(readme): add environment setup instructions for vercel deployment
```

---

## 🚢 Deployment & Verification

Before submitting a pull request or pushing to the main branch, always perform the following local validation checks:

```bash
# 1. Run the linter to ensure zero lint errors
npm run lint

# 2. Run a full production build to verify static generation & TypeScript/JS syntax
npm run build

# 3. Test the production bundle locally
npm run start
```

### Pull Request Checklist
- [ ] Code follows project conventions and ESLint passes with 0 errors.
- [ ] Production build (`npm run build`) completes successfully.
- [ ] Tested responsive layouts across Mobile (375px), Tablet (768px), and Desktop (1280px+).
- [ ] All interactive elements (buttons, links, form inputs) have visible focus and hover states.
- [ ] No hardcoded secret API keys or credentials.
- [ ] Documentation updated if new routes or components were introduced.

---

## 📋 Changelog

### 2026-09-15 — Header Mega-Menu Rebuild

**Goal**: Replace flat nav links with a full hover-triggered mega-menu navigation matching the reference design.

**File changed**: [`src/app/components/Header.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Header.js) — complete rewrite.

**Nav items** (Year Calendar excluded per design decision):
- Offsite Events → mega panel: dark left panel + National / International / Day Outings columns + image slot
- Team Building → mega panel: 3 columns (Indoor, Outdoor, Signature Experiences) + image slot
- Rewards & Recognition → mega panel: 3 columns (Recognition, Rewards, Awards & Events) + image slot
- Theme Events → mega panel: 2 columns (Corporate Themes, Celebration Themes) + 2×2 image grid
- Wellness Programs → mega panel: 3 columns (Physical, Mental, Workplace Wellness) + image slot

**Key architectural decisions**:
- `MENU_DATA` object (keyed by name) replaces the old `navLinks` flat array
- Hover bridge: `onMouseLeave` sets a 120ms `setTimeout`; `onMouseEnter` on both the button and the panel clears it — panel stays open while cursor moves between trigger and panel
- Dropdown panel is `position: fixed; top: 70px` (below header) with `zIndex: 49`; header stays at `zIndex: 50`
- All image slots are `<ImgBox>` placeholder components (dashed purple border + gradient bg) — replace content with `<img src="...">` when photos are provided
- All menu links point to `/contact` temporarily (no inner pages exist yet)
- Mobile drawer unchanged: slide-down list of top-level nav names
- Colours unchanged: dark glass header, `#e91e8c` pink, `#7c3aed` purple

---

### 2026-09-09 — Full Homepage Redesign

**Goal**: Rebuild homepage to match the reference design at [experioverse.com](https://experioverse.com).

**Files Modified**:
- [`src/app/page.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/page.js) — Complete rewrite. 8-section layout. No more SolutionsCarousel or Calendar on homepage.
- [`src/app/layout.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/layout.js) — Removed `pt-28` from `<main>` (hero handles own offset now).
- [`src/app/globals.css`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/globals.css) — Updated all CSS tokens to `#e91e8c` / `#7c3aed` / `#0f051e` palette. Added `.cta-white-btn` utility class.
- [`src/app/components/Header.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Header.js) — Rebuilt: dark glass nav, centered links, pink gradient CTA.
- [`src/app/components/HeroSection.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/HeroSection.js) — Rebuilt: split-screen dark purple hero, animated headline, stats strip.
- [`src/app/components/Footer.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Footer.js) — Rebuilt: 5-column dark footer.

**Files Created**:
- [`src/app/components/TrustedBrands.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/TrustedBrands.js)
- [`src/app/components/SolutionsGrid.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/SolutionsGrid.js)
- [`src/app/components/WhyExperioverse.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/WhyExperioverse.js)
- [`src/app/components/HowWeWork.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/HowWeWork.js)
- [`src/app/components/ExperiencesGallery.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/ExperiencesGallery.js)
- [`src/app/components/Testimonials.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Testimonials.js)

**Key architectural decisions**:
- `page.js` stays a **Server Component** — no `'use client'` at page level.
- All new components are `'use client'` because they use inline mouse event handlers.
- Hover effects directly inside server-rendered JSX use CSS classes (`.cta-white-btn`) instead of JS handlers.
- `SolutionsCarousel.js` is preserved (not deleted) for potential reuse on inner pages.
- `ExperiencesGallery.js` photo cards use gradient placeholders — replace with `next/image` when real photos are ready.

---

### 2026-09-11 — HowWeWork Timeline Redesign + Bug Fixes

**HowWeWork redesign** — replaced card grid layout with a horizontal icon-node timeline matching the reference design:
- `HowWeWork.js` fully rewritten: 5 circles connected by a dotted horizontal line
- Icon circles use solid white `background: #ffffff` + `zIndex: 2` so they sit on top of the `zIndex: 0` dotted line (this prevents the line from rendering through the circles)
- Gradient heading text uses `.gradient-text-pink-purple` CSS class (added to `globals.css`) instead of inline `WebkitTextFillColor` — inline style approach failed to render correctly in Next.js
- Mobile responsive: flex-direction stacks vertically at `700px` breakpoint via `globals.css` media query

**Nav anchor fix** — Solutions link in `Header.js` and `Footer.js` corrected from `/#solutions` to `/#solutions-grid` to match the actual `id` on the `<section>` in `SolutionsGrid.js`

**Footer React key error** — `solutionLinks` map was using `link.href` as the React `key`, but all 8 items share `href: '/contact'`, causing duplicate key warnings. Fixed by switching to `key={link.label}`.

**Files changed**: `HowWeWork.js`, `Header.js`, `Footer.js`, `globals.css`

---

### 2026-09-10 — Deleted Unused Page Routes

**Deleted routes** (folders and all contents removed from `src/app/`):
- `about/` — no longer a standalone page
- `services/` — solutions now link directly to `/contact`
- `how-we-work/` — content lives as the `HowWeWork.js` section on the homepage
- `why-experio-verse/` — content lives as the `WhyExperioverse.js` section on the homepage

**Active routes after this change**: `/` (Home) and `/contact` only.

**Files updated** to remove dead navigation links:
- [`Header.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Header.js) — `navLinks` updated to: Home, Solutions (anchor), How We Work (anchor), Testimonials (anchor), Contact
- [`Footer.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Footer.js) — `quickLinks`, `solutionLinks`, and `aboutLinks` updated to point to `/`, `/#sections`, and `/contact` only

---

### 2026-08-29 — Brand Colour Rebrand

Migrated colour palette from old Purple × Magenta to Pink × Purple × Deep Violet.

### 2026-08-18 — Services Page Added
Added `/services` route with 11 hover-reveal service cards. Deprecated and removed `/experiences`.

---

## 📞 Community & Support

- **Repository**: [github.com/Gautamdas77/Experioverse](https://github.com/Gautamdas77/Experioverse)
- **Official Website**: [Experio Verse](https://experioverse.com)
- **Enquiries & Support**: [contact@experioverse.com](mailto:contact@experioverse.com)

Thank you for helping us create workplaces where people love to belong! 🚀
