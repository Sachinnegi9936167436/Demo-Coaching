'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '@/config/siteConfig';
import { Sparkles, ChevronRight, ArrowDown, Award, Compass } from 'lucide-react';

interface HeroCinematicNextProps {
  onOpenDemoModal: () => void;
}

export const HeroCinematicNext: React.FC<HeroCinematicNextProps> = ({ onOpenDemoModal }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const stageBoxRef = useRef<HTMLDivElement | null>(null);

  // Dual celestial amber & teal starfield particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const particles = Array.from({ length: 48 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.4,
      a: Math.random() * 0.5 + 0.25,
      v: Math.random() * 0.22 + 0.08,
      angle: Math.random() * Math.PI * 2,
      isTeal: i % 3 === 0, // Accent innovation teal interspersed with champagne gold
    }));

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep Midnight Sapphire center spotlight
      const grad = ctx.createRadialGradient(
        width / 2, height * 0.44, 20,
        width / 2, height * 0.44, width * 0.6
      );
      grad.addColorStop(0, 'rgba(215, 184, 121, 0.09)');
      grad.addColorStop(0.35, 'rgba(24, 182, 174, 0.04)');
      grad.addColorStop(1, 'rgba(8, 19, 33, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.v;
        p.x += Math.sin(p.angle) * 0.22;
        p.angle += 0.01;
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.isTeal 
          ? `rgba(24, 182, 174, ${p.a})`
          : `rgba(215, 184, 121, ${p.a})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // GSAP ScrollTrigger Scrub
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (stageBoxRef.current && heroRef.current) {
        gsap.to(stageBoxRef.current, {
          scale: 0.94,
          opacity: 0.88,
          y: 45,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32 pb-24 overflow-hidden bg-[#081321]"
    >
      {/* Background Starfield Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      />

      {/* Radial Atmospheric Illumination */}
      <div 
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 36%, rgba(215,184,121,0.14) 0%, rgba(24,182,174,0.06) 45%, transparent 70%)',
        }}
      />

      {/* Main Content Stage */}
      <div 
        ref={stageBoxRef} 
        className="container-luxury relative z-10 max-w-5xl mx-auto"
      >
        {/* Eyebrow */}
        <div className="eyebrow-luxury justify-center mb-6">
          <span>THE ACADEMIC SANCTUARY • PROLOGUE</span>
        </div>

        {/* Cinematic Headline: Desktop 80-120px / Mobile 40-58px clamp with carefully positioned line breaks */}
        <h1 className="hero-clamp-heading text-[#F9F7F2] mb-8">
          <span className="word-reveal-1 block">The Architecture of</span>
          <span className="word-reveal-2 block italic text-[#D7B879]">Uncompromising</span>
          <span className="word-reveal-3 block">Intellect.</span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="text-base sm:text-xl text-[#d2d9e2] font-light max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          {siteConfig.institute.name} is an elite academic atelier engineered for aspirants targeting top ranks in JEE (Advanced), NEET-UG, and Public Governance. Micro-cohorts capped strictly at 35 scholars.
        </p>

        {/* Intake Pill Badge */}
        <div className="inline-flex items-center gap-3 sm:gap-5 px-6 py-2.5 rounded-full bg-[#102338]/90 border border-[#D7B879]/30 backdrop-blur-md text-xs sm:text-sm mb-12 shadow-xl shadow-black/50">
          <span className="flex items-center gap-2 text-[#D7B879] font-medium">
            <Sparkles size={14} className="text-[#D7B879]" />
            <span>Admissions: <strong>{siteConfig.admissions.activeCycle}</strong></span>
          </span>
          <span className="w-px h-4 bg-[#D7B879]/30 hidden sm:block" />
          <span className="text-[#d2d9e2] hidden sm:inline">
            Batch Ceiling: <strong>35 Scholars / Batch</strong>
          </span>
        </div>

        {/* Action CTAs: Champagne Gold & Innovation Teal */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onOpenDemoModal}
            className="btn-luxury btn-luxury-gold py-4 px-9 text-xs font-semibold"
          >
            <span>{siteConfig.ctas.bookDemoClass}</span>
            <ChevronRight size={14} />
          </button>

          <Link
            href="/courses"
            className="btn-luxury btn-luxury-outline py-4 px-9 text-xs font-semibold"
          >
            <span>{siteConfig.ctas.viewAllCourses}</span>
          </Link>
        </div>

        {/* Three Pillar Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-20 pt-10 border-t border-[#D7B879]/20">
          <div>
            <div className="font-display text-3xl sm:text-4xl text-[#D7B879] font-bold">1 : 7</div>
            <div className="text-[11px] sm:text-xs text-[#8e9eaf] uppercase tracking-widest mt-1">
              Mentor-Scholar Ratio [Sample]
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl text-[#18B6AE] font-bold">35 Max</div>
            <div className="text-[11px] sm:text-xs text-[#8e9eaf] uppercase tracking-widest mt-1">
              Constitutional Batch Ceiling
            </div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl text-[#D7B879] font-bold">100%</div>
            <div className="text-[11px] sm:text-xs text-[#8e9eaf] uppercase tracking-widest mt-1">
              First-Principles Socratic Method
            </div>
          </div>
        </div>
      </div>

      {/* Downward Scroll Cue */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => {
          const el = document.getElementById('chapter-genesis');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="font-display text-[9px] tracking-widest uppercase text-[#D7B879]">
          Enter The Craft
        </span>
        <ArrowDown size={13} className="text-[#D7B879] animate-bounce" />
      </div>
    </section>
  );
};
