'use client';

import Link from 'next/link';

// ─── Reusable placeholder for image slots ────────────────────────────────────
function ImgBox({ label = 'Image', style = {} }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(124,58,237,0.10), rgba(233,30,140,0.08))',
      border: '1.5px dashed rgba(124,58,237,0.25)',
      borderRadius: 12,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#a78bfa', fontSize: 12,
      fontFamily: 'var(--font-body)', textAlign: 'center', padding: 10,
      ...style,
    }}>
      {/* Replace inner content with <img src="..." /> when image is ready */}
      {label}
    </div>
  );
}

// ─── Individual item card ────────────────────────────────────────────────────
function ItemCard({ item }) {
  const label = typeof item === 'string' ? item : item.label;
  const badge = typeof item === 'object' ? item.badge : null;
  return (
    <Link href="/contact" style={{ textDecoration: 'none' }}>
      <div
        style={{
          padding: '16px 20px',
          borderRadius: 12,
          background: '#ffffff',
          border: '1.5px solid rgba(124,58,237,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 8px rgba(15,5,30,0.05)',
          cursor: 'pointer',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(233,30,140,0.35)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(233,30,140,0.12)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(124,58,237,0.12)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(15,5,30,0.05)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 600, color: '#1a0a3c', fontFamily: 'var(--font-body)', lineHeight: 1.3 }}>
          {label}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
          {badge && (
            <span style={{
              fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 4,
              background: '#e91e8c', color: '#fff', letterSpacing: '0.04em',
              fontFamily: 'var(--font-heading)',
            }}>
              {badge}
            </span>
          )}
          <span style={{ color: '#e91e8c', fontSize: 18, lineHeight: 1 }}>›</span>
        </div>
      </div>
    </Link>
  );
}

// ─── Category section block ──────────────────────────────────────────────────
function CategoryBlock({ cat, index }) {
  const isAlt = index % 2 !== 0;
  return (
    <section
      id={cat.anchor}
      style={{
        padding: '72px 0',
        background: isAlt ? '#faf5ff' : '#ffffff',
        borderTop: '1px solid rgba(124,58,237,0.07)',
      }}
    >
      <div className="ev-container">
        <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Left: title + description */}
          <div style={{ flex: '0 0 240px' }}>
            {cat.icon && (
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'linear-gradient(135deg, rgba(233,30,140,0.12), rgba(124,58,237,0.12))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24, marginBottom: 16,
              }}>
                {cat.icon}
              </div>
            )}
            <p style={{
              fontSize: 10.5, fontWeight: 800, letterSpacing: '0.12em',
              color: '#7c3aed', fontFamily: 'var(--font-heading)',
              marginBottom: 8, textTransform: 'uppercase',
            }}>
              {cat.label || cat.title}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontWeight: 800, color: '#1a0a3c',
              lineHeight: 1.25, marginBottom: 12,
            }}>
              {cat.title}
            </h2>
            {cat.description && (
              <p style={{
                fontSize: 14, color: '#6b7280',
                fontFamily: 'var(--font-body)', lineHeight: 1.65,
              }}>
                {cat.description}
              </p>
            )}
            {cat.showImage && (
              <ImgBox
                label={`${cat.title} image`}
                style={{ width: '100%', height: 140, marginTop: 20 }}
              />
            )}
            <Link
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                marginTop: 20, fontSize: 13, fontWeight: 700,
                color: '#7c3aed', textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#e91e8c'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#7c3aed'; }}
            >
              Enquire Now →
            </Link>
          </div>

          {/* Right: items grid */}
          <div style={{
            flex: 1, minWidth: 280,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 12,
            alignContent: 'start',
          }}>
            {cat.items.map((item, i) => <ItemCard key={i} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main layout component (used by all 5 service pages) ─────────────────────
export default function ServicePage({ meta, categories, cta }) {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        paddingTop: 'calc(70px + 80px)',
        paddingBottom: 90,
        background: 'linear-gradient(160deg, #0f051e 0%, #1a0a3c 45%, #2d1557 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Background orbs */}
        <div style={{ position: 'absolute', top: '15%', left: '-8%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(233,30,140,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '-5%', width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div className="ev-container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap' }}>

            {/* Text */}
            <div style={{ flex: '1 1 480px' }}>
              <span style={{
                display: 'inline-block', padding: '5px 16px', borderRadius: 20,
                background: 'rgba(233,30,140,0.15)', border: '1px solid rgba(233,30,140,0.32)',
                color: '#e91e8c', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.12em', fontFamily: 'var(--font-heading)', marginBottom: 22,
              }}>
                {meta.badge}
              </span>

              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                fontWeight: 900, color: '#ffffff',
                lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: 22,
              }}>
                {meta.title}
              </h1>

              <p style={{
                fontSize: 'clamp(15px, 1.8vw, 17px)',
                color: 'rgba(255,255,255,0.68)',
                lineHeight: 1.75, fontFamily: 'var(--font-body)',
                maxWidth: 540, marginBottom: 36,
              }}>
                {meta.description}
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '13px 30px',
                    background: 'linear-gradient(135deg, #e91e8c, #7c3aed)',
                    color: '#fff', borderRadius: 50, fontSize: 14, fontWeight: 700,
                    textDecoration: 'none', fontFamily: 'var(--font-heading)',
                    boxShadow: '0 6px 26px rgba(233,30,140,0.42)',
                  }}
                >
                  Get a Custom Quote →
                </Link>
                <Link
                  href="/"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '13px 28px',
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fff', borderRadius: 50, fontSize: 14, fontWeight: 600,
                    textDecoration: 'none', fontFamily: 'var(--font-heading)',
                    border: '1px solid rgba(255,255,255,0.18)',
                  }}
                >
                  Back to Home
                </Link>
              </div>
            </div>

            {/* Hero image placeholder */}
            <div style={{ flex: '0 1 340px' }}>
              <ImgBox label={`${meta.badge} hero image`} style={{ width: '100%', height: 280, borderRadius: 16 }} />
            </div>
          </div>

          {/* Quick-jump anchors */}
          <div style={{
            display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 48,
            paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.10)',
          }}>
            {categories.map(cat => (
              <a
                key={cat.anchor || cat.title}
                href={`#${cat.anchor || cat.title.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  padding: '7px 18px', borderRadius: 20,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.80)',
                  fontSize: 12.5, fontWeight: 600,
                  textDecoration: 'none', fontFamily: 'var(--font-body)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(233,30,140,0.20)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(233,30,140,0.40)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.80)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category sections ── */}
      {categories.map((cat, i) => <CategoryBlock key={cat.title} cat={cat} index={i} />)}

      {/* ── CTA Banner ── */}
      <section style={{
        padding: '88px 0',
        background: 'linear-gradient(135deg, #e91e8c 0%, #7c3aed 55%, #1a0a3c 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.12)', pointerEvents: 'none' }} />
        <div className="ev-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 900, color: '#ffffff', marginBottom: 16,
          }}>
            {cta?.heading || 'Ready to create an unforgettable experience?'}
          </h2>
          <p style={{
            fontSize: 16, color: 'rgba(255,255,255,0.82)',
            fontFamily: 'var(--font-body)', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px',
          }}>
            {cta?.subtext || "Talk to our experience experts. Let's design something extraordinary together."}
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '15px 40px',
              background: '#ffffff', color: '#e91e8c',
              borderRadius: 50, fontSize: 15, fontWeight: 800,
              textDecoration: 'none', fontFamily: 'var(--font-heading)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
              letterSpacing: '0.02em',
            }}
          >
            Let&apos;s Connect →
          </Link>
        </div>
      </section>
    </>
  );
}
