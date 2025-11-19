'use client';

import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Image from 'next/image';

function CompanyLogosCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const logos = [
    { src: '/Palo-Alto-Logo-1.png', alt: 'Palo Alto Networks' },
    { src: '/cloudfare.png', alt: 'Cloudflare' },
    { src: '/Palo-Alto-Logo-1.png', alt: 'Palo Alto Networks' },
    { src: '/cloudfare.png', alt: 'Cloudflare' },
    { src: '/Palo-Alto-Logo-1.png', alt: 'Palo Alto Networks' },
    { src: '/cloudfare.png', alt: 'Cloudflare' },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'center',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {logos.map((logo, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6"
          >
            <div className="relative flex items-center justify-center h-20 md:h-24 lg:h-28 w-full transform hover:scale-110 transition-all duration-300 cursor-pointer">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={128}
                height={64}
                className="h-8 md:h-12 lg:h-16 object-contain max-w-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default function TrustSection() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-10" data-aos="fade-up">
      <div className="w-container max-w-auto mx-auto px-4 md:px-6 lg:px-2">
        {/* Top Section - Placeholder Text */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-0 mr-4">
          <p className="text-fire-800 text-base md:text-xl font-bold max-w-auto mx-auto">
            Certified for Security & Compliance
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center items-center gap-6 md:gap-2 mb-8 md:mb-2 ml-4 flex-wrap text-center">
          {/* ISO 27001 Badge */}
          <div
            className="relative w-32 h-32 md:w-40 md:h-40 transform hover:scale-110 transition-all duration-300 cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Image
              src="/iso_600.png"
              alt="ISO 27001 Certified"
              width={160}
              height={160}
              className="w-full h-full object-contain"
            />
          </div>

          {/* SOC 2 Badge */}
          <div
            className="relative w-32 h-32 md:w-56 md:h-56 transform hover:scale-110 transition-all duration-300 cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Image
              src="/soc2_600 - Copy (2).png"
              alt="SOC 2 Certified"
              width={224}
              height={224}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Trusted By Headline */}
        <div
          className="text-center mb-8 md:mb-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fire-800">
            Trusted by global cybersecurity leaders
          </h2>
        </div>

        {/* Company Logos Carousel */}
        <div className="mb-12 md:mb-16" data-aos="fade-up" data-aos-delay="400">
          <CompanyLogosCarousel />
        </div>
      </div>
    </section>
  );
}
