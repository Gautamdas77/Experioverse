'use client';

const differentiators = [
  {
    id: 'one-stop',
    title: 'One Stop\nSolution',
    desc: 'Everything under one roof.',
    icon: '🏠',
  },
  {
    id: 'creative-ideas',
    title: 'Creative &\nFresh Ideas',
    desc: 'Always unique, never repeated.',
    icon: '💡',
  },
  {
    id: 'end-to-end',
    title: 'End-to-End\nExecution',
    desc: 'From planning to flawless delivery.',
    icon: '⚙️',
  },
  {
    id: 'experienced-team',
    title: 'Experienced\nTeam',
    desc: 'Passionate experts behind every detail.',
    icon: '🌟',
  },
  {
    id: 'pan-india',
    title: 'Pan India\nPresence',
    desc: 'Delivering experiences across cities.',
    icon: '🗺️',
  },
];

export default function WhyExperioverse() {
  return (
    <section
      id="why-experioverse"
      style={{
        background: 'linear-gradient(160deg, #0f051e 0%, #1a0a3c 40%, #2d1557 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-20%', right: '-10%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233,30,140,0.18) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-15%', left: '-5%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.20) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }} />
        {/* dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }} />
        {/* Floating circles */}
        <div style={{
          position: 'absolute', bottom: '10%', right: '15%',
          width: 80, height: 80, borderRadius: '50%',
          border: '2px solid rgba(233,30,140,0.20)',
        }} />
        <div style={{
          position: 'absolute', top: '15%', left: '8%',
          width: 50, height: 50, borderRadius: '50%',
          background: 'rgba(233,30,140,0.12)',
        }} />
        <div style={{
          position: 'absolute', top: '40%', right: '5%',
          width: 30, height: 30, borderRadius: '50%',
          background: 'rgba(124,58,237,0.20)',
        }} />
      </div>

      <div className="ev-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '4rem',
          alignItems: 'center',
        }}
          className="why-grid"
        >
          <style>{`
            @media (max-width: 900px) {
              .why-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>

          {/* Left — Heading */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: 8,
              letterSpacing: '-0.01em',
            }}>
              WHY
            </h2>
            <h2 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 700,
              fontStyle: 'italic',
              lineHeight: 1.15,
              marginBottom: 0,
              background: 'linear-gradient(90deg, #e91e8c 0%, #f06292 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              EXPERIOVERSE?
            </h2>
            {/* Wavy underline decoration */}
            <div style={{ marginTop: 12 }}>
              <svg width="180" height="12" viewBox="0 0 180 12" fill="none">
                <path
                  d="M2 6 Q20 2 38 6 Q56 10 74 6 Q92 2 110 6 Q128 10 146 6 Q164 2 178 6"
                  stroke="#e91e8c"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.7"
                />
              </svg>
            </div>
          </div>

          {/* Right — 5 cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 14,
          }}
            className="why-cards-grid"
          >
            <style>{`
              @media (max-width: 1024px) {
                .why-cards-grid { grid-template-columns: repeat(3, 1fr) !important; }
              }
              @media (max-width: 640px) {
                .why-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
              }
            `}</style>
            {differentiators.map((d) => (
              <div
                key={d.id}
                id={`why-${d.id}`}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(233,30,140,0.18)',
                  borderRadius: 14,
                  padding: '20px 14px',
                  textAlign: 'center',
                  transition: 'background 0.3s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(233,30,140,0.10)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(233,30,140,0.40)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(233,30,140,0.18)';
                }}
              >
                {/* Icon circle */}
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(233,30,140,0.12)',
                  border: '1.5px solid rgba(233,30,140,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 12px',
                  fontSize: 22,
                }}>
                  {d.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.3,
                  marginBottom: 6,
                  whiteSpace: 'pre-line',
                }}>
                  {d.title}
                </h3>
                <p style={{
                  fontSize: 11, lineHeight: 1.5,
                  color: 'rgba(255,255,255,0.45)',
                  margin: 0,
                }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
