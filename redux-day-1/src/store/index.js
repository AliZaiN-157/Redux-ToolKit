import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const ReduxStore = configureStore({
  reducer: {},
  middleware: { ...getDefaultMiddleware() },
});

export default ReduxStore;
