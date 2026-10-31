'use client';

import React, { useRef, useEffect } from 'react';
import { ParallaxImage } from '@/components/animations/ParallaxImage';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '@/config/siteConfig';
import { MessageSquare, ArrowRight, Calendar } from 'lucide-react';
import { MagneticButton } from '@/components/animations/MagneticButton';

interface FinalCtaSectionProps {
  onOpenCounsellingModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenCounsellingModal }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo('.final-cta-content', { y: 65, opacity: 0.35 }, {
        y: 0, opacity: 1, ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%', end: 'center 55%', scrub: 0.8,
        },
      });
    }, sectionRef);
    return () => media.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 py-32 overflow-hidden bg-[#081321] border-t border-[#D7B879]/20"
    >
      {/* Background Subtle Photo with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none will-change-transform z-0"
      >
        <ParallaxImage
          src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=2000&q=80"
          alt="Pinnacle Sanctuary Campus Evening Facade"
          sizes="100vw"
          className="absolute inset-0"
          imageClassName="brightness-[0.45] contrast-[1.15]"
          travel={14}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-[#081321]/50 to-[#081321]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(215,184,121,0.14)_0%,transparent_70%)]" />
      </div>

      {/* Foreground Content */}
      <div className="final-cta-content container-luxury relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="eyebrow-luxury justify-center mb-6">
          <span>THE GATEWAY IS CONVENED • COHORT 2026</span>
        </div>

        {/* Heading: Exactly as requested */}
        <h2 className="hero-clamp-heading text-[#F9F7F2] mb-8 font-normal">
          YOUR NEXT CHAPTER <span className="italic text-[#D7B879] block mt-2">STARTS HERE.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#d2d9e2] font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Take the first step toward genuine academic mastery. Connect with our Academic Dean for an individualized diagnostic consultation or secure your complimentary demo seat.
        </p>

        {/* CTAs: Book Free Counselling, Explore Courses, WhatsApp Enquiry with Magnetic Physics */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
          <MagneticButton
            onClick={onOpenCounsellingModal}
            className="btn-luxury btn-luxury-gold py-4 px-9 text-xs font-semibold"
          >
            <Calendar size={14} />
            <span>Book Free Counselling</span>
          </MagneticButton>

          <MagneticButton as="div">
            <Link
              href="/courses"
              className="btn-luxury btn-luxury-outline py-4 px-9 text-xs font-semibold"
            >
              <span>Explore Courses</span>
              <ArrowRight size={14} />
            </Link>
          </MagneticButton>

          <MagneticButton as="div">
            <a
              href={siteConfig.contact.whatsappChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury btn-luxury-teal py-4 px-8 text-xs font-semibold"
            >
              <MessageSquare size={14} />
              <span>WhatsApp Enquiry</span>
            </a>
          </MagneticButton>
        </div>

        {/* Assurance Pill */}
        <div className="text-xs text-[#8e9eaf]">
          ✦ Transparent admissions protocol • No commercial fee obligation until candidate evaluation offer is extended.
        </div>

      </div>
    </section>
  );
};
