import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ShieldCheck, Lock, Eye, FileText, ArrowRight } from 'lucide-react';
import { PageTransition, SplitTextReveal } from '@/components/animations';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy & Candidate Data Protection',
  description: 'How Sachin\'s Demo Coaching protects student and parent confidentiality, diagnostic assessment scores, and personal data.',
  path: '/privacy-policy',
  tags: ['Privacy Policy', 'Data Protection', 'Confidentiality'],
});

export default function PrivacyPolicyPage() {
  return (
    <PageTransition className="py-28 bg-[#081321] text-[#F9F7F2]">
      <div className="container-luxury max-w-4xl">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[{ name: 'Privacy Policy', path: '/privacy-policy' }]} />
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="eyebrow-luxury">LEGAL & REGULATORY DISCLOSURE</div>
          <SplitTextReveal
            tag="h1"
            text="Privacy & Candidate Data Protection Policy"
            className="font-heading text-3xl sm:text-5xl text-[#F9F7F2] mb-4 leading-tight"
          />
          <div className="text-xs text-[#8e9eaf] font-mono">
            Effective Date: October 2026 • Version 2.1 • {siteConfig.institute.name}
          </div>
        </div>

        {/* Notice Card */}
        <div className="p-6 rounded-xl bg-[#102338] border border-[#D7B879]/30 mb-10 flex gap-4 items-start">
          <ShieldCheck size={22} className="text-[#D7B879] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed">
            {siteConfig.institute.name} treats candidate diagnostic logs, test marks, and academic assessments with the strict confidentiality expected of a premier educational sanctuary. We never monetize, rent, or lease candidate data.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-xs sm:text-sm text-[#d2d9e2] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl text-[#F9F7F2]">1. Information We Collect</h2>
            <p>
              When you register for a demonstration class, submit an admission inquiry, take the SDC Diagnostic Aptitude Test (SDC-DAT), or consult with our Academic Deans, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#8e9eaf]">
              <li><strong>Contact Vectors:</strong> Full name, verified mobile phone number, email address, and city of residence.</li>
              <li><strong>Academic Metrics:</strong> Current school, grade/class standing, target examination year, and past academic scores.</li>
              <li><strong>Diagnostic Telemetry:</strong> Question attempt time stamps, error classifications, and aptitude percentiles recorded during mock tests.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl text-[#F9F7F2]">2. Purpose and Utilization</h2>
            <p>
              Your data is collected strictly to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#8e9eaf]">
              <li>Generate individualized cognitive error-taxonomy profiles for faculty consultation.</li>
              <li>Administer admissions screening, batch allocation, and merit-based scholarship waiver determinations.</li>
              <li>Transmit crucial examination dates, Saturday seminar schedule updates, and syllabus dossiers via SMS, WhatsApp, and email.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl text-[#F9F7F2]">3. Zero Commercial Data Sharing</h2>
            <p>
              We maintain an uncompromising institutional barrier against commercial marketing brokers. Your phone number and email will never be supplied to third-party loan agencies, external education aggregators, or unauthorized telemarketers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl text-[#F9F7F2]">4. Data Retention and Erasure</h2>
            <p>
              Candidates not accepted into a cohort may request complete erasure of their diagnostic test logs from our secure servers by emailing the Dean's Office at <code>{siteConfig.contact.deanOfficeEmail}</code>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-xl sm:text-2xl text-[#F9F7F2]">5. Prototype Platform Disclaimer</h2>
            <p className="p-4 bg-[#081321] rounded-lg border border-white/5 text-[#8e9eaf]">
              {siteConfig.institute.complianceDisclaimer}
            </p>
          </section>
        </div>

        {/* Footer Link */}
        <div className="mt-14 pt-8 border-t border-white/10 flex justify-between items-center text-xs">
          <Link href="/terms" className="text-[#D7B879] hover:underline flex items-center gap-1">
            <span>Review Terms of Service</span>
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
