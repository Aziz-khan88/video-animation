"use client"
import { useState, useRef, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "@/styles/home/testimonial.module.scss";
import Image from 'next/image';
import IMG from "media/home/testimonial/testimonialImg.webp";
import useEmblaCarousel from 'embla-carousel-react';
import { Pause, Play, SilderArrows } from '@/src/app/app-constants';

const Testimonials = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggleVideo = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };


    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => {
            const current = emblaApi.selectedScrollSnap();
            setActiveIndex(current);
        };
        emblaApi.on('select', onSelect);
    }, [emblaApi]);



    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <section className={`${styles.testimonialSection} p-100`}>
            <Container>
                <Row>
                    <Col lg={5} className='my-auto'>
                        <div className="tagTitle">Testimonials</div>
                        <h3>Some work we are proud of</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    </Col>
                    <Col lg={7} className={`${styles.ratingImg} my-auto`}>
                        <Image src={IMG.src} alt='All Rating Website' width={506} height={58} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {slides.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.testimonialBox}>
                                                <div className={styles.testimonialContent}>
                                                    <div className={styles.testimonialHeading}>
                                                        <div className={styles.testimonialName}>{item.name}</div>
                                                        <div className={styles.testimonialJob}>{item.job}</div>
                                                    </div>
                                                    <div className={styles.testimonialButton} onClick={() => handleToggleVideo(index)}>
                                                        {activeIndex === index ? <Pause /> : <Play />}
                                                    </div>
                                                </div>
                                                {activeIndex === index ? (
                                                    <video
                                                        autoPlay
                                                        loop
                                                        preload="auto"
                                                        aria-label="Background video"
                                                        className={styles.testVideo}
                                                    >
                                                        <source src={item.video} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                ) : (
                                                    <Image src={item.img} alt={item.name} fill />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.embla_container}>
                                <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                    <SilderArrows direction="prev" />
                                </div>
                                <div className={styles.embla_next} onClick={nextButtonHandler}>
                                    <SilderArrows direction="next" />
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
