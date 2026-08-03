# 🌌 Experio Verse — Corporate Employee Experience Platform

> **Where Employee Experience Comes to Life.**  
> A modern, premium B2B corporate employee experience website designed to showcase engagement, wellness, sports, celebrations, and offsite services while capturing qualified enterprise leads.

---

## 📌 Project Overview

**Experio Verse** is a premier Corporate Employee Experience Company. This web platform serves as a digital showcase and lead generation hub for HR leaders, People & Culture teams, Founders, and Business Heads looking to build stronger workplace cultures through curated year-round experiences.

### Key Objectives
* 🏢 **Corporate Showcase**: Clearly articulate company identity, vision, mission, and unique value proposition.
* 🎯 **5 Core Experience Categories**: Showcase curated services under *Celebrate*, *Connect*, *Move*, *Reset*, and *Explore*.
* 📅 **Annual Calendar**: Highlight 12-month structured employee experience roadmaps.
* 📩 **Lead Capture**: High-converting, multi-touchpoint **"Request a Call"** enquiry engine.

---

## 🛠️ Technology Stack

| Layer | Technology | Description |
|---|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (React 19) | App Router, Server-side rendering, file-based routing |
| **Styling & UI** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS | Premium design system, glassmorphic UI, responsive layouts |
| **Icons & Typography** | [Lucide Icons](https://lucide.dev/) / Google Fonts | Modern corporate aesthetic |
| **Form & Lead Handling** | Web3Forms / Formspree Integration | Secure lead submission, spam protection, instant notification |
| **Lead Storage** | Google Sheets API Integration | Automated lead logging and CRM preparation |
| **Deployment** | [Vercel](https://vercel.com/) | Edge CDN, automatic HTTPS, CI/CD pipeline |
| **SEO & Metadata** | Next.js Metadata API | Open Graph, JSON-LD structured data, dynamic SEO tags |

---

## 🌐 Site Structure & Features

```
Experio Verse
├── 🏠 Home Page
│   ├── Hero Section ("Where Employee Experience Comes to Life")
│   ├── What We Do Overview
│   ├── 5 Experience Category Cards
│   ├── 12-Month Employee Experience Calendar
│   ├── Why Experio Verse (Summary)
│   └── Process Flow (Summary)
├── ℹ️ About Us
│   ├── Who We Are, Vision & Mission
│   └── Founders & Leadership Team
├── 🎭 Our Experiences
│   ├── 🎉 CELEBRATE (Anniversaries, Annual Days, Festivals, Office Parties)
│   ├── 🤝 CONNECT (Team Building, Competitions, Indoor/Outdoor Games)
│   ├── 🏃 MOVE (Sports Tournaments, Fitness Challenges, Yoga, Running)
│   ├── 🧘 RESET (Mental Wellness, Stress Mgmt, Mindfulness, Meditation)
│   └── 🌍 EXPLORE (Offsites, Corporate Trips, Adventure Retreats)
├── 🔄 How We Work (5-Step Visual Process: Understand → Design → Plan → Execute → Feedback)
├── ✨ Why Experio Verse (Key Differentiators & Year-Round Partnership)
└── 📞 Contact & Request a Call (Enterprise Enquiry Form + Contact Info)
```

---

## 📁 Repository Structure

```
Experioverse/
├── REQUIREMENTS.md          # Single source of truth & detailed specification blueprint
├── README.md                # Project documentation (this file)
├── package.json             # App dependencies & scripts
├── next.config.mjs          # Next.js configuration
├── public/                  # Static assets & brand icons
└── src/
    └── app/
        ├── about/               # About Us Page Route
        ├── components/          # Reusable UI Components (Header, Footer, Form, Cards)
        ├── contact/             # Contact / Request a Call Page Route
        ├── experiences/         # 5 Experience Categories Page Route
        ├── how-we-work/         # How We Work Page Route
        ├── why-experio-verse/   # Why Experio Verse Page Route
        ├── globals.css          # Global Styles & Theme Variables
        ├── layout.js            # Root Layout Component
        └── page.js              # Home Page Component
```

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18.0.0 or higher)
* `npm` or `yarn` or `pnpm`

### Installation & Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Gautamdas77/Experioverse.git
   cd Experioverse
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:  
   Visit `http://localhost:3000` to view the running application.

---

## 🏷️ Commit Stage Info

* ✅ Full Next.js 16 + Tailwind CSS app architecture at root directory.
* ✅ All 6 primary pages and components configured.
* ✅ Vercel zero-config auto-deployment support enabled.
* ✅ Complete requirements blueprint (`REQUIREMENTS.md`) and project documentation (`README.md`) included.

---

## 📄 License & Ownership

© 2026 **Experio Verse**. All Rights Reserved.  
Developed for corporate employee experience management and lead generation.
