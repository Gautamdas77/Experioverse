import { Section, SectionHeader } from '../components';
import Button, { PhoneIcon, ArrowIcon } from '../components/Button';

export const metadata = {
  title: 'Why Experio Verse',
  description:
    'Why companies choose Experio Verse — not just events, one partner for all experiences, year-round approach, measurable impact, and curated experiences.',
};




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

      {/* ═══════ OUR STORY ═══════ */}
      <section
        className="relative py-28 overflow-hidden"
        id="our-story"
        style={{ background: 'linear-gradient(160deg, #fff7f5 0%, #fff9f0 50%, #f8f4ff 100%)' }}
      >
        {/* Decorative ambient orbs */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(224,122,95,0.10) 0%, transparent 65%)',
            filter: 'blur(60px)',
            transform: 'translate(20%, -20%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212,168,67,0.10) 0%, transparent 65%)',
            filter: 'blur(60px)',
            transform: 'translate(-20%, 20%)',
          }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(11,29,58,0.04) 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />

        <div className="ev-container relative z-10">
          {/* Section label */}
          <p
            className="ev-section-label mb-3"
            id="our-story-label"
          >
            Our Story
          </p>

          {/* Large pull headline */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] mb-16 max-w-3xl"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--ev-navy)' }}
          >
            It All Started with a{' '}
            <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
              Simple Conversation.
            </span>
          </h2>

          {/* Story body — two-column on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 items-start">

            {/* ── Left: Narrative ── */}
            <div className="space-y-7 text-lg leading-[1.85] text-ev-gray-500">
              <p>
                Like many great ideas, Experio Verse wasn&apos;t born in a meeting room — it began
                over everyday conversations between two HR professionals who genuinely cared about
                people.
              </p>
              <p>
                As we spoke about workplaces, employees, and company culture, one thought kept
                coming back:
              </p>

              {/* Highlighted question quote */}
              <blockquote
                className="relative pl-6 py-1 my-2"
                style={{ borderLeft: '4px solid var(--ev-accent)' }}
              >
                <p
                  className="text-xl font-semibold italic"
                  style={{ color: 'var(--ev-navy)', fontFamily: 'var(--font-heading)' }}
                >
                  &ldquo;Why do we celebrate business success, but often forget the people who make
                  that success possible?&rdquo;
                </p>
              </blockquote>

              <p>
                The more we reflected, the more we realized that employees deserved more than just
                occasional events — they deserved meaningful experiences that make them feel valued,
                connected, and inspired every single day.
              </p>
              <p>
                That single thought became a dream.{' '}
                <span className="font-semibold" style={{ color: 'var(--ev-navy)' }}>
                  And that dream became Experio Verse.
                </span>
              </p>
              <p>
                Today, we&apos;re on a journey to help organizations build workplaces where every
                employee feels like they truly belong. And honestly, this journey won&apos;t stop
                until that vision becomes a reality.
              </p>
            </div>

            {/* ── Right: Closing statement card ── */}
            <div className="lg:sticky lg:top-32">
              {/* Decorative quotation mark */}
              <div
                className="text-[10rem] leading-none font-extrabold select-none mb-[-2rem] ml-2"
                style={{
                  fontFamily: 'var(--font-heading)',
                  background: 'linear-gradient(135deg, var(--ev-accent), var(--ev-gold))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  opacity: 0.25,
                }}
              >
                &ldquo;
              </div>

              <div
                className="rounded-3xl p-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, var(--ev-navy) 0%, #132B54 100%)',
                  boxShadow: '0 24px 60px rgba(11,29,58,0.18)',
                }}
              >
                {/* Subtle inner glow */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(224,122,95,0.2) 0%, transparent 70%)',
                    transform: 'translate(30%, -30%)',
                  }}
                />

                <p
                  className="relative text-xl sm:text-2xl font-bold leading-[1.4] mb-6"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--ev-off-white)',
                  }}
                >
                  When people feel valued, businesses don&apos;t just grow —{' '}
                  <span
                    className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent"
                  >
                    they flourish.
                  </span>
                </p>

                {/* Founders label */}
                <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: 'linear-gradient(135deg, var(--ev-accent), var(--ev-gold))',
                      color: '#fff',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    EV
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--ev-off-white)' }}>
                      The Founders
                    </p>
                    <p className="text-xs" style={{ color: 'rgba(243,244,246,0.45)' }}>
                      Experio Verse
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ OUR MISSION ═══════ */}
      <section
        className="relative py-28 overflow-hidden"
        id="our-mission"
        style={{ background: 'linear-gradient(160deg, #0B1D3A 0%, #0f2952 60%, #0B1D3A 100%)' }}
      >
        {/* Ambient glow orbs */}
        <div
          className="absolute top-0 left-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(224,122,95,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
            transform: 'translateX(-50%) translateY(-30%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212,168,67,0.10) 0%, transparent 65%)',
            filter: 'blur(50px)',
            transform: 'translate(-20%, 20%)',
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />

        <div className="ev-container relative z-10 text-center">
          {/* Label */}
          <p
            className="text-sm font-bold uppercase tracking-[0.22em] mb-5"
            style={{ color: 'var(--ev-accent)' }}
          >
            Our Mission
          </p>

          {/* Mission headline */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] mb-8 mx-auto"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--ev-off-white)',
              maxWidth: '820px',
            }}
          >
            Creating Experiences That{' '}
            <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
              Inspire People
            </span>{' '}
            and Strengthen Organizations.
          </h2>

          {/* Mission body */}
          <p
            className="text-lg leading-relaxed mx-auto mb-16"
            style={{ color: 'rgba(243,244,246,0.65)', maxWidth: '680px' }}
          >
            Our mission is to help organizations build positive workplace cultures through
            thoughtfully designed experiences that encourage engagement, well-being, collaboration,
            recognition, and continuous growth.
          </p>

          {/* Mission Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: 'Engagement',   icon: '⚡', color: 'var(--ev-accent)' },
              { label: 'Well-Being',   icon: '🌿', color: 'var(--ev-move)' },
              { label: 'Collaboration',icon: '🤝', color: 'var(--ev-blue-light)' },
              { label: 'Recognition',  icon: '🏅', color: 'var(--ev-gold)' },
              { label: 'Growth',       icon: '📈', color: 'var(--ev-reset)' },
            ].map(({ label, icon, color }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 rounded-2xl px-4 py-6 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span className="text-3xl">{icon}</span>
                <span
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ color, fontFamily: 'var(--font-heading)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ OUR VISION ═══════ */}
      <section
        className="relative py-28 overflow-hidden bg-white"
        id="our-vision"
      >
        {/* Soft background tint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 60% 50%, rgba(212,168,67,0.07) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(224,122,95,0.06) 0%, transparent 60%)',
          }}
        />

        <div className="ev-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: Text ── */}
            <div>
              <p className="ev-section-label mb-3" id="our-vision-label">
                Our Vision
              </p>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] mb-8"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--ev-navy)' }}
              >
                To Become the Most{' '}
                <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
                  Trusted Employee Experience Partner
                </span>{' '}
                for Worldwide Organizations.
              </h2>

              <p className="text-lg leading-[1.85] text-ev-gray-500 mb-10">
                We envision a future where every workplace prioritizes people, fosters meaningful
                connections, and creates an environment where employees can thrive while businesses
                achieve sustainable success.
              </p>

              {/* Three forward-looking pillars */}
              <div className="space-y-4">
                {[
                  { label: 'People First',         desc: 'Every decision starts with the employee experience.' },
                  { label: 'Meaningful Connections',desc: 'Workplaces built on genuine human bonds.' },
                  { label: 'Sustainable Success',  desc: 'Thriving people power thriving businesses.' },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="mt-1 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, var(--ev-accent), var(--ev-gold))' }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-ev-navy text-sm">{label}</p>
                      <p className="text-sm text-ev-gray-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Vision card ── */}
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(224,122,95,0.15), rgba(212,168,67,0.12))',
                  filter: 'blur(40px)',
                  transform: 'scale(1.08)',
                }}
              />

              <div
                className="relative rounded-3xl overflow-hidden p-10 text-center"
                style={{
                  background: 'linear-gradient(145deg, var(--ev-navy) 0%, #1a3a6e 100%)',
                  boxShadow: '0 32px 80px rgba(11,29,58,0.22)',
                }}
              >
                {/* Decorative arcs */}
                <div
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at 50% -10%, rgba(212,168,67,0.18) 0%, transparent 60%)',
                  }}
                />

                {/* Globe icon */}
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, var(--ev-accent), var(--ev-gold))',
                    boxShadow: '0 12px 40px rgba(224,122,95,0.35)',
                  }}
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>

                <p
                  className="relative text-2xl font-extrabold leading-[1.35] mb-4"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--ev-off-white)' }}
                >
                  A World Where Every{' '}
                  <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
                    Employee Matters.
                  </span>
                </p>

                <p className="relative text-sm leading-relaxed" style={{ color: 'rgba(243,244,246,0.55)' }}>
                  We&apos;re building toward a future where no employee ever feels overlooked — where
                  belonging is the baseline, not the exception.
                </p>

                {/* Bottom stat strip */}
                <div
                  className="relative mt-8 pt-6 grid grid-cols-3 gap-4"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {[
                    { value: '🌍', label: 'Global Reach' },
                    { value: '💡', label: 'Inspired Teams' },
                    { value: '📊', label: 'Proven Impact' },
                  ].map(({ value, label }) => (
                    <div key={label} className="flex flex-col items-center gap-1">
                      <span className="text-2xl">{value}</span>
                      <span className="text-xs font-semibold" style={{ color: 'rgba(243,244,246,0.45)', fontFamily: 'var(--font-heading)' }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════ OUR VALUES ═══════ */}
      <section
        className="relative py-28 overflow-hidden"
        id="our-values"
        style={{ background: 'linear-gradient(160deg, #060c18 0%, #0b1d3a 50%, #060c18 100%)' }}
      >
        {/* Ambient orbs */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(224,122,95,0.10) 0%, transparent 65%)',
            filter: 'blur(80px)',
            transform: 'translate(25%, -25%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212,168,67,0.08) 0%, transparent 65%)',
            filter: 'blur(70px)',
            transform: 'translate(-25%, 25%)',
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="ev-container relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <p
              className="text-sm font-bold uppercase tracking-[0.22em] mb-5"
              style={{ color: 'var(--ev-accent)' }}
            >
              Our Values
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] mx-auto"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--ev-off-white)',
                maxWidth: '700px',
              }}
            >
              The Principles That{' '}
              <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
                Shape Every Experience
              </span>
            </h2>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'People First',
                desc: 'Every decision begins with people because exceptional workplaces are built around exceptional employee experiences.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                color: 'var(--ev-accent)',
                colorRgb: '224,122,95',
              },
              {
                num: '02',
                title: 'Purposeful Experiences',
                desc: 'Every initiative is designed with a clear objective that creates meaningful value for both employees and organizations.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                ),
                color: 'var(--ev-gold)',
                colorRgb: '212,168,67',
              },
              {
                num: '03',
                title: 'Creativity with Impact',
                desc: 'We combine fresh ideas with strategic thinking to create experiences that inspire, engage, and leave lasting impressions.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ),
                color: 'var(--ev-blue-light)',
                colorRgb: '59,130,246',
              },
              {
                num: '04',
                title: 'Partnership',
                desc: 'We work as an extension of your team, building relationships based on trust, transparency, and collaboration.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 12h-4" />
                    <path d="M20 10l2 2-2 2" />
                  </svg>
                ),
                color: 'var(--ev-move)',
                colorRgb: '16,185,129',
              },
              {
                num: '05',
                title: 'Excellence in Execution',
                desc: 'From planning to delivery, we focus on every detail to ensure every experience exceeds expectations.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                ),
                color: 'var(--ev-reset)',
                colorRgb: '139,92,246',
              },
            ].map((value, i) => (
              <div
                key={value.num}
                className={`group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, rgba(${value.colorRgb},0.08) 0%, transparent 70%)`,
                  }}
                />

                {/* Top row: icon + number */}
                <div className="relative flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `rgba(${value.colorRgb},0.12)`,
                      color: value.color,
                    }}
                  >
                    {value.icon}
                  </div>
                  <span
                    className="text-4xl font-extrabold tabular-nums"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: `rgba(${value.colorRgb},0.15)`,
                    }}
                  >
                    {value.num}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="relative text-lg font-bold mb-3"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--ev-off-white)',
                  }}
                >
                  {value.title}
                </h3>

                {/* Description */}
                <p className="relative text-sm leading-[1.8]" style={{ color: 'rgba(243,244,246,0.55)' }}>
                  {value.desc}
                </p>

                {/* Bottom accent line */}
                <div
                  className="relative mt-6 h-0.5 rounded-full w-10 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(to right, ${value.color}, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE EV ═══════ */}
      <section
        className="relative py-28 overflow-hidden"
        id="why-choose-ev"
        style={{
          background: 'linear-gradient(160deg, #fff7f5 0%, #fffcf5 50%, #f5f8ff 100%)',
        }}
      >
        {/* Ambient tints */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 75% 30%, rgba(224,122,95,0.09) 0%, transparent 55%), radial-gradient(ellipse at 15% 70%, rgba(212,168,67,0.07) 0%, transparent 55%)',
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(11,29,58,0.04) 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />

        <div className="ev-container relative z-10">
          {/* Two-column layout: left label + headline, right body */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-start mb-20">

            {/* ── Left ── */}
            <div>
              <p className="ev-section-label mb-4" id="why-choose-ev-label">
                Why Choose Experio Verse
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.12]"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--ev-navy)' }}
              >
                More Than a Service Provider —{' '}
                <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
                  A Strategic Employee Experience Partner.
                </span>
              </h2>
            </div>

            {/* ── Right ── */}
            <div className="lg:pt-3">
              <p className="text-lg leading-[1.85] text-ev-gray-500">
                We understand that every organization has its own culture, challenges, and
                aspirations. Instead of offering one-size-fits-all solutions, we design
                experiences that align with your people, values, and business goals.
              </p>
            </div>
          </div>

          {/* Four differentiator pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                ),
                title: 'Tailored to Your Culture',
                desc: 'No templates. Every experience is crafted around your unique company DNA.',
                color: 'var(--ev-accent)',
                colorRgb: '224,122,95',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
                  </svg>
                ),
                title: 'Year-Round Strategy',
                desc: 'A complete 12-month employee experience calendar, not one-off events.',
                color: 'var(--ev-gold)',
                colorRgb: '212,168,67',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: 'One Trusted Partner',
                desc: 'Everything under one roof — wellness, sports, offsites, celebrations and more.',
                color: 'var(--ev-blue-light)',
                colorRgb: '59,130,246',
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                ),
                title: 'Measurable Outcomes',
                desc: 'Feedback, data, and reports after every experience so you see real impact.',
                color: 'var(--ev-move)',
                colorRgb: '16,185,129',
              },
            ].map(({ icon, title, desc, color, colorRgb }) => (
              <div
                key={title}
                className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(11,29,58,0.07)',
                  boxShadow: '0 2px 12px rgba(11,29,58,0.06)',
                }}
              >
                {/* Hover tint */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, rgba(${colorRgb},0.06) 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `rgba(${colorRgb},0.10)`, color }}
                >
                  {icon}
                </div>

                <h3
                  className="relative text-base font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--ev-navy)' }}
                >
                  {title}
                </h3>
                <p className="relative text-sm leading-[1.75]" style={{ color: 'var(--ev-gray-400)' }}>
                  {desc}
                </p>

                {/* Bottom accent */}
                <div
                  className="relative mt-5 h-0.5 rounded-full w-8 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(to right, ${color}, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ OUR PROMISE ═══════ */}
      <section
        className="relative py-28 overflow-hidden"
        id="our-promise"
        style={{ background: 'linear-gradient(160deg, #0B1D3A 0%, #0f2952 55%, #0B1D3A 100%)' }}
      >
        {/* Ambient glow — warm centre bloom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(212,168,67,0.12) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(224,122,95,0.10) 0%, transparent 65%)',
            filter: 'blur(70px)',
            transform: 'translate(-25%, -25%)',
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />

        <div className="ev-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Label */}
            <p
              className="text-sm font-bold uppercase tracking-[0.22em] mb-6"
              style={{ color: 'var(--ev-accent)' }}
            >
              Our Promise
            </p>

            {/* Headline */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] mb-10"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--ev-off-white)' }}
            >
              Creating Experiences That{' '}
              <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
                Make a Difference.
              </span>
            </h2>

            {/* Body paragraphs */}
            <div className="space-y-5 text-lg leading-[1.85] mb-14" style={{ color: 'rgba(243,244,246,0.65)' }}>
              <p>
                At Experio Verse, we promise to deliver experiences that go beyond expectations.
                Every solution we design is driven by creativity, purpose, and a commitment to
                helping organizations build stronger cultures and happier workplaces.
              </p>
              <p>
                When you partner with us, you can expect thoughtful planning, seamless execution,
                and experiences that leave a lasting impact on your people.
              </p>
            </div>

            {/* Promise statement card */}
            <div
              className="relative inline-block w-full max-w-2xl rounded-3xl px-10 py-8 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, var(--ev-accent) 0%, var(--ev-gold) 100%)',
                boxShadow: '0 20px 60px rgba(224,122,95,0.30)',
              }}
            >
              {/* Inner highlight */}
              <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 60%)',
                }}
              />
              {/* Quotation mark accent */}
              <span
                className="absolute top-2 left-5 text-8xl font-extrabold leading-none select-none pointer-events-none"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'rgba(255,255,255,0.12)',
                }}
              >
                &ldquo;
              </span>

              <p
                className="relative text-xl sm:text-2xl font-bold leading-[1.45]"
                style={{ fontFamily: 'var(--font-heading)', color: '#fff' }}
              >
                Your people are our priority.{' '}
                <span style={{ color: 'rgba(255,255,255,0.80)' }}>
                  Your culture is our commitment.
                </span>
              </p>
            </div>

            {/* Three promise pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
              {[
                { icon: '🎯', label: 'Thoughtful Planning',   desc: 'Every detail considered from day one.' },
                { icon: '⚙️', label: 'Seamless Execution',   desc: 'Flawless delivery you can count on.' },
                { icon: '✨', label: 'Lasting Impact',        desc: 'Experiences your people will remember.' },
              ].map(({ icon, label, desc }) => (
                <div
                  key={label}
                  className="rounded-2xl px-5 py-6 text-center transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span className="text-3xl mb-3 block">{icon}</span>
                  <p
                    className="text-sm font-bold mb-1"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--ev-off-white)' }}
                  >
                    {label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(243,244,246,0.45)' }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ MEET OUR FOUNDERS ═══════ */}
      <section
        className="relative py-28 overflow-hidden bg-white"
        id="meet-our-founders"
      >
        {/* Soft warm tint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 20% 50%, rgba(224,122,95,0.06) 0%, transparent 55%), radial-gradient(ellipse at 80% 50%, rgba(212,168,67,0.05) 0%, transparent 55%)',
          }}
        />

        <div className="ev-container relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="ev-section-label justify-center mb-4" id="founders-label">
              Meet Our Founders
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] mb-6 mx-auto"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--ev-navy)', maxWidth: '700px' }}
            >
              Driven by a{' '}
              <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
                Shared Vision
              </span>{' '}
              for Better Workplaces
            </h2>
            <p
              className="text-lg leading-[1.85] mx-auto"
              style={{ color: 'var(--ev-gray-400)', maxWidth: '680px' }}
            >
              Behind Experio Verse is a team passionate about transforming how organizations connect
              with their people. With expertise in business strategy, employee engagement,
              operations, technology, and creative experiences, our founders are committed to
              building workplaces where employees feel valued, inspired, and empowered.
            </p>
          </div>

          {/* Founder cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                id: 'pranav',
                name: 'Pranav Ranjan',
                role: 'Co-Founder',
                initials: 'PR',
                focus: 'Operations · Strategy · Technology',
                bio: 'Leads Operations, Strategy, and Technology, ensuring every experience is thoughtfully planned, seamlessly executed, and aligned with organizational goals. Passionate about building innovative employee experience solutions that create lasting value for businesses and their people.',
                accentColor: 'var(--ev-accent)',
                accentRgb: '224,122,95',
                gradientFrom: '#E07A5F',
                gradientTo: '#D4A843',
              },
              {
                id: 'simran',
                name: 'Simran',
                role: 'Co-Founder',
                initials: 'S',
                focus: 'Creative Strategy · Content · Experience Design',
                bio: 'Leads Creative Strategy, Content, and Experience Design, bringing ideas to life through engaging concepts and meaningful storytelling. Dedicated to creating memorable employee experiences that strengthen culture, inspire teams, and build deeper workplace connections.',
                accentColor: 'var(--ev-reset)',
                accentRgb: '139,92,246',
                gradientFrom: '#8B5CF6',
                gradientTo: '#3B82F6',
              },
            ].map((founder) => (
              <div
                key={founder.id}
                className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: '1px solid rgba(11,29,58,0.08)',
                  boxShadow: '0 4px 24px rgba(11,29,58,0.07)',
                }}
              >
                {/* Photo area — placeholder until real photo is provided */}
                <div
                  className="relative w-full flex items-center justify-center overflow-hidden"
                  style={{
                    height: '280px',
                    background: `linear-gradient(145deg, ${founder.gradientFrom}22, ${founder.gradientTo}33)`,
                    borderBottom: '1px solid rgba(11,29,58,0.06)',
                  }}
                >
                  {/* Decorative circles */}
                  <div
                    className="absolute bottom-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, rgba(${founder.accentRgb},0.12) 0%, transparent 70%)`,
                      transform: 'translate(30%, 30%)',
                    }}
                  />
                  <div
                    className="absolute top-0 left-0 w-32 h-32 rounded-full pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, rgba(${founder.accentRgb},0.08) 0%, transparent 70%)`,
                      transform: 'translate(-30%, -30%)',
                    }}
                  />

                  {/* Avatar placeholder */}
                  <div
                    className="relative w-28 h-28 rounded-full flex items-center justify-center text-3xl font-extrabold shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${founder.gradientFrom}, ${founder.gradientTo})`,
                      color: '#fff',
                      fontFamily: 'var(--font-heading)',
                      boxShadow: `0 12px 40px rgba(${founder.accentRgb},0.35)`,
                    }}
                  >
                    {founder.initials}
                  </div>

                  {/* "Photo coming soon" label */}
                  <span
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(11,29,58,0.06)',
                      color: 'var(--ev-gray-400)',
                      border: '1px solid rgba(11,29,58,0.08)',
                    }}
                  >
                    Photo coming soon
                  </span>
                </div>

                {/* Info area */}
                <div className="p-8 bg-white">
                  {/* Name + role */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3
                        className="text-2xl font-extrabold mb-0.5"
                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--ev-navy)' }}
                      >
                        {founder.name}
                      </h3>
                      <p
                        className="text-sm font-bold uppercase tracking-wider"
                        style={{ color: founder.accentColor }}
                      >
                        {founder.role}
                      </p>
                    </div>
                    {/* EV monogram badge */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${founder.gradientFrom}, ${founder.gradientTo})`,
                        color: '#fff',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      EV
                    </div>
                  </div>

                  {/* Focus tags */}
                  <p
                    className="text-xs font-semibold mb-4 pb-4"
                    style={{
                      color: 'var(--ev-gray-300)',
                      letterSpacing: '0.04em',
                      borderBottom: '1px solid rgba(11,29,58,0.06)',
                    }}
                  >
                    {founder.focus}
                  </p>

                  {/* Bio */}
                  <p className="text-sm leading-[1.85]" style={{ color: 'var(--ev-gray-400)' }}>
                    {founder.bio}
                  </p>

                  {/* Accent underline */}
                  <div
                    className="mt-6 h-0.5 rounded-full w-12 group-hover:w-full transition-all duration-500"
                    style={{ background: `linear-gradient(to right, ${founder.gradientFrom}, transparent)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <Section id="why-cta" gradient>
        <div className="text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Let&apos;s Build Exceptional Employee{' '}
            <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
              Experiences Together.
            </span>
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
              id="why-cta-connect"
            >
              Connect With Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
