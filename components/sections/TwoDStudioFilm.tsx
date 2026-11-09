"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";

export function TwoDStudioFilm() {
  const [playing, setPlaying] = useState(false);
  return (
    <section id="studio-film" className="v3-studio-film b2-container">
      <div className="v3-film-copy">
        <p className="b2-eyebrow">Published studio work</p>
        <h2>
          Complex ideas.
          <br />
          <em>Clearly in motion.</em>
        </h2>
        <p>
          See how a technical process becomes easier to follow through moving
          diagrams, comparisons and visual cues. This film is published on Video
          Animation Studio’s own channel.
        </p>
        <a
          className="b2-text-link"
          href="https://vimeo.com/1011160510"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the original on Vimeo <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="v3-film-frame">
        {playing ? (
          <iframe
            title="Video Animation Studio — Motion Graphics"
            src="https://player.vimeo.com/video/1011160510?autoplay=1&dnt=1"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label="Play the published studio motion graphics film"
          >
            <Image
              src="/images/process-v3/studio-film.webp"
              alt="Preview of the studio’s published motion graphics film"
              fill
              sizes="(max-width: 800px) 90vw, 60vw"
            />
            <span className="v3-film-shade" />
            <span className="v3-film-play">
              <Play size={24} fill="currentColor" />
            </span>
            <span className="v3-film-caption">
              <small>VIDEO ANIMATION STUDIO</small>
              <strong>Motion, with intention.</strong>
              <span>Play studio film</span>
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
