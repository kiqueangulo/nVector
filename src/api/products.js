import axios from "axios";

const PRODUCT_URL =
  "https://nventory-postgres-database.herokuapp.com/products/";

const getAllProducts = () => axios.get(PRODUCT_URL);

export const productsCall = { getAllProducts };
