import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/pricing/banner.module.scss"
import Link from 'next/link'
import { ArrowBtn } from '@/src/app/app-constants'

const data = {
    title: (<>Want to Jump <br className='d-none d-md-block' /> Straight in & Get the Video Made?</>),
    content: "Want to get the right kind of video made? One that ensures that your brand objectives are met? One that spurs the customer into taking action? If yes, then you’re just a few steps away from getting a video like this. So, let’s get Video Animation, shall we?",
}

const Banner = ({ video }) => {
    return (

        <section className={`${styles.mainBanner} ${video ? styles.pricingPage : ''}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={7} className={styles.bannerContent}>
                        <div className="tagTitle">About</div>
                        <h1>Video Animation</h1>
                        <p>A company that is passionate in crafting excellent animations that<br /> serve as a means of purpose and identity for our clients.</p>
                        <Link href="" className="readMoreBtn">Dive in now <ArrowBtn /></Link>
                    </Col>
                </Row>
            </Container>
            <video autoPlay muted loop preload="auto" aria-label="Background video" className={styles.bannerVideo}>
                <source src='/videos/pricingVideo.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section >
    )
}
export default Banner