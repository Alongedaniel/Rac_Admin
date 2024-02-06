import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const PROD = 'https://rac-backend.onrender.com/api'
export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    tagTypes: ['orders'],
    baseQuery: fetchBaseQuery({ baseUrl: PROD, credentials: 'include'}),
    keepUnusedDataFor: 30,
    endpoints:() => ({})
})
