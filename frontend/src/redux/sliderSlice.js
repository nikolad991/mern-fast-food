import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sliderApi = createApi({
  reducerPath: "sliderapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/slider/",
  }),
  endpoints: (builder) => ({
    getSlider: builder.query({
      query: () => "",
    }),
  }),
});
export const { useGetSliderQuery } = sliderApi;
