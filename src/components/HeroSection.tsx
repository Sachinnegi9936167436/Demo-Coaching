'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, ArrowDown, Sparkles } from 'lucide-react';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { useLenis } from '@/hooks/useLenis';

interface HeroSectionProps {
  onOpenCounsellingModal: () => void;
}

export function HeroSection({ onOpenCounsellingModal }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollTo } = useLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add({
      motion: '(prefers-reduced-motion: no-preference)',
      desktop: '(min-width: 1024px) and (pointer: fine)',
    }, (context) => {
      if (!context.conditions?.motion) return;
      const desktop = context.conditions.desktop;
      // Entrance and scroll transforms live on separate elements.
      gsap.from('.hero-entrance', {
        y: 38, opacity: 0, duration: 1.25, stagger: 0.12,
        ease: 'power3.out', delay: 0.15,
      });
      const timeline = gsap.timeline({
        defaults: { ease: 'none', duration: 1 },
        scrollTrigger: {
          trigger: containerRef.current,
          start: desktop ? 'top top' : 'top bottom',
          end: 'bottom top',
          scrub: desktop ? 1.1 : 0.35,
          invalidateOnRefresh: true,
        },
      });
      timeline
        .fromTo('.hero-landscape',
          { yPercent: desktop ? 0 : -11, scale: desktop ? 1 : 1.08 },
          { yPercent: desktop ? 19 : 11, scale: desktop ? 1.06 : 1.02 }, 0)
        .to('.hero-content-depth', { y: desktop ? -135 : -80 }, 0)
        .to('.hero-content-depth', { opacity: 0, duration: 0.55 }, 0.45)
        .to('.hero-orbit', { rotation: desktop ? 38 : 65, y: desktop ? -90 : -50 }, 0)
        .to('.hero-watermark', { xPercent: desktop ? -12 : -24, y: desktop ? -75 : -50 }, 0)
        .to('.hero-scroll-cue', { opacity: 0, y: -30, duration: 0.2 }, desktop ? 0 : 0.55);
    }, containerRef);
    return () => media.revert();
  }, []);

  return (
    <section ref={containerRef} className="parallax-hero relative flex flex-col justify-center items-center text-center overflow-hidden bg-[#081321]">
      <div className="hero-landscape absolute -inset-y-[20%] inset-x-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80"
          alt="Tree-lined university campus in warm evening light"
          fill preload sizes="100vw"
          className="object-cover object-center brightness-[0.48] contrast-[1.12]"
        />
      </div>
      <div className="hero-vignette absolute inset-0 pointer-events-none" />
      <div className="hero-orbit" aria-hidden="true"><span /><span /></div>
      <div className="hero-side-note hidden lg:block" aria-hidden="true">PURPOSE. PRACTICE. POSSIBILITY.</div>
      <div className="hero-watermark" aria-hidden="true">BECOME.</div>

      <div className="hero-content-depth container-luxury relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <div className="hero-entrance eyebrow-luxury justify-center mb-6">
          <span>THE ACADEMIC SANCTUARY</span>
        </div>
        <h1 className="hero-clamp-heading text-[#F9F7F2] mb-6 select-none font-normal">
          <span className="hero-entrance block tracking-tight">YOUR AMBITION.</span>
          <span className="hero-entrance block italic text-[#D7B879] tracking-tight mt-1">OUR MISSION.</span>
        </h1>
        <p className="hero-entrance text-base sm:text-xl text-[#d2d9e2] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Preparing tomorrow&apos;s achievers through exceptional education, expert guidance, and purposeful learning.
        </p>
        <div className="hero-entrance flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6 w-full max-w-xs sm:max-w-none">
          <MagneticButton as="div" className="w-full sm:w-auto">
            <Link href="/courses" className="btn-luxury btn-luxury-gold py-3.5 px-6 sm:py-4 sm:px-9 text-xs font-semibold w-full justify-center">
              <span>Explore Courses</span><ChevronRight size={14} />
            </Link>
          </MagneticButton>
          <MagneticButton onClick={onOpenCounsellingModal} className="btn-luxury btn-luxury-outline py-3.5 px-6 sm:py-4 sm:px-9 text-xs font-semibold w-full justify-center">
            <span>Book Free Counselling</span>
          </MagneticButton>
        </div>
        <div className="hero-entrance inline-flex items-center justify-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 rounded-full bg-[#102338]/70 border border-[#D7B879]/25 backdrop-blur-md text-[11px] sm:text-xs mt-8 sm:mt-12 text-[#d2d9e2] max-w-full">
          <Sparkles size={13} className="text-[#D7B879] shrink-0" />
          <span>Cohort 2026 Admissions Open &bull; <strong>Strict 35-Scholar Batch Rule</strong></span>
        </div>
      </div>
      <button
        type="button"
        className="hero-scroll-cue absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 z-10 min-h-11 px-4 text-[#D7B879]"
        onClick={() => scrollTo('#section-introduction', { offset: -80 })}
      >
        <span className="font-display text-[9px] tracking-[0.25em] uppercase">Discover More</span>
        <span className="hero-scroll-line" aria-hidden="true" />
        <ArrowDown size={13} />
      </button>
    </section>
  );
}
