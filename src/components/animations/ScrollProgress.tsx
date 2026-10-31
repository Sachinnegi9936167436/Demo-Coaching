'use client';

import { useEffect, useRef } from 'react';

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
      frame = 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[99999] pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-[#D7B879] via-[#edd8a8] to-[#18B6AE] origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
