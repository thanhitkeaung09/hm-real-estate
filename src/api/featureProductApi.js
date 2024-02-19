
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api_key, base_url } from './key'
// import { api_key, base_url } from './key'

export const featureProductApi = createApi({
    reducerPath: 'featureProductApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({

  
      getfeatureproducts: builder.query({
        query: (lang) => ({
          url: `/features/automobiles`,
          headers: {
            "Api-key": api_key,
            "Accept-Language": lang,
            "Accept":"application/json"
          },
        }),
      }),


    }),
  })

  export const { useGetfeatureproductsQuery } = featureProductApi

