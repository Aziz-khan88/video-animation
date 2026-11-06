"use client";
import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
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
    image: "two-d-design-thumb-1-mechanical.jpg",
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
    image: "two-d-design-thumb-2-healthcare.jpg",
    alt: "Illustrated doctor explaining a heart health concept",
    brief: "I want to create an educational or training video.",
  },
];
const industries = [
  {
    name: "Product & retail",
    title: "Give your product a story worth noticing.",
    image: "two-d-industry-card-product.jpg",
    text: "Bring features, ingredients and everyday benefits into focus. Build a product story for a launch, campaign or online store.",
  },
  {
    name: "Healthcare",
    title: "Help people understand their care.",
    image: "two-d-industry-card-healthcare.jpg",
    text: "Make patient journeys, services and medical information easier to follow, with terminology and visuals reviewed by your subject experts.",
  },
  {
    name: "Technical & industrial",
    title: "Make the complex feel clear.",
    image: "two-d-industry-card-mechanical.jpg",
    text: "Show what a camera cannot: internal mechanisms, assembly sequences and the steps behind a complex process.",
  },
  {
    name: "Automotive",
    title: "Turn technical features into everyday value.",
    image: "two-d-industry-card-automotive.jpg",
    text: "Explain vehicle features, electric systems and ownership benefits with a visual story built around your audience.",
  },
  {
    name: "Fashion & beauty",
    title: "Bring your brand’s point of view to life.",
    image: "two-d-quote-thumb-5-beauty.jpg",
    text: "Tell the story behind a collection, a formulation or a daily ritual. Create a distinctive visual language for your campaign.",
  },
  {
    name: "Property",
    title: "Help people picture what is possible.",
    image: "two-d-industry-card-realestate.jpg",
    text: "Introduce a property, location or customer journey through illustrated scenes and a clear narrative.",
  },
];
const examples = [
  {
    image: "two-d-portfolio-right-headphones.jpg",
    tag: "01 / PRODUCT & CAMPAIGN",
    title: "Put the benefit in the spotlight.",
    text: "Illustrated products, feature callouts and purposeful movement for launches and marketing.",
    goal: 0,
  },
  {
    image: "salvaged/portfolio-lab.webp",
    tag: "02 / CHARACTER & STORY",
    title: "Give your audience someone to follow.",
    text: "Relatable characters and scenarios that make services and learning feel more human.",
    goal: 2,
  },
  {
    image: "two-d-portfolio-center-engine.jpg",
    tag: "03 / TECHNICAL & PROCESS",
    title: "Show what happens beneath the surface.",
    text: "Cutaways and clear sequences that make mechanisms and complex processes easier to understand.",
    goal: 1,
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
      "A creative direction for your brand",
      "Script and storyboard development",
      "Custom illustration and animation",
      "Voice-over and sound requirements",
      "Agreed formats and revision rounds",
    ],
  },
  {
    name: "A campaign or series",
    intro: "A consistent visual story across several videos or channels.",
    items: [
      "A shared visual language across videos",
      "A coordinated story and content plan",
      "Reusable characters and visual assets",
      "Channel-specific edits and versions",
      "A production and delivery schedule",
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
    "A standard 60–90 second video typically takes 3–4 weeks from kickoff, depending on complexity and feedback. Tell us your launch date so we can confirm a realistic schedule before you commit.",
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
  children = "Get a fixed quote",
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
  const [prepared, setPrepared] = useState<{
    body: string;
    url: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const active = goals[goal],
    sector = industries[industry];
  function prepare(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "Not provided"}\nProject scope: ${packageName}\n\nProject brief:\n${brief}`;
    setPrepared({
      body,
      url: `mailto:hello@videoanimation.us?subject=${encodeURIComponent("2D animation project enquiry")}&body=${encodeURIComponent(body)}`,
    });
    setCopied(false);
  }
  function chooseBrief(text: string) {
    setBrief(text);
    setPrepared(null);
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
              ["Your goals", "services"],
              ["Creative directions", "portfolio"],
              ["Process", "process"],
              ["Pricing", "pricing"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
          </nav>
          <CTA className="b2-nav-cta" />
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
        <section className="b2-hero b2-container">
          <div className="b2-hero-copy">
            <Eyebrow>Custom 2D animation services</Eyebrow>
            <h1>
              Custom 2D animation.
              <br />
              <em>
                Built around
                <br />
                your business.
              </em>
            </h1>
            <p>
              From product launches to customer education, we create custom 2D
              animation built around your audience, your brand and what you need
              to communicate.
            </p>
            <div className="b2-actions">
              <CTA />
              <a className="b2-text-link" href="#portfolio">
                Explore the possibilities <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="b2-hero-facts">
              <span>
                <Check />
                Script to final delivery
              </span>
              <span>
                <Check />
                Clear approval stages
              </span>
              <span>
                <Check />
                Fixed quote before we start
              </span>
            </div>
          </div>
          <div className="b2-hero-art">
            <div className="b2-art-top">
              <span>BUILT AROUND YOUR MESSAGE</span>
              <span>2D / STUDIO</span>
            </div>
            <div className="b2-hero-picture">
              <Image
                src="/images/two-d-design-thumb-3-product.jpg"
                alt="2D illustrated orange juice campaign concept with fresh fruit"
                fill
                priority
                sizes="(max-width: 800px) 90vw, 48vw"
                quality={85}
              />
              <span className="b2-art-label">
                PRODUCT STORYTELLING · CONCEPT
              </span>
            </div>
            <div className="b2-art-caption">
              <div>
                <small>One product. A world of possibilities.</small>
                <p>Turn the everyday into something memorable.</p>
              </div>
              <a href="#portfolio" aria-label="Explore creative directions">
                <ArrowUpRight />
              </a>
            </div>
            <div className="b2-art-mini">
              <Image
                src="/images/two-d-design-thumb-2-healthcare.jpg"
                alt="Character illustration for patient education"
                width={76}
                height={62}
              />
              <span>
                Characters. Products. Processes.
                <small>A visual language that fits your story.</small>
              </span>
              <Layers size={22} />
            </div>
          </div>
        </section>
        <div className="b2-scope">
          <div className="b2-container">
            <span>One creative partner, from first idea to final frame.</span>
            <p>
              Strategy & script <span> / </span> Illustration <span> / </span>{" "}
              Animation <span> / </span> Voice & sound
            </p>
          </div>
        </div>
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
        <section id="portfolio" className="b2-dark b2-section">
          <div className="b2-container">
            <div className="b2-section-head">
              <div>
                <Eyebrow>Creative directions</Eyebrow>
                <h2>
                  Different stories.
                  <br />
                  <em>The right treatment.</em>
                </h2>
              </div>
              <p>
                Picture how your message could look. These illustrative concepts
                show possible directions; your visuals are developed around your
                own brief.
              </p>
            </div>
            <div className="b2-example-grid">
              {examples.map((x) => (
                <article key={x.tag}>
                  <div className="b2-example-image">
                    <Image
                      src={`/images/${x.image}`}
                      alt={x.title}
                      fill
                      sizes="(max-width: 600px) 90vw, 30vw"
                    />
                    <span>Illustrative concept</span>
                  </div>
                  <small>{x.tag}</small>
                  <h3>{x.title}</h3>
                  <p>{x.text}</p>
                  <a
                    href="#quote"
                    className="b2-text-link"
                    onClick={() => chooseBrief(goals[x.goal].brief)}
                  >
                    Discuss a similar direction <ArrowUpRight size={17} />
                  </a>
                </article>
              ))}
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
                {x.name}
              </button>
            ))}
          </div>
          <div className="b2-industry-panel" id="industry-content">
            <div aria-live="polite">
              <Eyebrow>2D animation for {sector.name}</Eyebrow>
              <h3>{sector.title}</h3>
              <p>{sector.text}</p>
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
            <ol className="b2-steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <div className="b2-step-top">
                    <span>0{i + 1}</span>
                    <s.icon size={24} />
                  </div>
                  <div className="b2-step-image">
                    <Image
                      src={`/images/salvaged/${s.image}`}
                      alt={s.title}
                      fill
                      sizes="(max-width: 600px) 43vw, 22vw"
                    />
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
                setPrepared(null);
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
                Explore our explainer service for a closer look at turning a
                product or service into a clear, compelling story.
              </p>
            </div>
            <Link className="b2-text-link" href="/landing-page">
              Explore explainer videos <ArrowUpRight size={20} />
            </Link>
          </div>
        </section>
        <section id="quote" className="b2-container b2-section b2-quote">
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
          <form
            onSubmit={prepare}
            onChange={() => setPrepared(null)}
            className="b2-form"
          >
            <h3>Your project starts here.</h3>
            <p>No obligation. Just a useful first conversation.</p>
            <div className="b2-form-row">
              <label>
                Your name
                <input
                  autoComplete="name"
                  name="name"
                  required
                  placeholder="Full name"
                />
              </label>
              <label>
                Work email
                <input
                  type="email"
                  autoComplete="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label>
              Company <span>(optional)</span>
              <input
                name="company"
                autoComplete="organization"
                placeholder="Company or brand"
              />
            </label>
            <label>
              Project scope
              <select
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
              >
                {[
                  "Help me choose",
                  "A single video",
                  "A campaign or series",
                  "Custom scope",
                ].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <label>
              What would you like your video to do?
              <textarea
                required
                name="brief"
                rows={4}
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                placeholder="Your product, audience, goal and any deadline…"
              />
            </label>
            <button type="submit" className="b2-button">
              Prepare my enquiry <ArrowRight size={18} />
            </button>
            <small className="b2-form-note">
              Review your brief, then send it through your email app.
            </small>
            {prepared && (
              <div className="b2-enquiry" role="status">
                <strong>Your enquiry is ready to review.</strong>
                <p>
                  Nothing has been sent yet. Open the email draft to review and
                  send, or copy your brief to email hello@videoanimation.us.
                </p>
                <pre>{prepared.body}</pre>
                <a href={prepared.url} className="b2-button">
                  Open email draft <ArrowUpRight size={18} />
                </a>
                <button
                  type="button"
                  className="b2-text-link"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(prepared.body);
                      setCopied(true);
                    } catch {
                      setCopied(false);
                    }
                  }}
                >
                  {copied ? "Brief copied" : "Copy brief"}
                </button>
              </div>
            )}
          </form>
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
          <div className="b2-container">
            <Eyebrow>Your next story starts with a conversation</Eyebrow>
            <h2>
              Make your message
              <br />
              worth paying attention to.
            </h2>
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
      <a href="#quote" className="b2-mobile-cta">
        Plan your 2D video <ArrowUpRight size={18} />
      </a>
    </div>
  );
}
