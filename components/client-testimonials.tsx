'use client';

import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export default function ClientTestimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      quote:
        'Clarovate helped us reduce cost per meeting by 38% within 2 months',
      image: '/ceo_one.jpg', // Placeholder - replace with actual client image
      name: 'Matthew Lansberry',
      title: 'CEO & Founder',
      rating: 5,
    },
    {
      quote:
        'Their precision targeting and data-driven approach transformed our pipeline quality',
      image:
        '/portrait-happy-successful-businessman-standing-restaurant-with-crossed-arm.jpg', // Placeholder - replace with actual client image
      name: 'Bill Hunter',
      title: 'VP Marketing',
      rating: 5,
    },
    {
      quote:
        'We saw measurable ROI from day one. The transparency and expertise are unmatched',
      image:
        '/smiling-hispanic-male-executive-gesturing-thumbs-up-against-isolated-background.jpg', // Placeholder - replace with actual client image
      name: 'Carlos Mendes',
      title: 'Head of Demand Gen',
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      className="bg-fire-50 py-12 md:py-16 lg:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-auto mx-auto px-4 md:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-fire-800 leading-tight"
          >
            What our clients say about Clarovate
          </h2>
        </header>

        <Carousel
          setApi={setApi}
          className="w-full"
          aria-label="Client testimonials carousel"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <article
                  className="flex flex-col md:flex-row items-stretch justify-center gap-0 px-4 md:px-0"
                  aria-label={`Testimonial from ${testimonial.name}`}
                >
                  <div className="flex justify-center md:justify-end">
                    <div className="rounded-t-3xl md:rounded-tl-3xl md:rounded-bl-3xl md:rounded-tr-none md:rounded-br-none overflow-hidden border-t-4 border-l-4 border-r-4 border-b-4 border-fire-200 md:border-r-0 relative w-full md:w-[280px] h-72 md:h-[320px]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 max-w-2xl w-full">
                    <div className="relative h-full bg-gradient-to-l from-fire-800 to-fire-700 text-white border-4 border-fire-200 md:border-l-0 rounded-b-3xl md:rounded-tr-3xl md:rounded-br-3xl md:rounded-tl-none md:rounded-bl-none p-8 md:p-10 overflow-hidden flex flex-col justify-between">
                      <Quote className="absolute top-8 right-8 w-20 h-20 text-fire-300/20" />
                      <p className="text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed pr-6">
                        {testimonial.quote}
                      </p>
                      <div className="mt-10 border-t border-fire-200 pt-3">
                        <p className="text-lg md:text-xl font-bold">
                          {testimonial.name}
                        </p>
                        <p className="text-sm md:text-base text-white/80">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 md:mt-16">
          <div className="flex items-center gap-3 bg-white/70 rounded-full px-4 py-2 shadow-md">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? 'bg-fire-900 scale-110'
                    : 'bg-fire-300 hover:bg-fire-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
