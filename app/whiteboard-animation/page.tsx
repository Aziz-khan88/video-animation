import type { Metadata } from "next";
import { SERVICE_PAGES_DATA, ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

const data = SERVICE_PAGES_DATA["whiteboard-animation"];

export const metadata: Metadata = {
  title: "Whiteboard Animation Services | VideoAnimation.us",
  description: data.heroDescription,
};

export default function WhiteboardAnimationPage() {
  return <ServicePageTemplate data={data} />;
}
