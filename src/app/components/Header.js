'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Why EV', href: '/why-experio-verse' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
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

  // Lock body scroll when mobile menu is open
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
      className="fixed top-6 left-0 right-0 z-50 transition-all duration-300 pointer-events-none"
    >
      <div className="ev-container flex justify-center">
        <div className="w-full max-w-[1280px] pointer-events-auto backdrop-blur-xl rounded-[14px] px-5 py-3 shadow-xl flex items-center justify-between" style={{ background: 'rgba(250,245,255,0.92)', border: '1px solid rgba(238,146,208,0.20)', boxShadow: '0 4px 24px rgba(35,27,53,0.10), 0 0 0 1px rgba(238,146,208,0.12)' }}>
          {/* Logo — icon + brand text */}
          <Link href="/" className="flex items-center gap-3 group" id="header-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/new-logo-transparent.png"
              alt="Experio Verse"
              style={{ height: 44, width: 'auto', objectFit: 'contain' }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/experioverse-transparent.png"
              alt="ExperioVerse — Where People Connect"
              style={{ height: 36, width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4" id="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-8 py-2 rounded-lg text-[0.9rem] font-medium transition-all duration-200 text-ev-gray-600 hover:text-ev-navy hover:bg-ev-gray-50`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-semibold rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #EE92D0 0%, #5D4781 100%)', color: '#231B35', boxShadow: '0 4px 20px rgba(238,146,208,0.40)' }}
              id="header-request-call"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Request a Call
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative w-10 h-10 rounded-lg flex items-center justify-center transition-colors text-ev-navy hover:bg-ev-gray-50`}
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 bg-ev-navy ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
                />
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 bg-ev-navy ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`block h-0.5 rounded-full transition-all duration-300 bg-ev-navy ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 backdrop-blur-lg transition-all duration-400 ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
        style={{ background: 'linear-gradient(135deg, #100C1E 0%, #231B35 60%, #2E2148 100%)' }}
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
            className={`mt-6 inline-flex items-center gap-2 px-8 py-3.5 text-lg font-semibold rounded-full transition-all duration-300 ${isMobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
              }`}
            style={{
              fontFamily: 'var(--font-heading)',
              transitionDelay: isMobileMenuOpen ? `${navLinks.length * 60}ms` : '0ms',
              background: 'linear-gradient(135deg, #EE92D0 0%, #5D4781 100%)',
              color: '#231B35',
              boxShadow: '0 4px 20px rgba(238,146,208,0.40)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Request a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
