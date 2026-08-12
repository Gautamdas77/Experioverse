import Link from 'next/link';
import { Section, SectionHeader } from './components';
import Button, { PhoneIcon, ArrowIcon } from './components/Button';
import SolutionsCarousel from './components/SolutionsCarousel';
import HeroSection from './components/HeroSection';

/* ─── Experience Categories Data ─── */
const categories = [
  {
    name: 'Celebrate',
    initial: 'C',
    color: 'var(--ev-celebrate)',
    tagline: 'Milestones, festivals, awards — moments worth remembering.',
    href: '/experiences#celebrate',
  },
  {
    name: 'Connect',
    initial: 'C',
    color: 'var(--ev-connect)',
    tagline: 'Team building, indoor & outdoor activities that bring people together.',
    href: '/experiences#connect',
  },
  {
    name: 'Move',
    initial: 'M',
    color: 'var(--ev-move)',
    tagline: 'Sports, fitness challenges, yoga — get your team moving.',
    href: '/experiences#move',
  },
  {
    name: 'Reset',
    initial: 'R',
    color: 'var(--ev-reset)',
    tagline: 'Wellness, mindfulness, stress management — recharge your people.',
    href: '/experiences#reset',
  },
  {
    name: 'Explore',
    initial: 'E',
    color: 'var(--ev-explore)',
    tagline: 'Offsites, retreats, travel — experiences beyond the office.',
    href: '/experiences#explore',
  },
];

/* ─── Calendar Data ─── */
const calendarData = [
  { month: 'January', experience: 'Team Activity', abbr: 'JAN' },
  { month: 'February', experience: 'Fitness Challenge', abbr: 'FEB' },
  { month: 'March', experience: 'Wellness Session', abbr: 'MAR' },
  { month: 'April', experience: 'Sports Event', abbr: 'APR' },
  { month: 'May', experience: 'Company Celebration', abbr: 'MAY' },
  { month: 'June', experience: 'Team Building', abbr: 'JUN' },
  { month: 'July', experience: 'Outdoor Activity', abbr: 'JUL' },
  { month: 'August', experience: 'Collaboration Activity', abbr: 'AUG' },
  { month: 'September', experience: 'Wellness Week', abbr: 'SEP' },
  { month: 'October', experience: 'Festival Celebration', abbr: 'OCT' },
  { month: 'November', experience: 'Corporate Offsite', abbr: 'NOV' },
  { month: 'December', experience: 'Annual Celebration', abbr: 'DEC' },
];

/* ─── Differentiators ─── */
const differentiators = [
  {
    title: 'Not Just Events',
    desc: 'We design employee experiences tailored to your company\'s unique culture and requirements.',
    num: '01',
  },
  {
    title: 'One Partner',
    desc: 'Events + Engagement + Wellness + Sports + Offsites + Experiences — all under one roof.',
    num: '02',
  },
  {
    title: 'Year-Round Approach',
    desc: 'We build a complete employee experience calendar — not just one-off events.',
    num: '03',
  },
  {
    title: 'Measurable Impact',
    desc: 'We collect employee feedback and participation data to show real outcomes.',
    num: '04',
  },
  {
    title: 'Curated Experiences',
    desc: 'We work with selected trainers, facilitators, artists, coaches, venues and partners.',
    num: '05',
  },
];

