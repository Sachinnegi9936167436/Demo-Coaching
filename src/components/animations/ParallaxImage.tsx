'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ParallaxImageProps {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  travel?: number;
  children?: ReactNode;
}

/** The oversized image moves inside a stationary crop, so its edges never show. */
export function ParallaxImage({
  src, alt, sizes, className = '', imageClassName = '', travel = 12, children,
}: ParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add({
      motion: '(prefers-reduced-motion: no-preference)',
      desktop: '(min-width: 1024px) and (pointer: fine)',
    }, (context) => {
      if (!context.conditions?.motion) return;
      const distance = Math.min(14, Math.abs(travel)) * (context.conditions.desktop ? 1 : 0.4);
      gsap.fromTo(layerRef.current, { yPercent: -distance }, {
        yPercent: distance,
        ease: 'none',
        scrollTrigger: {
          trigger: frameRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });
    }, frameRef);
    return () => media.revert();
  }, [travel]);

  return (
    <div ref={frameRef} className={`parallax-image ${className}`}>
      <div ref={layerRef} className="parallax-image__layer">
        <Image src={src} alt={alt} fill sizes={sizes} className={`object-cover ${imageClassName}`} />
      </div>
      {children}
    </div>
  );
}
