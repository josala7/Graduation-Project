import { errorToast } from "../utils/toastUtils";
import apiRequest from "./apiRequests";
export const baseUrl = "https://aegina.onrender.com/api/v1";

export const axiosGetRequest = async (
  api,
  params,
  contentType = "application/json"
) => {
  try {
    const { data } = await apiRequest.get(`${baseUrl}/${api}`, {
      headers: {
        token: `${localStorage.getItem("token")}`,
        "Content-Type": contentType,
      },
      params,
    });
    return data;
  } catch (error) {
    throw error.response.data.err;
  }
};

export const axiosPostRequest = async (
  api,
  data,
  params,
  contentType = "application/json",
  responseBlob = false
) => {
  try {
    const config = {
      headers: {
        token: `${localStorage.getItem("token")}`,
        "Content-Type": contentType,
      },
      params: params,
      responseType: responseBlob ? "blob" : "json",
    };

    const { data: res } = await apiRequest.post(
      `${baseUrl}/${api}`,
      data,
      config
    );
    return res;
  } catch (error) {
    throw error.response.data.err;
  }
};

export const axiosPutRequest = async (
  api,
  data,
  params,
  contentType = "application/json"
) => {
  // try {
  //   const { data: res } = await apiRequest.put(`${baseUrl}/${api}`, data, {
  //     headers: {
  //       token: `${localStorage.getItem("token")}`,
  //       "Content-Type": contentType,
  //     },
  //     params,
  //   });
  //   return res;
  // } catch (error) {
  //   if (
  //     error?.response?.data?.error?.message ==
  //     "An internal error occurred during your request!"
  //   ) {
  //     errorToast("حدث خطأ،يرجى التحدث للدعم الفنى");
  //     return;
  //   }
  //   if (error?.response?.status == 400) {
  //     errorToast(error?.response?.data?.error?.details);
  //     return;
  //   }
  //   if (error?.response?.status == 403) {
  //     errorToast("حدث خطا!");
  //     return;
  //   }
  //   if (defaultErrorMessage) {
  //     errorToast(error?.response?.data?.error?.message);
  //     return;
  //   }
  //   return error;
  // }
  try {
    const token = localStorage.getItem("token");

    if (!token) throw new Error("هذا المستخدم لم يقم بتسجيل الدخول");

    const response = await apiRequest.put(
      `${baseUrl}/${api}`,
      data,
      {
        headers: {
          token: `${localStorage.getItem("token")}`,
          "Content-Type": contentType,
        },
      },
      params
    );

    return response.data;
  } catch (error) {
    throw error.response.data.err;
  }
};

export const axiosDeleteRequest = async (
  api,
  params,
  contentType = "application/json"
) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found."); // Throw an error if token is missing
    }

    const response = await apiRequest.delete(`${baseUrl}/${api}`, {
      headers: {
        token,
        "Content-Type": contentType,
      },
      params,
    });

    return response.data;
  } catch (error) {
    throw error.response.data.err;
  }
};
