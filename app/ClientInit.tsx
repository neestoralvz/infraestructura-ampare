'use client'

import { useLayoutEffect } from 'react'

export default function ClientInit() {
  useLayoutEffect(() => {
    if (document.body.classList.contains('vsc-initialized')) {
      document.body.classList.remove('vsc-initialized');
    }
  }, []);

  return null;
}
