import React from 'react'
import styles from "@/styles/pricing/contentsection.module.scss";
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link'
import { ArrowBtn } from '@/src/app/app-constants'
import ContentImg1 from '@/public/pricing/contectsection/ContentImg1.gif'
import Image from 'next/image';


export default function Contentsection() {
    return (
        <div className={`${styles.ContentSec} p-100`}>
            <Container className='h-100' >
                <Row className='h-100'>
                    <Col md={6} className='my-auto'>
                        <h2>Want to Jump  Straight in & Get the Video Made?</h2>
                        <p>Want to get the right kind of video made? One that ensures that your brand objectives are met? One that spurs the customer into taking action? If yes, then you’re just a few steps away from getting a video like this. So, let’s get Video Animation, shall we?</p>
                        <Link href="#" className="readMoreBtn bgColor">Let’s Discuss <ArrowBtn /></Link>
                    </Col>
                    <Col md={6} className='my-auto text-center'>
                        <Image src={ContentImg1} width={500} height={600} alt='Image' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
