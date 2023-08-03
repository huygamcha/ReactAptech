import style_info from '../Infomation/infomation.module.css'
import styles from './experience.module.css'
import { experiences } from './data'
import clsx from 'clsx'
interface ExperienceItem {
    id: number,
    label: string,
    value: string,
    job: string,
    year: string,
    desc: string
}
function ExperienceItem({ value }: { value: ExperienceItem }) {
    return (
        <div>
            <ul className={clsx(styles.ul, styles.display, styles.label)}>
                <li>{value.job}
                    <ul className={clsx(styles.ul)} >
                        <li>{value.label} {value.value}</li>
                    </ul>
                </li>
                <li>{value.year}</li>
            </ul>
            <div>
                {value.desc}
            </div>
        </div>

    )
}
function Experience() {
    return (
        <div>
            <h3 className={style_info.label}>work experience</h3>
            {experiences.map((experience, index) => (
                <ExperienceItem key={`experience_${index}`} value={experience} />
            ))}
        </div>
    )
}
export default Experience