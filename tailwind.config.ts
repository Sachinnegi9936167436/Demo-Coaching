import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Phase 4 Design Palette
        sanctuary: {
          DEFAULT: '#081321', // Primary background: Midnight Deep Sapphire
          elevated: '#102338', // Secondary background: Elevated Deep Navy
          light: '#F6F3ED',    // Light background: Warm Alabaster
        },
        gold: {
          DEFAULT: '#D7B879', // Premium accent: Champagne Imperial Gold
          light: '#edd8a8',
          dark: '#aa8c4c',
          glow: 'rgba(215, 184, 121, 0.22)',
          subtle: 'rgba(215, 184, 121, 0.08)',
        },
        teal: {
          DEFAULT: '#18B6AE', // Secondary accent: Innovation Teal
          light: '#42ded6',
          dark: '#0f7e78',
          glow: 'rgba(24, 182, 174, 0.20)',
          subtle: 'rgba(24, 182, 174, 0.08)',
        },
        ivory: {
          DEFAULT: '#F9F7F2', // Primary text on dark
          dim: '#d2d9e2',
          muted: '#8e9eaf',
        },
        ink: {
          DEFAULT: '#172236', // Primary text on light
          muted: '#4a5d78',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
        heading: ['var(--font-heading)', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Cinzel', 'serif'],
        sans: ['var(--font-sans)', 'Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.22em',
        widest: '0.28em',
      },
    },
  },
  plugins: [],
};

export default config;
