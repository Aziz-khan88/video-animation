import type { Metadata } from "next";
import { SERVICE_PAGES_DATA, ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

const data = SERVICE_PAGES_DATA["motion-graphics"];

export const metadata: Metadata = {
  title: "Motion Graphics Services | VideoAnimation.us",
  description: data.heroDescription,
};

export default function MotionGraphicsPage() {
  return <ServicePageTemplate data={data} />;
}
