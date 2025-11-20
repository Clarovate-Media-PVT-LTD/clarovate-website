import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Cookies Settings',
  description:
    'Control which cookies Clarovate uses and learn how each type supports our demand generation services.',
  openGraph: {
    title: 'Cookies Settings | Clarovate',
    description:
      'Cookies help us deliver a better experience. Control which cookies Clarovate uses and learn how each type supports our services.',
    type: 'website',
  },
};

export default function CookiesSettingsPage() {
  return (
    <div className="bg-fire-50 text-fire-900">
      <header>
        <SectionHeader />
      </header>

      <main>
        <section className="bg-gradient-to-b from-fire-900 via-fire-800 to-fire-700 py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Clarovate Policies
            </p>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Cookies Settings
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-white/80 md:text-base">
              Cookies help us deliver a better experience. Control which cookies
              Clarovate uses and learn how each type supports our demand
              generation services.
            </p>
          </div>
        </section>

        <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 md:py-20">
          <article className="space-y-10 rounded-[32px] border border-fire-100 bg-white/95 p-8 shadow-[0_25px_50px_-28px_rgba(131,46,4,0.35)] md:p-12">
            <section>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Manage preferences
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
                Choose which cookies we can store on your device. Essential
                cookies are required for the site to function and cannot be
                disabled. You can update preferences at any time.
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  {
                    label: 'Essential',
                    description:
                      'Enable secure login, session management, and load balancing. Required.',
                    locked: true,
                  },
                  {
                    label: 'Analytics',
                    description:
                      'Help Clarovate understand which content and campaigns resonate most.',
                    locked: false,
                  },
                  {
                    label: 'Marketing',
                    description:
                      'Allow us to personalize follow-ups and show relevant Clarovate insights.',
                    locked: false,
                  },
                ].map((item) => (
                  <label
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-fire-100 bg-fire-50/70 p-5 text-sm shadow-inner"
                  >
                    <input
                      type="checkbox"
                      defaultChecked
                      disabled={item.locked}
                      className="mt-1 h-4 w-4 rounded border-fire-200 text-fire-800 focus:ring-fire-400 disabled:opacity-60"
                    />
                    <span>
                      <span className="block text-base font-semibold text-fire-900">
                        {item.label}
                      </span>
                      <span className="text-gray-700">{item.description}</span>
                    </span>
                  </label>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-700">
                <button
                  type="button"
                  className="rounded-lg border border-fire-200 bg-white px-4 py-2 font-semibold text-fire-900 transition hover:border-fire-400 hover:bg-fire-50"
                >
                  Save preferences
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-transparent bg-fire-900 px-4 py-2 font-semibold text-white transition hover:bg-fire-950"
                >
                  Accept all
                </button>
              </div>
            </section>

            <section className="space-y-4 text-sm leading-relaxed text-gray-700 md:text-base">
              <h2 className="text-2xl font-semibold md:text-3xl">
                Why we use cookies
              </h2>
              <p>
                Cookies let us recognize returning visitors, track performance,
                and deliver the most relevant Clarovate programs. We never use
                them to sell your information.
              </p>
              <ul className="space-y-3">
                <li>
                  • Maintain secure sessions so your portal access stays
                  seamless.
                </li>
                <li>
                  • Measure the effectiveness of demand generation assets.
                </li>
                <li>• Keep outreach cadences aligned with your preferences.</li>
              </ul>
              <p>
                See our{' '}
                <Link
                  href="/privacy-policy"
                  className="font-semibold text-fire-800 underline-offset-4 hover:underline"
                >
                  privacy policy
                </Link>{' '}
                for details on data retention and contact{' '}
                <a
                  href="mailto:contact@clarovate.com"
                  className="font-semibold text-fire-800 underline-offset-4 hover:underline"
                >
                  contact@clarovate.com
                </a>{' '}
                with any questions.
              </p>
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
