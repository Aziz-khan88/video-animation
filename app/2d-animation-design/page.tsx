import type { Metadata } from "next";
import { TwoDBusinessPage } from "@/components/sections/TwoDBusinessPage";
import "./service.css";

export const metadata: Metadata = {
  title: "Custom 2D Animation Services for Business | VideoAnimation.us",
  description:
    "Custom 2D animation for product marketing, explainer videos and training. Explore creative directions, plan your scope, and plan your video with a fixed quote.",
};

export default function TwoDAnimationDesignPage() {
  return <TwoDBusinessPage />;
}
