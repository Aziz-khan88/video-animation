import type { Metadata } from "next";
import { SERVICE_PAGES_DATA, ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

const data = SERVICE_PAGES_DATA["infographics-designs"];

export const metadata: Metadata = {
  title: "Animated Infographics Design Services | VideoAnimation.us",
  description: data.heroDescription,
};

export default function InfographicsDesignsPage() {
  return <ServicePageTemplate data={data} />;
}
