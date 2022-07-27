import axios from "axios";

const PRODUCT_URL =
  "https://nventory-postgres-database.herokuapp.com/products/";

const getAllProducts = (body) => axios.get(PRODUCT_URL, { params: body });

const createProduct = async (body) => {
  try {
    const { data } = await axios.post(PRODUCT_URL, body);

    return data.data;
  } catch (err) {
    console.log(err);
  }
};

const getOneProduct = async (id) => {
  try {
    const { data } = await axios.get(`${PRODUCT_URL}/${id}`);

    return data;
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (id, body) => {
  try {
    await axios.put(`${PRODUCT_URL}/${id}`, body);
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = (id) => axios.delete(`${PRODUCT_URL}/${id}`);

export const productsCall = {
  getAllProducts,
  createProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
