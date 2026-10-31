'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ParallaxImage } from '@/components/animations/ParallaxImage';
import { PINNED_SCENE_QUERY } from '@/lib/animations/gsapUtils';

interface GalleryItem {
  num: string;
  title: string;
  copy: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    num: '01',
    title: 'Smart Socratic Classrooms',
    copy: 'Acoustically tuned lecture atriums with 4K digital projection, interactive derivation glassboards, and seating capped at 35 scholars.',
    image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '02',
    title: 'Digital Research Vault',
    copy: '24/7 high-speed cloud access to 4,500+ solved conceptual challenge archetypes, indexed by cognitive difficulty slabs.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '03',
    title: 'Expert Mentorship Chambers',
    copy: 'Private one-on-one consultation suites where academic deans conduct diagnostic error audits with each aspirant every week.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '04',
    title: 'Silent Library Sanctuary',
    copy: 'Dedicated individual study carrels flanked by national science archives, reference treatises, and ergonomic reading light.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '05',
    title: 'Interactive Problem Labs',
    copy: 'Peer-driven collaborative problem solving where scholars present divergent solution pathways on shared seminar displays.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    num: '06',
    title: 'Vibrant Scholar Community',
    copy: 'A curated fraternity of high-achieving peers inspiring daily discipline, mutual accountability, and shared triumph.',
    image: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=1200&q=80',
  },
];

export function HorizontalGallerySection() {
  const targetSectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add(PINNED_SCENE_QUERY, () => {
      const track = trackRef.current;
      const section = targetSectionRef.current;
      if (!track || !section) return;
      const distance = () => Math.max(0, track.scrollWidth - section.clientWidth);
      const travel = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
      gsap.fromTo(progressRef.current, { scaleX: 0 }, {
        scaleX: 1, ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: () => travel.scrollTrigger!.start,
          end: () => travel.scrollTrigger!.end,
          scrub: 1,
        },
      });
      // Each photograph travels against the track for a second plane of depth.
      gsap.utils.toArray<HTMLElement>('.gallery-panel').forEach((panel) => {
        gsap.fromTo(panel.querySelector('.gallery-image-plane'), { xPercent: -8 }, {
          xPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: panel,
            containerAnimation: travel,
            start: 'left right', end: 'right left',
            scrub: true,
          },
        });
      });
    }, targetSectionRef);
    return () => media.revert();
  }, []);

  return (
    <section ref={targetSectionRef} className="campus-gallery bg-[#102338] text-[#F9F7F2] border-t border-[#D7B879]/20 overflow-hidden">
      <div className="desktop-scroll-scene gallery-desktop min-h-screen flex-col justify-center">
        <div className="container-luxury flex items-end justify-between gap-12 mb-10">
          <div className="max-w-3xl">
            <div className="eyebrow-luxury mb-3">CHAPTER VI &mdash; CAMPUS INFRASTRUCTURE</div>
            <h2 className="section-clamp-heading text-[#F9F7F2] font-normal">
              A space for <span className="italic text-[#D7B879]">possibility.</span>
            </h2>
          </div>
          <span className="text-[10px] text-[#d2d9e2] uppercase tracking-[0.22em] shrink-0 pb-2">Keep scrolling to explore &rarr;</span>
        </div>
        <div ref={trackRef} className="gallery-track flex gap-[3vw] px-[8vw]">
          {galleryItems.map((item) => (
            <figure key={item.num} className="gallery-panel relative shrink-0 overflow-hidden border border-[#D7B879]/25 bg-[#081321]">
              <div className="gallery-image-plane absolute inset-y-0 -inset-x-[12%]">
                <Image src={item.image} alt={item.title} fill sizes="75vw" className="object-cover brightness-[0.75]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#040b13] via-transparent to-[#081321]/15" />
              <span className="gallery-numeral absolute top-6 left-8 font-display text-[#F9F7F2]/75">{item.num}</span>
              <figcaption className="absolute bottom-0 inset-x-0 p-8 lg:p-10">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#D7B879] block mb-3">The sanctuary / {item.num}</span>
                <h3 className="font-heading text-3xl lg:text-4xl mb-3">{item.title}</h3>
                <p className="max-w-lg text-sm text-[#d2d9e2] leading-relaxed">{item.copy}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="container-luxury mt-8 flex items-center gap-6" aria-hidden="true">
          <span className="text-[10px] text-[#D7B879] tracking-widest">01</span>
          <div className="h-px grow bg-white/10"><div ref={progressRef} className="h-full bg-[#D7B879] origin-left" /></div>
          <span className="text-[10px] text-[#D7B879] tracking-widest">06</span>
        </div>
      </div>
      <div className="static-scroll-scene py-20">
        <div className="container-luxury">
          <div className="eyebrow-luxury mb-3">CHAPTER VI &mdash; CAMPUS INFRASTRUCTURE</div>
          <h2 className="section-clamp-heading mb-10">A space for <span className="italic text-[#D7B879]">possibility.</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {galleryItems.map((item) => (
              <figure key={item.num} className="overflow-hidden border border-[#D7B879]/20 bg-[#081321]">
                <ParallaxImage src={item.image} alt={item.title} sizes="(max-width: 640px) 100vw, 50vw" className="h-64" imageClassName="brightness-[0.8]" />
                <figcaption className="p-6">
                  <span className="text-[10px] text-[#D7B879] tracking-[0.2em]">{item.num} / THE SANCTUARY</span>
                  <h3 className="font-heading text-2xl my-3">{item.title}</h3>
                  <p className="text-sm text-[#d2d9e2] leading-relaxed">{item.copy}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
