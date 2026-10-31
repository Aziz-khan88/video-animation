import type { Metadata } from "next";
import { TwoDHero } from "@/components/sections/TwoDHero";
import { TwoDFirstLine } from "@/components/sections/TwoDFirstLine";
import { TwoDCharacterAlive } from "@/components/sections/TwoDCharacterAlive";
import { TwoDWorldTakesShape } from "@/components/sections/TwoDWorldTakesShape";
import { TwoDShowreel } from "@/components/sections/TwoDShowreel";
import { TwoDStyles } from "@/components/sections/TwoDStyles";
import { TwoDProcess } from "@/components/sections/TwoDProcess";
import { TwoDStoryboardToFinal } from "@/components/sections/TwoDStoryboardToFinal";
import { TwoDIndustries } from "@/components/sections/TwoDIndustries";
import { TwoDPricingPlans } from "@/components/sections/TwoDPricingPlans";
import { TwoDWhyChooseUs } from "@/components/sections/TwoDWhyChooseUs";
import { TwoDReadyToCreate } from "@/components/sections/TwoDReadyToCreate";

export const metadata: Metadata = {
  title: "2D Animation | VideoAnimation.us",
  description:
    "From First Sketch to Living Story. Expressive characters, expanded worlds, and meaningful stories.",
};

export default function TwoDPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b0b0c]">
      <main>
        <TwoDHero />
        <TwoDFirstLine />
        <TwoDCharacterAlive />
        <TwoDWorldTakesShape />
        <TwoDShowreel />
        <TwoDStyles />
        <TwoDProcess />
        <TwoDStoryboardToFinal />
        <TwoDIndustries />
        <TwoDPricingPlans />
        <TwoDWhyChooseUs />
        <TwoDReadyToCreate />
      </main>
    </div>
  );
}
