'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const solutions = [
  {
    id: 'employee-engagement',
    title: 'Employee Engagement',
    desc: 'Interactive activities that bring teams together and strengthen workplace relationships.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    accent: '#6366f1',
  },
  {
    id: 'corporate-celebrations',
    title: 'Corporate Celebrations',
    desc: 'Meaningful celebrations that recognize milestones, achievements, and special occasions.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    accent: '#f59e0b',
  },
  {
    id: 'wellness',
    title: 'Wellness & Well-being',
    desc: 'Physical, mental, and emotional wellness initiatives that help employees perform at their best.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    accent: '#10b981',
  },
  {
    id: 'learning-leadership',
    title: 'Learning & Leadership',
    desc: 'Workshops, leadership sessions, and development experiences that inspire continuous growth.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
    accent: '#3b82f6',
  },
  {
    id: 'sports-team-building',
    title: 'Sports & Team Building',
    desc: 'Fun, energetic experiences that improve collaboration, trust, and team spirit.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
    accent: '#f97316',
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel & Offsites',
    desc: 'Thoughtfully planned retreats and offsites that combine learning, bonding, and unforgettable memories.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    accent: '#8b5cf6',
  },
];

const TOTAL = solutions.length;
const AUTO_ROTATE_MS = 4000;

/* ── helpers ── */
function mod(n, m) {
  return ((n % m) + m) % m;
}

/* Position offsets from active index: -2, -1, 0, +1, +2 */
function getCardStyle(offset) {
  const abs = Math.abs(offset);
  if (abs > 2) return { display: 'none' };

  const CARD_W = 340;   // px – reference width
  const GAP    = 180;   // px between card centres

  const translateX = offset * GAP;
  const scale      = abs === 0 ? 1 : abs === 1 ? 0.78 : 0.60;
  const opacity    = abs === 0 ? 1 : abs === 1 ? 0.70 : 0.40;
  const zIndex     = abs === 0 ? 30 : abs === 1 ? 20 : 10;
  const brightness = abs === 0 ? 1 : abs === 1 ? 0.75 : 0.55;

  return {
    transform: `translateX(${translateX}px) scale(${scale})`,
    opacity,
    zIndex,
    filter: `brightness(${brightness})`,
    transition: 'all 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
    pointerEvents: abs === 0 ? 'auto' : 'none',
  };
}

export default function SolutionsCarousel() {
  const [active, setActive] = useState(0);

  const prev = useCallback(() => setActive((a) => mod(a - 1, TOTAL)), []);
  const next = useCallback(() => setActive((a) => mod(a + 1, TOTAL)), []);

  /* auto-rotate */
  useEffect(() => {
    const id = setInterval(next, AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section
      className="relative py-28 bg-white overflow-hidden"
      id="offered-solutions"
    >
      {/* Decorative background accents (matching Who We Are section) */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(var(--ev-accent-rgb, 99,102,241),0.06) 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(var(--ev-gold-rgb, 234,179,8),0.05) 0%, transparent 70%)',
          transform: 'translate(30%, 30%)',
        }}
      />
      {/* ── Header ── */}
      <div className="ev-container relative z-10 text-center mb-16">
        <p
          className="text-base sm:text-lg font-bold uppercase tracking-[0.2em] mb-4"
          style={{ color: 'var(--ev-accent)' }}
        >
          Offered Solutions
        </p>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] mb-5"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--ev-navy)' }}
        >
          Solutions Designed Around{' '}
          <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
            Your People
          </span>
        </h2>
        <p className="text-lg text-ev-gray-400 max-w-2xl mx-auto">
          Every organization is different, which is why our experiences are tailored to your
          culture, goals, and workforce.
        </p>
      </div>

      {/* ── Carousel track ── */}
      <div className="relative flex items-center justify-center" style={{ height: 420 }}>
        {/* Cards */}
        <div className="relative flex items-center justify-center w-full" style={{ perspective: 1200 }}>
          {solutions.map((sol, i) => {
            const offset = mod(i - active + Math.floor(TOTAL / 2), TOTAL) - Math.floor(TOTAL / 2);
            const style  = getCardStyle(offset);
            if (style.display === 'none') return null;

            return (
              <div
                key={sol.id}
                className="absolute"
                style={style}
              >
                <div
                  className="rounded-3xl p-8 flex flex-col gap-5 select-none"
                  style={{
                    background: 'white',
                    width: 340,
                    minHeight: 340,
                    boxShadow: Math.abs(offset) === 0
                      ? '0 32px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.8)'
                      : '0 12px 40px rgba(0,0,0,0.10)',
                    border: '1px solid rgba(255,255,255,0.9)',
                  }}
                >
                  {/* Icon circle */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ background: sol.gradient }}
                  >
                    {sol.icon}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3
                      className="text-xl font-bold leading-snug"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--ev-navy)' }}
                    >
                      {sol.title}
                    </h3>
                    <p className="text-sm text-ev-gray-400 leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>

                  {/* Bottom accent bar */}
                  <div
                    className="h-1 rounded-full mt-auto"
                    style={{ background: sol.gradient }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Arrow buttons ── */}
        <button
          onClick={prev}
          id="solutions-prev"
          aria-label="Previous solution"
          className="absolute left-4 sm:left-8 lg:left-16 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 hover:shadow-xl hover:scale-110 transition-all duration-200"
          style={{ color: 'var(--ev-navy)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={next}
          id="solutions-next"
          aria-label="Next solution"
          className="absolute right-4 sm:right-8 lg:right-16 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 hover:shadow-xl hover:scale-110 transition-all duration-200"
          style={{ color: 'var(--ev-navy)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* ── Dot indicators ── */}
      <div className="flex items-center justify-center gap-2 mt-10 relative z-10">
        {solutions.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? 28 : 8,
              height: 8,
              background: i === active
                ? 'linear-gradient(90deg, var(--ev-accent), var(--ev-gold))'
                : '#d1d5db',
            }}
          />
        ))}
      </div>

      {/* ── Section CTA ── */}
      <div className="ev-container relative z-10 mt-20 text-center">
        <div
          className="rounded-3xl py-14 px-8 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1A0533 0%, #2D0A52 55%, #3B1070 100%)' }}
        >
          {/* orb */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, var(--ev-accent) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }}
          />
          <h3
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Let&apos;s Build a Workplace{' '}
            <span className="bg-gradient-to-r from-ev-accent to-ev-gold bg-clip-text text-transparent">
              People Remember.
            </span>
          </h3>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Create experiences your employees will look forward to — not just events they&apos;ll
            attend.
          </p>
          <Link
            href="/contact"
            id="solutions-cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 hover:scale-105 hover:shadow-2xl"
            style={{ background: 'linear-gradient(135deg, var(--ev-accent) 0%, var(--ev-gold) 100%)' }}
          >
            Start a Conversation
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
