import { apiSlice } from "../api";

const authSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (body) => ({
        url: "/users/auth",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginAdminMutation } = authSlice;
