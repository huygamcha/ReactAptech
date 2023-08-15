import React from "react";
import Productlists from "./components/Productlists";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddProduct from "./components/Productlists/productadd";
// import ProductFilter from "./components/Productlists/productfilter";
function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ProductFilter /> */}
        <AddProduct />
        <Productlists />
      </QueryClientProvider>
    </>
  );
}

export default App;
