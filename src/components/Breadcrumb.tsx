import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        paddingTop: 'var(--space-md)',
        paddingBottom: 'var(--space-md)',
        fontSize: 'var(--fs-caption)',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
      }}
    >
      <div className="container">
        <ol style={{ display: 'flex', listStyle: 'none', gap: '0.5rem', alignItems: 'center' }}>
          <li>
            <Link href="/" style={{ color: 'var(--text-muted)' }}>
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>/</span>
              {item.href ? (
                <Link href={item.href} style={{ color: 'var(--text-muted)' }}>
                  {item.label}
                </Link>
              ) : (
                <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};
