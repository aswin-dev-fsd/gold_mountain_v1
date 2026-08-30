import React from 'react';
import { Header, Footer, Breadcrumb, SectionHeading } from '@/components';

export const metadata = {
  title: 'Privacy Policy | Gold Mountain Wellness Resort',
  description: 'Privacy policy and guest data handling guidelines for Gold Mountain Wellness Resort.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <SectionHeading eyebrow="Legal & Privacy" title="Privacy Policy" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <p>
              At Gold Mountain Wellness Resort, we respect your privacy and are committed to protecting the personal information you share with us when making inquiries or booking stays.
            </p>

            <h3 className="editorial-serif" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '1rem' }}>
              Information We Collect
            </h3>
            <p>
              We collect information that you voluntarily provide through our website contact forms, WhatsApp communications, or email inquiries, including your name, email address, phone number, travel dates, and wellness preferences.
            </p>

            <h3 className="editorial-serif" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '1rem' }}>
              How We Use Your Information
            </h3>
            <p>
              Your information is used solely to respond to your stay inquiries, coordinate reservations, customize your wellness experience, and communicate relevant updates about your visit.
            </p>

            <h3 className="editorial-serif" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '1rem' }}>
              Data Protection & Confidentiality
            </h3>
            <p>
              We do not sell, rent, or trade your personal data to third parties. All guest communications remain confidential between you and the Gold Mountain Wellness Resort reservations team.
            </p>

            <h3 className="editorial-serif" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '1rem' }}>
              Contact Us Regarding Privacy
            </h3>
            <p>
              If you have any questions regarding our privacy practices, please write to us at{' '}
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
