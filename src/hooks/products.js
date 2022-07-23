import { useEffect } from "react";
import { productsCall } from "../api/products.js";

export function useProduct(array = []) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await productsCall.getAllProducts();
        array.push(...data.products);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [array]);

  return array;
}
