'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number; // e.g. 0.2 (slower) or -0.2 (opposite direction)
  className?: string;
  as?: React.ElementType;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.2,
  className = '',
  as: Component = 'div',
}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !elementRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const distance = speed * 100;
      gsap.fromTo(
        elementRef.current,
        { y: -distance / 2 },
        {
          y: distance / 2,
          ease: 'none',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [speed, prefersReducedMotion]);

  return (
    <Component 
      ref={elementRef} 
      className={`will-change-transform ${className}`}
    >
      {children}
    </Component>
  );
};
