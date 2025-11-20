import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { AosInitializer } from '@/components/aos-initializer';
import { AosStyles } from '@/components/aos-styles';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: {
    default: 'Clarovate - Pipeline Partner for Cybersecurity Marketers',
    template: '%s | Clarovate',
  },
  description:
    'Build predictable pipeline for cybersecurity marketers. Turn data and intent into qualified pipeline that proves ROI every month.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  keywords: [
    'cybersecurity marketing',
    'demand generation',
    'B2B pipeline',
    'cybersecurity lead generation',
    'outbound marketing',
    'intent data',
    'ICP targeting',
    'pipeline generation',
    'cybersecurity sales',
  ],
  authors: [{ name: 'Clarovate' }],
  creator: 'Clarovate',
  publisher: 'Clarovate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Clarovate',
    title: 'Clarovate - Pipeline Partner for Cybersecurity Marketers',
    description:
      'Stop guessing what works. Start turning data and intent into qualified pipeline that proves ROI every month.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clarovate - Pipeline Partner for Cybersecurity Marketers',
    description:
      'Stop guessing what works. Start turning data and intent into qualified pipeline that proves ROI every month.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AosStyles />
        <AosInitializer />
        {children}
      </body>
    </html>
  );
}
