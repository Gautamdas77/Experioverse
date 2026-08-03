# EXPERIO VERSE — Website Requirements & Development Reference

> **This document is the single source of truth for the Experio Verse website build.**
> Every development phase must refer back to this file to ensure consistency, completeness, and alignment with the client's objectives.

---

## 1. Project Identity

| Field | Value |
|---|---|
| **Project Name** | Experio Verse |
| **Company Type** | Corporate Employee Experience Company |
| **Website Type** | Business + Lead Generation (B2B) |
| **Primary Goal** | Showcase services & convert visitors into qualified corporate leads |
| **Target Audience** | HR leaders, People & Culture teams, Admins, Founders, Business Heads |
| **Brand Personality** | Modern · Premium · Professional · Human · Energetic · Corporate · Clean |

---

## 2. Core Objectives

### 2.1 Showcase the Company
- Explain who Experio Verse is
- Explain what they do
- Show services & five experience categories
- Explain why companies should partner with them

### 2.2 Generate Leads
- Allow visitors to **Request a Call**
- Collect company details & requirement info
- Send enquiry to the team for follow-up
- Store leads for tracking

---

## 3. Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend Framework | **Next.js (React)** | SSR, fast loading, SEO-friendly, file-based routing |
| Styling | **Tailwind CSS** | Modern, responsive, premium design system |
| Lead Form Handling | **Web3Forms / Formspree** | Secure submission, spam protection, instant email notification |
| Lead Storage | **Google Sheets** (via API / integration) | Simple, accessible lead tracking for V1 |
| Hosting | **Vercel** | Global CDN, automatic SSL/HTTPS, CI/CD |
| Analytics | **Google Analytics + Search Console** | Visitor tracking, search performance |

---

## 4. Site Map — Version 1

```
Home
├── Hero Section
├── What We Do
├── Five Experience Categories (summary cards)
├── Annual Employee Experience Calendar
├── Why Experio Verse
├── How We Work
└── CTA → Request a Call

About Us
├── Who We Are
├── Our Vision
├── Our Mission
└── Our Founders

Our Experiences / Services
├── CELEBRATE
├── CONNECT
├── MOVE
├── RESET
└── EXPLORE

How We Work
└── 5-step visual flow

Why Experio Verse
└── Key differentiators

Contact / Request a Call
├── Enquiry Form
├── Email
├── Phone
├── Location
└── Social Media Links
```

---

## 5. Page-by-Page Content & Requirements

### 5.1 HOME PAGE

#### Hero Section
- **Headline:** "Where Employee Experience Comes to Life."
- **Subheadline:** "We create meaningful experiences that help employees connect, engage, move, celebrate and explore together."
- **CTA Buttons:**
  - `Request a Call` → Opens enquiry form / navigates to contact
  - `Explore Experiences` → Scrolls / navigates to experiences section

#### What We Do Section
- **Copy:** "Experio Verse helps companies create better employee experiences through corporate events, employee engagement, wellness, sports, team-building, celebrations and corporate experiences."

#### Five Experience Categories (Summary Cards)
- Show all 5 categories (Celebrate, Connect, Move, Reset, Explore) as visual cards
- Each card: Image + Name + Short tagline + CTA to full category page

#### Annual Employee Experience Calendar
- Visual calendar/table showing 12 months of example experiences:

| Month | Example Experience |
|---|---|
| January | Team Activity |
| February | Fitness Challenge |
| March | Wellness Session |
| April | Sports Event |
| May | Company Celebration |
| June | Team Building |
| July | Outdoor Activity |
| August | Collaboration Activity |
| September | Wellness Week |
| October | Festival Celebration |
| November | Corporate Offsite |
| December | Annual Celebration |

- **CTA:** "Create My Employee Experience Calendar" → Opens enquiry form

#### Why Experio Verse (Summary)
- Brief version of differentiators (links to full page)

#### How We Work (Summary)
- Brief visual flow (links to full page)

---

### 5.2 ABOUT US PAGE

#### Who We Are
"Experio Verse is a Corporate Employee Experience Company helping organisations create meaningful experiences for their employees."

#### Our Vision
"To become a trusted partner for companies looking to create stronger workplace cultures through meaningful and memorable employee experiences."

#### Our Mission
"To help employees connect, engage, move, celebrate and experience their workplace better."

#### Our Founders
- Placeholder section for founder names, photos, and bios
- Must be easily editable (content comes from client)

