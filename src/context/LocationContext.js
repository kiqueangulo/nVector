import React, { createContext, useContext } from "react";
import { useLocation } from "../hooks/locations.js";

export const LocationContext = createContext();

export default function useLocationContext() {
  return useContext(LocationContext);
}

export const LocationProvider = ({ children }) => {
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
};
