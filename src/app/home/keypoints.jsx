"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/keypoints.module.scss";
import ByNumber from "@/src/app/home/components/bynumber";
import ByAwards from "@/src/app/home/components/byawards";
import ByClients from "@/src/app/home/components/byclients";

const keyPointsData = [
    {
        title: "By the Numbers",
        content: <ByNumber />,
    },
    {
        title: "Our Awards",
        content: <ByAwards />,
    },
    {
        title: "Our Clients",
        content: <ByClients />,
    }
];

const KeyPoints = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={`${styles.aboutSection} p-100`}>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className={styles.keypointsContainer}>
                            <div className={styles.keypointsTitle}>
                                <ul className={styles.keypointsListing}>
                                    {keyPointsData.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`${styles.listingItem} ${activeIndex === index ? styles.active : ""}`}
                                            onClick={() => setActiveIndex(index)}
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`${styles.keypointsContent} ${styles.active}`}>
                                {keyPointsData[activeIndex].content}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default KeyPoints;
