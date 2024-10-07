"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/faqs.module.scss";
import { MinusFaqIcon, PlusFaqIcon } from "@/src/app/app-constants";

const list = [
    {
        title: "How much does an animation company cost?",
        txt: (<p>The cost to hire an animation company can vary upon quality of animation, timeline of project, and expertise or brand name of the company. For a usual 30—second animated explainer video, the cost for production can be anywhere between $2500 and $5000. Whereas, if you opt for more detailed animation with custom characters, and professional artwork, the cost can easily go up to $7000 per minute of animation.</p>)
    },
    {
        title: "What is your video production process like?",
        txt: (<p>The cost to hire an animation company can vary upon quality of animation, timeline of project, and expertise or brand name of the company. For a usual 30—second animated explainer video, the cost for production can be anywhere between $2500 and $5000. Whereas, if you opt for more detailed animation with custom characters, and professional artwork, the cost can easily go up to $7000 per minute of animation.</p>)
    },
    {
        title: "Does Video Animation Studio focus on corporate video production?",
        txt: (<p>The cost to hire an animation company can vary upon quality of animation, timeline of project, and expertise or brand name of the company. For a usual 30—second animated explainer video, the cost for production can be anywhere between $2500 and $5000. Whereas, if you opt for more detailed animation with custom characters, and professional artwork, the cost can easily go up to $7000 per minute of animation.</p>)
    },
    {
        title: "What types of video content do you produce?",
        txt: (<p>The cost to hire an animation company can vary upon quality of animation, timeline of project, and expertise or brand name of the company. For a usual 30—second animated explainer video, the cost for production can be anywhere between $2500 and $5000. Whereas, if you opt for more detailed animation with custom characters, and professional artwork, the cost can easily go up to $7000 per minute of animation.</p>)
    }
]

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`${styles.faqsSection} p-100`}>
            <Container>
                <Row>
                    <Col xl={12} lg={12} md={12}>
                        <h2>Frequently Asked Question?</h2>
                    </Col>
                    <Col xl={12} lg={12} md={12} >
                        {list.map((items, index) => (
                            <div className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                <div
                                    className={styles.faqsTitle}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {items.title}
                                    <div className={`${styles.iconBox} ${activeIndex === index ? styles.active : ""}`}>
                                        <PlusFaqIcon />
                                    </div>
                                </div>
                                <div className={styles.faqscontent}>
                                    {items.txt}
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default Faqs;
