import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useLocationContext } from "../../context/LocationContext.js";

import "./ScrollBar.css";

function ScrollBar() {
  const { allLocations } = useLocationContext();
  const [sectionKeys] = allLocations;
  
  // const [appState, changeState] = useState({
  //   activeObject:null,
  //   objects:sectionKeys
  // })

  return (
    <div className="section-wrapper">
      {sectionKeys?.map((section, index) => (
        <Link to={`/${section}`} key={index} className="section-item">
          {section}
        </Link>
      ))}
    </div>
  );
}

export default ScrollBar;
