'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/siteConfig';
import { trackWhatsAppClick } from '@/lib/analytics';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsAppCta: React.FC = () => {
  const [isOpenTooltip, setIsOpenTooltip] = useState(true);

  // Configurable WhatsApp Contact Number via env variable or fallback siteConfig
  const whatsappNumber = 
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || 
    siteConfig.contact.phoneTel.replace(/[^0-9]/g, '');

  const defaultMessage = encodeURIComponent(
    `Hello Sachin's Demo Coaching! I would like to inquire about Cohort 2026 admissions and Saturday demo masterclasses.`
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${defaultMessage}`;

  const handleClick = () => {
    trackWhatsAppClick('floating_widget');
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Optional Proactive Tooltip Bubble */}
      {isOpenTooltip && (
        <div className="mb-2.5 max-w-[210px] p-3 rounded-xl bg-[#081321] border border-[#D7B879]/40 shadow-2xl text-xs text-[#F9F7F2] relative animate-fade-in">
          <button
            onClick={() => setIsOpenTooltip(false)}
            className="absolute top-1.5 right-1.5 text-[#8e9eaf] hover:text-[#D7B879] p-0.5"
            aria-label="Close tooltip"
          >
            <X size={12} />
          </button>
          <div className="font-display text-[10px] text-[#D7B879] uppercase tracking-wider mb-0.5 font-semibold">
            Admissions Desk
          </div>
          <p className="text-[11px] text-[#d2d9e2] leading-tight pr-2">
            Have questions on admissions or syllabus? Chat with our Dean.
          </p>
        </div>
      )}

      {/* Floating Button with WhatsApp Emerald and Imperial Gold glow */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/20"
        aria-label="Chat on WhatsApp with Admissions Dean"
      >
        {/* Glow rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />

        <MessageCircle size={22} className="shrink-0 fill-current" />
        <span className="hidden sm:inline font-display text-xs uppercase tracking-wider font-semibold">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
