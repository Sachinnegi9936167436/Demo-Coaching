'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ImageMaskRevealProps {
  src: string;
  alt: string;
  className?: string;
  direction?: 'bottom-to-top' | 'left-to-right';
  priority?: boolean;
}

export const ImageMaskReveal: React.FC<ImageMaskRevealProps> = ({
  src,
  alt,
  className = 'h-80 w-full',
  direction = 'bottom-to-top',
  priority = false,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !wrapperRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const initialClip = direction === 'bottom-to-top'
      ? 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
      : 'polygon(0 0, 0 0, 0 100%, 0 100%)';

    const finalClip = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';

    const ctx = gsap.context(() => {
      // 1. Clip path mask reveal
      gsap.fromTo(
        wrapperRef.current,
        { clipPath: initialClip },
        {
          clipPath: finalClip,
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // 2. Subtle image scale settling (from 1.12 to 1.0)
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.15 },
          {
            scale: 1.0,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, [direction, prefersReducedMotion]);

  return (
    <div 
      ref={wrapperRef}
      className={`relative overflow-hidden ${className} will-change-transform`}
      style={{ clipPath: prefersReducedMotion ? 'none' : undefined }}
    >
      <Image
        ref={imageRef as any}
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover will-change-transform"
      />
    </div>
  );
};
