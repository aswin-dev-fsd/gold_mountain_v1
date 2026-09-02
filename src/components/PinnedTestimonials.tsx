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
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setIsMobile(true);
        setCardsPerView(1);
      } else if (width <= 1024) {
        setIsMobile(false);
        setCardsPerView(2);
      } else {
        setIsMobile(false);
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const updateDimensions = () => {
      if (!trackRef.current || !trackRef.current.parentElement) return;
      const containerWidth = trackRef.current.parentElement.clientWidth;
      const cardWidth = containerWidth / cardsPerView;
      const max = Math.max(0, (testimonials.length - cardsPerView) * cardWidth);
      setMaxTranslate(max);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [testimonials, isMobile, cardsPerView]);

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
      <section className="section" style={{ backgroundColor: 'var(--bg-surface)', padding: '3.5rem 0' }}>
        <div className="container" style={{ marginBottom: '2rem', textAlign: 'center' }}>
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
            <div
              key={idx}
              style={{
                flex: '0 0 min(340px, 82vw)',
                scrollSnapAlign: 'start',
                borderRight: idx !== testimonials.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                paddingRight: '1rem',
              }}
            >
              <TestimonialCard quote={t.quote} author={t.author} origin={t.origin} />
            </div>
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
        height: `${Math.max(180, 100 + (testimonials.length - cardsPerView) * 45)}vh`,
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
        <div className="container" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="editorial-serif" style={{ fontSize: 'var(--fs-h2)', color: 'var(--text-primary)' }}>
            {title}
          </h2>
        </div>

        <div className="container" style={{ overflow: 'hidden' }}>
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              width: '100%',
              transform: `translateX(${translateX}px)`,
              willChange: 'transform',
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                style={{
                  flex: `0 0 ${100 / cardsPerView}%`,
                  width: `${100 / cardsPerView}%`,
                  borderRight: idx !== testimonials.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  boxSizing: 'border-box',
                  display: 'flex',
                }}
              >
                <TestimonialCard quote={t.quote} author={t.author} origin={t.origin} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

