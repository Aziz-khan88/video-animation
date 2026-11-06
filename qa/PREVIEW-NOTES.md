# 2D animation service redesign

## Buyer journey

The page serves buyers looking for custom 2D animation. Interactive goal choices connect product promotion, explanation and training to relevant creative directions and an enquiry brief. The existing `/landing-page` route is the explainer-service cross-link.

Visual design pairs an original illustrated hero with a cinematic three-scene selector, interactive storyboard comparison, and illustrated industry panels. Warm paper, dark teal and restrained coral frame the artwork. Eight original assets include the hero, brand story, product story, education scene, matching graphite sketch, technical cutaway, fashion/beauty campaign and residential scene. Source artwork and prompts are in `source-art/`; optimized WebP files are in `public/images/premium-v2/`. The existing brand mark and four production-stage artworks from the user-owned Netlify page are preserved. No third-party client claims or results were added.

Pricing uses custom scopes with no advertised prices or video lengths, as requested. Each proposal confirms deliverables, usage, revision rounds and schedule.

## Enquiry behavior

The previous form only displayed a success state; it had no delivery integration. This version prepares a reviewable email draft addressed to the public contact address `hello@videoanimation.us`, with a copy-brief fallback. It explicitly states that nothing has been sent. Direct lead submission and PPC conversion tracking require a production integration before campaigns launch. No test messages were sent.

The previous showreel controls opened still images. This page labels those assets illustrative concepts and does not simulate video playback. Real client films can replace these when provided.

## Preview hosting

Normal Next.js/Vercel behavior is preserved. `STATIC_PREVIEW=1` enables a separate static export with unoptimized local images for review hosting. That mode disables Cache Components and partial prefetching, which require the Next.js runtime.

## Sources

- Original route: https://video-animation-new.vercel.app/2d-animation-design
- User-supplied salvage source: https://video-animation-prev.netlify.app/
- Repository baseline: 58c914e459eb06a1078aa15644322c5f6f368eb7

Only the 2D design route is redesigned. Other route components are preserved.
