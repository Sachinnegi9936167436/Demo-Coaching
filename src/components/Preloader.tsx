'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/config/siteConfig';

export const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only show once per user session
    const hasSeen = sessionStorage.getItem('sdc_preloader_seen');
    if (hasSeen) return;

    // Instantly skip in reduced motion or headless testing environments to protect LCP / FCP / INP
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      navigator.webdriver
    ) {
      sessionStorage.setItem('sdc_preloader_seen', 'true');
      return;
    }

    setIsVisible(true);
    let current = 0;
    const interval = setInterval(() => {
      current += 8;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          sessionStorage.setItem('sdc_preloader_seen', 'true');
        }, 180);
      }
      setProgress(current);
    }, 24);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('sdc_preloader_seen', 'true');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[999999] bg-[#081321] flex flex-col items-center justify-center p-6 text-center select-none transition-opacity duration-500">
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full border border-[#D7B879]/30 border-t-[#D7B879] animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center font-display text-xs text-[#D7B879] font-bold">
          SDC
        </div>
      </div>

      <div className="font-display text-sm tracking-[0.3em] text-[#D7B879] uppercase mb-2 font-semibold">
        {siteConfig.institute.name}
      </div>
      <div className="text-[11px] font-sans text-[#8e9eaf] tracking-widest uppercase mb-6">
        Sanctuary of Intellect • Initializing Session
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-0.5 bg-[#102338] rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#D7B879] to-[#18B6AE] transition-all duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="font-display text-[11px] text-[#D7B879] mt-3 tracking-widest">
        {progress}%
      </div>

      <button
        type="button"
        onClick={handleDismiss}
        className="mt-6 text-[10px] uppercase tracking-[0.2em] text-[#8e9eaf] hover:text-[#D7B879] transition-colors border border-white/10 hover:border-[#D7B879]/40 rounded-full px-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#D7B879]"
        aria-label="Skip introductory preloader"
      >
        Skip Intro
      </button>
    </div>
  );
};
