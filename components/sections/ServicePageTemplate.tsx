import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Portfolio } from "@/components/sections/Portfolio";
import { CreativeProcess } from "@/components/sections/CreativeProcess";
import { Testimonials } from "@/components/sections/Testimonials";

export interface ServiceCardItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface ServicePageData {
  slug: string;
  eyebrow: string;
  titleLine1: string;
  titleHighlight: string;
  titleLine2?: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  stats: readonly { value: string; label: string }[];
  deliverablesHeading: string;
  deliverablesSubheading: string;
  deliverables: readonly { title: string; description: string }[];
  showcaseHeading: string;
  showcaseSubheading: string;
  showcaseCards: readonly ServiceCardItem[];
}

export const SERVICE_PAGES_DATA: Record<string, ServicePageData> = {
  "3d-animation": {
    slug: "3d-animation",
    eyebrow: "3D ANIMATION STUDIO",
    titleLine1: "Give Every Detail",
    titleHighlight: "Dimension & Depth.",
    heroDescription:
      "Transform your concepts into breathtaking 3D worlds, lifelike characters, and photorealistic product visualizations engineered to captivate modern audiences.",
    heroImage: "/images/three-d-animation-bg.jpg",
    heroImageAlt: "Glossy 3D animated character in a cinematic production environment",
    stats: [
      { value: "4K+", label: "Cinema-Grade Rendering" },
      { value: "60fps", label: "Fluid Motion Pipeline" },
      { value: "100%", label: "Custom 3D Assets & Rigs" },
    ],
    deliverablesHeading: "Full-Pipeline 3D Production",
    deliverablesSubheading:
      "From sculpt and rigging to physically-based lighting and final compositing.",
    deliverables: [
      {
        title: "3D Character Design & Rigging",
        description:
          "Expressive, studio-rigged characters with nuanced facial blendshapes and natural physics.",
      },
      {
        title: "Photorealistic Product Visualization",
        description:
          "Exploded views, macro surface shaders, and dramatic studio lighting for product launches.",
      },
      {
        title: "3D Explainer & Commercial Spots",
        description:
          "High-conversion broadcast and digital commercials built in Unreal, Maya, and Cinema 4D.",
      },
      {
        title: "Environment & World Building",
        description:
          "Richly textured worlds with volumetric lighting, particle simulation, and cinematic camera choreography.",
      },
    ],
    showcaseHeading: "3D Animation Specialties",
    showcaseSubheading: "Tailored dimensional storytelling for every industry.",
    showcaseCards: [
      {
        title: "Character Storytelling",
        subtitle: "Emotive & Memorable",
        description: "Feature-quality 3D characters that become the recognizable face of your brand.",
        image: "/images/portfolio-style-2-3d.jpg",
      },
      {
        title: "Product & Industrial 3D",
        subtitle: "Precision Detail",
        description: "Showcase internal mechanics and sleek industrial design before manufacturing.",
        image: "/images/landing-diff-1.jpg",
      },
      {
        title: "Cinematic Worlds",
        subtitle: "Immersive Environments",
        description: "Expansive 3D scenes with atmospheric depth and dynamic camera movement.",
        image: "/images/featured-project-bg.jpg",
      },
      {
        title: "Medical & Tech 3D",
        subtitle: "Scientific Accuracy",
        description: "Visualize microscopic processes, hardware architecture, and biotech breakthroughs.",
        image: "/images/behind-frame-2.jpg",
      },
    ],
  },
  "motion-graphics": {
    slug: "motion-graphics",
    eyebrow: "MOTION GRAPHICS DESIGN",
    titleLine1: "Design That",
    titleHighlight: "Never Stands Still.",
    heroDescription:
      "High-energy kinetic typography, sleek UI/UX motion systems, and dynamic brand visuals that turn complex messages into effortless visual stories.",
    heroImage: "/images/motion-graphics-bg.jpg",
    heroImageAlt: "Isometric 3D and 2D motion graphics dashboard with kinetic elements",
    stats: [
      { value: "3.4x", label: "Higher Viewer Retention" },
      { value: "2,000+", label: "Campaigns Delivered" },
      { value: "100%", label: "Vector & 4K Ready" },
    ],
    deliverablesHeading: "Built for Modern Digital Brands",
    deliverablesSubheading:
      "Every frame choreographed for clarity, rhythm, and brand recognition.",
    deliverables: [
      {
        title: "Kinetic Typography",
        description:
          "Bold, rhythmic text animation synchronized with voiceover and custom sound design.",
      },
      {
        title: "SaaS & UI/UX Product Promos",
        description:
          "Present software workflows and app interfaces with fluid, elevated motion design.",
      },
      {
        title: "Brand Systems & Broadcast Packages",
        description:
          "Cohesive lower thirds, transitions, social templates, and motion guidelines.",
      },
      {
        title: "Animated Explainers",
        description:
          "Distill complex value propositions into crisp 60-to-90-second visual narratives.",
      },
    ],
    showcaseHeading: "Motion Graphics Capabilities",
    showcaseSubheading: "Crafted for social, web, product launches, and broadcast.",
    showcaseCards: [
      {
        title: "Kinetic Type",
        subtitle: "Rhythm & Impact",
        description: "Command attention immediately—even on muted social feeds.",
        image: "/images/motion-portfolio-1-kinetic.jpg",
      },
      {
        title: "Data & Infographics",
        subtitle: "Visual Clarity",
        description: "Transform metrics and charts into smooth, intuitive visual sequences.",
        image: "/images/motion-portfolio-2-infographic.jpg",
      },
      {
        title: "UI/UX Showcase",
        subtitle: "SaaS & Apps",
        description: "Highlight product features with polished screen abstractions and micro-interactions.",
        image: "/images/motion-portfolio-3-ui-ux.jpg",
      },
      {
        title: "Abstract Brand Motion",
        subtitle: "Distinctive Identity",
        description: "Fluid shapes, gradients, and 2.5D motion tailored to your brand palette.",
        image: "/images/portfolio-style-3-motion.jpg",
      },
    ],
  },
  "whiteboard-animation": {
    slug: "whiteboard-animation",
    eyebrow: "WHITEBOARD ANIMATION",
    titleLine1: "Complex Ideas,",
    titleHighlight: "Drawn With Clarity.",
    heroDescription:
      "Engage viewers with step-by-step hand-drawn whiteboard animations that educate, persuade, and boost information retention for training, pitches, and explainers.",
    heroImage: "/images/portfolio-style-4-whiteboard.jpg",
    heroImageAlt: "Hand-drawn whiteboard animation illustration with presenter and charts",
    stats: [
      { value: "95%", label: "Message Retention Rate" },
      { value: "100%", label: "Original Hand-Drawn Art" },
      { value: "Fast", label: "Turnaround & Revisions" },
    ],
    deliverablesHeading: "Why Whiteboard Animation Works",
    deliverablesSubheading:
      "Viewers follow every stroke in real time, keeping attention locked from start to finish.",
    deliverables: [
      {
        title: "Strategic Scriptwriting",
        description:
          "Structured problem-solution scripts engineered to keep audiences watching till the final CTA.",
      },
      {
        title: "Custom Hand-Drawn Storyboards",
        description:
          "Bespoke line art and visual metaphors drawn specifically for your topic—never generic clip art.",
      },
      {
        title: "Natural Drawing & Reveal Pacing",
        description:
          "Timed perfectly to professional voiceover so concepts unfold right as they are spoken.",
      },
      {
        title: "Color Accent Highlighting",
        description:
          "Selective brand color accents that guide the viewer's eye to key metrics and takeaways.",
      },
    ],
    showcaseHeading: "Whiteboard Animation Styles",
    showcaseSubheading: "From classic marker-on-whiteboard to modern digital scribe.",
    showcaseCards: [
      {
        title: "Classic Whiteboard",
        subtitle: "Crisp Line Art",
        description: "Timeless black-and-white hand-drawn illustrations with high instructional clarity.",
        image: "/images/portfolio-style-4-whiteboard.jpg",
      },
      {
        title: "Brand-Accented Scribe",
        subtitle: "Strategic Color Pops",
        description: "Clean ink lines paired with your brand's signature colors for emphasis.",
        image: "/images/two-d-style-2.jpg",
      },
      {
        title: "Educational & E-Learning",
        subtitle: "Training Modules",
        description: "Break down compliance, onboarding, and academic lessons into digestible chapters.",
        image: "/images/two-d-style-4.jpg",
      },
      {
        title: "Notebook & Sketchpad",
        subtitle: "Editorial Texture",
        description: "Warm paper textures and organic pencil-to-ink transitions.",
        image: "/images/two-d-first-line-bg.jpg",
      },
    ],
  },
  "video-editing": {
    slug: "video-editing",
    eyebrow: "PROFESSIONAL VIDEO EDITING",
    titleLine1: "Precision Cuts.",
    titleHighlight: "Cinematic Pacing.",
    heroDescription:
      "Turn raw footage into compelling brand films, high-performing social ads, corporate documentaries, and polished YouTube content with studio-grade post-production.",
    heroImage: "/images/behind-frame-3.jpg",
    heroImageAlt: "Professional post-production video editing suite and timeline",
    stats: [
      { value: "4K/8K", label: "RAW & Log Workflow" },
      { value: "Dolby", label: "Sound Mixing & SFX" },
      { value: "48hr", label: "First Cut Turnaround" },
    ],
    deliverablesHeading: "Complete Post-Production Suite",
    deliverablesSubheading:
      "Everything your footage needs to look, sound, and feel like a major production.",
    deliverables: [
      {
        title: "Story-Driven Assembly & Pacing",
        description:
          "Tight, intentional cuts that hook viewers in the first 3 seconds and maintain momentum.",
      },
      {
        title: "Cinema Color Grading",
        description:
          "Shot matching, skin-tone balancing, and bespoke LUT creation in DaVinci Resolve.",
      },
      {
        title: "Motion Titles & Lower Thirds",
        description:
          "Custom animated captions, callouts, and graphics seamlessly tracked into your footage.",
      },
      {
        title: "Sound Design & Audio Mastering",
        description:
          "Dialogue cleanup, Foley effects, licensed music beds, and broadcast-standard loudness.",
      },
    ],
    showcaseHeading: "Editing Formats We Master",
    showcaseSubheading: "Optimized for every screen and aspect ratio.",
    showcaseCards: [
      {
        title: "Commercials & Brand Films",
        subtitle: "High Impact",
        description: "Polished flagship videos for hero webpages, TV broadcast, and paid campaigns.",
        image: "/images/behind-frame-3.jpg",
      },
      {
        title: "Social & Short-Form Ads",
        subtitle: "9:16 & 1:1 Ready",
        description: "Thumb-stopping edits with dynamic captions for TikTok, Reels, and YouTube Shorts.",
        image: "/images/motion-portfolio-1-kinetic.jpg",
      },
      {
        title: "Corporate & Documentary",
        subtitle: "Authentic Stories",
        description: "Multi-cam interviews, b-roll weaving, and narrative arcs that build trust.",
        image: "/images/behind-frame-1.jpg",
      },
      {
        title: "Product & Launch Videos",
        subtitle: "Conversion Focused",
        description: "Fast-paced live-action + motion graphics hybrids built to drive action.",
        image: "/images/motion-portfolio-3-ui-ux.jpg",
      },
    ],
  },
  "logo-animation": {
    slug: "logo-animation",
    eyebrow: "CUSTOM LOGO ANIMATION",
    titleLine1: "Make Your Mark",
    titleHighlight: "Unforgettable.",
    heroDescription:
      "Elevate your brand identity with a signature animated logo reveal. Perfect for video intros, outros, app splash screens, broadcast stingers, and digital presentations.",
    heroImage: "/images/motion-portfolio-1-kinetic.jpg",
    heroImageAlt: "Dynamic glowing custom logo animation and kinetic brand mark",
    stats: [
      { value: "100%", label: "Bespoke Keyframe Motion" },
      { value: "All", label: "Formats (MP4, MOV, Lottie)" },
      { value: "SFX", label: "Custom Sonic Branding" },
    ],
    deliverablesHeading: "More Than a Static Mark",
    deliverablesSubheading:
      "Give your logo personality, energy, and instant recognition across every touchpoint.",
    deliverables: [
      {
        title: "2D & Vector Logo Reveals",
        description:
          "Fluid morphs, line-draw reveals, and geometric assemblies faithful to your brand guidelines.",
      },
      {
        title: "3D Extruded & Lit Logos",
        description:
          "Metallic, glass, or tactile 3D logo animations with studio reflections and camera sweeps.",
      },
      {
        title: "Sonic Logo & SFX Pairing",
        description:
          "Bespoke audio chimes, whooshes, and sonic signatures that make your mark recognizable by ear.",
      },
      {
        title: "Transparent & Web-Ready Exports",
        description:
          "Delivered with alpha channels (ProRes 4444 / WebM) and lightweight Lottie JSON for web/apps.",
      },
    ],
    showcaseHeading: "Logo Animation Styles",
    showcaseSubheading: "Crafted to match your brand's tone and industry.",
    showcaseCards: [
      {
        title: "Minimal & Sleek",
        subtitle: "Modern Tech",
        description: "Clean, effortless transitions ideal for SaaS, fintech, and luxury brands.",
        image: "/images/motion-portfolio-1-kinetic.jpg",
      },
      {
        title: "3D Cinematic Reveal",
        subtitle: "Depth & Lighting",
        description: "Dramatic light sweeps and realistic materials for entertainment and enterprise.",
        image: "/images/portfolio-style-3-motion.jpg",
      },
      {
        title: "Hand-Drawn & Organic",
        subtitle: "Artisanal Feel",
        description: "Frame-by-frame brush, ink, or cel effects for creative and lifestyle brands.",
        image: "/images/two-d-first-line-bg.jpg",
      },
      {
        title: "UI & Lottie Loops",
        subtitle: "Web & Mobile",
        description: "Lightweight, infinitely looping micro-animations for app loaders and headers.",
        image: "/images/motion-portfolio-3-ui-ux.jpg",
      },
    ],
  },
  "cgi-and-vfx-services": {
    slug: "cgi-and-vfx-services",
    eyebrow: "CGI & VISUAL EFFECTS STUDIO",
    titleLine1: "Beyond Reality.",
    titleHighlight: "Seamless CGI & VFX.",
    heroDescription:
      "From blockbuster visual effects and photorealistic CGI product placements to fluid simulations and match-moved compositing, we create the impossible.",
    heroImage: "/images/featured-project-bg.jpg",
    heroImageAlt: "Cinematic CGI and VFX fantasy environment with atmospheric lighting",
    stats: [
      { value: "VFX", label: "Hollywood-Grade Pipeline" },
      { value: "32-bit", label: "EXR & ACES Color Workflow" },
      { value: "FX", label: "Houdini Simulations" },
    ],
    deliverablesHeading: "Visual Effects & CGI Capabilities",
    deliverablesSubheading:
      "Bridging live-action plates and computer-generated artistry without a visible seam.",
    deliverables: [
      {
        title: "3D Camera Tracking & Matchmoving",
        description:
          "Integrate CGI objects, creatures, or set extensions into live-action footage with sub-pixel accuracy.",
      },
      {
        title: "FX Simulations (Fire, Water, Smoke, Cloth)",
        description:
          "Physically accurate particle, fluid, rigid-body destruction, and cloth simulations.",
      },
      {
        title: "FOOH (Fake Out-Of-Home) Viral CGI Ads",
        description:
          "Hyper-realistic giant product CGI integrated into real-world cityscapes for viral social campaigns.",
      },
      {
        title: "Advanced Compositing & Cleanup",
        description:
          "Green-screen keying, rotoscoping, rig removal, beauty retouching, and digital matte painting.",
      },
    ],
    showcaseHeading: "CGI & VFX Applications",
    showcaseSubheading: "Engineered for commercials, films, and viral brand moments.",
    showcaseCards: [
      {
        title: "Viral CGI / FOOH Campaigns",
        subtitle: "Social Spectacle",
        description: "Stop scrolls with hyper-real CGI installations in iconic real-world locations.",
        image: "/images/three-d-animation-bg.jpg",
      },
      {
        title: "Creature & Character VFX",
        subtitle: "Lifelike Integration",
        description: "Detailed grooming, muscle systems, and lighting integration into live plates.",
        image: "/images/portfolio-style-6-hybrid.jpg",
      },
      {
        title: "Set Extension & Matte Painting",
        subtitle: "World Expansion",
        description: "Transform studio shoots into sprawling futuristic cities or historical vistas.",
        image: "/images/featured-project-bg.jpg",
      },
      {
        title: "Dynamic Particle & Fluid FX",
        subtitle: "Physical Realism",
        description: "Liquid pours, cosmetic splashes, energy fields, and atmospheric weather.",
        image: "/images/behind-frame-2.jpg",
      },
    ],
  },
  "infographics-designs": {
    slug: "infographics-designs",
    eyebrow: "ANIMATED INFOGRAPHICS",
    titleLine1: "Turn Complex Data Into",
    titleHighlight: "Visual Stories.",
    heroDescription:
      "Make statistics, annual reports, research findings, and process workflows effortless to understand through engaging animated infographics and data visualization.",
    heroImage: "/images/motion-portfolio-2-infographic.jpg",
    heroImageAlt: "Animated 3D and 2D infographic data visualization charts",
    stats: [
      { value: "80%", label: "Faster Comprehension" },
      { value: "2D/3D", label: "Custom Data Charts" },
      { value: "Multi", label: "Platform Export Ready" },
    ],
    deliverablesHeading: "Data Visualization That Drives Decisions",
    deliverablesSubheading:
      "We translate dense spreadsheets and whitepapers into clear, persuasive visual sequences.",
    deliverables: [
      {
        title: "Animated Charts, Maps & Timelines",
        description:
          "Dynamic bar graphs, geographic heatmaps, and chronological milestones that build before the viewer's eyes.",
      },
      {
        title: "Process & Workflow Diagrams",
        description:
          "Step-by-step isometric and 2D system architectures that clarify how your product or supply chain works.",
      },
      {
        title: "Annual Report & Investor Videos",
        description:
          "Present quarterly growth, ESG impact, and financial highlights with executive polish.",
      },
      {
        title: "Social Micro-Infographics",
        description:
          "Bite-sized, shareable data clips optimized for LinkedIn, X, and conference screens.",
      },
    ],
    showcaseHeading: "Infographic Formats",
    showcaseSubheading: "Designed for clarity, accuracy, and visual appeal.",
    showcaseCards: [
      {
        title: "Financial & Impact Reports",
        subtitle: "Executive Clarity",
        description: "Turn KPIs and yearly milestones into an inspiring narrative for stakeholders.",
        image: "/images/motion-portfolio-2-infographic.jpg",
      },
      {
        title: "Isometric System Flows",
        subtitle: "Architecture & Tech",
        description: "Visualize cloud infrastructure, logistics, and multi-step ecosystems in 2.5D/3D.",
        image: "/images/motion-graphics-bg.jpg",
      },
      {
        title: "Interactive & UI Data",
        subtitle: "Dashboard Motion",
        description: "Showcase analytics platforms and real-time reporting tools in action.",
        image: "/images/motion-portfolio-3-ui-ux.jpg",
      },
      {
        title: "Educational Explainers",
        subtitle: "Public Awareness",
        description: "Communicate scientific, healthcare, or policy data to broad audiences.",
        image: "/images/two-d-style-2.jpg",
      },
    ],
  },
  "cel-animation": {
    slug: "cel-animation",
    eyebrow: "TRADITIONAL CEL ANIMATION",
    titleLine1: "Hand-Crafted",
    titleHighlight: "Frame by Frame.",
    heroDescription:
      "Experience the unmistakable warmth, fluid motion, and artistic soul of traditional frame-by-frame cel animation—crafted by master 2D animators for brands and stories that stand apart.",
    heroImage: "/images/portfolio-style-5-cel.jpg",
    heroImageAlt: "Anime-inspired cel-shaded adventurer overlooking a sunlit castle",
    stats: [
      { value: "24fps", label: "Hand-Drawn Fluidity" },
      { value: "100%", label: "Bespoke Keyframes" },
      { value: "4K", label: "Digital Ink & Paint" },
    ],
    deliverablesHeading: "The Artistry of Pure Frame-by-Frame",
    deliverablesSubheading:
      "Unlike puppet rigs, every pose and expression is individually drawn for boundless movement.",
    deliverables: [
      {
        title: "Rough Animation & Tie-Downs",
        description:
          "Dynamic action poses, squash-and-stretch physics, and expressive character acting.",
      },
      {
        title: "Clean-Up & Digital Ink & Paint",
        description:
          "Crisp linework, cel shading, and rich painterly backgrounds that evoke classic cinema.",
      },
      {
        title: "2D FX Animation",
        description:
          "Hand-drawn fire, lightning, water splashes, smoke plumes, and magical energy bursts.",
      },
      {
        title: "Anime & Cinematic Trailers",
        description:
          "High-octane game trailers, music videos, and prestige commercial spots.",
      },
    ],
    showcaseHeading: "Cel Animation Directions",
    showcaseSubheading: "From Saturday-morning charm to sweeping anime epics.",
    showcaseCards: [
      {
        title: "Anime & Action Cel",
        subtitle: "Dynamic Camera & FX",
        description: "Foreshortened perspectives, dramatic lighting, and high-energy choreography.",
        image: "/images/two-d-style-3.jpg",
      },
      {
        title: "Storybook & Painterly",
        subtitle: "Warm & Timeless",
        description: "Rich watercolor and gouache-inspired backgrounds with gentle character acting.",
        image: "/images/portfolio-style-5-cel.jpg",
      },
      {
        title: "Character Performance",
        subtitle: "Nuanced Emotion",
        description: "Subtle expressions and fluid body language that connect deeply with viewers.",
        image: "/images/two-d-character-alive-bg.jpg",
      },
      {
        title: "Pencil Test & Line Art",
        subtitle: "Raw Artistic Craft",
        description: "Celebrate the visible hand of the artist with textured graphite and ink lines.",
        image: "/images/two-d-first-line-bg.jpg",
      },
    ],
  },
  "hybrid-animation": {
    slug: "hybrid-animation",
    eyebrow: "2D + 3D HYBRID ANIMATION",
    titleLine1: "Where 2D Artistry Meets",
    titleHighlight: "3D Dimension.",
    heroDescription:
      "Combine the expressive charm of hand-drawn 2D illustration with the dynamic camera sweeps and depth of 3D environments for a signature visual style.",
    heroImage: "/images/portfolio-style-6-hybrid.jpg",
    heroImageAlt: "Hybrid 2D and 3D fantasy dragon in a dimensional canyon landscape",
    stats: [
      { value: "2D+3D", label: "Unified Pipeline" },
      { value: "NPR", label: "Stylized Toon Shaders" },
      { value: "360°", label: "Dynamic Camera Moves" },
    ],
    deliverablesHeading: "The Best of Both Worlds",
    deliverablesSubheading:
      "Inspired by modern animated features that blend painterly textures with dimensional space.",
    deliverables: [
      {
        title: "2D Characters in 3D Environments",
        description:
          "Place expressive hand-drawn characters inside fully realized 3D sets with real parallax.",
      },
      {
        title: "Stylized Cel-Shaded 3D (NPR)",
        description:
          "Non-photorealistic 3D rendering with custom outlines, halftone shaders, and stepped frame rates.",
      },
      {
        title: "2D Hand-Drawn FX Over 3D Action",
        description:
          "Punch up 3D scenes with graphic 2D impact frames, smoke, and smear lines.",
      },
      {
        title: "Live-Action + Animation Integration",
        description:
          "Blend animated characters and motion graphics directly into real-world video footage.",
      },
    ],
    showcaseHeading: "Hybrid Animation Styles",
    showcaseSubheading: "Break the mold with a custom visual language.",
    showcaseCards: [
      {
        title: "Painterly 3D Worlds",
        subtitle: "Illustrated Depth",
        description: "Every 3D surface textured like a living concept painting.",
        image: "/images/portfolio-style-6-hybrid.jpg",
      },
      {
        title: "2.5D Parallax Storytelling",
        subtitle: "Multi-Plane Depth",
        description: "Layered 2D artwork arranged in 3D space with cinematic depth-of-field.",
        image: "/images/two-d-world-takes-shape-bg.jpg",
      },
      {
        title: "Toon-Shaded Action",
        subtitle: "Graphic & Bold",
        description: "3D models rendered with crisp comic-book inks and vibrant flat flats.",
        image: "/images/two-d-showreel-bg.jpg",
      },
      {
        title: "Mixed-Media Collages",
        subtitle: "Editorial & Modern",
        description: "Combine photography, 3D objects, typography, and 2D doodles.",
        image: "/images/sketch-to-screen-bg.jpg",
      },
    ],
  },
  "3d-architectural-animation": {
    slug: "3d-architectural-animation",
    eyebrow: "ARCHITECTURAL VISUALIZATION",
    titleLine1: "Experience Unbuilt Spaces",
    titleHighlight: "In Photorealistic 3D.",
    heroDescription:
      "Sell vision before breaking ground. We craft cinematic 3D architectural walkthroughs, aerial flythroughs, and interior visualizations for developers, architects, and luxury real estate.",
    heroImage: "/images/three-d-animation-bg.jpg",
    heroImageAlt: "Photorealistic 3D architectural and studio visualization",
    stats: [
      { value: "CAD/BIM", label: "Revit, Rhino & SketchUp Ready" },
      { value: "Raytraced", label: "Natural Daylight & GI" },
      { value: "4K UHD", label: "Cinema Walkthroughs" },
    ],
    deliverablesHeading: "Architectural Storytelling That Sells",
    deliverablesSubheading:
      "Help investors, buyers, and planning boards step inside your project from anywhere in the world.",
    deliverables: [
      {
        title: "Interior & Exterior 3D Walkthroughs",
        description:
          "Smooth camera choreography through lobbies, residences, retail spaces, and landscaped grounds.",
      },
      {
        title: "Aerial Drone Match & Masterplans",
        description:
          "Composite your proposed development directly into real aerial drone footage of the site.",
      },
      {
        title: "Time-of-Day & Lighting Studies",
        description:
          "Transition seamlessly from golden-hour sunlight to warm twilight interior illumination.",
      },
      {
        title: "Populated Living Environments",
        description:
          "Realistic foliage, water features, vehicles, and subtle human activity that bring spaces to life.",
      },
    ],
    showcaseHeading: "ArchViz Solutions",
    showcaseSubheading: "Precision engineering meets cinematic presentation.",
    showcaseCards: [
      {
        title: "Luxury Residential",
        subtitle: "Bespoke Interiors",
        description: "Tactile marble, timber, textiles, and natural light that evoke immediate desire.",
        image: "/images/landing-diff-1.jpg",
      },
      {
        title: "Commercial & Mixed-Use",
        subtitle: "Investor Presentations",
        description: "Showcase scale, foot traffic flow, and surrounding urban connectivity.",
        image: "/images/behind-frame-1.jpg",
      },
      {
        title: "Construction Phasing",
        subtitle: "Time-Lapse 3D",
        description: "Animate structural assembly from foundation to final facade for stakeholders.",
        image: "/images/behind-frame-2.jpg",
      },
      {
        title: "Masterplan Flythroughs",
        subtitle: "Macro Perspective",
        description: "Sweeping vistas of resorts, campuses, and large-scale urban developments.",
        image: "/images/featured-project-bg.jpg",
      },
    ],
  },
};

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <div className="min-h-screen bg-white text-[#0b0b0c]">
      <main>
        {/* 1. Hero Section with Header */}
        <section className="relative isolate w-full overflow-hidden bg-white pb-14 lg:min-h-[56.25vw] lg:pb-0">
          {/* Background Visual */}
          <div className="pointer-events-none absolute inset-0 -z-10 w-full">
            <Image
              src={data.heroImage}
              alt={data.heroImageAlt}
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Readability Gradient Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.92)_55%,rgba(255,255,255,0.65)_100%)] lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.92)_42%,rgba(255,255,255,0.35)_76%,rgba(255,255,255,0.1)_100%)]" />
          </div>

          <Header />

          <div className="px-6 pt-6 sm:px-10 lg:px-[4.3vw] lg:pt-[4.2vw]">
            <div className="max-w-[600px] lg:max-w-[46vw]">
              <div className="flex items-center gap-3">
                <span className="font-sans text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#ff2b19] lg:text-[1.05vw]">
                  {data.eyebrow}
                </span>
                <span className="h-[2px] w-14 shrink-0 rounded-full bg-gradient-to-r from-[#ff2b19] to-[#ff7a12]" />
              </div>

              <h1 className="mt-3 font-sans text-[clamp(2rem,4.7vw,4.9rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#0a0a0d] lg:mt-[1vw]">
                <span className="block">{data.titleLine1}</span>
                <span className="mt-1 block text-hero-gradient">{data.titleHighlight}</span>
              </h1>

              <p className="mt-4 max-w-[52ch] font-sans text-[15.5px] leading-[1.5] text-[#4e505a] lg:mt-[1.3vw] lg:text-[1.28vw]">
                {data.heroDescription}
              </p>

              {/* CTA Row */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5 lg:mt-[2vw]">
                <Link
                  href="/contact-us"
                  className="bg-cta-gradient inline-flex h-[48px] w-full items-center justify-center gap-2.5 rounded-[10px] px-6 font-sans text-[14.5px] font-bold text-white shadow-[0_12px_28px_-6px_rgb(255_45_27/0.45)] transition-transform hover:-translate-y-0.5 sm:w-auto lg:h-[4.2vw] lg:px-[2vw] lg:text-[1.22vw]"
                >
                  <span>Start Your Project</span>
                  <svg viewBox="0 0 20 20" className="size-4" fill="none" aria-hidden="true">
                    <path
                      d="M4.2 10h11.6M10.8 5.2 15.8 10l-5 4.8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex h-[48px] w-full items-center justify-center rounded-[10px] border border-[#d9dce3] bg-white/90 px-6 font-sans text-[14.5px] font-bold text-[#141519] shadow-sm transition-colors hover:border-[#ff4719] hover:text-[#ff2e1a] sm:w-auto lg:h-[4.2vw] lg:px-[1.8vw] lg:text-[1.22vw]"
                >
                  View Pricing Packages
                </Link>
              </div>

              {/* Stats Row */}
              <dl className="mt-9 grid grid-cols-1 gap-4 border-t border-[#e8eaf0] pt-5 sm:grid-cols-3 lg:mt-[2.6vw] lg:pt-[1.5vw]">
                {data.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-sans text-[12px] font-medium text-[#686b76] lg:text-[0.98vw]">
                      {stat.label}
                    </dt>
                    <dd className="mt-0.5 font-sans text-[22px] font-black tracking-[-0.03em] text-[#0c0c10] lg:text-[1.95vw]">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* 2. Deliverables & Capabilities Section */}
        <section className="w-full bg-[#fafbfd] px-6 py-16 sm:px-10 lg:px-[4.3vw] lg:py-[5vw]">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-2xl">
              <span className="font-sans text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#ff2e1a]">
                WHAT WE DELIVER
              </span>
              <h2 className="mt-2 font-sans text-[clamp(1.85rem,3.4vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0a0a0d]">
                {data.deliverablesHeading}
              </h2>
              <p className="mt-3 font-sans text-[15.5px] leading-[1.5] text-[#5e616d]">
                {data.deliverablesSubheading}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {data.deliverables.map((item, idx) => (
                <div
                  key={item.title}
                  className="group relative flex flex-col justify-between rounded-[18px] border border-[#eceef4] bg-white p-6 shadow-[0_10px_30px_-10px_rgb(15_23_42/0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[#ffcab8]"
                >
                  <div>
                    <span className="inline-grid size-11 place-items-center rounded-[12px] bg-[linear-gradient(135deg,#ff1d1e_0%,#ff6912_100%)] font-sans text-[15px] font-extrabold text-white shadow-[0_6px_16px_-4px_rgb(255_55_22/0.4)]">
                      0{idx + 1}
                    </span>
                    <h3 className="mt-5 font-sans text-[19px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0c0d12]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 font-sans text-[14px] leading-[1.5] text-[#646774]">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-[#f2f3f7] pt-3">
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center gap-1.5 font-sans text-[13px] font-bold text-[#ff3219] group-hover:translate-x-0.5"
                    >
                      <span>Request a sample</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Specialty Showcase Grid */}
        <section className="w-full bg-white px-6 py-16 sm:px-10 lg:px-[4.3vw] lg:py-[5vw]">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="font-sans text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#ff2e1a]">
                  STYLES & FORMATS
                </span>
                <h2 className="mt-2 font-sans text-[clamp(1.85rem,3.4vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0a0a0d]">
                  {data.showcaseHeading}
                </h2>
                <p className="mt-2 font-sans text-[15.5px] text-[#5e616d]">
                  {data.showcaseSubheading}
                </p>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 font-sans text-[14px] font-bold text-[#ff2e1a] hover:text-[#0a0a0d]"
              >
                <span>Explore Full Portfolio</span>
                <span>→</span>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.showcaseCards.map((card) => (
                <article
                  key={card.title}
                  className="group flex flex-col overflow-hidden rounded-[18px] border border-[#eceef4] bg-white shadow-[0_12px_32px_-12px_rgb(15_23_42/0.09)] transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f1f3f8]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 94vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 font-sans text-[11px] font-bold text-white backdrop-blur-sm">
                      {card.subtitle}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="font-sans text-[19px] font-extrabold tracking-[-0.02em] text-[#0b0c10]">
                        {card.title}
                      </h3>
                      <p className="mt-2 font-sans text-[13.5px] leading-[1.48] text-[#646774]">
                        {card.description}
                      </p>
                    </div>
                    <div className="mt-5">
                      <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 font-sans text-[13px] font-bold text-[#0b0c10] transition-colors group-hover:text-[#ff2e1a]"
                      >
                        <span>Discuss this style</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Shared Studio Sections */}
        <Portfolio />
        <CreativeProcess />
        <Testimonials />
      </main>
    </div>
  );
}
