"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/industries.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Link from "next/link"
import { ArrowBtn } from "../app-constants"

const options = { loop: true, align: 'start' }

const slides = [
    {
        title: (<>Medical<br />& Healthcare</>),
        txt: "Lorem ipsum dolor sit amet consectetur. Fames quam blandit morbi feugiat sed amet etiam. Fermentum iaculis ut a mauris. Consectetur eget eget sollicitudin dui sociis sit vulputate. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse."
        , url: "#"
    },
    {
        title: "Engineering",
        txt: "Lorem ipsum dolor sit amet consectetur. Fames quam blandit morbi feugiat sed amet etiam. Fermentum iaculis ut a mauris. Consectetur eget eget sollicitudin dui sociis sit vulputate. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse."
        , url: "#"
    },
    {
        title: "Education",
        txt: "Lorem ipsum dolor sit amet consectetur. Fames quam blandit morbi feugiat sed amet etiam. Fermentum iaculis ut a mauris. Consectetur eget eget sollicitudin dui sociis sit vulputate. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse."
        , url: "#"
    },
    {
        title: (<>Medical
            <br />
            & Healthcare</>),
        txt: "Lorem ipsum dolor sit amet consectetur. Fames quam blandit morbi feugiat sed amet etiam. Fermentum iaculis ut a mauris. Consectetur eget eget sollicitudin dui sociis sit vulputate. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse."
        , url: "#"
    },
    {
        title: "Engineering",
        txt: "Lorem ipsum dolor sit amet consectetur. Fames quam blandit morbi feugiat sed amet etiam. Fermentum iaculis ut a mauris. Consectetur eget eget sollicitudin dui sociis sit vulputate. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse."
        , url: "#"
    },
    {
        title: "Education",
        txt: "Lorem ipsum dolor sit amet consectetur. Fames quam blandit morbi feugiat sed amet etiam. Fermentum iaculis ut a mauris. Consectetur eget eget sollicitudin dui sociis sit vulputate. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse."
        , url: "#"
    },
    {
        title: (<>Medical
            <br />
            & Healthcare</>),
        txt: "Lorem ipsum dolor sit amet consectetur. Fames quam blandit morbi feugiat sed amet etiam. Fermentum iaculis ut a mauris. Consectetur eget eget sollicitudin dui sociis sit vulputate. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse."
        , url: "#"
    },
    {
        title: "Engineering",
        txt: "Lorem ipsum dolor sit amet consectetur. Fames quam blandit morbi feugiat sed amet etiam. Fermentum iaculis ut a mauris. Consectetur eget eget sollicitudin dui sociis sit vulputate. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse."
        , url: "#"
    },
    {
        title: "Education",
        txt: "Lorem ipsum dolor sit amet consectetur. Fames quam blandit morbi feugiat sed amet etiam. Fermentum iaculis ut a mauris. Consectetur eget eget sollicitudin dui sociis sit vulputate. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse. Hendrerit interdum commodo fames ac arcu. Hendrerit libero vitae tellus diam cum suspendisse."
        , url: "#"
    },
]

const Industries = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    return (
        <section className={`${styles.industriesSection} p-100`}>
            <Container>
                <Row className="headingROw">
                    <Col lg={7} md={7}>
                        <h2>Industries</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Fringilla orci vitae vel cursus. Quis dolor arcu lectus mauris ut velit sit.</p>
                    </Col>
                </Row>
            </Container>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {slides.map((item, index) => (
                            <div className={`${styles.embla__slide}`} key={index}>
                                <div className={styles.industriesBox}>
                                    <h3>
                                        {item.title}
                                    </h3>
                                    <p>{item.txt}</p>
                                    <Link href={item.url}><ArrowBtn /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Industries
