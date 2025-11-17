import Footer from '@/components/footer';
import SectionHeader from '@/components/SectionHeader';
import React from 'react';

export default function TermsAndPolicies() {
  return (
    <div className="bg-fire-50 bg-opacity-50 pt-20">
      <SectionHeader />
      <div className="blade-bottom-padding-lg">
        <div className="blade-top-padding-lg blade-bottom-padding-lg w-container max-w-screen-lg ">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-fire-700 via-fire-800 to-fire-700 font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-tight">
            Terms & policies
          </h1>
          <div className="blade-top-padding">
            <section>
              <p className="text-base md:text-lg ">
                At Clarovate, we respect your privacy and are committed to
                protecting your personal data.
              </p>

              <h4 className="font-semibold pt-6 pb-2">
                1. Information We Collect
              </h4>
              <ul className="list-disc pl-8">
                <li>
                  <strong>Contact details:</strong> Name, email, and phone
                  number.
                </li>
                <li>
                  <strong>Browsing data:</strong> Collected through cookies for
                  website optimization.
                </li>
              </ul>

              <h4 className="font-semibold pt-6 pb-2">
                2. How We Use Your Information
              </h4>
              <ul className="list-disc pl-8">
                <li>
                  To deliver services, improve user experience, and send
                  updates.
                </li>
                <li>
                  To comply with legal obligations and ensure data security.
                </li>
              </ul>

              <h4 className="font-semibold pt-6 pb-2">
                3. Data Sharing and Protection
              </h4>
              <ul className="list-disc pl-8">
                <li>We never sell your data to third parties.</li>
                <li>
                  All data is securely stored and transferred in compliance with
                  GDPR and industry standards.
                </li>
              </ul>

              <h4 className="font-semibold pt-6 pb-2">4. Your Rights</h4>
              <ul className="list-disc pl-8">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
