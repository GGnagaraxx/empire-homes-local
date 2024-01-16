import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const propertyApiSlice = createApi({
    reducerPath: 'propertyApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'process.env.API_BASE',
    }),

    endpoints: (builder) => ({
        getPropertyList: builder.query({
            query: () => 'api/property/'
        }),
        getProperty: builder.query({
            query: (id) => {
                return `api/property/${id}/`
            }
        }),

    })
})


export const { useGetPropertyListQuery, useGetPropertyQuery } = propertyApiSlice;
export default propertyApiSlice;
