import React from "react";
import { Link } from "react-router-dom";
import useLocationContext from "../../context/LocationContext.js";

import "./ScrollBar.css";

function ScrollBar() {
  const { allLocations } = useLocationContext();
  const [sectionKeys] = allLocations;

  const displaySections = sectionKeys?.map((section, index) => (
    <Link to={`${section}`} key={index} className="section-item">
      {section}
    </Link>
  ));

  return <div className="section-wrapper">{displaySections}</div>;
}

export default ScrollBar;