---

### 5.3 OUR EXPERIENCES / SERVICES PAGE

Five experience categories, each with sub-services. Each sub-service needs:
- **Image** (placeholder / AI-generated for V1)
- **Short Description**
- **Explore / Enquire Button** → Opens enquiry form or navigates to contact

#### CELEBRATE 🎉
| # | Sub-Service |
|---|---|
| 1 | Company Anniversary |
| 2 | Annual Day |
| 3 | Awards |
| 4 | Festival Celebrations |
| 5 | Office Parties |
| 6 | Family Days |

#### CONNECT 🤝
| # | Sub-Service |
|---|---|
| 1 | Team Building |
| 2 | Indoor Activities |
| 3 | Outdoor Activities |
| 4 | Treasure Hunts |
| 5 | Team Competitions |
| 6 | Sports Activities |

#### MOVE 🏃
| # | Sub-Service |
|---|---|
| 1 | Sports Tournaments |
| 2 | Fitness Challenges |
| 3 | Yoga |
| 4 | Zumba |
| 5 | Running |
| 6 | Physical Activities |

#### RESET 🧘
| # | Sub-Service |
|---|---|
| 1 | Mental Wellness |
| 2 | Stress Management |
| 3 | Mindfulness |
| 4 | Meditation |
| 5 | Burnout Awareness |
| 6 | Financial Wellness |

#### EXPLORE 🌍
| # | Sub-Service |
|---|---|
| 1 | Corporate Trips |
| 2 | Offsites |
| 3 | Adventure Experiences |
| 4 | Leadership Retreats |
| 5 | Cultural Experiences |
| 6 | Story-driven Travel |

---

### 5.4 HOW WE WORK PAGE

5-step visual process flow:

```
Understand → Design → Plan → Execute → Feedback
```

| Step | Title | Description |
|---|---|---|
| 1 | **Understand** | Understand company requirements |
| 2 | **Design** | Create the right experience |
| 3 | **Plan** | Arrange activities, people, venues and other requirements |
| 4 | **Execute** | Manage the complete experience |
| 5 | **Feedback** | Collect feedback and understand the outcome |

- Visual treatment: Step-by-step flow with icons/illustrations, arrows or connecting lines
- Should feel like a professional process, not a generic timeline

---

### 5.5 WHY EXPERIO VERSE PAGE

Key differentiators — each needs a headline + supporting copy:

| # | Differentiator | Description |
|---|---|---|
| 1 | **Not Just Events** | We design employee experiences according to company requirements |
| 2 | **One Partner** | Events + Engagement + Wellness + Sports + Offsites + Experiences — all under one roof |
| 3 | **Year-Round Approach** | We create a complete employee experience calendar |
| 4 | **Measurable** | We collect employee feedback and participation data |
| 5 | **Curated Experiences** | We work with selected trainers, facilitators, artists, coaches, venues and partners |

---

### 5.6 CONTACT / REQUEST A CALL PAGE

#### Enquiry Form (CRITICAL FEATURE)

> **IMPORTANT:** The Request a Call form is the **most important conversion element** on the entire website.
> It must be prominent, frictionless, and accessible from multiple touchpoints.

**Form Fields:**

| Field | Type | Required | Options/Notes |
|---|---|---|---|
| Name | Text | ✅ | — |
| Work Email | Email | ✅ | Validate email format |
| Phone Number | Phone/Tel | ✅ | — |
| Company Name | Text | ✅ | — |
| Designation | Dropdown/Text | ❌ | HR, People & Culture, Admin, Founder, Business Head, Other |
| Company Size | Dropdown | ✅ | 1–50, 51–100, 101–500, 501–1000, 1000+ |
| What are you interested in? | Multi-select checkboxes | ❌ | See interest options below |
| Tell us about your requirement | Textarea | ❌ | — |
| Preferred Call Time | Text/Datetime | ❌ | — |

**Interest Options (Multi-select):**
1. Employee Engagement
2. Corporate Events
3. Team Building
4. Sports & Fitness
5. Wellness
6. Mental Wellness
7. Corporate Offsite
8. Corporate Trips
9. Annual Employee Experience Calendar
10. Other

**Submit Button Label:** "Request a Call"

#### After Submission
- Show confirmation: **"Thank You! We have received your request. Our team will contact you shortly."**
- Clear / reset the form
- Optionally redirect or show a thank-you state

