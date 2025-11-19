'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function GetInTouchForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with 2 second delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Redirect to homepage after showing success message
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="space-y-6 rounded-[28px] border border-fire-100 bg-white/95 p-8 shadow-[0_18px_36px_-22px_rgba(131,46,4,0.35)] backdrop-blur">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-fire-100">
            <svg
              className="h-8 w-8 text-fire-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold text-fire-900">
            Thank you for reaching out!
          </h3>
          <p className="text-base leading-relaxed text-gray-700">
            Your message has been submitted successfully. We&apos;ll get back to
            you soon. Redirecting to homepage...
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-[28px] border border-fire-100 bg-white/95 p-8 shadow-[0_18px_36px_-22px_rgba(131,46,4,0.35)] backdrop-blur"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fullName"
            className="text-sm font-semibold text-fire-900"
          >
            Full name<span className="text-fire-700">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Jane Doe"
            className="rounded-lg border border-fire-100 bg-fire-50/40 px-4 py-3 text-sm text-fire-900 outline-none transition focus:border-fire-400 focus:ring-2 focus:ring-fire-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-fire-900"
          >
            Business email<span className="text-fire-700">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="rounded-lg border border-fire-100 bg-fire-50/40 px-4 py-3 text-sm text-fire-900 outline-none transition focus:border-fire-400 focus:ring-2 focus:ring-fire-200"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="company"
            className="text-sm font-semibold text-fire-900"
          >
            Company<span className="text-fire-700">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Your Company"
            className="rounded-lg border border-fire-100 bg-fire-50/40 px-4 py-3 text-sm text-fire-900 outline-none transition focus:border-fire-400 focus:ring-2 focus:ring-fire-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="role" className="text-sm font-semibold text-fire-900">
            Role / Function
          </label>
          <input
            id="role"
            name="role"
            type="text"
            placeholder="Marketing Lead"
            className="rounded-lg border border-fire-100 bg-fire-50/40 px-4 py-3 text-sm text-fire-900 outline-none transition focus:border-fire-400 focus:ring-2 focus:ring-fire-200"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-fire-900"
        >
          Tell us about your current pipeline challenges
          <span className="text-fire-700">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you trying to solve for? ICP clarity, activation channels, outbound performance..."
          className="rounded-lg border border-fire-100 bg-fire-50/40 px-4 py-3 text-sm text-fire-900 outline-none transition focus:border-fire-400 focus:ring-2 focus:ring-fire-200"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3 text-xs text-gray-600">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border border-fire-200 text-fire-800 focus:ring-fire-300"
          />
          <label htmlFor="consent">
            I agree to receive communication from Clarovate about relevant
            services and I understand I can opt out at any time.
          </label>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full rounded-xl bg-fire-800 text-base font-semibold hover:bg-fire-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Submitting...' : 'Book my session'}
        </Button>
      </div>
    </form>
  );
}
