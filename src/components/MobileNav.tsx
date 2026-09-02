'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; href: string }>;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, navLinks }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-light)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 1.5rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <span className="editorial-serif" style={{ fontSize: '1.5rem', color: 'var(--accent-gold)' }}>
          Gold Mountain
        </span>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-light)',
            fontSize: '2rem',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          aria-label="Close navigation menu"
        >
          &times;
        </button>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="editorial-serif"
            style={{
              fontSize: '1.75rem',
              color: 'var(--text-light)',
              transition: 'var(--transition-fast)',
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--border-dark)' }}>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
};
