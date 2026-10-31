import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ArrowRight, Quote, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { PageTransition, SplitTextReveal, FadeInOnScroll } from '@/components/animations';

export const metadata: Metadata = buildMetadata({
  title: 'Director\'s Message — An Educational Manifesto',
  description: 'Read the founding manifesto from Director Sachin on why true educational excellence requires cognitive rigor, ethical mentorship, and small intellectual batches.',
  path: '/about/director-message',
  tags: ['Director Message', 'Educational Philosophy', 'Founder Creed', 'Academic Excellence'],
});

export default function DirectorMessagePage() {
  const { directorMessage } = siteConfig;

  return (
    <PageTransition className="py-28 bg-[#081321] text-[#F9F7F2]">
      <div className="container-luxury">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { name: 'About Institute', path: '/about' },
              { name: "Director's Message", path: '/about/director-message' },
            ]}
          />
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="eyebrow-luxury">LEADERSHIP ADDRESS • COHORT 2026</div>
            <SplitTextReveal
              tag="h1"
              text="Lighting the Intellectual Fire"
              className="font-heading text-4xl sm:text-6xl text-[#F9F7F2] mb-6 leading-tight"
            />
            <p className="font-serif text-xl sm:text-2xl text-[#D7B879] italic leading-relaxed mb-6">
              "{directorMessage.quote}"
            </p>
            <div className="text-sm text-[#8e9eaf]">
              <strong className="text-[#F9F7F2] block text-base font-heading">{directorMessage.name}</strong>
              <span>{directorMessage.title}</span>
              <span className="block text-xs mt-0.5 text-[#18B6AE]">{directorMessage.credentials}</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-[#D7B879]/40 shadow-2xl">
              <Image
                src={directorMessage.portrait}
                alt={directorMessage.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover filter contrast-[1.1] brightness-[0.9]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 bg-[#081321]/90 border border-[#D7B879]/40 rounded text-[10px] uppercase font-display text-[#D7B879] tracking-wider">
                  Academic Dean Dossier
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* The Letter Body */}
        <div className="max-w-4xl mx-auto card-luxury p-8 sm:p-14 bg-[#102338]/90 border border-[#D7B879]/30 mb-20">
          <div className="border-b border-[#D7B879]/20 pb-6 mb-8 flex items-center justify-between">
            <div className="font-display text-xs text-[#D7B879] uppercase tracking-widest">
              From the Office of the Academic Dean
            </div>
            <div className="text-xs text-[#8e9eaf]">
              Ref: SDC/DIR/2026/01
            </div>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-[#d2d9e2] leading-relaxed font-sans">
            {directorMessage.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Dean's Signature Block */}
          <div className="mt-12 pt-8 border-t border-[#D7B879]/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <div className="font-serif italic text-2xl text-[#D7B879] tracking-wider">
                Dr. A. R. Sharma
              </div>
              <div className="text-xs text-[#8e9eaf] mt-1">
                Academic Dean, Sachin's Demo Coaching
              </div>
            </div>
            <div className="p-3 bg-[#081321] rounded-lg border border-white/10 text-center">
              <div className="text-[10px] text-[#18B6AE] uppercase font-display tracking-widest">Dean's Seal</div>
              <div className="text-xs text-[#d2d9e2]">Autonomous Academic Council</div>
            </div>
          </div>
        </div>

        {/* Guiding Tenets */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <div className="eyebrow-luxury justify-center">UNCOMPROMISING STANDARDS</div>
            <h2 className="font-heading text-3xl text-[#F9F7F2]">Our 4 Guiding Tenets</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {directorMessage.guidingTenets.map((tenet, idx) => (
              <div key={tenet.title} className="card-luxury p-6 bg-[#102338]">
                <div className="font-display text-xs text-[#D7B879] font-semibold mb-2">
                  Tenet 0{idx + 1}
                </div>
                <h3 className="font-heading text-lg text-[#F9F7F2] mb-1">{tenet.title}</h3>
                <p className="text-xs text-[#d2d9e2] leading-relaxed">{tenet.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dean Dialogue CTA */}
        <div className="text-center bg-gradient-to-r from-[#102338] via-[#081321] to-[#102338] border border-[#D7B879]/30 rounded-2xl p-10 max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#F9F7F2] mb-3">
            Schedule a Private Consultation With Dean Sharma
          </h2>
          <p className="text-xs sm:text-sm text-[#d2d9e2] max-w-lg mx-auto mb-6">
            Every candidate is encouraged to complete a 1-on-1 diagnostic evaluation before completing enrollment.
          </p>
          <Link
            href="/free-counselling"
            className="btn-luxury btn-luxury-gold py-3.5 px-8 text-xs font-semibold"
          >
            <span>Book Private Dean Consultation</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
