import React from "react";
import Collapsible from "react-collapsible";
import { orderByShelf } from "../helpers/locations";

import ItemBox from "./ItemBox";

import "./SubBox.css";

function SubBox(props) {
  const [shelfKeys, shelfs] = orderByShelf(props.subSections);

  const displaySubSections = shelfKeys.map((shelfKey, index) => (
    <li key={index}>
      <div className="line"></div>
      <Collapsible
        open
        trigger={
          <button type="button" class="collapsibleButton">
            Shelf {shelfKey} ------------
          </button>
        }
        lazyRender="false"
        className=""
      >
        <div className="content">
          <ItemBox items={shelfs[shelfKey]} />
        </div>
      </Collapsible>
    </li>
  ));
  return <div className="subBox">{displaySubSections}</div>;
}

export default SubBox;
