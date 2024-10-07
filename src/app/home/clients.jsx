"use client";
import { Col, Container, Row } from "react-bootstrap";
import Logo1 from "media/home/clientslogo/logo1.webp";
import Logo2 from "media/home/clientslogo/logo2.webp";
import Logo3 from "media/home/clientslogo/logo3.webp";
import Logo4 from "media/home/clientslogo/logo4.webp";
import Logo5 from "media/home/clientslogo/logo5.webp";
import Logo6 from "media/home/clientslogo/logo6.webp";
import Logo7 from "media/home/clientslogo/logo7.webp";
import Logo8 from "media/home/clientslogo/logo8.webp";
import FMLogo1 from "media/home/frameworklogo/logo1.webp";
import FMLogo2 from "media/home/frameworklogo/logo2.webp";
import FMLogo3 from "media/home/frameworklogo/logo3.webp";
import FMLogo4 from "media/home/frameworklogo/logo4.webp";
import FMLogo5 from "media/home/frameworklogo/logo5.webp";
import FMLogo6 from "media/home/frameworklogo/logo6.webp";
import FMLogo7 from "media/home/frameworklogo/logo7.webp";
import FMLogo8 from "media/home/frameworklogo/logo8.webp";

import Image from "next/image";
import styles from "@/styles/home/clients.module.scss";
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const ClientsLogos = [
    { logo: Logo1.src },
    { logo: Logo2.src },
    { logo: Logo3.src },
    { logo: Logo4.src },
    { logo: Logo5.src },
    { logo: Logo6.src },
    { logo: Logo7.src },
    { logo: Logo8.src },
];

const FrameworkLogos = [
    { logo: FMLogo1.src },
    { logo: FMLogo2.src },
    { logo: FMLogo3.src },
    { logo: FMLogo4.src },
    { logo: FMLogo5.src },
    { logo: FMLogo6.src },
    { logo: FMLogo7.src },
    { logo: FMLogo8.src },
];

const Clients = () => {
    const [emblaRefClients] = useEmblaCarousel(
        { loop: true },
        [
            AutoScroll({
                delay: 3000,
                speed: 3,
                playOnInit: true,
            })
        ]
    );

    const [emblaRefFramework] = useEmblaCarousel(
        { loop: true, direction: 'rtl' },
        [
            AutoScroll({
                delay: 3000,
                speed: 3,
                playOnInit: true,
            })
        ]
    );

    return (
        <section className={`${styles.clientsSection} p-100`}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Clients</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor arcu lectus mauris ut velit sit.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="m-auto">
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRefClients}>
                                <div className={styles.embla__container}>
                                    {ClientsLogos.map((item, index) => (
                                        <div className={styles.embla__slide} key={`client-${index}`}>
                                            <div className={styles.imgBox}>
                                                <Image src={item.logo} alt={`Client Logo ${index + 1}`} width={316} height={165} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={styles.embla} dir="rtl">
                            <div className={styles.embla__viewport} ref={emblaRefFramework}>
                                <div className={styles.embla__container}>
                                    {FrameworkLogos.map((item, index) => (
                                        <div className={styles.embla__slide} key={`framework-${index}`}>
                                            <div className={styles.imgBox}>
                                                <Image src={item.logo} alt={`Framework Logo ${index + 1}`} width={316} height={165} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Clients;
