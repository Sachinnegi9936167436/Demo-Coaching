'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PinnedSectionProps {
  children: React.ReactNode;
  pinDistance?: string | number; // e.g. '150%' or 800
  className?: string;
  onProgress?: (progress: number) => void;
  minWidth?: number; // default 1024 to avoid pinning on mobile
}

export const PinnedSection: React.FC<PinnedSectionProps> = ({
  children,
  pinDistance = '100%',
  className = '',
  onProgress,
  minWidth = 1024,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinContentRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;
    if (window.innerWidth < minWidth) return;
    if (!containerRef.current || !pinContentRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${pinDistance}`,
        pin: pinContentRef.current,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          if (onProgress) {
            onProgress(self.progress);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [pinDistance, minWidth, onProgress, prefersReducedMotion]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div ref={pinContentRef} className="w-full">
        {children}
      </div>
    </div>
  );
};
