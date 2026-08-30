import React from 'react';
import {
  Header,
  Footer,
  Breadcrumb,
  SectionHeading,
  RoomCard,
  EditorialSection,
  WhatsAppCTA,
  EnquiryForm,
} from '@/components';

export const metadata = {
  title: 'Accommodations & Stay | Gold Mountain Wellness Resort',
  description:
    'Comfortable spaces surrounded by nature, created for rest and reconnection in Tiruvannamalai near Arunachala.',
};

export default function StayPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Stay' }]} />

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
            Accommodations
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
            A peaceful place <br />
            <span className="editorial-italic" style={{ color: 'var(--accent-gold)' }}>
              to stay.
            </span>
          </h1>
          <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-body-lg)', lineHeight: 1.7 }}>
            Comfortable spaces surrounded by nature, created for rest, privacy, and quiet reconnection amidst the sacred surroundings of Tiruvannamalai.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         ROOM CATEGORIES
         -------------------------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Sanctuary Dwellings"
            title="Rooms & Suites"
            subtitle="Thoughtfully designed rooms built to foster restfulness, ventilation, and natural light."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-lg)',
            }}
          >
            <RoomCard
              title="Deluxe Garden Room"
              subtitle="Ground Level | Garden Views | Up to 2 Guests"
              description="Spacious garden room featuring natural timber finishes, private verandah opening to lush flora, and gentle cross-ventilation."
              imageSrc="/images/Image Reference 1 ( homepage ).jpeg"
              amenities={[
                'King Size Bed',
                'Private Verandah',
                'Air Conditioning',
                'High-speed Wi-Fi',
                'Garden View',
                'Complimentary Herbal Teas',
              ]}
              ctaText="Enquire About Deluxe Garden Room"
              href="#enquire"
            />

            <RoomCard
              title="Mountain View Suite"
              subtitle="Upper Level | Arunachala Views | Up to 2-3 Guests"
              description="Elevated suite offering unobstructed vistas of the sacred hill, an expansive seating area, and private balcony for sunrise contemplation."
              imageSrc="/images/Image reference 2 ( Wellness page ) .jpeg"
              amenities={[
                'King Size Bed',
                'Private Mountain Balcony',
                'Air Conditioning',
                'High-speed Wi-Fi',
                'Lounge Seating',
                'Pure Natural Toiletries',
              ]}
              ctaText="Enquire About Mountain View Suite"
              href="#enquire"
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         MONTHLY STAYS
         -------------------------------------------------------------------------- */}
      <EditorialSection
        eyebrow="Extended Retreats"
        title="Stay a little longer."
        content={
          <>
            <p style={{ marginBottom: '1rem' }}>
              For guests seeking extended rest, writing retreats, or prolonged wellness immersions, Gold Mountain offers long-term monthly stay arrangements.
            </p>
            <p>
              Enjoy consistent peaceful rhythm, daily wholesome dining, quiet workspaces, and continuous proximity to Arunachala.
            </p>
          </>
        }
        imageSrc="/images/Image Reference 1 ( homepage ).jpeg"
        imageAlt="Peaceful mountain view verandah"
        imagePosition="right"
        cta={
          <WhatsAppCTA message="Hello, I would like to inquire about extended / monthly stay options at Gold Mountain Wellness Resort.">
            Ask About Monthly Stay
          </WhatsAppCTA>
        }
      />

      {/* --------------------------------------------------------------------------
         CONFIRMED AMENITIES
         -------------------------------------------------------------------------- */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Resort Comforts"
            title="Confirmed Amenities"
            subtitle="Thoughtful hospitality services designed to support your stay without distraction."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              { name: 'Room Service', desc: 'Mindful in-room dining' },
              { name: 'Dining Area', desc: 'Sattvic fresh kitchen' },
              { name: 'Free Parking', desc: 'On-site secure parking' },
              { name: 'Air Conditioning', desc: 'Climate controlled comfort' },
              { name: 'High-speed Wi-Fi', desc: 'Seamless connectivity' },
              { name: 'CCTV Security', desc: '24-hour property safety' },
              { name: '24-Hour Desk', desc: 'Welcoming front reception' },
            ].map((amenity, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  padding: '1.25rem',
                  borderRadius: '2px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {amenity.name}
                </strong>
                <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{amenity.desc}</span>
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
              Direct Enquiries
            </span>
            <h2 className="editorial-serif" style={{ fontSize: 'var(--fs-h1)', color: 'var(--text-light)', marginBottom: '1rem' }}>
              Plan your stay at Gold Mountain.
            </h2>
            <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-body-lg)' }}>
              Contact us on WhatsApp or submit an enquiry to receive current availability and room details.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
