'use client';

import { useState } from 'react';

/**
 * Example of a Client Component - only use "use client" when you need interactivity
 * This component demonstrates when client-side JavaScript is necessary
 */
export function InteractiveCounter(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div
      style={{
        marginTop: '1rem',
        padding: '1rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
      }}
    >
      <p>Client Component Example (uses useState hook)</p>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '0.5rem 1rem',
          marginRight: '0.5rem',
          background: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(0)}
        style={{
          padding: '0.5rem 1rem',
          background: '#666',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Reset
      </button>
    </div>
  );
}
