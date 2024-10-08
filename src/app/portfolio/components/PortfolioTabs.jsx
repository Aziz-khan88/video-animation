// 'use client'
// import styles from "@/styles/portfolio/portfolioTabs.module.scss"
// import { Container, Row, Col } from "react-bootstrap";
// import Image from "next/image";

// import image1 from "media/portfolio/1.webp";
// import image2 from "media/portfolio/2.webp";
// import image3 from "media/portfolio/3.webp";
// import image4 from "media/portfolio/4.webp";
// import image5 from "media/portfolio/5.webp";
// import image6 from "media/portfolio/6.webp";
// import image7 from "media/portfolio/7.webp";
// import image8 from "media/portfolio/8.webp";
// import image9 from "media/portfolio/9.webp";



// const PortfolioTabs = () => {
//     return (
//         <>

//             <section className={`${styles.portfolioSection} p-150`}>
//                 <Container>
//                     <Row>
//                         <Col>
//                             <ul className={styles.tabHeaders}>
//                                 <li>Filter By</li>
//                                 <li className={styles.active}>3D Animation</li>
//                                 <li>2D Animation</li>
//                                 <li>Hybrid & Cel</li>
//                                 <li>Motion Graphics</li>
//                                 <li>CGI-VFX</li>
//                             </ul>
//                         </Col>
//                     </Row>
//                 </Container>
//                 <Container fluid>
//                     <Row>
//                         <Col className="p-0">
//                             <div className={styles.tabContent}>
//                                 <div className={`${styles.portfolio}`}>
//                                     <div className={`${styles.gridContainer}`}>
//                                         <div className={`${styles.item1}`}>
//                                             <Image src={image1} width={960} height={480} />
//                                         </div>
//                                         <div className={`${styles.item2}`}><Image src={image2} width={960} height={480} /></div>
//                                         <div className={`${styles.item3}`}><Image src={image3} width={640} height={350} /></div>
//                                         <div className={`${styles.item4}`}><Image src={image4} width={640} height={350} /></div>
//                                         <div className={`${styles.item5}`}><Image src={image5} width={1280} height={700} /></div>
//                                         <div className={`${styles.item6}`}><Image src={image6} width={960} height={480} /></div>
//                                         <div className={`${styles.item7}`}><Image src={image7} width={960} height={480} /></div>
//                                         <div className={`${styles.item8}`}><Image src={image8} width={1920} height={610} /></div>
//                                         <div className={`${styles.item9}`}><Image src={image9} width={1280} height={700} /></div>
//                                         <div className={`${styles.item10}`}><Image src={image3} width={640} height={350} /></div>
//                                         <div className={`${styles.item11}`} ><Image src={image4} width={640} height={350} /></div>
//                                     </div>

//                                 </div>
//                             </div>
//                             <div className={styles.tabContent}>
//                                 <div className={`${styles.portfolio}`}>
//                                     <div className={`${styles.gridContainer}`}>
//                                         <div className={`${styles.item1}`}>
//                                             <Image src={image1} width={960} height={480} />
//                                         </div>
//                                         <div className={`${styles.item2}`}><Image src={image2} width={960} height={480} /></div>
//                                         <div className={`${styles.item3}`}><Image src={image3} width={640} height={350} /></div>
//                                         <div className={`${styles.item4}`}><Image src={image4} width={640} height={350} /></div>
//                                         <div className={`${styles.item5}`}><Image src={image5} width={1280} height={700} /></div>
//                                         <div className={`${styles.item6}`}><Image src={image6} width={960} height={480} /></div>
//                                         <div className={`${styles.item7}`}><Image src={image7} width={960} height={480} /></div>
//                                         <div className={`${styles.item8}`}><Image src={image8} width={1920} height={610} /></div>
//                                         <div className={`${styles.item9}`}><Image src={image9} width={1280} height={700} /></div>
//                                         <div className={`${styles.item10}`}><Image src={image3} width={640} height={350} /></div>
//                                         <div className={`${styles.item11}`} ><Image src={image4} width={640} height={350} /></div>
//                                     </div>

