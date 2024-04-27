import {
  axiosDeleteRequest,
  axiosGetRequest,
  axiosPostRequest,
  axiosPutRequest,
} from "./requests";

export const getAllProductsCategory = async () => {
  const res = await axiosGetRequest("categories");
  return res;
};

export const addProductCategory = async (body) => {
  const res = await axiosPostRequest(
    "categories",
    body,
    null,
    "multipart/form-data"
  );
  return res;
};

export const updateProductCategory = async ({ id, body }) => {
  const res = await axiosPutRequest(
    `categories/${id}`,
    body,
    null,
    "multipart/form-data"
  );
  return res;
};

export const deleteProductCategory = async (id) => {
  const res = await axiosDeleteRequest(`categories/${id}`);
  return res;
};
