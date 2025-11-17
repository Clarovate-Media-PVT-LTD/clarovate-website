import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Clarovate Terms of Service. These terms ensure every Clarovate engagement is anchored in trust, transparency, and measurable outcomes.',
  openGraph: {
    title: 'Terms of Service | Clarovate',
    description:
      'These terms ensure every Clarovate engagement is anchored in trust, transparency, and measurable outcomes.',
    type: 'website',
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-fire-50 text-fire-900">
      <SectionHeader />

      <header className="bg-gradient-to-b from-fire-900 via-fire-800 to-fire-700 py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Clarovate Policies
          </p>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Terms of Service
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-white/80 md:text-base">
            These terms ensure every Clarovate engagement is anchored in trust,
            transparency, and measurable outcomes. Please review them before
            starting a new initiative.
          </p>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 md:py-20">
        <article className="space-y-10 rounded-[32px] border border-fire-100 bg-white/95 p-8 shadow-[0_25px_50px_-28px_rgba(131,46,4,0.35)] md:p-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-3xl">
              1. Scope of services
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 md:text-base">
              Clarovate delivers the demand generation programs outlined in your
              master services agreement or statement of work. Scope changes must
              be mutually agreed to in writing and may impact timelines or fees.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-3xl">
              2. Client commitments
            </h2>
            <ul className="space-y-3 text-sm text-gray-700 md:text-base">
              <li>
                • Designate a primary decision maker empowered to approve
                campaigns.
              </li>
              <li>
                • Provide timely access to data, tools, and brand guidelines
                required to execute.
              </li>
              <li>• Review deliverables within the agreed feedback cycles.</li>
              <li>
                • Remit invoices according to the payment schedule stated in
                your agreement.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-3xl">
              3. Clarovate commitments
            </h2>
            <ul className="space-y-3 text-sm text-gray-700 md:text-base">
              <li>
                • Operate with diligence, creativity, and continuous
                optimization.
              </li>
              <li>
                • Maintain confidentiality of all client data and materials.
              </li>
              <li>
                • Report progress on the cadence agreed to (typically weekly or
                bi-weekly).
              </li>
              <li>• Notify clients promptly if risks or blockers arise.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-3xl">
              4. Termination & liability
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 md:text-base">
              Either party may terminate for material breach with written notice
              and an opportunity to cure. Clarovate’s liability is limited to
              the fees paid in the previous 90 days, and we are not liable for
              indirect or consequential damages.
            </p>
          </section>

          <section className="rounded-2xl border border-fire-100 bg-fire-50/80 p-6 text-sm leading-relaxed text-gray-700 shadow-inner md:text-base">
            These terms complement any signed master services agreement. In the
            case of conflict, the signed agreement governs. For privacy or
            cookie information, see the{' '}
            <Link
              href="/privacy-policy"
              className="font-semibold text-fire-800 underline-offset-4 hover:underline"
            >
              privacy policy
            </Link>{' '}
            and{' '}
            <Link
              href="/cookies-settings"
              className="font-semibold text-fire-800 underline-offset-4 hover:underline"
            >
              cookies settings
            </Link>{' '}
            pages. Questions? Email{' '}
            <a
              href="mailto:legal@clarovate.com"
              className="font-semibold text-fire-800 underline-offset-4 hover:underline"
            >
              legal@clarovate.com
            </a>
            .
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
