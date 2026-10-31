import type { Metadata } from "next";
import { TwoDHero } from "@/components/sections/TwoDHero";
import { TwoDFirstLine } from "@/components/sections/TwoDFirstLine";
import { TwoDCharacterAlive } from "@/components/sections/TwoDCharacterAlive";
import { TwoDWorldTakesShape } from "@/components/sections/TwoDWorldTakesShape";
import { TwoDShowreel } from "@/components/sections/TwoDShowreel";
import { TwoDStyles } from "@/components/sections/TwoDStyles";
import { CreativeProcess } from "@/components/sections/CreativeProcess";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "2D Animation Services | VideoAnimation.us",
  description:
    "From First Sketch to Living Story. Expressive 2D characters, expanded worlds, and meaningful stories.",
};

export default function TwoDAnimationPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b0b0c]">
      <main>
        <TwoDHero />
        <TwoDFirstLine />
        <TwoDCharacterAlive />
        <TwoDWorldTakesShape />
        <TwoDShowreel />
        <TwoDStyles />
        <CreativeProcess />
        <Testimonials />
      </main>
    </div>
  );
}
