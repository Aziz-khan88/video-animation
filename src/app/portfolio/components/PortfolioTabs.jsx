'use client'
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

import styles from "@/styles/portfolio/portfolioTabs.module.scss"
import { useState } from "react";

const tabs = [
    {
        label: 'All', content: <div className={`${styles.portfolio}`}>
            <div className={`${styles.gridContainer}`}>
                <div className={`${styles.item1}`}>
                    <Image src={image1} width={960} height={480} />
                </div>
                <div className={`${styles.item2}`}><Image src={image2} width={960} height={480} /></div>
                <div className={`${styles.item3}`}><Image src={image3} width={640} height={350} /></div>
                <div className={`${styles.item4}`}><Image src={image4} width={640} height={350} /></div>
                <div className={`${styles.item5}`}><Image src={image5} width={1280} height={700} /></div>
                <div className={`${styles.item6}`}><Image src={image6} width={960} height={480} /></div>
                <div className={`${styles.item7}`}><Image src={image7} width={960} height={480} /></div>
                <div className={`${styles.item8}`}><Image src={image8} width={1920} height={610} /></div>
                <div className={`${styles.item9}`}><Image src={image9} width={1280} height={700} /></div>
                <div className={`${styles.item10}`}><Image src={image3} width={640} height={350} /></div>
                <div className={`${styles.item11}`} ><Image src={image4} width={640} height={350} /></div>
            </div>

        </div>
    },
    { label: '3D Animation', content: <div>This is the content of 3D Animation.</div> },
    { label: '2D Animation', content: <div>This is the content of 2D Animation.</div> },
    { label: 'Hybrid & Cel', content: <div>This is the content of Hybrid & Cel.</div> },
    { label: 'Motion Graphics', content: <div>This is the content of Motion Graphics.</div> },
    { label: 'CGI-VFX', content: <div>This is the content of CGI-VFX.</div> }
];

const PortfolioTabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].label);
    return (
        <div className="bg-black pt-5">
            <div className={`${styles.tabHeaders} container`}>
                <span className="me-4 text-white">Filter By</span>
                {tabs.map((tab) => (
                    <button
                        key={tab.label}
                        className={`${styles.tabHeader} ${activeTab === tab.label ? styles.active : ''}`}
                        onClick={() => setActiveTab(tab.label)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className={`${styles.tabContent}`}>
                {tabs.map((tab) => (
                    tab.label === activeTab && (
                        <div key={tab.label}>
                            {tab.content}
                        </div>
                    )
                ))}
            </div>
        </div >
    )
}
export default PortfolioTabs;