#### Contact Info (displayed alongside or near the form)
- Official Experio Verse email (client to provide)
- Official business phone number (client to provide)
- Office / operating location (client to provide)
- Social media links (client to provide)

---

## 6. Lead Management

### 6.1 Email Notification
On every form submission, send an email to Experio Verse containing:
- Name, Email, Phone, Company, Designation
- Company Size, Services Interested In
- Requirement details, Preferred Call Time
- Date & Time of Submission

### 6.2 Lead Storage (Google Sheets for V1)

| Column | Example |
|---|---|
| Name | Rahul Sharma |
| Company | ABC Technologies |
| Email | rahul@company.com |
| Phone | XXXXXXXXXX |
| Designation | HR |
| Company Size | 101–500 |
| Interest | Team Building |
| Requirement | Annual team event |
| Preferred Call Time | 10 AM – 12 PM |
| Date | Submission timestamp |
| Status | New |

**Lead Status Workflow:** `New → Contacted → Qualified → Proposal → Won / Lost`

---

## 7. Global UI / UX Requirements

### 7.1 Header (All Pages)
- Experio Verse logo (left)
- Navigation links: Home, About Us, Experiences, How We Work, Why Experio Verse, Contact
- **Request a Call** button (prominent, always visible — especially on mobile)
- Mobile: Hamburger menu with Request a Call button still visible/accessible

### 7.2 Footer (All Pages)
- Company name & tagline
- Quick links to all pages
- Contact info (email, phone)
- Social media icons
- Copyright notice
- Links to Privacy Policy & Terms and Conditions (pages can be placeholder for V1)

### 7.3 Design Principles

> **CAUTION:** DO NOT make this look like a typical party/event management website.
> This is a **corporate B2B** site. It must feel **premium, professional, and human**.

- **Color Palette:** Sophisticated, corporate-yet-warm tones. Avoid generic bright party colors. Think deep blues, warm neutrals, accent golds/terracottas, or similar premium palettes.
- **Typography:** Modern, clean fonts (e.g., Inter, Outfit, or similar from Google Fonts). Strong hierarchy.
- **Imagery:** High-quality photos showing employees, teams, corporate activities, sports, wellness, celebrations, travel, team interactions. Use AI-generated images for V1 placeholders.
- **Spacing:** Generous whitespace. Let the content breathe.
- **Animations:** Subtle micro-animations on scroll, hover, and interaction. Nothing flashy or distracting.
- **Glassmorphism / Modern Effects:** Use sparingly for cards or CTAs to add depth.

### 7.4 Responsiveness
- **Mobile-first** approach
- Must work flawlessly on: Mobile, Tablet, Laptop, Desktop
- **Request a Call** button must be easy to find on every device size

---

## 8. SEO Requirements

### 8.1 Target Keywords
- Corporate Employee Experience
- Employee Engagement
- Corporate Events
- Employee Wellness
- Corporate Team Building
- Corporate Offsite
- Corporate Activities
- Employee Experience Company India

### 8.2 SEO Implementation
- Proper `<title>` tags per page (editable)
- `<meta description>` per page (editable)
- Single `<h1>` per page with proper H1 → H2 → H3 hierarchy
- Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`)
- Descriptive `alt` text on all images
- Clean, readable URLs (e.g., `/about`, `/experiences`, `/contact`)
- Open Graph meta tags for social sharing
- Structured data (JSON-LD) for organization info

---

## 9. Technical Requirements

### 9.1 Performance
- Fast loading (target < 3s initial load)
- Optimized images (Next.js Image component, WebP, lazy loading)
- Code splitting (automatic with Next.js)
- Minified CSS/JS in production

### 9.2 Security
- HTTPS / SSL (automatic with Vercel)
- Secure form submission (HTTPS + validation)
- Spam protection on forms (honeypot field + reCAPTCHA or Web3Forms built-in)
- Input sanitization

### 9.3 Analytics
- Google Analytics 4 (GA4) tracking
- Google Search Console integration
- Track: page views, Request a Call clicks, form submissions, contact clicks

### 9.4 Legal Pages (V1 — placeholder)
- Privacy Policy page
- Terms & Conditions page

---

## 10. User Flow

```
Visitor lands on Homepage
    → Understands what Experio Verse does
    → Explores experience categories
    → Sees the process (How We Work)
    → Understands the value (Why Experio Verse)
    → Clicks "Request a Call"
    → Fills out the enquiry form
    → Submits
    → Sees confirmation message
    → Experio Verse team receives email + lead stored in Google Sheets
    → Team contacts the lead
    → Requirement discussion → Proposal → Client
