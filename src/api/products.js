import axios from "axios";

// const PRODUCT_URL = "https://dummyjson.com/products";
const PRODUCT_URL = "https://mocki.io/v1/530cdb14-b535-4f55-8657-93f43a711857";

const getAllProducts = () => axios.get(PRODUCT_URL);

export const productsCall = { getAllProducts };
