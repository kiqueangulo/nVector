import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";

import './Products.css' 

function ProductDetails() {
  const navigate = useNavigate();
  const { productsCall, oneProduct, setOneProduct } = useProductContext();
  const { product_id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await productsCall.getOneProduct(product_id);
      setOneProduct(data);
    };

    setTimeout(fetchProduct, 250);
  }, []);

  const resetOnLeave = () => {
    navigate(-1);
    setOneProduct({});
  };

  return (
    <div className="bgBox">
      <div className="midFrame">
      <button onClick={resetOnLeave} className="backButton">⬅</button>
      <div className="container">
        <div className="outline">
          {!oneProduct.name ? (
            <h2>...Loading</h2>
          ) : (
            <p>
              Name: {oneProduct.name}
              <br />
              Brand: {oneProduct.brand}
              <br />
              Quantity: {oneProduct.quantity}
              <br />
              Price: {oneProduct.price}
            </p>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProductDetails;
