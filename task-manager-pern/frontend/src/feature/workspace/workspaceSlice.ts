import { createSlice } from "@reduxjs/toolkit";

type board = {
  id: number;
  boardName: string;
  bgColor?: string;
  bgImage?: string;
};

const initialState = {
  loading: false,
  error: null,
  boardList: [] as board[],
};

const workSpaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    createBoard: (state, action) => {
      const id = state.boardList.length + 1;
      action.payload.id = id;
      state.boardList.push(action.payload);
    },
  },
});

export default workSpaceSlice.reducer;
export const { createBoard } = workSpaceSlice.actions;
