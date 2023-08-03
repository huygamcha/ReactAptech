import About from "../About"
import Education from "../Education"
import Experience from "../Experience"
import Fullname from "../Fullname"
import styles from './content.module.css'

function Content() {
    return (
        <div className={styles.wrap}>
            <div className="full_name">
                <Fullname />
            </div>
            <div className="about_me">
                <About />
            </div>
            <div className="education">
                <Education />
            </div>
            <div className="work_experience">
                <Experience />
            </div>
        </div>
    )
}
export default Content
