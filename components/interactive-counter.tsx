'use client';

import { useState } from 'react';

/**
 * Example of a Client Component - only use "use client" when you need interactivity
 * This component demonstrates when client-side JavaScript is necessary
 */
export function InteractiveCounter(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <section
      className="mt-4 rounded-lg border border-fire-100 bg-white p-4 shadow-sm"
      aria-labelledby="interactive-counter-heading"
    >
      <header>
        <h2
          id="interactive-counter-heading"
          className="text-lg font-semibold text-fire-900"
        >
          Client Component Example
        </h2>
        <p className="mt-1 text-sm text-gray-700">
          This interactive counter uses the useState hook.
        </p>
      </header>
      <p className="mt-3 text-base text-gray-800">Count: {count}</p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="rounded-md bg-fire-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fire-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire-700"
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => setCount(0)}
          className="rounded-md bg-fire-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fire-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire-700"
        >
          Reset
        </button>
      </div>
    </section>
  );
}
