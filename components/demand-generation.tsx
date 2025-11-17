import React from 'react';

export default function DemandGeneration() {
  const services = [
    {
      title: 'Demand Done For You',
      intro: 'We build and run your entire demand engine',
      bullets: [
        'Full first-party data setup and enrichment',
        'Campaign strategy, messaging, and channel execution',
        'SDR + Marketing Integration',
        'Weekly performance insights',
      ],
      investment: 'Typical Investment: $5K-$8K/month',
      footerBg: 'bg-fire-800',
    },
    {
      title: 'Demand Done With You',
      intro: 'We build it, train your team, and hand it off',
      bullets: [
        '3-month system setup',
        'Custom Clarovate framework',
        'Team enablement & campaign playbooks',
      ],
      investment: 'One-time Investment: $15K-$20K/month',
      footerBg: 'bg-fire-800',
    },
    {
      title: 'Demand Accelerator (for early-stage startups)',
      intro: 'Test, validate, and scale one campaign to ROI in 30 days',
      bullets: [
        'ICP analysis & first-party dataset',
        'One campaign sprint',
        'Attribution + ROI tracking',
      ],
      investment: 'Pilot Investment: $2K-$3K/month',
      footerBg: 'bg-fire-800',
    },
  ];

  return (
    <section className="bg-fire-50 py-16 md:py-10 lg:py-10" data-aos="fade-up">
      <div className="max-w-auto mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Headline */}
        <div
          className="text-center mb-12 md:mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-fire-800 leading-tight">
            Demand generation built around your growth stage
          </h2>
        </div>

        {/* Service Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-10 md:mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {services.map((service, index) => {
            const isFeatured = index === 1;
            const [investmentLabel, investmentValue] =
              service.investment.split(':');

            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={300 + index * 100}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isFeatured
                    ? 'border-fire-500 bg-white text-fire-900 shadow-[0_25px_45px_-15px_rgba(131,46,4,0.35)] scale-[1.02] hover:scale-[1.05]'
                    : 'border-fire-100 bg-white text-gray-900 shadow-[0_20px_40px_-20px_rgba(131,46,4,0.25)] hover:shadow-[0_28px_48px_-18px_rgba(131,46,4,0.4)] hover:scale-[1.04]'
                }`}
                style={{ transformOrigin: 'center top' }}
              >
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isFeatured
                      ? 'bg-gradient-to-b from-fire-900 via-fire-800 to-fire-800 opacity-0 group-hover:opacity-100'
                      : 'bg-gradient-to-b from-fire-900 via-fire-800 to-fire-800 opacity-0 group-hover:opacity-100'
                  }`}
                />
                <div className="relative flex flex-1 flex-col gap-5 px-6 pt-10 pb-6 md:px-8">
                  <div className="flex flex-col gap-2">
                    <h3
                      className={`text-2xl font-bold transition-colors duration-300 ${
                        isFeatured
                          ? 'text-fire-900 group-hover:text-white'
                          : 'text-fire-900 group-hover:text-white'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-base md:text-lg leading-relaxed transition-colors duration-300 ${
                        isFeatured
                          ? 'text-gray-800 group-hover:text-white'
                          : 'text-gray-800 group-hover:text-white'
                      }`}
                    >
                      {service.intro}
                    </p>
                  </div>

                  <ul className="flex-1 space-y-3 md:space-y-4">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <span
                          className={`flex-shrink-0 text-lg transition-colors duration-300 ${
                            isFeatured
                              ? 'text-fire-800 group-hover:text-white'
                              : 'text-fire-800 group-hover:text-white'
                          }`}
                        >
                          •
                        </span>
                        <span
                          className={`text-base md:text-lg leading-relaxed transition-colors duration-300 ${
                            isFeatured
                              ? 'text-gray-800 group-hover:text-white'
                              : 'text-gray-800 group-hover:text-white'
                          }`}
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`rounded-2xl border px-4 py-4 text-center shadow-inner ${
                      isFeatured
                        ? 'border-fire-200 bg-fire-100 text-fire-900 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/15 group-hover:text-white'
                        : 'border-fire-200 bg-fire-100 text-fire-900 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/15 group-hover:text-white'
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100">
                      {investmentLabel}
                    </p>
                    <p className="mt-1 text-2xl md:text-3xl font-extrabold leading-tight group-hover:text-white">
                      {investmentValue?.trim() ?? ''}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Disclaimer */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <p className="text-sm md:text-base text-fire-800 flex items-center justify-center gap-2 italic">
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-fire-800"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            Custom plans available for enterprise or regional focus
          </p>
        </div>
      </div>
    </section>
  );
}
