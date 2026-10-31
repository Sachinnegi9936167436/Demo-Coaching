'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  delay?: number;
  className?: string;
  start?: string;
  once?: boolean;
}

export const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  direction = 'up',
  distance = 36,
  duration = 0.9,
  delay = 0,
  className = '',
  start = 'top 85%',
  once = true,
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !elementRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    let x = 0;
    let y = 0;

    switch (direction) {
      case 'up':
        y = distance;
        break;
      case 'down':
        y = -distance;
        break;
      case 'left':
        x = distance;
        break;
      case 'right':
        x = -distance;
        break;
      case 'none':
      default:
        break;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementRef.current,
        { x, y, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start,
            once,
          },
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [direction, distance, duration, delay, start, once, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={elementRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};
