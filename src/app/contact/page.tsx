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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    guests: '1 Guest',
    enquiryType: 'Stay',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = `Hello Gold Mountain Wellness Resort, I am ${formData.name || 'a guest'}. Enquiry Type: ${formData.enquiryType}. Dates: ${formData.dates || 'Upcoming'}. Message: ${formData.message}`;

  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Contact' }]} />

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
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '800px' }}>
            <span className="eyebrow" style={{ color: 'var(--accent-gold)' }}>
              Get in Touch
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
              Let's plan <br />
              <span className="editorial-italic" style={{ color: 'var(--accent-gold)' }}>
                your stay.
              </span>
            </h1>
            <p style={{ color: 'var(--text-light-muted)', fontSize: 'var(--fs-body-lg)', lineHeight: 1.7 }}>
              Have a question about staying, wellness programmes, or availability? Speak with us directly. We welcome inquiries from both international and Indian guests.
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
         DIRECT CONTACT OPTIONS (WHATSAPP, EMAIL, PHONE)
         -------------------------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Direct Channels"
            title="Choose How to Connect"
            subtitle="For immediate responses, WhatsApp is our primary channel. Email and phone inquiries are monitored daily."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-lg)',
              marginBottom: 'var(--space-2xl)',
            }}
          >
            {/* Option 1: WhatsApp */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                padding: '2rem',
                borderRadius: '2px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span className="eyebrow" style={{ color: '#25D366' }}>
                  Instant WhatsApp
                </span>
                <h3 className="editorial-serif" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                  Chat with Our Team
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-small)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Instant answers on room availability, package pricing, and travel assistance to Tiruvannamalai.
                </p>
              </div>
              <WhatsAppCTA message="Hello, I would like to enquire about Gold Mountain Wellness Resort.">
                Enquire on WhatsApp
              </WhatsAppCTA>
            </div>

            {/* Option 2: Email */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                padding: '2rem',
                borderRadius: '2px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span className="eyebrow">Email Enquiry</span>
                <h3 className="editorial-serif" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                  Write to Us
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-small)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Ideal for detailed itineraries, custom wellness inquiries, and long-term stay planning.
                </p>
              </div>
              <a
                href="mailto:info@goldmountainwellness.com"
                className="btn btn-secondary"
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                info@goldmountainwellness.com
              </a>
            </div>

            {/* Option 3: Phone */}
            <div
              style={{
                backgroundColor: 'var(--bg-surface)',
                padding: '2rem',
                borderRadius: '2px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span className="eyebrow">Direct Phone</span>
                <h3 className="editorial-serif" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                  Call Reception
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-small)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Speak directly with our resort front desk during business hours (9:00 AM – 8:00 PM IST).
                </p>
              </div>
              <a
                href="tel:+919876543210"
                className="btn btn-primary"
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* --------------------------------------------------------------------------
             ENQUIRY FORM & LOCATION SECTION
             -------------------------------------------------------------------------- */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 'var(--space-2xl)',
            }}
          >
            {/* Form */}
            <div>
              <SectionHeading
                eyebrow="Send a Message"
                title="Guest Enquiry Form"
                subtitle="Fill out your details below and our reservations team will get back to you promptly."
              />

              {submitted ? (
                <div
                  style={{
                    padding: '2rem',
                    backgroundColor: 'var(--accent-gold-soft)',
                    borderRadius: '2px',
                    border: '1px solid var(--border-gold)',
                  }}
                  className="reveal-fade"
                >
                  <h3 className="editorial-serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    Enquiry Received
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-body)', marginBottom: '1.5rem' }}>
                    Thank you, {formData.name}. Our reservations team will review your inquiry and reply to {formData.email} within 24 hours.
                  </p>
                  <WhatsAppCTA message={whatsappMessage}>
                    Follow up instantly on WhatsApp
                  </WhatsAppCTA>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', backgroundColor: 'var(--bg-primary)' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor="email" style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
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
                      <label htmlFor="phone" style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
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

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label htmlFor="enquiryType" style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                        Enquiry Type
                      </label>
                      <select
                        id="enquiryType"
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', backgroundColor: 'var(--bg-primary)' }}
                      >
                        <option value="Stay">Stay</option>
                        <option value="Wellness">Wellness</option>
                        <option value="Ayurveda">Ayurveda</option>
                        <option value="Monthly Stay">Monthly Stay</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="dates" style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                        Preferred Dates
                      </label>
                      <input
                        id="dates"
                        type="text"
                        value={formData.dates}
                        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                        placeholder="e.g. Oct 10-15"
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', backgroundColor: 'var(--bg-primary)' }}
                      />
                    </div>

                    <div>
                      <label htmlFor="guests" style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                        Guests
                      </label>
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', backgroundColor: 'var(--bg-primary)' }}
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3+ Guests">3+ Guests</option>
                        <option value="Group / Retreat">Group / Retreat</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" style={{ display: 'block', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we assist your visit to Gold Mountain?"
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-subtle)', borderRadius: '2px', backgroundColor: 'var(--bg-primary)', resize: 'vertical' }}
                    />
                  </div>

                  <PrimaryButton type="submit">Send Enquiry</PrimaryButton>
                </form>
              )}
            </div>

            {/* Address & Verified Location */}
            <div>
              <SectionHeading
                eyebrow="Physical Address"
                title="Resort Location"
                subtitle="Gold Mountain Wellness Resort is located at the foot of Arunachala Hill."
              />

              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: '2rem',
                  borderRadius: '2px',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '1.5rem',
                }}
              >
                <h4 className="editorial-serif" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  Verified Address
                </h4>
                <address style={{ fontStyle: 'normal', color: 'var(--text-muted)', lineHeight: '1.7', fontSize: 'var(--fs-body)' }}>
                  No.97, Kottangal Road,<br />
                  Adiannamalai,<br />
                  Tiruvannamalai,<br />
                  Tamil Nadu 606604,<br />
                  India
                </address>

                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <a
                    href="https://maps.google.com/?q=No.97,+Kottangal+Road,+Adiannamalai,+Tiruvannamalai,+Tamil+Nadu+606604"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Open Location in Google Maps
                  </a>
                </div>
              </div>

              {/* International Guest Guidance */}
              <div
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  padding: '1.5rem',
                  borderRadius: '2px',
                  border: '1px solid var(--border-subtle)',
                  fontSize: 'var(--fs-small)',
                  color: 'var(--text-muted)',
                }}
              >
                <span style={{ display: 'block', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '0.5rem' }}>
                  International Guests:
                </span>
                Airport transfers can be arranged from Chennai International Airport (MAA). Please specify arrival details in your enquiry message.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
