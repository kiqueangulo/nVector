import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";

function ProductDetails() {
  const { productsCall, oneProduct, setOneProduct } = useProductContext();
  const { product_id } = useParams();

  productsCall
    .getOneProduct(Number(product_id))
    .then((product) => setOneProduct(product));

  return (
    <div className="bgBox">
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
  );
}

export default ProductDetails;
