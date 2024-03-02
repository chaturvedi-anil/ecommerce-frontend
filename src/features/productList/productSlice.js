import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductsByFilter } from "./productAPI";

const fetchAllProductsAsync = createAsyncThunk(
  "/product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data.products;
  }
);

const fetchProductsByFilterAsync = createAsyncThunk(
  "/product/fetchProductsByFilter",
  async (filter) => {
    const response = await fetchProductsByFilter(filter);
    return response.data.products;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProductsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })

      //filter
      .addCase(fetchProductsByFilterAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsByFilterAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsByFilterAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

const productListSelector = (state) => state.product.products;

export {
  productListSelector,
  fetchAllProductsAsync,
  fetchProductsByFilterAsync,
};
export const productReducer = productSlice.reducer;
