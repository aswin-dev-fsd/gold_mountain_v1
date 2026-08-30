import React from 'react';
import Image from 'next/image';
import {
  Header,
  Footer,
  Breadcrumb,
  SectionHeading,
  EditorialSection,
  PrimaryButton,
  EnquiryForm,
} from '@/components';

export const metadata = {
  title: 'About Us & Philosophy | Gold Mountain Wellness Resort',
  description:
    'Learn about the story, purpose, and founding philosophy behind Gold Mountain Wellness Resort in Tiruvannamalai.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'About' }]} />

      {/* --------------------------------------------------------------------------
         HERO
         -------------------------------------------------------------------------- */}
      <section
        style={{
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-light)',
          padding: 'var(--space-2xl) 0',
          position: 'relative',
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="eyebrow" style={{ color: 'var(--accent-gold)' }}>
            Our Purpose
          </span>
          <h1
            className="editorial-serif"
            style={{
              fontSize: 'var(--fs-hero)',
              color: 'var(--text-light)',
              marginBottom: '1.25rem',
              lineHeight: 1.15,
            }}
          >
            A place created <br />
            <span className="editorial-italic" style={{ color: 'var(--accent-gold)' }}>
              with purpose.
            </span>
          </h1>
          <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-body-lg)', lineHeight: 1.7 }}>
            Gold Mountain Wellness Resort was conceived as a calm haven where guests can slow down, experience traditional wellness, and reconnect with nature in the presence of divine Arunachala.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         THE STORY
         -------------------------------------------------------------------------- */}
      <EditorialSection
        eyebrow="Resort Story"
        title="Harmonious Dwellings at the Foot of Arunachala"
        content={
          <>
            <p style={{ marginBottom: '1rem' }}>
              Located in Tiruvannamalai, Gold Mountain emerged from a desire to create a true resort environment integrated into natural mountain surroundings.
            </p>
            <p>
              Rather than an impersonal hotel or a rigid clinical facility, Gold Mountain is designed as a peaceful sanctuary focusing on generous hospitality, wholesome nourishment, traditional therapies, and quiet reflection.
            </p>
          </>
        }
        imageSrc="/images/Image Reference 1 ( homepage ).jpeg"
        imageAlt="Gold Mountain resort grounds and view"
        imagePosition="left"
      />

      {/* --------------------------------------------------------------------------
         FOUNDER SECTION
         -------------------------------------------------------------------------- */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Leadership & Vision"
            title="Founder Profile"
            subtitle="The vision and values guiding Gold Mountain Wellness Resort."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-xl)',
              alignItems: 'center',
              backgroundColor: 'var(--bg-primary)',
              padding: 'var(--space-xl)',
              borderRadius: '2px',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ position: 'relative', aspectRatio: '4/5', width: '100%', borderRadius: '2px', overflow: 'hidden' }}>
              <Image
                src="/images/Image reference 2 ( Wellness page ) .jpeg"
                alt="Gold Mountain Founder"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div>
              <span className="eyebrow">[FOUNDER PROFILE TO BE PROVIDED]</span>
              <h3 className="editorial-serif" style={{ fontSize: 'var(--fs-h2)', marginBottom: '1rem' }}>
                Founding Vision
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                "Our vision for Gold Mountain is to offer international and domestic guests an authentic sanctuary where body, mind, and spirit are gently restored through nature, healthy dining, and traditional care."
              </p>
              <div style={{ fontSize: 'var(--fs-small)', color: 'var(--text-primary)', fontWeight: 700 }}>
                Gold Mountain Founders & Stewardship Team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         PHILOSOPHY PILLARS
         -------------------------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Core Values"
            title="Our Guiding Philosophy"
            subtitle="Six interconnected principles shaping every guest interaction."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              { title: 'Nature', desc: 'Preserving open green spaces, fresh air, and indigenous flora.' },
              { title: 'Wellness', desc: 'Encouraging gentle traditional therapies and restful pace.' },
              { title: 'Food', desc: 'Serving freshly prepared, wholesome vegetarian meals.' },
              { title: 'Traditional Knowledge', desc: 'Honouring authentic Ayurvedic and rural heritage.' },
              { title: 'Hospitality', desc: 'Warm, intuitive, and respectful guest care.' },
              { title: 'Arunachala', desc: 'Living in deep harmony with the sacred hill energy.' },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: '1.5rem',
                  borderRadius: '2px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <h4 className="editorial-serif" style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {item.title}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-small)', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         FINAL CTA & ENQUIRY
         -------------------------------------------------------------------------- */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <span className="eyebrow" style={{ color: 'var(--accent-gold)' }}>
              Invitation
            </span>
            <h2 className="editorial-serif" style={{ fontSize: 'var(--fs-h1)', color: 'var(--text-light)', marginBottom: '1rem' }}>
              Come experience Gold Mountain.
            </h2>
            <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-body-lg)', marginBottom: '2rem' }}>
              We invite you to step away from daily noise and experience our peaceful resort sanctuary.
            </p>
            <PrimaryButton href="/stay">Explore the Resort</PrimaryButton>
          </div>

          <EnquiryForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
