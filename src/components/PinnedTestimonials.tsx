'use client';

import React, { useRef, useState, useEffect } from 'react';
import { TestimonialCard, TestimonialProps } from './Cards';

interface PinnedTestimonialsProps {
  eyebrow: string;
  title: string;
  testimonials: TestimonialProps[];
}

export const PinnedTestimonials: React.FC<PinnedTestimonialsProps> = ({
  eyebrow,
  title,
  testimonials,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const updateDimensions = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const max = Math.max(0, trackWidth - viewportWidth + 60);
      setMaxTranslate(max);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [testimonials, isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  if (isMobile) {
    return (
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', padding: '3rem 0' }}>
        <div className="container" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="editorial-serif" style={{ fontSize: 'var(--fs-h2)', color: 'var(--text-primary)' }}>
            {title}
          </h2>
        </div>
        <div
          className="hide-scrollbar"
          style={{
            display: 'flex',
            gap: '1.25rem',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            paddingBottom: '0.5rem',
          }}
        >
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} quote={t.quote} author={t.author} origin={t.origin} />
          ))}
        </div>
      </section>
    );
  }

  const translateX = -(scrollProgress * maxTranslate);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '300vh',
        backgroundColor: 'var(--bg-surface)',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="editorial-serif" style={{ fontSize: 'var(--fs-h2)', color: 'var(--text-primary)' }}>
            {title}
          </h2>
        </div>

        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '2rem',
            paddingLeft: 'max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))',
            paddingRight: '2rem',
            transform: `translateX(${translateX}px)`,
            willChange: 'transform',
          }}
        >
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} quote={t.quote} author={t.author} origin={t.origin} />
          ))}
        </div>
      </div>
    </div>
  );
};
