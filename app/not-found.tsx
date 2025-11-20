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
    <div className="min-h-screen bg-fire-50 text-fire-900">
      <header>
        <SectionHeader />
      </header>
      <main className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
        <h1 className="text-6xl font-bold text-fire-800">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>
        <p className="mt-4 text-base text-gray-700">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-xl bg-fire-800 px-6 py-3 text-base font-semibold text-white transition hover:bg-fire-900"
        >
          Return home
        </Link>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
