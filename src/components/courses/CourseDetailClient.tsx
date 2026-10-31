'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Course, FacultyMember } from '@/config/siteConfig';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  ChevronDown 
} from 'lucide-react';
import { PageTransition, SplitTextReveal } from '@/components/animations';
import { AdmissionsModalNext } from '@/components/AdmissionsModalNext';
import { UniversalLeadForm } from '@/components/leads';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface CourseDetailClientProps {
  course: Course;
  assignedFaculty: FacultyMember[];
  relatedCourses: Course[];
}

export const CourseDetailClient: React.FC<CourseDetailClientProps> = ({
  course,
  assignedFaculty,
  relatedCourses,
}) => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageTransition className="py-24 bg-[#081321] text-[#F9F7F2]">
      {/* 1. Unique Course Hero */}
      <section className="relative pt-12 pb-20 border-b border-[#D7B879]/20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image
            src={course.image}
            alt={`${course.title} Classroom Sanctuary & Laboratory`}
            fill
            priority
            sizes="100vw"
            className="object-cover filter blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-[#081321]/90 to-transparent" />
        </div>

        <div className="container-luxury relative z-10">
          {/* Accessible Semantic Breadcrumbs with JSON-LD */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: 'Fellowships', path: '/courses' },
                { name: course.title, path: `/courses/${course.slug}` },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#D7B879]/15 border border-[#D7B879]/50 text-xs font-display text-[#D7B879] tracking-wider uppercase font-semibold">
                  {course.badge}
                </span>
                <span className="text-xs text-[#8e9eaf] font-mono">
                  Code: {course.code}
                </span>
                <span className="text-xs text-[#18B6AE] font-display uppercase tracking-wider">
                  ✦ {course.category}
                </span>
              </div>

              <SplitTextReveal
                tag="h1"
                text={course.title}
                className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#F9F7F2] mb-6 leading-tight"
              />

              <p className="text-base sm:text-lg text-[#d2d9e2] leading-relaxed mb-8 max-w-2xl">
                {course.overview}
              </p>

              {/* Meta stats bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-2xl">
                <div>
                  <div className="text-[10px] text-[#8e9eaf] uppercase font-display tracking-wider">Duration</div>
                  <div className="font-heading text-sm sm:text-base text-[#D7B879] font-semibold mt-0.5">{course.duration}</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#8e9eaf] uppercase font-display tracking-wider">Cohort Limit</div>
                  <div className="font-heading text-sm sm:text-base text-[#18B6AE] font-semibold mt-0.5">{course.batchSize}</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#8e9eaf] uppercase font-display tracking-wider">Instruction Mode</div>
                  <div className="font-heading text-sm sm:text-base text-[#F9F7F2] mt-0.5">{course.mode.split('(')[0]}</div>
                </div>
              </div>
            </div>

            {/* Quick Hero CTA Card */}
            <div className="lg:col-span-4">
              <div className="card-luxury p-7 bg-[#102338]/95 border border-[#D7B879]/40 shadow-2xl">
                <div className="text-[11px] text-[#D7B879] uppercase font-display tracking-widest mb-2 font-semibold">
                  Cohort 2026 Admissions
                </div>
                <div className="font-heading text-2xl text-[#F9F7F2] mb-1">
                  Merit-Screened Intake
                </div>
                <div className="text-xs text-[#8e9eaf] mb-6">
                  {course.feePlaceholder}
                </div>

                <div className="space-y-3 mb-6">
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full btn-luxury btn-luxury-gold py-3.5 text-xs font-semibold justify-center"
                  >
                    <span>Reserve Saturday Demo</span>
                    <ArrowRight size={14} />
                  </button>

                  <Link
                    href="/admissions"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-white/20 bg-white/5 hover:border-[#18B6AE] text-xs font-display tracking-wider text-[#d2d9e2] hover:text-[#18B6AE] transition-all uppercase"
                  >
                    <span>Apply For Fellowship</span>
                  </Link>
                </div>

                <div className="text-[11px] text-[#8e9eaf] flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#18B6AE] shrink-0" />
                  <span>Capped at 35 seats. Selection via SDC-DAT score.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Highlights & Eligibility */}
      <section className="py-20 border-b border-[#D7B879]/20">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Key Pillars */}
            <div className="lg:col-span-7">
              <div className="eyebrow-luxury">FELLOWSHIP DISTINCTIONS</div>
              <h2 className="font-heading text-2xl sm:text-4xl text-[#F9F7F2] mb-6">
                Engineered for Intellectual Superiority
              </h2>
              <div className="space-y-4">
                {course.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-[#102338] border border-white/5">
                    <CheckCircle2 size={18} className="text-[#D7B879] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Eligibility & Prerequisites */}
            <div className="lg:col-span-5">
              <div className="card-luxury p-8 bg-[#102338]">
                <div className="eyebrow-luxury mb-2">CANDIDATE PREREQUISITES</div>
                <h3 className="font-heading text-xl text-[#F9F7F2] mb-4">Admissions Eligibility</h3>
                <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed mb-6">
                  {course.eligibility}
                </p>

                <div className="border-t border-white/10 pt-5">
                  <div className="text-[11px] text-[#18B6AE] uppercase font-display tracking-wider mb-2 font-semibold">
                    Target Scholar Profile
                  </div>
                  <p className="text-xs text-[#8e9eaf] leading-relaxed">
                    {course.targetAudience}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Program Structure Phases */}
      <section className="py-20 border-b border-[#D7B879]/20 bg-[#102338]/40">
        <div className="container-luxury">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow-luxury justify-center">PEDAGOGICAL CALENDAR</div>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#F9F7F2] mb-3">
              Four-Phase Analytical Progression
            </h2>
            <p className="text-xs sm:text-sm text-[#8e9eaf]">
              Each semester deconstructs cognitive challenges systematically from foundational derivations to simulated test warfare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.programStructure.map((stage) => (
              <div key={stage.phase} className="card-luxury p-7 bg-[#102338] border border-[#D7B879]/30">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-display text-sm font-bold text-[#D7B879]">{stage.phase}</span>
                  <span className="text-[10px] text-[#18B6AE] uppercase font-display tracking-wider font-semibold">
                    {stage.hours}
                  </span>
                </div>
                <h3 className="font-heading text-lg text-[#F9F7F2] mb-2">{stage.focus}</h3>
                <div className="text-[11px] text-[#d2d9e2]/80 mt-4 pt-3 border-t border-white/5">
                  <span className="text-[#8e9eaf] block text-[9px] uppercase tracking-wider mb-0.5">Benchmark Deliverable</span>
                  <span className="text-[#F9F7F2] font-semibold">{stage.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Curriculum Chapters & Learning Outcomes */}
      <section className="py-20 border-b border-[#D7B879]/20">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Curriculum Chapters */}
            <div className="lg:col-span-7">
              <div className="eyebrow-luxury">DETAILED SYLLABUS STAGES</div>
              <h2 className="font-heading text-2xl sm:text-4xl text-[#F9F7F2] mb-6">
                Curriculum Stages
              </h2>
              <div className="space-y-4">
                {course.curriculumChapters.map((chapter, idx) => (
                  <div key={idx} className="card-luxury p-6 bg-[#102338] flex justify-between items-center">
                    <div>
                      <div className="font-display text-xs text-[#D7B879] uppercase tracking-wider mb-1">
                        Syllabus Module 0{idx + 1}
                      </div>
                      <h3 className="font-heading text-base sm:text-lg text-[#F9F7F2]">{chapter.title}</h3>
                    </div>
                    <span className="px-3 py-1 rounded bg-[#081321] border border-[#D7B879]/30 text-xs font-display text-[#D7B879] shrink-0 ml-4">
                      {chapter.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Learning Outcomes */}
            <div className="lg:col-span-5">
              <div className="card-luxury p-8 bg-[#102338]">
                <div className="eyebrow-luxury mb-2">SCHOLAR CAPABILITIES</div>
                <h3 className="font-heading text-2xl text-[#F9F7F2] mb-6">Measurable Outcomes</h3>
                <div className="space-y-4">
                  {course.learningOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <Award size={16} className="text-[#18B6AE] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Course Faculty */}
      {assignedFaculty.length > 0 && (
        <section className="py-20 border-b border-[#D7B879]/20 bg-[#102338]/30">
          <div className="container-luxury">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="eyebrow-luxury justify-center">CHAIRS OF INSTRUCTION</div>
              <h2 className="font-heading text-3xl sm:text-4xl text-[#F9F7F2] mb-2">Lead Program Faculty</h2>
              <p className="text-xs sm:text-sm text-[#8e9eaf]">Veteran academicians who conduct every lecture and weekly error audit.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {assignedFaculty.map((faculty) => (
                <div key={faculty.slug} className="card-luxury p-6 bg-[#102338] flex flex-col sm:flex-row gap-6 items-center">
                  <div className="relative w-28 h-28 rounded-xl overflow-hidden border border-[#D7B879]/40 shrink-0">
                    <Image
                      src={faculty.image}
                      alt={`Faculty Chair ${faculty.name} — ${faculty.designation}`}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-[#F9F7F2]">{faculty.name}</h3>
                    <div className="text-xs text-[#D7B879] font-display uppercase tracking-wider mb-2">
                      {faculty.designation}
                    </div>
                    <p className="text-xs text-[#8e9eaf] line-clamp-2 mb-3">{faculty.bio}</p>
                    <Link
                      href={`/faculty/${faculty.slug}`}
                      className="text-xs font-display text-[#18B6AE] hover:underline flex items-center gap-1.5"
                    >
                      <span>View Faculty Profile</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Course FAQs with FAQPage Schema */}
      <section className="py-20 border-b border-[#D7B879]/20">
        <div className="container-luxury max-w-4xl">
          <div className="text-center mb-12">
            <div className="eyebrow-luxury justify-center">FREQUENTLY ENQUIRED</div>
            <h2 className="font-heading text-3xl text-[#F9F7F2]">Program FAQs</h2>
          </div>

          <div className="space-y-4">
            {course.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="card-luxury p-6 bg-[#102338]">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-heading text-base sm:text-lg text-[#F9F7F2]">{faq.question}</h3>
                    <ChevronDown
                      size={18}
                      className={`text-[#D7B879] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed mt-4 pt-4 border-t border-white/5">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Inline Enquiry & Registration Form */}
      <section className="py-20 border-b border-[#D7B879]/20 bg-[#102338]/60">
        <div className="container-luxury max-w-3xl">
          <UniversalLeadForm
            formType="course_enquiry"
            defaultCourseId={course.title}
            title={`Academic Enquiry — ${course.code}`}
            subtitle={`Receive the comprehensive 24-page syllabus dossier and schedule an admissions evaluation for ${course.title}.`}
            className="shadow-2xl"
          />
        </div>
      </section>

      {/* 8. Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-20">
          <div className="container-luxury">
            <div className="text-center mb-12">
              <div className="eyebrow-luxury justify-center">EXPAND YOUR INTELLECTUAL HORIZON</div>
              <h2 className="font-heading text-3xl text-[#F9F7F2]">Related Academic Fellowships</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedCourses.map((rel) => (
                <div key={rel.slug} className="card-luxury p-7 bg-[#102338] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-[#18B6AE] uppercase font-display tracking-widest block mb-2 font-semibold">
                      {rel.category}
                    </span>
                    <h3 className="font-heading text-xl text-[#F9F7F2] mb-2">{rel.title}</h3>
                    <p className="text-xs text-[#8e9eaf] line-clamp-2 mb-4">{rel.overview}</p>
                  </div>
                  <Link
                    href={`/courses/${rel.slug}`}
                    className="btn-luxury btn-luxury-gold py-2.5 px-5 text-[11px] self-start"
                  >
                    <span>Inspect Fellowship</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. Sticky Conversion CTA Bar */}
      {showStickyCta && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#081321]/95 backdrop-blur-xl border-t border-[#D7B879]/30 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] px-4 sm:px-6 shadow-2xl transition-all duration-300">
          <div className="container-luxury flex flex-col sm:flex-row justify-between items-center gap-2.5 sm:gap-3">
            <div className="hidden sm:block">
              <div className="font-heading text-sm text-[#F9F7F2] font-semibold">{course.title}</div>
              <div className="text-[11px] text-[#D7B879]">{course.code} • Capped at 35 Seats</div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="btn-luxury btn-luxury-gold py-2.5 px-4 sm:px-6 text-xs flex-1 sm:flex-none justify-center min-h-[44px]"
              >
                <span>Reserve Saturday Demo</span>
                <ArrowRight size={12} />
              </button>

              <Link
                href="/admissions"
                className="px-4 sm:px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:border-[#18B6AE] text-xs font-display text-[#d2d9e2] hover:text-[#18B6AE] transition-all flex-1 sm:flex-none text-center uppercase min-h-[44px] flex items-center justify-center font-semibold"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}

      <AdmissionsModalNext
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        defaultCourseId={course.id}
      />
    </PageTransition>
  );
};
