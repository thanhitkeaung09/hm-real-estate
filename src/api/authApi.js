import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_key, base_url } from "./key";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    CodeResend: builder.mutation({
      query: (email) => ({
        url: "/resend/code",
        method: "POST",
        body: { email: email },
        headers: {
          "Api-Key": api_key,
        },
      }),
      invalidatesTags: ["auth"],
    }),

    Logout: builder.mutation({
      query: (token) => ({
        url: "/logout",
        method: "POST",
        headers: {
          "Api-Key": api_key,
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["auth"],
    }),

    UpdateProfile: builder.mutation({
      query: ( token ) => ({
        url: "/customer/profile/update",
        method: "POST",
        body: { name: "sdljfkdsfkldsklf" },
        headers: {
          "Api-Key": api_key,
          authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }),

      invalidatesTags: ["auth"],
    }),

    register: builder.mutation({
      query: (payload) => ({
        url : '/register',
        method : 'POST',
        body : payload,
        headers: {
          "Api-key": api_key,
          "Accept": "application/json"
        }
      })
    }),

    verify: builder.mutation({
      query: (payload) => ({
        url : '/verify',
        method : 'POST',
        body : payload,
        headers: {
          "Api-key": api_key,
          "Accept": "application/json"
        }
      })
    }),

    login: builder.mutation({
      query: (payload) => ({
        url : '/login',
        method : 'POST',
        body : payload,
        headers: {
          "Api-key": api_key,
          "Accept": "application/json"
        }
      })
    }),

  
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCodeResendMutation,
  useLogoutMutation,
  useUpdateProfileMutation,
  useRegisterMutation,
  useVerifyMutation,
  useLoginMutation,
} = authApi;
