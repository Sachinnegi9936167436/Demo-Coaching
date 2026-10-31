'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { siteConfig } from '@/config/siteConfig';
import { demoBookingSchema, DemoBookingValues } from '@/lib/validations';
import { trackLeadSubmission } from '@/lib/analytics';
import { X, CheckCircle2, Sparkles, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AdmissionsModalNextProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'demo' | 'counselling' | 'brochure' | 'application';
  defaultCourseId?: string;
}

export const AdmissionsModalNext: React.FC<AdmissionsModalNextProps> = ({
  isOpen,
  onClose,
  defaultMode = 'demo',
  defaultCourseId,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [candidateCode, setCandidateCode] = useState('');
  const [serverError, setServerError] = useState<string | null>(null);

  // Keyboard accessibility: Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DemoBookingValues>({
    resolver: zodResolver(demoBookingSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      courseId: defaultCourseId || siteConfig.availableCourses[0].id,
      preferredSlot: 'Saturday Masterclass (11:00 AM – 02:00 PM)',
      role: 'Student / Aspirant',
      notes: '',
    },
  });

  if (!isOpen) return null;

  const onSubmit = async (data: DemoBookingValues) => {
    setServerError(null);

    try {
      const selectedCourseObj = siteConfig.availableCourses.find((c) => c.id === data.courseId);
      const courseTitle = selectedCourseObj ? selectedCourseObj.title : data.courseId;

      const payload = {
        name: data.fullName.trim(),
        phone: data.phone.trim(),
        email: data.email?.trim() || `${data.phone.replace(/[^0-9]/g, '')}@admissions.sdc`,
        interestedCourse: courseTitle,
        message: `Role: ${data.role} • Slot: ${data.preferredSlot} • Notes: ${data.notes || 'None'}`,
        consent: true,
        formType: 'demo' as const,
        formLoadedAt: Date.now() - 3000,
      };

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        setServerError(json.error || 'Failed to confirm reservation. Please retry.');
        return;
      }

      // Success strictly confirmed by server!
      setCandidateCode(json.leadId);
      setIsSuccess(true);

      // Track conversion
      trackLeadSubmission({
        leadId: json.leadId,
        formType: 'demo',
        courseId: data.courseId,
        applicantName: data.fullName,
      });

      try {
        confetti({
          particleCount: 85,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#D7B879', '#18B6AE', '#ffffff'],
        });
      } catch (e) {}

    } catch (err: any) {
      setServerError('Network error connecting to admissions server. Please verify connectivity.');
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setServerError(null);
    reset();
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-opacity duration-300"
      onClick={handleResetAndClose}
    >
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#081321] border border-[#D7B879]/30 rounded-2xl p-5 sm:p-10 shadow-2xl text-[#F9F7F2]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button with generous touch hit area */}
        <button 
          onClick={handleResetAndClose}
          className="absolute top-3 right-3 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#8e9eaf] hover:text-[#D7B879] transition-colors"
          aria-label="Close dialog"
        >
          <X size={22} />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6">
              <div className="eyebrow-luxury mb-2">COMPLIMENTARY MASTERCLASS ADMISSION</div>
              <h2 className="text-2xl sm:text-3xl font-heading font-medium text-ivory mb-2">
                Reserve Live Masterclass Demo
              </h2>
              <p className="text-xs sm:text-sm text-ivory-dim leading-relaxed">
                Experience our 3-hour Socratic seminar, meet lead faculty, and receive your diagnostic problem-solving profile.
              </p>
            </div>

            {serverError && (
              <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-500/40 text-red-200 text-xs mb-4 flex items-center gap-2.5">
                <AlertCircle size={16} className="text-red-400 shrink-0" />
                <span>{serverError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name */}
              <div>
                <label 
                  htmlFor="modal_fullName"
                  className="block font-display text-[11px] tracking-wider text-gold-light uppercase mb-1"
                >
                  Aspirant Full Name *
                </label>
                <input
                  id="modal_fullName"
                  type="text"
                  placeholder="e.g. Vikramaditya Sharma"
                  {...register('fullName')}
                  className="form-input-luxury"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>
                )}
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="modal_phone"
                    className="block font-display text-[11px] tracking-wider text-gold-light uppercase mb-1"
                  >
                    Contact Phone *
                  </label>
                  <input
                    id="modal_phone"
                    type="tel"
                    placeholder="+91 98765 00000"
                    {...register('phone')}
                    className="form-input-luxury"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="modal_email"
                    className="block font-display text-[11px] tracking-wider text-gold-light uppercase mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="modal_email"
                    type="email"
                    placeholder="aspirant@domain.com"
                    {...register('email')}
                    className="form-input-luxury"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Course & Slot Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="modal_courseId"
                    className="block font-display text-[11px] tracking-wider text-gold-light uppercase mb-1"
                  >
                    Fellowship Track
                  </label>
                  <select 
                    id="modal_courseId"
                    {...register('courseId')} 
                    className="form-input-luxury bg-[#14110d]"
                  >
                    {siteConfig.availableCourses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.code} — {c.title.split('(')[0].substring(0, 24)}...
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label 
                    htmlFor="modal_preferredSlot"
                    className="block font-display text-[11px] tracking-wider text-gold-light uppercase mb-1"
                  >
                    Demo Masterclass Slot
                  </label>
                  <select 
                    id="modal_preferredSlot"
                    {...register('preferredSlot')} 
                    className="form-input-luxury bg-[#14110d]"
                  >
                    <option value="Saturday Masterclass (11:00 AM – 02:00 PM)">
                      Saturday: 11:00 AM – 02:00 PM
                    </option>
                    <option value="Sunday Olympiad Lab (04:00 PM – 07:00 PM)">
                      Sunday: 04:00 PM – 07:00 PM
                    </option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label 
                  htmlFor="modal_notes"
                  className="block font-display text-[11px] tracking-wider text-gold-light uppercase mb-1"
                >
                  Specific Conceptual Target / Notes
                </label>
                <textarea
                  id="modal_notes"
                  rows={2}
                  placeholder="e.g. Aiming for Top 500 AIR in JEE 2026; seeking calculus & mechanics depth..."
                  {...register('notes')}
                  className="form-input-luxury"
                />
              </div>

              {/* Notice */}
              <div className="text-[11px] text-ivory-dim/60 leading-normal">
                ✦ Demonstration Prototype: Form submission validates via Zod and logs a simulated admissions booking for {siteConfig.institute.name}.
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-luxury btn-luxury-gold py-4 text-xs font-semibold"
              >
                <span>{isSubmitting ? 'Confirming Reservation...' : 'Confirm Demo Masterclass Seat'}</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6">
            <div className="inline-flex p-4 rounded-full bg-gold/15 border border-gold mb-5">
              <CheckCircle2 size={44} className="text-gold-light" />
            </div>

            <div className="eyebrow-luxury justify-center">SLOT RESERVATION LOGGED</div>
            <h3 className="text-2xl sm:text-3xl font-heading mb-2">Candidate Confirmed</h3>
            <p className="text-sm text-ivory-dim max-w-md mx-auto mb-6 leading-relaxed">
              Your reservation has been logged on the Dean's Masterclass Roster. Please present your simulated Candidate ID during orientation.
            </p>

            <div className="bg-black/80 border border-dashed border-gold rounded-lg p-5 max-w-sm mx-auto mb-6">
              <div className="text-[10px] text-gold-dark uppercase tracking-widest">Candidate Reference</div>
              <div className="font-display text-2xl text-gold tracking-widest my-1">{candidateCode}</div>
              <div className="text-xs text-ivory-dim/60">Strict 35-seat batch allocation acknowledged.</div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="btn-luxury btn-luxury-gold px-8 py-3 text-xs"
            >
              Return to Sanctuary
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
