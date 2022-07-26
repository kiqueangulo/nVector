import React from "react";
import { useGeneralContext } from "../../context/GeneralContext";

import "./Search.css";

function Search() {
  const {
    displayLocationForm,
    setDisplayLocationForm,
    displayProductForm,
    setDisplayProductForm,
  } = useGeneralContext();

  const showLocationForm = (e) => {
    e.preventDefault();
    setDisplayLocationForm(!displayLocationForm);
  };

  const showProductForm = (e) => {
    e.preventDefault();
    setDisplayProductForm(!displayProductForm);
  };

  return (
    <div className="bgBox">
      <div className="container">
        <div className="outline">
        <h2>Search</h2>
        <div
          className={`form-title ${displayProductForm && "hide-title"}`}
          onClick={showLocationForm}
        >
          <h3>Locations</h3>
        </div>
        <form className={`search-form ${displayLocationForm && "active-form"}`}>
          <section>
            <p>
              <label htmlFor="section">
                <span>Section:</span>
              </label>
              <select id="section" name="sections">
                <option defaultValue="">All</option>
                <option value="freezer">Freezer</option>
                <option value="alcohol">Alcohol</option>
                <option value="dairy">Dairy</option>
              </select>
            </p>
            <p>
              <label htmlFor="shelf">
                <span>Shelf:</span>
              </label>
              <select id="shelf" name="shelf_letter">
                <option defaultValue="">All</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>
            </p>
            <p>
              <label htmlFor="division">
                <span>Division:</span>
              </label>
              <select id="division" name="shelf_div">
                <option defaultValue="">All</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
              </select>
            </p>
          </section>
          <section>
            <p>
              <button type="submit"className="submitButton">Search Locations</button>
            </p>
            <p>
              <button onClick={(e) => showLocationForm(e)}className="backButton">Go Back</button>
            </p>
          </section>
        </form>
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
              <input
                type="text"
                id="name"
                name="name"
                defaultValue=""
                placeholder="All Products"
              />
            </p>
            <p>
              <label htmlFor="brand">
                <span>Brand:</span>
              </label>
              <input
                type="text"
                id="brand"
                defaultValue=""
                placeholder="All Brands"
              />
            </p>
            <p>
              <label htmlFor="price">
                <span>Price:</span>
              </label>
              <input
                type="number"
                id="price"
                defaultValue=""
                placeholder="Any Price"
              />
            </p>
          </section>
          <section>
            <p>
              <button type="submit" className="submitButton">Search Product</button>
            </p>
            <p>
              <button onClick={(e) => showProductForm(e)} className="backButton">Go Back</button>
            </p>
          </section>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
