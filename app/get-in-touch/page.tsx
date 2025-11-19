import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import Footer from '@/components/footer';
import { GetInTouchForm } from '@/components/get-in-touch-form';

export const metadata: Metadata = {
  title: 'Get in Touch',
  description:
    'Get in touch with Clarovate. Our cybersecurity marketing specialists will learn about your growth goals, share playbooks that work, and map a path to predictable pipeline.',
  openGraph: {
    title: 'Get in Touch with Clarovate',
    description:
      'Our cybersecurity marketing specialists would be more than happy to learn about your growth goals and help you build predictable pipeline.',
    type: 'website',
  },
};

export default function GetInTouch() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF4DB] via-[#FFF7E9] to-white text-fire-900">
      <SectionHeader />

      <section className="bg-gradient-to-b from-[#431601] via-[#602406] to-[#7A320B] text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-16 text-center md:py-20">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Get in touch with our team
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Our cybersecurity marketing specialists would be more than happy to
            learn about your growth goals, share playbooks that work in the real
            world, and map a path to predictable pipeline. Tell us where you are
            stuck—we will help you move forward.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 rounded-[36px] border border-fire-100 bg-white/90 p-8 shadow-[0_25px_60px_-25px_rgba(131,46,4,0.3)] lg:grid-cols-[1fr_1.1fr] lg:p-12">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fire-700">
              Ready to fix your pipeline gap?
            </p>
            <h2 className="text-2xl font-bold md:text-3xl">
              Let&apos;s design a campaign that your revenue team will trust.
            </h2>
            <p className="text-base leading-relaxed text-gray-800">
              We know cybersecurity marketing. Clarovate helps B2B defenders cut
              through the noise, reach the right accounts, and prove ROI. Share
              your challenges and we will outline the data, messaging, and
              activation moves that build predictable demand.
            </p>
            <div className="grid gap-4 text-sm text-gray-700">
              <div className="rounded-2xl border border-fire-100 bg-fire-50/60 p-5 shadow-inner">
                <h3 className="text-base font-semibold text-fire-900">
                  What to expect:
                </h3>
                <ul className="mt-3 space-y-2">
                  <li>• 20-minute consultation with a Clarovate strategist</li>
                  <li>
                    • Benchmark of your current funnel and target accounts
                  </li>
                  <li>
                    • Actionable recommendations tailored to your growth stage
                  </li>
                  <li>• Zero obligation—just clarity on your next best move</li>
                </ul>
              </div>
              <p>
                Prefer email? Reach us directly at{' '}
                <a
                  href="mailto:contact@clarovate.com"
                  className="font-semibold text-fire-800 underline-offset-4 hover:underline"
                >
                  contact@clarovate.com
                </a>
                .
              </p>
            </div>
          </div>

          <GetInTouchForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
