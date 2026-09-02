import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://goldmountainwellness.com'),
  title: 'Gold Mountain Wellness Resort | Tiruvannamalai, Tamil Nadu',
  description:
    'A peaceful wellness resort in the natural and spiritual surroundings of Arunachala, Tiruvannamalai. Experience traditional wellness, healthy food, and restful stay amidst nature.',
  keywords: [
    'Wellness Resort',
    'Arunachala Resort',
    'Tiruvannamalai Stay',
    'Ayurveda Wellness',
    'Nature Healing Retreat',
    'Gold Mountain Resort',
  ],
  openGraph: {
    title: 'Gold Mountain Wellness Resort | Sanctuary at Arunachala',
    description:
      'Heal the body and mind through traditional therapy and healthy food amidst nature, in the presence of divine Arunachala.',
    url: 'https://goldmountainwellness.com',
    siteName: 'Gold Mountain Wellness Resort',
    images: [
      {
        url: '/images/resort_aerial_golden_hour_view.webp',
        width: 1200,
        height: 630,
        alt: 'Gold Mountain Wellness Resort Surroundings',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

