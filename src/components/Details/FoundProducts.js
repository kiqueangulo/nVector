import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";

function FoundProducts() {
  const { foundProducts } = useProductContext();
  console.log(foundProducts);

  return (
    <div className="bgBox">
      <div className="container">
        <div className="outline">
          <div>FoundProducts</div>
          <ul>
            {foundProducts.map((product, index) => (
              <li>
                <Link
                  key={index}
                  to={`/search/products/results/${product.product_id}`}
                >
                  * {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FoundProducts;
