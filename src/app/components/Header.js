'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// ─── All mega-menu content ────────────────────────────────────────────────────
const MENU_DATA = {
  'Offsite Events': {
    type: 'offsite',
    leftPanel: {
      badge: 'OFFSITE EVENTS',
      heading: 'Explore experiences designed to bring teams together.',
      desc: 'From scenic getaways to curated local adventures, we create offsites that inspire, re-energize and build stronger connections.',
    },
    columns: [
      {
        icon: '📍',
        title: 'NATIONAL',
        items: ['Rishikesh', 'Rajasthan', 'Amritsar', 'Goa', 'Kerala', 'Customized Location'],
      },
      {
        icon: '🌐',
        title: 'INTERNATIONAL',
        items: ['Bangkok', 'Dubai', 'Vietnam', 'Singapore', 'Bali', 'Customized Location'],
      },
      {
        icon: '☀️',
        title: 'DAY OUTINGS',
        items: [
          'Adventure & Outdoor', 'Architecture & Heritage', 'Nature & Scenic',
          'Food & Culinary', 'Entertainment', 'Sports & Games',
          'City Experiences', 'Custom Day Outings',
        ],
      },
    ],
    cta: 'Explore All Offsites',
  },

  'Team Building': {
    type: 'standard',
    header: {
      heading: 'Team Building',
      desc: 'Experiences that connect people, build trust and strengthen teams.',
    },
    columns: [
      {
        title: 'INDOOR',
        items: [
          'Ice Breakers', 'Team Challenges', 'Problem Solving',
          'Creative Activities', 'Communication Games', 'Fun & Interactive Games',
        ],
      },
      {
        title: 'OUTDOOR',
        items: [
          'Adventure Challenges', 'Sports Tournaments', 'Treasure Hunts',
          'Large Group Activities', 'Outdoor Team Challenges', 'Custom Activities',
        ],
      },
      {
        title: 'SIGNATURE EXPERIENCES',
        items: [
          { label: 'Team Olympics', badge: null },
          { label: 'Corporate Sports Day', badge: 'Popular' },
          { label: 'Adventure Camp', badge: 'Popular' },
          { label: 'Custom Team Building', badge: null },
        ],
      },
    ],
    cta: 'Explore Team Building',
  },

  'Rewards & Recognition': {
    type: 'standard',
    header: {
      heading: 'Rewards & Recognition',
      desc: 'Celebrate contribution. Recognize achievement. Inspire people.',
    },
    columns: [
      {
        title: 'RECOGNITION',
        items: ['Employee Recognition', 'Milestone Recognition', 'Long Service Awards', 'Spot Awards'],
      },
      {
        title: 'REWARDS',
        items: ['Employee Rewards', 'Performance Rewards', 'Experience Rewards', 'Gift & Reward Programs'],
      },
      {
        title: 'AWARDS & EVENTS',
        items: ['Awards Nights', 'Recognition Ceremonies', 'Annual Awards', 'Custom Recognition Events'],
      },
    ],
    cta: 'Explore Rewards & Recognition',
  },

  'Theme Events': {
    type: 'theme',
    header: {
      heading: 'Theme Events',
      desc: 'Transform your event into an experience people remember.',
    },
    columns: [
      {
        title: 'CORPORATE THEMES',
        items: ['Retro', 'Bollywood', 'Carnival', 'Casino Night', 'Black & White', 'Around the World', 'Cultural Themes'],
      },
      {
        title: 'CELEBRATION THEMES',
        items: ['Festival Themes', 'Annual Day Themes', 'Gala Night', 'Award Night', 'Christmas', 'New Year'],
      },
    ],
    imageLabels: ['Retro', 'Bollywood', 'Carnival', 'Gala'],
    cta: 'Explore Theme Events',
  },

  'Wellness Programs': {
    type: 'standard',
    header: {
      heading: 'Wellness Programs',
      desc: 'Helping people feel healthier, happier and more energized at work.',
    },
    columns: [
      {
        title: 'PHYSICAL WELLNESS',
        items: ['Fitness Programs', 'Sports & Fitness', 'Yoga', 'Nutrition'],
      },
      {
        title: 'MENTAL WELLNESS',
        items: ['Stress Management', 'Mindfulness', 'Meditation', 'Mental Health Sessions'],
      },
      {
        title: 'WORKPLACE WELLNESS',
        items: ['Wellness Weeks', 'Health Camps', 'Wellness Challenges', 'Employee Wellness Programs'],
      },
    ],
    cta: 'Explore Wellness Programs',
  },
};

