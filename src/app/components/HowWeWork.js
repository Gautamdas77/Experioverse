'use client';

const steps = [
  {
    num: '01',
    title: 'Understand',
    desc: 'We listen, learn and understand your goals.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Ideate',
    desc: 'We brainstorm fresh ideas tailored for your team.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Plan',
    desc: 'We design a detailed plan for a seamless execution.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="14" x2="8" y2="14" strokeWidth="2.5" />
        <line x1="12" y1="14" x2="16" y2="14" />
        <line x1="8" y1="18" x2="8" y2="18" strokeWidth="2.5" />
        <line x1="12" y1="18" x2="16" y2="18" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Execute',
    desc: 'Our expert team brings the plan to life.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Delight',
    desc: 'We create experiences that leave lasting impact.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      style={{
        background: '#ffffff',
        padding: '80px 0 90px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Soft background tint */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(233,30,140,0.04) 0%, transparent 65%)',
      }} />

      <div className="ev-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
            fontWeight: 900,
            color: '#1a0a3c',
            letterSpacing: '-0.01em',
            marginBottom: 12,
          }}>
            HOW{' '}
            <span className="gradient-text-pink-purple">
              WE WORK
            </span>
          </h2>
          <p style={{
            fontSize: 16,
            color: '#6b7280',
            fontFamily: 'var(--font-body)',
            maxWidth: 420,
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            A seamless process to deliver exceptional experiences.
          </p>
        </div>

        {/* Timeline */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 0,
        }}>

          {/* Connecting dotted line — sits behind all circles */}
          <div style={{
            position: 'absolute',
            top: 35,
            left: '10%',
            right: '10%',
            height: 2,
            borderTop: '2px dashed rgba(124,58,237,0.30)',
            zIndex: 0,
            pointerEvents: 'none',
          }} />

          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
                padding: '0 8px',
              }}
            >
              {/* Icon circle — solid white bg so it sits on top of the dotted line */}
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: '2px solid rgba(124,58,237,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#7c3aed',
                  marginBottom: 20,
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  cursor: 'default',
                  position: 'relative',
                  zIndex: 2,
                  boxShadow: '0 2px 12px rgba(124,58,237,0.10)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(233,30,140,0.22)';
                  e.currentTarget.style.borderColor = 'rgba(233,30,140,0.50)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(124,58,237,0.10)';
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.25)';
                }}
              >
                {step.icon}
              </div>

              {/* Step number */}
              <p style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 12,
                fontWeight: 700,
                color: '#e91e8c',
                letterSpacing: '0.08em',
                marginBottom: 6,
                textAlign: 'center',
              }}>
                {step.num}.
              </p>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 16,
                fontWeight: 800,
                color: '#1a0a3c',
                marginBottom: 8,
                textAlign: 'center',
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: '#6b7280',
                lineHeight: 1.55,
                textAlign: 'center',
                maxWidth: 140,
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          #how-we-work .hww-timeline {
            flex-direction: column;
            align-items: center;
            gap: 40px;
          }
          #how-we-work .hww-connector {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
