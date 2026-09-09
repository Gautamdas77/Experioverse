'use client';

import Link from 'next/link';

const STATS = [
  { number: '500+', label: 'Experiences\nDelivered', icon: '🏆' },
  { number: '100+', label: 'Happy\nCompanies', icon: '😊' },
  { number: '10+', label: 'Cities\nPan India', icon: '📍' },
  { number: '1M+', label: 'Lives\nImpacted', icon: '❤️' },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f051e 0%, #1a0a3c 35%, #2d1557 70%, #1a0a3c 100%)',
      }}
    >
      {/* ── CSS keyframes ── */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity:0; transform:translateY(30px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes heroFadeRight {
          from { opacity:0; transform:translateX(40px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes pulseGlow {
          0%,100% { opacity:0.5; transform:scale(1); }
          50%      { opacity:0.8; transform:scale(1.05); }
        }
        @keyframes float {
          0%,100% { transform:translateY(0px); }
          50%      { transform:translateY(-12px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .hero-fade-up  { animation: heroFadeUp 0.8s ease both; }
        .hero-fade-right { animation: heroFadeRight 0.9s ease both; }
        .hero-d1 { animation-delay: 0.1s; }
        .hero-d2 { animation-delay: 0.25s; }
        .hero-d3 { animation-delay: 0.4s; }
        .hero-d4 { animation-delay: 0.55s; }
        .hero-d5 { animation-delay: 0.7s; }
        .hero-d6 { animation-delay: 0.85s; }
        .shimmer-text {
          background: linear-gradient(90deg, #e91e8c 0%, #f06292 30%, #7c3aed 60%, #e91e8c 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
      `}</style>

      {/* ── Decorative background orbs ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* pink glow top-left */}
        <div style={{
          position: 'absolute', top: '-20%', left: '-10%',
          width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233,30,140,0.25) 0%, transparent 65%)',
          filter: 'blur(60px)',
          animation: 'pulseGlow 8s ease-in-out infinite',
        }} />
        {/* purple glow bottom-right */}
        <div style={{
          position: 'absolute', bottom: '-15%', right: '-5%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.30) 0%, transparent 65%)',
          filter: 'blur(70px)',
          animation: 'pulseGlow 10s ease-in-out infinite 2s',
        }} />
        {/* subtle pink mid */}
        <div style={{
          position: 'absolute', top: '40%', left: '30%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233,30,140,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }} />
        {/* dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        {/* diagonal lines */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(45deg, rgba(233,30,140,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* ── Main content ── */}
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem',
        width: '100%', position: 'relative', zIndex: 10,
        paddingTop: '5rem', paddingBottom: '4rem',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem',
        alignItems: 'center',
      }} className="hero-grid">
        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-right { display: none !important; }
          }
        `}</style>

        {/* ── LEFT: Text content ── */}
        <div>
          {/* "Never forget" headline */}
          <h1
            className="hero-fade-up hero-d1"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            We create
          </h1>
          <h1
            className="hero-fade-up hero-d1"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            <span className="shimmer-text">experiences</span>
          </h1>
          <h1
            className="hero-fade-up hero-d2"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            that people
          </h1>
          {/* "never forget." in italic pink script style */}
          <h1
            className="hero-fade-up hero-d2"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2.8rem, 5vw, 4.2rem)',
              fontWeight: 700,
              fontStyle: 'italic',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              letterSpacing: '-0.01em',
              background: 'linear-gradient(90deg, #e91e8c 0%, #f06292 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            never forget.
          </h1>

          {/* Subtext */}
          <p
            className="hero-fade-up hero-d3"
            style={{
              fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.62)',
              maxWidth: 480,
              marginBottom: '2rem',
            }}
          >
            Your end-to-end employee experience partner for events, engagement,
            wellness and more. We handle it all. You enjoy the impact.
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-fade-up hero-d4"
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: '3rem' }}
          >
            <Link
              href="/services"
              id="hero-explore-solutions"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px', borderRadius: 50,
                background: 'linear-gradient(135deg, #e91e8c 0%, #7c3aed 100%)',
                color: '#ffffff', fontWeight: 700, fontSize: 14,
                textDecoration: 'none', fontFamily: 'var(--font-heading)',
                boxShadow: '0 6px 28px rgba(233,30,140,0.45)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(233,30,140,0.65)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(233,30,140,0.45)'; }}
            >
              Explore Solutions
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="/contact"
              id="hero-lets-connect"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px', borderRadius: 50,
                background: 'rgba(255,255,255,0.07)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                color: 'rgba(255,255,255,0.90)', fontWeight: 600, fontSize: 14,
                textDecoration: 'none', fontFamily: 'var(--font-heading)',
                transition: 'background 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Let&apos;s Connect
            </Link>
          </div>

          {/* Stats strip */}
          <div
            className="hero-fade-up hero-d5"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: 16,
              overflow: 'hidden',
              maxWidth: 520,
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: '18px 12px',
                  textAlign: 'center',
                  borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <div style={{ fontSize: 13, marginBottom: 4 }}>{s.icon}</div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.1rem,2vw,1.4rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: 3,
                  lineHeight: 1.1,
                }}>
                  {s.number}
                </div>
                <div style={{
                  fontSize: 10, fontWeight: 500,
                  color: 'rgba(255,255,255,0.42)',
                  lineHeight: 1.4,
                  whiteSpace: 'pre-line',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Image placeholder ── */}
        <div
          className="hero-right hero-fade-right hero-d3"
          style={{
            position: 'relative',
            height: 520,
            borderRadius: 24,
            overflow: 'hidden',
          }}
        >
          {/* Main image placeholder — concert/event crowd */}
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, #2d1557 0%, #4a1f8c 50%, #1a0a3c 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 12,
            border: '1px solid rgba(233,30,140,0.20)',
            borderRadius: 24,
          }}>
            {/* Simulated crowd/event silhouette */}
            <div style={{
              width: '100%', height: '100%', position: 'absolute', inset: 0,
              backgroundImage: `
                radial-gradient(ellipse at 50% 80%, rgba(233,30,140,0.4) 0%, transparent 50%),
                radial-gradient(ellipse at 30% 90%, rgba(124,58,237,0.3) 0%, transparent 40%),
                radial-gradient(ellipse at 70% 85%, rgba(233,30,140,0.25) 0%, transparent 35%)
              `,
            }} />
            {/* Stage lights effect */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '60%',
              backgroundImage: `
                linear-gradient(180deg, rgba(233,30,140,0.15) 0%, transparent 100%),
                radial-gradient(ellipse at 20% 10%, rgba(255,200,100,0.15) 0%, transparent 40%),
                radial-gradient(ellipse at 80% 10%, rgba(100,150,255,0.15) 0%, transparent 40%)
              `,
            }} />
            {/* Brand overlay badge */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              background: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(233,30,140,0.35)',
              borderRadius: 16, padding: '20px 32px',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 28, fontWeight: 900,
                color: '#ffffff', letterSpacing: '0.05em',
              }}>
                experioverse
              </div>
              <div style={{
                fontSize: 11, fontWeight: 500,
                color: 'rgba(255,255,255,0.50)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginTop: 4,
              }}>
                experiences that make an impact
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
