import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CtaSession() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-11/12 max-w-4xl px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fire-800 leading-tight mb-6">
          Let’s see how your campaigns
          <br className="hidden md:block" /> can perform better.
        </h2>

        <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
          Book a 20–minute session with our demand specialists.
        </p>
        <p className="text-base md:text-lg text-gray-700 max-w-auto mx-auto mb-8 md:mb-10 leading-relaxed">
          We’ll review your current campaigns, pinpoint ROI gaps, and show
          exactly how to scale qualified demand.
        </p>

        <div className="flex justify-center">
          <Link href="/get-in-touch">
            <Button className="bg-fire-800 hover:bg-fire-900 text-white px-6 md:px-8 py-5 text-base md:text-lg rounded-md">
              Book My Session
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
