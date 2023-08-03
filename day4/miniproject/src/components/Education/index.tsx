import style_info from '../Infomation/infomation.module.css'
import styles from './education.module.css'
import { eductions } from './data'
import clsx from 'clsx'
interface EducationItem {
    id: number,
    label: string,
    value: string,
    title?: string,
    year: string
}
function EducationItem({ value }: { value: EducationItem }) {
    return (
        <ul className={clsx(styles.ul)}>
            <li className={styles.label}>{value.label}
                <div> {value.value}</div>
            </li>

            <li>{value.year}</li>
        </ul>
    )
}
function Education() {
    return (
        <div>
            <h3 className={style_info.label}>education</h3>
            {eductions.map((education, index) => (
                <EducationItem key={`education_${index}`} value={education} />
            ))}
        </div>
    )
}

export default Education