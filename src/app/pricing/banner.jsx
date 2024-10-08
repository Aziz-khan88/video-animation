import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/home/banner.module.scss"
import Link from 'next/link'
import { ArrowBtn, FavIcon } from '@/src/app/app-constants'


const Banner = () => {
    return (
        <section className={styles.bannerSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} className="mt-auto">
                        <div className={styles.bannerContentBox}>
                            <div className={styles.bannerHeading}>
                                <h1>Want to Jump Straight in & Get the Video Made?</h1>
                                <p>A company that is passionate in crafting excellent animations that serve as a means of purpose and identity for our clients.</p>
                                <Link href="" className="readMoreBtn">Dive in now <ArrowBtn /></Link>
                            </div>
                            <div className={styles.bannerButton}>
                                <div className="buttonCommon">
                                    <Link href="">
                                        <FavIcon />
                                    </Link>
                                    <span>Show Reel</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <video autoPlay muted loop preload="auto" aria-label="Background video" className={styles.bannerVideo}>
                <source src='/videos/pricingVideo.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>

    )
}
export default Banner