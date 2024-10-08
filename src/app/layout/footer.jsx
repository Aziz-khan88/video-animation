"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/layout/footer.module.scss"
import ContactFrom from "@/src/app/home/components/contactfrom"
import Image from "next/image"
import IMG from "media/home/rotateImg.webp"
import { Facebook, FavLogo, Instagram, Linkedin, Twitter, Youtube } from "@/src/app/app-constants"
import Link from "next/link"
import { useEffect, useState } from "react";


const SocailLinks = [
    {
        icon: <Instagram />,
        url: "#"
    },
    {
        icon: <Facebook />,
        url: "#"
    },
    {
        icon: <Twitter />,
        url: "#"
    },
    {
        icon: <Linkedin />,
        url: "#"
    },
    {
        icon: <Youtube />,
        url: "#"
    },
]

const QuickLinks = [
    {
        name: "Home",
        url: "#"
    },
    {
        name: "Portfolio",
        url: "#"
    },
    {
        name: "Pricing",
        url: "#"
    },
    {
        name: "Contact Us",
        url: "#"
    },
]

const ServicesLinks = [
    {
        name: "3D Animation",
        url: "#"
    },
    {
        name: "2D Animation",
        url: "#"
    },

    {
        name: "Motion Graphics",
        url: "#"
    },
    {
        name: "Whiteboard Animation",
        url: "#"
    },
    {
        name: "Video Editing",
        url: "#"
    },
    {
        name: "Logo Animation",
        url: "#"
    },

    {
        name: "CGI - VFX",
        url: "#"
    },
    {
        name: "Infographics",
        url: "#"
    },
    {
        name: "Hybrid & Cel",
        url: "#"
    },
    {
        name: "Architectural Visualization",
        url: "#"
    },
]


const Footer = () => {
    const [activeClass, setActiveClass] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveClass((prev) => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <section className={styles.topFooterSection}>
                <Container className={styles.footerBox}>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.footerBG}>
                                <div className={styles.footerContent}>
                                    <h3>Unlock Your Story’s Potential</h3>
                                    <p>Let’s Animate Your Dreams!</p>
                                    <div className={styles.rotateImg}>
                                        <Image src={IMG.src} alt="rotateImg" width={190} height={190} />
                                    </div>
                                </div>
                                <div className={styles.footerFrom}>
                                    <ContactFrom />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.FooterSection}>
                <Container >
                    <Row>
                        <Col lg={5} md={6}>
                            <FavLogo />
                            <div className={styles.linksItem}>
                                <ul>
                                    {SocailLinks.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.url}>{item.icon}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={2} md={6}>
                            <div className={styles.mainlinks}>
                                <h6>Quick Links</h6>
                                <ul>
                                    {QuickLinks.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.url}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={5} md={12}>
                            <div className={styles.mainlinks}>
                                <h6>Services Links</h6>
                                <ul className={styles.serviceslinks}>
                                    {ServicesLinks.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.url}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.copyRightSection}>
                <Container className="h-100">
                    <Row className={`${styles.borderStyle} h-100`} >
                        <Col md={6} className="my-auto">
                            <div className={styles.txtCopyRight}>© Copyright 2024 - Video Animation </div>
                        </Col>
                        <Col md={6} className="my-auto">
                            <ul>
                                <li><Link href="#">Terms of Use</Link></li>
                                <li><Link href="#"> Privacy Policy</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.animationsection} ${activeClass ? styles.active : ""}`}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col className="mt-auto">
                            <div className={styles.animatedTxt}>Animati<span className={styles.animatedO}>o</span>n</div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Footer