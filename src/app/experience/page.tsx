import React from 'react';
import {
  Header,
  Footer,
  Breadcrumb,
  SectionHeading,
  EditorialSection,
  ExperienceBlock,
  PrimaryButton,
  EnquiryForm,
} from '@/components';

export const metadata = {
  title: 'Resort Experiences | Gold Mountain Wellness Resort',
  description:
    'Experience the place beyond the stay — Shiva Shakthi Darshanam, cow shelter, fish pond, five-element philosophy, and farm gardens.',
};

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Experience' }]} />

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
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '800px' }}>
            <span className="eyebrow" style={{ color: 'var(--accent-gold)' }}>
              Property Character
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
              Experience the place <br />
              <span className="editorial-italic" style={{ color: 'var(--accent-gold)' }}>
                beyond the stay.
              </span>
            </h1>
            <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-body-lg)', lineHeight: 1.7 }}>
              Gold Mountain is more than accommodation or wellness therapy. It is a living sanctuary shaped by natural elements, traditional reverence, and peaceful daily experiences.
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         EXPERIENCE 01 — SHIVA SHAKTHI DARSHANAM
         -------------------------------------------------------------------------- */}
      <EditorialSection
        eyebrow="Sacred Vistas"
        title="Shiva Shakthi Darshanam"
        content={
          <p>
            Oriented directly toward the sacred hill stretch, designated viewing pavilions offer quiet space for sunrise reflection, meditation, and absorbing the calm presence of divine Arunachala.
          </p>
        }
        imageSrc="/images/Image Reference 1 ( homepage ).jpeg"
        imageAlt="Sacred mountain view from Gold Mountain"
        imagePosition="left"
      />

      {/* --------------------------------------------------------------------------
         EXPERIENCE 02 & 03 — COW SHELTER & FISH POND
         -------------------------------------------------------------------------- */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Sanctuary Life"
            title="Living Harmony with Nature"
            subtitle="Gentle elements across the grounds that encourage stillness, reverence, and grounding."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-lg)',
            }}
          >
            <ExperienceBlock
              title="The Cow Shelter (Goshala)"
              subtitle="Tradition & Care"
              description="A serene shelter built in the spirit of traditional Indian rural reverence, housing indigenous cows cared for with quiet affection."
              imageSrc="/images/Image reference 2 ( Wellness page ) .jpeg"
            />

            <ExperienceBlock
              title="The Natural Fish Pond"
              subtitle="Still Water"
              description="A central lily pond surrounded by natural stone seating, offering quiet moments to observe water movement and aquatic flora."
              imageSrc="/images/Image Reference 1 ( homepage ).jpeg"
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         EXPERIENCE 04 — FIVE ELEMENT PHILOSOPHY
         -------------------------------------------------------------------------- */}
      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <SectionHeading
            eyebrow="Architectural Thought"
            title="Five Element Philosophy (Pancha Bhoota)"
            subtitle="Earth, Water, Fire, Air, and Space woven thoughtfully into resort spaces."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              textAlign: 'center',
              marginTop: '2rem',
            }}
          >
            {[
              { element: 'Earth (Prithvi)', desc: 'Terracotta & Stone' },
              { element: 'Water (Jala)', desc: 'Reflecting Ponds' },
              { element: 'Fire (Agni)', desc: 'Sunlit Courtyards' },
              { element: 'Air (Vayu)', desc: 'Cross Ventilation' },
              { element: 'Space (Akasha)', desc: 'Open Sky Views' },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: '1.5rem 0.75rem',
                  borderRadius: '2px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <span style={{ display: 'block', fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '0.25rem' }}>
                  {item.element}
                </span>
                <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         EXPERIENCE 05 — FROM OUR LAND
         -------------------------------------------------------------------------- */}
      <EditorialSection
        eyebrow="Farm & Herbal Garden"
        title="From Our Land"
        content={
          <>
            <p style={{ marginBottom: '1rem' }}>
              Our dedicated vegetable plots and herbal garden provide fresh organic greens, seasonal vegetables, and aromatic herbs directly to the resort kitchen.
            </p>
            <p>
              Guests are welcome to walk through the garden rows, learn about local herbal flora, and appreciate the direct connection between soil and table.
            </p>
          </>
        }
        imageSrc="/images/Image reference 2 ( Wellness page ) .jpeg"
        imageAlt="Herbal gardens at Gold Mountain"
        imagePosition="right"
      />

      {/* --------------------------------------------------------------------------
         FINAL CTA & ENQUIRY
         -------------------------------------------------------------------------- */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <span className="eyebrow" style={{ color: 'var(--accent-gold)' }}>
              Discovery
            </span>
            <h2 className="editorial-serif" style={{ fontSize: 'var(--fs-h1)', color: 'var(--text-light)', marginBottom: '1rem' }}>
              There is more to discover here.
            </h2>
            <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-body-lg)', marginBottom: '2rem' }}>
              Plan your visit to Gold Mountain and experience our sanctuary firsthand.
            </p>
            <PrimaryButton href="/stay">Plan Your Stay</PrimaryButton>
          </div>

          <EnquiryForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
