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
    <div className="bg-fire-50 text-fire-900">
      <header>
        <SectionHeader />
      </header>
      <main className="mx-auto max-w-4xl px-6 py-16">
        <article className="space-y-10 rounded-[32px] border border-fire-100 bg-white/95 p-8 shadow-[0_25px_50px_-28px_rgba(131,46,4,0.35)] md:p-12">
          <header className="space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-fire-700">
              Inside Clarovate
            </p>
            <h1 className="text-3xl font-bold md:text-4xl">About Clarovate</h1>
            <p className="text-base leading-relaxed text-gray-700">
              We help growth-stage cybersecurity companies simplify go-to-market
              decisions, align revenue teams, and build durable demand engines.
            </p>
          </header>

          <section className="rounded-2xl border border-fire-100 bg-fire-50/70 p-6">
            <h2 className="text-2xl font-semibold">Company information</h2>
            <dl className="mt-4 space-y-3 text-base text-gray-800">
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="font-semibold">Company name</dt>
                <dd>{data.companyName}</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="font-semibold">Founded</dt>
                <dd>{data.founded}</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="font-semibold">Employees</dt>
                <dd>{data.employees.toLocaleString()}</dd>
              </div>
            </dl>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our mission</h2>
            <p className="text-base leading-relaxed text-gray-700">
              Clarovate delivers exceptional value through innovative demand
              programs, tested playbooks, and transparent reporting. We partner
              with marketing and revenue teams to orchestrate campaigns that
              connect verified intent with high-performing activation channels.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Whether refining ICPs, sequencing creative, or enabling SDR teams,
              we stay focused on measurable business outcomes that compound over
              time.
            </p>
          </section>

          <nav aria-label="About navigation">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-fire-800 px-6 py-3 text-base font-semibold text-white transition hover:bg-fire-900"
            >
              Back to home
            </Link>
          </nav>
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
