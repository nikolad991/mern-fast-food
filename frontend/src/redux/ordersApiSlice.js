import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "ordersapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/orders/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/create",
        method: "POST",
        body: orderData,
      }),
    }),
    getOrder: builder.query({
      query: (orderId) => `${orderId}`,
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderQuery } = ordersApi;
