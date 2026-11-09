"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TwoDShowcase, TwoDStoryboard } from "./TwoDShowcase";
import { TwoDEnquiry } from "./TwoDEnquiry";
import { TwoDStudioFilm } from "./TwoDStudioFilm";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  X,
  PenTool,
  Layers,
  Film,
  Package,
} from "lucide-react";

const goals = [
  {
    label: "Promote a product",
    title: "Make the value easy to see.",
    text: "Give your launch, paid campaign or sales presentation a clear visual story. Put the product benefit first, then give your audience a reason to act.",
    uses: [
      "Product launches",
      "Paid social & campaigns",
      "Sales presentations",
    ],
    format: "Product films · animated ads · brand stories",
    image: "two-d-design-thumb-3-product.jpg",
    alt: "Illustrated orange juice product with fresh citrus",
    brief: "I want to promote a product or brand.",
  },
  {
    label: "Explain an idea",
    title: "Help your audience get it.",
    text: "Turn a service, technical product or unfamiliar process into a story people can follow. Connect what it does with why it matters to your customer.",
    uses: [
      "Website explainers",
      "Technical demonstrations",
      "Service introductions",
    ],
    format: "Explainers · process animation · feature walkthroughs",
    image: "premium-v2/technical.webp",
    alt: "Illustrated mechanical cutaway showing the internal components",
    brief: "I want to explain a product, service or technical idea.",
  },
  {
    label: "Teach a process",
    title: "Make every step easier to follow.",
    text: "Show employees, customers or patients what to do and what to expect. Build a consistent visual guide they can return to when they need it.",
    uses: [
      "Employee onboarding",
      "Customer education",
      "Patient communication",
    ],
    format: "Training videos · onboarding · educational animation",
    image: "premium-v2/education-story.webp",
    alt: "Illustrated doctor explaining care to a patient",
    brief: "I want to create an educational or training video.",
  },
];
const industries = [
  {
    name: "Product & retail",
    applications: "Launch film · product benefits · social cutdowns",
    inputs: "Product photographs, key benefits and campaign channels.",
    title: "Give your product a story worth noticing.",
    image: "premium-v2/brand-story.webp",
    text: "Bring features, ingredients and everyday benefits into focus. Build a product story for a launch, campaign or online store.",
  },
  {
    name: "Healthcare",
    applications: "Patient journeys · service introductions · care guides",
    inputs: "Approved clinical information and a subject expert to review it.",
    title: "Help people understand their care.",
    image: "premium-v2/education-story.webp",
    text: "Make patient journeys, services and medical information easier to follow, with terminology and visuals reviewed by your subject experts.",
  },
  {
    name: "Technical & industrial",
    applications: "Assembly sequences · mechanism demos · operator training",
    inputs: "Technical drawings, process steps and the details that matter.",
    title: "Make the complex feel clear.",
    image: "premium-v2/technical.webp",
    text: "Show what a camera cannot: internal mechanisms, assembly sequences and the steps behind a complex process.",
  },
  {
    name: "SaaS & technology",
    applications: "Product walkthroughs · feature launches · onboarding",
    inputs: "A product demo, the user’s problem and your core workflow.",
    title: "Show the benefit beyond the interface.",
    image: "premium-v2/product-story.webp",
    text: "Connect your software to the everyday problems it solves. Make features, workflows and new ways of working easy to picture.",
  },
  {
    name: "Fashion & beauty",
    applications: "Collection launches · ingredient stories · brand rituals",
    inputs: "Your collection or product, brand references and approved claims.",
    title: "Bring your brand’s point of view to life.",
    image: "premium-v2/fashion-beauty.webp",
    text: "Tell the story behind a collection, a formulation or a daily ritual. Create a distinctive visual language for your campaign.",
  },
  {
    name: "Property",
    applications: "Location stories · development introductions · buyer guides",
    inputs: "Plans, location details and the buyer journey you want to show.",
    title: "Help people picture what is possible.",
    image: "premium-v2/property.webp",
    text: "Introduce a property, location or customer journey through illustrated scenes and a clear narrative.",
  },
];
const steps = [
  {
    image: "step-script.webp",
    title: "Brief & script",
    text: "We shape the message around your audience, objective and where the video will be used.",
    approval: "You approve the story",
    icon: PenTool,
  },
  {
    image: "step-storyboard.webp",
    title: "Style & storyboard",
    text: "Review the visual direction and each scene before the animation begins.",
    approval: "You approve the look",
    icon: Layers,
  },
  {
    image: "step-animation.webp",
    title: "Animation & sound",
    text: "Your approved scenes come together with movement, voice-over and sound.",
    approval: "You review the animation",
    icon: Film,
  },
  {
    image: "step-delivery.webp",
    title: "Final delivery",
    text: "Receive the finished video in the agreed formats, ready for your channels.",
    approval: "Your video, ready to use",
    icon: Package,
  },
];
const plans = [
  {
    name: "A single video",
    intro: "One clear story, developed around your audience and objective.",
    items: [
      "Creative direction, script & storyboard",
      "Custom illustration, animation & sound",
      "Agreed formats, usage & revision rounds",
    ],
  },
  {
    name: "A campaign or series",
    intro: "A consistent visual story across several videos or channels.",
    items: [
      "Shared visual language & content plan",
      "Reusable assets & channel-specific edits",
      "An agreed production & delivery schedule",
    ],
  },
];
const faqs = [
  [
    "What does a 2D animation project include?",
    "We can handle scriptwriting, storyboards, custom illustration, animation, voice-over and sound. Your proposal lists exactly what is included: deliverables, formats, usage rights, revision rounds and the production schedule.",
  ],
  [
    "How long does production take?",
    "Timing depends on the story, illustration detail, deliverables and feedback schedule. Tell us your launch date; we confirm a realistic production plan and approval milestones before you commit.",
  ],
  [
    "Can I use the video for paid ads and social media?",
    "Yes—tell us the channels you are planning to use. We can scope vertical or square versions, captions and shorter edits alongside the main video. These additional deliverables are confirmed in your quote.",
  ],
  [
    "What if I do not have a script or a creative direction?",
    "Start with your product, audience and goal. We can develop the script and storyboard with you, so you can review the story and visual direction before animation starts.",
  ],
  [
    "How do revisions work?",
    "Your proposal defines the revision rounds, approval stages and what each round covers before work starts. You review the script and storyboard before animation. Changes to an approved scope are discussed before extra work begins.",
  ],
  [
    "Should I choose 2D animation or an explainer video?",
    "2D is a visual technique; an explainer is a purpose. Your 2D video can explain a service, promote a product, tell a brand story or teach a process. If understanding a complex offer is your main goal, explore our explainer services.",
  ],
];
function CTA({
  children = "Get a custom quote",
  onClick,
  className = "",
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a className={`b2-button ${className}`} href="#quote" onClick={onClick}>
      {children}
      <ArrowRight size={18} />
    </a>
  );
}
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="b2-eyebrow">{children}</p>;
}
function Brand() {
  return (
    <Link href="/" className="b2-brand" aria-label="VideoAnimation.us home">
      <svg
        width="27"
        height="30"
        viewBox="0 0 42 44"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6.5 7.2c0-2.7 3-4.3 5.3-2.9l23.4 14.8c2.1 1.3 2.1 4.5 0 5.8L11.8 39.7c-2.3 1.4-5.3-.2-5.3-2.9V7.2Z"
          stroke="currentColor"
          strokeWidth="4.8"
          strokeLinejoin="round"
        />
      </svg>
      VideoAnimation<span>.us</span>
    </Link>
  );
}

