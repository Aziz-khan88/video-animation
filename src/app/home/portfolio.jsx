"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Row, Col, Container } from "react-bootstrap"
import styles from "@/styles/home/portfolio.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import { FavIcon } from '@/src/app/app-constants'

const Portfolio = (props) => {
    const { options, caseStudies } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const [activeTab, setActiveTab] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const slides = caseStudies[activeTab].slides;

    useEffect(() => {
        if (emblaApi) {
            setScrollSnaps(emblaApi.scrollSnapList());
            emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
        }
    }, [emblaApi, activeTab]);

    const handleTabChange = (index) => {
        setActiveTab(index);
        if (emblaApi) emblaApi.scrollTo(0);
    };

    const handleDotClick = (index) => {
        if (emblaApi) emblaApi.scrollTo(index);
    };


    return (
        <section className={`${styles.portfolioSection} p-150`}>
            <Container>
                <Row>
                    <Col>
                        <h2>Portfolio</h2>
                        <ul className={styles.tabsBox}>
                            {caseStudies.map((study, index) => (
                                <li key={index} onClick={() => handleTabChange(index)} className={`${styles.tabsItem} ${activeTab === index ? styles.active : ''}`}>
                                    {study.title}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col md={12} className='p-0'>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {slides.map((slide, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.slideBox}>
                                                <Image
                                                    src={slide.image}
                                                    alt={`Slide ${index + 1}`}
                                                    fill
                                                />
                                                <div className={styles.videoButton}>
                                                    <div className="buttonCommon">
                                                        <Link href="">
                                                            <FavIcon />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.embla__controls}>
                                <div className={styles.embla__dots}>
                                    <span className={styles.left}>0{selectedIndex + 1}</span>
                                    {scrollSnaps.map((_, index) => (
                                        <div key={index} className={`${styles.emblaPoints} ${index === selectedIndex ? styles.active : ""}`} onClick={() => handleDotClick(index)}>
                                        </div>
                                    ))}
                                    <span className={styles.right}>0{slides.length}</span>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}
export default Portfolio