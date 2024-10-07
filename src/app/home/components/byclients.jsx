import Clients01 from "media/home/clients/clients01.webp"
import Clients02 from "media/home/clients/clients02.webp"
import Clients03 from "media/home/clients/clients03.webp"
import Clients04 from "media/home/clients/clients04.webp"
import Clients05 from "media/home/clients/clients05.webp"
import Clients06 from "media/home/clients/clients06.webp"
import styles from "@/styles/home/components/clients.module.scss";
import Image from "next/image"



const ByClients = () => {
    return (
        <div className={styles.byClientsBox}>
            <div className={styles.byClientsItem}>
                <Image src={Clients01.src} width={236} height={80} alt="Clients 01" />
            </div>
            <div className={styles.byClientsItem}>
                <Image src={Clients02.src} width={317} height={80} alt="Clients 02" />
            </div>
            <div className={styles.byClientsItem}>
                <Image src={Clients03.src} width={414} height={80} alt="Clients 03" />
            </div>
            <div className={styles.byClientsItem}>
                <Image src={Clients04.src} width={322} height={80} alt="Clients 04" />
            </div>
            <div className={styles.byClientsItem}>
                <Image src={Clients05.src} width={448} height={80} alt="Clients 05" />
            </div>
            <div className={styles.byClientsItem}>
                <Image src={Clients06.src} width={370} height={80} alt="Clients 06" />
            </div>
        </div>
    )
}

export default ByClients