import { axiosGetRequest } from "./requests";

export const getCurrentUser = async () => {
  const res = await axiosGetRequest(`user/currentuser`);
  return res;
};
