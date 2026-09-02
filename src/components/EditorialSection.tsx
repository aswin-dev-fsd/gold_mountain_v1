'use client';

import React from 'react';
import Image from 'next/image';

interface EditorialSectionProps {
  eyebrow?: string;
  title: string;
  content: string | React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  cta?: React.ReactNode;
  dark?: boolean;
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({
  eyebrow,
  title,
  content,
  imageSrc,
  imageAlt,
  imagePosition = 'left',
  cta,
  dark = false,
}) => {
  return (
    <section
      className="section"
      style={{
        backgroundColor: dark ? 'var(--bg-dark)' : 'transparent',
        color: dark ? 'var(--text-light)' : 'var(--text-primary)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-xl)',
            alignItems: 'center',
          }}
        >
          {/* Image Block */}
          <div
            className="editorial-image-block"
            style={{
              order: imagePosition === 'right' ? 2 : 1,
              position: 'relative',
              borderRadius: '2px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-subtle)',
              aspectRatio: '4/3',
            }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Text Block */}
          <div className="editorial-text-block" style={{ order: imagePosition === 'right' ? 1 : 2 }}>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2
              className="editorial-serif"
              style={{
                fontSize: 'var(--fs-h2)',
                color: dark ? 'var(--text-light)' : 'var(--text-primary)',
                marginBottom: 'var(--space-md)',
                lineHeight: '1.2',
              }}
            >
              {title}
            </h2>
            <div
              style={{
                color: dark ? 'var(--text-light-muted)' : 'var(--text-muted)',
                fontSize: 'var(--fs-body)',
                lineHeight: '1.7',
                marginBottom: cta ? 'var(--space-md)' : '0',
              }}
            >
              {content}
            </div>
            {cta && <div>{cta}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};
