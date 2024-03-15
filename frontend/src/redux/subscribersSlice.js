import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subscribersApi = createApi({
  reducerPath: "subscribersapi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BE_URL}/subscribe/`,
  }),
  endpoints: (builder) => ({
    subscribeToNewsletter: builder.mutation({
      query: (formData) => ({
        url: "",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useSubscribeToNewsletterMutation } = subscribersApi;
