"use client";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/home/whychoose.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowBtn } from "@/src/app/app-constants";
import Link from "next/link";

const WhyChooes = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const onSelect = () => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();
    }, [emblaApi]);

    const getPrevIndex = () => {
        return selectedIndex === 0 ? slides.length - 1 : selectedIndex - 1;
    };

    const getNextIndex = () => {
        return selectedIndex === slides.length - 1 ? 0 : selectedIndex + 1;
    };

    const handleDotClick = (index) => {
        if (!emblaApi) return;
        emblaApi.scrollTo(index);
    };

    const currentSlide = slides[selectedIndex];
    return (
        <section className={`${styles.whyChooesSection} p-100`}>
            <Container>
                <Row>
                    <Col md={12}>
                        <h2>Why Choose Us</h2>
                    </Col>
                    <Col md={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {slides.map((item, index) => {
                                        const isActive = index === selectedIndex ? styles.active : "";
                                        const isPrev = index === getPrevIndex() ? styles.prev : "";
                                        const isNext = index === getNextIndex() ? styles.next : "";
                                        return (
                                            <>
                                                <div
                                                    className={`${styles.embla__slide} embla__class - names ${isActive} ${isPrev} ${isNext} `}
                                                    key={index}
                                                >
                                                    <div className={styles.embla__slide__img}>
                                                        <Image src={item.Img} alt={item.title} height={450} width={330} />
                                                    </div>
                                                </div>

                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className={styles.embla__controls}>
                                <div className={styles.embla__dots}>
                                    {scrollSnaps.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.embla__dot} ${index === selectedIndex ? styles.active : ""} `}
                                            onClick={() => handleDotClick(index)}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.whyChooesBox}>
                                <h5>{currentSlide.title}</h5>
                                <p>{currentSlide.txt}</p>
                                <Link href={currentSlide.link} className="">
                                    Let’s Discuss <ArrowBtn />
                                </Link>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container >
        </section >

    );
};

export default WhyChooes;
