
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api_key, base_url } from './key'
// import { api_key, base_url } from './key'

export const pageApi = createApi({
    reducerPath: 'pageApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({

  
      getPages: builder.query({
        query: (lang) => ({
          url: `/pages`,
          headers: {
            "Api-key": api_key,
            "Accept-Language": lang,
          },
        }),
      }),

      getPageById: builder.mutation({
        query: ({lang,id}) => ({
          url: `/detail/page`,
          method: "POST",
          body : {page_id: id},
          headers: {
            "Api-key": api_key,
            "Accept-Language": lang,
          },
        }),
      }),


    }),
  })

  export const { useGetPagesQuery , useGetPageByIdMutation } = pageApi

