'use client';

import Link from 'next/link';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/#solutions-grid' },
  { label: 'How We Work', href: '/#how-we-work' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact Us', href: '/contact' },
];

const solutionLinks = [
  { label: 'Employee Engagement', href: '/contact' },
  { label: 'Corporate Celebrations', href: '/contact' },
  { label: 'Wellness & Wellbeing', href: '/contact' },
  { label: 'Mental Health Support', href: '/contact' },
  { label: 'Leadership Development', href: '/contact' },
  { label: 'Sports & Fitness', href: '/contact' },
  { label: 'Annual Days & Galas', href: '/contact' },
  { label: 'Custom Experiences', href: '/contact' },
];

const aboutLinks = [
  { label: 'Our Story', href: '/' },
  { label: 'Our Approach', href: '/#how-we-work' },
  { label: 'Get In Touch', href: '/contact' },
];

const socialLinks = [
  {
    name: 'LinkedIn', href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Instagram', href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Facebook', href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'YouTube', href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="text-white relative overflow-hidden"
      id="site-footer"
      style={{
        background: 'linear-gradient(180deg, #0f051e 0%, #070310 100%)',
        borderTop: '1px solid rgba(233,30,140,0.15)',
      }}
    >
      {/* Background glow */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(233,30,140,0.5), transparent)', pointerEvents: 'none' }} />

      {/* Main Footer Grid */}
      <div className="ev-container py-14">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1.6fr 1fr 1.4fr',
          gap: '2.5rem',
        }}
          className="footer-grid"
        >
          <style>{`
            @media (max-width: 1100px) {
              .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
            }
            @media (max-width: 700px) {
              .footer-grid { grid-template-columns: 1fr 1fr !important; }
            }
            @media (max-width: 480px) {
              .footer-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 inline-flex" id="footer-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/new-logo-transparent.png"
                alt="Experio Verse"
                style={{ height: 40, width: 'auto', objectFit: 'contain' }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/experioverse-transparent.png"
                alt="ExperioVerse"
                style={{ height: 30, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 20, maxWidth: 220, marginTop: 8 }}>
              We are an employee experience company helping organizations engage, inspire and empower their people through meaningful experiences.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  style={{
                    width: 34, height: 34, borderRadius: 8,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.50)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(233,30,140,0.20)'; e.currentTarget.style.color = '#e91e8c'; e.currentTarget.style.borderColor = 'rgba(233,30,140,0.35)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.50)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 style={{
              fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.80)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              marginBottom: 18, fontFamily: 'var(--font-heading)',
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: 13, color: 'rgba(255,255,255,0.48)',
                      textDecoration: 'none', transition: 'color 0.2s ease',
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#e91e8c'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.48)'; }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(233,30,140,0.5)', display: 'inline-block', flexShrink: 0 }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Solutions */}
          <div>
            <h4 style={{
              fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.80)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              marginBottom: 18, fontFamily: 'var(--font-heading)',
            }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: 13, color: 'rgba(255,255,255,0.48)',
                      textDecoration: 'none', transition: 'color 0.2s ease',
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#e91e8c'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.48)'; }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(233,30,140,0.5)', display: 'inline-block', flexShrink: 0 }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — About Us */}
          <div>
            <h4 style={{
              fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.80)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              marginBottom: 18, fontFamily: 'var(--font-heading)',
            }}>
              About Us
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 28 }}>
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: 13, color: 'rgba(255,255,255,0.48)',
                      textDecoration: 'none', transition: 'color 0.2s ease',
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#e91e8c'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.48)'; }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(233,30,140,0.5)', display: 'inline-block', flexShrink: 0 }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Pan India presence tag */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '6px 14px', borderRadius: 999,
              background: 'rgba(233,30,140,0.10)',
              border: '1px solid rgba(233,30,140,0.22)',
              fontSize: 11, color: 'rgba(255,255,255,0.55)',
              fontFamily: 'var(--font-heading)', letterSpacing: '0.04em',
            }}>
              <span style={{ fontSize: 12 }}>🗺️</span>
              Pan India Presence
            </div>
          </div>

          {/* Col 5 — Get In Touch */}
          <div>
            <h4 style={{
              fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.80)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              marginBottom: 18, fontFamily: 'var(--font-heading)',
            }}>
              Get In Touch
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="1.8" strokeLinecap="round" style={{ marginTop: 2, flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+919876543210" style={{ fontSize: 13, color: 'rgba(255,255,255,0.48)', textDecoration: 'none', transition: 'color 0.2s ease', lineHeight: 1.4 }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.48)'}
                >+91 98765 43210</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="1.8" strokeLinecap="round" style={{ marginTop: 2, flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:hello@experioverse.com" style={{ fontSize: 13, color: 'rgba(255,255,255,0.48)', textDecoration: 'none', transition: 'color 0.2s ease', lineHeight: 1.4 }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.48)'}
                >hello@experioverse.com</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="1.8" strokeLinecap="round" style={{ marginTop: 2, flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.48)', lineHeight: 1.4 }}>Pan India Presence</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="ev-container" style={{
          padding: '18px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', margin: 0 }}>
            © {new Date().getFullYear()} ExperioVerse. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/privacy-policy" style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.70)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}
            >
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.70)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
