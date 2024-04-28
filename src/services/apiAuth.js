import axios from "axios";
import { baseUrl } from "./requests";

export const apiLogin = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/signin`, body);

    const token = response.data.token;

    localStorage.setItem("token", token);

    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error.response.data.err;
  }
};

export const apiSignUp = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/signup`, body);

    // Assuming the server returns a token upon successful login
    const token = response.data.token;

    localStorage.setItem("token", token);

    return response.data;
  } catch (error) {
    throw error.response.data.err;
  }
};

export const apiLogout = () => {
  localStorage.removeItem("token");
};
