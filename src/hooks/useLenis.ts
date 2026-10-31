'use client';

import { useCallback } from 'react';
import type Lenis from 'lenis';

export interface ScrollToOptions {
  offset?: number;
  immediate?: boolean;
  duration?: number;
}

/**
 * useLenis: Custom hook to interface with Lenis smooth scroll or native fallback
 */
export function useLenis() {
  const scrollTo = useCallback(
    (target: string | number | HTMLElement, options?: ScrollToOptions) => {
      if (typeof window === 'undefined') return;

      const lenisInstance = (window as Window & { __lenis?: Lenis }).__lenis;
      if (lenisInstance && typeof lenisInstance.scrollTo === 'function') {
        lenisInstance.scrollTo(target, options);
      } else {
        const element = typeof target === 'string' ? document.querySelector(target) : target;
        const top = typeof element === 'number'
          ? element
          : element instanceof Element
            ? element.getBoundingClientRect().top + window.scrollY
            : null;
        if (top === null) return;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({
          top: top + (options?.offset ?? 0),
          behavior: options?.immediate || reducedMotion ? 'instant' : 'smooth',
        });
      }
    },
    []
  );

  return { scrollTo };
}

export default useLenis;
