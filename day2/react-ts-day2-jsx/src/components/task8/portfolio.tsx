import { portfolios } from '../../data/portfolio'
import styles from './portfolio.module.css'
interface PortfolioItem {
    Name: string,
    Profession: string,
    Awards: string,
    Discovered: string,
    Img: string
}
function PortfolioItem({ value }: { value: PortfolioItem }) {

    return (
        <div className={styles.wrap_port}>
            <div className={styles.wrap_content}>
                <h3>{value.Name}</h3>
                <img className={styles.img_port} src={value.Img} alt="" />
                <ul>
                    <li><strong>Profession:</strong> {value.Profession}</li>
                    <li><strong>Awards:</strong> {value.Awards}</li>
                    <li><strong>Discovered:</strong> {value.Discovered}</li>
                </ul>
            </div>
        </div>
    )
}
function Portfolio() {
    return (
        portfolios.map(portfolio => (
            <PortfolioItem value={portfolio} />
        ))
    )
}
export default Portfolio