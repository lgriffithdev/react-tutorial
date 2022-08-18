import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        createPost: builder.mutation({
            query: (post) => ({
                url: 'posts',
                method: 'POST',
                body: post,
            })
        })
    })
})

export const { useCreatePostMutation } = postApi;
