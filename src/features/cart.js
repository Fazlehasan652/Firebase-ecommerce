import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      // console.log(state)
      const product = state.find((product) => product.id === action.payload.id);
      // console.log(action.payload.id)
      // console.log(product)
      product
        ? product.quantity++
        : state.push({ ...action.payload, quantity: 1 });
      Swal.fire(
        "Successful!",
        `You have Add ${action.payload.title} !`,
        "success"
      );
      // console.log(product)
    },
    removeItemFromCart(state, action) {
      Swal.fire(
        "Product Removed!",
        `You have removed ${action.payload.title} !`,
        "info"
      );
      return state.filter(
        (product) => product.id !== action.payload
        // console.log(product)
      );
    },

    modifyQuantityOfAnItem(state, action) {
      const product = state.find((product) => product.id === action.payload.id);
      product.quantity = action.payload.quantity;
    },
    clearCart() {
      Swal.fire("Product Removed!", `You have removed All Proucts !`, "info");
      return [];
    },
  },
});

export const {
  addToCart,
  removeItemFromCart,
  modifyQuantityOfAnItem,
  clearCart,
} = cartSlice.actions;
