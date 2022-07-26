import React, { createContext, useContext, useState } from "react";
import { useAllProducts } from "../hooks/products.js";
import { productsCall } from "../api/products.js";

const initialState = {
  name: "",
  brand: "",
  quantity: 0,
  price: 0,
};

const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

export default function ProductProvider({ children }) {
  const [allProducts] = useAllProducts();
  const [productBody, setProductBody] = useState(initialState);
  const [oneProduct, setOneProduct] = useState({});

  return (
    <ProductContext.Provider
      value={{
        initialState: initialState,
        productsCall: productsCall,
        allProducts: allProducts,
        productBody: productBody,
        setProductBody,
        oneProduct: oneProduct,
        setOneProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
