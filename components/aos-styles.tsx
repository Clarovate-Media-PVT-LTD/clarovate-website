'use client';

import { useEffect } from 'react';

export function AosStyles(): null {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/aos@next/dist/aos.css';
    document.head.appendChild(link);

    return () => {
      const existingLink = document.querySelector(
        'link[href="https://unpkg.com/aos@next/dist/aos.css"]'
      );
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []);

  return null;
}
