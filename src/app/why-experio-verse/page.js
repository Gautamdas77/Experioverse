import { Section, SectionHeader } from '../components';
import Button, { PhoneIcon, ArrowIcon } from '../components/Button';

export const metadata = {
  title: 'Why Experio Verse',
  description:
    'Why companies choose Experio Verse — not just events, one partner for all experiences, year-round approach, measurable impact, and curated experiences.',
};

const differentiators = [
  {
    num: '01',
    title: 'We Don\'t Just Organise Events',
    subtitle: 'We design employee experiences.',
    description:
      'Most companies treat employee experiences as one-off events — a team lunch here, a yearly party there. We take a different approach. We understand your company\'s culture, challenges, and goals, then design experiences that genuinely move the needle on engagement, connection, and belonging.',
    highlights: [
      'Every experience is customised to your company',
      'We align activities with your cultural values',
      'We focus on outcomes, not just logistics',
      'Your employees feel the difference',
    ],
    color: 'var(--ev-accent)',
  },
  {
    num: '02',
    title: 'One Partner for Everything',
    subtitle: 'Events + Engagement + Wellness + Sports + Offsites + Experiences.',
    description:
      'Instead of coordinating with five different vendors for five different needs, you get one trusted partner who understands your company and handles everything. From a Monday wellness session to a weekend corporate offsite — one relationship, consistent quality.',
    highlights: [
      'No vendor fatigue or coordination overhead',
      'Consistent quality across all experiences',
      'Deep understanding of your company over time',
      'Single point of contact for everything',
    ],
    color: 'var(--ev-blue)',
  },
  {
    num: '03',
    title: 'A Year-Round Approach',
    subtitle: 'Not one event. A complete employee experience calendar.',
    description:
      'Great employee experiences don\'t happen once a year. We help companies plan and execute a full calendar of experiences — month by month — ensuring consistent engagement, not temporary excitement.',
    highlights: [
      '12-month experience calendar',
      'Monthly touchpoints with your employees',
      'Seasonal and cultural alignment',
      'Builds sustained engagement over time',
    ],
    color: 'var(--ev-gold)',
  },
  {
    num: '04',
    title: 'Measurable Impact',
    subtitle: 'We collect employee feedback and participation data.',
    description:
      'We believe in accountability. After every experience, we collect structured feedback from participants, track participation rates, and provide you with clear reports. You know exactly what worked, what didn\'t, and what to do next.',
    highlights: [
      'Post-experience feedback surveys',
      'Participation rate tracking',
      'Detailed experience reports',
      'Actionable insights & recommendations',
    ],
    color: 'var(--ev-move)',
  },
  {
    num: '05',
    title: 'Curated Experiences',
    subtitle: 'Handpicked trainers, facilitators, artists, coaches, venues & partners.',
    description:
      'We don\'t work with just anyone. Our network of partners — trainers, facilitators, artists, coaches, and venues — is carefully curated for quality, reliability, and the kind of professionalism your employees deserve.',
    highlights: [
      'Vetted, experienced partners',
      'Specialists for every experience type',
      'Consistent quality assurance',
      'Best-in-class venues and facilitators',
    ],
    color: 'var(--ev-reset)',
  },
];

const comparisonData = [
  { feature: 'Customised to your company', us: true, others: false },
  { feature: 'Year-round experience calendar', us: true, others: false },
  { feature: 'Single partner for all needs', us: true, others: false },
  { feature: 'Post-event feedback & data', us: true, others: false },
  { feature: 'Curated, vetted partners', us: true, others: false },
  { feature: 'Corporate-grade professionalism', us: true, others: false },
  { feature: 'Outcome-driven approach', us: true, others: false },
];

export default function WhyExperioVersePage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-36 pb-20 ev-gradient-hero overflow-hidden" id="why-hero">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute bottom-10 left-20 w-[400px] h-[400px] bg-ev-gold/10 rounded-full blur-[120px]" />

        <div className="ev-container relative z-10">
          <div className="max-w-3xl">
            <div className="ev-badge bg-white/10 text-white/80 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-ev-gold" />
              Why Choose Us
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Not Just Events.{' '}
              <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
                Real Experiences.
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              We&apos;re your strategic partner in building a workplace culture where employees feel connected, engaged, and valued — not just another vendor managing a party.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ DIFFERENTIATORS ═══════ */}
      {differentiators.map((diff, i) => (
        <Section
          key={diff.title}
          id={`diff-${i}`}
          gradient={i % 2 === 0}
        >
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? '' : ''}`}>
            <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-extrabold"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {diff.title}
                  </h2>
                  <p className="text-sm font-medium" style={{ color: diff.color }}>
                    {diff.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-ev-gray-500 leading-relaxed text-lg mb-6">
                {diff.description}
              </p>

              <ul className="space-y-3">
                {diff.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-ev-gray-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 mt-0.5" style={{ color: diff.color }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div
                className="aspect-[4/3] rounded-2xl"
                style={{ backgroundColor: `color-mix(in srgb, ${diff.color} 6%, var(--ev-gray-50))` }}
              />
            </div>
          </div>
        </Section>
      ))}

      {/* ═══════ COMPARISON TABLE ═══════ */}
      <Section id="comparison" dark>
        <SectionHeader
          label="The Difference"
          title="Experio Verse vs. Traditional Approach"
          subtitle="See how our approach differs from the typical event management company."
          light
        />

        <div className="max-w-2xl mx-auto">
          <div className="ev-glass rounded-2xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 border-b border-white/10 px-6 py-4">
              <div className="text-sm font-bold text-white/60">Feature</div>
              <div className="text-sm font-bold text-ev-accent text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                Experio Verse
              </div>
              <div className="text-sm font-bold text-white/40 text-center">
                Others
              </div>
            </div>

            {/* Table rows */}
            {comparisonData.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 px-6 py-4 ${
                  i < comparisonData.length - 1 ? 'border-b border-white/5' : ''
                }`}
              >
                <div className="text-sm text-white/70">{row.feature}</div>
                <div className="text-center">
                  <span className="text-ev-accent text-lg">✓</span>
                </div>
                <div className="text-center">
                  <span className="text-white/20 text-lg">✗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════ CTA ═══════ */}
      <Section id="why-cta" gradient>
        <div className="text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Convinced? Let&apos;s talk.
          </h2>
          <p className="text-ev-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Share your requirements and we&apos;ll show you exactly how Experio Verse can help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<PhoneIcon size={18} />}
              id="why-cta-call"
            >
              Request a Call
            </Button>
            <Button
              href="/how-we-work"
              variant="secondary"
              size="lg"
              icon={<ArrowIcon size={16} />}
            >
              See How We Work
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
