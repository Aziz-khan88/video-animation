import type { Metadata } from "next";
import { TwoDDesignHero } from "@/components/sections/TwoDDesignHero";
import { TwoDDesignServiceStrip } from "@/components/sections/TwoDDesignServiceStrip";
import { TwoDDesignWhyChooseQuote } from "@/components/sections/TwoDDesignWhyChooseQuote";
import { TwoDDesignApprovalProcess } from "@/components/sections/TwoDDesignApprovalProcess";
import { TwoDDesignPricing } from "@/components/sections/TwoDDesignPricing";
import { TwoDDesignPortfolio } from "@/components/sections/TwoDDesignPortfolio";
import { TwoDDesignIndustries } from "@/components/sections/TwoDDesignIndustries";
import { TwoDDesignFaq } from "@/components/sections/TwoDDesignFaq";
import { TwoDDesignFooter } from "@/components/sections/TwoDDesignFooter";

export const metadata: Metadata = {
  title: "2D Animation Videos for Every Industry | VideoAnimation.us",
  description:
    "We turn complex ideas into clear, engaging 2D animation videos — for products, processes, training, marketing, and more across 8+ industries.",
};

export default function TwoDAnimationDesignPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#0b0b0c]">
      <main>
        <TwoDDesignHero />
        <TwoDDesignServiceStrip />
        <TwoDDesignWhyChooseQuote />
        <TwoDDesignApprovalProcess />
        <TwoDDesignPricing />
        <TwoDDesignPortfolio />
        <TwoDDesignIndustries />
        <TwoDDesignFaq />
      </main>
      <TwoDDesignFooter />
    </div>
  );
}
