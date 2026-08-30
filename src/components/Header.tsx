'use client';

import React, { useState } from 'react';
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

export const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(251, 249, 245, 0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--border-subtle)',
        zIndex: 900,
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Image
            src="/images/logo white and black.png"
            alt="Gold Mountain Wellness Resort"
            width={48}
            height={48}
            style={{ objectFit: 'contain' }}
            priority
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              className="editorial-serif"
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
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
                color: 'var(--text-primary)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#enquire" className="btn btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem' }}>
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
              color: 'var(--text-primary)',
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
