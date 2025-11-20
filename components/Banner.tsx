import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {
  return (
    <section
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-8 md:py-12"
      data-aos="fade-in"
      aria-labelledby="banner-heading"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/homeBanner.jpg"
          alt="Banner background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-fire-50/60" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-auto mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 text-center max-w-7xl">
        {/* Main Headline */}
        <h1
          id="banner-heading"
          className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-fire-800 mb-4 md:mb-6 lg:mb-8 leading-tight break-words"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          For cybersecurity marketers tired of MQLs that never make it to
          pipeline
        </h1>

        {/* Sub-headline */}
        <p
          className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 md:mb-6 lg:mb-8 leading-relaxed max-w-auto mx-auto break-words"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <strong className="text-2xl text-fire-700">Stop guessing</strong> what
          works.{' '}
          <strong className="text-2xl text-fire-700">Start turning</strong> data
          and intent into qualified pipeline that proves <br /> ROI every month.
        </p>

        {/* Supporting Text */}
        <p
          className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto break-words"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          We help growth-driven teams build and scale predictable pipeline from
          the audiences that actually buy.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center" data-aos-delay="400">
          <Link href="/get-in-touch">
            <Button
              size="lg"
              className="bg-fire-800 hover:bg-fire-900 text-white text-lg px-8 py-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              Book a Strategy Call
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
