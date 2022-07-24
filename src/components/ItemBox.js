import React, { useState } from "react";

import "./ItemBox.css";

function ItemBox(props) {
  const shelf_divs = props.items;

  let [count, setCount] = useState(200);

  const displayItems = shelf_divs.map((division, index) => (
    <li key={index}>
      <div className="itemBox">
        <button className="infoButton">i</button>
        <textarea
          class="scrollableTextBox"
          name="itemName"
          defaultValue={division.shelf_div}
        ></textarea>
        <div className="quantField">
          <button
            className="minusButton"
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              } else {
                count = 0;
              }
            }}
          >
            {" "}
            -
          </button>
          <textbox class="quantTextBox" name="itemQnt">
            {count}
          </textbox>
          <button className="plusButton" onClick={() => setCount(count + 1)}>
            {" "}
            +{" "}
          </button>
        </div>
        <div className="remove">remove</div>
      </div>
    </li>
  ));

  return <div>{displayItems}</div>;
}

export default ItemBox;
