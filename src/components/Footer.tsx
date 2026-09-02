import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-light)',
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-lg)',
        borderTop: '1px solid var(--border-dark)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--space-xl)',
            marginBottom: 'var(--space-xl)',
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <span
              className="editorial-serif"
              style={{
                fontSize: '1.5rem',
                color: 'var(--accent-gold)',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Gold Mountain
            </span>
            <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-small)', lineHeight: '1.7' }}>
              A peaceful wellness resort located in the natural and spiritual surroundings of Arunachala, Tiruvannamalai.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4
              style={{
                color: 'var(--accent-gold)',
                fontSize: 'var(--fs-small)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-primary)',
                fontWeight: 400,
              }}
            >
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Wellness', 'Stay', 'Experience', 'About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    style={{
                      color: 'var(--text-light-muted)',
                      fontSize: 'var(--fs-small)',
                      transition: 'var(--transition-fast)',
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div>
            <h4
              style={{
                color: 'var(--accent-gold)',
                fontSize: 'var(--fs-small)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-primary)',
                fontWeight: 400,
              }}
            >
              Connect
            </h4>
            <div style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-small)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <p style={{ color: 'var(--text-light-muted)' }}>Tiruvannamalai, Tamil Nadu, India</p>
              <p style={{ color: 'var(--text-light-muted)' }}>Near Arunachala Hill</p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-gold)' }}
              >
                WhatsApp: +91 98765 43210
              </a>
              <a href="mailto:info@goldmountainwellness.com" style={{ color: 'var(--text-light-muted)' }}>
                info@goldmountainwellness.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p style={{ color: 'inherit' }}>
            &copy; {new Date().getFullYear()} Gold Mountain Wellness Resort. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ color: 'inherit' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ color: 'inherit' }}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
