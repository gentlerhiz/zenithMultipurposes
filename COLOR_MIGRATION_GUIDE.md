# Color Migration Guide

## Color Mapping - Old to New

### Primary Brand Colors
| Old Color | New Color | Usage |
|-----------|-----------|-------|
| `#1f3f16` | `#0F2419` | Primary dark green (buttons, headers, dark sections) |
| `#142c10` | `#0F2419` | Dark green hover state |
| `#0e1f0b` | `#0F2419` | Alternative dark green |
| `#fbbf24` | `#CDFF00` | Accent color (highlights, CTAs) |
| `#d5f06a` | `#CDFF00` | Light accent |

### Background Colors
| Old Color | New Color | Usage |
|-----------|-----------|-------|
| `#f6f5f1` | `#FAFAFA` | Light background |
| `#141414` | `#1A1A1A` | Primary text |
| `#444` | `#4B5563` | Secondary text |
| `#575757` | `#4B5563` | Tertiary text |
| `#888` | `#6B7280` | Muted text |
| `#aaa` | `#9CA3AF` | Light muted text |

### Component-Specific Updates

#### Navbar
- Background (solid): `bg-white/90` → `bg-white/95`
- Logo accent: `text-[#1f3f16]` → `text-[#0F2419]`
- Logo accent (transparent): `text-[#fbbf24]` → `text-[#CDFF00]`
- Link text: `text-[#444]` → `text-[#4B5563]`
- Link hover: `hover:text-[#141414]` → `hover:text-[#1A1A1A]`
- CTA button: `bg-[#1f3f16]` → `bg-[#CDFF00]` with `text-[#0F2419]`
- CTA hover: `hover:bg-[#142c10]` → `hover:bg-[#B8E600]`

#### Footer
- Background: `bg-[#142c10]` → `bg-[#0F2419]`
- Accent text: `text-[#fbbf24]` → `text-[#CDFF00]`
- Link hover: `hover:text-[#fbbf24]` → `hover:text-[#CDFF00]`
- Border hover: `hover:border-[#fbbf24]` → `hover:border-[#CDFF00]`

#### Buttons & CTAs
- Primary button: `bg-[#1f3f16]` → `bg-[#CDFF00]` with `text-[#0F2419]`
- Primary hover: `hover:bg-[#142c10]` → `hover:bg-[#B8E600]`
- Secondary button: `border-[#1f3f16]` → `border-[#0F2419]`
- Accent button: `bg-[#fbbf24]` → `bg-[#CDFF00]`

#### Service Cards
- Icon background: `bg-[#1f3f16]/10` → `bg-[#0F2419]/10`
- Icon color: `text-[#1f3f16]` → `text-[#0F2419]`
- Hover effects: Add `hover:bg-[#CDFF00]/10`

#### Sections
- Dark sections: `bg-[#0e1f0b]` → `bg-[#0F2419]`
- Accent labels: `text-[#fbbf24]` → `text-[#CDFF00]`
- Section labels: `text-[#1f3f16]` → `text-[#0F2419]`

### Gradient Updates
- Dark gradient: `from-[#0e1f0b]` → `from-[#0F2419]`
- Light accent: `from-[#fbbf24]` → `from-[#CDFF00]`

### Border & Shadow Updates
- Borders: `border-[#1f3f16]` → `border-[#0F2419]`
- Light borders: `border-[#1f3f16]/20` → `border-[#0F2419]/20`
- Shadows: Keep existing shadow values

### Text Color Updates
- Primary: `text-[#141414]` → `text-[#1A1A1A]`
- Secondary: `text-[#444]` → `text-[#4B5563]`
- Tertiary: `text-[#575757]` → `text-[#6B7280]`
- Muted: `text-[#888]` → `text-[#9CA3AF]`

## Files to Update

### Components
- [x] `src/components/Navbar.tsx`
- [x] `src/components/Footer.tsx`
- [ ] `src/components/ServicePageLayout.tsx`
- [ ] `src/components/sections/HeroSection.tsx`
- [ ] `src/components/sections/ServicesSection.tsx`
- [ ] `src/components/sections/ShowcaseSection.tsx`
- [ ] `src/components/sections/WhyUsSection.tsx`
- [ ] `src/components/sections/TestimonialsSection.tsx`
- [ ] `src/components/sections/WorkShowcaseSection.tsx`
- [ ] `src/components/sections/PricingPreviewSection.tsx`
- [ ] `src/components/sections/ElevateSection.tsx`
- [ ] `src/components/sections/FaqSection.tsx`
- [ ] `src/components/sections/ContactSection.tsx`

### Pages
- [ ] `src/app/page.tsx`
- [ ] `src/app/services/page.tsx`
- [ ] `src/app/services/branding/page.tsx`
- [ ] `src/app/services/social-media/page.tsx`
- [ ] `src/app/services/website-design/page.tsx`
- [ ] `src/app/services/bulk-graphics/page.tsx`
- [ ] `src/app/services/ai-automation/page.tsx`
- [ ] `src/app/about/page.tsx`
- [ ] `src/app/contact/page.tsx`
- [ ] `src/app/faq/page.tsx`

### Global Styles
- [x] `src/app/globals.css`

## Testing Checklist

After migration:
- [ ] Check navbar on all pages (transparent & solid states)
- [ ] Check footer on all pages
- [ ] Verify all buttons and CTAs
- [ ] Test hover states
- [ ] Check mobile menu
- [ ] Verify service cards
- [ ] Test all links
- [ ] Check contrast ratios for accessibility
- [ ] Verify gradient backgrounds
- [ ] Test dark sections

## Notes

- The new color scheme uses a darker, more sophisticated green (#0F2419) instead of the previous #1f3f16
- The accent color is now a vibrant neon green (#CDFF00) instead of amber (#fbbf24)
- This creates better contrast and a more modern, fintech-inspired aesthetic
- All text colors have been updated to use more standard Tailwind gray scale
- Background changed from warm beige (#f6f5f1) to clean off-white (#FAFAFA)
