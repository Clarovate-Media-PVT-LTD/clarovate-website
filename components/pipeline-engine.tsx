import React from "react";
import { Database, PlayCircle, LineChart } from "lucide-react";

export default function PipelineEngine() {
  return (
    <section
      className="bg-white py-16 md:py-20 lg:py-24"
      data-aos="fade-up"
    >
      <div className="w-container max-w-auto mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Headline */}
        <div
          className="text-center mb-6 md:mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-fire-800 mb-4 md:mb-6 leading-tight">
            We build predictable pipeline engines for cybersecurity growth
          </h2>
        </div>

        {/* Sub-headline */}
        <div
          className="text-center mb-8 md:mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-xl md:text-2xl lg:text-2xl font-bold text-black text-gray-800">
            Turn data, intent, and outbound precision into qualified demand —
            consistently
          </p>
        </div>

        {/* Descriptive Paragraphs */}
        <div
          className="text-center mb-12 md:mb-16 lg:mb-12 max-w-auto mx-auto space-y-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-base md:text-lg lg:text-l text-gray-700 leading-relaxed">
            We help cybersecurity marketing teams move from cold noise to
            predictable growth. No random leads. No wasted spend. Just measurable outcomes that tie every dollar to your bottom line.
          </p>
          
        </div>

        {/* Three-Step Workflow Diagram */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-20 md:top-24 lg:top-28 left-[10%] right-[10%] h-1.5 bg-fire-800 hidden md:block z-0" />

          {/* Steps Container */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {/* Step 1: Data */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-30 lg:h-30 bg-fire-800 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-fire-800 font-bold text-base md:text-lg shadow-lg border-2 border-fire-800 z-20">
                    1
                  </div>
                  <Database className="w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 text-white" strokeWidth={2.25} />
                </div>
              </div>

              {/* Label */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                Data
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base lg:text-lg text-gray-700 text-center max-w-xs">
                Set up your first-party engine
              </p>
            </div>

            {/* Step 2: Activation */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-30 lg:h-30 bg-fire-800 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-fire-800 font-bold text-base md:text-lg shadow-lg border-2 border-fire-800 z-20">
                    2
                  </div>
                  <PlayCircle className="w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 text-white" strokeWidth={2.25} />
                </div>
              </div>

              {/* Label */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                Activation
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base lg:text-lg text-gray-700 text-center max-w-xs">
                Launch precision outreach
              </p>
            </div>

            {/* Step 3: ROI */}
            <div
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-30 lg:h-30 bg-fire-800 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-fire-800 font-bold text-base md:text-lg shadow-lg border-2 border-fire-800 z-20">
                    3
                  </div>
                  <LineChart className="w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 text-white" strokeWidth={2.25} />
                </div>
              </div>

              {/* Label */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                ROI
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base lg:text-lg text-gray-700 text-center max-w-xs">
                Measure and optimize performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
