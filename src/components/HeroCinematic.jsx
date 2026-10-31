import React, { useEffect, useRef } from 'react';
import { siteConfig } from '../config/siteConfig';
import { ArrowDown, Sparkles, Shield, ChevronRight, Award, Compass } from 'lucide-react';

export const HeroCinematic = ({ onOpenModal, setCurrentView }) => {
  const canvasRef = useRef(null);

  // Subtle ambient golden starfield/particle background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 48 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      velocity: Math.random() * 0.25 + 0.08,
      angle: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep radial glow in center
      const gradient = ctx.createRadialGradient(
        width / 2, height * 0.45, 20,
        width / 2, height * 0.45, width * 0.6
      );
      gradient.addColorStop(0, 'rgba(201, 168, 76, 0.08)');
      gradient.addColorStop(0.5, 'rgba(184, 115, 51, 0.03)');
      gradient.addColorStop(1, 'rgba(8, 8, 8, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render floating amber dust
      particles.forEach((p) => {
        p.y -= p.velocity;
        p.x += Math.sin(p.angle) * 0.2;
        p.angle += 0.01;
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 208, 128, ${p.alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="hero-cinematic" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '120px 24px 80px', overflow: 'hidden' }}>
      {/* Ambient Canvas */}
      <canvas 
        ref={canvasRef} 
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
      />

      {/* Hero Background Grid Accents */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 35%, rgba(201,168,76,0.12) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 2 }} />

      {/* Main Content Stage */}
      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '980px' }}>
        
        {/* Editorial Eyebrow Tag */}
        <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '20px' }}>
          <span>PROLOGUE — THE SANCTUARY OF INTELLECT</span>
        </div>

        {/* Master Heading */}
        <h1 style={{ 
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(38px, 6.5vw, 76px)',
          lineHeight: '1.08',
          marginBottom: '24px',
          fontWeight: 400,
          color: 'var(--ivory)',
          letterSpacing: '-0.02em'
        }}>
          Where Rigorous Pedagogy Transcends <span style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Ordinary Tutelage</span>.
        </h1>

        {/* Subtitle / Positioning */}
        <p style={{ 
          fontSize: 'clamp(15px, 2vw, 19px)', 
          color: 'var(--ivory-dim)', 
          maxWidth: '720px', 
          margin: '0 auto 36px',
          lineHeight: '1.75',
          fontFamily: 'var(--font-sans)',
          fontWeight: 300
        }}>
          {siteConfig.institute.name} is an elite academic atelier engineered for aspirants targeting top ranks in JEE (Advanced), NEET-UG, and Public Governance. Micro-cohorts capped strictly at 35 scholars.
        </p>

        {/* Admissions Status Bar */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '16px',
          padding: '8px 22px',
          background: 'rgba(20, 16, 12, 0.85)',
          border: '1px solid rgba(201, 168, 76, 0.3)',
          borderRadius: '40px',
          marginBottom: '44px',
          fontSize: '12px',
          backdropFilter: 'blur(10px)'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold-light)' }}>
            <Sparkles size={14} color="var(--gold)" />
            <span>Admissions Cycle: <strong>{siteConfig.admissions.activeCycle}</strong></span>
          </span>
          <span style={{ width: '1px', height: '14px', background: 'rgba(201, 168, 76, 0.4)' }} />
          <span style={{ color: 'var(--ivory-dim)' }}>
            Batch Ceiling: <strong>35 Scholars / Cohort</strong>
          </span>
        </div>

        {/* High-Converting CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', justifyContent: 'center', alignItems: 'center' }}>
          <button 
            className="btn btn--gold btn--large"
            onClick={() => onOpenModal('demo')}
          >
            <span>{siteConfig.ctas.bookDemoClass}</span>
            <ChevronRight size={15} />
          </button>

          <button 
            className="btn btn--outline btn--large"
            onClick={() => { setCurrentView('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span>{siteConfig.ctas.viewAllCourses}</span>
          </button>
        </div>

        {/* Three Pillar Metric Tickers */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '24px', 
          marginTop: '70px',
          paddingTop: '36px',
          borderTop: '1px solid rgba(201, 168, 76, 0.2)'
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--gold)', fontWeight: 600 }}>1 : 7</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>
              Mentor to Scholar Ratio [Sample]
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--gold)', fontWeight: 600 }}>35 Max</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>
              Strict Batch Size Ceiling
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--gold)', fontWeight: 600 }}>100%</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>
              First-Principles Socratic Method
            </div>
          </div>
        </div>

      </div>

      {/* Downward Scroll Cue */}
      <div 
        style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 10, cursor: 'pointer', opacity: 0.75 }}
        onClick={() => {
          const target = document.getElementById('chapter-pedagogy');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '10px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)' }}>
          Explore The Craft
        </span>
        <ArrowDown size={14} color="var(--gold)" style={{ animation: 'bounce 2s infinite' }} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(6px); }
          60% { transform: translateY(3px); }
        }
      `}</style>
    </section>
  );
};
