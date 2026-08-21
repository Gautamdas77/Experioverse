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
        ├── page.js                      # Home Page: Hero, Solutions, Categories, Calendar, Process, CTA
        │
        ├── services/                    # Services catalog route (/services)
        │   └── page.js                  # Services Page: Hover-reveal service category cards (Team Building + more)
        │
        ├── about/                       # About Us route (/about)
        ├── how-we-work/                 # Process route (/how-we-work)
        │   └── page.js                  # Process Page: 5-step methodology (Understand → Design → Plan → Execute → Feedback)
        │
        ├── why-experio-verse/           # Value proposition route (/why-experio-verse)
        │   └── page.js                  # Why EV Page: Key differentiators, comparison, ROI & enterprise benefits
        │
        ├── contact/                     # Lead capture route (/contact)
        │   └── page.js                  # Contact Page: Request a Call lead form, enquiry channels, contact info
        │
        └── components/                  # Shared, reusable UI component library
            ├── index.js                 # Central barrel export file for all components
            ├── Header.js                # Sticky glassmorphic navigation bar with mobile drawer
            ├── Footer.js                # Multi-column enterprise footer with links & social handles
            ├── HeroSection.js           # Animated hero section with aurora glows, pill badges, and stats
            ├── Button.js                # Polymorphic button/link component with multiple variants & icons
            ├── Section.js               # Standardized section wrapper & SectionHeader component
            └── SolutionsCarousel.js     # Interactive carousel component for solution showcase
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
- **Route**: `http://localhost:3000/`
- **Sections**:
  1. **Hero Section** ([`HeroSection`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/HeroSection.js)): Aurora background mesh, animated glowing pills, value proposition, quick CTA triggers, and high-impact key statistics.
  2. **What We Do / Solutions Carousel** ([`SolutionsCarousel`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/SolutionsCarousel.js)): Interactive horizontal slider showcasing the 5 pillars.
  3. **5 Core Experience Pillars Grid**: Cards for Celebrate, Connect, Move, Reset, Explore with category color accents.
  4. **12-Month Employee Experience Calendar**: Interactive 12-month grid mapping out structured corporate activities across the year.
  5. **Why Experio Verse Summary**: Key enterprise benefits and differentiators.
  6. **5-Step Process Summary**: Brief overview of the implementation journey.
  7. **High-Conversion Call to Action**: Final banner driving leads to the Contact & Enquiry page.

#### ℹ️ [`src/app/about/page.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/about/page.js) — About Us (`/about`)
- **Route**: `http://localhost:3000/about`
- **Purpose**: Company identity, vision, mission, story, leadership team, and corporate values.

#### 🛠️ [`src/app/services/page.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/services/page.js) — Services (`/services`) *(added: 2026-08-18)*
- **Route**: `http://localhost:3000/services`
- **Purpose**: Showcase all service categories with interactive hover-reveal cards.
- **Card Interaction**: At rest each card displays only the service name and icon (large, centred). On hover, the name shrinks and moves to the top of the card while a description paragraph and bullet-point list animate in — powered entirely by CSS (`.svc-rest` / `.svc-content` layers with `opacity` + `transform` transitions).
- **Services Array**: Declared inside `page.js`. Each entry has: `id`, `slug`, `icon`, `label`, `accentHex`, `description`, `points[]`. Current services (11 total):
  1. 🤝 **Team Building** — Family Day, Fun Fridays, Hobby Clubs, Indoor/Outdoor Games
  2. 🎉 **Corporate Celebrations** — Annual Day, Foundation Day, Townhall, Festivals, Awards Night, Milestone Celebrations
  3. 🏔️ **Offsites & Retreats** — Domestic, International, Leadership Retreats, Strategy Meets
  4. 📚 **Learning Experiences** — Workshops, Leadership Dev, Soft Skills, Innovation Labs, Guest Speakers
  5. 🏆 **Rewards & Recognition** — R&R Programmes, Long Service Awards, Hall of Fame, Appreciation Events
  6. 🧘 **Well-being & Mental Health** — Wellness Sessions, Stress Mgmt, Mindfulness, Yoga & Fitness, Health Campaigns
  7. 🌱 **Workplace Culture** — Culture Building, Value Workshops, EX Campaigns, Internal Initiatives, Transformation
  8. ✨ **Brand Experiences** — Product Launches, Dealer Meets, Channel Partner Meets, CX Events, Conferences
  9. 🎤 **Entertainment Experiences** — Stand-up Comedy, Live Bands, DJs, Motivational Speakers, Emcees
  10. 🌍 **CSR Experiences** — Tree Plantation, Build-a-Bicycle, Toy Drives, Community Projects, NGO Partnerships
  11. 🎨 **Custom Experiences** — Bespoke programmes, tailor-made campaigns, end-to-end design
