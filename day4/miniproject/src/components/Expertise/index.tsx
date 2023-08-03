import { expertises } from './data'
import styles from './expertise.module.css'
import styles_info from '../Infomation/infomation.module.css'
import clsx from 'clsx'
interface ExpertiseItem {
    id: number,
    label: string,
}
function ExpertiseItem({ value }: { value: ExpertiseItem }) {
    return (
        <li className={clsx(styles_info.line_space, styles_info.line_colorfont)}>{value.label}</li>
    )
}
function Expertise() {
    return (
        <div>
            <h3 className={styles_info.label}> Expertise</h3>
            <ul className={styles.ul} >
                {expertises.map((expertise, index) =>
                    <ExpertiseItem key={`expertise_${index}`} value={expertise} />
                )}
            </ul>
        </div>
    )
}
export default Expertise