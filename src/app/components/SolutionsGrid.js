'use client';

import Link from 'next/link';

const solutions = [
  {
    id: 'employee-engagement',
    title: 'Employee Engagement',
    desc: 'Fun activities that build stronger, happier teams.',
    icon: '👥',
    color: '#e91e8c',
    bgColor: 'rgba(233,30,140,0.08)',
  },
  {
    id: 'corporate-celebrations',
    title: 'Corporate Celebrations',
    desc: 'Make every milestone an unforgettable celebration and event management.',
    icon: '🎉',
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.08)',
  },
  {
    id: 'wellness-wellbeing',
    title: 'Wellness & Wellbeing',
    desc: 'Promote physical wellness and mental well-being at the workplace.',
    icon: '🧘',
    color: '#10b981',
    bgColor: 'rgba(16,185,129,0.08)',
  },
  {
    id: 'mental-health-support',
    title: 'Mental Health Support',
    desc: 'Workshops & sessions to nurture a healthy, safe and supportive workplace.',
    icon: '🧠',
    color: '#7c3aed',
    bgColor: 'rgba(124,58,237,0.08)',
  },
  {
    id: 'leadership-development',
    title: 'Leadership Development',
    desc: 'Build stronger teams through training programs & experiences.',
    icon: '🏆',
    color: '#3b82f6',
    bgColor: 'rgba(59,130,246,0.08)',
  },
  {
    id: 'sports-fitness',
    title: 'Sports & Fitness',
    desc: 'Energise teams with sports events & fitness challenges.',
    icon: '⚡',
    color: '#f97316',
    bgColor: 'rgba(249,115,22,0.08)',
  },
];

export default function SolutionsGrid() {
  return (
    <section
      id="solutions-grid"
      style={{
        background: '#ffffff',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 80% 20%, rgba(233,30,140,0.04) 0%, transparent 60%)',
      }} />

      <div className="ev-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 48, flexWrap: 'wrap', gap: 16,
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: '#1a0a3c',
              lineHeight: 1.2,
              marginBottom: 0,
            }}>
              SOLUTIONS FOR EVERY{' '}
              <span style={{
                fontStyle: 'italic', fontFamily: 'Georgia, serif',
                background: 'linear-gradient(90deg, #e91e8c 0%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Experience
              </span>
            </h2>
          </div>
          <Link
            href="/services"
            id="view-all-solutions"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 22px', borderRadius: 8,
              border: '1.5px solid #e91e8c',
              color: '#e91e8c', fontWeight: 600, fontSize: 14,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              fontFamily: 'var(--font-heading)',
              background: 'transparent',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#e91e8c'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#e91e8c'; }}
          >
            View All Solutions
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* 6-card grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {solutions.map((sol) => (
            <div
              key={sol.id}
              id={`solution-${sol.id}`}
              style={{
                background: '#ffffff',
                border: `1.5px solid ${sol.color}20`,
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, border-color 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 16px 40px ${sol.color}28, 0 4px 12px rgba(0,0,0,0.08)`;
                e.currentTarget.style.borderColor = `${sol.color}60`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = `${sol.color}20`;
              }}
            >
              {/* Image placeholder */}
              <div style={{
                height: 160,
                background: `linear-gradient(135deg, ${sol.bgColor.replace('0.08', '0.6')}, ${sol.color}30)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Background texture */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(ellipse at 50% 100%, ${sol.color}40 0%, transparent 65%)`,
                }} />
                <span style={{ fontSize: 48, position: 'relative', zIndex: 1, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}>
                  {sol.icon}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '18px 20px 20px' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8,
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: 8,
                    background: `${sol.color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14,
                  }}>
                    {sol.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 15, fontWeight: 700,
                    color: '#1a0a3c', margin: 0, lineHeight: 1.2,
                  }}>
                    {sol.title}
                  </h3>
                </div>
                <p style={{
                  fontSize: 13, lineHeight: 1.6,
                  color: '#6b7280', margin: 0,
                }}>
                  {sol.desc}
                </p>

                {/* Arrow link */}
                <div style={{
                  marginTop: 14, display: 'flex', alignItems: 'center', gap: 6,
                  fontSize: 12, fontWeight: 600, color: sol.color,
                  fontFamily: 'var(--font-heading)', letterSpacing: '0.03em',
                }}>
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
