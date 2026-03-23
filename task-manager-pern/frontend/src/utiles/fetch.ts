import { api } from "../axiosConfig/axiosInstance";

type props = {
  url: string;
  method: "get" | "post" | "put" | "patch" | "delete";
  data?: unknown;
};

export const fetchData = async ({ url, method, data }: props) => {
  try {
    const response = await api({ url, method, data });
    return response?.data;
  } catch (error) {
    throw error;
  }
};
