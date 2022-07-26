import React from "react";
import { useGeneralContext } from "../../context/GeneralContext";
import { useProductContext } from "../../context/ProductContext";

function AddProductForm() {
  const { displayLocationForm, displayProductForm, setDisplayProductForm } =
    useGeneralContext();

  const { productBody, setProductBody } = useProductContext();

  const showProductForm = (e) => {
    e.preventDefault();
    setDisplayProductForm(!displayProductForm);
  };

  return (
    <>
      <div
        className={`form-title ${displayLocationForm && "hide-title"}`}
        onClick={showProductForm}
      >
        <h3>Products</h3>
      </div>
      <form className={`search-form ${displayProductForm && "active-form"}`}>
        <section>
          <p>
            <label htmlFor="name">
              <span>Name:</span>
            </label>
            <input type="text" id="name" name="name" defaultValue="" required />
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
              required
            />
          </p>
          <p>
            <label htmlFor="quatity">
              <span>Quantity:</span>
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              defaultValue=""
              required
            />
          </p>
          <p>
            <label htmlFor="price">
              <span>Price:</span>
            </label>
            <input
              type="number"
              id="price"
              name="price"
              defaultValue=""
              required
            />
          </p>
        </section>
        <section>
          <p>
            <button type="submit">Add Product</button>
          </p>
          <p>
            <button onClick={(e) => showProductForm(e)}>Go Back</button>
          </p>
        </section>
      </form>
    </>
  );
}

export default AddProductForm;
