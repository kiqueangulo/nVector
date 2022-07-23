import React from "react";
import SubBox from "./SubBox";

import "./SectionBox.css";

function SectionBox(props) {
  return (
    <div className="sectionBody">
      <SubBox subSections={props.subSections} />
    </div>
  );
}

export default SectionBox;
