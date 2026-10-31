'use client';

import Image from 'next/image';

interface CinematicImageStackProps {
  images: { image: string; title: string }[];
  activeIndex: number;
}

/** Keep each image mounted so changing chapters can reveal the next photograph. */
export function CinematicImageStack({ images, activeIndex }: CinematicImageStackProps) {
  return (
    <div className="cinematic-image-stack">
      {images.map((item, index) => (
        <div
          key={item.image}
          className={`cinematic-image-stack__slide ${index === activeIndex ? 'is-active' : ''}`}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover brightness-[0.8] contrast-[1.1]"
          />
        </div>
      ))}
    </div>
  );
}
