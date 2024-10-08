import React from 'react'
import styles from "@/styles/pricing/package.module.scss";
import { Col, Container, Row } from 'react-bootstrap';
import { PackageTick } from '@/src/app/app-constants';

const data = {
    subtitle: "Animation Cost",
    title: "Pricing Plans",
    content: "We have something in store for everyone, and that something is affordable services",
}

export default function Packages() {
    return (
        <section className={`${styles.PrincingSec} p-100`}>
            <Container >
                <Row className={styles.PrincingContent}>
                    <Col xl={6} lg={6} md={6} className={styles.PrincingContentLeft}>
                        <span>{data?.subtitle}</span>
                        <div className={styles.heading}>{data?.title}</div>
                        <p>{data?.content}</p>
                    </Col>
                    <Col xl={6} lg={6} md={6} className={styles.PrincingContentRight}>
                        <span>Select Service</span>
                        <select name="menu" id="meun-items" className={styles.PrincingSelect}>
                            <option disabled selected>2D Animation</option>
                            <option value="3D Animation">3D Animation</option>
                            <option value="Whiteboard Animation">Whiteboard Animation</option>
                            <option value="Motion Graphics">Motion Graphics</option>
                            <option value="Video Editing">Video Editing</option>
                            <option value="Logo Animation">Logo Animation</option>
                            <option value="Architectural Visualization">Architectural Visualization</option>
                            <option value="CGI-VFX">CGI-VFX</option>
                            <option value="Infographics">Infographics</option>
                            <option value="Hybrid & Cel">Hybrid & Cel</option>
                        </select>
                    </Col>
                </Row>

                <div className={styles.pricing}>

                    <div className={styles.pricingBox}>
                        <div className={styles.box}>
                            <span className={styles.package}>Basic Package</span>
                            <h4>$500.00</h4>
                            <p>We have something in store for everyone, and that something is affordable services</p>
                            <button className={styles.button}>Get Started</button>
                        </div>

                        <ul className={styles.pricingList}>
                            <li> <PackageTick /> 30sec Duration</li>
                            <li> <PackageTick /> 30sec Duration</li>
                            <li> <PackageTick /> 30sec Duration</li>
                            <li> <PackageTick /> 30sec Duration</li>
                            <li> <PackageTick /> 30sec Duration</li>
                            <li> <PackageTick /> 30sec Duration</li>
                        </ul>
                    </div>

                    <div className={styles.pricingBox}>
                        <div className={styles.box}>
                            <span className={styles.package}>Basic Package</span>
                            <h4>$500.00</h4>
                            <p>We have something in store for everyone, and that something is affordable services</p>
                            <button className={styles.button}>Get Started</button>
                        </div>

                        <ul className={styles.pricingList}>
                            <li> <PackageTick /> 30sec Duration</li>
                            <li> <PackageTick /> 30sec Duration</li>
                            <li> <PackageTick /> 30sec Duration</li>
                            <li> <PackageTick /> 30sec Duration</li>
                            <li> <PackageTick /> 30sec Duration</li>
                            <li> <PackageTick /> 30sec Duration</li>
                        </ul>
                    </div>

                    <div className={styles.pricingBox}>
                        <div className={styles.box}>
                            <span className={styles.package}>Basic Package</span>
                            <h4>$500.00</h4>
                            <p>We have something in store for everyone, and that something is affordable services</p>
                            <button className={styles.button}>Get Started</button>
                        </div>

                        <ul className={styles.pricingList}>
                            <li> <PackageTick /> 30sec Duration</li>
                            <li> <PackageTick /> 30sec Duration</li>
                            <li> <PackageTick /> 30sec Duration</li>
                            <li> <PackageTick /> 30sec Duration</li>
                            <li> <PackageTick /> 30sec Duration</li>
                            <li> <PackageTick /> 30sec Duration</li>
                        </ul>
                    </div>

                </div>
            </Container>
        </section>
    )
}
