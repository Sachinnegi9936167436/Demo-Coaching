'use client';

import React from 'react';
import { UniversalLeadForm } from './UniversalLeadForm';
import { X, PhoneCall } from 'lucide-react';

interface RequestCallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseId?: string;
}

export const RequestCallbackModal: React.FC<RequestCallbackModalProps> = ({
  isOpen,
  onClose,
  defaultCourseId,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#8e9eaf] hover:text-[#D7B879] transition-colors"
          aria-label="Close dialog"
        >
          <X size={22} />
        </button>

        <UniversalLeadForm
          formType="callback"
          defaultCourseId={defaultCourseId}
          compact
          onSuccessCallback={() => {
            setTimeout(() => {
              onClose();
            }, 3000);
          }}
        />
      </div>
    </div>
  );
};
