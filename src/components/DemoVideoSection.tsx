'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, X, Volume2, Maximize2, Shield } from 'lucide-react';

export const DemoVideoSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Accessible Escape-key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  return (
    <section className="py-28 bg-[#102338] text-[#F9F7F2] border-t border-[#D7B879]/20">
      <div className="container-luxury">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow-luxury justify-center mb-3">
            CHAPTER X — CINEMATIC REEL
          </div>
          <h2 className="section-clamp-heading text-[#F9F7F2] font-normal">
            Inside the Academic Sanctuary
          </h2>
          <p className="text-sm text-[#d2d9e2] max-w-xl mx-auto mt-2">
            Watch our official documentary film exploring our Socratic classrooms, research vaults, and mentorship dialogues.
          </p>
        </div>

        {/* Large Photographic Video Poster with Custom Play Control */}
        <div className="relative max-w-5xl mx-auto h-[280px] sm:h-[450px] md:h-[600px] rounded-2xl overflow-hidden border border-[#D7B879]/35 shadow-2xl group cursor-pointer">
          <Image
            src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=2000&q=80"
            alt="Socratic Classroom Lecture Documentary Reel Poster"
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover filter brightness-[0.75] contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-transparent to-black/30" />

          {/* Center Custom Play Control Button */}
          <div 
            onClick={() => setIsLightboxOpen(true)}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#D7B879]/90 text-[#081321] flex items-center justify-center shadow-2xl shadow-black/80 group-hover:scale-110 group-hover:bg-[#D7B879] transition-all duration-300">
              <Play size={32} className="ml-1.5 fill-current" />
            </div>
            
            <div className="mt-6">
              <span className="font-display text-xs tracking-widest text-[#D7B879] uppercase block mb-1">
                Official Sanctuary Documentary • 4K
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-[#F9F7F2]">
                Click to Experience the Academic Tour
              </h3>
            </div>
          </div>

          {/* Bottom Video Badge */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-xs text-[#d2d9e2]/70 pointer-events-none">
            <span>Runtime: 03m 45s • Socratic Methodology Documentary</span>
            <span className="text-[#18B6AE] font-display uppercase tracking-wider">Sound Muted by Default</span>
          </div>
        </div>

        {/* Accessible Lightbox Modal with Escape-Key and Backdrop Close */}
        {isLightboxOpen && (
          <div 
            className="fixed inset-0 z-[100000] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            onClick={() => setIsLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Campus documentary film player"
          >
            <div 
              className="relative w-full max-w-4xl bg-[#081321] border border-[#D7B879]/40 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Header Bar */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#102338]">
                <div className="flex items-center gap-2 text-xs text-[#D7B879] font-display uppercase tracking-wider">
                  <Shield size={14} />
                  <span>SDC Official Campus Documentary [Sample Reel]</span>
                </div>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-1.5 rounded-lg text-[#8e9eaf] hover:text-[#D7B879] transition-colors"
                  aria-label="Close video player"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Lazy Video Player / Cinematic Stage */}
              <div className="relative w-full aspect-video bg-black flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#D7B879]/20 border border-[#D7B879] flex items-center justify-center text-[#D7B879] mb-4 animate-pulse">
                  <Play size={24} className="ml-1 fill-current" />
                </div>
                <h4 className="font-heading text-xl text-[#F9F7F2] mb-2">
                  Campus Documentary Stream Initiated
                </h4>
                <p className="text-xs text-[#d2d9e2] max-w-md mx-auto mb-4 leading-relaxed">
                  Demonstration player ready. Video complies with accessible guidelines: zero autoplay sound, user-controlled playback, and full keyboard escape navigation.
                </p>
                <div className="text-[11px] text-[#8e9eaf]">
                  Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[#F9F7F2]">ESC</kbd> or click outside to dismiss.
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