const NAV_KEYS = Object.keys(MENU_DATA);

// ─── Shared sub-components ────────────────────────────────────────────────────

function ChevronDown({ open }) {
  return (
    <svg
      width="11" height="11" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
      style={{ transition: 'transform 0.2s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ColTitle({ icon, title }) {
  return (
    <div style={{
      fontSize: 10.5, fontWeight: 800, letterSpacing: '0.10em',
      color: '#7c3aed', marginBottom: 14,
      fontFamily: 'var(--font-heading)',
      display: 'flex', alignItems: 'center', gap: 5,
    }}>
      {icon && <span style={{ fontSize: 14 }}>{icon}</span>}
      {title}
    </div>
  );
}

function ColLink({ item }) {
  const label = typeof item === 'string' ? item : item.label;
  const badge = typeof item === 'object' ? item.badge : null;
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
      <Link
        href="/contact"
        style={{ fontSize: 13, color: '#4b5563', textDecoration: 'none', fontFamily: 'var(--font-body)', transition: 'color 0.15s' }}
        onMouseEnter={e => { e.currentTarget.style.color = '#e91e8c'; }}
        onMouseLeave={e => { e.currentTarget.style.color = '#4b5563'; }}
      >
        {label}
      </Link>
      {badge && (
        <span style={{
          fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 4,
          background: '#e91e8c', color: '#fff', letterSpacing: '0.04em',
          fontFamily: 'var(--font-heading)', flexShrink: 0,
        }}>
          {badge}
        </span>
      )}
    </li>
  );
}

function MenuCol({ col }) {
  return (
    <div style={{ flex: 1, minWidth: 130 }}>
      <ColTitle icon={col.icon} title={col.title} />
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {col.items.map((item, i) => <ColLink key={i} item={item} />)}
      </ul>
    </div>
  );
}

// Image placeholder — replace src="" with real image path when ready
function ImgBox({ label = '', style = {} }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(124,58,237,0.10), rgba(233,30,140,0.08))',
      border: '1.5px dashed rgba(124,58,237,0.22)',
      borderRadius: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#a78bfa', fontSize: 11, fontFamily: 'var(--font-body)',
      textAlign: 'center', padding: 8,
      ...style,
    }}>
      {/* Replace with <img src="..." /> when image is ready */}
      {label || 'Image'}
    </div>
  );
}

function ExploreCta({ label }) {
  return (
    <Link
      href="/contact"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontSize: 12.5, fontWeight: 700, color: '#7c3aed',
        textDecoration: 'none', fontFamily: 'var(--font-heading)',
        transition: 'color 0.15s',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={e => { e.currentTarget.style.color = '#e91e8c'; }}
      onMouseLeave={e => { e.currentTarget.style.color = '#7c3aed'; }}
    >
      {label} <span style={{ fontSize: 15 }}>→</span>
    </Link>
  );
}

// ─── Mega-menu layouts ────────────────────────────────────────────────────────

function OffsitePanel({ data }) {
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 0 }}>
      {/* Dark left panel */}
      <div style={{
        width: 210, flexShrink: 0,
        background: 'linear-gradient(160deg, #0f051e 0%, #1a0a3c 100%)',
        borderRadius: 12,
        padding: '24px 22px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        marginRight: 28,
      }}>
        <div>
          <span style={{
            fontSize: 9.5, fontWeight: 800, letterSpacing: '0.14em',
            color: '#e91e8c', fontFamily: 'var(--font-heading)', display: 'block', marginBottom: 10,
          }}>
            {data.leftPanel.badge}
          </span>
          <h3 style={{
            fontSize: 16, fontWeight: 800, color: '#ffffff',
            fontFamily: 'var(--font-heading)', lineHeight: 1.35, marginBottom: 10,
          }}>
            {data.leftPanel.heading}
          </h3>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.56)', lineHeight: 1.65, fontFamily: 'var(--font-body)' }}>
            {data.leftPanel.desc}
          </p>
        </div>
        <ImgBox label="Offsite Image" style={{ height: 80, marginTop: 18 }} />
      </div>

      {/* Columns */}
      <div style={{ flex: 1, display: 'flex', gap: 28 }}>
        {data.columns.map(col => <MenuCol key={col.title} col={col} />)}
      </div>

      {/* Right image + CTA */}
      <div style={{ width: 180, flexShrink: 0, paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <ImgBox label="New places, Stronger teams" style={{ flex: 1 }} />
        <ExploreCta label={data.cta} />
      </div>
    </div>
  );
}

