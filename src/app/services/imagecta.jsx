import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/services/imagecta.module.scss"
import Link from 'next/link'
import { ArrowBtn } from '@/src/app/app-constants'
import bannerImg from "media/services/imagecta/bannerImg.webp" 
import Image from 'next/image'


const ImageCta = () => {
    return (
        <section className={styles.imagectaSection}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col lg-={10} className='m-auto text-center'>
                        <div className={styles.imageContent}>
                            <h2>Explore Our Animation<br /> Services Today!</h2>
                            <Link href="#" className="readMoreBtn bgColor">Let’s Discuss <ArrowBtn /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Image src={bannerImg} className={styles.bannerimage} />
            {/* <video autoPlay muted loop preload="auto" aria-label="Background video" className={styles.bannerimage}>
                <source src='/videos/makeAnimation.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
        </section>
    )
}

export default ImageCta