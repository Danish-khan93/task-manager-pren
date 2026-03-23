import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../utiles/fetch";
import { isAxiosError } from "axios";

type props = {
  url: string;
  method: "get" | "post" | "put" | "patch" | "delete";
  data?: unknown;
};

export const registerUser = createAsyncThunk(
  "user/createUser",
  async (data: props, thunkAPI) => {
    try {
      const response = await fetchData({
        url: data?.url,
        method: data?.method,
        data: data?.data,
      });

      return response;
    } catch (error: unknown) {
      if (isAxiosError(error) && error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  },
);

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (data: props, thunkAPI) => {
    try {
      const response = await fetchData({
        url: data?.url,
        method: data?.method,
        data: data?.data,
      });

      return response;
    } catch (error) {
      if (isAxiosError(error) && error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  },
);
