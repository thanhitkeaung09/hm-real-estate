
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api_key, base_url } from './key'
// import { api_key, base_url } from './key'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({

  
      getCategories: builder.query({
        query: (lang) => ({
          url: `/parent/categories`,
          headers: {
            "Api-key": api_key,
            "Accept-Language": lang,
            "Accept":"application/json"
          },
        }),
      }),
      


    }),
  })

  export const { useGetCategoriesQuery } = categoryApi

