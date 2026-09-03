'use client';

import React, { useState } from 'react';
import { WhatsAppCTA } from './Buttons';

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    wellnessGoal: 'General Wellness',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = `Hello Gold Mountain Wellness Resort, I am ${formData.name || 'a visitor'}. I am interested in ${formData.wellnessGoal} around ${formData.dates || 'upcoming dates'}. Message: ${formData.message}`;

  return (
    <div id="enquire" className="enquiry-card">
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
        <span className="eyebrow">Direct Booking & Enquiries</span>
        <h3 className="editorial-serif" style={{ fontSize: 'var(--fs-h3)', marginBottom: '0.5rem' }}>
          Begin Your Journey at Gold Mountain
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-small)' }}>
          Reach out directly to plan your stay, ask questions about our wellness programs, or check room options.
        </p>
      </div>

      {submitted ? (
        <div
          style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'var(--accent-gold-soft)',
            borderRadius: '8px',
          }}
          className="reveal-fade"
        >
          <h4 className="editorial-serif" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Thank You for Reaching Out
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-body)', marginBottom: '1.5rem' }}>
            We have received your details. For instantaneous response, feel free to message us on WhatsApp directly.
          </p>
          <WhatsAppCTA message={whatsappMessage}>Chat with Us on WhatsApp</WhatsAppCTA>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="enquiry-field-grid">
            <div>
              <label htmlFor="name" className="enquiry-label">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="enquiry-input"
              />
            </div>

            <div>
              <label htmlFor="email" className="enquiry-label">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="enquiry-input"
              />
            </div>
          </div>

          <div className="enquiry-field-grid">
            <div>
              <label htmlFor="phone" className="enquiry-label">
                Phone / WhatsApp
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="enquiry-input"
              />
            </div>

            <div>
              <label htmlFor="dates" className="enquiry-label">
                Travel Dates / Duration
              </label>
              <input
                id="dates"
                type="text"
                value={formData.dates}
                onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                placeholder="e.g. Nov 15-22 (7 nights)"
                className="enquiry-input"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="enquiry-label">
              Your Message or Specific Requirements
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your wellness preferences, stay expectations, or questions..."
              className="enquiry-textarea"
            />
          </div>

          <div className="form-cta-grid">
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem 1rem' }}>
              Send Email
            </button>
            <WhatsAppCTA message={whatsappMessage} style={{ width: '100%', padding: '0.85rem 1rem', justifyContent: 'center' }}>
              WhatsApp
            </WhatsAppCTA>
          </div>
        </form>
      )}
    </div>
  );
};
