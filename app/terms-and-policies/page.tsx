import Footer from '@/components/footer';
import SectionHeader from '@/components/SectionHeader';
import React from 'react';

export default function TermsAndPolicies() {
  return (
    <div className="bg-fire-50 bg-opacity-50">
      <header>
        <SectionHeader />
      </header>
      <main className="blade-bottom-padding-lg">
        <section className="blade-top-padding-lg blade-bottom-padding-lg w-container max-w-screen-lg">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-fire-700">
              Compliance
            </p>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-fire-700 via-fire-800 to-fire-700 font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Terms & policies
            </h1>
          </header>
          <article className="blade-top-padding space-y-6 text-base md:text-lg text-gray-800">
            <p>
              At Clarovate, we respect your privacy and are committed to
              protecting your personal data. The summary below highlights how we
              manage information across our engagements.
            </p>

            <section aria-labelledby="section-1" className="space-y-2">
              <h2 id="section-1" className="text-xl font-semibold">
                1. Information we collect
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Contact details:</strong> Name, email, and phone
                  number.
                </li>
                <li>
                  <strong>Browsing data:</strong> Collected through cookies for
                  website optimization.
                </li>
              </ul>
            </section>

            <section aria-labelledby="section-2" className="space-y-2">
              <h2 id="section-2" className="text-xl font-semibold">
                2. How we use your information
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  Deliver services, improve user experience, and send updates.
                </li>
                <li>Comply with legal obligations and ensure data security.</li>
              </ul>
            </section>

            <section aria-labelledby="section-3" className="space-y-2">
              <h2 id="section-3" className="text-xl font-semibold">
                3. Data sharing and protection
              </h2>
              <ul className="list-disc pl-6">
                <li>We never sell your data to third parties.</li>
                <li>
                  All data is securely stored and transferred in compliance with
                  GDPR and industry standards.
                </li>
              </ul>
            </section>

            <section aria-labelledby="section-4" className="space-y-2">
              <h2 id="section-4" className="text-xl font-semibold">
                4. Your rights
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  You can request access, deletion, or modification of your data
                  at any time.
                </li>
                <li>
                  Contact us at{' '}
                  <a
                    href="mailto:privacy@clarovate.com"
                    className="font-bold underline underline-offset-4"
                  >
                    privacy@clarovate.com
                  </a>{' '}
                  for queries.
                </li>
              </ul>
            </section>
          </article>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
