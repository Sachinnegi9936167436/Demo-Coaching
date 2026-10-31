import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

export const Footer = ({ setCurrentView, onOpenModal }) => {
  return (
    <footer className="luxury-footer">
      <div className="container">
        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '48px', marginBottom: '56px' }}>
          
          {/* Col 1: Institute Brand Identity */}
          <div>
            <div className="luxury-footer__brand">{siteConfig.institute.name}</div>
            <p style={{ color: 'var(--ivory-dim)', fontSize: '13px', lineHeight: '1.8', marginBottom: '20px' }}>
              {siteConfig.institute.tagline}. Designed for scholars seeking profound first-principles mastery, rigorous testing fortitude, and transformative intellectual discipline.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'var(--gold-subtle)', border: '1px solid var(--black-border)', borderRadius: '4px', fontSize: '11px', color: 'var(--gold-light)' }}>
              <Sparkles size={13} color="var(--gold)" />
              <span>{siteConfig.institute.statusBadge}</span>
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '12px', letterSpacing: '0.22em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '18px' }}>
              Academic Fellowships
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              {siteConfig.availableCourses.map((c) => (
                <li key={c.id}>
                  <button 
                    onClick={() => { setCurrentView('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    style={{ background: 'none', border: 'none', color: 'var(--ivory-dim)', textAlign: 'left', cursor: 'pointer', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--gold)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--ivory-dim)'}
                  >
                    • {c.title.split('—')[0].split('(')[0].trim()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Central Campus Location */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '12px', letterSpacing: '0.22em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '18px' }}>
              Central Sanctuary Campus
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: 'var(--ivory-dim)' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={16} color="var(--gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>
                  {siteConfig.address.campusName}<br />
                  {siteConfig.address.wing}, {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} — {siteConfig.address.postalCode}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Clock size={16} color="var(--gold)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '12px' }}>{siteConfig.contact.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Admissions Hotline & Direct Inquiry */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '12px', letterSpacing: '0.22em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '18px' }}>
              Admissions Direct
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px', fontSize: '13px' }}>
              <a href={`tel:${siteConfig.contact.phoneTel}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-light)' }}>
                <Phone size={14} />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
              <a href={`mailto:${siteConfig.contact.admissionsEmail}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ivory-dim)' }}>
                <Mail size={14} />
                <span>{siteConfig.contact.admissionsEmail}</span>
              </a>
            </div>
            <button 
              className="btn btn--gold btn--small" 
              style={{ width: '100%' }}
              onClick={() => onOpenModal('counselling')}
            >
              <span>Schedule Counselling</span>
              <ArrowRight size={13} />
            </button>
          </div>

        </div>

        {/* Gold Separator */}
        <div className="gold-separator" style={{ margin: '30px 0' }}></div>

        {/* Compliance & Placeholder Notice */}
        <div style={{ background: 'rgba(20, 16, 12, 0.7)', border: '1px solid var(--black-border)', borderRadius: '6px', padding: '16px 20px', marginBottom: '30px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
          <ShieldAlert size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            <strong style={{ color: 'var(--gold-light)' }}>MANDATORY DEMO & PROTOTYPE NOTICE: </strong>
            {siteConfig.institute.complianceDisclaimer} All exam ranks, faculty dossiers, testimonials, fee figures, and performance records are illustrative conceptual benchmarks created solely for educational website demonstration.
          </p>
        </div>

        {/* Bottom Metadata */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', fontSize: '12px', color: 'var(--text-muted)' }}>
          <div>
            © {new Date().getFullYear()} {siteConfig.institute.name}. All Rights Reserved. Editorial & Cinematic Architecture.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            {siteConfig.socialLinks.map((s, idx) => (
              <a key={idx} href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ivory-dim)', transition: 'color 0.2s' }}>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
