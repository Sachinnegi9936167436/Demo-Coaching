'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SplitTextRevealProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  stagger?: number;
  delay?: number;
}

export const SplitTextReveal: React.FC<SplitTextRevealProps> = ({
  text,
  className = '',
  tag: Tag = 'h2',
  stagger = 0.04,
  delay = 0,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Split text by words for natural editorial cadence
  const words = text.split(' ');

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const wordElements = containerRef.current.querySelectorAll('.split-word-inner');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordElements,
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.9,
          stagger: stagger,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [words.length, stagger, delay, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag 
      ref={containerRef as any}
      className={`${className} overflow-hidden`}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span 
          key={i} 
          className="inline-block overflow-hidden mr-[0.28em] last:mr-0 align-top pb-[0.12em] -mb-[0.12em]"
          aria-hidden="true"
        >
          <span className="split-word-inner inline-block will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
};
