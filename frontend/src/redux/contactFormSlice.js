import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactFormApi = createApi({
  reducerPath: "contactformapi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BE_URL}/contact/`,
  }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (formData) => ({
        url: "",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useSendMessageMutation } = contactFormApi;
