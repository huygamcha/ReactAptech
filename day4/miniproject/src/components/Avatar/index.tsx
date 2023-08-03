import styles from './avatar.module.css'
function Avatar() {
    return (
        <div className={styles.avatar_wrap}>
            <img className={styles.avatar} src="./img/avatar.png" alt="" />
        </div>
    )
}
export default Avatar