import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";

import '../Show.css'

function FoundProducts() {
  const navigate = useNavigate();
  const { foundProducts } = useProductContext();

  return (
    <div className="showBgBox">
      <button onClick={() => navigate(-1)} className="showBackButton">⬅</button>
      <div className="showContainer">
        <div className="outline">
          <h3>Found Products</h3>
          <ul>
            {foundProducts.length ? (
              foundProducts.map((product, index) => (
                <li key={index}>
                  <Link to={`/search/products/results/${product.product_id}`}>
                    +{product.name}
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
