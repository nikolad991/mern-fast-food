import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { usersApi } from "./usersApiSlice";
import authSlice from "./authSlice";
import { ordersApi } from "./ordersApiSlice";
import { sliderApi } from "./sliderSlice";
import { contactFormApi } from "./contactFormSlice";
import { productsApi } from "./productsApiSlice";
import { subscribersApi } from "./subscribersSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    [usersApi.reducerPath]: usersApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
    [contactFormApi.reducerPath]: contactFormApi.reducer,
    [subscribersApi.reducerPath]: subscribersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(productsApi.middleware)
      .concat(ordersApi.middleware)
      .concat(sliderApi.middleware)
      .concat(contactFormApi.middleware)
      .concat(subscribersApi.middleware),
});
