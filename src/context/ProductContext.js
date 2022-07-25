import React, { createContext, useContext } from "react";
import { useProduct } from "../hooks/products.js";

const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

export default function ProductProvider({ children }) {
  const [allProducts] = useProduct();

  return (
    <ProductContext.Provider value={{ allProducts: allProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