- **CSS Classes** (defined in `globals.css`):
  - `.svc-grid` — responsive `auto-fill` grid (min 300 px per column)
  - `.svc-card` — card shell with border, background and lift transition
  - `.svc-card-top-line` — hairline accent gradient at top of card
  - `.svc-rest` — rest-state centred layer (hidden on hover)
  - `.svc-rest-icon`, `.svc-rest-title`, `.svc-rest-hint` — rest state child elements
  - `.svc-content` — hover-state full-content layer (revealed on hover)
  - `.svc-content-header`, `.svc-content-icon`, `.svc-content-title` — compact header row
  - `.svc-content-divider` — thin coloured separator
  - `.svc-content-desc` — description paragraph
  - `.svc-content-points`, `.svc-content-point`, `.svc-point-dot` — bullet list
  - `.svc-cta` — Enquire link with arrow icon
- **Navigation**: Listed as `Services` in `Header.js` `navLinks` array (href `/services`).

> [!WARNING]
> **`src/app/experiences/` — DELETED (2026-08-18)**
> This route and its `page.js` have been removed. All services content has been migrated to [`src/app/services/page.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/services/page.js). The `/experiences` URL is no longer active.

#### 🔄 [`src/app/how-we-work/page.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/how-we-work/page.js) — How We Work (`/how-we-work`)
- **Route**: `http://localhost:3000/how-we-work`
- **Purpose**: Explains our 5-step operational workflow:
  1. *Understand & Discover*: Culture and objective assessment.
  2. *Curate & Design*: Tailored experience blueprints.
  3. *Plan & Coordinate*: End-to-end logistics and vendor management.
  4. *Flawless Execution*: On-ground facilitation and live engagement.
  5. *Measure & Feedback*: Post-event sentiment and engagement analytics.

#### ✨ [`src/app/why-experio-verse/page.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/why-experio-verse/page.js) — Why EV (`/why-experio-verse`)
- **Route**: `http://localhost:3000/why-experio-verse`
- **Purpose**: Detailed value proposition for HR leaders, ROI analysis, testimonials, enterprise case studies, and comparison vs traditional ad-hoc event vendors.

