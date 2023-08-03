import { ReactNode } from 'react'
import styles from './nav.module.css'
import { FaAngleUp } from "react-icons/fa";
interface SetNav {
    title: string
    color?: boolean
    hasChild?: boolean
    icon?: ReactNode
}
function NavItem({ title, color, icon, hasChild }: SetNav) {

    const getClass = `${styles.title_item} ${(color) ? styles.color : ''} `
    return (
        <div>
            <div className={getClass}><a href='' className={styles.title_item_wrap}>{title}
                <span className={styles.icon_wrapper}>{icon}</span>
            </a>
                {hasChild ? (
                    <ul className={styles.hasChild}>
                        <li> <a href="">Tech</a> </li>
                        <li> <a href="">Marketing</a> </li>
                        <li> <a href="">Financial</a> </li>
                    </ul>
                ) : ''}
            </div>
        </div>
    )
}
function Nav() {
    return (
        <div className={styles.title_list}>
            <NavItem title='Home'></NavItem>
            <NavItem hasChild={true} icon={<FaAngleUp></FaAngleUp>} title='Blog'></NavItem>
            <NavItem title='Category'></NavItem>
            <NavItem color={true} title='Product'></NavItem>
            <NavItem title='Login'></NavItem>
        </div>
    )
}
export default Nav