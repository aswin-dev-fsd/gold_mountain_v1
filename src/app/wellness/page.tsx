import React from 'react';
import Image from 'next/image';
import {
  Header,
  Footer,
  Breadcrumb,
  SectionHeading,
  EditorialSection,
  WellnessOfferingCard,
  PackageCard,
  WhatsAppCTA,
  EnquiryForm,
} from '@/components';

export const metadata = {
  title: 'Wellness Philosophy & Programmes | Gold Mountain Wellness Resort',
  description:
    'Explore traditional wellness practices, nourishing food, and quiet spaces designed to help you reconnect body and mind amidst nature at Arunachala.',
};

export default function WellnessPage() {
  return (
    <>
      <Header />

      <Breadcrumb items={[{ label: 'Wellness' }]} />

      {/* --------------------------------------------------------------------------
         SECTION 01 — HERO
         -------------------------------------------------------------------------- */}
      <section
        style={{
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-light)',
          padding: 'var(--space-2xl) 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '800px' }}>
            <span className="eyebrow" style={{ color: 'var(--accent-gold)' }}>
              Wellness Philosophy
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
              A slower way <br />
              <span className="editorial-italic" style={{ color: 'var(--accent-gold)' }}>
                back to yourself.
              </span>
            </h1>
            <p
              style={{
                color: 'var(--text-light-muted)',
                fontSize: 'var(--fs-body-lg)',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              Explore traditional wellness practices, nourishing food, and quiet spaces designed to help you reconnect with body and mind in the natural surroundings of Tiruvannamalai.
            </p>
            <a href="#packages" className="btn btn-primary">
              Explore Wellness Packages
            </a>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 02 — PHILOSOPHY
         -------------------------------------------------------------------------- */}
      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <SectionHeading
            eyebrow="Our Approach"
            title="Where Tradition Meets Natural Rest"
            subtitle="Gold Mountain brings together traditional wellness practices and the restorative qualities of nature. We believe wellness is an experience to be lived slowly rather than a set of rigid treatments."
          />
          <p style={{ fontSize: 'var(--fs-body-lg)', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Guests come to Gold Mountain not only for specific therapies, but to step away from daily strain, breathe fresh mountain air, enjoy wholesome meals, and find natural balance in presence of divine Arunachala.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 03 — WELLNESS APPROACH GRID
         -------------------------------------------------------------------------- */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Pillars of Experience"
            title="The Elements of Your Stay"
            subtitle="A clean, integrated approach combining traditional wisdom, movement, food, and peaceful nature."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <WellnessOfferingCard
              category="Therapy"
              title="Ayurveda"
              description="Traditional herbal applications and body therapies administered by experienced practitioners."
            />
            <WellnessOfferingCard
              category="Restoration"
              title="Traditional Therapies"
              description="Relaxing oil treatments, warm herbal compresses, and body rejuvenation practices."
            />
            <WellnessOfferingCard
              category="Movement"
              title="Yoga"
              description="Gentle morning asana sessions crafted for flexibility, alignment, and stress release."
            />
            <WellnessOfferingCard
              category="Stillness"
              title="Meditation"
              description="Guided breathwork and quiet contemplation in peaceful garden pavilions."
            />
            <WellnessOfferingCard
              category="Nutrition"
              title="Healthy Food"
              description="Sattvic, freshly cooked vegetarian meals prepared with seasonal farm produce."
            />
            <WellnessOfferingCard
              category="Environment"
              title="Nature & Air"
              description="Open green spaces and mountain breezes that encourage natural deep breathing."
            />
            <WellnessOfferingCard
              category="Rhythm"
              title="Lifestyle & Rest"
              description="Encouraging natural circadian sleep cycles, digital disconnect, and quiet evenings."
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 04 — AYURVEDA
         -------------------------------------------------------------------------- */}
      <EditorialSection
        eyebrow="Ayurvedic Heritage"
        title="Traditional wisdom, thoughtfully experienced."
        content={
          <>
            <p style={{ marginBottom: '1rem' }}>
              In simple international terms, Ayurveda is an ancient science of living in harmony with nature. At Gold Mountain, Ayurvedic practices are offered as one vital part of a broader resort stay.
            </p>
            <p>
              Therapies focus on soothing tired muscles, nourishing skin with botanical oils, and encouraging natural internal balance without overwhelming clinical routines.
            </p>
          </>
        }
        imageSrc="/images/meditation_buddha_sanctuary.webp"
        imageAlt="Ayurvedic oil therapy ingredients"
        imagePosition="left"
      />

      {/* --------------------------------------------------------------------------
         SECTION 05 — HEALING THEMES
         -------------------------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Resort Philosophy"
            title="Six Dimensions of Wellbeing"
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.25rem',
              textAlign: 'center',
            }}
          >
            {['Body', 'Mind', 'Food', 'Movement', 'Nature', 'Rest'].map((theme) => (
              <div
                key={theme}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: '2rem 1rem',
                  borderRadius: '2px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <h4 className="editorial-serif" style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                  {theme}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 06 — PROGRAMMES / PACKAGES
         -------------------------------------------------------------------------- */}
      <section id="packages" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Wellness Stays"
            title="Curated Wellness Packages"
            subtitle="Thoughtfully designed multi-day stay itineraries combining accommodation, daily therapies, and healthy dining."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-lg)',
            }}
          >
            <PackageCard
              title="Rejuvenation & Rest Package"
              duration="3 Nights / 4 Days"
              description="Designed for busy professionals seeking a quick reset amidst natural mountain surroundings."
              includes={[
                'Full Board Mindful Dining',
                'Daily Herbal Body Therapy',
                'Morning Yoga & Meditation',
                'Arunachala Hill View Accommodation',
              ]}
              priceInfo="[PRICE TO BE PROVIDED]"
            />
            <PackageCard
              title="Traditional Ayurveda Stay"
              duration="7 Nights / 8 Days"
              description="An immersive week dedicated to deeper Ayurvedic therapies, herbal steam, and lifestyle alignment."
              includes={[
                'Personalized Consultation',
                'Daily Ayurvedic Treatments',
                'Customized Culinary Plan',
                'Guided Nature & Garden Walks',
              ]}
              priceInfo="[PRICE TO BE PROVIDED]"
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 07 — FINAL CTA
         -------------------------------------------------------------------------- */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <span className="eyebrow" style={{ color: 'var(--accent-gold)' }}>
              Enquire Today
            </span>
            <h2 className="editorial-serif" style={{ fontSize: 'var(--fs-h1)', color: 'var(--text-light)', marginBottom: '1rem' }}>
              Find the kind of wellness that suits your stay.
            </h2>
            <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-body-lg)', marginBottom: '2rem' }}>
              Speak with our team on WhatsApp or send us an email to receive package details and availability.
            </p>
            <WhatsAppCTA message="Hello, I would like to enquire about Gold Mountain wellness packages.">
              Enquire on WhatsApp
            </WhatsAppCTA>
          </div>

          <EnquiryForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
