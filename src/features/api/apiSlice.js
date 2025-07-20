import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  collection,
  getDoc,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["products"],
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      async queryFn() {
        try {
          const productsCollectionRef = collection(db, "products");
          const res = await getDocs(productsCollectionRef);
          const filterData = res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          // console.log(filterData)
          return { data: filterData, error: null };
        } catch (error) {
          return { error: `Failed to fetch Products from db ${error.message}` };
        }
      },
      providesTags: ["products"],
    }),
    addProduts: builder.mutation({
      queryFn: async (product) => {
        try {
          await addDoc(collection(db, "products"), product);
          return { data: product };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useGetAllProductsQuery, useAddProdutsMutation } = apiSlice;
