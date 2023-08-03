import styles_info from '../Infomation/infomation.module.css'
import styles from './skill.module.css'
import clsx from 'clsx'
import { skills } from './data'
interface SkillItem {
    id: number,
    label: string,
}
function SkillItem({ value }: { value: SkillItem }) {
    return (
        <li className={clsx(styles_info.line_space, styles_info.line_colorfont)}>{value.label}</li>
    )
}
function Skill() {
    return (
        <div>
            <h3 className={styles_info.label}> Personal Skill</h3>
            <div className={styles.skill_wrap}>
                <ul>
                    {skills.map((skill, index) =>
                        <SkillItem key={`skill_${index}`} value={skill} />
                    )
                    }
                </ul>
            </div>
        </div>
    )
}
export default Skill