import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"; // Ensure the file path is correct and consistent in casing

export const store = configureStore({
  reducer: {
    user: userReducer, // This combines your user slice reducer with the store
  },
});