/* ─── Process Steps ─── */
const processSteps = [
  { step: '01', title: 'Understand', desc: 'Your company requirements' },
  { step: '02', title: 'Design', desc: 'The right experience' },
  { step: '03', title: 'Plan', desc: 'Activities, people & venues' },
  { step: '04', title: 'Execute', desc: 'Complete experience management' },
  { step: '05', title: 'Feedback', desc: 'Measure outcome & impact' },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════ HERO SECTION ═══════ */}
      <HeroSection />

      {/* ═══════ WHO WE ARE ═══════ */}
      <section className="relative py-28 bg-white overflow-hidden" id="who-we-are">
        {/* Decorative background accent */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(var(--ev-accent-rgb, 99,102,241),0.06) 0%, transparent 70%)',
            transform: 'translate(-30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(var(--ev-gold-rgb, 234,179,8),0.05) 0%, transparent 70%)',
            transform: 'translate(30%, 30%)',
          }}
        />

        <div className="ev-container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Label */}
            <p
              id="who-we-are-label"
              className="text-base sm:text-lg font-bold uppercase tracking-[0.2em] mb-5"
              style={{ color: 'var(--ev-accent)' }}
            >
              Who We Are
            </p>

            {/* Headline */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] mb-8"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--ev-navy)' }}
            >
              More Than Events.{' '}
              <span
                className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent"
              >
                We Create Experiences.
              </span>
            </h2>

            {/* Body copy */}
            <div className="space-y-5 text-lg text-ev-gray-400 leading-relaxed">
              <p>
                The best workplaces aren&apos;t built in meeting rooms — they&apos;re built through
                shared experiences.
              </p>
              <p>
                At <strong className="text-ev-navy font-semibold">ExperioVerse</strong>, we help
                organizations create moments that spark connection, celebrate people, and build
                cultures employees genuinely enjoy being part of.
              </p>
              <p>
                Whether it&apos;s an offsite, a wellness week, or an annual celebration, every
                experience is designed with one goal:
              </p>
            </div>

            {/* Pull-quote closer */}
            <div
              className="mt-10 inline-block px-8 py-5 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, var(--ev-accent) 0%, var(--ev-gold) 100%)',
              }}
            >
              <p
                className="text-xl sm:text-2xl font-bold text-white tracking-wide"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Make work feel more human.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHY EMPLOYEE EXPERIENCE MATTERS ═══════ */}
      <section
        className="relative py-28 overflow-hidden"
        id="why-ee-matters"
        style={{ background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 100%)' }}
      >
        {/* Decorative orbs */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, var(--ev-accent) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-10"
          style={{
            background: 'radial-gradient(circle, var(--ev-gold) 0%, transparent 70%)',
            transform: 'translate(-30%, 30%)',
          }}
        />

        <div className="ev-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: Text ── */}
            <div>
              <p
                className="text-base sm:text-lg font-bold uppercase tracking-[0.2em] mb-5"
                style={{ color: 'var(--ev-accent)' }}
              >
                Why Employee Experience Matters
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] mb-8"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Because Great Businesses Are Built by{' '}
                <span
                  className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent"
                >
                  Engaged People.
                </span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-10">
                Employees who feel appreciated don&apos;t just stay longer — they contribute more,
                collaborate better, and become ambassadors of your culture.
              </p>

              {/* Closing statement */}
              <div
                className="inline-block px-6 py-4 rounded-xl border"
                style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
              >
                <p
                  className="text-lg font-semibold text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  When employees thrive,{' '}
                  <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
                    businesses grow.
                  </span>
                </p>
              </div>
            </div>

            {/* ── Right: Benefits list ── */}
            <div>
              <p
                className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-6"
              >
                A Strong Employee Experience Helps You
              </p>
              <ul className="space-y-4">
                {[
                  'Build a positive workplace culture',
                  'Increase employee engagement',
                  'Improve retention and loyalty',
                  'Strengthen collaboration across teams',
                  'Boost productivity and motivation',
                  'Create memorable workplace moments',
                  'Support employee well-being',
                  'Enhance employer branding',
                ].map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-4 group"
                  >
                    {/* Check icon */}
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, var(--ev-accent), var(--ev-gold))' }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-base text-white/75 group-hover:text-white transition-colors duration-200">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════ OFFERED SOLUTIONS ═══════ */}
      <SolutionsCarousel />




      {/* ═══════ ANNUAL CALENDAR ═══════ */}
      <section id="annual-calendar" className="relative py-24 overflow-hidden" style={{ background: '#060c18' }}>
        {/* Hero-matched ambient glowing blobs */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)',
            filter: 'blur(50px)',
            transform: 'translate(20%, -20%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(224,122,95,0.15) 0%, transparent 65%)',
            filter: 'blur(50px)',
            transform: 'translate(-20%, 20%)',
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
            backgroundSize: '44px 44px',
          }}
        />

        <div className="ev-container relative z-10">
          <SectionHeader
            label="Year-Round Experiences"
            title="Annual Employee Experience Calendar"
            subtitle="Plan meaningful experiences for your team throughout the year. We help you build a complete employee experience calendar."
            light={true}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {calendarData.map((item) => (
              <div
                key={item.month}
                className="rounded-xl p-4 text-center transition-all duration-300 group cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="text-sm font-bold mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: '#f1f5f9',
                  }}
                >
                  {item.month}
                </div>
                <div className="text-xs font-medium" style={{ color: 'rgba(241,245,249,0.65)' }}>
                  {item.experience}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<PhoneIcon size={18} />}
              id="calendar-cta"
            >
              Create My Employee Experience Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-24 bg-white border-t border-gray-100 overflow-hidden" id="final-cta">
        {/* Warm glow background accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(224,122,95,0.06) 0%, rgba(212,168,67,0.04) 50%, transparent 80%)',
          }}
        />
        <div className="ev-container relative z-10 text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-ev-navy mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to Create Meaningful{' '}
            <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
              Employee Experiences?
            </span>
          </h2>
          <p className="text-lg text-ev-gray-400 max-w-xl mx-auto mb-10">
            Let&apos;s discuss how Experio Verse can help your team connect, engage, and grow together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<PhoneIcon size={18} />}
              id="final-cta-call"
            >
              Request a Call
            </Button>
            <Button
              href="/about"
              variant="secondary"
              size="lg"
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
