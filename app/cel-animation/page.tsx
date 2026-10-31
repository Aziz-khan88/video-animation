import type { Metadata } from "next";
import { SERVICE_PAGES_DATA, ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

const data = SERVICE_PAGES_DATA["cel-animation"];

export const metadata: Metadata = {
  title: "Cel Animation Services | VideoAnimation.us",
  description: data.heroDescription,
};

export default function CelAnimationPage() {
  return <ServicePageTemplate data={data} />;
}
