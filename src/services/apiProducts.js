import {
  axiosDeleteRequest,
  axiosGetRequest,
  axiosPostRequest,
} from "./requests";

export const getAllProducts = async (param) => {
  const res = await axiosGetRequest("product", param);
  return res;
};
export const getProduct = async (id) => {
  try {
    const res = await axiosGetRequest(`product/${id}`);
    return res;
  } catch (error) {
    throw new Error("حدث خطأ");
  }
};
export const createProduct = async (body) => {
  try {
    const res = await axiosPostRequest(
      "product",
      body,
      null,
      "multipart/form-data"
    );
    return res;
  } catch (error) {
    throw new Error("حدث خطأ");
  }
};
export const updateProductApi = async ({ id, body }) => {
  const res = await axiosGetRequest(
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
