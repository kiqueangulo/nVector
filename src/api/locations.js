import axios from "axios";

const LOCATION_URL = "https://mocki.io/v1/28348735-6572-4cfd-b0fd-e8c88aa25e67";

const getAllLocations = () => axios.get(LOCATION_URL);
const createLocation = (body) => axios.post(LOCATION_URL, body);
const getOneLocation = (id) => axios.get(`${LOCATION_URL}/${id}`);
const updateLocation = (id) => axios.put(`${LOCATION_URL}/${id}`);

export const locationsCall = {
  getAllLocations,
  createLocation,
  getOneLocation,
  updateLocation,
};
