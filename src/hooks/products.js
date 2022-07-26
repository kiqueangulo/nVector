import { useState, useEffect } from "react";
import { productsCall } from "../api/products";

export function useAllProducts() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await productsCall.getAllProducts();
        setAllProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return [allProducts];
}
