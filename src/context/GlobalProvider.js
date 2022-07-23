import React from "react";
import { LocationProvider } from "./LocationContext";

function GlobalProvider({ children }) {
  return <LocationProvider>{children}</LocationProvider>;
}

export default GlobalProvider;
