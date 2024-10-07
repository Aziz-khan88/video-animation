import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/home/videocta.module.scss"
import Link from 'next/link'
import { ArrowBtn } from '@/src/app/app-constants'


const VideoCta = () => {
    return (
        <section className={styles.videoctaSection}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col lg-={10} className='m-auto text-center'>
                        <div className={styles.videoContent}>
                            <h2>Make Your Brand Stand Out</h2>
                            <Link href="#" className="readMoreBtn bgColor">Let’s Discuss <ArrowBtn /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <video autoPlay muted loop preload="auto" aria-label="Background video" className={styles.bannerVideo}>
                <source src='/videos/makeAnimation.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default VideoCta