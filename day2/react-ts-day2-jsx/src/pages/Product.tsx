import { useParams } from "react-router-dom";
function Poduct() {
  const params = useParams();
  console.log(params);
  return <h1>Product</h1>;
}

export default Poduct;
