import { Row, Col, Container } from "react-bootstrap";
import styles from "@/styles/home/spotlight.module.scss";
import Link from "next/link";
import { ArrowBtn } from "@/src/app/app-constants";


const images = [
    { url: '/videos/spotlight/spotlight1.mp4' },
    { url: '/videos/spotlight/spotlight2.mp4' },
    { url: '/videos/spotlight/spotlight3.mp4' }
];
const SpotLight = () => {
    return (
        <section className={`${styles.spotlightSection}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={12} className="my-auto">
                        <div className={styles.sportlightContent}>
                            <div className={styles.leftText}>
                                <h4>Step<br />
                                    into the</h4>
                            </div>
                            <div className={styles.rightText}>
                                <h4>Spotlight</h4>
                            </div>
                        </div>
                        <div className={styles.iamgeContainer}>
                            {images.map((item, index) => (
                                <div key={index} className={styles.imageBox}>
                                    <video autoPlay muted loop preload="auto" aria-label="Background video" className={styles.bannerVideo}>
                                        <source src={item.url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ))}
                            <div className={styles.sportlightCTA}>
                                <Link href="#" className="readMoreBtn bgColor">Let’s Discuss <ArrowBtn /></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};


export default SpotLight