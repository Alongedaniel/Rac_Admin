import { apiSlice } from "../api";


const orderSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints:(builder)=> ({
        orderRequest: builder.query({
            query: () => ({
                url: "/sfmRequests/admin/allRequests",
                method: 'GET',
                headers: {
                    authorization: `Bearer ${
                      JSON.parse(localStorage.getItem("auth")).jwt
                    }`,
                  },
            })
        }),
    })
})


export  const {useOrderRequestQuery} = orderSlice
