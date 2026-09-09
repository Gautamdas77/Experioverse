'use client';

const steps = [
  {
    num: '01',
    title: 'Understand',
    desc: 'We listen, learn and understand your goals.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Ideate',
    desc: 'We ideation fresh ideas tailored for your team.',
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
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Execute',
    desc: 'Our expert team brings the plan to life.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
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
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background gradient */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(233,30,140,0.04) 0%, transparent 60%)',
      }} />

      <div className="ev-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 900,
            color: '#1a0a3c',
            lineHeight: 1.2,
            marginBottom: 8,
          }}>
            HOW{' '}
            <span style={{
              fontStyle: 'italic', fontFamily: 'Georgia, serif',
              background: 'linear-gradient(90deg, #e91e8c 0%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              WE WORK
            </span>
          </h2>
          <p style={{
            fontSize: 15, color: '#6b7280',
            maxWidth: 440, margin: '0 auto',
            lineHeight: 1.7,
          }}>
            A seamless process to deliver exceptional experiences.
          </p>
        </div>

        {/* Steps row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 12,
          position: 'relative',
        }}
          className="how-steps-grid"
        >
          <style>{`
            @media (max-width: 900px) {
              .how-steps-grid { grid-template-columns: repeat(3, 1fr) !important; }
            }
            @media (max-width: 560px) {
              .how-steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
          `}</style>

          {steps.map((step, i) => (
            <div
              key={step.num}
              id={`step-${step.num}`}
              style={{
                textAlign: 'center',
                padding: '28px 16px',
                borderRadius: 16,
                background: '#ffffff',
                border: '1px solid rgba(233,30,140,0.10)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                position: 'relative',
                transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(233,30,140,0.14)';
                e.currentTarget.style.borderColor = 'rgba(233,30,140,0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
                e.currentTarget.style.borderColor = 'rgba(233,30,140,0.10)';
              }}
            >
              {/* Step number */}
              <div style={{
                fontSize: 11, fontWeight: 700,
                color: '#e91e8c',
                letterSpacing: '0.08em',
                marginBottom: 12,
                fontFamily: 'var(--font-heading)',
              }}>
                {step.num}.
              </div>

              {/* Icon circle */}
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(233,30,140,0.10) 0%, rgba(124,58,237,0.10) 100%)',
                border: '1.5px solid rgba(233,30,140,0.20)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 14px',
                color: '#e91e8c',
              }}>
                {step.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 14,
                fontWeight: 700,
                color: '#1a0a3c',
                marginBottom: 8,
                lineHeight: 1.2,
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: 12, lineHeight: 1.6,
                color: '#9ca3af',
                margin: 0,
              }}>
                {step.desc}
              </p>

              {/* Connector arrow (not on last) */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '50%', right: -12,
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  display: 'none', // hidden on small, shown via style below
                }} className="step-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
