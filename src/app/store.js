import { configureStore } from "@reduxjs/toolkit";

import { productReducer } from "../features/productList/productSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
