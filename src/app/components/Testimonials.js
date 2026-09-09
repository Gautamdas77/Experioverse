'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 'testimonial-1',
    quote: 'ExperioVerse understood our vision perfectly and delivered an annual day that our employees still talk about. Highly recommended!',
    name: 'Ritika Sharma',
    role: 'HR Manager, Deloitte',
    avatar: 'RS',
    color: '#e91e8c',
  },
  {
    id: 'testimonial-2',
    quote: 'Their team is super creative, professional and so easy to work with. Highly recommended! A truly one-stop solution.',
    name: 'Arjun Mehra',
    role: 'People Partner, Google',
    avatar: 'AM',
    color: '#7c3aed',
  },
  {
    id: 'testimonial-3',
    quote: 'From planning to execution, everything was flawless. Truly a one-stop solution for all corporate experience needs.',
    name: 'HR Head, Infosys',
    role: 'HR Head, Infosys',
    avatar: 'HI',
    color: '#e91e8c',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimonials"
      style={{
        background: 'linear-gradient(180deg, #1a0a3c 0%, #0f051e 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '20%', right: '-10%',
          width: 350, height: 350, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233,30,140,0.15) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '-5%',
          width: 280, height: 280, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }} />
      </div>

      <div className="ev-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: 4,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexWrap: 'wrap',
          }}>
            LOVED BY PEOPLE,{' '}
            <span style={{
              background: 'linear-gradient(90deg, #e91e8c 0%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              TRUSTED BY BRANDS
            </span>{' '}
            <span style={{ color: '#e91e8c', fontSize: '1.2em' }}>♡</span>
          </h2>
        </div>

        {/* Testimonials cards — 3 in a row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          marginBottom: 36,
        }}
          className="testimonials-grid"
        >
          <style>{`
            @media (max-width: 900px) {
              .testimonials-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>

          {testimonials.map((t, i) => (
            <div
              key={t.id}
              id={t.id}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${i === 1 ? 'rgba(233,30,140,0.30)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 18,
                padding: '28px 24px',
                position: 'relative',
                transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease, background 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(233,30,140,0.40)';
                e.currentTarget.style.background = 'rgba(233,30,140,0.06)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = i === 1 ? 'rgba(233,30,140,0.30)' : 'rgba(255,255,255,0.08)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
            >
              {/* Large quote mark */}
              <div style={{
                fontSize: 52, lineHeight: 1,
                fontFamily: 'Georgia, serif',
                color: '#e91e8c',
                opacity: 0.6,
                marginBottom: 12,
                lineHeight: 0.8,
              }}>
                &ldquo;
              </div>

              {/* Quote text */}
              <p style={{
                fontSize: 14, lineHeight: 1.75,
                color: 'rgba(255,255,255,0.70)',
                marginBottom: 24,
                fontStyle: 'italic',
              }}>
                {t.quote}
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {/* Avatar */}
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${t.color} 0%, #7c3aed 100%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, color: '#ffffff',
                  flexShrink: 0,
                  fontFamily: 'var(--font-heading)',
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{
                    fontSize: 13, fontWeight: 700, color: '#ffffff',
                    fontFamily: 'var(--font-heading)', marginBottom: 2,
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontSize: 11, color: 'rgba(255,255,255,0.45)',
                    letterSpacing: '0.02em',
                  }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              id={`testimonial-dot-${i}`}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === active ? 24 : 8,
                height: 8, borderRadius: 999,
                background: i === active
                  ? 'linear-gradient(90deg, #e91e8c, #7c3aed)'
                  : 'rgba(255,255,255,0.20)',
                border: 'none', cursor: 'pointer',
                transition: 'width 0.3s ease, background 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
