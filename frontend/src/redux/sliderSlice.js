import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sliderApi = createApi({
  reducerPath: "sliderapi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BE_URL}/slider/`,
  }),
  endpoints: (builder) => ({
    getSlider: builder.query({
      query: () => "",
    }),
  }),
});
export const { useGetSliderQuery } = sliderApi;
