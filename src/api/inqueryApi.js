import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_key, base_url } from "./key";

// Define a service using a base URL and expected endpoints
export const inqueryApi = createApi({
  reducerPath: "inqueryApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ["inquery"],
  endpoints: (builder) => ({
    getInQuery: builder.query({
      query: (token) => ({
        url: `/automobiles`,
        headers: {
          "Api-Key": api_key,

          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["inquery"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetInQueryQuery } = inqueryApi;
