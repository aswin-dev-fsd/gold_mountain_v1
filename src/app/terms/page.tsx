import React from 'react';
import { Header, Footer, Breadcrumb, SectionHeading } from '@/components';

export const metadata = {
  title: 'Terms & Conditions | Gold Mountain Wellness Resort',
  description: 'Terms and conditions for stays, bookings, and website usage at Gold Mountain Wellness Resort.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />

      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <SectionHeading eyebrow="Legal & Terms" title="Terms & Conditions" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <p>
              Welcome to Gold Mountain Wellness Resort. By accessing our website or booking a stay with us, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h3 className="editorial-serif" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '1rem' }}>
              Enquiries & Reservations
            </h3>
            <p>
              Submitting an enquiry form or sending a WhatsApp message through this website constitutes a request for availability and pricing confirmation, not an automatic guaranteed reservation. Stays are confirmed once our reservations team verifies room availability and terms directly with you.
            </p>

            <h3 className="editorial-serif" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '1rem' }}>
              Resort Ethos & Guidelines
            </h3>
            <p>
              Gold Mountain is a peaceful wellness sanctuary designed for rest, nature, and healing. Guests are requested to respect quiet hours, natural flora, and communal peaceful spaces during their stay.
            </p>

            <h3 className="editorial-serif" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '1rem' }}>
              Wellness & Therapy Notice
            </h3>
            <p>
              Traditional wellness treatments, Ayurvedic consultations, and yoga sessions offered at Gold Mountain are designed for holistic relaxation and lifestyle support. They do not constitute medical diagnosis or replace hospital care.
            </p>

            <h3 className="editorial-serif" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '1rem' }}>
              Contact Information
            </h3>
            <p>
              For any questions regarding reservation policies or terms, please write to{' '}
              <a href="mailto:info@goldmountainwellness.com" style={{ color: 'var(--accent-gold)' }}>
                info@goldmountainwellness.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
