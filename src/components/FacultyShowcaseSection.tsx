'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, GraduationCap } from 'lucide-react';

import { facultyPlaceholders } from '@/data/faculty';

const facultyRoster = facultyPlaceholders.map((f) => ({
  name: f.name.replace(/\[.*?\]/g, '').trim(),
  subject: f.specialization,
  credentials: f.credentials.replace(/\[.*?\]/g, '').trim(),
  experience: f.experience,
  bio: f.bio,
  portrait: f.image,
  slug: f.slug,
}));

export const FacultyShowcaseSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#081321] text-[#F9F7F2] border-t border-[#D7B879]/20">
      <div className="container-luxury">
        
        {/* Header: Exactly as requested */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow-luxury justify-center mb-3">
            CHAPTER VII — THE MENTORSHIP GUILD
          </div>
          <h2 className="section-clamp-heading text-[#F9F7F2] font-normal">
            LEARN FROM THOSE <span className="italic text-[#D7B879] block">WHO INSPIRE EXCELLENCE.</span>
          </h2>
          <p className="text-sm text-[#d2d9e2] max-w-xl mx-auto mt-3">
            Every faculty member is an established authority in their discipline, dedicated exclusively to micro-cohort instruction.
          </p>
        </div>

        {/* 4-Card Faculty Grid with Hover Zoom & Refined Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {facultyRoster.map((f) => (
            <div 
              key={f.slug}
              className="group bg-[#102338] border border-[#D7B879]/20 rounded-xl overflow-hidden hover:border-[#D7B879]/60 transition-all duration-500 shadow-xl flex flex-col"
            >
              {/* Portrait with Image Zoom on Hover */}
              <div className="relative h-72 w-full overflow-hidden bg-[#081321]">
                <Image
                  src={f.portrait}
                  alt={f.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top filter brightness-[0.82] contrast-[1.08] group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102338] via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-[10px] uppercase font-display text-[#18B6AE] tracking-widest block font-semibold">
                    {f.experience}
                  </span>
                  <div className="text-xs text-[#D7B879] font-medium">{f.subject}</div>
                </div>
              </div>

              {/* Information Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl text-[#F9F7F2] mb-1 group-hover:text-[#D7B879] transition-colors">
                    {f.name}
                  </h3>
                  <div className="text-[11px] text-[#8e9eaf] italic mb-3">
                    {f.credentials}
                  </div>
                  <p className="text-xs text-[#d2d9e2] leading-relaxed line-clamp-3 mb-4">
                    {f.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex justify-between items-center text-xs">
                  <span className="text-[10px] text-[#8e9eaf] uppercase tracking-wider">[Verified Faculty]</span>
                  <Link
                    href="/pedagogy"
                    className="inline-flex items-center gap-1 text-[#D7B879] hover:text-[#edd8a8] font-medium"
                  >
                    <span>Full Profile</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prototype Disclaimer */}
        <div className="text-center text-xs text-[#8e9eaf]">
          ✦ Notice: Faculty dossiers and credentials displayed above represent sample leadership profiles for demonstration evaluation.
        </div>

      </div>
    </section>
  );
};
