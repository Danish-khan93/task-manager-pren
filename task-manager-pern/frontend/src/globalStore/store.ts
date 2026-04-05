import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../feature/auth/authSlice";
import workSpaceReducer from "../feature/workspace/workspaceSlice";
export const store = configureStore({
  reducer: {
    user: UserReducer,
    workspace: workSpaceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
