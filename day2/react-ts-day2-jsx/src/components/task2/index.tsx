import { ReactNode } from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import styles from './policy.module.css'
function PolicyItem({ label, des, icon }: { label: string, des: string, icon: ReactNode }) {
    return (
        <div><span className={styles.color_icon}>{icon}</span> <strong>{label} </strong>{des}</div>
    )
}
function Policy() {
    return (
        <div className={styles.color_wrap}>
            <PolicyItem
                icon={<FaRegCheckSquare></FaRegCheckSquare>}
                label='Bộ sản phẩm gồm:'
                des='Hộp, sách hướng dẫn, Cáp'
            ></PolicyItem>
            <PolicyItem
                icon={<FaRegCheckCircle></FaRegCheckCircle>}
                label='Bảo hành:'
                des='Chính hãng 12 tháng'
            ></PolicyItem>
            <PolicyItem
                icon={<FaRegCreditCard></FaRegCreditCard>}
                label='Đổi trả:'
                des='Hư gì đổi nấy'
            ></PolicyItem>
        </div>
    )
}
export default Policy
