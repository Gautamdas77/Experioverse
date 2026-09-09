import Link from 'next/link';
import HeroSection from './components/HeroSection';
import TrustedBrands from './components/TrustedBrands';
import SolutionsGrid from './components/SolutionsGrid';
import WhyExperioverse from './components/WhyExperioverse';
import HowWeWork from './components/HowWeWork';
import ExperiencesGallery from './components/ExperiencesGallery';
import Testimonials from './components/Testimonials';

export default function HomePage() {
  return (
    <>
      {/* ═══════ 1. HERO ═══════ */}
      <HeroSection />

      {/* ═══════ 2. TRUSTED BRANDS ═══════ */}
      <TrustedBrands />

      {/* ═══════ 3. SOLUTIONS GRID ═══════ */}
      <SolutionsGrid />

      {/* ═══════ 4. WHY EXPERIOVERSE ═══════ */}
      <WhyExperioverse />

      {/* ═══════ 5. HOW WE WORK ═══════ */}
      <HowWeWork />

      {/* ═══════ 6. EXPERIENCES GALLERY ═══════ */}
      <ExperiencesGallery />

      {/* ═══════ 7. TESTIMONIALS ═══════ */}
      <Testimonials />

      {/* ═══════ 8. FINAL CTA BANNER ═══════ */}
      <section
        id="final-cta"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #7c3aed 0%, #e91e8c 50%, #f97316 100%)',
          padding: '0',
        }}
      >
        {/* Overlay for depth */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(135deg, rgba(15,5,30,0.30) 0%, rgba(15,5,30,0.10) 50%, rgba(15,5,30,0.20) 100%)',
        }} />
        {/* Dot pattern */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.10) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        {/* Light orb top-right */}
        <div style={{
          position: 'absolute', top: '-30%', right: '-5%',
          width: 300, height: 300, borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />

        <div
          className="ev-container"
          style={{
            position: 'relative', zIndex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            gap: '3rem',
            padding: '60px 1.5rem',
          }}
          className="cta-banner-grid"
        >
          <style>{`
            .cta-banner-grid { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 3rem; }
            @media (max-width: 768px) {
              .cta-banner-grid { grid-template-columns: 1fr !important; text-align: center; }
            }
          `}</style>

          {/* Left — Heading */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: 0,
              letterSpacing: '-0.01em',
            }}>
              Ready to create
              <br />
              experiences that
              <br />
              <span style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>
                matter?
              </span>
            </h2>
          </div>

          {/* Right — Tagline + CTA */}
          <div>
            <p style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.80)',
              lineHeight: 1.7,
              marginBottom: 28,
              maxWidth: 360,
            }}>
              Let&apos;s make your next event or program your best one yet.
            </p>
            <Link
              href="/contact"
              id="cta-banner-connect"
              className="cta-white-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