export function TwoDBusinessPage() {
  const [menu, setMenu] = useState(false);
  const [goal, setGoal] = useState(0);
  const [industry, setIndustry] = useState(0);
  const [brief, setBrief] = useState("");
  const [packageName, setPackageName] = useState("Help me choose");
  const [enquiryVersion, setEnquiryVersion] = useState(0);
  const active = goals[goal],
    sector = industries[industry];
  function chooseBrief(text: string) {
    setBrief(text);
    setEnquiryVersion((value) => value + 1);
  }
  return (
    <div className="b2-page">
      <a className="b2-skip" href="#main">
        Skip to content
      </a>
      <header
        className="b2-header"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setMenu(false);
            e.currentTarget
              .querySelector<HTMLButtonElement>(".b2-menu")
              ?.focus();
          }
        }}
      >
        <div className="b2-container b2-nav">
          <Brand />
          <nav
            aria-label="Page navigation"
            id="b2-navigation"
            className={menu ? "is-open" : ""}
          >
            {[
              ["Studio film", "studio-film"],
              ["Your goals", "services"],

              ["Process", "process"],
              ["Your project", "pricing"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
            <a
              className="v3-menu-quote"
              href="#quote"
              onClick={() => setMenu(false)}
            >
              Get a custom quote <ArrowRight size={17} />
            </a>
          </nav>
          <CTA className="b2-nav-cta" />
          <a
            className="v3-mobile-quote"
            href="#quote"
            onClick={() => setMenu(false)}
          >
            Get a quote
          </a>
          <button
            className="b2-menu"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            aria-controls="b2-navigation"
            onClick={() => setMenu(!menu)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setMenu(false);
            }}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main">
        <section className="v2-hero">
          <div className="b2-container v2-hero-inner">
            <div className="v2-hero-copy">
              <Eyebrow>Custom 2D animation studio</Eyebrow>
              <h1>
                2D animation.
                <br />
                Tell your story.
                <br />
                <em>Move people.</em>
              </h1>
              <p>
                Custom illustration, animation and sound for product launches,
                brand stories and customer education. Built around what your
                audience needs to understand—and remember.
              </p>
              <div className="b2-actions">
                <CTA>Let’s create your video</CTA>
                <a className="b2-text-link" href="#studio-film">
                  Watch the studio film <ArrowUpRight size={18} />
                </a>
              </div>
              <div className="v2-hero-proof">
                <span>
                  <Check size={15} /> From script to final frame
                </span>
                <span>
                  <Check size={15} /> Made for your brand
                </span>
              </div>
            </div>
            <div className="v2-hero-art">
              <Image
                src="/images/premium-v2/hero-story.webp"
                alt="An illustrator draws a colorful coastal world of people, places and stories"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 64vw"
                quality={90}
              />
              <div className="v2-art-note">
                <span>It starts with a little imagination.</span>
                <ArrowUpRight size={24} />
                <small>YOUR STORY. A WORLD OF ITS OWN.</small>
              </div>
            </div>
          </div>
          <div className="v2-hero-foot b2-container">
            <span>Made to connect.</span>
            <p>
              Brand stories <i /> Product & SaaS <i /> Education & training
            </p>
            <a href="#portfolio" aria-label="Discover our creative directions">
              <ArrowRight size={21} />
            </a>
          </div>
        </section>
        <TwoDStudioFilm />
        <TwoDShowcase onChoose={chooseBrief} />
        <section id="services" className="b2-section b2-container">
          <div className="b2-section-head">
            <div>
              <Eyebrow>Start with your goal</Eyebrow>
              <h2>
                What should your
                <br />
                video do for you?
              </h2>
            </div>
            <p>
              You do not need to know the animation terminology. Start with the
              job your video needs to do. We will help shape the story and
              style.
            </p>
          </div>
          <div
            className="b2-goal-tabs"
            role="group"
            aria-label="Choose your video goal"
          >
            {goals.map((g, i) => (
              <button
                key={g.label}
                aria-pressed={goal === i}
                aria-controls="goal-content"
                onClick={() => setGoal(i)}
              >
                <span>0{i + 1}</span>
                {g.label}
                <ArrowUpRight size={19} />
              </button>
            ))}
          </div>
          <div id="goal-content" className="b2-goal-panel">
            <div className="b2-goal-image">
              <Image
                src={`/images/${active.image}`}
                alt={active.alt}
                fill
                sizes="(max-width: 800px) 90vw, 45vw"
              />
            </div>
            <div className="b2-goal-copy" aria-live="polite">
              <Eyebrow>{active.format}</Eyebrow>
              <h3>{active.title}</h3>
              <p>{active.text}</p>
              <ul className="b2-checks">
                {active.uses.map((x) => (
                  <li key={x}>
                    <Check />
                    {x}
                  </li>
                ))}
              </ul>
              <CTA onClick={() => chooseBrief(active.brief)}>
                Plan this kind of video
              </CTA>
              {goal === 1 && (
                <Link className="b2-text-link" href="/landing-page">
                  Explore explainer services <ArrowUpRight size={17} />
                </Link>
              )}
            </div>
          </div>
        </section>
        <section id="industries" className="b2-container b2-section">
          <div className="b2-section-head">
            <div>
              <Eyebrow>Relevant to your world</Eyebrow>
              <h2>
                Your industry.
                <br />
                Your audience. Your story.
              </h2>
            </div>
            <p>
              The right detail makes a video feel relevant. We work from your
              product knowledge, brand guidelines and audience needs.
            </p>
          </div>
          <div className="v2-industry-layout">
            <div
              className="b2-industry-tabs"
              role="group"
              aria-label="Explore industries"
            >
              {industries.map((x, i) => (
                <button
                  key={x.name}
                  aria-pressed={industry === i}
                  aria-controls="industry-content"
                  onClick={() => setIndustry(i)}
                >
                  <span>0{i + 1}</span>
                  {x.name}
                  <ArrowUpRight size={18} />
                </button>
              ))}
            </div>
            <div className="b2-industry-panel" id="industry-content">
              <div aria-live="polite">
                <Eyebrow>2D animation for {sector.name}</Eyebrow>
                <h3>{sector.title}</h3>
                <p>{sector.text}</p>
                <dl className="v3-industry-detail">
                  <div>
                    <dt>Where it can work</dt>
                    <dd>{sector.applications}</dd>
                  </div>
                  <div>
                    <dt>A useful starting point</dt>
                    <dd>{sector.inputs}</dd>
                  </div>
                </dl>
                <CTA
                  onClick={() =>
                    chooseBrief(
                      `I am looking for a 2D animation for ${sector.name.toLowerCase()}. `,
                    )
                  }
                >
                  Discuss my industry
                </CTA>
              </div>
              <div className="b2-industry-image">
                <Image
                  src={`/images/${sector.image}`}
                  alt={`${sector.name} illustrative animation direction`}
                  fill
                  sizes="(max-width: 600px) 90vw, 45vw"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="process" className="b2-process b2-section">
          <div className="b2-container">
            <div className="b2-section-head">
              <div>
                <Eyebrow>Know what happens next</Eyebrow>
                <h2>
                  Creative work.
                  <br />A clear process.
                </h2>
              </div>
              <p>
                Review the message and visual direction before production moves
                forward. Each stage gives you a clear point to give feedback.
              </p>
            </div>
            <TwoDStoryboard />
            <ol className="b2-steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <div className="b2-step-top">
                    <span>0{i + 1}</span>
                    <s.icon size={24} />
                  </div>
                  <div className="b2-step-image v3-step-art">
                    {i === 0 ? (
                      <div className="v3-script-sheet">
                        <small>THE STORY IN A SENTENCE</small>
                        <p>
                          A quiet room.
                          <br />
                          An idea on paper.
                          <br />A bird takes flight.
                        </p>
                        <span>Illustrative story brief</span>
                      </div>
                    ) : i === 3 ? (
                      <video
                        controls
                        playsInline
                        preload="none"
                        poster="/images/process-v3/final-scene.webp"
                        aria-label="Play the sketch-to-story animation study"
                      >
                        <source
                          src="/videos/sketch-to-story.mp4"
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <Image
                        src={`/images/process-v3/${i === 1 ? "storyboard" : "final-scene"}.webp`}
                        alt={
                          i === 1
                            ? "Sketch treatment of the girl and bird scene"
                            : "Color development of the same girl and bird scene"
                        }
                        fill
                        sizes="(max-width: 600px) 43vw, 22vw"
                      />
                    )}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <small>
                    <Check size={15} />
                    {s.approval}
                  </small>
                </li>
              ))}
            </ol>
            <p className="v3-process-disclosure">
              One illustrative process study, from a written idea to a moving
              scene. AI-assisted artwork and animation shown; your production
              approach is agreed in your brief.
            </p>
            <div className="b2-delivery">
              <h3>Built for where you will use it.</h3>
              <p>
                Your main video is delivered in Full HD. Need vertical edits,
                captions, cutdowns or other versions? We will include the agreed
                deliverables in your quote.
              </p>
              <a className="b2-text-link" href="#quote">
                Tell us your channels <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
        <section id="pricing" className="b2-container b2-section">
          <div className="b2-section-head">
            <div>
              <Eyebrow>Plan your investment</Eyebrow>
              <h2>
                Your project.
                <br />A clear, custom quote.
              </h2>
            </div>
            <p>
              Every brief is different. Your quote is based on the story, visual
              detail, production requirements and deliverables you need. The
              scope and price are agreed before production.
            </p>
          </div>
          <div className="b2-pricing">
            {plans.map((p, i) => (
              <article key={p.name} className={i ? "b2-plan-featured" : ""}>
                <div
                  className={`v2-plan-visual v2-plan-visual-${i}`}
                  aria-hidden="true"
                >
                  <div />
                  <div />
                  <div />
                  <span>
                    {i
                      ? "ONE STORY. MORE POSSIBILITIES."
                      : "ONE IDEA. BEAUTIFULLY TOLD."}
                  </span>
                </div>
                <div className="b2-plan-top">
                  <h3>{p.name}</h3>
                  <span>Custom quote</span>
                </div>
                <p>{p.intro}</p>
                <p className="b2-quote-label">Scoped to your brief</p>
                <ul className="b2-checks">
                  {p.items.map((x) => (
                    <li key={x}>
                      <Check />
                      {x}
                    </li>
                  ))}
                </ul>
                <CTA
                  onClick={() => {
                    setPackageName(p.name);
                    chooseBrief(`I am interested in ${p.name.toLowerCase()}. `);
                  }}
                >
                  Discuss {p.name.toLowerCase()}
                </CTA>
              </article>
            ))}
          </div>
          <p className="b2-pricing-note">
            Need a series, multiple languages or a specific launch date?{" "}
            <a
              href="#quote"
              onClick={() => {
                setPackageName("Custom scope");
                setEnquiryVersion((value) => value + 1);
              }}
            >
              Let’s scope your project <ArrowUpRight size={14} />
            </a>
          </p>
        </section>
        <section className="b2-explainer">
          <div className="b2-container">
            <div>
              <Eyebrow>A focused next step</Eyebrow>
              <h2>Need to explain a complex offer?</h2>
              <p>
                2D is the visual technique. An explainer is what the video does.
                If your priority is helping people understand a product or
                service, our explainer page takes you deeper into that approach.
              </p>
            </div>
            <Link className="b2-text-link" href="/landing-page">
              Explore explainer videos <ArrowUpRight size={20} />
            </Link>
          </div>
        </section>
        <section id="contact" className="b2-container b2-section b2-quote">
          <div>
            <Eyebrow>Let’s talk about your video</Eyebrow>
            <h2>
              Tell us the goal.
              <br />
              <em>
                We’ll help shape
                <br />
                the right approach.
              </em>
            </h2>
            <p>
              A rough idea is enough to start. Share what you want to
              communicate, who it is for and where it will be used.
            </p>
            <ol>
              <li>
                <span>01</span>Share your brief and any deadline.
              </li>
              <li>
                <span>02</span>We discuss the story, style and scope.
              </li>
              <li>
                <span>03</span>You receive a fixed project quote.
              </li>
            </ol>
            <a className="b2-text-link" href="tel:+18336666684">
              Prefer to talk? (833) 666-6684 <ArrowUpRight size={17} />
            </a>
          </div>
          <TwoDEnquiry
            key={enquiryVersion}
            brief={brief}
            setBrief={setBrief}
            scope={packageName}
            setScope={setPackageName}
          />
        </section>
        <section id="faq" className="b2-faq b2-section">
          <div className="b2-container b2-faq-grid">
            <div>
              <Eyebrow>Before you get started</Eyebrow>
              <h2>
                A few useful
                <br />
                answers.
              </h2>
              <p>
                Still weighing up the right approach?
                <br />
                <a href="#quote">Tell us what you have in mind.</a>
              </p>
            </div>
            <div>
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <ChevronDown size={19} />
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="b2-close">
          <div className="v2-close-art" aria-hidden="true">
            <Image src="/images/two-d-world-5.jpg" alt="" fill sizes="100vw" />
          </div>
          <div className="b2-container">
            <Eyebrow>A clear scope. A considered story.</Eyebrow>
            <h2>
              Make your message
              <br />
              worth remembering.
            </h2>
            <p className="v3-close-benefits">
              Custom creative direction · Script and storyboard approval ·
              Agreed deliverables
            </p>
            <CTA>Let’s plan your 2D video</CTA>
          </div>
        </section>
      </main>
      <footer className="b2-footer b2-container">
        <div>
          <Brand />
          <p>Custom animation. Clear communication.</p>
        </div>
        <nav aria-label="Footer">
          <Link href="/landing-page">Explainer videos</Link>
          <Link href="/portfolio">Our work</Link>
          <Link href="/contact-us">Contact</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-and-conditions">Terms</Link>
        </nav>
        <small>© 2026 VideoAnimation.us</small>
      </footer>
    </div>
  );
}
