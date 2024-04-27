import {
  axiosDeleteRequest,
  axiosGetRequest,
  axiosPostRequest,
  axiosPutRequest,
} from "./requests";

export const getAllProductsBrand = async () => {
  const res = await axiosGetRequest("brand");
  return res;
};

export const addProductBrand = async (body) => {
  const res = await axiosPostRequest(
    "brand",
    body,
    null,
    "multipart/form-data"
  );
  return res;
};

export const updateProductBrand = async ({ id, body }) => {
  const res = await axiosPutRequest(
    `brand/${id}`,
    body,
    null,
    "multipart/form-data"
  );
  return res;
};

export const deleteProductBrand = async (id) => {
  const res = await axiosDeleteRequest(`brand/${id}`);
  return res;
};
