import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound(): JSX.Element {
  return (
    <main>
      <SectionHeader />
      <div
        style={{
          padding: '4rem 2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: '#0070f3',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none',
          }}
        >
          Return Home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
