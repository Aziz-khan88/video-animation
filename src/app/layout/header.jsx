"use client"
import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"
import styles from "@/styles/layout/header.module.scss"
import { ArrowBtn, ClosedIcon, DefaultLogo, NavIcon, VariantLogo } from "@/src/app/app-constants"
import { useState, useEffect } from 'react';

const Header = () => {
    const [showDefault, setShowDefault] = useState(true);
    const [isActive, setIsActive] = useState(false);
    // const [isSubMenuActive, setIsSubMenuActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowDefault((prev) => !prev);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => {
        setIsActive((prev) => !prev);
        //    setIsSubMenuActive(false);
    };

    // const toggleSubMenu = () => {
    //     setIsSubMenuActive((prev) => !prev);
    // };

    return (
        <section className={styles.headerSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col sm={6} className="my-auto">
                        <Link href="#" className={styles.mainLogoBox}>
                            <div className={`${styles.mainLogo} ${showDefault ? styles.show : styles.hide}`}>
                                <DefaultLogo />
                            </div>
                            <div className={`${styles.mainLogo} ${showDefault ? styles.hide : styles.show}`}>
                                <VariantLogo />
                            </div>
                        </Link>
                    </Col>
                    <Col sm={6} className="my-auto">
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
                                            <li >
                                                <Link href="#">Services <ArrowBtn /></Link>
                                                {/* <ul className={`${styles.haschildMenu} ${isSubMenuActive ? styles.active : ''}`}>
                                                    <li><Link href="#">2D Animation</Link></li>
                                                    <li><Link href="#">3D Animation</Link></li>
                                                    <li><Link href="#">Whiteboard Animation</Link></li>
                                                    <li><Link href="#">Motion Graphics</Link></li>
                                                    <li><Link href="#">Video Editing</Link></li>
                                                    <li><Link href="#">Logo Animation</Link></li>
                                                    <li><Link href="#">Architectural Visualization</Link></li>
                                                    <li><Link href="#">CGI-VFX</Link></li>
                                                    <li><Link href="#">Infographics</Link></li>
                                                    <li><Link href="#">Hybrid & Cel</Link></li>
                                                </ul> */}

                                            </li>
                                            <li><Link href="#">Pricing <ArrowBtn /></Link></li>
                                            <li><Link href="#">About Us <ArrowBtn /></Link></li>
                                            <li><Link href="#">Contact Us <ArrowBtn /></Link></li>
                                        </ul>
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
