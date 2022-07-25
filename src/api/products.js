import axios from "axios";

const PRODUCT_URL =
  "https://nventory-postgres-database.herokuapp.com/products/";

const getAllProducts = () => axios.get(PRODUCT_URL);
const createProduct = (body) => axios.post(PRODUCT_URL, body);
const getOneProduct = (id) => axios.get(`${PRODUCT_URL}/${id}`);
const updateProduct = (id) => axios.put(`${PRODUCT_URL}/${id}`);
const deleteProduct = (id) => axios.delete(`${PRODUCT_URL}/${id}`);

export const productsCall = {
  getAllProducts,
  createProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
