// import React from "react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

// function ProductFilter() {
//   const queryClient = useQueryClient();

//   const filterProduct = async () => {
//     try {
//       const response = await fetch(
//         "https://api.escuelajs.co/api/v1/products/?categoryId=2"
//       );
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       throw error;
//     }
//   };

//   const FilterProductMutation = useMutation(filterProduct, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("products");
//     },
//   });

//   const handleFilterProducts = () => {
//     FilterProductMutation.mutate();
//   };

//   return (
//     <div>
//       <button onClick={handleFilterProducts}>Filter Category ID 2</button>
//     </div>
//   );
// }

// export default ProductFilter;
