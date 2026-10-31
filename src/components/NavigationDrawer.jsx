import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { X, ArrowRight, Phone, Mail, MapPin, MessageSquare, ExternalLink } from 'lucide-react';

export const NavigationDrawer = ({ isOpen, onClose, currentView, setCurrentView, onOpenModal }) => {
  const navItems = [
    { key: 'home', label: 'The Sanctuary (Home)', numeral: 'I', desc: 'Cinematic Overview & Admissions Gate' },
    { key: 'courses', label: 'Programs & Curriculum', numeral: 'II', desc: 'JEE, NEET, UPSC & High-Order Quant' },
    { key: 'pedagogy', label: 'The Pedagogy ("The Craft")', numeral: 'III', desc: 'Socratic Method & Error Taxonomy' },
    { key: 'admissions', label: 'Admissions & Scholarships', numeral: 'IV', desc: 'Cohort 2026 Screening & SDC-DAT' },
    { key: 'results', label: 'Hall of Fame (Benchmarks)', numeral: 'V', desc: 'Illustrative Achiever Transformations' },
    { key: 'contact', label: 'Campus & Consultations', numeral: 'VI', desc: 'Pinnacle Tower & Direct Admissions Desk' },
  ];

  const handleNavClick = (key) => {
    setCurrentView(key);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`drawer-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <aside 
        className="drawer-panel" 
        onClick={(e) => e.stopPropagation()}
        aria-label="Site Navigation Drawer"
      >
        {/* Drawer Header */}
        <div className="drawer-top">
          <div>
            <div style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '13px', letterSpacing: '0.24em' }}>
              {siteConfig.institute.name}
            </div>
            <div style={{ fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Academic Directory
            </div>
          </div>
          <button className="drawer-close" onClick={onClose} id="closeMenu" aria-label="Close navigation drawer">
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="drawer-links">
          {navItems.map((item) => (
            <div 
              key={item.key}
              className={`drawer-link ${currentView === item.key ? 'active' : ''}`}
              onClick={() => handleNavClick(item.key)}
              role="button"
              tabIndex={0}
            >
              <div>
                <span className="drawer-link-meta">{item.numeral} — </span>
                <span>{item.label}</span>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px', fontFamily: 'var(--font-sans)', fontWeight: 'normal' }}>
                  {item.desc}
                </div>
              </div>
              <ArrowRight size={18} color="var(--gold)" />
            </div>
          ))}
        </nav>

        {/* Quick Action Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '20px 0 10px' }}>
          <button 
            className="btn btn--gold btn--small"
            onClick={() => { onClose(); onOpenModal('demo'); }}
          >
            Book Demo
          </button>
          <button 
            className="btn btn--outline btn--small"
            onClick={() => { onClose(); onOpenModal('counselling'); }}
          >
            1-on-1 Dean Call
          </button>
        </div>

        {/* Drawer Footer Information */}
        <div className="drawer-footer">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: 'var(--ivory-dim)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={14} color="var(--gold)" />
              <a href={`tel:${siteConfig.contact.phoneTel}`}>{siteConfig.contact.phoneDisplay}</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={14} color="var(--gold)" />
              <a href={`mailto:${siteConfig.contact.admissionsEmail}`}>{siteConfig.contact.admissionsEmail}</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={14} color="var(--gold)" />
              <span>{siteConfig.address.campusName}, {siteConfig.address.city}</span>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '14px', marginTop: '8px', fontSize: '11px', color: 'var(--gold-dark)' }}>
            {siteConfig.socialLinks.slice(0, 3).map((s, idx) => (
              <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                {s.name.split(' ')[0]}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};
