import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { X, CheckCircle2, Sparkles, Calendar, BookOpen, UserCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AdmissionsModal = ({ isOpen, onClose, mode, selectedCourseId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    targetCourse: selectedCourseId || siteConfig.availableCourses[0].id,
    targetYear: '2026',
    role: 'Student / Aspirant',
    preferredSlot: 'Saturday Masterclass (11:00 AM – 02:00 PM)',
    academicGoals: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');

  if (!isOpen) return null;

  const getModalTitle = () => {
    switch (mode) {
      case 'demo':
        return {
          eyebrow: 'Complimentary Masterclass Access',
          title: 'Reserve Your Live Demo Class',
          sub: 'Experience our 3-hour Socratic seminar and interact directly with our senior mentorship faculty.',
        };
      case 'counselling':
        return {
          eyebrow: 'Personalized Diagnostic Guidance',
          title: 'Schedule 1-on-1 Dean Counselling',
          sub: 'Meet our Academic Dean to review your current preparation trajectory, diagnostic error patterns, and study plan.',
        };
      case 'brochure':
        return {
          eyebrow: 'Academic Dossier & Syllabus',
          title: 'Request Detailed Curriculum Dossier',
          sub: 'Receive our complete 80-page curriculum syllabus, testing calendar, and scholarship eligibility criteria.',
        };
      case 'application':
      default:
        return {
          eyebrow: 'Cohort 2026 Admissions Gate',
          title: 'Submit Candidate Application Dossier',
          sub: 'Batches are capped at 35 scholars. Applications undergo academic screening and diagnostic evaluation.',
        };
    }
  };

  const modalInfo = getModalTitle();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please provide your name and phone number so the admissions desk can coordinate your confirmation.');
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const code = `SDC-2026-${randomSuffix}`;
    setTrackingCode(code);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c9a84c', '#f0d080', '#ffffff', '#b87333']
      });
    } catch (err) {
      // Confetti fallback
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className={`modal-backdrop ${isOpen ? 'open' : ''}`} onClick={handleResetAndClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={handleResetAndClose} aria-label="Close modal">
          <X size={22} />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div style={{ marginBottom: '24px' }}>
              <div className="eyebrow" style={{ marginBottom: '8px' }}>{modalInfo.eyebrow}</div>
              <h2 style={{ fontSize: '26px', marginBottom: '8px' }}>{modalInfo.title}</h2>
              <p style={{ color: 'var(--ivory-dim)', fontSize: '13px', lineHeight: '1.6' }}>
                {modalInfo.sub}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Aspirant / Parent Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Vikramaditya Sharma"
                  className="form-input"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Phone Contact *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 98765 00000"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="aspirant@domain.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Academic Program Track</label>
                  <select 
                    className="form-select"
                    value={formData.targetCourse}
                    onChange={(e) => setFormData({ ...formData, targetCourse: e.target.value })}
                  >
                    {siteConfig.availableCourses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.code}: {c.title.split('—')[0].substring(0, 36)}...
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">I Am Applying As</label>
                  <select 
                    className="form-select"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option value="Student / Aspirant">Aspirant / Student</option>
                    <option value="Parent / Guardian">Parent / Guardian</option>
                    <option value="Working Professional">Working Professional</option>
                  </select>
                </div>
              </div>

              {mode === 'demo' && (
                <div className="form-group">
                  <label className="form-label">Preferred Demo Masterclass Slot</label>
                  <select 
                    className="form-select"
                    value={formData.preferredSlot}
                    onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                  >
                    <option value="Saturday Masterclass (11:00 AM – 02:00 PM)">Upcoming Saturday: 11:00 AM – 02:00 PM</option>
                    <option value="Sunday Olympiad Intensive (04:00 PM – 07:00 PM)">Upcoming Sunday: 04:00 PM – 07:00 PM</option>
                    <option value="Wednesday Evening Hybrid Session (06:00 PM – 08:30 PM)">Wednesday Evening: 06:00 PM – 08:30 PM</option>
                  </select>
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Current Academic Target / Specific Inquiry</label>
                <textarea 
                  rows={2}
                  placeholder="e.g. Preparing for JEE 2026; seeking guidance on rotational mechanics and calculus depth..."
                  className="form-textarea"
                  value={formData.academicGoals}
                  onChange={(e) => setFormData({ ...formData, academicGoals: e.target.value })}
                ></textarea>
              </div>

              {/* Disclaimer Notice */}
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.5' }}>
                <span style={{ color: 'var(--gold)' }}>Notice: </span>
                Submission initiates a simulated admissions allocation workflow for {siteConfig.institute.name}. No commercial payment is collected.
              </div>

              {/* Submit CTA */}
              <button 
                type="submit" 
                className="btn btn--gold"
                style={{ width: '100%', padding: '16px' }}
              >
                <span>Confirm & Generate Candidate Slot</span>
                <ArrowRight size={15} />
              </button>
            </form>
          </>
        ) : (
          /* Success Screen */
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ display: 'inline-flex', padding: '16px', background: 'rgba(201, 168, 76, 0.15)', borderRadius: '50%', marginBottom: '20px', border: '1px solid var(--gold)' }}>
              <CheckCircle2 size={44} color="var(--gold-light)" />
            </div>

            <div className="eyebrow" style={{ justifyContent: 'center' }}>Candidate Registration Logged</div>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Slot Reservation Acknowledged</h2>
            <p style={{ color: 'var(--ivory-dim)', fontSize: '14px', maxWidth: '440px', margin: '0 auto 24px', lineHeight: '1.7' }}>
              Thank you, <strong style={{ color: 'var(--gold-light)' }}>{formData.fullName}</strong>. Your request for <strong style={{ color: 'var(--ivory)' }}>{formData.targetCourse}</strong> has been assigned to the Admissions Director's roster.
            </p>

            {/* Tracking Code Box */}
            <div style={{ background: 'var(--black-card)', border: '1px dashed var(--gold)', borderRadius: '8px', padding: '18px', maxWidth: '380px', margin: '0 auto 28px' }}>
              <div style={{ fontSize: '10px', color: 'var(--gold-dark)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                Simulated Candidate ID
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--gold)', letterSpacing: '0.12em', margin: '6px 0' }}>
                {trackingCode}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                Please present this reference ID when connecting with the Admissions Desk.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button 
                className="btn btn--gold btn--small"
                onClick={handleResetAndClose}
              >
                Return to Sanctuary
              </button>
              <a 
                href={siteConfig.contact.whatsappChatUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn--outline btn--small"
              >
                WhatsApp Desk
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
