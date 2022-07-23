import React from "react";
import Collapsible from "react-collapsible";

import { orderByShelf } from "../helpers/locations";
import ItemBox from "./ItemBox";

import "./SubBox.css";

//Generate subsection tab
function subSectionTab(index) {
  return (
    <button type="button" class="collapsibleButton">
      Shelf {index} ------------
    </button>
  );
}
function SubBox(props) {
  const [shelfKeys, shelfs] = orderByShelf(props.subSections);

  const displaySubSections = shelfKeys.map((shelfKey, index) => {
    // className = subsection + content
    <li key={index}>
      <div className="line"></div>
      <Collapsible
        open
        trigger={subSectionTab(shelfKey)}
        lazyRender="false"
        className=""
      >
        <div className="content">
          <ItemBox items={shelfs[shelfKey]} />
        </div>
      </Collapsible>
    </li>;
  });
  return <div className="subBox">{displaySubSections}</div>;
}

export default SubBox;
