'use client'
import styles from "@/styles/portfolio/portfolioTabs.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import image1 from "media/portfolio/1.webp";
import image2 from "media/portfolio/2.webp";
import image3 from "media/portfolio/3.webp";
import image4 from "media/portfolio/4.webp";
import image5 from "media/portfolio/5.webp";
import image6 from "media/portfolio/6.webp";
import image7 from "media/portfolio/7.webp";
import image8 from "media/portfolio/8.webp";
import image9 from "media/portfolio/9.webp";



const PortfolioTabs = () => {
    return (
        <>

            <section className={`${styles.portfolioSection} p-150`}>
                <Container>
                    <Row>
                        <Col>
                            <ul className={styles.tabHeaders}>
                                <li>Filter By</li>
                                <li className={styles.active}>3D Animation</li>
                                <li>2D Animation</li>
                                <li>Hybrid & Cel</li>
                                <li>Motion Graphics</li>
                                <li>CGI-VFX</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col className="p-0">
                            <div className={`${styles.portfolio}`}>
                                <div className={`${styles.gridContainer}`}>
                                    <div className={`${styles.item1}`}>
                                        <Image src={image1} width={960} height={480} />
                                    </div>
                                    <div className={`${styles.item2}`}><Image src={image2} width={960} height={480} /></div>
                                    <div className={`${styles.item3}`}><Image src={image3} width={640} height={350} /></div>
                                    <div className={`${styles.item4}`}><Image src={image4} width={640} height={350} /></div>
                                    <div className={`${styles.item5}`}><Image src={image5} width={1280} height={700} /></div>
                                    <div className={`${styles.item6}`}><Image src={image6} width={960} height={480} /></div>
                                    <div className={`${styles.item7}`}><Image src={image7} width={960} height={480} /></div>
                                    <div className={`${styles.item8}`}><Image src={image8} width={1920} height={610} /></div>
                                    <div className={`${styles.item9}`}><Image src={image9} width={1280} height={700} /></div>
                                    <div className={`${styles.item10}`}><Image src={image3} width={640} height={350} /></div>
                                    <div className={`${styles.item11}`} ><Image src={image4} width={640} height={350} /></div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
export default PortfolioTabs;