import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authAction";

type INITIALSTATE = {
  data: null | unknown;
  loading: boolean;
  error: null | unknown;
};

const initialState: INITIALSTATE = {
  data: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser?.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser?.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
    });
    builder.addCase(registerUser?.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
