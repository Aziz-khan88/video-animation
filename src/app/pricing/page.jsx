import Banner from "@/src/app/pricing/banner";
import Clients from "@/src/app/home/clients";
import Faqs from "@/src/app/home/faq";
import Testimonials from "@/src/app/home/testimonials";
import Contentsection from "@/src/app/pricing/contentsection";
import Packages from "@/src/app/pricing/packages";
// Testimonial Image
import Test01 from "media/home/testimonial/test01.webp"
import Test02 from "media/home/testimonial/test02.webp"
import Test03 from "media/home/testimonial/test03.webp"

const ClientsReview = [
  {
    img: Test01.src,
    name: "Daniel Gonzalez",
    job: "CTO / Pronftdesign.com",
    video: "/videos/test.mp4"
  },
  {
    img: Test02.src,
    name: "Daniel Gonzalez",
    job: "CTO / Pronftdesign.com",
    video: "/videos/test.mp4"
  },
  {
    img: Test03.src,
    name: "Daniel Gonzalez",
    job: "CTO / Pronftdesign.com",
    video: "/videos/test.mp4"
  },
  {
    img: Test01.src,
    name: "Daniel Gonzalez",
    job: "CTO / Pronftdesign.com",
    video: "/videos/test.mp4"
  },
]

export default function Pricing() {
  return (
    <>
      <Banner video={true} />
      <Packages />
      <Clients />
      <Contentsection />
      <Testimonials slides={ClientsReview} />
      <Faqs />
    </>
  );
}
