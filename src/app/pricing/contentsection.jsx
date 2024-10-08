import React from 'react'
import styles from "@/styles/pricing/contentsection.module.scss";
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link'
import { ArrowBtn } from '@/src/app/app-constants'
import ContentImg1 from '@/public/pricing/contectsection/ContentImg1.gif'
import ContentImg2 from '@/public/pricing/contectsection/ContentImg2.webp'
import Image from 'next/image';

const data = {
    title: (<>Want to Jump <br className='d-none d-md-block' /> Straight in & Get the Video Made?</>),
    content: "Want to get the right kind of video made? One that ensures that your brand objectives are met? One that spurs the customer into taking action? If yes, then you’re just a few steps away from getting a video like this. So, let’s get Video Animation, shall we?",
}

export default function Contentsection() {
    return (
        <div className={styles.ContentSec}>
            <Container >
                <Row className={styles.Content}>
                    <Col xl={6} lg={7} md={12} className={styles.ContentLeft}>
                        <h2>{data?.title}</h2>
                        <p>{data?.content}</p>
                        <Link href="#" className="readMoreBtn bgColor">Let’s Discuss <ArrowBtn /></Link>
                    </Col>
                    <Col xl={6} lg={5} md={12} className={styles.ContentRight}>
                        <Image src={ContentImg1} width={500} height={600} className={styles.Img1}/>
                        <Image src={ContentImg2} width={230} height={140} className={styles.Img2}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
