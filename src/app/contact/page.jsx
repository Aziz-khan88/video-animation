import Banner from "@/src/app/contact/compoments/banner";
import ContactForm from "@/src/app/contact/compoments/contactform";
import Testimonials from "@/src/app/home/testimonials";
import Faqs from "@/src/app/home/faq";

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


export default function Page() {
  return (
    <>
      <Banner contact={true} />
      <ContactForm />
      <Testimonials slides={ClientsReview} />
      <Faqs />
    </>
  );
}
