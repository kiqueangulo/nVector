import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";

function FoundProducts() {
  const navigate = useNavigate();
  const { foundProducts } = useProductContext();

  return (
    <div className="bgBox">
      <button onClick={() => navigate(-1)}>⬅</button>
      <div className="container">
        <div className="outline">
          <h3>FoundProducts</h3>
          <ul>
            {foundProducts.length ? (
              foundProducts.map((product, index) => (
                <li key={index}>
                  <Link to={`/search/products/results/${product.product_id}`}>
                    * {product.name}
                  </Link>
                </li>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FoundProducts;
