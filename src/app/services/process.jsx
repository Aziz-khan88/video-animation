import React from 'react'
import styles from "@/styles/services/process.module.scss";
import { Col, Container, Row } from 'react-bootstrap';

export default function Process() {
    return (
        <section className={`${styles.processSection} p-100`}>
            <Container>
                <Row>
                    <Col md={6} className={styles.processCard}>
                        <h2>Process</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor arcu lectus mauris ut velit sit.</p>
                    </Col>
                </Row>
                <Row className={styles.processCardBox}>
                    <Col md={6}>
                        <div className={styles.processCard}>
                            <span>01</span>
                            <h4>Ideation</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Et sed justo felis donec lacus vel. Fringilla et lectus congue tristique leo quis. Aliquam facilisis porttitor facilisis id enim. Et dui ut orci cursus lacus nulla cursus urna lectus.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.processCard}>
                            <span>02</span>
                            <h4>Development</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Et sed justo felis donec lacus vel. Fringilla et lectus congue tristique leo quis. Aliquam facilisis porttitor facilisis id enim. Et dui ut orci cursus lacus nulla cursus urna lectus.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.processCard}>
                            <span>03</span>
                            <h4>Animation Production</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Et sed justo felis donec lacus vel. Fringilla et lectus congue tristique leo quis. Aliquam facilisis porttitor facilisis id enim. Et dui ut orci cursus lacus nulla cursus urna lectus.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.processCard}>
                            <span>04</span>
                            <h4>Finalization</h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Et sed justo felis donec lacus vel. Fringilla et lectus congue tristique leo quis. Aliquam facilisis porttitor facilisis id enim. Et dui ut orci cursus lacus nulla cursus urna lectus.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}