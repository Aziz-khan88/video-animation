"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, MoveHorizontal } from "lucide-react";

const scenes = [
  {
    image: "brand-story",
    label: "Brand storytelling",
    title: "Small moments. Lasting connections.",
    text: "Put a human story at the heart of your brand. Characters, atmosphere and emotion give people something to remember.",
    brief: "I would like a character-led brand story for my business.",
    alt: "A café owner welcomes a customer in a richly illustrated neighborhood at dusk",
  },
  {
    image: "product-story",
    label: "Product & technology",
    title: "A better way, brought to life.",
    text: "Turn an abstract benefit into something people can picture. Build a visual world around the problem your product solves.",
    brief: "I would like a 2D product or technology animation.",
    alt: "An illustrated professional follows a colorful path of connected workflow tiles",
  },
  {
    image: "education-story",
    label: "Education & training",
    title: "Make understanding feel effortless.",
    text: "Use familiar situations and thoughtful characters to help people follow a process, learn something new or feel more confident.",
    brief: "I would like an educational 2D animation for my audience.",
    alt: "A doctor explains a care concept to a patient in a warm illustrated consultation room",
  },
];

export function TwoDShowcase({
  onChoose,
}: {
  onChoose: (brief: string) => void;
}) {
  const [selected, setSelected] = useState(0);
  const scene = scenes[selected];
  const change = (delta: number) =>
    setSelected((value) => (value + delta + scenes.length) % scenes.length);
  return (
    <section id="portfolio" className="v2-showcase">
      <div className="v2-showcase-heading b2-container">
        <p className="b2-eyebrow">A little imagination. A clear intention.</p>
        <h2>
          A world of possibilities.
          <br />
          <em>A story that feels like you.</em>
        </h2>
        <p>
          Expressive characters. Distinctive worlds. A visual language built
          around your message.
        </p>
        <div
          className="v2-scene-tabs"
          role="group"
          aria-label="Explore animation directions"
        >
          {scenes.map((item, index) => (
            <button
              key={item.image}
              aria-pressed={selected === index}
              aria-controls="scene-description"
              onClick={() => setSelected(index)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div
        className="v2-stage"
        role="region"
        aria-roledescription="carousel"
        aria-label="Illustrated animation directions"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            change(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            change(1);
          }
        }}
      >
        {scenes.map((item, index) => {
          const position =
            index === selected
              ? "center"
              : index === (selected + 1) % scenes.length
                ? "right"
                : "left";
          return (
            <button
              key={item.image}
              className={`v2-scene v2-scene-${position}`}
              onClick={() => setSelected(index)}
              tabIndex={position === "center" ? -1 : 0}
              aria-label={`Show ${item.label}`}
              aria-current={position === "center" ? "true" : undefined}
            >
              <Image
                src={`/images/premium-v2/${item.image}.webp`}
                alt={item.alt}
                fill
                sizes="(max-width: 700px) 88vw, 64vw"
                quality={90}
              />
              <span className="v2-scene-caption">
                <small>0{index + 1} / CREATIVE DIRECTION</small>
                <strong>{item.label}</strong>
              </span>
            </button>
          );
        })}
        <button
          className="v2-arrow v2-prev"
          onClick={() => change(-1)}
          aria-label="Previous creative direction"
        >
          <ArrowLeft />
        </button>
        <button
          className="v2-arrow v2-next"
          onClick={() => change(1)}
          aria-label="Next creative direction"
        >
          <ArrowRight />
        </button>
      </div>
      <div
        className="v2-scene-detail b2-container"
        id="scene-description"
        aria-live="polite"
      >
        <h3>{scene.title}</h3>
        <p>{scene.text}</p>
        <a
          className="b2-button"
          href="#quote"
          onClick={() => onChoose(scene.brief)}
        >
          Create something like this <ArrowRight size={18} />
        </a>
        <small>
          Original illustrative concepts. Your story is developed to your brief.
        </small>
      </div>
    </section>
  );
}

export function TwoDStoryboard() {
  const [reveal, setReveal] = useState(52);
  return (
    <div className="v2-craft">
      <div className="v2-craft-copy">
        <span className="v2-number">
          From first lines
          <br />
          to a world of feeling.
        </span>
        <h3>
          You see the story
          <br />
          <em>before it moves.</em>
        </h3>
        <p>
          First, we find the idea. Then we shape the scenes, characters and
          colour. You review the script and storyboard before we bring
          everything into motion.
        </p>
        <span className="v2-drag-hint">
          <MoveHorizontal size={18} /> Slide to explore the transformation
        </span>
      </div>
      <div>
        <div className="v2-compare">
          <Image
            src="/images/premium-v2/brand-story-sketch.webp"
            alt="Pencil storyboard of a café owner greeting a customer"
            fill
            sizes="(max-width: 800px) 90vw, 60vw"
          />
          <div
            className="v2-compare-final"
            style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}
          >
            <Image
              src="/images/premium-v2/brand-story.webp"
              alt="The same café scene developed into a full color illustration"
              fill
              sizes="(max-width: 800px) 90vw, 60vw"
            />
          </div>
          <span className="v2-compare-line" style={{ left: `${reveal}%` }}>
            <MoveHorizontal size={20} />
          </span>
          <span className="v2-compare-tag v2-tag-left">Colour & character</span>
          <span className="v2-compare-tag v2-tag-right">The first sketch</span>
          <input
            type="range"
            min="0"
            max="100"
            value={reveal}
            onChange={(event) => setReveal(Number(event.target.value))}
            aria-label="Reveal finished illustration"
            aria-valuetext={`${reveal}% finished illustration revealed`}
          />
        </div>
        <p className="v2-compare-note">
          A creative direction, developed in stages. Illustration concept shown.
        </p>
      </div>
    </div>
  );
}
