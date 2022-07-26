import axios from "axios";

const LOCATION_URL =
  "https://nventory-postgres-database.herokuapp.com/locations";

const getAllLocations = () => axios.get(LOCATION_URL);

const createLocation = async (body) => {
  try {
    const newLocation = await axios.post(LOCATION_URL, body);
    console.log(newLocation);
  } catch (err) {
    console.log(err);
  }
};

const getOneLocation = (id) => axios.get(`${LOCATION_URL}/${id}`);
const updateLocation = (id, body) => axios.put(`${LOCATION_URL}/${id}`, body);
const deleteLocation = (id) => axios.delete(`${LOCATION_URL}/${id}`);

export const locationsCall = {
  getAllLocations,
  createLocation,
  getOneLocation,
  updateLocation,
  deleteLocation,
};
