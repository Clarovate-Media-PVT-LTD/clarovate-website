import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about Clarovate and our mission to provide innovative business solutions',
};

async function getAboutData(): Promise<{
  companyName: string;
  founded: string;
  employees: number;
}> {
  // Simulate server-side data fetching
  return {
    companyName: 'Clarovate',
    founded: '2020',
    employees: 150,
  };
}

export default async function AboutPage(): Promise<JSX.Element> {
  const data = await getAboutData();

  return (
    <main>
      <SectionHeader />
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>About Clarovate</h1>
        <p style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          We are a leading provider of innovative business solutions, helping
          companies transform their operations and achieve their goals.
        </p>
        <div
          style={{
            marginTop: '2rem',
            padding: '1rem',
            background: '#f5f5f5',
            borderRadius: '8px',
          }}
        >
          <h2>Company Information</h2>
          <p>
            <strong>Company Name:</strong> {data.companyName}
          </p>
          <p>
            <strong>Founded:</strong> {data.founded}
          </p>
          <p>
            <strong>Employees:</strong> {data.employees}
          </p>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <h2>Our Mission</h2>
          <p style={{ marginTop: '1rem' }}>
            At Clarovate, we believe in delivering exceptional value to our
            clients through innovative solutions, cutting-edge technology, and
            unparalleled service. Our team of experts is dedicated to helping
            businesses thrive in an ever-evolving digital landscape.
          </p>
        </div>
        <div style={{ marginTop: '2rem' }}>
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
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
