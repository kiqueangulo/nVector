import React from "react";
import { orderByShelf } from "../helpers/locations";

import ItemBox from "./ItemBox";

import "./SubBox.css";

function SubBox(props) {
  const [shelfKeys, shelfs] = orderByShelf(props.subSections);

  const displaySubSections = shelfKeys.map((shelfKey, index) => (
    // className = subsection + content
    <li key={index}>
      <button type="button" class="collapsible">
        Shelf {shelfKey}
      </button>
      <div className={shelfKey}>
        <ItemBox items={shelfs[shelfKey]} />
      </div>
    </li>
  ));

  return <div className="subBox">{displaySubSections}</div>;
}

export default SubBox;
