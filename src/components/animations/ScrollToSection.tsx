'use client';

import React from 'react';

interface ScrollToSectionProps {
  targetId: string;
  children: React.ReactNode;
  offset?: number;
  className?: string;
  onClick?: () => void;
}

/**
 * Smoothly scrolls to target section element ID, accounting for sticky header offset.
 */
export function scrollToElement(targetId: string, offset = 80) {
  const element = document.getElementById(targetId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const targetOffset = elementPosition - offset;

  window.scrollTo({
    top: targetOffset,
    behavior: 'smooth',
  });
}

export const ScrollToSection: React.FC<ScrollToSectionProps> = ({
  targetId,
  children,
  offset = 80,
  className = '',
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement(targetId, offset);
    if (onClick) onClick();
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};
