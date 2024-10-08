import Clients from "../home/clients";
import Faqs from "../home/faq";
import Industries from "../home/industries";
import Testimonials from "../home/testimonials";
import Banner from "../portfolio/components/Banner";
import PortfolioTabs from "./components/PortfolioTabs";

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

export default function page() {
    return (
        <div>
            <Banner />
            <PortfolioTabs />
            <Clients />
            <Testimonials slides={ClientsReview} />
            <Industries />
            <Faqs />
        </div>
    )
}
