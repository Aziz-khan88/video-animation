import styles from "@/styles/home/components/bynumber.module.scss"

const ByNumber = () => {
    return (
        <div className={styles.byNumberBox}>
            <div className={styles.byNumberItem}>
                <div className={styles.byNumberPoints}>20k<span>+</span></div>
                <h6>Projects <br />Completed</h6>
            </div>
            <div className={styles.byNumberItem}>
                <div className={styles.byNumberPoints}>100M<span>+</span></div>
                <h6>Views on our <br />Clients Videos</h6>
            </div>
            <div className={styles.byNumberItem}>
                <div className={styles.byNumberPoints}>14k<span>+</span></div>
                <h6>Projects <br />Reviews</h6>
            </div>
            <div className={styles.byNumberItem}>
                <div className={styles.byNumberPoints}>10k<span>+</span></div>
                <h6>Revenue generations <br />for Clients</h6>
            </div>
        </div>
    )
}

export default ByNumber