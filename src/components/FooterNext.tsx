'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { Phone, Mail, MapPin, ArrowUp, ShieldAlert, Sparkles } from 'lucide-react';

export const FooterNext: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081321] text-[#F9F7F2] border-t border-[#D7B879]/20 pt-20 pb-12 relative overflow-hidden">
      {/* Huge Background Watermark Typography */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none font-display font-black text-[12vw] text-white/[0.02] tracking-widest whitespace-nowrap z-0"
        aria-hidden="true"
      >
        EXCELLENCE
      </div>

      <div className="container-luxury relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-display text-sm tracking-[0.24em] text-[#D7B879] uppercase font-bold">
              {siteConfig.institute.name}
            </div>
            <p className="font-heading text-lg sm:text-xl text-[#F9F7F2] leading-snug">
              "We do not mass-produce exam takers. We forge sovereign intellects."
            </p>
            <p className="text-xs text-[#d2d9e2]/70 leading-relaxed max-w-sm">
              The premier academic sanctuary in New Delhi dedicated to first-principles mastery, intimate 35-seat cohorts, and weekly 1-on-1 diagnostic error audits.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded bg-[#102338] border border-[#18B6AE]/40 text-[10px] text-[#18B6AE] font-display uppercase tracking-wider font-semibold">
                {siteConfig.institute.statusBadge}
              </span>
            </div>
          </div>

          {/* Col 2: Academic Fellowships */}
          <div>
            <div className="font-display text-xs tracking-luxury text-[#D7B879] uppercase mb-4 font-semibold">
              Fellowships
            </div>
            <ul className="space-y-2 text-xs text-[#d2d9e2]/80">
              {siteConfig.availableCourses.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/courses/${c.slug}`}
                    className="hover:text-[#D7B879] transition-colors block"
                  >
                    • {c.code}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/courses" className="text-[#18B6AE] hover:underline font-semibold">
                  View All Fellowships →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: The Academy */}
          <div>
            <div className="font-display text-xs tracking-luxury text-[#D7B879] uppercase mb-4 font-semibold">
              The Academy
            </div>
            <ul className="space-y-2 text-xs text-[#d2d9e2]/80">
              <li><Link href="/about" className="hover:text-[#D7B879] transition-colors">Institute Overview</Link></li>
              <li><Link href="/about/our-story" className="hover:text-[#D7B879] transition-colors">Our Story & Mission</Link></li>
              <li><Link href="/about/director-message" className="hover:text-[#D7B879] transition-colors">Director's Message</Link></li>
              <li><Link href="/pedagogy" className="hover:text-[#D7B879] transition-colors">Socratic Pedagogy</Link></li>
              <li><Link href="/faculty" className="hover:text-[#D7B879] transition-colors">Faculty Directory</Link></li>
              <li><Link href="/results" className="hover:text-[#D7B879] transition-colors">Hall of Fame</Link></li>
              <li><Link href="/success-stories" className="hover:text-[#D7B879] transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Col 4: Admissions & Knowledge */}
          <div>
            <div className="font-display text-xs tracking-luxury text-[#D7B879] uppercase mb-4 font-semibold">
              Admissions & Hub
            </div>
            <ul className="space-y-2 text-xs text-[#d2d9e2]/80">
              <li><Link href="/admissions" className="hover:text-[#D7B879] transition-colors">Admissions Gateway</Link></li>
              <li><Link href="/book-demo" className="hover:text-[#D7B879] transition-colors">Reserve Saturday Demo</Link></li>
              <li><Link href="/free-counselling" className="hover:text-[#D7B879] transition-colors">Free Dean Counselling</Link></li>
              <li><Link href="/resources" className="hover:text-[#D7B879] transition-colors">Research Vault</Link></li>
              <li><Link href="/blog" className="hover:text-[#D7B879] transition-colors">Editorial Journal</Link></li>
              <li><Link href="/faq" className="hover:text-[#D7B879] transition-colors">FAQ Knowledge Base</Link></li>
              <li><Link href="/contact" className="hover:text-[#D7B879] transition-colors">Campus & Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* Hairline Separator */}
        <div className="gold-separator-line my-8" />

        {/* Prototype & Compliance Disclaimer */}
        <div className="bg-[#102338] border border-[#D7B879]/30 rounded-xl p-5 mb-8 flex gap-3.5 items-start">
          <ShieldAlert size={18} className="text-[#D7B879] shrink-0 mt-0.5" />
          <p className="text-xs text-[#8e9eaf] leading-relaxed">
            <strong className="text-[#D7B879]">MANDATORY DEMO & PROTOTYPE NOTICE: </strong>
            {siteConfig.institute.complianceDisclaimer} All exam ranks, faculty dossiers, testimonials, fee figures, and performance records are illustrative conceptual benchmarks created solely for educational website demonstration.
          </p>
        </div>

        {/* Bottom Bar: Legal, Social, and Scroll Top */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#8e9eaf]">
          <div>
            © {new Date().getFullYear()} {siteConfig.institute.name}. All Rights Reserved. Editorial & Cinematic Architecture.
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-[#D7B879] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#D7B879] transition-colors">
              Terms & Conditions
            </Link>
            {siteConfig.socialLinks.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D7B879] transition-colors hidden sm:inline"
                aria-label={`Visit our ${s.name} profile`}
              >
                {s.name.split(' ')[0]}
              </a>
            ))}
          </div>

          <button
            onClick={handleScrollTop}
            className="flex items-center gap-2 text-xs text-[#D7B879] hover:text-[#edd8a8] transition-colors font-display tracking-wider uppercase ml-auto sm:ml-0"
            aria-label="Scroll back to top"
          >
            <span>Ascend to Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
