import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/data' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
        query: () => 'db.products.json',
    }),
    getProductById: builder.query({
      query: () => 'db.products.json', 
      transformResponse: (response, meta, id) => {
        console.log("Received response:", response);
        console.log("Searching for product with ID:", id);
    
        return response.products.find((product) => product.id.toString() === id) || null;
      },
    }),

  }),
})

export const { useGetAllProductsQuery, useGetProductByIdQuery} = productsApi;