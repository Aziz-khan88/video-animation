import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { SketchToScreen } from "@/components/sections/SketchToScreen";
import { TwoDAnimation } from "@/components/sections/TwoDAnimation";
import { ThreeDAnimation } from "@/components/sections/ThreeDAnimation";
import { MotionGraphics } from "@/components/sections/MotionGraphics";
import { Portfolio } from "@/components/sections/Portfolio";
import { CreativeProcess } from "@/components/sections/CreativeProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaFooter } from "@/components/sections/CtaFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#0b0b0c]">
      <main>
        <Hero />
        <Story />
        <SketchToScreen />
        <TwoDAnimation />
        <ThreeDAnimation />
        <MotionGraphics />
        <Portfolio />
        <CreativeProcess />
        <Testimonials />
        <CtaFooter />
      </main>
    </div>
  );
}
