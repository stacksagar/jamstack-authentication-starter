import { createSlice } from "@reduxjs/toolkit";

export interface ProductsState {
  items: {
    [productID: string]: number;
  };
}

const initialState: ProductsState = {
  items: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
