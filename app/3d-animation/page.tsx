import type { Metadata } from "next";
import { SERVICE_PAGES_DATA, ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

const data = SERVICE_PAGES_DATA["3d-animation"];

export const metadata: Metadata = {
  title: "3D Animation Services | VideoAnimation.us",
  description: data.heroDescription,
};

export default function ThreeDAnimationPage() {
  return <ServicePageTemplate data={data} />;
}
