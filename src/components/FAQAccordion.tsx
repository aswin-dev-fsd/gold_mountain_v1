'use client';

import React, { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            style={{
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '1rem',
            }}
          >
            <button
              onClick={() => toggle(index)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: '0.75rem 0',
                cursor: 'pointer',
                fontFamily: 'var(--font-editorial)',
                fontSize: '1.25rem',
                color: 'var(--text-primary)',
              }}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span
                style={{
                  fontSize: '1.5rem',
                  lineHeight: '1',
                  color: 'var(--accent-gold)',
                  transition: 'transform 0.3s ease',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div
                style={{
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.7',
                  fontSize: 'var(--fs-body)',
                }}
                className="reveal-fade"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
