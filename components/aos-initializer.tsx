'use client';

import { useEffect } from 'react';
import AOS from 'aos';

/**
 * Client component to initialize AOS (Animate On Scroll) library
 * This is the only component that needs to be a client component for AOS
 */
export function AosInitializer(): null {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return null;
}
