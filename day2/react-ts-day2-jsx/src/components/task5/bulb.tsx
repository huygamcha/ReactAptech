import styles from './bulb.module.css'
import { FaCaretRight } from "react-icons/fa";
function Buld() {
    return (
        <div className={styles.img_content}>
            <img className={styles.img_content} src="./img/lightbulb.png" alt="" />
            <h3>Lighting Upgrades</h3>
            <span className={styles.date_content}>23 Now, 2019, Posted by: admin, 2 Comments</span>
            <div className={styles.feature_content}>Electrical panel maintnance, therefore should be part of your regular routine</div>
            <h4 className={styles.about_content}><a target='_blank' href="https://react-icons.github.io/react-icons/icons?name=fa">Read more </a><span className={styles.about_content} style={{ color: 'red' }}><FaCaretRight></FaCaretRight></span></h4>
        </div>
    )
}
export default Buld