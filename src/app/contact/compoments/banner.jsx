import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/about/banner.module.scss"

const Banner = ({ contact }) => {
    return (
        <section className={`${styles.mainBanner} ${contact ? styles.contactpage : ''}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={8} className="m-auto text-center">
                        <h1><span>Say hi!</span> We’re Excited to Transform Your Ideas into Animated Magic!</h1>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Banner