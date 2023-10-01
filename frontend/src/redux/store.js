import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { usersApi } from "./usersApiSlice";
import authSlice from "./authSlice";
import { ordersApi } from "./ordersApiSlice";
import { sliderApi } from "./sliderSlice";
import { contactFormApi } from "./contactFormSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    [usersApi.reducerPath]: usersApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
    [contactFormApi.reducerPath]: contactFormApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(ordersApi.middleware)
      .concat(sliderApi.middleware)
      .concat(contactFormApi.middleware),
});
