import { Section, SectionHeader } from '../components';
import Button, { PhoneIcon } from '../components/Button';

export const metadata = {
  title: 'Our Experiences',
  description:
    'Explore Experio Verse\'s five experience categories — Celebrate, Connect, Move, Reset, and Explore. Corporate events, team building, wellness, sports, offsites, and more.',
};

/* ─── Experience Categories Full Data ─── */
const categories = [
  {
    id: 'celebrate',
    name: 'Celebrate',
    emoji: '🎉',
    color: 'var(--ev-celebrate)',
    colorClass: 'ev-celebrate',
    tagline: 'Create moments worth remembering.',
    description:
      'From company milestones to festival celebrations — we help teams come together, recognize achievements, and build traditions that strengthen workplace culture.',
    services: [
      {
        title: 'Company Anniversary',
        desc: 'Mark company milestones with memorable celebrations that reflect your journey and culture.',
      },
      {
        title: 'Annual Day',
        desc: 'A flagship event that brings the entire organisation together to celebrate the year gone by.',
      },
      {
        title: 'Awards & Recognition',
        desc: 'Meaningful recognition ceremonies that make employees feel valued and motivated.',
      },
      {
        title: 'Festival Celebrations',
        desc: 'Culturally rich celebrations that honour diversity and bring teams closer.',
      },
      {
        title: 'Office Parties',
        desc: 'Fun, engaging get-togethers — from themed parties to casual celebrations.',
      },
      {
        title: 'Family Days',
        desc: 'Invite families into the workplace culture with interactive, fun-filled experiences.',
      },
    ],
  },
  {
    id: 'connect',
    name: 'Connect',
    emoji: '🤝',
    color: 'var(--ev-connect)',
    colorClass: 'ev-connect',
    tagline: 'Build stronger teams together.',
    description:
      'Meaningful connections don\'t happen by accident. Our team-building and collaboration activities are designed to break silos, build trust, and create genuine bonds.',
    services: [
      {
        title: 'Team Building',
        desc: 'Purpose-driven activities that strengthen collaboration, communication, and trust.',
      },
      {
        title: 'Indoor Activities',
        desc: 'Engaging in-office or in-venue experiences — quizzes, workshops, creative sessions.',
      },
      {
        title: 'Outdoor Activities',
        desc: 'Get teams out of the office for fresh-air adventures that build resilience and teamwork.',
      },
      {
        title: 'Treasure Hunts',
        desc: 'Interactive, competitive hunts that combine problem-solving with pure fun.',
      },
      {
        title: 'Team Competitions',
        desc: 'Healthy competition that energises teams and brings out the best in people.',
      },
      {
        title: 'Sports Activities',
        desc: 'Friendly matches and sports days that encourage teamwork beyond the desk.',
      },
    ],
  },
  {
    id: 'move',
    name: 'Move',
    emoji: '🏃',
    color: 'var(--ev-move)',
    colorClass: 'ev-move',
    tagline: 'Get your team moving.',
    description:
      'Physical wellness is the foundation of everything. Our fitness and sports experiences energise employees, reduce stress, and create a culture of health.',
    services: [
      {
        title: 'Sports Tournaments',
        desc: 'Cricket, football, badminton, and more — inter-team and inter-company tournaments.',
      },
      {
        title: 'Fitness Challenges',
        desc: 'Step challenges, fitness weeks, and health drives that get everyone moving.',
      },
      {
        title: 'Yoga',
        desc: 'Expert-led yoga sessions for flexibility, strength, and mental calm.',
      },
      {
        title: 'Zumba',
        desc: 'High-energy dance fitness that brings joy and movement together.',
      },
      {
        title: 'Running',
        desc: 'Corporate runs, fun runs, and couch-to-5K programs for all fitness levels.',
      },
      {
        title: 'Physical Activities',
        desc: 'From obstacle courses to swimming sessions — active experiences for every team.',
      },
    ],
  },
  {
    id: 'reset',
    name: 'Reset',
    emoji: '🧘',
    color: 'var(--ev-reset)',
    colorClass: 'ev-reset',
    tagline: 'Recharge your people.',
    description:
      'In a world of constant hustle, Reset experiences help employees slow down, recharge, and return with clarity, focus, and resilience.',
    services: [
      {
        title: 'Mental Wellness',
        desc: 'Workshops and sessions that normalise mental health conversations at work.',
      },
      {
        title: 'Stress Management',
        desc: 'Practical tools and techniques to manage workplace stress effectively.',
      },
      {
        title: 'Mindfulness',
        desc: 'Guided mindfulness sessions that improve focus, presence, and emotional balance.',
      },
      {
        title: 'Meditation',
        desc: 'From beginner-friendly to advanced — meditation programs for lasting impact.',
      },
      {
        title: 'Burnout Awareness',
        desc: 'Interactive sessions that help teams recognise, prevent, and recover from burnout.',
      },
      {
        title: 'Financial Wellness',
        desc: 'Expert-led workshops on financial planning, investment, and security.',
      },
    ],
  },
  {
    id: 'explore',
    name: 'Explore',
    emoji: '🌍',
    color: 'var(--ev-explore)',
    colorClass: 'ev-explore',
    tagline: 'Experiences beyond the office.',
    description:
      'Sometimes the best team experiences happen away from the office. Our curated trips, offsites, and retreats create memories and bonds that last.',
    services: [
      {
        title: 'Corporate Trips',
        desc: 'Curated group trips designed for teams to unwind, bond, and recharge together.',
      },
      {
        title: 'Offsites',
        desc: 'Strategic offsites that combine work sessions with team experiences.',
      },
      {
        title: 'Adventure Experiences',
        desc: 'Trekking, camping, rafting, and more — push boundaries together.',
      },
      {
        title: 'Leadership Retreats',
        desc: 'Focused retreats for leadership teams to align, strategise, and bond.',
      },
      {
        title: 'Cultural Experiences',
        desc: 'Explore local culture, cuisine, and heritage as a team.',
      },
      {
        title: 'Story-driven Travel',
        desc: 'Immersive travel experiences built around stories, themes, and discovery.',
      },
    ],
  },
];

