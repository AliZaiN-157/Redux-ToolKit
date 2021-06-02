import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";

const ReduxStore = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: [...getDefaultMiddleware()],
});

export default ReduxStore;
