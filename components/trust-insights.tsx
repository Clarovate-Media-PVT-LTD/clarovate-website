import React from 'react';

export default function TrustInsights() {
  const insights = [
    'Too much spend on noise — too little qualified intent.',
    'Third-party lists that go cold after one email.',
    'SDR burnout chasing unverified leads.',
    'Campaigns that look busy but deliver no pipeline attribution.',
    'Data silos between sales and marketing killing conversion velocity.',
  ];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-0">
      <div className="w-full mx-auto px-4 md:px-6 lg:px-0">
        <div
          className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-8 md:gap-0 items-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex justify-center md:justify-start md:pl-6 lg:pl-12 xl:pl-16">
            <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] overflow-hidden">
              <img
                src="/thinking_person.jpg"
                alt="Concerned marketer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-end md:pl-10 lg:pl-14 xl:pl-16">
            <div className="bg-fire-100 p-8 md:p-10 w-full md:max-w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-fire-800 mb-6 leading-tight">
                If your pipeline still feels unpredictable despite constant
                spend — this is why
              </h3>
              <ul className="space-y-4">
                {insights.map((insight) => (
                  <li key={insight} className="flex items-start gap-3">
                    <span className="text-black text-lg">▪</span>
                    <span className="text-base md:text-lg text-black leading-relaxed">
                      {insight}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-fire-900 md:text-base">
                  Ready to replace guesswork with data-backed growth?
                </p>
               
              </div>
              <div className='mt-8'>
              <a
                  href="/get-in-touch"
                  className="inline-flex items-center justify-center rounded-xl bg-fire-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fire-900 md:flex-shrink-0"
                >
                  Book a pipeline audit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
