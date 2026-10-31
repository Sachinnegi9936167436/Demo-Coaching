import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FileText, Scale, ShieldCheck, ArrowRight } from 'lucide-react';
import { PageTransition, SplitTextReveal } from '@/components/animations';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Enrolment & Academic Charter',
  description: 'Review the terms of fellowship enrollment, fee structure policies, batch protocols, and academic honor code at Sachin\'s Demo Coaching.',
  path: '/terms',
  tags: ['Terms of Service', 'Enrollment Terms', 'Academic Charter', 'Refund Policy'],
});

export default function TermsPage() {
  return (
    <PageTransition className="py-28 bg-[#081321] text-[#F9F7F2]">
      <div className="container-luxury max-w-4xl">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[{ name: 'Terms of Enrolment', path: '/terms' }]} />
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="eyebrow-luxury">INSTITUTIONAL CODE & CHARTER</div>
          <SplitTextReveal
            tag="h1"
            text="Terms of Enrolment & Academic Charter"
            className="font-heading text-3xl sm:text-5xl text-[#F9F7F2] mb-4 leading-tight"
          />
          <div className="text-xs text-[#8e9eaf] font-mono">
            Last Revised: October 2026 • {siteConfig.institute.name}
          </div>
        </div>

        {/* Notice Card */}
        <div className="p-6 rounded-xl bg-[#102338] border border-[#D7B879]/30 mb-10 flex gap-4 items-start">
          <Scale size={22} className="text-[#D7B879] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed">
            By accessing this platform, reserving a masterclass seat, taking the SDC-DAT screening, or completing fellowship enrollment at {siteConfig.institute.name}, you agree to abide by the academic standards and institutional rules outlined below.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-xs sm:text-sm text-[#d2d9e2] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl text-[#F9F7F2]">1. Fellowship Admissions & Merit Screening</h2>
            <p>
              Admission to all fellowships is strictly merit-based following evaluation via the SDC Diagnostic Aptitude Test (SDC-DAT) and an interview with the Academic Dean. The institute reserves the sovereign right to determine batch placement based on cognitive readiness.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl text-[#F9F7F2]">2. Strict Batch Ceiling & Attendance Discipline</h2>
            <p>
              To maintain our pedagogical commitment to personal accountability, cohorts are strictly capped at 35 scholars. Fellows are required to maintain a minimum of 85% attendance across all physical and live digital sessions. Failure to attend mandatory weekly 1-on-1 diagnostic error audits will result in academic probation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl text-[#F9F7F2]">3. Intellectual Property Protection</h2>
            <p>
              All curriculum dossiers, SDC Problem Archetype Archives, video recordings, first-principles derivation blueprints, and test analytics are the exclusive intellectual property of {siteConfig.institute.name}. Unauthorized distribution, sharing, or commercial copying is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl text-[#F9F7F2]">4. Code of Scholar Conduct</h2>
            <p>
              The Pinnacle Sanctuary is an environment of mutual respect, disciplined curiosity, and academic integrity. Dishonesty during simulated examinations, disruptive classroom behavior, or harassment will result in immediate expulsion without refund.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl text-[#F9F7F2]">5. Demonstration Prototype Notice</h2>
            <p className="p-4 bg-[#081321] rounded-lg border border-white/5 text-[#8e9eaf]">
              {siteConfig.institute.complianceDisclaimer}
            </p>
          </section>
        </div>

        {/* Footer Link */}
        <div className="mt-14 pt-8 border-t border-white/10 flex justify-between items-center text-xs">
          <Link href="/privacy-policy" className="text-[#D7B879] hover:underline flex items-center gap-1">
            <span>Read Privacy Policy</span>
            <ArrowRight size={12} />
          </Link>
          <Link href="/" className="text-[#8e9eaf] hover:text-[#F9F7F2]">
            Return to Homepage
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}
