/**
 * Color System - Extracted from brand design
 * Inspired by modern fintech/business aesthetic
 */

export const colors = {
  // Primary Brand Colors
  primary: {
    neonGreen: '#CDFF00',      // Main accent - buttons, highlights
    darkGreen: '#0F2419',      // Headers, footer, dark sections
    forestGreen: '#1A3A2E',    // Alternative dark green
    mintGreen: '#E8FFB7',      // Light accent backgrounds
  },

  // Neutral Colors
  neutral: {
    white: '#FFFFFF',
    offWhite: '#FAFAFA',
    lightGray: '#F5F5F5',
    gray: '#E5E5E5',
    mediumGray: '#9CA3AF',
    darkGray: '#6B7280',
    charcoal: '#374151',
    black: '#1F2937',
  },

  // Text Colors
  text: {
    primary: '#1A1A1A',
    secondary: '#4B5563',
    tertiary: '#6B7280',
    light: '#9CA3AF',
    inverse: '#FFFFFF',
  },

  // Semantic Colors
  semantic: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },

  // Gradient Combinations
  gradients: {
    greenDark: 'linear-gradient(135deg, #0F2419 0%, #1A3A2E 100%)',
    greenLight: 'linear-gradient(135deg, #CDFF00 0%, #E8FFB7 100%)',
    subtle: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)',
  },

  // Service-Specific Accent Colors (keeping for variety)
  services: {
    branding: {
      from: '#A855F7',
      to: '#EC4899',
    },
    social: {
      from: '#3B82F6',
      to: '#06B6D4',
    },
    graphics: {
      from: '#F97316',
      to: '#EF4444',
    },
    automation: {
      from: '#EAB308',
      to: '#F59E0B',
    },
    web: {
      from: '#10B981',
      to: '#059669',
    },
  },
} as const;

export type ColorSystem = typeof colors;
