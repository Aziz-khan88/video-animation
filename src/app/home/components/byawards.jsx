import Award01 from "media/home/awards/award01.webp"
import Award02 from "media/home/awards/award02.webp"
import Award03 from "media/home/awards/award03.webp"
import Award04 from "media/home/awards/award04.webp"
import Award05 from "media/home/awards/award05.webp"
import Award06 from "media/home/awards/award06.webp"
import styles from "@/styles/home/components/awards.module.scss";
import Image from "next/image"



const ByAwards = () => {
    return (
        <div className={styles.byAwardBox}>
            <div className={styles.byAwardItem}>
                <Image src={Award01.src} width={317} height={162} alt="Award 01" />
            </div>
            <div className={styles.byAwardItem}>
                <Image src={Award02.src} width={234} height={152} alt="Award 02" />
            </div>
            <div className={styles.byAwardItem}>
                <Image src={Award03.src} width={346} height={200} alt="Award 03" />
            </div>
            <div className={styles.byAwardItem}>
                <Image src={Award04.src} width={248} height={160} alt="Award 04" />
            </div>
            <div className={styles.byAwardItem}>
                <Image src={Award05.src} width={372} height={200} alt="Award 05" />
            </div>
            <div className={styles.byAwardItem}>
                <Image src={Award06.src} width={300} height={138} alt="Award 06" />
            </div>
        </div>
    )
}

export default ByAwards