import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Standard GSAP Animation Easings
 */
export const CINEMATIC_EASE = 'power3.out';
export const LUXURY_SMOOTH_EASE = 'power2.inOut';

// Keep this in sync with the scene visibility queries in globals.css.
export const PINNED_SCENE_QUERY =
  '(min-width: 1024px) and (min-height: 760px) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

/**
 * Initialize GSAP with ScrollTrigger plugin safely
 */
export function initGsap() {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
}

/**
 * Recalibrate all active ScrollTrigger instances
 */
export function refreshScrollTriggers() {
  if (typeof window !== 'undefined') {
    ScrollTrigger.refresh();
  }
}
