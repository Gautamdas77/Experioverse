import Button, { PhoneIcon } from '../components/Button';

export const metadata = {
  title: 'Our Services | Experio Verse',
  description:
    "Explore Experio Verse's full suite of corporate employee experience services — from team building to wellness retreats — designed to build thriving workplace cultures.",
};

const services = [
  {
    id: 'team-building',
    slug: 'team-building',
    icon: '🤝',
    label: 'Team Building',
    accentHex: '#3B82F6',
    description:
      'Employee engagement is an ongoing journey that keeps people motivated, connected, and committed. Our experiences help organisations build happier teams and a stronger workplace culture.',
    points: [
      'Family Day — inclusive family experience events',
      'Fun Fridays — weekly light-hearted team refresh activities',
      'Hobby Clubs — shared-interest groups beyond work',
      'Indoor Games — in-office competitive & collaborative games',
      'Outdoor Games — fresh-air relay races, sports & adventures',
    ],
  },
  {
    id: 'corporate-celebrations',
    slug: 'corporate-celebrations',
    icon: '🎉',
    label: 'Corporate Celebrations',
    accentHex: '#E07A5F',
    description:
      'Every celebration is an opportunity to recognize achievements, appreciate people, and strengthen workplace culture through unforgettable experiences.',
    points: [
      'Annual Day — grand year-end showcases',
      'Foundation Day — honouring the company\'s journey',
      'Townhall — all-hands alignment & inspiration events',
      'Festivals — culturally vibrant seasonal celebrations',
      'Awards Night — recognising excellence in style',
      'Milestone Celebrations — marking the moments that matter',
    ],
  },
  {
    id: 'offsites-retreats',
    slug: 'offsites-retreats',
    icon: '🏔️',
    label: 'Offsites & Retreats',
    accentHex: '#10B981',
    description:
      'Well-planned retreats inspire fresh thinking, deeper collaboration, and stronger relationships while giving teams the space to recharge and grow together.',
    points: [
      'Domestic Retreats — curated getaways across India',
      'International Retreats — world-class global experiences',
      'Leadership Retreats — strategic offsites for senior teams',
      'Strategy Meets — focused planning & alignment sessions',
    ],
  },
  {
    id: 'learning-experiences',
    slug: 'learning-experiences',
    icon: '📚',
    label: 'Learning Experiences',
    accentHex: '#D4A843',
    description:
      'Continuous learning empowers employees to grow with confidence. We create engaging experiences that develop skills, leadership, and a culture of continuous improvement.',
    points: [
      'Workshops — skill-building interactive sessions',
      'Leadership Development — programmes for future leaders',
      'Soft Skills — communication, empathy & collaboration training',
      'Innovation Labs — creative problem-solving experiences',
      'Guest Speakers — inspiring voices from industry & beyond',
    ],
  },
  {
    id: 'rewards-recognition',
    slug: 'rewards-recognition',
    icon: '🏆',
    label: 'Rewards & Recognition',
    accentHex: '#F59E0B',
    description:
      'Recognition creates motivation, loyalty, and belonging. By celebrating achievements and everyday contributions, organisations inspire employees to perform at their best.',
    points: [
      'Rewards & Recognition — structured appreciation frameworks',
      'Long Service Awards — honouring employee loyalty',
      'Hall of Fame — legacy recognition programmes',
      'Appreciation Events — heartfelt moments of gratitude',
    ],
  },
  {
    id: 'wellbeing-mental-health',
    slug: 'wellbeing-mental-health',
    icon: '🧘',
    label: 'Well-being & Mental Health',
    accentHex: '#8B5CF6',
    description:
      'Employee well-being goes beyond physical health. We create experiences that support mental wellness, reduce stress, and help employees thrive both personally and professionally.',
    points: [
      'Mental Wellness Sessions — guided support & awareness',
      'Stress Management — tools and techniques for resilience',
      'Mindfulness Programs — presence, calm & focus practices',
      'Yoga & Fitness — energising body and mind',
      'Health Awareness Campaigns — preventive wellness drives',
    ],
  },
  {
    id: 'workplace-culture',
    slug: 'workplace-culture',
    icon: '🌱',
    label: 'Workplace Culture',
    accentHex: '#06B6D4',
    description:
      'A strong workplace culture does not happen by chance. We help organisations build environments where trust, collaboration, purpose, and belonging become part of everyday work.',
    points: [
      'Culture Building — designing values-driven environments',
      'Value Workshops — embedding purpose into everyday work',
      'Employee Experience Campaigns — culture storytelling at scale',
      'Internal Culture Initiatives — grassroots change programmes',
      'Workplace Transformation — end-to-end culture redesign',
    ],
  },
  {
    id: 'brand-experiences',
    slug: 'brand-experiences',
    icon: '✨',
    label: 'Brand Experiences',
    accentHex: '#EC4899',
    description:
      'Bring your brand to life through impactful experiences that connect with employees, customers, partners, and stakeholders while strengthening your brand identity.',
    points: [
      'Product Launches — memorable reveal experiences',
      'Dealer Meets — partner engagement & alignment events',
      'Channel Partner Meets — celebrating the sales ecosystem',
      'Customer Experience Events — delight at every touchpoint',
      'Conferences — large-scale knowledge & networking events',
    ],
  },
  {
    id: 'entertainment-experiences',
    slug: 'entertainment-experiences',
    icon: '🎤',
    label: 'Entertainment Experiences',
    accentHex: '#F97316',
    description:
      'The right entertainment transforms an event into an unforgettable experience, adding excitement, energy, and lasting memories for every audience.',
    points: [
      'Stand-up Comedy — laughter that brings people together',
      'Live Bands — electrifying performances for every mood',
      'DJs — curated soundscapes for high-energy events',
      'Motivational Speakers — stories that ignite action',
      'Professional Emcees — seamless event experiences',
    ],
  },
  {
    id: 'csr-experiences',
    slug: 'csr-experiences',
    icon: '🌍',
    label: 'CSR Experiences',
    accentHex: '#84CC16',
    description:
      'Purpose-driven experiences bring people together to create positive change. Our CSR initiatives strengthen teamwork while making a meaningful difference in the community.',
    points: [
      'Tree Plantation — green initiatives for a better tomorrow',
      'Build-a-Bicycle — hands-on giving with team collaboration',
      'Toy Drives — spreading joy to children in need',
      'Community Projects — local impact through collective action',
      'NGO Partnerships — structured giving & volunteering',
    ],
  },
  {
    id: 'custom-experiences',
    slug: 'custom-experiences',
    icon: '🎨',
    label: 'Custom Experiences',
    accentHex: '#A78BFA',
    description:
      'Every organisation is unique, and so are its people. We create tailor-made experiences that align with your culture, goals, and aspirations to deliver meaningful and measurable impact.',
    points: [
      'Custom Employee Experience Programs — built around your people',
      'Bespoke Corporate Events — one-of-a-kind event design',
      'Tailor-Made Engagement Campaigns — your brand, your voice',
      'Exclusive Celebrations — private & premium event production',
      'End-to-End Experience Design — concept to execution',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section
        className="relative pt-36 pb-24 ev-gradient-hero overflow-hidden"
        id="services-hero"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div
          className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-20 left-[-100px] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(224,122,95,0.15) 0%, transparent 70%)' }}
        />
        <div className="ev-container relative z-10">
          <div className="max-w-3xl">
            <div className="ev-badge bg-white/10 text-white/80 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-ev-gold" />
              Overview
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              Building Stronger Teams,{' '}
              <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
                Stronger Cultures.
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              A thriving workplace begins with meaningful connections. We design experiences
              that strengthen teamwork, encourage collaboration, and create a culture where
              people feel valued and inspired.
            </p>
          </div>
        </div>
      </section>

      <section
        id="services-grid"
        className="relative py-24 overflow-hidden"
        style={{ background: 'var(--ev-section-bg)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,130,246,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="ev-container relative z-10">
          <div className="mb-16 text-center">
            <div className="ev-badge bg-white/10 text-white/80 border border-white/10 mb-5 mx-auto">
              <span className="w-2 h-2 rounded-full bg-ev-gold" />
              What We Offer
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              Our Service Categories
            </h2>
            <p
              className="text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: 'rgba(241,245,249,0.55)' }}
            >
              Hover over any card to explore what&apos;s inside.
            </p>
          </div>

          <div className="svc-grid">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="svc-card group"
                id={`service-card-${svc.slug}`}
              >
                <div
                  className="svc-card-top-line"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${svc.accentHex}80, transparent)`,
                  }}
                />
                <div className="svc-rest">
                  <span className="svc-rest-icon">{svc.icon}</span>
                  <h3
                    className="svc-rest-title"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {svc.label}
                  </h3>
                  <span
                    className="svc-rest-hint"
                    style={{ color: `${svc.accentHex}99` }}
                  >
                    Hover to explore
                  </span>
                </div>
                <div className="svc-content">
                  <div className="svc-content-header">
                    <span className="svc-content-icon">{svc.icon}</span>
                    <h3
                      className="svc-content-title"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {svc.label}
                    </h3>
                  </div>
                  <div
                    className="svc-content-divider"
                    style={{ background: `${svc.accentHex}40` }}
                  />
                  <p className="svc-content-desc">{svc.description}</p>
                  <ul className="svc-content-points">
                    {svc.points.map((pt, i) => (
                      <li key={i} className="svc-content-point">
                        <span
                          className="svc-point-dot"
                          style={{ background: svc.accentHex }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="svc-cta"
                    style={{ color: svc.accentHex }}
                    id={`service-enquire-${svc.slug}`}
                  >
                    Enquire Now
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-24 ev-gradient-hero overflow-hidden"
        id="services-cta"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="ev-container relative z-10 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Cannot find what you are looking for?
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-lg mx-auto">
            We customise experiences based on your company unique requirements.
            Tell us what you need.
          </p>
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<PhoneIcon size={18} />}
            id="services-cta-call"
          >
            Request a Call
          </Button>
        </div>
      </section>
    </>
  );
}
