'use client';

import Link from 'next/link';

const PILLS = [
  { label: 'Employee Engagement', color: '#6366f1' },
  { label: 'Team Building',       color: '#E07A5F' },
  { label: 'Corporate Events',    color: '#D4A843' },
  { label: 'Wellness Programs',   color: '#10b981' },
  { label: 'Corporate Offsites',  color: '#8b5cf6' },
  { label: 'Sports & Fun',        color: '#f97316' },
];

const STATS = [
  { number: '5+',   label: 'Experience\nCategories' },
  { number: '30+',  label: 'Activity\nTypes' },
  { number: '12',   label: 'Months\nCoverage' },
  { number: '100%', label: 'Tailored\nProgrammes' },
];

export default function HeroSection() {

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#060c18',
      }}
    >
      {/* ── CSS keyframes ── */}
      <style>{`
        @keyframes aurora1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-40px, 30px) scale(1.08); }
          66%      { transform: translate(30px,-20px) scale(0.94); }
        }
        @keyframes aurora2 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(35px,-25px) scale(1.1); }
          70%      { transform: translate(-20px, 15px) scale(0.96); }
        }
        @keyframes aurora3 {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(-25px,-30px); }
        }
        @keyframes heroFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes cycleFade {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes floatPill {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-6px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes dotPulse {
          0%   { transform:scale(0.9); opacity:0.8; }
          70%  { transform:scale(1.5); opacity:0; }
          100% { transform:scale(1.5); opacity:0; }
        }
        .hero-fade-up  { animation: heroFadeUp 0.7s ease both; }
        .hero-delay-1  { animation-delay: 0.15s; }
        .hero-delay-2  { animation-delay: 0.30s; }
        .hero-delay-3  { animation-delay: 0.45s; }
        .hero-delay-4  { animation-delay: 0.60s; }
        .hero-delay-5  { animation-delay: 0.75s; }
      `}</style>

      {/* ── Aurora / mesh background ── */}
      <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }}>
        {/* blob 1 — indigo top-right */}
        <div style={{
          position:'absolute', top:'-15%', right:'-10%',
          width:800, height:800, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 65%)',
          filter:'blur(50px)',
          animation:'aurora1 9s ease-in-out infinite',
        }} />
        {/* blob 2 — coral bottom-left */}
        <div style={{
          position:'absolute', bottom:'-10%', left:'-10%',
          width:650, height:650, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(224,122,95,0.22) 0%, transparent 65%)',
          filter:'blur(55px)',
          animation:'aurora2 11s ease-in-out infinite',
        }} />
        {/* blob 3 — gold centre */}
        <div style={{
          position:'absolute', top:'38%', left:'40%',
          width:450, height:450, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(212,168,67,0.14) 0%, transparent 68%)',
          filter:'blur(65px)',
          animation:'aurora3 13s ease-in-out infinite',
        }} />
        {/* dot grid */}
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
          backgroundSize:'44px 44px',
        }} />
        {/* thin horizontal line near bottom */}
        <div style={{
          position:'absolute', bottom:160, left:0, right:0,
          height:1,
          background:'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent 100%)',
        }} />
      </div>

      {/* ── Main content ── */}
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 1.5rem', width:'100%', position:'relative', zIndex:10, paddingTop:'8rem', paddingBottom:'5rem' }}>

        {/* Top badge */}
        <div
          className="hero-fade-up"
          style={{ display:'flex', justifyContent:'center', marginBottom:'2rem' }}
        >
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8,
            padding:'6px 18px', borderRadius:9999,
            background:'rgba(224,122,95,0.10)',
            border:'1px solid rgba(224,122,95,0.28)',
            fontSize:13, fontWeight:600,
            color:'#f4a88a',
          }}>
            <span style={{ position:'relative', display:'flex', width:9, height:9 }}>
              <span style={{
                position:'absolute', inset:0, borderRadius:'50%',
                background:'#E07A5F',
                animation:'dotPulse 1.8s ease-out infinite',
              }} />
              <span style={{
                position:'relative', borderRadius:'50%',
                width:9, height:9, background:'#E07A5F', display:'block',
              }} />
            </span>
            Corporate Employee Experience Platform
          </div>
        </div>

        {/* Headline */}
        <h1
          className="hero-fade-up hero-delay-1"
          style={{
            fontFamily:'var(--font-heading)',
            fontSize:'clamp(2.4rem, 5.5vw, 4.5rem)',
            fontWeight:900,
            lineHeight:1.09,
            textAlign:'center',
            color:'#f1f5f9',
            marginBottom:'1.25rem',
            letterSpacing:'-0.02em',
          }}
        >
          Creating Workplaces Where People{' '}
          <span
            style={{
              backgroundImage:'linear-gradient(90deg, #E07A5F 0%, #D4A843 100%)',
              WebkitBackgroundClip:'text',
              WebkitTextFillColor:'transparent',
              backgroundClip:'text',
            }}
          >
            Love to Belong.
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="hero-fade-up hero-delay-2"
          style={{
            textAlign:'center',
            fontSize:'clamp(1rem, 1.4vw, 1.15rem)',
            lineHeight:1.8,
            color:'rgba(241,245,249,0.52)',
            maxWidth:620,
            margin:'0 auto 2.5rem',
          }}
        >
          Experio Verse partners with organizations to design meaningful employee experiences
          that strengthen workplace culture, inspire people, and{' '}
          <span
            style={{
              backgroundImage:'linear-gradient(90deg, #E07A5F 0%, #D4A843 100%)',
              WebkitBackgroundClip:'text',
              WebkitTextFillColor:'transparent',
              backgroundClip:'text',
              fontWeight:600,
            }}
          >
            transform everyday work into memorable moments.
          </span>
        </p>

        {/* CTA buttons */}
        <div
          className="hero-fade-up hero-delay-3"
          style={{ display:'flex', justifyContent:'center', gap:16, flexWrap:'wrap', marginBottom:'4rem' }}
        >
          <Link
            href="/contact"
            id="hero-request-call"
            style={{
              display:'inline-flex', alignItems:'center', gap:8,
              padding:'14px 32px', borderRadius:12,
              background:'linear-gradient(135deg, #E07A5F 0%, #D4A843 100%)',
              color:'#fff', fontWeight:700, fontSize:15,
              textDecoration:'none',
              boxShadow:'0 8px 32px rgba(224,122,95,0.35)',
              transition:'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 14px 40px rgba(224,122,95,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 32px rgba(224,122,95,0.35)'; }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Let&apos;s Talk
          </Link>
          <Link
            href="/experiences"
            id="hero-explore"
            style={{
              display:'inline-flex', alignItems:'center', gap:8,
              padding:'14px 32px', borderRadius:12,
              background:'rgba(255,255,255,0.06)',
              border:'1px solid rgba(255,255,255,0.14)',
              color:'rgba(241,245,249,0.85)', fontWeight:600, fontSize:15,
              textDecoration:'none',
              transition:'background 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.11)'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.transform='translateY(0)'; }}
          >
            Explore Solutions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* Floating service pills */}
        <div
          className="hero-fade-up hero-delay-4"
          style={{ display:'flex', justifyContent:'center', flexWrap:'wrap', gap:10, marginBottom:'5rem' }}
        >
          {PILLS.map((pill, i) => (
            <div
              key={pill.label}
              style={{
                display:'inline-flex', alignItems:'center', gap:7,
                padding:'7px 16px', borderRadius:9999,
                background:'rgba(255,255,255,0.05)',
                border:`1px solid ${pill.color}40`,
                fontSize:13, fontWeight:500,
                color:'rgba(241,245,249,0.70)',
                animation:`floatPill ${4 + i * 0.5}s ease-in-out infinite`,
                animationDelay:`${i * 0.3}s`,
              }}
            >
              <span style={{
                width:7, height:7, borderRadius:'50%',
                background:pill.color, display:'inline-block', flexShrink:0,
              }} />
              {pill.label}
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div
          className="hero-fade-up hero-delay-5"
          style={{
            display:'grid',
            gridTemplateColumns:'repeat(4, 1fr)',
            borderTop:'1px solid rgba(255,255,255,0.07)',
            borderRadius:16,
            overflow:'hidden',
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding:'28px 16px',
                textAlign:'center',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                background:'rgba(255,255,255,0.02)',
              }}
            >
              <div style={{
                fontFamily:'var(--font-heading)',
                fontSize:'clamp(1.6rem,3vw,2.2rem)',
                fontWeight:800,
                backgroundImage:'linear-gradient(90deg, #E07A5F, #D4A843)',
                WebkitBackgroundClip:'text',
                WebkitTextFillColor:'transparent',
                backgroundClip:'text',
                marginBottom:6,
              }}>
                {s.number}
              </div>
              <div style={{
                fontSize:12, fontWeight:500,
                color:'rgba(241,245,249,0.38)',
                lineHeight:1.4,
                whiteSpace:'pre-line',
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
