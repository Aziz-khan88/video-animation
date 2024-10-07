import Banner from "@/src/app/home/banner";
import KeyPoints from "@/src/app/home/keypoints";
import Services from "@/src/app/home/services";
import Portfolio from "@/src/app/home/portfolio";
import Testimonials from "@/src/app/home/testimonials";
import WhyChooes from "@/src/app/home/whychoose";
import VideoCta from "@/src/app/home/videocta";
import Clients from "@/src/app/home/clients";
import SpotLight from "@/src/app/home/spotlight";
import portfolioImg1 from "media/home/portfolio/portfolio-img-1.webp"
import portfolioImg2 from "media/home/portfolio/portfolio-img-2.webp"
import portfolioImg3 from "media/home/portfolio/portfolio-img-3.webp"
import Test01 from "media/home/testimonial/test01.webp"
import Test02 from "media/home/testimonial/test02.webp"
import Test03 from "media/home/testimonial/test03.webp"
import why01 from "media/home/whychoose/why01.webp"
import why02 from "media/home/whychoose/why02.webp"
import why03 from "media/home/whychoose/why03.webp"
import why04 from "media/home/whychoose/why04.webp"
import Faqs from "@/src/app/home/faq";
import Industries from "./home/industries";




const OPTIONS = { align: 'center', loop: true }

const caseStudiesList = [
  {
    title: "2D Animation",
    slides: [
      { image: portfolioImg1 },
      { image: portfolioImg2 },
      { image: portfolioImg3 },
      { image: portfolioImg2 },
    ]
  },
  {
    title: "3D Animation",
    slides: [
      { image: portfolioImg3 },
      { image: portfolioImg1 },
      { image: portfolioImg3 },
      { image: portfolioImg1 },
    ]
  },
  {
    title: "Hybrid & Cel",
    slides: [
      { image: portfolioImg2 },
      { image: portfolioImg3 },
      { image: portfolioImg2 },
      { image: portfolioImg3 },
    ]
  },
  {
    title: "Motion Graphics",
    slides: [
      { image: portfolioImg1 },
      { image: portfolioImg2 },
      { image: portfolioImg1 },
      { image: portfolioImg2 },
    ]
  },
  {
    title: "Whiteboard Animation",
    slides: [
      { image: portfolioImg3 },
      { image: portfolioImg1 },
      { image: portfolioImg3 },
      { image: portfolioImg1 },
    ]
  },
  {
    title: "CGI-VFX",
    slides: [
      { image: portfolioImg2 },
      { image: portfolioImg3 },
      { image: portfolioImg2 },
      { image: portfolioImg3 },
    ]
  }
];

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
const WhyOption = { align: 'center', loop: true }
const WhyItems = [
  {
    Img: why01.src,
    title: "Tailored Animation Solution",
    txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.",
    link: "#"
  },
  {
    Img: why02.src,
    title: "Tailored Animation Solution",
    txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.",
    link: "#"
  },
  {
    Img: why03.src,
    title: "Tailored Animation Solution",
    txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.",
    link: "#"
  },
  {
    Img: why04.src,
    title: "Tailored Animation Solution",
    txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.",
    link: "#"
  },
  {
    Img: why02.src,
    title: "Tailored Animation Solution",
    txt: "Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit Quis dolor lectus.",
    link: "#"
  },

]
export default function Home() {
  return (
    <>
      <Banner />
      <KeyPoints />
      <Portfolio slides={caseStudiesList} options={OPTIONS} caseStudies={caseStudiesList} />
      <Services />
      <SpotLight />
      <Testimonials slides={ClientsReview} />
      <WhyChooes slides={WhyItems} options={WhyOption} />
      <VideoCta />
      <Clients />
      <Industries />
      <Faqs />
    </>
  );
}
