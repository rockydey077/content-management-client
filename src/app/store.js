import { configureStore } from "@reduxjs/toolkit";
import { blogsApi } from "../features/api/apiSlice";

const store = configureStore({
  reducer: {
    [blogsApi.reducerPath]: blogsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogsApi.middleware),
});

export default store;