function StandardPanel({ data }) {
  return (
    <div>
      {/* Header row */}
      <div style={{ marginBottom: 18, paddingBottom: 14, borderBottom: '1px solid rgba(124,58,237,0.10)' }}>
        <h3 style={{ fontSize: 15, fontWeight: 800, color: '#1a0a3c', fontFamily: 'var(--font-heading)', marginBottom: 3 }}>
          {data.header.heading}
        </h3>
        <p style={{ fontSize: 12, color: '#6b7280', fontFamily: 'var(--font-body)' }}>
          {data.header.desc}
        </p>
      </div>

      <div style={{ display: 'flex', gap: 0 }}>
        {/* Columns */}
        <div style={{ flex: 1, display: 'flex', gap: 28 }}>
          {data.columns.map(col => <MenuCol key={col.title} col={col} />)}
        </div>

        {/* Right: image + CTA */}
        <div style={{ width: 155, flexShrink: 0, paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <ImgBox style={{ flex: 1, minHeight: 110 }} />
          <ExploreCta label={data.cta} />
        </div>
      </div>
    </div>
  );
}

function ThemePanel({ data }) {
  return (
    <div>
      {/* Header row */}
      <div style={{ marginBottom: 18, paddingBottom: 14, borderBottom: '1px solid rgba(124,58,237,0.10)' }}>
        <h3 style={{ fontSize: 15, fontWeight: 800, color: '#1a0a3c', fontFamily: 'var(--font-heading)', marginBottom: 3 }}>
          {data.header.heading}
        </h3>
        <p style={{ fontSize: 12, color: '#6b7280', fontFamily: 'var(--font-body)' }}>
          {data.header.desc}
        </p>
      </div>

      <div style={{ display: 'flex', gap: 28 }}>
        {/* Columns */}
        {data.columns.map(col => <MenuCol key={col.title} col={col} />)}

        {/* 2×2 image grid */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {data.imageLabels.map(lbl => (
            <ImgBox key={lbl} label={lbl} style={{ height: 72 }} />
          ))}
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <ExploreCta label={data.cta} />
      </div>
    </div>
  );
}

function MegaPanel({ name }) {
  const data = MENU_DATA[name];
  if (data.type === 'offsite') return <OffsitePanel data={data} />;
  if (data.type === 'theme') return <ThemePanel data={data} />;
  return <StandardPanel data={data} />;
}

// ─── Header ───────────────────────────────────────────────────────────────────

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimer = useRef(null);

  // Keep dropdown open while mouse moves between trigger and panel
  const onEnter = (name) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(name);
  };
  const onLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ── Fixed header bar ── */}
      <header
        id="site-header"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          transition: 'background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          background: isScrolled ? 'rgba(15,5,30,0.97)' : 'rgba(10,3,20,0.78)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled ? '1px solid rgba(233,30,140,0.18)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.40)' : 'none',
        }}
      >
        <div
          className="ev-container"
          style={{ height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}
        >
          {/* Logo */}
          <Link href="/" id="header-logo" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, textDecoration: 'none' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/new-logo-transparent.png" alt="Experio Verse" style={{ height: 38, width: 'auto', objectFit: 'contain' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/experioverse-transparent.png" alt="ExperioVerse" style={{ height: 30, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </Link>

          {/* Desktop nav — hidden below lg */}
          <nav
            id="desktop-nav"
            className="hidden lg:flex"
            style={{ alignItems: 'center', gap: 2, flex: 1, justifyContent: 'center' }}
          >
            {NAV_KEYS.map(name => (
              <div
                key={name}
                onMouseEnter={() => onEnter(name)}
                onMouseLeave={onLeave}
              >
                <button
                  style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    padding: '8px 13px',
                    background: openMenu === name ? 'rgba(255,255,255,0.09)' : 'transparent',
                    border: 'none', cursor: 'pointer',
                    color: openMenu === name ? '#ffffff' : 'rgba(255,255,255,0.82)',
                    fontSize: 13.5, fontWeight: 500,
                    fontFamily: 'var(--font-body)',
                    borderRadius: 8,
                    transition: 'color 0.15s, background 0.15s',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = openMenu === name ? '#ffffff' : 'rgba(255,255,255,0.82)'; }}
                >
                  {name}
                  <ChevronDown open={openMenu === name} />
                </button>
              </div>
            ))}
          </nav>

          {/* CTA + mobile hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <Link
              href="/contact"
              id="header-lets-connect"
              className="hidden sm:inline-flex"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '10px 22px',
                background: 'linear-gradient(135deg, #e91e8c 0%, #7c3aed 100%)',
                color: '#ffffff', borderRadius: 50,
                fontSize: 13.5, fontWeight: 700,
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                boxShadow: '0 4px 20px rgba(233,30,140,0.40)',
                letterSpacing: '0.02em',
                transition: 'transform 0.2s, box-shadow 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(233,30,140,0.55)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(233,30,140,0.40)'; }}
            >
              Let&apos;s Connect →
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              style={{
                width: 40, height: 40, borderRadius: 8,
                background: 'rgba(255,255,255,0.08)', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <div style={{ width: 20, height: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <span style={{ display: 'block', height: 2, background: '#fff', borderRadius: 2, transition: 'all 0.3s', transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 7px)' : 'none' }} />
                <span style={{ display: 'block', height: 2, background: '#fff', borderRadius: 2, transition: 'all 0.3s', opacity: isMobileMenuOpen ? 0 : 1 }} />
                <span style={{ display: 'block', height: 2, background: '#fff', borderRadius: 2, transition: 'all 0.3s', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -7px)' : 'none' }} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mega-menu dropdown panel ── */}
      {openMenu && (
        <div
          style={{
            position: 'fixed', top: 70, left: 0, right: 0, zIndex: 49,
            background: '#ffffff',
            borderTop: '2px solid rgba(124,58,237,0.12)',
            boxShadow: '0 20px 60px rgba(15,5,30,0.18)',
          }}
          onMouseEnter={cancelClose}
          onMouseLeave={onLeave}
        >
          <div className="ev-container" style={{ padding: '28px 0 32px' }}>
            <MegaPanel name={openMenu} />
          </div>
        </div>
      )}

      {/* ── Mobile slide-down menu ── */}
      <div
        id="mobile-menu"
        className="lg:hidden"
        style={{
          position: 'fixed', top: 70, left: 0, right: 0, bottom: 0, zIndex: 48,
          background: 'linear-gradient(160deg, #0f051e 0%, #1a0a3c 60%, #2d1557 100%)',
          overflowY: 'auto', padding: '24px 20px 40px',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: isMobileMenuOpen ? 1 : 0,
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {NAV_KEYS.map((name, i) => (
            <Link
              key={name}
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 18px',
                color: '#ffffff', textDecoration: 'none',
                fontSize: 15, fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                borderRadius: 10,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.09)',
                transition: 'background 0.2s',
              }}
            >
              {name}
              <span style={{ color: 'rgba(255,255,255,0.40)', fontSize: 18 }}>›</span>
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              marginTop: 20, display: 'block', textAlign: 'center',
              padding: '16px 20px',
              background: 'linear-gradient(135deg, #e91e8c, #7c3aed)',
              color: '#ffffff', borderRadius: 50,
              fontSize: 15, fontWeight: 700,
              textDecoration: 'none', fontFamily: 'var(--font-heading)',
              boxShadow: '0 6px 24px rgba(233,30,140,0.40)',
            }}
          >
            Let&apos;s Connect →
          </Link>
        </div>
      </div>
    </>
  );
}
