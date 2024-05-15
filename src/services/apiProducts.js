import {
  axiosDeleteRequest,
  axiosGetRequest,
  axiosPostRequest,
  axiosPutRequest,
} from "./requests";

export const getAllProducts = async (param) => {
  const res = await axiosGetRequest("product", param);
  return res;
};
export const getProduct = async (id) => {
  const res = await axiosGetRequest(`product/${id}`);
  return res;
};
export const createProduct = async (body) => {
  const res = await axiosPostRequest(
    "product",
    body,
    null,
    "multipart/form-data"
  );
  return res;
};
export const updateProductApi = async ({ id, body }) => {
  const res = await axiosPutRequest(
    `product/${id}`,
    body,
    null,
    "multipart/form-data"
  );
  return res;
};
export const deleteProductApi = async (id) => {
  const res = await axiosDeleteRequest(`product/${id}`);
  return res;
};
