
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api_key, base_url } from './key'
// import { api_key, base_url } from './key'

export const bannerApi = createApi({
    reducerPath: 'bannerApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        
      getBanners: builder.query({
        query: () => ({
          url: `/banners`,
          headers: {
            "Api-key": api_key,
          },
        }),
      }),


    }),
  })

  export const { useGetBannersQuery } = bannerApi

