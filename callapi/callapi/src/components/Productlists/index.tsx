import { useQuery } from "@tanstack/react-query";
import React from "react";
interface ject {
  id: number;
}
interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: ject;
}
function Productlists() {
  const { data, isLoading, isError, error } = useQuery<Product[], Error>({
    queryKey: ["Product"],
    queryFn: () =>
      fetch("https://api.escuelajs.co/api/v1/products").then((res) =>
        res.json()
      ),
  });
  console.log(data);
  return (
    <>
      {isLoading && <div>Đang tải...</div>}
      {isError && <div>{error.message}</div>}
      <h1>call api</h1>
      <div>
        {data?.map((item) => (
          <ul key={item.id}>
            <li>{item.title}</li>
            <li>
              {item.price} Category id: {item.category.id}
            </li>
            <li>{/* <img src={item.images[0]} alt="" /> */}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Productlists;
