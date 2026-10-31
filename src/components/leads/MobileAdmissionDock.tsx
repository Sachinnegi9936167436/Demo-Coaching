'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { ArrowRight, Phone, Sparkles, Calendar, Users } from 'lucide-react';
import { trackCtaClick } from '@/lib/analytics';

interface MobileAdmissionDockProps {
  onOpenDemoModal?: () => void;
}

export const MobileAdmissionDock: React.FC<MobileAdmissionDockProps> = ({
  onOpenDemoModal,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // When scrolling down past 300px, gently hide dock to not obstruct reading
      if (currentScrollY > 300 && currentScrollY > lastScrollY + 12) {
        setIsVisible(false);
      } 
      // When scrolling up or at top of page, reveal dock
      else if (currentScrollY < lastScrollY - 8 || currentScrollY < 120) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`sm:hidden fixed bottom-0 left-0 right-0 z-30 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-[#081321]/92 backdrop-blur-lg border-t border-[#D7B879]/30 pt-2 pb-[max(8px,env(safe-area-inset-bottom))] px-3 shadow-[0_-8px_24px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2">
          {/* Quick Demo Class Action */}
          <Link
            href="/book-demo"
            onClick={() => trackCtaClick('mobile_dock_demo', 'mobile_sticky_dock')}
            className="flex-1 btn-luxury btn-luxury-gold py-2.5 px-3 text-[11px] justify-center min-h-[40px] shadow-none"
          >
            <span>Saturday Demo</span>
            <ArrowRight size={12} />
          </Link>

          {/* Quick 1-on-1 Counselling Action */}
          <Link
            href="/free-counselling"
            onClick={() => trackCtaClick('mobile_dock_counselling', 'mobile_sticky_dock')}
            className="flex-1 py-2.5 px-3 rounded-full border border-white/20 bg-white/5 hover:border-[#18B6AE] text-[11px] font-display text-[#d2d9e2] hover:text-[#18B6AE] text-center uppercase tracking-wider font-semibold min-h-[40px] flex items-center justify-center transition-all"
          >
            1-on-1 Consult
          </Link>

          {/* Call Hotline Icon */}
          <a
            href={`tel:${siteConfig.contact.phoneTel}`}
            onClick={() => trackCtaClick('mobile_dock_call', 'mobile_sticky_dock')}
            className="w-10 h-10 rounded-full bg-[#102338] border border-[#D7B879]/40 flex items-center justify-center text-[#D7B879] shrink-0"
            aria-label="Call Admissions Desk"
          >
            <Phone size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};
