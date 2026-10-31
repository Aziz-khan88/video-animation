import type { Metadata } from "next";
import { SERVICE_PAGES_DATA, ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

const data = SERVICE_PAGES_DATA["logo-animation"];

export const metadata: Metadata = {
  title: "Custom Logo Animation Services | VideoAnimation.us",
  description: data.heroDescription,
};

export default function LogoAnimationPage() {
  return <ServicePageTemplate data={data} />;
}
