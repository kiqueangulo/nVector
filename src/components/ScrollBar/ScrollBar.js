import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import useLocationContext from "../../context/LocationContext.js";

import SectionBox from "../SectionBox.js";

import "./ScrollBar.css";

function ScrollBar() {
  const { allLocations } = useLocationContext();
  const [sectionKeys, sectionsObj] = allLocations;
  console.log(sectionKeys);
  console.log(sectionsObj);

  const displaySections = sectionKeys?.map((section, index) => (
    <Link to={`${section}`} key={index} className="section-item">
      {section}
    </Link>
  ));

  const sectionRoutes = sectionKeys?.map((section, index) => (
    <Route
      key={index}
      path={`${section}`}
      element={<SectionBox subSections={sectionsObj[section]} />}
    />
  ));

  return (
    <Router>
      <div className="section-wrapper">{displaySections}</div>
      <Routes>{sectionRoutes}</Routes>
    </Router>
  );
}

export default ScrollBar;
