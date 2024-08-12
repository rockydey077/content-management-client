import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["blogs"],
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["blogs"],
    }),
    fetchBlog: builder.query({
      query: (id) => ({
        url: `/blog/${id}`,
      }),
    }),
    removeBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogs"],
    }),
    updateBlog: builder.mutation({
      query: (data) => ({
        url: `/blog/${data._id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["blogs"],
    }),
    addBlog: builder.mutation({
      query: (data) => ({
        url: "/blog",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useFetchBlogsQuery,
  useFetchBlogQuery,
  useRemoveBlogMutation,
  useUpdateBlogMutation,
  useAddBlogMutation,
} = blogsApi;
