import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const listApi = createApi({
  reducerPath: "listApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b",
  }),
  endpoints: (builder) => ({
    getList: builder.query({
      query() {
        console.log(10);
        return "listItem";
      },
    }),
  }),
});

export const { useGetListQuery } = listApi;
