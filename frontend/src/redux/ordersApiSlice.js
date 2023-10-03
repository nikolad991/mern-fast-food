import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
  reducerPath: "ordersapi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BE_URL}/orders/`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "create",
        method: "POST",
        body: orderData,
      }),
    }),
    getOrder: builder.query({
      query: (orderId) => `${orderId}`,
    }),
    getOrdersByUser: builder.query({
      query: () => "myorders",
      transformResponse: (res) =>
        res.sort((a, b) => (b.date > a.date ? 1 : -1)),
    }),
    confirmOrder: builder.mutation({
      query: (orderId) => ({
        url: "confirm",
        method: "PUT",
        body: orderId,
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderQuery,
  useGetOrdersByUserQuery,
  useConfirmOrderMutation,
} = ordersApi;
