import { products } from "../../data/products";
import styles from "./product.module.css";
interface ProductItem {
  id: number;
  name: string;
  price: number;
  promoPrice: number;
  thumb: string;
}
function ProductItem({ value }: { value: ProductItem }) {
  const discount = 100 - (value.promoPrice / value.price) * 100;
  return (
    <div className={styles.product_item}>
      {discount < 100 ? (
        <label className={styles.product_discount}>-{discount}%</label>
      ) : (
        ""
      )}
      <img src={value.thumb} alt="" />
      <div className={styles.product_des}>
        <div>{value.name} </div>
        <div>
          {value.promoPrice ? (
            <div>
              <span
                className={styles.price_current}
              >{`${value.promoPrice}\u0111`}</span>
              <del className={styles.price_pre}>{`${value.price}\u0111`}</del>
            </div>
          ) : (
            <div>
              <span
                className={styles.price_current}
              >{`${value.price}\u0111`}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
function Product() {
  return (
    <div className={styles.wrap_product}>
      {products.map((product, i) => (
        <ProductItem key={`product_${i}`} value={product} />
      ))}
    </div>
  );
}
export default Product;
