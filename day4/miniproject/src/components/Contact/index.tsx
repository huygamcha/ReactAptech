import clsx from 'clsx'
import styles_info from '../Infomation/infomation.module.css'
import styles from './contact.module.css'
import { contacts } from './data'
interface ContactItem {
    id: number,
    label: string,
    value: string,
}
function ContactItem({ value }: { value: ContactItem }) {
    return (
        <li className={clsx(styles_info.line_space, styles_info.line_colorfont)}>{value.label}
            <div >{value.value}</div>
        </li>
    )
}
function Contact() {
    return (
        <div>
            <h3 className={styles_info.label} > Contact</h3>
            <div className={styles.contact_wrap}>
                <ul>
                    {contacts.map((contact, index) => (
                        <ContactItem key={`contact_${index}`} value={contact} />
                    ))}
                </ul>

            </div>
        </div>

    )
}

export default Contact