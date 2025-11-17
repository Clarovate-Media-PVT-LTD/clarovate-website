import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WhyChooseClarovate() {
  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12 md:w-16 md:h-16 text-fire-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
          <line x1="12" y1="2" x2="12" y2="8" strokeWidth="2" />
          <line x1="12" y1="16" x2="12" y2="22" strokeWidth="2" />
          <line x1="2" y1="12" x2="8" y2="12" strokeWidth="2" />
          <line x1="16" y1="12" x2="22" y2="12" strokeWidth="2" />
        </svg>
      ),
      title: 'Precision Targeting',
      description:
        'Proprietary ICP + intent-driven targeting for security segments',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 md:w-16 md:h-16 text-fire-800"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ),
      title: 'Outbound Expertise',
      description:
        'Decades of performance experience in tech and SaaS outreach.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 md:w-16 md:h-16 text-fire-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: 'ROI Transparency',
      description: 'Every campaign tied to measurable SQL and pipeline growth.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 md:w-16 md:h-16 text-fire-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2 12h20"
          />
        </svg>
      ),
      title: 'Domain Focus',
      description:
        'Deep understanding of cybersecurity buyer behavior and trust dynamics.',
    },
  ];

  const results = [
    {
      number: '3x',
      description: 'Increase in SQL conversion',
    },
    {
      number: '40%',
      description: 'Lower cost per qualified meeting',
    },
    {
      number: '100%',
      description: 'Measurable campaign attribution',
    },
  ];

  return (
    <section className="bg-fire-50 py-16 md:py-20 lg:py-24" data-aos="fade-up">
      <div className="max-w-auto mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Headline */}
        <div
          className="text-center mb-6 md:mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-fire-800 mb-4 md:mb-6 leading-tight">
            Why cybersecurity companies choose Clarovate
          </h2>
        </div>

        {/* Sub-headline */}
        <div
          className="text-center mb-4 md:mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-xl md:text-2xl lg:text-2xl font-bold text-gray-800 text-gray-600">
            Because you don&apos;t need more leads{' '}
            <strong className="text-fire-800 italic">
              — you need the right ones
            </strong>
          </p>
        </div>

        {/* Introductory Text */}
        <div
          className="text-center mb-12 md:mb-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-base md:text-lg lg:text-l text-black max-w-auto mx-auto text-gray-600">
            We focus on what truly drives predictable cybersecurity growth
          </p>
        </div>

        {/* Four Feature Sections */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20 justify-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
              data-aos="fade-up"
              data-aos-delay={500 + index * 100}
            >
              {/* Icon */}
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-fire-800 mb-3 md:mb-4">
                {feature.title}
              </h3>

              {/* Divider */}
              <div className="w-16 h-0.5 bg-fire-800 mb-4 md:mb-5 mx-auto"></div>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-800 leading-relaxed max-w-md mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quantitative Results Section */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16 relative"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          {results.map((result, index) => (
            <div
              key={index}
              className="text-center relative"
              data-aos="zoom-in"
              data-aos-delay={1000 + index * 100}
            >
              {/* Vertical Divider - Only show on desktop between items */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-fire-800 opacity-20"></div>
              )}

              {/* Number */}
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-fire-800 mb-3 md:mb-4">
                {result.number}
              </div>

              {/* Description */}
              <p className="text-base md:text-lg lg:text-xl text-gray-800 max-w-xs mx-auto">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center" data-aos-delay="1000">
          <Link href="/get-in-touch">
            <Button
              size="lg"
              className="bg-fire-800 hover:bg-fire-900 text-white text-lg px-8 py-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              Talk to a strategist
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
