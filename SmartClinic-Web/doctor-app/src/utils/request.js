import axios from "axios";

axios.defaults.baseURL =  import.meta.env.VITE_BASE_URL || "http://13.37.226.34:5000/api/v1"

export const request = async ({
  method,
  route,
  body,
  auth = false,
  optimistic,
  rollback,
}) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (auth) {
    headers.Authorization = `Bearer ${localStorage.access_token}`;
  }

  try {
    if (optimistic) {
      optimistic(body);
    }

    const response = await axios.request({
      method, 
      headers,
      url: route,
      data: body,
    });

    return response.data;
  } catch (error) {
    if (rollback) {
      rollback();
    }

    return {
      error: true,
      message: error.response?.data || "Something went wrong",
      status: error.response?.status || 500,
    };
  }
};
