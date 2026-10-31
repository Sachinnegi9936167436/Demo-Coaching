'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FacultyMember, siteConfig } from '@/config/siteConfig';
import { ArrowRight, Clock } from 'lucide-react';
import { PageTransition, SplitTextReveal, FadeInOnScroll } from '@/components/animations';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface FacultyListClientProps {
  facultyList: FacultyMember[];
}

export const FacultyListClient: React.FC<FacultyListClientProps> = ({ facultyList }) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');

  const disciplines = ['All', 'Pure Mathematics', 'Theoretical Physics', 'Life Sciences', 'Public Policy'];

  const filteredFaculty = selectedDiscipline === 'All'
    ? facultyList
    : facultyList.filter((f) => 
        f.designation.toLowerCase().includes(selectedDiscipline.toLowerCase()) ||
        f.specialization.toLowerCase().includes(selectedDiscipline.toLowerCase())
      );

  return (
    <PageTransition className="py-28 bg-[#081321] text-[#F9F7F2]">
      <div className="container-luxury">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs items={[{ name: 'Faculty Directory', path: '/faculty' }]} />
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="eyebrow-luxury justify-center">CHAIRS OF ACADEMIC INSTRUCTION</div>
          <SplitTextReveal
            tag="h1"
            text="The Master Mentorship Dossier"
            className="font-heading text-4xl sm:text-6xl text-[#F9F7F2] mb-4 leading-tight"
          />
          <FadeInOnScroll delay={0.15}>
            <p className="text-sm sm:text-base text-[#d2d9e2] leading-relaxed">
              At {siteConfig.institute.name}, lectures are never outsourced to junior associates. Every session, diagnostic clinic, and error audit is conducted by veteran educators with decades of research and pedagogical mastery.
            </p>
          </FadeInOnScroll>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-14" role="tablist" aria-label="Faculty Disciplines">
          {disciplines.map((d) => (
            <button
              key={d}
              role="tab"
              aria-selected={selectedDiscipline === d}
              onClick={() => setSelectedDiscipline(d)}
              className={`px-5 py-2.5 rounded-full text-xs font-display tracking-wider uppercase transition-all ${
                selectedDiscipline === d
                  ? 'border border-[#D7B879] bg-[#D7B879]/20 text-[#D7B879]'
                  : 'border border-white/10 bg-[#102338] text-[#8e9eaf] hover:border-[#D7B879]/40 hover:text-[#F9F7F2]'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredFaculty.map((faculty) => (
            <article key={faculty.slug} className="card-luxury p-8 bg-[#102338] flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
                  <div className="relative w-32 h-36 rounded-xl overflow-hidden border border-[#D7B879]/40 shrink-0 shadow-lg">
                    <Image
                      src={faculty.image}
                      alt={`Faculty Chair ${faculty.name} — ${faculty.designation}`}
                      fill
                      sizes="128px"
                      className="object-cover filter contrast-[1.05]"
                    />
                  </div>

                  <div>
                    <span className="text-[10px] text-[#18B6AE] uppercase font-display tracking-widest block mb-1 font-semibold">
                      Senior Chair
                    </span>
                    <h2 className="font-heading text-2xl text-[#F9F7F2] mb-1">
                      <Link href={`/faculty/${faculty.slug}`} className="hover:text-[#D7B879] transition-colors">
                        {faculty.name}
                      </Link>
                    </h2>
                    <div className="text-xs text-[#D7B879] font-display uppercase tracking-wider mb-2">
                      {faculty.designation}
                    </div>
                    <div className="text-[11px] text-[#8e9eaf] font-mono leading-tight">
                      {faculty.credentials}
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 mb-4">
                  <div className="text-[10px] text-[#8e9eaf] uppercase font-display tracking-wider mb-1">
                    Specialization Focus
                  </div>
                  <div className="text-xs text-[#18B6AE] font-semibold">
                    {faculty.specialization}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#d2d9e2] leading-relaxed mb-6">
                  {faculty.bio}
                </p>

                <div className="p-3.5 rounded-lg bg-[#081321] border border-white/5 mb-6 text-xs text-[#8e9eaf] flex items-center gap-2">
                  <Clock size={14} className="text-[#D7B879] shrink-0" />
                  <span>{faculty.officeHours}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#D7B879]/20">
                <span className="text-[11px] text-[#8e9eaf]">
                  {faculty.coursesTaught.length} Fellowships Mentored
                </span>
                <Link
                  href={`/faculty/${faculty.slug}`}
                  className="btn-luxury btn-luxury-gold py-2.5 px-5 text-xs font-semibold"
                >
                  <span>Read Full Dossier</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mentorship Ratio Banner */}
        <section className="card-luxury p-10 bg-gradient-to-r from-[#102338] via-[#081321] to-[#102338] border border-[#D7B879]/30 text-center max-w-4xl mx-auto">
          <div className="font-display text-xs text-[#D7B879] tracking-widest uppercase mb-2">
            The Constitutional Ratio
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-[#F9F7F2] mb-3">
            1:7 Scholar Mentorship Crucible
          </h2>
          <p className="text-xs sm:text-sm text-[#d2d9e2] max-w-xl mx-auto mb-6">
            Unlike commercial institutes with 500-student batches where you are a barcode, every SDC scholar receives personalized weekly audits directly from senior faculty.
          </p>
          <Link
            href="/free-counselling"
            className="btn-luxury btn-luxury-gold py-3 px-6 text-xs font-semibold inline-flex"
          >
            <span>Book Private Diagnostic Session</span>
            <ArrowRight size={13} />
          </Link>
        </section>
      </div>
    </PageTransition>
  );
};
