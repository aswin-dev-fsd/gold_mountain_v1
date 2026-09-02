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
  backgroundImage?: string;
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
  backgroundImage,
}) => {
  const isDark = dark || !!backgroundImage;

  return (
    <section
      className="section"
      style={{
        position: 'relative',
        backgroundColor: isDark ? 'var(--bg-dark)' : 'transparent',
        color: isDark ? 'var(--text-light)' : 'var(--text-primary)',
        overflow: 'hidden',
      }}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={title}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', zIndex: 0 }}
            priority={false}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(20, 36, 25, 0.92) 0%, rgba(20, 36, 25, 0.75) 50%, rgba(20, 36, 25, 0.4) 100%)',
              zIndex: 1,
            }}
          />
        </>
      )}

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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
                color: isDark ? 'var(--text-light)' : 'var(--text-primary)',
                marginBottom: 'var(--space-md)',
                lineHeight: '1.2',
              }}
            >
              {title}
            </h2>
            <div
              style={{
                color: isDark ? 'var(--text-light-muted)' : 'var(--text-muted)',
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
