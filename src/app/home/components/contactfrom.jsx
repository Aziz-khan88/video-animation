import styles from "@/styles/home/components/contactfrom.module.scss"
import { ArrowBtn } from "../../app-constants"
import { Form } from "react-bootstrap"

const ContactFrom = () => {
    return (
        <Form>
            <div className={styles.contactFrom}>
                <div className={styles.inputsFiled}>
                    <input type="text" name="name" placeholder="Full Name" required />
                </div>
                <div className={styles.inputsFiled}>
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className={styles.inputsFiled}>
                    <input type="tel" name="phone" placeholder="Phone" required />
                </div>
                <div className={styles.inputsFiled}>
                    <textarea name="msg" placeholder="Description"></textarea>
                </div>
                <div className={styles.inputsButton}>
                    <button type="submit"> Let’s Discuss <ArrowBtn /></button>
                </div>
            </div>
        </Form>
    )
}

export default ContactFrom