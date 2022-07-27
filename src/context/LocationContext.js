import React, { createContext, useContext, useState } from "react";
import { locationsCall } from "../api/locations.js";
import { useLocation } from "../hooks/locations.js";

const LocationContext = createContext();

export function useLocationContext() {
  return useContext(LocationContext);
}

export default function LocationProvider({ children }) {
  const allLocations = useLocation();
  const [locationBody, setLocationBody] = useState({
    sections: "",
    shelf_letter: "",
    shelf_div: "",
  });

  return (
    <LocationContext.Provider
      value={{
        locationsCall: locationsCall,
        allLocations: allLocations,
        locationBody: locationBody,
        setLocationBody,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
