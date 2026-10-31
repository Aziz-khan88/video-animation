import type { Metadata } from "next";
import { SERVICE_PAGES_DATA, ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

const data = SERVICE_PAGES_DATA["hybrid-animation"];

export const metadata: Metadata = {
  title: "Hybrid 2D & 3D Animation Services | VideoAnimation.us",
  description: data.heroDescription,
};

export default function HybridAnimationPage() {
  return <ServicePageTemplate data={data} />;
}
