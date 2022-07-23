import React from "react";
import { Route } from "react-router-dom";
import useLocationContext from "../../context/LocationContext";

import SectionBox from "../SectionBox";

function ScrollBarRoutes() {
  const { allLocations } = useLocationContext();
  const [sectionKeys, sectionsObj] = allLocations;

  return (
    <>
      {sectionKeys?.map((section, index) => (
        <Route
          key={index}
          path={`${section}`}
          element={<SectionBox subSections={sectionsObj[section]} />}
        />
      ))}
    </>
  );
}

export default ScrollBarRoutes;
