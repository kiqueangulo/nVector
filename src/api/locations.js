import axios from "axios";

const LOCATION_URL =
  "https://nventory-postgres-database.herokuapp.com/locations";

const getAllLocations = () => axios.get(LOCATION_URL);
const createLocation = (body) => axios.post(LOCATION_URL, body);
const getOneLocation = (id) => axios.get(`${LOCATION_URL}/${id}`);
const updateLocation = (id) => axios.put(`${LOCATION_URL}/${id}`);
const deleteLocation = (id) => axios.delete(`${LOCATION_URL}/${id}`);

export const locationsCall = {
  getAllLocations,
  createLocation,
  getOneLocation,
  updateLocation,
  deleteLocation,
};
