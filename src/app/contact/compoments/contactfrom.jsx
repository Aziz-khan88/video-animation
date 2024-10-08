import styles from "@/styles/contact/contactform.module.scss"
import { ArrowBtn } from "../../app-constants"
import { Form } from "react-bootstrap"

const ContactPageFrom = () => {
    return (
        <Form>
            <div className={styles.contactpageFrom}>
                <div className={styles.inputsFiled}>
                    <label htmlFor="name">Full Name </label>
                    <input type="text" name="name" placeholder="Enter your name" required id="name" />

                </div>
                <div className={styles.inputsFiled}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Enter your email" required id="email" />
                </div>
                <div className={styles.inputsFiled}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your Phone No" required id="phone" />
                </div>
                <div className={styles.textFiled}>
                    <label htmlFor="msg">Description</label>
                    <textarea name="msg" placeholder="Type your message" id="msg"></textarea>
                </div>
                <div className={styles.checkTitle}>
                    What service you are looking for?
                </div>
                <div className={styles.checkBox}>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="2dAnimation" name="animationType" value="2D Animation" />
                        <label htmlFor="2dAnimation" className={styles.checkboxlabel}>2D Animation</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="3dAnimation" name="animationType" value="3D Animation" />
                        <label htmlFor="3dAnimation" className={styles.checkboxlabel}>3D Animation</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="hybridAnimation" name="animationType" value="Hybrid Animation" />
                        <label htmlFor="hybridAnimation" className={styles.checkboxlabel}>Hybrid Animation</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="celAnimation" name="animationType" value="Cel Animation" />
                        <label htmlFor="celAnimation" className={styles.checkboxlabel}>Cel Animation</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="motionGraphics" name="animationType" value="Motion Graphics" />
                        <label htmlFor="motionGraphics" className={styles.checkboxlabel}>Motion Graphics</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="whiteboardAnimation" name="animationType" value="Whiteboard Animation" />
                        <label htmlFor="whiteboardAnimation" className={styles.checkboxlabel}>Whiteboard Animation</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="videoEditing" name="animationType" value="Video Editing" />
                        <label htmlFor="videoEditing" className={styles.checkboxlabel}>Video Editing</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="cgiVFX" name="animationType" value="CGI-VFX" />
                        <label htmlFor="cgiVFX" className={styles.checkboxlabel}>CGI-VFX</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="logoAnimation" name="animationType" value="Logo Animation" />
                        <label htmlFor="logoAnimation" className={styles.checkboxlabel}>Logo Animation</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="infographics" name="animationType" value="Infographics" />
                        <label htmlFor="infographics" className={styles.checkboxlabel}>Infographics</label>
                    </div>

                    <div className={styles.checkBoxItem}>
                        <input type="checkbox" id="architecturalVisualization" name="animationType" value="Architectural Visualization" />
                        <label htmlFor="architecturalVisualization" className={styles.checkboxlabel}>Architectural Visualization</label>
                    </div>
                </div>

                <div className={styles.inputsButton}>
                    <button type="submit"> Let’s Discuss <ArrowBtn /></button>
                </div>
            </div>
        </Form >
    )
}

export default ContactPageFrom