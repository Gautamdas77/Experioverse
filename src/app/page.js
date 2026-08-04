import Link from 'next/link';
import { Section, SectionHeader } from './components';
import Button, { PhoneIcon, ArrowIcon } from './components/Button';

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
      <section className="relative min-h-[100vh] flex items-center ev-gradient-hero overflow-hidden" id="hero">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        {/* Gradient orbs */}
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-ev-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-ev-blue/10 rounded-full blur-[100px]" />

        <div className="ev-container relative z-10 py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="ev-badge bg-white/10 text-white/80 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-ev-accent animate-pulse" />
              Corporate Employee Experience
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Where Employee Experience{' '}
              <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
                Comes to Life.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
              We create meaningful experiences that help employees connect, engage, move, celebrate and explore together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<PhoneIcon size={18} />}
                id="hero-request-call"
              >
                Request a Call
              </Button>
              <Button
                href="/experiences"
                variant="outline"
                size="lg"
                icon={<ArrowIcon size={18} />}
                id="hero-explore"
              >
                Explore Experiences
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex items-center gap-8 flex-wrap">
              {['Employee Engagement', 'Corporate Events', 'Wellness Programs', 'Team Building'].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/40"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-ev-accent">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHAT WE DO ═══════ */}
      <Section id="what-we-do" gradient>
        <SectionHeader
          label="What We Do"
          title="Crafting Experiences That Matter"
          subtitle="Experio Verse helps companies create better employee experiences through corporate events, employee engagement, wellness, sports, team-building, celebrations and corporate experiences."
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: '5', label: 'Experience Categories' },
            { number: '30+', label: 'Activity Types' },
            { number: '12', label: 'Months Coverage' },
            { number: '1', label: 'Trusted Partner' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white border border-ev-gray-100 shadow-sm"
            >
              <div
                className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.number}
              </div>
              <div className="text-sm text-ev-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ FIVE EXPERIENCE CATEGORIES ═══════ */}
      <Section id="experience-categories">
        <SectionHeader
          label="Our Experiences"
          title="Five Ways to Elevate Your Workplace"
          subtitle="From celebrations to wellness, from team building to travel — we cover every dimension of the employee experience."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="ev-card group p-6 flex flex-col items-start relative overflow-hidden"
              id={`cat-card-${cat.name.toLowerCase()}`}
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                style={{ backgroundColor: cat.color }}
              />

              {/* Name */}
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-heading)', color: cat.color }}
              >
                {cat.name}
              </h3>

              {/* Tagline */}
              <p className="text-sm text-ev-gray-400 leading-relaxed mb-4 flex-1">
                {cat.tagline}
              </p>

              {/* Arrow */}
              <div
                className="flex items-center gap-1 text-sm font-semibold transition-all duration-200 group-hover:gap-2"
                style={{ color: cat.color }}
              >
                Explore
                <ArrowIcon size={14} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ═══════ ANNUAL CALENDAR ═══════ */}
      <Section id="annual-calendar" dark>
        <SectionHeader
          label="Year-Round Experiences"
          title="Annual Employee Experience Calendar"
          subtitle="Plan meaningful experiences for your team throughout the year. We help you build a complete employee experience calendar."
          light
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {calendarData.map((item) => (
            <div
              key={item.month}
              className="ev-glass rounded-xl p-4 text-center hover:bg-white/12 transition-all duration-300 group cursor-default"
            >
              <div className="text-sm font-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                {item.month}
              </div>
              <div className="text-xs text-white/50">{item.experience}</div>
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
      </Section>

      {/* ═══════ WHY EXPERIO VERSE ═══════ */}
      <Section id="why-us" gradient>
        <SectionHeader
          label="Why Experio Verse"
          title="Your Complete Employee Experience Partner"
          subtitle="We're not just another event company. We're your strategic partner in building a stronger workplace culture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, i) => (
            <div
              key={diff.title}
              className={`ev-card p-8 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {diff.title}
              </h3>
              <p className="text-sm text-ev-gray-400 leading-relaxed">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/why-experio-verse" variant="secondary" size="md" icon={<ArrowIcon size={16} />}>
            Learn More
          </Button>
        </div>
      </Section>

      {/* ═══════ HOW WE WORK ═══════ */}
      <Section id="how-we-work">
        <SectionHeader
          label="How We Work"
          title="From Understanding to Impact"
          subtitle="A structured, five-step approach to creating the right experience for your team."
        />

        <div className="flex flex-col md:flex-row items-stretch gap-4">
          {processSteps.map((step, i) => (
            <div key={step.step} className="flex-1 flex flex-col items-center">
              {/* Step card */}
              <div className="ev-card p-6 text-center w-full flex-1 relative group">
                <div
                  className="text-ev-accent/30 text-sm font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  STEP {step.step}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-ev-gray-400">{step.desc}</p>
              </div>

              {/* Arrow connector (not after last) */}
              {i < processSteps.length - 1 && (
                <div className="hidden md:flex items-center justify-center py-2 text-ev-gray-200">
                  {/* Rendered via CSS or inline icon */}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/how-we-work" variant="secondary" size="md" icon={<ArrowIcon size={16} />}>
            See Our Full Process
          </Button>
        </div>
      </Section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="relative py-24 ev-gradient-hero overflow-hidden" id="final-cta">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="ev-container relative z-10 text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to Create Meaningful{' '}
            <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
              Employee Experiences?
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-10">
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
              variant="outline"
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
