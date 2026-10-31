'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function SmoothScroller({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      const lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.95,
        syncTouch: false,
        anchors: { offset: -80 },
      });
      lenisRef.current = lenis;
      (window as Window & { __lenis?: Lenis }).__lenis = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      return () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
        lenisRef.current = null;
        delete (window as Window & { __lenis?: Lenis }).__lenis;
        // Each scene owns its triggers; never kill another component's work.
      };
    });

    // Recalculate pin positions after fonts and images finish changing layout.
    let disposed = false;
    let refreshFrame = 0;
    const refresh = () => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => {
        if (!disposed) ScrollTrigger.refresh();
      });
    };
    document.fonts.ready.then(refresh);
    window.addEventListener('load', refresh);
    document.addEventListener('load', refresh, true);
    refresh();
    return () => {
      disposed = true;
      cancelAnimationFrame(refreshFrame);
      window.removeEventListener('load', refresh);
      document.removeEventListener('load', refresh, true);
      media.revert();
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return <>{children}</>;
}
