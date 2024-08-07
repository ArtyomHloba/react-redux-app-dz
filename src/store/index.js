import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    usersList: usersReducer,
  },
});

export default store;
