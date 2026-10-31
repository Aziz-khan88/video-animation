import type { Metadata } from "next";
import { PortfolioHero } from "@/components/sections/PortfolioHero";
import { SelectProject } from "@/components/sections/SelectProject";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { ExploreByStyle } from "@/components/sections/ExploreByStyle";
import { TwoDAnimationPortfolio } from "@/components/sections/TwoDAnimationPortfolio";
import { ThreeDAnimationPortfolio } from "@/components/sections/ThreeDAnimationPortfolio";
import { MotionGraphicsPortfolio } from "@/components/sections/MotionGraphicsPortfolio";
import { AllProjects } from "@/components/sections/AllProjects";
import { BehindTheFrames } from "@/components/sections/BehindTheFrames";
import { TrustedByCreators } from "@/components/sections/TrustedByCreators";

export const metadata: Metadata = {
  title: "Portfolio | VideoAnimation.us",
  description:
    "Stories That Move People. A collection of animation projects created for brands, authors and visionaries around the world.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b0b0c]">
      <main>
        <PortfolioHero />
        <SelectProject />
        <FeaturedProject />
        <ExploreByStyle />
        <TwoDAnimationPortfolio />
        <ThreeDAnimationPortfolio />
        <MotionGraphicsPortfolio />
        <AllProjects />
        <BehindTheFrames />
        <TrustedByCreators />
      </main>
    </div>
  );
}
