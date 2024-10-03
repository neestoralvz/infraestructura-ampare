'use client'

import { useEffect } from 'react'

export default function ErrorSuppressor() {
  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0].includes('Warning: Prop `className` did not match')) {
        console.log('Suppressed className mismatch warning:', ...args);
        return;
      }
      originalError.call(console, ...args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  return null;
}