import axios from "axios";
// import { logoutUser } from "../helpers/utils";

const apiRequest = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

apiRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.response.status);
    if (error.response.status === 401) {
      // logoutUser();
      // window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default apiRequest;