//                                 </div>
//                             </div>
//                             <div className={styles.tabContent}>
//                                 <div className={`${styles.portfolio}`}>
//                                     <div className={`${styles.gridContainer}`}>
//                                         <div className={`${styles.item1}`}>
//                                             <Image src={image1} width={960} height={480} />
//                                         </div>
//                                         <div className={`${styles.item2}`}><Image src={image2} width={960} height={480} /></div>
//                                         <div className={`${styles.item3}`}><Image src={image3} width={640} height={350} /></div>
//                                         <div className={`${styles.item4}`}><Image src={image4} width={640} height={350} /></div>
//                                         <div className={`${styles.item5}`}><Image src={image5} width={1280} height={700} /></div>
//                                         <div className={`${styles.item6}`}><Image src={image6} width={960} height={480} /></div>
//                                         <div className={`${styles.item7}`}><Image src={image7} width={960} height={480} /></div>
//                                         <div className={`${styles.item8}`}><Image src={image8} width={1920} height={610} /></div>
//                                         <div className={`${styles.item9}`}><Image src={image9} width={1280} height={700} /></div>
//                                         <div className={`${styles.item10}`}><Image src={image3} width={640} height={350} /></div>
//                                         <div className={`${styles.item11}`} ><Image src={image4} width={640} height={350} /></div>
//                                     </div>

//                                 </div>
//                             </div>
//                             <div className={styles.tabContent}>
//                                 <div className={`${styles.portfolio}`}>
//                                     <div className={`${styles.gridContainer}`}>
//                                         <div className={`${styles.item1}`}>
//                                             <Image src={image1} width={960} height={480} />
//                                         </div>
//                                         <div className={`${styles.item2}`}><Image src={image2} width={960} height={480} /></div>
//                                         <div className={`${styles.item3}`}><Image src={image3} width={640} height={350} /></div>
//                                         <div className={`${styles.item4}`}><Image src={image4} width={640} height={350} /></div>
//                                         <div className={`${styles.item5}`}><Image src={image5} width={1280} height={700} /></div>
//                                         <div className={`${styles.item6}`}><Image src={image6} width={960} height={480} /></div>
//                                         <div className={`${styles.item7}`}><Image src={image7} width={960} height={480} /></div>
//                                         <div className={`${styles.item8}`}><Image src={image8} width={1920} height={610} /></div>
//                                         <div className={`${styles.item9}`}><Image src={image9} width={1280} height={700} /></div>
//                                         <div className={`${styles.item10}`}><Image src={image3} width={640} height={350} /></div>
//                                         <div className={`${styles.item11}`} ><Image src={image4} width={640} height={350} /></div>
//                                     </div>

//                                 </div>
//                             </div>
//                             <div className={styles.tabContent}>
//                                 <div className={`${styles.portfolio}`}>
//                                     <div className={`${styles.gridContainer}`}>
//                                         <div className={`${styles.item1}`}>
//                                             <Image src={image1} width={960} height={480} />
//                                         </div>
//                                         <div className={`${styles.item2}`}><Image src={image2} width={960} height={480} /></div>
//                                         <div className={`${styles.item3}`}><Image src={image3} width={640} height={350} /></div>
//                                         <div className={`${styles.item4}`}><Image src={image4} width={640} height={350} /></div>
//                                         <div className={`${styles.item5}`}><Image src={image5} width={1280} height={700} /></div>
//                                         <div className={`${styles.item6}`}><Image src={image6} width={960} height={480} /></div>
//                                         <div className={`${styles.item7}`}><Image src={image7} width={960} height={480} /></div>
//                                         <div className={`${styles.item8}`}><Image src={image8} width={1920} height={610} /></div>
//                                         <div className={`${styles.item9}`}><Image src={image9} width={1280} height={700} /></div>
//                                         <div className={`${styles.item10}`}><Image src={image3} width={640} height={350} /></div>
//                                         <div className={`${styles.item11}`} ><Image src={image4} width={640} height={350} /></div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//         </>
//     )
// }
// export default PortfolioTabs;