```

---

## 11. "Request a Call" Button Placement

The Request a Call CTA must appear in:
1. ✅ **Header** (persistent across all pages)
2. ✅ **Hero Section** on homepage
3. ✅ **Each experience category** has an Enquire button
4. ✅ **Annual Calendar section** ("Create My Employee Experience Calendar")
5. ✅ **Contact page** (full form)
6. ✅ **Footer** (link or button)
7. ✅ **Mobile** — sticky or easily accessible

---

## 12. Future Roadmap (NOT in V1 — but architecture should allow)

- CRM integration (HubSpot, Zoho, etc.)
- Client login & dashboard
- Employee feedback collection
- Experience booking system
- Annual experience calendar management tool
- Employee Experience Score & reporting
- Online payment integration
- Vendor management portal
- Backend database & API (replacing Google Sheets)
- Blog / Insights section
- Case Studies & Gallery

---

## 13. Development Phases

### Phase 1 — Project Setup & Structure
- Initialize Next.js project with Tailwind CSS
- Set up folder structure, routing, layout components
- Configure fonts, color tokens, design system basics
- Create shared components: Header, Footer, Button, Section wrappers

### Phase 2 — Page Shells & Content
- Build all 6 page routes with semantic HTML and real content
- Implement navigation and linking
- Mobile-responsive layout for all pages

### Phase 3 — Visual Design & Polish
- Apply premium styling, typography, color palette
- Add imagery (AI-generated placeholders)
- Implement micro-animations, hover effects, scroll reveals
- Ensure consistent design language across all pages

### Phase 4 — Form & Lead System
- Build the Request a Call form with full validation
- Integrate form submission service (Web3Forms / Formspree)
- Set up email notifications
- Connect Google Sheets for lead storage
- Add spam protection
- Test end-to-end form flow

### Phase 5 — SEO, Analytics & Final Polish
- Add all meta tags, structured data, Open Graph tags
- Set up Google Analytics & Search Console
- Performance audit & optimization
- Cross-device & cross-browser testing
- Accessibility review
- Create Privacy Policy & Terms placeholder pages

### Phase 6 — Launch
- Connect custom domain
- Final production build & deploy to Vercel
- Verify SSL, analytics, form submissions on live site
- Handoff documentation

---

## 14. Content Pending from Client

> **WARNING:** The following items are needed from the Experio Verse team before or during development.
> AI-generated placeholders will be used where possible for V1.

- [ ] Company logo (high resolution, SVG preferred)
- [ ] Founder names, photos, and bios
- [ ] High-quality photos for each experience category
- [ ] Team photos
- [ ] Final approved copy per page (or approval to use draft copy from requirements doc)
- [ ] Business email address
- [ ] Business phone number
- [ ] Office / operating location
- [ ] Social media links (LinkedIn, Instagram, Twitter, etc.)
- [ ] Domain name (or authorization to register one)
- [ ] Google Analytics property ID
- [ ] Google Search Console verification method
- [ ] Web3Forms / Formspree access key
- [ ] Email address for receiving lead notifications

---

## 15. Success Criteria

The website is considered successfully delivered when:

1. ✅ All 6 pages are live and fully responsive
2. ✅ Request a Call form works end-to-end (submit → email → Google Sheets)
3. ✅ Design feels premium, modern, and distinctly corporate (NOT party/event-like)
4. ✅ SEO basics are in place (meta tags, semantic HTML, clean URLs)
5. ✅ Google Analytics is tracking
6. ✅ Site loads fast (< 3s on 4G)
7. ✅ SSL/HTTPS is active
8. ✅ Mobile experience is excellent
9. ✅ A visiting company should think: *"Experio Verse can understand our employee needs and create the right experience for our people."*

---

## 16. Design Impression Goal

> The website should make a company think:
>
> **"Experio Verse can understand our employee needs and create the right experience for our people."**

This is not just an event company. This is a **Corporate Employee Experience Partner**. The design, copy, imagery, and interaction must all reinforce this positioning.

---

*Document Version: 1.0*
*Created: July 31, 2026*
*Last Updated: July 31, 2026*
