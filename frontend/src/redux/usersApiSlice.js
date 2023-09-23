import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/users/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "register",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (loginData) => ({
        url: "login",
        method: "POST",
        body: loginData,
      }),
    }),
    authorizedUser: builder.query({
      query: () => "user",
    }),
    update: builder.mutation({
      query: (userData) => ({
        url: "update",
        method: "PUT",
        body: userData,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useAuthorizedUserQuery,
  useUpdateMutation,
} = usersApi;
