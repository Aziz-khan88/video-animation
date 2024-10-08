import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/about/banner.module.scss"
import Link from 'next/link'
import { ArrowBtn } from '../../app-constants'
import IMG from "media/about/banner.png"
import Image from 'next/image'

const Banner = () => {
    return (
        <section className={styles.mainBanner}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={7} className="my-auto">
                        <div className="tagTitle">About</div>
                        <h1>Video Animation</h1>
                        <p>A company that is passionate in crafting excellent animations that serve as a means of purpose and identity for our clients. At Video Animation you can find all sorts of animations with various languages, styles and concepts. We are an all-in-one animation company that is fully transparent to its clients, which lets the clients witness the whole video animation process to produce the best results as per their needs.</p>
                        <p>Our team has served clients of all niches, whether you need photo realistic or motion graphics animations, we offer a multitude of animation services that cover each and every type of animation video.</p>
                        <Link href="" className="readMoreBtn">Dive in now <ArrowBtn /></Link>
                    </Col>
                    <Col md={5} className="my-auto">
                        <Image src={IMG.src} alt='Video Animation' width={612} height={400} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner