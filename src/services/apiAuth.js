import axios from "axios";
import { baseUrl } from "./requests";

export const apiLogin = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/signin`, body);

    // Assuming the server returns a token upon successful login
    const token = response.data.token;

    // Perform any necessary actions with the token, such as storing it in local storage or a state management system
    localStorage.setItem("token", token);

    // Return any relevant data from the response
    return response.data;
  } catch (error) {
    // Handle errors, such as displaying error messages or logging them
    console.error("Login failed:", error);
    throw error; // Rethrow the error to be caught by the caller if necessary
  }
};

export const apiSignUp = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/signup`, body);

    // Assuming the server returns a token upon successful login
    const token = response.data.token;

    // Perform any necessary actions with the token, such as storing it in local storage or a state management system
    localStorage.setItem("token", token);

    // Return any relevant data from the response
    return response.data;
  } catch (error) {
    // Handle errors, such as displaying error messages or logging them
    console.error("Login failed:", error);
    throw error; // Rethrow the error to be caught by the caller if necessary
  }
};

export const apiLogout = () => {
  localStorage.removeItem("token");
};