export default function ExperiencesPage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-36 pb-20 ev-gradient-hero overflow-hidden" id="experiences-hero">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-ev-gold/10 rounded-full blur-[120px]" />

        <div className="ev-container relative z-10">
          <div className="max-w-3xl">
            <div className="ev-badge bg-white/10 text-white/80 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-ev-gold" />
              Our Experiences
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Five Ways to Elevate{' '}
              <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
                Your Workplace.
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              From celebrations to wellness, from team building to travel — every dimension of the employee experience, thoughtfully designed.
            </p>

            {/* Category quick nav */}
            <div className="flex flex-wrap gap-3 mt-10">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium border border-white/10 hover:bg-white/20 hover:text-white transition-all duration-200"
                >
                  {cat.emoji} {cat.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CATEGORY SECTIONS ═══════ */}
      {categories.map((cat, catIndex) => (
        <Section
          key={cat.id}
          id={cat.id}
          gradient={catIndex % 2 === 1}
        >
          {/* Category header */}
          <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
            <div className="flex items-center gap-4 shrink-0">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: `color-mix(in srgb, ${cat.color} 15%, transparent)` }}
              >
                {cat.emoji}
              </div>
              <div>
                <h2
                  className="text-3xl md:text-4xl font-extrabold"
                  style={{ fontFamily: 'var(--font-heading)', color: cat.color }}
                >
                  {cat.name}
                </h2>
                <p className="text-sm text-ev-gray-400 font-medium">{cat.tagline}</p>
              </div>
            </div>
            <p className="text-ev-gray-500 leading-relaxed max-w-2xl">
              {cat.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.services.map((service) => (
              <div
                key={service.title}
                className="ev-card p-6 group relative overflow-hidden"
              >
                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:w-1.5"
                  style={{ backgroundColor: cat.color }}
                />

                {/* Image placeholder */}
                <div
                  className="w-full aspect-[16/9] rounded-lg mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `color-mix(in srgb, ${cat.color} 8%, var(--ev-gray-50))` }}
                >
                  <span className="text-3xl opacity-50">{cat.emoji}</span>
                </div>

                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-ev-gray-400 leading-relaxed mb-4">
                  {service.desc}
                </p>

                <Button
                  href="/contact"
                  variant="ghost"
                  size="sm"
                  className="text-xs"
                  style={{ color: cat.color }}
                >
                  Enquire →
                </Button>
              </div>
            ))}
          </div>
        </Section>
      ))}

      {/* ═══════ CTA ═══════ */}
      <section className="relative py-24 ev-gradient-hero overflow-hidden" id="experiences-cta">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="ev-container relative z-10 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-lg mx-auto">
            We customise experiences based on your company&apos;s unique requirements. Tell us what you need.
          </p>
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<PhoneIcon size={18} />}
            id="experiences-cta-call"
          >
            Request a Call
          </Button>
        </div>
      </section>
    </>
  );
}
