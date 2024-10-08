import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/portfolio/components/banner.module.scss"
import Link from "next/link"
import { ArrowBtn, FavIcon } from "@/src/app/app-constants"

const Banner = () => {
    return (
        <section className={styles.bannerSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} className="mt-auto">
                        <div className={styles.bannerContentBox}>
                            <div className={styles.bannerHeading}>
                                <h1>Portfolio</h1>
                                <p>Lorem ipsum dolor sit amet,adipiscing<br />
                                    Lorem ipsum dolor sit dolor Ipsum.</p>
                                <Link href="" className={`${styles.bannerBtn} readMoreBtn`}>Let's Discuss <ArrowBtn /></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <video autoPlay muted loop preload="auto" aria-label="Background video" className={styles.bannerVideo}>
                <source src='/videos/bannerVideo.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default Banner