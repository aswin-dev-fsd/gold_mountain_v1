'use client';

import React, { useState } from 'react';
import {
  Header,
  Footer,
  Breadcrumb,
  SectionHeading,
  WhatsAppCTA,
  PrimaryButton,
} from '@/components';

export default function EnquirePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    arrivalDate: '',
    departureDate: '',
    guests: '2 Guests',
    interest: 'Stay',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = `Hello Gold Mountain, I am ${formData.name || 'a visitor'}. Interested in: ${formData.interest}. Dates: ${formData.arrivalDate} to ${formData.departureDate}. Guests: ${formData.guests}. Message: ${formData.message}`;

  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Enquire & Book' }]} />

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
            Reservations & Enquiries
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
            Your stay begins <br />
            <span className="editorial-italic" style={{ color: 'var(--accent-gold)' }}>
              with a conversation.
            </span>
          </h1>
          <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-body-lg)', lineHeight: 1.7 }}>
            Tell us when you'd like to visit, what you're looking for, and how we can make your stay meaningful. Our team will verify room options and confirm details directly with you.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         ENQUIRY PROCESS FORM & DIRECT CONTACT
         -------------------------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 'var(--space-2xl)',
            }}
          >
            {/* Detailed Reservation Form */}
            <div>
              <SectionHeading
                eyebrow="Direct Reservation Form"
                title="Plan Your Stay"
                subtitle="Submit your travel dates and preferences. No immediate payment required — our team confirms availability directly."
              />

              {submitted ? (
                <div
                  style={{
                    padding: '2.5rem',
                    backgroundColor: 'var(--accent-gold-soft)',
                    borderRadius: '2px',
                    border: '1px solid var(--border-gold)',
                  }}
                  className="reveal-fade"
                >
                  <h3 className="editorial-serif" style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                    Enquiry Submitted
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-body-lg)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    Thank you, {formData.name}. We have received your inquiry for <strong>{formData.interest}</strong> ({formData.arrivalDate || 'Dates requested'}).
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-small)', marginBottom: '1.5rem' }}>
                    Our team will verify room availability and contact you via email ({formData.email}) or WhatsApp.
                  </p>
                  <WhatsAppCTA message={whatsappMessage}>
                    Chat with Us on WhatsApp for Instant Confirmation
                  </WhatsAppCTA>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.4rem' }}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', backgroundColor: 'var(--bg-primary)' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor="email" style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.4rem' }}>
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', backgroundColor: 'var(--bg-primary)' }}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.4rem' }}>
                        WhatsApp / Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', backgroundColor: 'var(--bg-primary)' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor="arrivalDate" style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.4rem' }}>
                        Arrival Date
                      </label>
                      <input
                        id="arrivalDate"
                        type="date"
                        value={formData.arrivalDate}
                        onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', backgroundColor: 'var(--bg-primary)' }}
                      />
                    </div>

                    <div>
                      <label htmlFor="departureDate" style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.4rem' }}>
                        Departure Date
                      </label>
                      <input
                        id="departureDate"
                        type="date"
                        value={formData.departureDate}
                        onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', backgroundColor: 'var(--bg-primary)' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor="guests" style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.4rem' }}>
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', backgroundColor: 'var(--bg-primary)' }}
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="Group Retreat">Group Retreat</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="interest" style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.4rem' }}>
                        Interested In
                      </label>
                      <select
                        id="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', backgroundColor: 'var(--bg-primary)' }}
                      >
                        <option value="Stay">Resort Stay</option>
                        <option value="Wellness">Wellness Package</option>
                        <option value="Ayurveda">Ayurveda Therapy</option>
                        <option value="Monthly Stay">Monthly Extended Stay</option>
                        <option value="Other">Other Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.4rem' }}>
                      Additional Details or Requests
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share any special preferences, dietary requirements, or questions..."
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', backgroundColor: 'var(--bg-primary)', resize: 'vertical' }}
                    />
                  </div>

                  <PrimaryButton type="submit">Submit Enquiry</PrimaryButton>
                </form>
              )}
            </div>

            {/* Direct Channels */}
            <div>
              <SectionHeading
                eyebrow="Instant Channels"
                title="Direct Communication"
                subtitle="Prefer speaking directly? Our reservations team is available across channels."
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.5rem', borderRadius: '2px', border: '1px solid var(--border-subtle)' }}>
                  <span className="eyebrow" style={{ color: '#25D366' }}>WhatsApp Chat</span>
                  <h4 className="editorial-serif" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Instant Conversation</h4>
                  <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    Connect with our reservation coordinator immediately on WhatsApp.
                  </p>
                  <WhatsAppCTA message={whatsappMessage}>Chat on WhatsApp</WhatsAppCTA>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1.5rem', borderRadius: '2px', border: '1px solid var(--border-subtle)' }}>
                  <span className="eyebrow">Direct Email</span>
                  <h4 className="editorial-serif" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Send an Email</h4>
                  <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    Email us for custom group bookings or detailed wellness inquiries.
                  </p>
                  <a href="mailto:info@goldmountainwellness.com" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                    info@goldmountainwellness.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
