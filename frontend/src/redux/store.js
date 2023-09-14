import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { usersApi } from "./usersApiSlice";

export const store = configureStore({
  reducer: { cart: cartSlice, [usersApi.reducerPath]: usersApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
