import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Header,
  Footer,
  Breadcrumb,
  PrimaryButton,
  WhatsAppCTA,
} from '@/components';
import { SAMPLE_POSTS } from '@/data/blogData';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = SAMPLE_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found | Gold Mountain' };

  return {
    title: `${post.title} | Gold Mountain Resort Journal`,
    description: post.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = SAMPLE_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = SAMPLE_POSTS.filter((p) => p.slug !== slug);

  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

      <article className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          {/* Category & Date */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
            <span className="eyebrow" style={{ marginBottom: 0 }}>
              {post.category}
            </span>
            <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>•</span>
            <time style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>{post.date}</time>
          </div>

          {/* Article Title */}
          <h1
            className="editorial-serif"
            style={{
              fontSize: 'var(--fs-hero)',
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
            }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p
            className="editorial-italic"
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              lineHeight: '1.6',
            }}
          >
            {post.excerpt}
          </p>

          {/* Hero Image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '2px',
              overflow: 'hidden',
              marginBottom: '2.5rem',
            }}
          >
            <Image
              src={post.imageSrc}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 840px"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Body Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: 'var(--fs-body-lg)', lineHeight: '1.8', color: 'var(--text-primary)' }}>
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Call to Action Box */}
          <div
            style={{
              marginTop: 'var(--space-2xl)',
              padding: '2rem',
              backgroundColor: 'var(--bg-dark)',
              color: 'var(--text-light)',
              borderRadius: '2px',
              textAlign: 'center',
            }}
          >
            <h3 className="editorial-serif" style={{ fontSize: '1.75rem', color: 'var(--text-light)', marginBottom: '0.75rem' }}>
              Experience Gold Mountain Sanctuary
            </h3>
            <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-body)', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
              Plan your wellness stay in Tiruvannamalai amidst natural surroundings and mountain views.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <PrimaryButton href="/wellness" variant="gold">Explore Wellness</PrimaryButton>
              <WhatsAppCTA message={`Hello, I read your article "${post.title}" and would like to inquire about staying at Gold Mountain.`}>
                Enquire on WhatsApp
              </WhatsAppCTA>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div style={{ marginTop: 'var(--space-2xl)', paddingTop: 'var(--space-xl)', borderTop: '1px solid var(--border-subtle)' }}>
              <h3 className="editorial-serif" style={{ fontSize: 'var(--fs-h3)', marginBottom: '1.5rem' }}>
                Related Stories
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {relatedPosts.map((rPost) => (
                  <div key={rPost.slug} style={{ border: '1px solid var(--border-subtle)', padding: '1.25rem', borderRadius: '2px' }}>
                    <span className="eyebrow">{rPost.category}</span>
                    <h4 className="editorial-serif" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                      <Link href={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                    </h4>
                    <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-muted)' }}>{rPost.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </>
  );
}
