import { portfolios } from '../../data/portfolio'
interface PortfolioItem {
    Name: string,
    Profession: string,
    Awards: string,
    Discovered: string

}
function PortfolioItem({ value }: { value: PortfolioItem }) {

    return (
        <div>{value.Name}</div>
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