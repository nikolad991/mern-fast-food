import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { usersApi } from "./usersApiSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
