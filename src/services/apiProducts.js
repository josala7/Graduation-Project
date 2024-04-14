import {
  axiosDeleteRequest,
  axiosGetRequest,
  axiosPostRequest,
} from "./requests";

export const getAllProducts = async () => {
  const res = await axiosGetRequest("product");
  return res;
};
export const getProduct = async (id) => {
  const res = await axiosGetRequest(`product/${id}`);
  return res;
};
export const createProduct = async (body) => {
  const res = await axiosPostRequest("product", body);
  return res;
};
export const updateProduct = async (id, body) => {
  const res = await axiosGetRequest(`product/${id}`, body);
  return res;
};
export const deleteProduct = async (id) => {
  const res = await axiosDeleteRequest(`product/${id}`);
  return res;
};
