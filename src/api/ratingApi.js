
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api_key, base_url } from './key'
// import { api_key, base_url } from './key'

export const ratingApi = createApi({
    reducerPath: 'ratingApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({

  
      getRating: builder.query({
        query: ({lang,id,token}) => ({
          url: `/automobiles/${id}/rating/detail`,
          headers: {
            "Api-key": api_key,
            "Accept-Language": lang,
            "Authorization": `Bearer ${token}`
          },
        }),
      }),


    }),
  })

  export const { useGetRatingQuery } = ratingApi

