import { request } from "../../utils/request.js";

export const addMedicine = async (data) => {
  try {
    const response = await request({
      method: "POST",
      route: "/doctor/createprescription",
      body: data,
      auth: true,
    });

    if (response.error) {
      throw new Error(response.message);
    }

    return response.data;
  } catch (error) {
    console.error("Add medicine error:", error);
    throw error;
  }
};
