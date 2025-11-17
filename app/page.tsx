import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import Footer from '@/components/footer';
import Banner from '@/components/Banner';
import TrustSection from '@/components/trust-section';
import TrustInsights from '@/components/trust-insights';
import PipelineEngine from '@/components/pipeline-engine';
import WhyChooseClarovate from '@/components/why-choose-clarovate';
import DemandGeneration from '@/components/demand-generation';
import ClientTestimonials from '@/components/client-testimonials';
import CtaSession from '@/components/cta-session';

export const metadata: Metadata = {
  title: 'Build Predictable Pipeline for Cybersecurity',
  description:
    'Clarovate helps cybersecurity marketers build predictable pipeline from the audiences that actually buy. Stop guessing what works. Start turning data and intent into qualified pipeline that proves ROI every month.',
  keywords: [
    'cybersecurity marketing',
    'demand generation',
    'B2B pipeline',
    'cybersecurity lead generation',
    'outbound marketing',
    'intent data',
    'ICP targeting',
  ],
  openGraph: {
    title: 'Clarovate - Pipeline Partner for Cybersecurity Marketers',
    description:
      'Stop guessing what works. Start turning data and intent into qualified pipeline that proves ROI every month.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clarovate - Pipeline Partner for Cybersecurity Marketers',
    description:
      'Stop guessing what works. Start turning data and intent into qualified pipeline that proves ROI every month.',
  },
};

export default function Home() {
  return (
    <div className="max-w-full mx-auto">
      <SectionHeader />
      <Banner />
      <div className="border-t border-fire-200"></div>
      <TrustSection />
      <TrustInsights />
      <PipelineEngine />
      <div className="border-t border-fire-200"></div>
      <WhyChooseClarovate />
      <div className="border-t border-fire-200"></div>
      <DemandGeneration />
      <div className="border-t border-fire-200"></div>
      <ClientTestimonials />
      <div className="border-t border-fire-200"></div>
      <CtaSession />
      <Footer />
    </div>
  );
}
