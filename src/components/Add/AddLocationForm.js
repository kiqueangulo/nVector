import React from "react";
import { useGeneralContext } from "../../context/GeneralContext";
import { useLocationContext } from "../../context/LocationContext";

function AddLocationForm() {
  const { displayLocationForm, setDisplayLocationForm, displayProductForm } =
    useGeneralContext();

  const { locationBody, setLocationBody } = useLocationContext();

  const showLocationForm = (e) => {
    e.preventDefault();
    setDisplayLocationForm(!displayLocationForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <>
      <div
        className={`form-title ${displayProductForm && "hide-title"}`}
        onClick={showLocationForm}
      >
        <h3>Locations</h3>
      </div>
      <form
        className={`search-form ${displayLocationForm && "active-form"}`}
        onSubmit={handleSubmit}
      >
        <section>
          <p>
            <label htmlFor="section">
              <span>Section:</span>
            </label>
            <input
              type="text"
              id="section"
              name="sections"
              value={locationBody.sections}
              onChange={(event) =>
                setLocationBody({
                  ...locationBody,
                  sections: event.target.value,
                })
              }
              required
            />
          </p>
          <p>
            <label htmlFor="shelf">
              <span>Shelf:</span>
            </label>
            <input type="text" id="shelf" name="shelf_letter" required />
          </p>
          <p>
            <label htmlFor="division">
              <span>Division:</span>
            </label>
            <input type="text" id="division" name="shelf_div" required />
          </p>
        </section>
        <section>
          <p>
            <button type="submit">Add Locations</button>
          </p>
          <p>
            <button onClick={(e) => showLocationForm(e)}>Go Back</button>
          </p>
        </section>
      </form>
    </>
  );
}

export default AddLocationForm;
