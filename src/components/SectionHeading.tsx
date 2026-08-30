import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
  dark = false,
}) => {
  const alignmentStyle = {
    textAlign: align,
    alignItems: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
  } as React.CSSProperties;

  return (
    <div
      className={`section-heading ${className}`.trim()}
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 'var(--space-xl)',
        ...alignmentStyle,
      }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className="editorial-serif"
        style={{
          color: dark ? 'var(--text-light)' : 'var(--text-primary)',
          fontSize: 'var(--fs-h2)',
          lineHeight: '1.2',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: dark ? 'var(--text-light-muted)' : 'var(--text-muted)',
            marginTop: '0.75rem',
            fontSize: 'var(--fs-body-lg)',
            maxWidth: '680px',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
