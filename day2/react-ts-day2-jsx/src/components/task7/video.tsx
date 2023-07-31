import { FaRegHeart } from "react-icons/fa";
import styles from './video.module.css'
import { videosList } from '../../data/listVideo'
import { useState } from "react";
// import $ from 'jquery'
interface VideoItem {
    id: number;
    title: string;
    desc: string;
    url: string;
    thumb: string
}
function VideoItem({ product }: { product: VideoItem }) {
    const [like, setLike] = useState(false);
    const handleClick = () => {
        setLike(!like)
    }
    console.log(like)
    return (
        <div className={styles.video_wrap}>
            <div className={styles.video_wrap_left}>
                <a target="_blank" href={product.url}>
                    <img className={styles.video_thumbnail} src={product.thumb} alt="" />
                </a>
                <div className={styles.video_wrap_label}>
                    <a target="_blank" href={product.url} className={styles.video_title}><strong>{product.title}</strong></a>
                    <div className={styles.video_desc}>{product.desc}</div>
                </div>
            </div>
            <FaRegHeart
                onClick={handleClick}
                className={`${styles.video_icon} ${like ? styles.active : ''}`}
            ></FaRegHeart>
        </div >
    )
}
function Video() {
    return (
        videosList.map((video, index) => (
            <VideoItem key={`video_${index}`} product={video}></VideoItem>
        ))
    )
}

export default Video;