import React, { createContext, useContext } from "react";
import { useLocation } from "../hooks/locations.js";

const LocationContext = createContext();

export function useLocationContext() {
  return useContext(LocationContext);
}

export default function LocationProvider({ children }) {
  const [allLocations] = useLocation();

  return (
    <LocationContext.Provider
      value={{
        allLocations: allLocations,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
