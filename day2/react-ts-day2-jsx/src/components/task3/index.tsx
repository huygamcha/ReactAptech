import styles from './button.module.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { ReactNode } from 'react';

function AddCartItem({ title, icon, active }: { title: string, icon: ReactNode, active?: boolean }) {
    const getClass = `${styles.add_cart} ${active ? styles.primary : ''}`
    return (
        <button>
            <div className={getClass}>
                <span className={styles.add_icon}>{icon}</span>
                {title}</div>
        </button>
    )
}
function AddCart() {
    return (
        <div className={styles.add_cart_wrap}>
            <AddCartItem active={true} icon={<FaCartShopping></FaCartShopping>} title='Thêm giỏ hàng'></AddCartItem>
            <AddCartItem icon={<FaPhoneAlt></FaPhoneAlt>} title='Gọi tư vấn'></AddCartItem>
        </div>
    )
}
export default AddCart