"use client"
import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"
import styles from "@/styles/layout/header.module.scss"
import { ArrowBtn, ClosedIcon, DefaultLogo, NavIcon, VariantLogo } from "@/src/app/app-constants"
import { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "@/src/app/app-constants"


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
const Header = () => {
    const [showDefault, setShowDefault] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [isSubMenuActive, setIsSubMenuActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowDefault((prev) => !prev);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => {
        setIsActive(!isActive);
        setIsSubMenuActive(false);
        if (!isActive) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
            setIsSubMenuActive(false);

        }
    };

    const toggleSubMenu = () => {
        setIsSubMenuActive((prev) => !prev);
    };

    return (
        <section className={styles.headerSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xs={6} className="my-auto">
                        <Link href="#" className={styles.mainLogoBox}>
                            <div className={`${styles.mainLogo} ${showDefault ? styles.show : styles.hide}`}>
                                <DefaultLogo />
                            </div>
                            <div className={`${styles.mainLogo} ${showDefault ? styles.hide : styles.show}`}>
                                <VariantLogo />
                            </div>
                        </Link>
                    </Col>
                    <Col xs={6} className="my-auto">
                        <div
                            className={`${styles.menuIcon} ${isActive ? styles.active : ''}`}
                            onClick={toggleMenu}
                        >
                            {isActive ? <ClosedIcon /> : <NavIcon />}
                        </div>
                        <section className={`${styles.mainMain} ${isActive ? styles.active : ''}`}>
                            <Container>
                                <Row>
                                    <Col>
                                        <ul className={styles.mainMainItems}>
                                            <li><Link href="#">Home <ArrowBtn /></Link></li>
                                            <li><Link href="#">Portfolio <ArrowBtn /></Link></li>
                                            <li onClick={toggleSubMenu}>
                                                <Link href="#">Services <ArrowBtn /></Link>
                                                <ul className={`${styles.haschildMenu} ${isSubMenuActive ? styles.active : ''}`}>
                                                    <li onClick={toggleMenu}><Link href="#" >2D Animation</Link></li>
                                                    <li><Link href="#">3D Animation</Link></li>
                                                    <li><Link href="#">Whiteboard Animation</Link></li>
                                                    <li><Link href="#">Motion Graphics</Link></li>
                                                    <li><Link href="#">Video Editing</Link></li>
                                                    <li><Link href="#">Logo Animation</Link></li>
                                                    <li><Link href="#">Architectural Visualization</Link></li>
                                                    <li><Link href="#">CGI-VFX</Link></li>
                                                    <li><Link href="#">Infographics</Link></li>
                                                    <li><Link href="#">Hybrid & Cel</Link></li>
                                                </ul>

                                            </li>
                                            <li><Link href="#">Pricing <ArrowBtn /></Link></li>
                                            <li><Link href="#">About Us <ArrowBtn /></Link></li>
                                            <li><Link href="#">Contact Us <ArrowBtn /></Link></li>
                                        </ul>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className={styles.headerCopyRight}>
                                            <div className={styles.leftLinks}>
                                                <ul>
                                                    <li><Link href="#">Terms of Use</Link></li>
                                                    <li><Link href="#"> Privacy Policy</Link></li>
                                                </ul>
                                            </div>
                                            <div className={styles.rightLinks}>
                                                <ul>
                                                    {SocailLinks.map((item, index) => (
                                                        <li key={index}>
                                                            <Link href={item.url}>{item.icon}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header
