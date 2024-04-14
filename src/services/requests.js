import { errorToast } from "../utils/toastUtils";
import apiRequest from "./apiRequests";
const baseUrl = "http://localhost:3000/api/v1";

const tokenConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
};

export const axiosGetRequest = async (
  api,
  params,
  defaultErrorMessage = true
) => {
  try {
    const { data } = await apiRequest.get(`${baseUrl}/${api}`, {
      ...tokenConfig,
      params,
    });
    return data;
  } catch (error) {
    if (
      error?.response?.data?.error?.message ==
      "An internal error occurred during your request!"
    ) {
      errorToast("حدث خطأ،يرجى التحدث للدعم الفنى");
      return;
    }
    if (error?.response?.status == 400) {
      errorToast(error?.response?.data?.error?.details);
      return;
    }
    if (error?.response?.status == 403) {
      errorToast("حدث خطا!");
      return;
    }
    if (defaultErrorMessage) {
      errorToast(error?.response?.data?.error?.message);
      return;
    }
    return error;
  }
};

export const axiosPostRequest = async (
  api,
  data,
  params,
  defaultErrorMessage = true,
  responseBlob = false
) => {
  try {
    const config = {
      ...tokenConfig,
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
    if (
      error?.response?.data?.error?.message ==
      "An internal error occurred during your request!"
    ) {
      errorToast("حدث خطأ،يرجى التحدث للدعم الفنى");
      return;
    }
    if (error?.response?.status == 400) {
      errorToast(error?.response?.data?.error?.details);
      return;
    }
    if (error?.response?.status == 403) {
      errorToast("حدث خطا!");
      return;
    }
    if (defaultErrorMessage) {
      errorToast(error?.response?.data?.error?.message);
      return;
    }

    return error;
  }
};

export const axiosPutRequest = async (
  api,
  data,
  params,
  defaultErrorMessage = true
) => {
  try {
    const { data: res } = await apiRequest.put(`${baseUrl}/${api}`, data, {
      ...tokenConfig,
      params,
    });
    return res;
  } catch (error) {
    if (
      error?.response?.data?.error?.message ==
      "An internal error occurred during your request!"
    ) {
      errorToast("حدث خطأ،يرجى التحدث للدعم الفنى");
      return;
    }
    if (error?.response?.status == 400) {
      errorToast(error?.response?.data?.error?.details);
      return;
    }
    if (error?.response?.status == 403) {
      errorToast("حدث خطا!");
      return;
    }
    if (defaultErrorMessage) {
      errorToast(error?.response?.data?.error?.message);
      return;
    }
    return error;
  }
};

export const axiosDeleteRequest = async (
  api,
  params,
  defaultErrorMessage = true
) => {
  try {
    const { data: res } = await apiRequest.delete(`${baseUrl}/${api}`, {
      ...tokenConfig,
      params,
    });
    return res;
  } catch (error) {
    if (
      error?.response?.data?.error?.message ==
      "An internal error occurred during your request!"
    ) {
      errorToast("حدث خطأ،يرجى التحدث للدعم الفنى");
      return;
    }
    if (error?.response?.status == 400) {
      errorToast(error?.response?.data?.error?.details);
      return;
    }
    if (error?.response?.status == 403) {
      errorToast("حدث خطا!");
      return;
    }
    if (defaultErrorMessage) {
      errorToast(error?.response?.data?.error?.message);
      return;
    }
    return error;
  }
};
