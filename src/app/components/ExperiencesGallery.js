'use client';

import Link from 'next/link';

// 6 photo placeholders in a 2x3 grid
const photos = [
  { id: 'gallery-1', label: 'Corporate Day', color: '#e91e8c', gradient: 'linear-gradient(135deg, #4a1f8c 0%, #e91e8c 100%)' },
  { id: 'gallery-2', label: 'Concert Event', color: '#7c3aed', gradient: 'linear-gradient(135deg, #1a0a3c 0%, #7c3aed 100%)' },
  { id: 'gallery-3', label: 'Team Celebration', color: '#f59e0b', gradient: 'linear-gradient(135deg, #7c3aed 0%, #f59e0b 100%)' },
  { id: 'gallery-4', label: 'Festival Vibes', color: '#e91e8c', gradient: 'linear-gradient(135deg, #e91e8c 0%, #ff6b9d 100%)' },
  { id: 'gallery-5', label: 'Sky Lanterns', color: '#f97316', gradient: 'linear-gradient(135deg, #1a0a3c 0%, #f97316 100%)' },
  { id: 'gallery-6', label: 'Campfire Night', color: '#10b981', gradient: 'linear-gradient(135deg, #10b981 0%, #1a0a3c 100%)' },
];

export default function ExperiencesGallery() {
  return (
    <section
      id="experiences-gallery"
      style={{
        background: 'linear-gradient(180deg, #0f051e 0%, #1a0a3c 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '30%', left: '-10%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233,30,140,0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }} />
      </div>

      <div className="ev-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '4rem',
          alignItems: 'center',
        }}
          className="gallery-grid"
        >
          <style>{`
            @media (max-width: 900px) {
              .gallery-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>

          {/* Left — text */}
          <div>
            <p style={{
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#e91e8c',
              marginBottom: 12,
              fontFamily: 'var(--font-heading)',
            }}>
              Portfolio
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: 16,
            }}>
              EXPERIENCES
              <br />
              THAT{' '}
              <span style={{
                fontStyle: 'italic', fontFamily: 'Georgia, serif',
                background: 'linear-gradient(90deg, #e91e8c 0%, #f06292 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                SPEAK
              </span>
              <br />
              FOR US
            </h2>
            <p style={{
              fontSize: 14, lineHeight: 1.75,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 28,
              maxWidth: 320,
            }}>
              From corporate offsites to grand celebrations, we&apos;ve created moments
              that inspire and stay with people.
            </p>
            <Link
              href="/our-work"
              id="view-our-work"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 24px', borderRadius: 50,
                background: 'linear-gradient(135deg, #e91e8c 0%, #7c3aed 100%)',
                color: '#ffffff', fontWeight: 700, fontSize: 14,
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                boxShadow: '0 4px 20px rgba(233,30,140,0.40)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(233,30,140,0.60)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(233,30,140,0.40)'; }}
            >
              View Our Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Right — 2x3 photo grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: 10,
            height: 380,
          }}>
            {photos.map((photo) => (
              <div
                key={photo.id}
                id={photo.id}
                style={{
                  background: photo.gradient,
                  borderRadius: 12,
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.boxShadow = `0 8px 24px ${photo.color}40`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Texture overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
                  backgroundSize: '20px 20px',
                }} />
                {/* Label */}
                <div style={{
                  position: 'absolute', bottom: 8, left: 10,
                  fontSize: 10, fontWeight: 600,
                  color: 'rgba(255,255,255,0.65)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontFamily: 'var(--font-heading)',
                }}>
                  {photo.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
