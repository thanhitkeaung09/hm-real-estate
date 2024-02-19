
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api_key, base_url } from './key'
// import { api_key, base_url } from './key'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({

  
      getProducts: builder.query({
        query: ({lang , id}) => ({
          url: `/automobiles`,
          headers: {
            "Api-key": api_key,
            "Ckdlkfjladjfad":id,
            "Accept-Language": lang,
          },
        }),
      }),

      getProductsByCategory: builder.query({
        query: (lang,id) => ({
          url: `/automobiles?category_id=${id}`,
          headers: {
            "Api-key": api_key,
            "Accept-Language": lang,
          },
        }),
      }),

      getProductById: builder.query({
        query: ({lang , id}) => ({
          url: `/automobiles/${id}`,
          headers: {
            "Api-key": api_key,
            
            "Accept-Language": lang,
          },
        }),
      }),

      getfeatureProduct: builder.query({
        query: () => ({
          url: `/features/automobiles`,
          headers: {
            "Api-key": api_key,
            
          },
        }),
      }),
      


    }),
  })

  export const { useGetProductsQuery , useGetProductsByCategoryQuery , useGetProductByIdQuery , useGetfeatureProductQuery } = productApi

