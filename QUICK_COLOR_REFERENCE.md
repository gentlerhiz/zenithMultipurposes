# Quick Color Reference Guide

## 🎨 Color Palette

```
Neon Green:    #CDFF00  (Primary accent, CTAs)
Dark Green:    #0F2419  (Headers, footer, dark sections)
Off-White:     #FAFAFA  (Backgrounds)
Primary Text:  #1A1A1A  (Headings, body text)
Secondary Text: #6B7280  (Descriptions, labels)
Muted Text:    #9CA3AF  (Subtle text)
```

## 🔧 Common Patterns

### Buttons
```tsx
// Primary (Neon Green)
className="bg-[#CDFF00] text-[#0F2419] hover:bg-[#B8E600]"

// Secondary (Dark Green)
className="bg-[#0F2419] text-white hover:bg-[#1A3A2E]"

// Outline
className="border-2 border-[#0F2419]/20 text-[#0F2419] hover:bg-[#0F2419]/5"
```

### Text
```tsx
// Headings
className="text-[#1A1A1A]"

// Body
className="text-[#6B7280]"

// Muted
className="text-[#9CA3AF]"

// Accent
className="text-[#CDFF00]"
```

### Backgrounds
```tsx
// Light section
className="bg-[#FAFAFA]"

// White card
className="bg-white"

// Dark section
className="bg-[#0F2419]"

// Accent tint
className="bg-[#CDFF00]/10"
```

### Hover Effects
```tsx
// Neon green hover
className="hover:text-[#CDFF00] hover:border-[#CDFF00]"

// Background hover
className="hover:bg-[#CDFF00]/10"
```

## 📱 Component Examples

### Card
```tsx
<div className="rounded-2xl border border-black/10 bg-white p-6 shadow-lg">
  <h3 className="text-lg font-bold text-[#1A1A1A]">Title</h3>
  <p className="mt-2 text-sm text-[#6B7280]">Description</p>
</div>
```

### Badge
```tsx
<span className="rounded-full bg-[#CDFF00]/10 px-3 py-1 text-xs font-bold text-[#0F2419]">
  Label
</span>
```

### Link
```tsx
<Link 
  href="/path"
  className="text-[#0F2419] transition hover:text-[#CDFF00]"
>
  Link Text
</Link>
```

## ✅ Quick Checklist

When adding new components:
- [ ] Use `#CDFF00` for primary CTAs
- [ ] Use `#0F2419` for dark sections
- [ ] Use `#FAFAFA` for light backgrounds
- [ ] Use `#1A1A1A` for headings
- [ ] Use `#6B7280` for body text
- [ ] Add hover states with neon green
- [ ] Ensure WCAG AA contrast (4.5:1)

## 🎯 Don't Use

❌ Old colors to avoid:
- `#1f3f16` → Use `#0F2419`
- `#fbbf24` → Use `#CDFF00`
- `#f6f5f1` → Use `#FAFAFA`
- `#141414` → Use `#1A1A1A`
- `#575757` → Use `#6B7280`
