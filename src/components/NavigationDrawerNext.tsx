'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '@/config/siteConfig';
import { X, ArrowRight, Phone, Mail, MapPin, Sparkles, BookOpen, Compass, Award } from 'lucide-react';

interface NavigationDrawerNextProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemoModal: () => void;
}

export const NavigationDrawerNext: React.FC<NavigationDrawerNextProps> = ({
  isOpen,
  onClose,
  onOpenDemoModal,
}) => {
  const pathname = usePathname();

  // Keyboard accessibility: Close drawer on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const sections = [
    {
      title: 'THE SANCTUARY',
      links: [
        { href: '/', label: 'Home — The Sanctuary', desc: 'Cinematic Overview & Admissions Gate' },
        { href: '/about', label: 'Institute Overview', desc: 'Institutional Philosophy & Pillars' },
        { href: '/about/our-story', label: 'Our Story & Mission', desc: 'History, Timeline & Core Values' },
        { href: '/about/director-message', label: "Director's Address", desc: 'Message from Academic Dean Dr. A. R. Sharma' },
      ],
    },
    {
      title: 'ACADEMICS & FACULTY',
      links: [
        { href: '/courses', label: 'Academic Fellowships', desc: 'JEE, NEET, UPSC & Olympiad Tracks' },
        { href: '/pedagogy', label: 'The Socratic Doctrine', desc: 'First-Principles & 4-Stage Error Taxonomy' },
        { href: '/faculty', label: 'Faculty Directory', desc: 'Senior Discipline Chairs & Office Hours' },
      ],
    },
    {
      title: 'ADMISSIONS & EVALUATION',
      links: [
        { href: '/admissions', label: 'Admissions Gateway', desc: 'SDC-DAT Test & Intake Schedule' },
        { href: '/book-demo', label: 'Reserve Saturday Demo', desc: '3-Hour Live Socratic Masterclass' },
        { href: '/free-counselling', label: '1-on-1 Dean Counselling', desc: 'Private Diagnostic Session' },
      ],
    },
    {
      title: 'PROOF & KNOWLEDGE VAULT',
      links: [
        { href: '/results', label: 'Hall of Fame', desc: 'Illustrative Achiever Benchmarks' },
        { href: '/success-stories', label: 'Transformation Stories', desc: 'In-Depth Case Studies & Strategies' },
        { href: '/resources', label: 'Research Vault', desc: 'Downloadable Derivation & Diagram Dossiers' },
        { href: '/blog', label: 'Editorial Journal', desc: 'Essays on Cognition & Exam Strategy' },
        { href: '/faq', label: 'FAQ Knowledge Base', desc: 'Transparent Answers on Life at SDC' },
        { href: '/contact', label: 'Campus & Contact', desc: 'Pinnacle Tower & Direct Admissions Desk' },
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed top-0 left-0 w-full sm:w-[500px] max-w-[92vw] h-screen bg-[#081321] border-r border-[#D7B879]/30 shadow-2xl z-[10001] flex flex-col p-5 sm:p-10 overflow-y-auto"
          >
            {/* Drawer Top */}
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#D7B879]/20 shrink-0">
              <div>
                <div className="font-display text-[#D7B879] text-xs tracking-widest uppercase font-semibold">
                  {siteConfig.institute.name}
                </div>
                <div className="text-[10px] text-[#8e9eaf] tracking-wider uppercase mt-0.5">
                  Academic Directory Index
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-[#8e9eaf] hover:text-[#D7B879] transition-colors p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Structured Sections */}
            <nav className="flex-1 space-y-8 pr-2">
              {sections.map((sec) => (
                <div key={sec.title}>
                  <div className="text-[10px] font-display uppercase tracking-[0.24em] text-[#18B6AE] font-semibold mb-3">
                    {sec.title}
                  </div>
                  <div className="space-y-1">
                    {sec.links.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={onClose}
                          className={`group flex items-center justify-between py-2.5 px-3 rounded-lg border transition-all ${
                            isActive
                              ? 'bg-[#102338] border-[#D7B879] text-[#D7B879]'
                              : 'border-transparent hover:border-[#D7B879]/30 hover:bg-[#102338]/60 text-[#F9F7F2]'
                          }`}
                        >
                          <div>
                            <div className="font-heading text-base group-hover:text-[#D7B879] transition-colors">
                              {link.label}
                            </div>
                            <div className="text-[10px] text-[#8e9eaf] group-hover:text-[#d2d9e2] transition-colors">
                              {link.desc}
                            </div>
                          </div>
                          <ArrowRight
                            size={14}
                            className={`transition-transform duration-300 group-hover:translate-x-1 ${
                              isActive ? 'text-[#D7B879]' : 'text-[#8e9eaf] group-hover:text-[#D7B879]'
                            }`}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>

            {/* Quick Actions at bottom */}
            <div className="pt-6 mt-8 border-t border-white/10 shrink-0 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/book-demo"
                  onClick={onClose}
                  className="btn-luxury btn-luxury-gold py-2.5 text-[11px] justify-center"
                >
                  <span>Reserve Demo</span>
                  <ArrowRight size={12} />
                </Link>

                <Link
                  href="/free-counselling"
                  onClick={onClose}
                  className="px-3 py-2.5 rounded-full border border-white/20 hover:border-[#18B6AE] text-[11px] font-display text-[#d2d9e2] hover:text-[#18B6AE] text-center uppercase font-semibold transition-all"
                >
                  Free Counselling
                </Link>
              </div>

              <div className="text-[10px] text-[#8e9eaf] text-center pt-2">
                Pinnacle Tower, Central Campus • Direct Hotline: {siteConfig.contact.phoneTel}
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};
