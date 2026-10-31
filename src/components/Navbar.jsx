import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export const Navbar = ({ onOpenDrawer, onOpenModal, currentView, setCurrentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Compliance Notice Bar */}
      <aside className="demo-disclaimer-banner" aria-label="Demo Compliance Notice">
        <span className="demo-disclaimer-badge">DEMO PROTOTYPE</span>
        <span>{siteConfig.institute.complianceDisclaimer}</span>
      </aside>

      {/* Main Luxury Header */}
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        {/* Left: Menu Drawer Trigger */}
        <button 
          className="navbar__menu-trigger" 
          onClick={onOpenDrawer}
          id="openMenu"
          aria-label="Open Navigation Menu"
        >
          <div className="navbar__menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="navbar__menu-text">Index / Menu</span>
        </button>

        {/* Center: Brand Crest */}
        <div 
          className="navbar__brand" 
          onClick={() => { setCurrentView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          role="button"
          tabIndex={0}
          aria-label={`${siteConfig.institute.name} Home`}
        >
          <span className="navbar__brand-crest">{siteConfig.institute.name}</span>
          <span className="navbar__brand-sub">Academic Sanctuary • Est. {siteConfig.institute.foundedYear}</span>
        </div>

        {/* Right: Quick Action CTAs */}
        <div className="navbar__actions">
          <a 
            href={`tel:${siteConfig.contact.phoneTel}`} 
            className="navbar__phone-link btn-desktop-only"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--gold)' }}
          >
            <Phone size={14} />
            <span>{siteConfig.contact.phoneDisplay.split(' ')[0]}</span>
          </a>

          <button 
            className="btn btn--outline btn--small btn-desktop-only"
            onClick={() => onOpenModal('counselling')}
          >
            <Calendar size={13} />
            <span>1-on-1 Counselling</span>
          </button>

          <button 
            className="btn btn--gold btn--small"
            onClick={() => onOpenModal('demo')}
          >
            <span>Reserve Demo</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </header>
    </>
  );
};
