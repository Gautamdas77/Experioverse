'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Why Us', href: '/why-experio-verse' },
  { label: 'Solutions for You', href: '/services', hasDropdown: true },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'About Us', href: '/about' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      id="site-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled
          ? 'rgba(15, 5, 30, 0.95)'
          : 'rgba(10, 3, 20, 0.70)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid rgba(233, 30, 140, 0.15)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div className="ev-container flex items-center justify-between" style={{ height: 70 }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0" id="header-logo">
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
            style={{ height: 32, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
          />
        </Link>

        {/* Desktop Navigation — centered */}
        <nav className="hidden lg:flex items-center gap-1" id="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.85)' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; e.currentTarget.style.background = 'transparent'; }}
            >
              {link.label}
              {link.hasDropdown && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            id="header-lets-connect"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              background: 'linear-gradient(135deg, #e91e8c 0%, #7c3aed 100%)',
              color: '#ffffff',
              boxShadow: '0 4px 20px rgba(233,30,140,0.40)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.02em',
            }}
          >
            Let&apos;s Connect
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
            style={{ color: '#ffffff', background: 'rgba(255,255,255,0.08)' }}
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 rounded-full transition-all duration-300 bg-white ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 bg-white ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 bg-white ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 transition-all duration-400 ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
        style={{ background: 'linear-gradient(160deg, #0f051e 0%, #1a0a3c 60%, #2d1557 100%)' }}
        id="mobile-menu"
      >
        <div className="flex flex-col items-center justify-center h-full gap-1 px-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-white text-2xl font-semibold py-3 px-6 rounded-xl hover:bg-white/10 transition-all duration-300 ${isMobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
                }`}
              style={{
                fontFamily: 'var(--font-heading)',
                transitionDelay: isMobileMenuOpen ? `${i * 60}ms` : '0ms',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mt-6 inline-flex items-center gap-2 px-8 py-3.5 text-lg font-bold rounded-full transition-all duration-300 ${isMobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
              }`}
            style={{
              fontFamily: 'var(--font-heading)',
              transitionDelay: isMobileMenuOpen ? `${navLinks.length * 60}ms` : '0ms',
              background: 'linear-gradient(135deg, #e91e8c 0%, #7c3aed 100%)',
              color: '#ffffff',
              boxShadow: '0 4px 20px rgba(233,30,140,0.40)',
            }}
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </header>
  );
}
