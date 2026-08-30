import React from 'react';
import {
  Header,
  Footer,
  Breadcrumb,
  SectionHeading,
  BlogCard,
  PrimaryButton,
} from '@/components';
import { SAMPLE_POSTS } from '@/data/blogData';

export const metadata = {
  title: 'Resort Journal & Stories | Gold Mountain Wellness Resort',
  description:
    'Thoughts on wellness, nature, food, Ayurveda, and life around Arunachala Hill in Tiruvannamalai.',
};

export default function BlogIndexPage() {
  const categories = ['All', 'Wellness', 'Ayurveda', 'Food', 'Nature', 'Arunachala', 'Life at Gold Mountain'];

  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Blog' }]} />

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
            Resort Journal
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
            Stories from <br />
            <span className="editorial-italic" style={{ color: 'var(--accent-gold)' }}>
              Gold Mountain.
            </span>
          </h1>
          <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-body-lg)', lineHeight: 1.7 }}>
            Thoughts on wellness, nature, food, Ayurveda, and peaceful life in the sacred surroundings of Tiruvannamalai.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         CATEGORIES & POSTS GRID
         -------------------------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: 'var(--space-xl)',
              justifyContent: 'center',
            }}
          >
            {categories.map((cat, idx) => (
              <span
                key={cat}
                style={{
                  padding: '0.5rem 1.25rem',
                  fontSize: 'var(--fs-caption)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 700,
                  borderRadius: '2px',
                  backgroundColor: idx === 0 ? 'var(--bg-dark)' : 'var(--bg-surface)',
                  color: idx === 0 ? 'var(--text-light)' : 'var(--text-primary)',
                  border: '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </span>
            ))}
          </div>

          <SectionHeading
            eyebrow="Featured Journal Entries"
            title="Latest Articles"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-lg)',
            }}
          >
            {SAMPLE_POSTS.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                category={post.category}
                excerpt={post.excerpt}
                date={post.date}
                imageSrc={post.imageSrc}
                slug={post.slug}
              />
            ))}
          </div>

          {/* Placeholders Disclaimer */}
          <div
            style={{
              marginTop: 'var(--space-2xl)',
              padding: '1.5rem',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: '2px',
              textAlign: 'center',
              border: '1px solid var(--border-subtle)',
              fontSize: 'var(--fs-small)',
              color: 'var(--text-muted)',
            }}
          >
            <p style={{ margin: 0 }}>
              <em>Note:</em> Additional journal articles will be updated regularly. Speak with our team to inquire about specific wellness topics.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
