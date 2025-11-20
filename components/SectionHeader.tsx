import type { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SectionHeader(): JSX.Element {
  return (
    <header className="bg-fire-100 border-b border-fire-200 py-4">
      <div className="mx-auto flex w-11/12 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Clarovate"
        >
          <Image
            src="/clarovate_logo.png"
            alt="Clarovate"
            width={220}
            height={70}
            priority
            className="h-14 w-auto"
          />
        </Link>
        <Link
          href="/get-in-touch"
          className="rounded-full bg-fire-800 px-6 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03] hover:bg-fire-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire-700"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
