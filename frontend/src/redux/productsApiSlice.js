import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsApi = createApi({
  reducerPath: "productsapi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BE_URL}/products/`,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "all",
    }),
    getProductByCategory: builder.query({
      query: (category) => `category/${category}`,
    }),
    getFeaturedProducts: builder.query({
      query: () => "featured",
    }),
    getSingleProduct: builder.query({
      query: (productId) => `${productId}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetFeaturedProductsQuery,
  useGetSingleProductQuery,
} = productsApi;
