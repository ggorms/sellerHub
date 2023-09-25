import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const storeApi = createApi({
    tagTypes:['tag'],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
    endpoints: (builder) => ({
        getSellers: builder.query({
            query: () => 'api/sellers'
        }),
        getSellerById: builder.query({
            query: (id) => `api/sellers/${id}`
        }),
        getProducts: builder.query({
            query: () => 'api/products'
        }),
        getProductById: builder.query({
            query: (id) => `api/products/${id}`
        }),
        getProductsBySellerId: builder.query({
            query: (id) => `api/products/seller/${id}`
        }),
        addProduct: builder.mutation({
            query: (body) => ({
                url: 'api/products',
                method: 'POST',
                body: body
            })
        }),
        editProduct: builder.mutation({
            query(data){
                const {id, ...body} = data;
                return {
                    url: `api/products/${id}`,
                    method: "PUT",
                    body
                }
            }
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `api/products/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const {useGetSellersQuery, useGetSellerByIdQuery, useGetProductsQuery, useGetProductByIdQuery, useGetProductsBySellerIdQuery, useAddProductMutation, useEditProductMutation, useDeleteProductMutation} = storeApi