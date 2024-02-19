
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api_key, base_url } from './key'
// import { api_key, base_url } from './key'

export const footerApi = createApi({
    reducerPath: 'footerApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({

  
      getFooterSocial: builder.query({
        query: (lang) => ({
          url: `/social/links`,
          headers: {
            "Api-key": api_key,
            "Accept-Language": lang,
          },
        }),
      }),


    }),
  })

  export const { useGetFooterSocialQuery } = footerApi

