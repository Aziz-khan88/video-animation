# Video Animation — Studio Landing Page

Premium single-page site for an independent 2D / 3D / motion animation studio.

## 2D service page

The PPC page lives at `/2d-animation-design`. Its content and interactive sections
are in `components/sections/TwoDBusinessPage.tsx`, with separate showcase, studio
film and enquiry components alongside it. Route-specific styles are in
`app/2d-animation-design/`. Original artwork lives in `public/images/premium-v2/`;
the coherent process study and published film poster are in `public/images/process-v3/`.

The enquiry form requires `NEXT_PUBLIC_ENQUIRY_ENDPOINT` at build time. See
[the enquiry deployment and operations guide](infra/enquiry/README.md) for AWS
setup, notification verification and tests. Never add AWS credentials to the repo.

Review deployment: https://two-d-premium.d3hxbg02ceyurf.amplifyapp.com/2d-animation-design/

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
