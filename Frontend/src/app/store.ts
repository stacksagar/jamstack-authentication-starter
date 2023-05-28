import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart,
  },
});
