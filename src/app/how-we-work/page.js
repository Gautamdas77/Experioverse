import { Section, SectionHeader } from '../components';
import Button, { PhoneIcon, ArrowIcon } from '../components/Button';

export const metadata = {
  title: 'How We Work',
  description:
    'Discover Experio Verse\'s five-step process — Understand, Design, Plan, Execute, and Feedback. A structured approach to creating the right employee experiences.',
};

const steps = [
  {
    number: '01',
    title: 'Understand',
    shortDesc: 'Your company requirements',
    fullDesc:
      'We begin by deeply understanding your company — your culture, your people, your challenges, and your goals. Through detailed conversations with your HR and leadership teams, we map out what your employees truly need.',
    details: [
      'Company culture assessment',
      'Employee demographics & preferences',
      'Past experience feedback (if any)',
      'Budget and timeline alignment',
      'Success metrics definition',
    ],
    icon: '🎯',
    color: 'var(--ev-blue)',
  },
  {
    number: '02',
    title: 'Design',
    shortDesc: 'The right experience',
    fullDesc:
      'Based on our understanding, we design experiences that align with your goals. We don\'t use templates — every experience is crafted specifically for your people, your culture, and your desired outcomes.',
    details: [
      'Experience concept & theme',
      'Activity selection & sequencing',
      'Facilitator & partner matching',
      'Venue options & recommendations',
      'Custom branding & communication',
    ],
    icon: '✨',
    color: 'var(--ev-accent)',
  },
  {
    number: '03',
    title: 'Plan',
    shortDesc: 'Activities, people & venues',
    fullDesc:
      'Meticulous planning is what separates a good experience from a great one. We handle every detail — from vendor coordination and venue logistics to communication plans and backup scenarios.',
    details: [
      'Detailed event timeline',
      'Vendor & partner coordination',
      'Venue setup & logistics',
      'Communication to participants',
      'Risk mitigation & backup plans',
    ],
    icon: '📋',
    color: 'var(--ev-gold)',
  },
  {
    number: '04',
    title: 'Execute',
    shortDesc: 'Complete experience management',
    fullDesc:
      'On the day, our team manages every aspect of the experience. You and your employees simply show up and enjoy. We handle setup, coordination, facilitation, troubleshooting, and teardown.',
    details: [
      'On-ground team deployment',
      'Real-time coordination',
      'Participant engagement management',
      'Photo & video documentation',
      'Smooth, seamless delivery',
    ],
    icon: '🚀',
    color: 'var(--ev-move)',
  },
  {
    number: '05',
    title: 'Feedback',
    shortDesc: 'Measure outcome & impact',
    fullDesc:
      'After the experience, we collect structured feedback from participants, measure outcomes against defined success metrics, and provide a comprehensive report with insights and recommendations.',
    details: [
      'Participant feedback surveys',
      'Engagement & participation data',
      'Experience report & insights',
      'Photo & video highlights',
      'Recommendations for next experience',
    ],
    icon: '📊',
    color: 'var(--ev-reset)',
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-36 pb-20 ev-gradient-hero overflow-hidden" id="hww-hero">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute top-40 left-20 w-[400px] h-[400px] bg-ev-blue/10 rounded-full blur-[120px]" />

        <div className="ev-container relative z-10">
          <div className="max-w-3xl">
            <div className="ev-badge bg-white/10 text-white/80 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-ev-blue-light" />
              How We Work
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              A Structured Approach to{' '}
              <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
                Meaningful Experiences.
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Every experience we create follows a clear five-step process — ensuring nothing is left to chance and every outcome is intentional.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ VISUAL FLOW BAR ═══════ */}
      <Section id="process-flow" noPaddingBottom>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-2">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-center gap-2 md:gap-2">
              <div
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white shadow-md"
                style={{ backgroundColor: step.color, fontFamily: 'var(--font-heading)' }}
              >
                {step.icon} {step.title}
              </div>
              {i < steps.length - 1 && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ev-gray-200 hidden md:block shrink-0">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ DETAILED STEPS ═══════ */}
      {steps.map((step, i) => (
        <Section
          key={step.number}
          id={`step-${step.number}`}
          gradient={i % 2 === 1}
        >
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Content side */}
            <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `color-mix(in srgb, ${step.color} 15%, transparent)` }}
                >
                  {step.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-ev-gray-300 uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
                    Step {step.number}
                  </div>
                  <h2
                    className="text-3xl font-extrabold"
                    style={{ fontFamily: 'var(--font-heading)', color: step.color }}
                  >
                    {step.title}
                  </h2>
                </div>
              </div>

              <p className="text-ev-gray-500 leading-relaxed text-lg mb-6">
                {step.fullDesc}
              </p>

              <ul className="space-y-3">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 text-sm text-ev-gray-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 mt-0.5" style={{ color: step.color }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual side */}
            <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div
                className="aspect-[4/3] rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `color-mix(in srgb, ${step.color} 6%, var(--ev-gray-50))` }}
              >
                <div className="text-center p-8">
                  <div className="text-7xl mb-4">{step.icon}</div>
                  <div className="text-xs text-ev-gray-300 italic">Visual illustration placeholder</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* ═══════ CTA ═══════ */}
      <section className="relative py-24 ev-gradient-hero overflow-hidden" id="hww-cta">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="ev-container relative z-10 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ready to get started?
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-lg mx-auto">
            Share your requirements and let us create the right experience for your team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<PhoneIcon size={18} />}
              id="hww-cta-call"
            >
              Request a Call
            </Button>
            <Button
              href="/experiences"
              variant="outline"
              size="lg"
              icon={<ArrowIcon size={16} />}
            >
              Explore Experiences
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
