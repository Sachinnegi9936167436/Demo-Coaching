'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface StaggeredRevealProps {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
  start?: string;
  yOffset?: number;
}

export const StaggeredReveal: React.FC<StaggeredRevealProps> = ({
  children,
  stagger = 0.12,
  className = '',
  start = 'top 85%',
  yOffset = 35,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const childElements = containerRef.current.children;
    if (!childElements || childElements.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        childElements,
        { y: yOffset, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [stagger, start, yOffset, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
