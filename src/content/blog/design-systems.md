---
title: 'Design Systems are more than just Figma Components'
description: 'Why your perfectly organized Figma file is failing in production.'
pubDate: 'Jan 15 2026'
---

I see this pattern often: a design team spends months crafting the perfect Design System in Figma. Variables, auto-layout, component properties—it’s beautiful.

Then the engineering team implements it, and distinct "drifts" start to happen.

## The Translation Lsst

The problem usually isn't the design; it's the **contract** between design and code.

### 1. Token Mismatch
Figma has `primary-500`. The codebase has `blue-main`. 
**Fix:** Automate token generation. We use Style Dictionary to export Figma variables directly to Tailwind configuration files.

### 2. Rigid Props vs. Flexible HTML
Designers think in "variants" (Primary, Secondary). Developers think in HTML attributes (`disabled`, `type="submit"`).
**Fix:** Build components that spread props. 

```tsx
// Don't do this
interface Props {
  text: string;
  onClick: () => void;
}

// Do this
interface Props extends ComponentProps<'button'> {}
```

A design system is a living product, served to two user groups: designers and developers. Treat it like one.
