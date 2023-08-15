import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Product {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

function AddProduct() {
  const queryClient = useQueryClient();

  const postProduct = (newProduct: Product) =>
    fetch("https://api.escuelajs.co/api/v1/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then((response) => response.json());

  // Mutations
  const addProductMutation = useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const handleAddProduct = () => {
    addProductMutation.mutate({
      title: "New Product 70",
      price: 480,
      description: "A description",
      categoryId: 1,
      images: ["https://placeimg.com/640/480/any"],
    });
  };

  return (
    <div>
      <button
        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        disabled={addProductMutation.isLoading}
        onClick={handleAddProduct}
      >
        {addProductMutation.isLoading ? (
          <div>Adding Product...</div>
        ) : (
          <div>Add Product</div>
        )}
      </button>

      {addProductMutation.isSuccess && <span>Product added successfully!</span>}
      {addProductMutation.isError && <span>Failed to add Product.</span>}
    </div>
  );
}

export default AddProduct;
