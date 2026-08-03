import { Section, SectionHeader } from '../components';
import Button, { PhoneIcon, ArrowIcon } from '../components/Button';

export const metadata = {
  title: 'About Us',
  description:
    'Experio Verse is a Corporate Employee Experience Company helping organisations create meaningful experiences for their employees. Learn about our vision, mission, and team.',
};

/* ─── Founders Data (placeholder — client to provide) ─── */
const founders = [
  {
    name: 'Founder Name',
    role: 'Co-Founder & CEO',
    bio: 'Passionate about creating meaningful workplace cultures through curated employee experiences. Brings over a decade of experience in corporate engagement and event management.',
    initials: 'FN',
  },
  {
    name: 'Founder Name',
    role: 'Co-Founder & COO',
    bio: 'Focused on operations excellence and building a network of world-class facilitators, coaches, and experience partners across India.',
    initials: 'FN',
  },
];

/* ─── Values ─── */
const values = [
  {
    icon: '🎯',
    title: 'Purpose-Driven',
    desc: 'Every experience we create has a clear purpose — strengthening connections, boosting morale, or building culture.',
  },
  {
    icon: '🤝',
    title: 'Partnership',
    desc: 'We work as an extension of your HR and People team, not just a vendor fulfilling a brief.',
  },
  {
    icon: '💎',
    title: 'Quality',
    desc: 'Curated partners, thoughtful planning, and flawless execution — every single time.',
  },
  {
    icon: '📊',
    title: 'Impact',
    desc: 'We measure what matters — participation, engagement, feedback, and real outcomes.',
  },
  {
    icon: '🌱',
    title: 'Growth',
    desc: 'We believe great employee experiences lead to great business outcomes.',
  },
  {
    icon: '🔄',
    title: 'Consistency',
    desc: 'A year-round approach, not one-off events. Sustained engagement, not temporary excitement.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-36 pb-20 ev-gradient-hero overflow-hidden" id="about-hero">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-ev-accent/10 rounded-full blur-[120px]" />

        <div className="ev-container relative z-10">
          <div className="max-w-3xl">
            <div className="ev-badge bg-white/10 text-white/80 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-ev-accent" />
              About Experio Verse
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Building Stronger Workplaces,{' '}
              <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
                One Experience at a Time.
              </span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Experio Verse is a Corporate Employee Experience Company helping organisations create meaningful experiences for their employees.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ WHO WE ARE ═══════ */}
      <Section id="who-we-are" gradient>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              label="Who We Are"
              title="Your Employee Experience Partner"
              centered={false}
            />
            <div className="space-y-4 text-ev-gray-500 leading-relaxed">
              <p>
                Experio Verse is a <strong className="text-ev-navy">Corporate Employee Experience Company</strong> that partners with organisations to create meaningful, memorable employee experiences.
              </p>
              <p>
                We go beyond traditional event management. We understand that employee experience is not about one birthday celebration or one annual day — it&apos;s about creating a <strong className="text-ev-navy">continuous culture of engagement, connection, and belonging</strong>.
              </p>
              <p>
                From team-building activities and wellness programs to corporate offsites and festival celebrations, we bring together the right activities, facilitators, and venues to create experiences that employees actually remember and value.
              </p>
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-ev-navy/5 to-ev-accent/10 border border-ev-gray-100 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🏢</div>
                <p className="text-sm text-ev-gray-400 italic">Company team photo placeholder</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-ev-accent/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-ev-blue/5 rounded-2xl -z-10" />
          </div>
        </div>
      </Section>

      {/* ═══════ VISION & MISSION ═══════ */}
      <Section id="vision-mission">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="ev-card p-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ev-accent to-ev-gold" />
            <div className="text-4xl mb-4">🔭</div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Vision
            </h2>
            <p className="text-ev-gray-500 leading-relaxed text-lg">
              To become a trusted partner for companies looking to create stronger workplace cultures through <strong className="text-ev-navy">meaningful and memorable employee experiences</strong>.
            </p>
          </div>

          {/* Mission */}
          <div className="ev-card p-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ev-blue to-ev-navy-mid" />
            <div className="text-4xl mb-4">🚀</div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Mission
            </h2>
            <p className="text-ev-gray-500 leading-relaxed text-lg">
              To help employees <strong className="text-ev-navy">connect, engage, move, celebrate and experience</strong> their workplace better — creating environments where people genuinely want to show up and thrive.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════ OUR VALUES ═══════ */}
      <Section id="our-values" gradient>
        <SectionHeader
          label="Our Values"
          title="What Drives Us"
          subtitle="The principles that guide every experience we create."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div key={value.title} className="ev-card p-7">
              <div className="text-3xl mb-3">{value.icon}</div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {value.title}
              </h3>
              <p className="text-sm text-ev-gray-400 leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ OUR FOUNDERS ═══════ */}
      <Section id="founders">
        <SectionHeader
          label="Our Team"
          title="Meet the Founders"
          subtitle="The people behind Experio Verse — passionate about building better workplaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <div key={i} className="ev-card p-8 text-center group">
              {/* Avatar placeholder */}
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-ev-navy to-ev-navy-mid mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold border-4 border-ev-gray-100 group-hover:border-ev-accent/30 transition-colors duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
                {founder.initials}
              </div>
              <h3
                className="text-xl font-bold mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {founder.name}
              </h3>
              <p className="text-sm text-ev-accent font-semibold mb-4">
                {founder.role}
              </p>
              <p className="text-sm text-ev-gray-400 leading-relaxed">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════ CTA ═══════ */}
      <section className="relative py-24 ev-gradient-hero overflow-hidden" id="about-cta">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="ev-container relative z-10 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Want to partner with us?
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-lg mx-auto">
            Let&apos;s discuss how we can create the right employee experiences for your team.
          </p>
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<PhoneIcon size={18} />}
            id="about-cta-call"
          >
            Request a Call
          </Button>
        </div>
      </section>
    </>
  );
}
