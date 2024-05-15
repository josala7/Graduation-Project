import {
  axiosDeleteRequest,
  axiosGetRequest,
  axiosPostRequest,
} from "./requests";

export const getAllOrders = async (param) => {
  const res = await axiosGetRequest("order", param);
  return res;
};
export const getOrder = async (id) => {
  const res = await axiosGetRequest(`order/${id}`);
  return res;
};
export const createOrder = async (body) => {
  const res = await axiosPostRequest(
    "order",
    body,
    null,
    "multipart/form-data"
  );
  return res;
};
