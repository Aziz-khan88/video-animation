# Video Animation — Studio Landing Page

Premium single-page site for an independent 2D / 3D / motion animation studio.

## Stack

- **Next.js 16** (App Router, Turbopack, Cache Components) + **TypeScript**
- **Tailwind CSS v4** — design tokens live in `app/globals.css` (`@theme`)
- **Motion for React** — reveals, staggered headings, layout animations, parallax
- **React Three Fiber + Drei** — lazy-loaded WebGL scene in the Motion Graphics section
- **Lenis** — smooth scrolling (disabled for touch & reduced-motion users)
- **Lucide React** — icons

## Scripts

```bash
npm run dev     # http://localhost:3000
npm run build   # production build (static prerender)
npm run start
npm run lint
```

## Structure

```
app/                     layout (fonts, metadata), page, globals.css (tokens)
components/layout/       Header (sticky, active-section pill, mobile drawer), Footer
components/sections/     One file per page section (+ client sub-components)
components/ui/           Button, Logo, PlayGlyph, Typography helpers, ShowreelModal
components/animations/   Reveal/Stagger, SplitHeading, Counter, Magnetic, Tilt,
                         ImageReveal, ScrollScale, MouseParallaxImage, Providers
components/3d/           MotionPanels (lazy wrapper + fallback), MotionPanelsScene (R3F)
lib/                     content.ts (all copy & data), utils.ts, lenis.ts
public/images/           AI-generated artwork
```

## Notes

- All copy and data are in `lib/content.ts`.
- The 3D scene only mounts on desktop with a fine pointer, WebGL support and no
  `prefers-reduced-motion`; everyone else sees an optimised still image.
- Client logos are fictional placeholders — replace with real (licensed) marks.
- The showreel modal plays a Ken Burns slideshow of portfolio frames; swap in a real
  video when available.
