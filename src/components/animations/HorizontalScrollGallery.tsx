'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface HorizontalScrollGalleryProps {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
  minWidth?: number; // Minimum viewport width for horizontal pinning, defaults to 1024
}

/**
 * Reusable HorizontalScrollGallery
 * Converts vertical scroll into horizontal translation using GSAP ScrollTrigger pinning.
 * Includes graceful mobile/tablet fallback and prefers-reduced-motion bypass.
 */
export const HorizontalScrollGallery: React.FC<HorizontalScrollGalleryProps> = ({
  children,
  className = '',
  trackClassName = '',
  minWidth = 1024,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add(`(min-width: ${minWidth}px)`, () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      const getScrollAmount = () => track.scrollWidth - window.innerWidth + 96;

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, [minWidth, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className={`overflow-x-auto ${className}`}>
        <div className={`flex flex-col lg:flex-row gap-8 ${trackClassName}`}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
    >
      <div 
        ref={trackRef} 
        className={`flex will-change-transform ${trackClassName}`}
      >
        {children}
      </div>
    </div>
  );
};
