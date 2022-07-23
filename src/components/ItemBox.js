import React, { useState } from "react";

import "./ItemBox.css";

function ItemBox(props) {
  const shelf_divs = props.items;
  console.log(shelf_divs);

  const [count, setCount] = useState(0);
  //Displays an array of itmes from a call to the
  const displayItems = shelf_divs.map((division, index) => (
    <li key={index}>
      <div className="itemBox">
        {/* <div className="itemName"> */}
        <textarea className="scrollableTextBox" name="itemName">
          {division.shelf_div}
        </textarea>

        {/* </div> */}
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
          {/* <input value={item.qauntity} maxLength="5"></input> */}
          <textbox className="quantTextBox" name="itemQnt">
            {count} {/* Just to have a number */}
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
