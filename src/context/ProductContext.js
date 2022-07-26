import React, { createContext, useContext, useState } from "react";
import { useProduct } from "../hooks/products.js";

const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

export default function ProductProvider({ children }) {
  const [allProducts] = useProduct();
  const [productBody, setProductBody] = useState({
    name: "",
    brand: "",
    quanitty: 0,
    price: 0,
  });

  return (
    <ProductContext.Provider
      value={{
        allProducts: allProducts,
        productBody: productBody,
        setProductBody,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
