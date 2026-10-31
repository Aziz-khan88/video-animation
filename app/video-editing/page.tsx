import type { Metadata } from "next";
import { SERVICE_PAGES_DATA, ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

const data = SERVICE_PAGES_DATA["video-editing"];

export const metadata: Metadata = {
  title: "Professional Video Editing Services | VideoAnimation.us",
  description: data.heroDescription,
};

export default function VideoEditingPage() {
  return <ServicePageTemplate data={data} />;
}
