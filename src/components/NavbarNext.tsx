'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { Phone, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { NavigationDrawerNext } from './NavigationDrawerNext';

const AdmissionsModalNext = dynamic(
  () => import('./AdmissionsModalNext').then((m) => m.AdmissionsModalNext),
  { ssr: false }
);

export const NavbarNext: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`site-header${isScrolled ? ' is-scrolled' : ''}`}
      >
        {/* Left: Menu Drawer Trigger */}
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          id="openMenu"
          className="site-header-menu group flex items-center gap-2 sm:gap-3 text-[#F9F7F2] hover:text-[#D7B879] transition-colors font-display text-[11px] uppercase p-2 min-h-[44px]"
          aria-label="Open Navigation Menu"
          aria-expanded={isDrawerOpen}
        >
          <div className="flex flex-col justify-center gap-1.5 w-5" aria-hidden="true">
            <span className="block h-[1.5px] bg-[#F9F7F2] transition-colors group-hover:bg-[#D7B879]"></span>
            <span className="block h-[1.5px] bg-[#F9F7F2] transition-colors group-hover:bg-[#D7B879]"></span>
            <span className="block h-[1.5px] bg-[#F9F7F2] transition-colors group-hover:bg-[#D7B879]"></span>
          </div>
          <span className="hidden sm:inline">Menu</span>
        </button>

        {/* Center: Brand Crest */}
        <Link
          href="/"
          className="site-header-brand group"
          aria-label={`${siteConfig.institute.name} home`}
        >
          <span className="site-header-wordmark font-display font-bold text-[#D7B879] group-hover:text-[#edd8a8] transition-colors">
            <span className="md:hidden">{siteConfig.institute.brandShort}</span>
            <span className="hidden md:inline">{siteConfig.institute.name}</span>
          </span>
          <span className="site-header-tagline hidden md:block">
            Academic Sanctuary &bull; Est. {siteConfig.institute.foundedYear}
          </span>
        </Link>

        {/* Right: Actions */}
        <div className="site-header-actions">
          <a
            href={`tel:${siteConfig.contact.phoneTel}`}
            className="site-header-phone text-[#D7B879] hover:text-[#edd8a8] transition-colors"
            aria-label={`Call admissions: ${siteConfig.contact.phoneDisplay}`}
          >
            <Phone size={14} aria-hidden="true" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => setIsDemoModalOpen(true)}
            className="site-header-demo btn-luxury btn-luxury-gold"
          >
            <span className="hidden sm:inline">Reserve Demo</span>
            <span className="sm:hidden">Demo</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </header>

      {/* Slide Navigation Drawer */}
      <NavigationDrawerNext
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
      />

      {/* Admissions Demo Modal */}
      <AdmissionsModalNext
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
};
