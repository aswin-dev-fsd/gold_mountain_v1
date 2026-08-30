import React from 'react';
import Image from 'next/image';
import { SecondaryButton, WhatsAppCTA } from './Buttons';

/* --------------------------------------------------------------------------
   1. RoomCard
   -------------------------------------------------------------------------- */
export interface RoomCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  amenities: string[];
  ctaText?: string;
  href?: string;
}

export const RoomCard: React.FC<RoomCardProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  amenities,
  ctaText = 'Explore Room Details',
  href = '#enquire',
}) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-primary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '2px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10' }}>
        <Image src={imageSrc} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
      </div>
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <span className="eyebrow" style={{ marginBottom: '0.25rem' }}>
          {subtitle}
        </span>
        <h3 className="editorial-serif" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
          {title}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-small)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
          {description}
        </p>

        <div style={{ marginTop: 'auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '1.25rem',
              fontSize: 'var(--fs-caption)',
              color: 'var(--text-muted)',
            }}
          >
            {amenities.map((item, idx) => (
              <span
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '2px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <SecondaryButton href={href} style={{ width: '100%', justifyContent: 'center' }}>
            {ctaText}
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

/* --------------------------------------------------------------------------
   2. WellnessOfferingCard
   -------------------------------------------------------------------------- */
export interface WellnessOfferingProps {
  title: string;
  category: string;
  description: string;
  icon?: React.ReactNode;
}

export const WellnessOfferingCard: React.FC<WellnessOfferingProps> = ({
  title,
  category,
  description,
  icon,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-primary)',
        border: '1px solid var(--border-subtle)',
        padding: '1.75rem',
        borderRadius: '2px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'var(--transition-smooth)',
      }}
    >
      {icon && <div style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>{icon}</div>}
      <span className="eyebrow" style={{ marginBottom: '0.25rem' }}>
        {category}
      </span>
      <h3 className="editorial-serif" style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
        {title}
      </h3>
      <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-small)', lineHeight: '1.6' }}>{description}</p>
    </div>
  );
};

/* --------------------------------------------------------------------------
   3. ExperienceBlock
   -------------------------------------------------------------------------- */
export interface ExperienceBlockProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

export const ExperienceBlock: React.FC<ExperienceBlockProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
}) => {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '2px',
        overflow: 'hidden',
        aspectRatio: '4/5',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <Image src={imageSrc} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(20, 36, 25, 0.95) 0%, rgba(20, 36, 25, 0.2) 60%, transparent 100%)',
        }}
      />
      <div style={{ position: 'relative', zIndex: 10, padding: '1.75rem', color: 'var(--text-light)' }}>
        <span style={{ fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-gold)', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
          {subtitle}
        </span>
        <h3 className="editorial-serif" style={{ fontSize: '1.5rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>
          {title}
        </h3>
        <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-small)', lineHeight: '1.5' }}>
          {description}
        </p>
      </div>
    </div>
  );
};

/* --------------------------------------------------------------------------
   4. BlogCard
   -------------------------------------------------------------------------- */
export interface BlogCardProps {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  imageSrc: string;
  slug: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  category,
  excerpt,
  date,
  imageSrc,
  slug,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-primary)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '2px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
        <Image src={imageSrc} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
      </div>
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span className="eyebrow" style={{ marginBottom: 0 }}>
            {category}
          </span>
          <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{date}</span>
        </div>
        <h3 className="editorial-serif" style={{ fontSize: '1.35rem', marginBottom: '0.75rem', lineHeight: '1.3' }}>
          {title}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-small)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
          {excerpt}
        </p>
        <a
          href={`/blog/${slug}`}
          style={{
            marginTop: 'auto',
            fontSize: 'var(--fs-small)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          Read Article &rarr;
        </a>
      </div>
    </div>
  );
};

/* --------------------------------------------------------------------------
   5. TestimonialCard
   -------------------------------------------------------------------------- */
export interface TestimonialProps {
  quote: string;
  author: string;
  origin?: string;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, origin }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-surface)',
        padding: '2rem',
        borderRadius: '2px',
        borderLeft: '3px solid var(--accent-gold)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <p
        className="editorial-italic"
        style={{
          fontSize: '1.15rem',
          color: 'var(--text-primary)',
          lineHeight: '1.7',
          marginBottom: '1.5rem',
        }}
      >
        "{quote}"
      </p>
      <div>
        <strong style={{ display: 'block', fontSize: 'var(--fs-small)', color: 'var(--text-primary)' }}>
          {author}
        </strong>
        {origin && <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{origin}</span>}
      </div>
    </div>
  );
};

/* --------------------------------------------------------------------------
   6. PackageCard (Pricing / Package Card)
   -------------------------------------------------------------------------- */
export interface PackageCardProps {
  title: string;
  duration: string;
  description: string;
  includes: string[];
  priceInfo?: string;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  title,
  duration,
  description,
  includes,
  priceInfo = '[PRICE TO BE PROVIDED]',
}) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-primary)',
        border: '1px solid var(--border-subtle)',
        padding: '2rem',
        borderRadius: '2px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <span className="eyebrow">{duration}</span>
      <h3 className="editorial-serif" style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>
        {title}
      </h3>
      <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-small)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
        {description}
      </p>

      <div style={{ marginBottom: '1.5rem' }}>
        <strong style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
          Programme Includes:
        </strong>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: 'var(--fs-small)', color: 'var(--text-muted)' }}>
          {includes.map((item, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-gold)' }}>✓</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', marginBottom: '1rem' }}>
          Investment: <strong style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>{priceInfo}</strong>
        </div>
        <WhatsAppCTA message={`Hello, I would like to enquire about the ${title} (${duration}).`}>
          Enquire for Package
        </WhatsAppCTA>
      </div>
    </div>
  );
};
