'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/config/siteConfig';
import { trackLeadSubmission } from '@/lib/analytics';
import { CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck, Phone, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export type FormType = 'counselling' | 'demo' | 'callback' | 'course_enquiry' | 'admission';

export interface UniversalLeadFormProps {
  formType?: FormType;
  defaultCourseId?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  onSuccessCallback?: (leadId: string) => void;
  compact?: boolean;
}

const formTypeLabels: Record<FormType, { title: string; subtitle: string; submitLabel: string }> = {
  counselling: {
    title: 'Book 1-on-1 Free Dean Counselling',
    subtitle: 'Private diagnostic error analysis & personalized exam preparation blueprint.',
    submitLabel: 'Schedule Private Consultation',
  },
  demo: {
    title: 'Register for Saturday Masterclass Demo',
    subtitle: 'Attend a live 3-hour Socratic seminar and experience first-principles derivations.',
    submitLabel: 'Reserve Complimentary Seat',
  },
  callback: {
    title: 'Request an Immediate Dean Callback',
    subtitle: 'Our senior academic counselor will call you within 15 operational minutes.',
    submitLabel: 'Request Dean Callback',
  },
  course_enquiry: {
    title: 'Academic Fellowship Enquiry',
    subtitle: 'Receive complete 24-page syllabus dossier and scholarship eligibility matrices.',
    submitLabel: 'Request Fellowship Dossier',
  },
  admission: {
    title: 'Official Candidate Admission Application',
    subtitle: 'Merit-screened intake for Cohort 2026. Strictly capped at 35 scholars.',
    submitLabel: 'Submit Admission Application',
  },
};

export const UniversalLeadForm: React.FC<UniversalLeadFormProps> = ({
  formType = 'admission',
  defaultCourseId,
  title,
  subtitle,
  className = '',
  onSuccessCallback,
  compact = false,
}) => {
  const formLabels = formTypeLabels[formType];

  // Form inputs state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interestedCourse, setInterestedCourse] = useState(
    defaultCourseId || siteConfig.availableCourses[0].title
  );
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);

  // Anti-spam honeypot and velocity tracking
  const [hpField, setHpField] = useState('');
  const [formLoadedAt, setFormLoadedAt] = useState<number>(0);

  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [successData, setSuccessData] = useState<{ leadId: string; timestamp: string } | null>(null);

  useEffect(() => {
    setFormLoadedAt(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    // Client-side quick validation
    if (!name.trim()) {
      setErrorMessage('Please enter the full candidate name.');
      return;
    }
    if (phone.trim().length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile phone number.');
      return;
    }
    if (!consent) {
      setErrorMessage('Consent to academic communication is required to submit.');
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        interestedCourse,
        message: message.trim() || undefined,
        consent,
        formType,
        hp_field: hpField, // Honeypot
        formLoadedAt,
      };

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setIsLoading(false);
        setErrorMessage(data.error || 'Unable to register inquiry. Please retry or contact desk.');
        if (data.details) {
          setFieldErrors(data.details);
        }
        return;
      }

      // Submission strictly succeeded!
      setIsLoading(false);
      setSuccessData({
        leadId: data.leadId,
        timestamp: data.timestamp,
      });

      // Fire analytics conversion hooks
      trackLeadSubmission({
        leadId: data.leadId,
        formType,
        courseId: interestedCourse,
        applicantName: name,
      });

      // Celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D7B879', '#18B6AE', '#ffffff'],
        });
      } catch (e) {}

      if (onSuccessCallback) {
        onSuccessCallback(data.leadId);
      }

    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(
        'Network error connecting to SDC Admissions Server. Please verify internet connection.'
      );
    }
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setErrorMessage(null);
    setFieldErrors({});
    setSuccessData(null);
    setFormLoadedAt(Date.now());
  };

  return (
    <div className={`card-luxury bg-[#081321] border border-[#D7B879]/35 ${className}`}>
      {/* Success State — ONLY shown when submission actually succeeds */}
      {successData ? (
        <div className="text-center py-6 sm:py-8">
          <div className="w-16 h-16 rounded-full bg-[#18B6AE]/20 border border-[#18B6AE] flex items-center justify-center text-[#18B6AE] mx-auto mb-4">
            <CheckCircle2 size={32} />
          </div>

          <span className="text-[10px] text-[#D7B879] uppercase font-display tracking-widest block mb-1">
            Official Inquiry Recorded
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl text-[#F9F7F2] mb-2">
            Inquiry Successfully Dispatched
          </h3>

          <div className="p-4 bg-[#102338] rounded-xl border border-white/10 max-w-sm mx-auto my-5">
            <div className="text-[10px] text-[#8e9eaf] uppercase font-display tracking-wider">
              Assigned Tracking Code
            </div>
            <div className="font-mono text-xl font-bold text-[#D7B879] mt-0.5">
              {successData.leadId}
            </div>
            <div className="text-[11px] text-[#18B6AE] mt-1 font-sans">
              Status: Active • Dean Triage In Progress
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#d2d9e2] max-w-md mx-auto mb-6 leading-relaxed">
            Thank you, <strong>{name}</strong>. An academic counselor for <strong>{interestedCourse}</strong> will contact you at <strong>{phone}</strong> within 24 operational hours.
          </p>

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 text-xs font-display text-[#D7B879] hover:underline"
          >
            <RefreshCw size={13} />
            <span>Submit Another Candidate Inquiry</span>
          </button>
        </div>
      ) : (
        /* Active Form State */
        <div>
          {/* Header */}
          <div className="mb-6">
            <div className="eyebrow-luxury mb-1 text-[10px]">
              {formType.toUpperCase().replace('_', ' ')} PROTOCOL
            </div>
            <h2 className="font-heading text-xl sm:text-2xl text-[#F9F7F2]">
              {title || formLabels.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#8e9eaf] mt-1">
              {subtitle || formLabels.subtitle}
            </p>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs mb-6 flex items-start gap-3">
              <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold">Submission Incomplete</strong>
                <span>{errorMessage}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot Spam Field (Hidden from real users) */}
            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
              <input
                type="text"
                name="website_hp"
                value={hpField}
                onChange={(e) => setHpField(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Name */}
            <div>
              <label 
                htmlFor={`${formType}_name`}
                className="text-xs font-display text-[#D7B879] uppercase tracking-wider block mb-1 font-semibold"
              >
                Candidate Full Name *
              </label>
              <input
                id={`${formType}_name`}
                type="text"
                required
                disabled={isLoading}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Aryan Sharma"
                className="w-full bg-[#102338] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F9F7F2] placeholder-[#8e9eaf] focus:border-[#D7B879] outline-none disabled:opacity-60"
              />
              {fieldErrors.name && (
                <span className="text-[11px] text-red-400 mt-1 block">{fieldErrors.name[0]}</span>
              )}
            </div>

            {/* Phone & Email Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label 
                  htmlFor={`${formType}_phone`}
                  className="text-xs font-display text-[#D7B879] uppercase tracking-wider block mb-1 font-semibold"
                >
                  Contact Phone Number *
                </label>
                <input
                  id={`${formType}_phone`}
                  type="tel"
                  required
                  disabled={isLoading}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#102338] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F9F7F2] placeholder-[#8e9eaf] focus:border-[#D7B879] outline-none disabled:opacity-60"
                />
                {fieldErrors.phone && (
                  <span className="text-[11px] text-red-400 mt-1 block">{fieldErrors.phone[0]}</span>
                )}
              </div>

              <div>
                <label 
                  htmlFor={`${formType}_email`}
                  className="text-xs font-display text-[#D7B879] uppercase tracking-wider block mb-1 font-semibold"
                >
                  Email Address *
                </label>
                <input
                  id={`${formType}_email`}
                  type="email"
                  required
                  disabled={isLoading}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="candidate@domain.com"
                  className="w-full bg-[#102338] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F9F7F2] placeholder-[#8e9eaf] focus:border-[#D7B879] outline-none disabled:opacity-60"
                />
                {fieldErrors.email && (
                  <span className="text-[11px] text-red-400 mt-1 block">{fieldErrors.email[0]}</span>
                )}
              </div>
            </div>

            {/* Course Selector */}
            <div>
              <label 
                htmlFor={`${formType}_course`}
                className="text-xs font-display text-[#D7B879] uppercase tracking-wider block mb-1 font-semibold"
              >
                Interested Academic Fellowship *
              </label>
              <select
                id={`${formType}_course`}
                disabled={isLoading}
                value={interestedCourse}
                onChange={(e) => setInterestedCourse(e.target.value)}
                className="w-full bg-[#102338] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F9F7F2] focus:border-[#D7B879] outline-none disabled:opacity-60"
              >
                {siteConfig.availableCourses.map((c) => (
                  <option key={c.id} value={c.title} className="bg-[#102338]">
                    {c.code} — {c.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Optional Message */}
            {!compact && (
              <div>
                <label 
                  htmlFor={`${formType}_message`}
                  className="text-xs font-display text-[#D7B879] uppercase tracking-wider block mb-1"
                >
                  Optional Questions / Academic Notes
                </label>
                <textarea
                  id={`${formType}_message`}
                  disabled={isLoading}
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share any specific syllabus concerns, target percentiles, or scheduling questions..."
                  className="w-full bg-[#102338] border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F9F7F2] placeholder-[#8e9eaf] focus:border-[#D7B879] outline-none disabled:opacity-60 resize-none"
                />
              </div>
            )}

            {/* Consent Information Checkbox */}
            <div className="pt-1">
              <label 
                htmlFor={`${formType}_consent`}
                className="flex items-start gap-2.5 cursor-pointer text-xs text-[#8e9eaf] select-none"
              >
                <input
                  id={`${formType}_consent`}
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  disabled={isLoading}
                  className="mt-0.5 rounded border-white/20 text-[#D7B879] focus:ring-[#D7B879] accent-[#D7B879]"
                />
                <span>
                  I consent to receive academic counseling, examination dates, and syllabus updates from {siteConfig.institute.name} via Phone, SMS, and WhatsApp. We respect your confidentiality.
                </span>
              </label>
            </div>

            {/* Submit Button with Loading State */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-luxury btn-luxury-gold py-3.5 text-xs font-semibold justify-center disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Recording Inquiry in Vault...</span>
                </>
              ) : (
                <>
                  <Send size={14} />
                  <span>{formLabels.submitLabel}</span>
                </>
              )}
            </button>

            {/* Privacy Safeguard */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8e9eaf] pt-1">
              <ShieldCheck size={13} className="text-[#18B6AE]" />
              <span>Zero spam pledge. Strict batch ceiling of 35 scholars.</span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
