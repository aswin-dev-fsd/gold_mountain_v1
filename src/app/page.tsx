import React from 'react';
import Image from 'next/image';
import {
  Header,
  Footer,
  PrimaryButton,
  SecondaryButton,
  WhatsAppCTA,
  SectionHeading,
  EditorialSection,
  LocationBlock,
  RoomCard,
  WellnessOfferingCard,
  ExperienceBlock,
  BlogCard,
  TestimonialCard,
  PinnedTestimonials,
  EnquiryForm,
} from '@/components';

export default function HomePage() {
  return (
    <>
      <Header transparentOnTop={true} />

      {/* --------------------------------------------------------------------------
         SECTION 01 — HERO
         -------------------------------------------------------------------------- */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-light)',
          overflow: 'hidden',
          padding: '6.5rem 0 3rem 0',
        }}
      >
        <Image
          src="/images/Image Reference 1 ( homepage ).jpeg"
          alt="Gold Mountain Wellness Resort surroundings at Arunachala"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            opacity: 0.45,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(20, 36, 25, 0.6) 0%, rgba(20, 36, 25, 0.85) 100%)',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '860px' }}>
          <span className="eyebrow" style={{ color: 'var(--accent-gold)' }}>
            Sanctuary at Tiruvannamalai
          </span>
          <h1
            className="editorial-serif"
            style={{
              fontSize: 'var(--fs-hero)',
              color: 'var(--text-light)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            A Wellness Stay <br />
            <span className="editorial-italic" style={{ color: 'var(--accent-gold)' }}>
              in the Presence of Arunachala.
            </span>
          </h1>
          <p
            style={{
              color: 'var(--text-light-muted)',
              fontSize: 'var(--fs-body-lg)',
              maxWidth: '640px',
              margin: '0 auto 2.25rem auto',
              lineHeight: 1.6,
            }}
          >
            A peaceful resort where traditional wellness, healthy food, and nature come together in the natural and spiritual surroundings of Tiruvannamalai.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <PrimaryButton href="/wellness">Explore Wellness</PrimaryButton>
            <SecondaryButton href="/stay" style={{ borderColor: 'var(--border-dark)', color: 'var(--text-light)' }}>
              Plan Your Stay
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 02 — WELLNESS
         -------------------------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Resort Proposition"
            title="Wellness, in its own time."
            subtitle="Gold Mountain offers an environment where guests can slow down, reconnect, and explore traditional wellness practices at their own pace."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <WellnessOfferingCard
              category="Traditional Therapy"
              title="Ayurvedic Practices"
              description="Rooted in authentic tradition, tailored to restore balance through gentle therapies and natural oils."
            />
            <WellnessOfferingCard
              category="Nourishment"
              title="Healthy & Mindful Dining"
              description="Fresh, wholesome meals prepared thoughtfully using farm-grown vegetables and traditional culinary wisdom."
            />
            <WellnessOfferingCard
              category="Rest & Movement"
              title="Yoga & Meditation"
              description="Quiet spaces overlooking mountain stretches, designed for breathwork, movement, and inward stillness."
            />
            <WellnessOfferingCard
              category="Environment"
              title="Nature & Reconnection"
              description="Lush gardens, fresh air, and peaceful surroundings in the sacred presence of divine Arunachala."
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <SecondaryButton href="/wellness">Discover Full Wellness Philosophy &rarr;</SecondaryButton>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 03 — RESORT / PLACE
         -------------------------------------------------------------------------- */}
      <EditorialSection
        eyebrow="The Resort Experience"
        title="Stay close to nature. Stay close to yourself."
        content={
          <>
            <p style={{ marginBottom: '1rem' }}>
              Gold Mountain is designed primarily as a peaceful resort. The architecture and open spaces honour the landscape, creating a sanctuary where quiet rhythm replaces everyday rush.
            </p>
            <p>
              Stroll through open courtyards, sit by quiet gardens, and experience a dwelling that feels integrated into the hill views of Tiruvannamalai.
            </p>
          </>
        }
        imageSrc="/images/Image reference 2 ( Wellness page ) .jpeg"
        imageAlt="Resort architecture and surrounding nature"
        imagePosition="left"
        cta={<PrimaryButton href="/about">Explore the Resort</PrimaryButton>}
      />

      {/* --------------------------------------------------------------------------
         SECTION 04 — STAY
         -------------------------------------------------------------------------- */}
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Accommodations"
            title="Restful Dwellings in Nature"
            subtitle="Thoughtfully appointed rooms crafted for peaceful sleep, privacy, and natural light."
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
              subtitle="Ground Level | Garden Views"
              description="Spacious room featuring private garden views, natural wooden finishes, and serene natural ventilation."
              imageSrc="/images/Image Reference 1 ( homepage ).jpeg"
              amenities={['King Bed', 'Private Verandah', 'Garden View', 'Complimentary Tea']}
              href="#enquire"
            />
            <RoomCard
              title="Mountain View Suite"
              subtitle="Upper Level | Arunachala Views"
              description="Elevated suite offering direct vistas of the sacred hill stretch, expansive seating area, and private balcony."
              imageSrc="/images/Image reference 2 ( Wellness page ) .jpeg"
              amenities={['King Bed', 'Mountain Balcony', 'Spacious Lounge', 'Pure Natural Toiletries']}
              href="#enquire"
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 05 — EXPERIENCE
         -------------------------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Property Elements"
            title="More than a stay."
            subtitle="A place shaped by nature, tradition, and a deeper connection to sacred surroundings."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-md)',
            }}
          >
            <ExperienceBlock
              title="Shiva Shakthi Darshanam"
              subtitle="Sacred Vistas"
              description="Quiet viewing spots oriented toward the mountain stretch for quiet contemplation."
              imageSrc="/images/Image Reference 1 ( homepage ).jpeg"
            />
            <ExperienceBlock
              title="Farm & Herbal Garden"
              subtitle="Nourishment"
              description="Homegrown vegetables and fresh herbs cultivated for our wellness kitchen."
              imageSrc="/images/Image reference 2 ( Wellness page ) .jpeg"
              />
            <ExperienceBlock
              title="Quiet Pond & Sanctuary"
              subtitle="Reflection"
              description="Calm water features surrounded by natural flora and gentle bird calls."
              imageSrc="/images/Image Reference 1 ( homepage ).jpeg"
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 06 — LOCATION
         -------------------------------------------------------------------------- */}
      <LocationBlock />

      {/* --------------------------------------------------------------------------
         SECTION 07 — DINING
         -------------------------------------------------------------------------- */}
      <EditorialSection
        eyebrow="Mindful Dining"
        title="Food that nourishes."
        content={
          <p>
            Dining at Gold Mountain is an extension of our wellness ethos. We emphasize freshly cooked, wholesome meals prepared with seasonal local produce, gentle spices, and traditional recipes designed to support digestion and vitality.
          </p>
        }
        imageSrc="/images/Image reference 2 ( Wellness page ) .jpeg"
        imageAlt="Fresh healthy wellness cuisine"
        imagePosition="right"
        cta={<PrimaryButton href="/wellness">Discover Dining Philosophy</PrimaryButton>}
      />

      {/* --------------------------------------------------------------------------
         SECTION 08 — TRUST / TESTIMONIALS (Pinned Horizontal Scroll)
         -------------------------------------------------------------------------- */}
      <PinnedTestimonials
        eyebrow="Guest Reflections"
        title="Genuine Experiences at Gold Mountain"
        testimonials={[
          {
            quote: "The quiet presence of Arunachala and the peaceful garden walk made our stay deeply restorative. The food was gentle on the stomach and truly nourishing.",
            author: "International Wellness Guest",
            origin: "Stayed 7 Nights",
          },
          {
            quote: "A true resort surrounded by nature. Not a clinical environment, but a warm, slow-paced haven where you can really rest.",
            author: "Retreat Visitor",
            origin: "Stayed 5 Nights",
          },
          {
            quote: "The morning yoga sessions facing the hills brought an incredible sense of clarity. Truly a sacred sanctuary to reset mind and body.",
            author: "Ayurveda & Yoga Guest",
            origin: "Stayed 10 Nights",
          },
          {
            quote: "Fresh, farm-to-table vegetarian meals that felt tailored to our digestive well-being. We left feeling lighter and energized.",
            author: "Mindful Dining Guest",
            origin: "Stayed 4 Nights",
          },
          {
            quote: "Walking around the serene landscape at sunrise while observing hill views was a memory we will treasure forever.",
            author: "Long-Stay Sanctuary Guest",
            origin: "Stayed 14 Nights",
          },
        ]}
      />

      {/* --------------------------------------------------------------------------
         SECTION 09 — BLOG / JOURNAL
         -------------------------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Journal & Stories"
            title="Perspectives on Wellness & Nature"
            subtitle="Articles on traditional wellness, Arunachala history, healthy food, and living mindfully."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-md)',
            }}
          >
            <BlogCard
              title="Understanding the Rhythm of Arunachala"
              category="Location & Nature"
              excerpt="How the natural surroundings of Tiruvannamalai offer an ideal sanctuary to slow down and listen inwardly."
              date="August 2026"
              imageSrc="/images/Image Reference 1 ( homepage ).jpeg"
              slug="rhythm-of-arunachala"
            />
            <BlogCard
              title="The Principles of Mindful Dining"
              category="Nutrition"
              excerpt="Exploring how simple, fresh, seasonal meals support digestion and overall vitality during a wellness stay."
              date="August 2026"
              imageSrc="/images/Image reference 2 ( Wellness page ) .jpeg"
              slug="mindful-dining-principles"
            />
            <BlogCard
              title="Slowing Down: A Beginner's Guide to Rest"
              category="Lifestyle"
              excerpt="Simple practices to disconnect from digital noise and reconnect with natural circadian rhythms."
              date="August 2026"
              imageSrc="/images/Image Reference 1 ( homepage ).jpeg"
              slug="beginners-guide-to-rest"
            />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         SECTION 10 — FINAL CTA & ENQUIRY
         -------------------------------------------------------------------------- */}
      <section className="section" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <span className="eyebrow" style={{ color: 'var(--accent-gold)' }}>
              Plan Your Visit
            </span>
            <h2 className="editorial-serif" style={{ fontSize: 'var(--fs-h1)', color: 'var(--text-light)', marginBottom: '1rem' }}>
              Your time at Gold Mountain begins here.
            </h2>
            <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-body-lg)' }}>
              Plan your stay, explore our wellness offerings, or simply speak with our team directly.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
