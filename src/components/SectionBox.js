import React from "react";

import SubBox from "./SubBox";

import "./SectionBox.css";

function SectionBox(props) {
    const url = new URL(window.location);
    const urlPath = url.pathname.slice(1);
    console.log(urlPath)
    // const sectionName = 
  return (
    <div className="sectionBody">
      <div className="sectionHeader">
       <h2> {urlPath}</h2>
      </div>
      <SubBox subSections={props.subSections} />
    </div>
  );
}

export default SectionBox;
