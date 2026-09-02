import React from 'react';

interface LocationBlockProps {
  title?: string;
  description?: string;
}

export const LocationBlock: React.FC<LocationBlockProps> = ({
  title = 'In the Presence of Arunachala',
  description = 'Located in Tiruvannamalai, Tamil Nadu, Gold Mountain Wellness Resort offers a quiet, natural environment situated amidst sacred surroundings.',
}) => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-xl)',
            alignItems: 'center',
          }}
        >
          <div>
            <span className="eyebrow">Location & Place</span>
            <h2 className="editorial-serif" style={{ fontSize: 'var(--fs-h2)', marginBottom: '1rem' }}>
              {title}
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              {description}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: 'var(--fs-small)' }}>
              <div>
                <span style={{ color: 'var(--text-primary)' }}>Location:</span> <span style={{ color: 'var(--text-muted)' }}>Tiruvannamalai, Tamil Nadu, India</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-primary)' }}>Surroundings:</span> <span style={{ color: 'var(--text-muted)' }}>Peaceful mountain views, lush greenery, serene walking paths</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-primary)' }}>Access:</span> <span style={{ color: 'var(--text-muted)' }}>Approx. 3.5 hours from Chennai International Airport</span>
              </div>
            </div>
          </div>

          {/* Map Embed or Visual Placeholder */}
          <div
            style={{
              height: '340px',
              backgroundColor: 'var(--bg-dark)',
              borderRadius: '2px',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
              color: 'var(--text-light)',
              textAlign: 'center',
            }}
          >
            <span className="editorial-serif" style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
              Arunachala Sanctuary
            </span>
            <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-small)', maxWidth: '280px', marginBottom: '1.5rem' }}>
              Gold Mountain Wellness Resort, Tiruvannamalai
            </p>
            <a
              href="https://maps.google.com/?q=Tiruvannamalai+Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ borderColor: 'var(--border-dark)', color: 'var(--text-light)' }}
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
