import styles from './button.module.css'

function ColorItem({ label, active }: { label: string, active?: boolean }) {
    const getClass = ` ${styles.color_name} ${(active) ? styles.active : ''}`
    return (
        <div className={getClass}>{label}</div>
    )
}
function AttributeColor() {
    return (
        <div className={styles.color_wrap}>
            <span>Màu sắc:  </span>
            <ColorItem active={true} label='Đen' ></ColorItem>
            <ColorItem label='Hồng' ></ColorItem>
            <ColorItem label='Xanh' ></ColorItem>
        </div>

    )
}
export default AttributeColor