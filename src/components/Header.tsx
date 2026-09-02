'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MobileNav } from './MobileNav';

const NAV_LINKS = [
  { label: 'Wellness', href: '/wellness' },
  { label: 'Stay', href: '/stay' },
  { label: 'Experience', href: '/experience' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

interface HeaderProps {
  transparentOnTop?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ transparentOnTop = false }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(!transparentOnTop);

  useEffect(() => {
    if (!transparentOnTop) return;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transparentOnTop]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: isScrolled ? 'rgba(251, 249, 245, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
        zIndex: 900,
        height: isScrolled ? '4.25rem' : '5.5rem',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Image
            src="/images/logo white and black.png"
            alt="Gold Mountain Wellness Resort"
            width={isScrolled ? 42 : 48}
            height={isScrolled ? 42 : 48}
            style={{ objectFit: 'contain', transition: 'all 0.35s ease' }}
            priority
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              className="editorial-serif"
              style={{
                fontSize: isScrolled ? '1.15rem' : '1.3rem',
                fontWeight: 700,
                color: isScrolled ? 'var(--text-primary)' : 'var(--text-light)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                transition: 'color 0.35s ease, font-size 0.35s ease',
              }}
            >
              Gold Mountain
            </span>
            <span
              style={{
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--accent-gold)',
                fontWeight: 700,
              }}
            >
              Wellness Resort
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 'var(--fs-small)',
                fontWeight: 500,
                color: isScrolled ? 'var(--text-primary)' : 'var(--text-light)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                transition: 'color 0.35s ease',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="#enquire"
            className="btn"
            style={{
              padding: isScrolled ? '0.5rem 1.15rem' : '0.6rem 1.35rem',
              fontSize: '0.75rem',
              backgroundColor: isScrolled ? 'transparent' : 'rgba(251, 249, 245, 0.15)',
              color: isScrolled ? 'var(--text-primary)' : 'var(--text-light)',
              borderColor: isScrolled ? 'var(--border-subtle)' : 'rgba(251, 249, 245, 0.35)',
              backdropFilter: isScrolled ? 'none' : 'blur(4px)',
              transition: 'all 0.35s ease',
            }}
          >
            Enquire
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileNavOpen(true)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: isScrolled ? 'var(--text-primary)' : 'var(--text-light)',
              transition: 'color 0.35s ease',
            }}
            className="mobile-toggle"
            aria-label="Open navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} navLinks={NAV_LINKS} />

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
