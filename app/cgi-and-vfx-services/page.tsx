import type { Metadata } from "next";
import { SERVICE_PAGES_DATA, ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

const data = SERVICE_PAGES_DATA["cgi-and-vfx-services"];

export const metadata: Metadata = {
  title: "CGI & VFX Services | VideoAnimation.us",
  description: data.heroDescription,
};

export default function CgiAndVfxServicesPage() {
  return <ServicePageTemplate data={data} />;
}