#### 📞 [`src/app/contact/page.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/contact/page.js) — Contact & Lead Capture (`/contact`)
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
| [`Header.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Header.js) | Client Component (`'use client'`) | Fixed floating glassmorphic navbar with dynamic scroll detection (`scrollY > 20`), animated hamburger toggle, mobile navigation overlay drawer with scroll-lock, brand logo lockup, and high-visibility "Request a Call" CTA. |
| [`Footer.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Footer.js) | Server Component | Enterprise multi-column footer containing company mission snippet, fast navigation links, categorized services list, direct contact coordinates, social channels, copyright notice, and legal links. |
| [`HeroSection.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/HeroSection.js) | Client Component (`'use client'`) | Full-viewport visual hero. Features keyframe animations for 3 floating radial aurora meshes, dot background grid, animated pulse indicator, floating category pills with stagger delays, primary gradient CTA button, and 4-metric enterprise statistics strip. |
| [`Button.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Button.js) | Polymorphic (`button` / `next/link`) | Reusable button component supporting variants (`primary`, `secondary`, `outline`, `ghost`, `dark`), sizes (`sm`, `md`, `lg`), custom icons, smooth scale on hover/active, and exported helper icons ([`PhoneIcon`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Button.js#L72), [`ArrowIcon`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Button.js#L92)). |
| [`Section.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Section.js) | Server Component | Standardized layout wrapper for page sections. Includes [`SectionHeader`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Section.js) with badge label, main title, and descriptive subtitle with built-in alignment support (left/center). |
| [`SolutionsCarousel.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/SolutionsCarousel.js) | Client Component (`'use client'`) | Interactive horizontal carousel component with swipe/scroll navigation for showcasing experience categories, features, and case studies. |
| [`index.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/index.js) | Barrel Export | Provides clean single-line imports for all components across the application: `import { Header, Footer, Button, Section } from './components';` |

---

## 🎨 Design System & Styling Guidelines

Experio Verse adheres to a strict, premium corporate design system.

> [!IMPORTANT]
> **Brand Rebrand (2026-08-22)**: The entire colour palette was migrated from the original navy/coral/gold scheme to a **Purple × Magenta × Violet** theme that matches the EVo logo. All tokens below reflect the current live values.

### 🎨 Color Palette & CSS Variables

| Variable Name | Hex Code | Purpose / Usage |
|---|---|---|
| `--ev-navy` | `#1A0533` | Primary brand deep-purple — headings, primary dark backgrounds |
| `--ev-navy-light` | `#2D0A52` | Secondary dark purple — cards, elevated surfaces |
| `--ev-navy-mid` | `#3B1070` | Mid-tone purple — gradients, hover backgrounds |
| `--ev-section-bg` | `#0D0118` | Hero & dark section background — near-black purple |
| `--ev-section-bg-light` | `#1A0533` | Slightly lighter dark bg — used for alternate dark sections |
| `--ev-accent` | `#C026D3` | **Primary CTA — Vivid Magenta** (buttons, badges, labels) |
| `--ev-accent-hover` | `#A21CAF` | Magenta hover state |
| `--ev-accent-light` | `#E879F9` | Soft magenta — light badges, tints |
| `--ev-gold` | `#A855F7` | **Secondary accent — Medium Violet** (replaces old gold) |
| `--ev-gold-light` | `#D8B4FE` | Light lavender-purple — subtle highlights |
| `--ev-blue` | `#7C3AED` | Violet-purple — links, connect category, focus rings |
| `--ev-blue-light` | `#A855F7` | Medium purple — secondary interactive |
| `--ev-off-white` | `#F5F3FF` | Light background with lavender tint |
| `--ev-white-rgb` | `245, 243, 255` | RGB equivalent for `rgba()` usage |
| `--ev-gray-50` | `#F0EBFF` | Lightest purple-tinted gray — card surfaces |
| `--ev-gray-100` | `#E9D5FF` | Light purple-gray — borders, dividers |
| `--ev-gray-200` | `#C4B5FD` | Mid purple-gray — secondary text borders |

#### 🖼️ Hero Gradient
```css
background: linear-gradient(135deg, #0D0118 0%, #1A0533 30%, #2D0A52 60%, #3B1070 100%);
```

#### ✨ Accent / CTA Gradient
```css
background: linear-gradient(135deg, #C026D3 0%, #7C3AED 100%);  /* Magenta → Violet */
```

#### 🌈 Experience Category Colours

| Variable | Hex | Pillar |
|---|---|---|
| `--ev-celebrate` | `#C026D3` | Celebrate — Magenta |
| `--ev-connect` | `#7C3AED` | Connect — Violet |
| `--ev-move` | `#10B981` | Move — Emerald (kept) |
| `--ev-reset` | `#A855F7` | Reset — Purple |
| `--ev-explore` | `#EC4899` | Explore — Pink |

#### 🌟 Shadow Tokens
```css
--shadow-sm:  0 1px 3px rgba(26, 5, 51, 0.10);
--shadow-md:  0 4px 12px rgba(26, 5, 51, 0.15);
--shadow-lg:  0 8px 30px rgba(26, 5, 51, 0.20);
--shadow-xl:  0 16px 50px rgba(26, 5, 51, 0.25);
--shadow-glow: 0 0 40px rgba(192, 38, 211, 0.30);  /* Magenta glow */
```

### 🔤 Typography

- **Heading Font**: `Outfit` (`var(--font-heading)`) — Clean, modern geometric font. Always used for `h1` through `h6`, section labels, and prominent badges.
- **Body Font**: `Inter` (`var(--font-body)`) — Highly legible neutral sans-serif. Used for all paragraphs, lists, forms, and general content.

### 📐 Glassmorphism & UI Rules

1. **Avoid pure harsh `#000000` or `#ffffff` backgrounds**: Use `--ev-section-bg` (`#0D0118`) for dark sections and `--ev-off-white` (`#F5F3FF`) for light sections.
2. **Glassmorphism Panels**: Use `.ev-glass` (`backdrop-filter: blur(16px)` with semi-transparent purple border) for floating navigation and dark overlays.
3. **Buttons**: Main call-to-action buttons always use `linear-gradient(135deg, #C026D3 0%, #7C3AED 100%)` with a magenta glow shadow (`box-shadow: 0 8px 32px rgba(192,38,211,0.40)`).
4. **Interactive States**: Interactive elements should have `hover:scale-[1.02]` and `active:scale-[0.98]` micro-interactions with smooth 200ms transitions.

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
3. If navigation is needed, add the link to the `navLinks` array in [`src/app/components/Header.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Header.js) and the quick links in [`src/app/components/Footer.js`](file:///c:/Users/gauta/OneDrive/Desktop/Experioverse/Experioverse/src/app/components/Footer.js).

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

## 📞 Community & Support

- **Repository**: [github.com/Gautamdas77/Experioverse](https://github.com/Gautamdas77/Experioverse)
- **Official Website**: [Experio Verse](https://experioverse.com)
- **Enquiries & Support**: [contact@experioverse.com](mailto:contact@experioverse.com)

Thank you for helping us create workplaces where people love to belong! 🚀
