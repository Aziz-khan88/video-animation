import type { Metadata } from "next";
import { LandingHero } from "@/components/sections/LandingHero";
import { LandingShowreel } from "@/components/sections/LandingShowreel";
import { LandingIndustries } from "@/components/sections/LandingIndustries";
import { LandingFeaturedWork } from "@/components/sections/LandingFeaturedWork";
import { LandingHowItWorks } from "@/components/sections/LandingHowItWorks";

export const metadata: Metadata = {
  title: "Landing Page | VideoAnimation.us",
  description:
    "Animation that explains, educates and inspires. 2D and 3D videos for technology, education, healthcare, retail, marketing and manufacturing.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b0b0c]">
      <main>
        <LandingHero />
        <LandingShowreel />
        <LandingIndustries />
        <LandingFeaturedWork />
        <LandingHowItWorks />
      </main>
    </div>
  );
}
