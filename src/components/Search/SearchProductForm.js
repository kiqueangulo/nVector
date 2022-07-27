import React from "react";
import { useNavigate } from "react-router-dom";
import { useGeneralContext } from "../../context/GeneralContext";
import { useProductContext } from "../../context/ProductContext";

function SearchProductForm() {
  const navigate = useNavigate();

  const { displayLocationForm, displayProductForm, setDisplayProductForm } =
    useGeneralContext();

  const {
    productBody,
    setProductBody,
    initialState,
    productsCall,
    foundProducts,
    setFoundProducts,
  } = useProductContext();

  const showProductForm = (e) => {
    e.preventDefault();
    setDisplayProductForm(!displayProductForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await productsCall.getAllProducts({
      name: productBody.name,
      brand: productBody.brand,
    });

    setFoundProducts(data);
    navigate(`/search/products/results`);

    setProductBody(initialState);
    setDisplayProductForm(false);
  };

  return (
    <>
      <div
        className={`form-title ${displayLocationForm && "hide-title"}`}
        onClick={showProductForm}
      >
        <h3>Products</h3>
      </div>
      <form
        className={`search-form ${displayProductForm && "active-form"}`}
        onSubmit={handleSubmit}
      >
        <section>
          <p>
            <label htmlFor="name">
              <span>Name:</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue=""
              placeholder="All Products"
              value={productBody.name}
              onChange={(e) =>
                setProductBody({ ...productBody, name: e.target.value })
              }
            />
          </p>
          <p>
            <label htmlFor="brand">
              <span>Brand:</span>
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              defaultValue=""
              placeholder="All Brands"
              value={productBody.brand}
              onChange={(e) =>
                setProductBody({ ...productBody, brand: e.target.value })
              }
            />
          </p>
        </section>
        <section>
          <p>
            <button type="submit" className="submitButton">
              Search Product
            </button>
          </p>
          <p>
            <button onClick={(e) => showProductForm(e)} className="backButton">
              Go Back
            </button>
          </p>
        </section>
      </form>
    </>
  );
}

export default SearchProductForm;
