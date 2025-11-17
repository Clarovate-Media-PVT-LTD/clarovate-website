import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Clarovate Privacy Policy. We protect the data you trust us with. Learn what we collect, why we collect it, and how we keep it secure.',
  openGraph: {
    title: 'Privacy Policy | Clarovate',
    description:
      'We protect the data you trust us with. This policy explains what we collect, why we collect it, and how we keep it secure.',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-fire-50 text-fire-900">
      <SectionHeader />

      <header className="bg-gradient-to-b from-fire-900 via-fire-800 to-fire-700 py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Clarovate Policies
          </p>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-white/80 md:text-base">
            We protect the data you trust us with. This policy explains what we
            collect, why we collect it, and how we keep it secure throughout
            every Clarovate engagement.
          </p>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 md:py-20">
        <article className="space-y-10 rounded-[32px] border border-fire-100 bg-white/95 p-8 shadow-[0_25px_50px_-28px_rgba(131,46,4,0.35)] md:p-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-3xl">
              1. What we collect
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 md:text-base">
              Clarovate only gathers the information required to deliver and
              improve our services. Typical data includes contact details,
              company information, and campaign performance metrics. Sensitive
              information is never collected unless explicitly agreed to in
              writing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-3xl">
              2. How we use your data
            </h2>
            <ul className="space-y-3 text-sm text-gray-700 md:text-base">
              <li>
                • Execute marketing programs and measure campaign results.
              </li>
              <li>
                • Provide strategic recommendations tailored to your growth
                goals.
              </li>
              <li>
                • Share high-level learnings that help optimize spend and
                targeting.
              </li>
              <li>
                • Communicate updates, service changes, and relevant Clarovate
                insights.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-3xl">
              3. How we protect your data
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 md:text-base">
              We maintain SOC 2 aligned controls, enforce least-privilege
              access, and work exclusively with sub-processors that meet
              Clarovate’s security standards. Data is encrypted in transit and
              at rest, retained only while necessary, and permanently deleted
              when no longer required.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-3xl">
              4. Your rights
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 md:text-base">
              You can request access to your data, updates, or deletion at any
              time. Email{' '}
              <a
                href="mailto:contact@clarovate.com"
                className="font-semibold text-fire-800 underline-offset-4 hover:underline"
              >
                contact@clarovate.com
              </a>{' '}
              and we will respond within one business day.
            </p>
          </section>

          <section className="rounded-2xl border border-fire-100 bg-fire-50/80 p-6 text-sm leading-relaxed text-gray-700 shadow-inner md:text-base">
            Clarovate may update this policy as regulations evolve. We will
            notify active clients of material changes. Continue to our{' '}
            <Link
              href="/cookies-settings"
              className="font-semibold text-fire-800 underline-offset-4 hover:underline"
            >
              cookies settings
            </Link>{' '}
            or{' '}
            <Link
              href="/terms-of-service"
              className="font-semibold text-fire-800 underline-offset-4 hover:underline"
            >
              terms of service
            </Link>{' '}
            to learn more.
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
