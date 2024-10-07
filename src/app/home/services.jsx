"use client";
import { useState } from 'react';
import styles from "@/styles/home/services.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowBtn, Polygon } from "@/src/app/app-constants";
import Link from "next/link";

const services = [
    { title: '2D Animation', description: 'Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit.', url: '/videos/servicesVideo.mp4' },
    { title: '3D Animation', description: 'Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit.', url: '/videos/bannerVideo.mp4' },
    { title: 'White Board Animation', description: 'Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit.', url: '/videos/servicesVideo.mp4' },
    { title: 'Hybrid & Cel', description: 'Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit.', url: '/videos/bannerVideo.mp4' },
    { title: 'Motion Graphics', description: 'Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit.', url: '/videos/servicesVideo.mp4' },
    { title: 'CGI-VFX', description: 'Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor lectus mauris ut velit sit.', url: '/videos/bannerVideo.mp4' },
];

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className={styles.serviceSection}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.serviceBox}>
                            <h2>Services</h2>
                            <ul className={styles.serviceItemBox}>
                                {services.map((service, index) => (
                                    <li
                                        key={index}
                                        className={`${styles.serviceItem} ${activeIndex === index ? styles.active : ''}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        <h4><Polygon />{service.title}</h4>
                                        <p>{service.description}</p>
                                        <Link href="">
                                            Let’s Discuss <ArrowBtn />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <video
                key={activeIndex}
                autoPlay
                muted
                loop
                preload="auto"
                aria-label="Background video"
                className={styles.bannerVideo}
            >
                <source src={services[activeIndex].url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
};

export default Services;
