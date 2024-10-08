import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/services/banner.module.scss"
import Link from 'next/link'
import { ArrowBtn } from '@/src/app/app-constants'
import Image from 'next/image'
import Img1 from "@/public/services/banner/portrait.webp"
import Img2 from "@/public/services/banner/star.gif"

const data = {
    title: (<>Want to Jump <br className='d-none d-md-block' /> Straight in & Get the Video Made?</>),
    content: "Want to get the right kind of video made? One that ensures that your brand objectives are met? One that spurs the customer into taking action? If yes, then you’re just a few steps away from getting a video like this. So, let’s get Video Animation, shall we?",
}

const Banner = ({ video }) => {
    return (

        <section className={`${styles.mainBanner} ${video ? styles.pricingPage : ''}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={7} className='my-auto'>
                        <div className={styles.bannerContent}>
                            <h1>2D Animation</h1>
                            <p>Video Animation is your go-to 2D animation studio for cost-effective, full-cycle video production. Our 2D animation services and minimal resource requirements can bring your creative vision to life faster.</p>
                            <p>We create original and compelling 2D animations that boosts your brand’s awareness. Our engaging content helps you connect with your audience on an emotional level.</p>
                            <p>We don't just provide 2D animation services; we build universal experiences. From intricate product demonstrations to memorable brand identities, we transform your vision into stunning visuals that leave a lasting impact.</p>
                            <p>Whether you desire the charm of 2D or the realism of 3D, our collaborative approach ensures your ideas come to life flawlessly.</p>
                            <Link href="" className="readMoreBtn bgColor">Dive in now <ArrowBtn /></Link>
                        </div>
                    </Col>
                    <Col md={5} className='my-auto text-center'>
                        <div className={styles.bannerImageBox}>
                            <Image src={Img1}  width={422} height={649}/>
                            {/* <Image src={Img2}  /> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}
export default Banner