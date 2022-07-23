import { useState, useEffect } from "react";
import { locationsCall } from "../api/locations";
import { separateBySections } from "../helpers/locations";

export function useLocation() {
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await locationsCall.getAllLocations();
        setAllLocations(separateBySections(data.locations));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return [allLocations];
}
