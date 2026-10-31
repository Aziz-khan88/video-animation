import type { Metadata } from "next";
import { SERVICE_PAGES_DATA, ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

const data = SERVICE_PAGES_DATA["3d-architectural-animation"];

export const metadata: Metadata = {
  title: "3D Architectural Visualization & Animation | VideoAnimation.us",
  description: data.heroDescription,
};

export default function ArchitecturalVisualizationPage() {
  return <ServicePageTemplate data={data} />;
}
