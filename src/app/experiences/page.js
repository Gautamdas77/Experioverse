import Button, { PhoneIcon } from '../components/Button';

export const metadata = {
  title: 'Our Experiences',
  description:
    "Experio Verse designs meaningful employee experiences including team building, family days, fun activities, and more to build stronger workplace cultures.",
};

export default function ExperiencesPage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-36 pb-24 ev-gradient-hero overflow-hidden" id="experiences-hero">
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        {/* Ambient blobs */}
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-ev-gold/10 rounded-full blur-[120px]" />
        <div className="absolute top-20 left-[-100px] w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(224,122,95,0.15) 0%, transparent 70%)' }} />

        <div className="ev-container relative z-10">
          <div className="max-w-3xl">

            {/* Overview label */}
            <div className="ev-badge bg-white/10 text-white/80 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-ev-gold" />
              Overview
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              Building Stronger Teams,{' '}
              <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
                Stronger Cultures.
              </span>
            </h1>

            {/* Overview description */}
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              A thriving workplace begins with meaningful connections. We design experiences that strengthen teamwork, encourage collaboration, and create a culture where people feel valued and inspired.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ TEAM BUILDING ═══════ */}
      <section id="team-building" className="relative py-20 overflow-hidden" style={{ background: 'var(--ev-section-bg)' }}>
        {/* Subtle ambient glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full blur-[150px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)' }} />

        <div className="ev-container relative z-10">

          {/* Section header */}
          <div className="mb-14">
            <div className="ev-badge bg-white/10 text-white/80 border border-white/10 mb-5">
              <span className="w-2 h-2 rounded-full" style={{ background: 'var(--ev-connect)' }} />
              Overview
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5"
              style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
            >
              Team Building
            </h2>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(241,245,249,0.55)' }}>
              Employee engagement is an ongoing journey that keeps people motivated, connected, and committed. Our experiences help organizations build happier teams and a stronger workplace culture.
            </p>
          </div>

          {/* Services label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold tracking-[0.14em] uppercase" style={{ color: 'var(--ev-connect)' }}>Services</span>
            <span className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {[
              {
                title: 'Family Day',
                desc: 'Invite families into the workplace culture with fun, interactive, and inclusive experiences that bring everyone together.',
                icon: '👨‍👩‍👧‍👦',
              },
              {
                title: 'Fun Fridays',
                desc: 'End every week on a high with curated fun activities — games, challenges, and light-hearted events that refresh the team.',
                icon: '🎉',
              },
              {
                title: 'Hobby Clubs',
                desc: 'Foster passion and community by helping employees connect over shared interests beyond work.',
                icon: '🎨',
              },
              {
                title: 'Indoor Games',
                desc: 'Engaging in-office games and activities that spark laughter, healthy competition, and team spirit.',
                icon: '🎲',
              },
              {
                title: 'Outdoor Games',
                desc: 'Get teams outside for fresh-air activities — relay races, sports, and adventure challenges that build real bonds.',
                icon: '⚽',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="tb-card group relative flex flex-col rounded-2xl p-6 border transition-all duration-300"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-px rounded-full"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)' }} />

                {/* Icon */}
                <span className="text-3xl mb-4 block">{service.icon}</span>

                {/* Title */}
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="tb-card-desc text-sm leading-relaxed flex-1">
                  {service.desc}
                </p>

                {/* Enquire link */}
                <a
                  href="/contact"
                  className="tb-enquire inline-flex items-center gap-1 mt-4 text-xs font-semibold transition-colors duration-200"
                >
                  Enquire
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

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