'use client'
import { useState } from "react";
import styles from "@/styles/portfolio/portfolioTabs.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import image1 from "media/portfolio/1.webp";
import image2 from "media/portfolio/2.webp";
import image3 from "media/portfolio/3.webp";
import image4 from "media/portfolio/4.webp";
import image5 from "media/portfolio/5.webp";
import image6 from "media/portfolio/6.webp";
import image7 from "media/portfolio/7.webp";
import image8 from "media/portfolio/8.webp";
import image9 from "media/portfolio/9.webp";
import image10 from "media/portfolio/10.webp";
import image11 from "media/portfolio/11.webp";
import { ArrowBtn, FavIcon } from "../../app-constants";
import Link from "next/link";

const PortfolioTabs = () => {
    const [activeTab, setActiveTab] = useState('3D Animation');

    const tabs = [
        {
            label: '3D Animation',
            images: [
                { src: image1, width: 960, height: 480, className: styles.item1 },
                { src: image2, width: 960, height: 480, className: styles.item2 },
                { src: image3, width: 320, height: 180, className: styles.item3 },
                { src: image4, width: 320, height: 180, className: styles.item4 },
                { src: image5, width: 1280, height: 700, className: styles.item5 },
                { src: image6, width: 960, height: 480, className: styles.item6 },
                { src: image7, width: 960, height: 480, className: styles.item7 },
                { src: image8, width: 1920, height: 610, className: styles.item8 },
                { src: image9, width: 1280, height: 700, className: styles.item9 },
                { src: image10, width: 960, height: 480, className: styles.item10 },
                { src: image11, width: 960, height: 480, className: styles.item11 },
            ],
        },
        {
            label: '2D Animation',
            images: [
                { src: image2, width: 960, height: 480, className: styles.item1 },
                { src: image1, width: 960, height: 480, className: styles.item2 },
                { src: image3, width: 320, height: 180, className: styles.item3 },
                { src: image4, width: 320, height: 180, className: styles.item4 },
                { src: image5, width: 1280, height: 700, className: styles.item5 },
                { src: image6, width: 960, height: 480, className: styles.item6 },
                { src: image7, width: 960, height: 480, className: styles.item7 },
                { src: image8, width: 1920, height: 610, className: styles.item8 },
                { src: image9, width: 1280, height: 700, className: styles.item9 },
                { src: image10, width: 960, height: 480, className: styles.item10 },
                { src: image11, width: 960, height: 480, className: styles.item11 },
            ],
        },
        {
            label: 'Hybrid & Cel',
            images: [
                { src: image7, width: 1920, height: 1080 },
                { src: image8, width: 1280, height: 720 },
            ],
        },
        {
            label: 'Motion Graphics',
            images: [
                { src: image9, width: 640, height: 360 },
            ],
        },
        {
            label: 'CGI-VFX',
            images: [
                { src: image1, width: 960, height: 540 },
                { src: image2, width: 640, height: 480 },
            ],
        },
    ];

    return (
        <section className={`${styles.portfolioSection} p-150`}>
            <Container>
                <Row>
                    <Col>
                        <ul className={styles.tabHeaders}>
                            <li>Filter By</li>
                            {tabs.map(tab => (
                                <li
                                    key={tab.label}
                                    className={activeTab === tab.label ? styles.active : ''}
                                    onClick={() => setActiveTab(tab.label)}
                                >
                                    {tab.label}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col className="p-0">
                        <div className={styles.tabContent}>
                            <div className={`${styles.portfolio}`}>
                                <div className={`${styles.gridContainer}`}>
                                    {tabs.find(tab => tab.label === activeTab)?.images.map((image, index) => (

                                        <div key={index} className={image.className}>
                                            <Image src={image.src} width={image.width} height={image.height} />
                                            <div className={styles.bannerContentBox}>
                                                <div className={styles.bannerHeading}>
                                                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                                    <p>Creative direction , Animation, 3D character</p>
                                                </div>
                                                <div className={styles.bannerButton}>
                                                    <div className="buttonCommon">
                                                        <Link href="">
                                                            <FavIcon />
                                                        </Link>
                                                    </div>
                                                </div>
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

export default PortfolioTabs;
