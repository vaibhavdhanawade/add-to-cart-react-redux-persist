import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [],
  filteredProduct: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProducts: (state,action) => {
      state.product = action.payload;
    },
    searchProducts:(state,action) => {
      const filteredProducts = state.product.filter(product =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.filteredProduct = filteredProducts;
    },
    clearSearch: (state) => {
      state.filteredProduct = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadProducts, searchProducts, clearSearch } = productsSlice.actions

export default productsSlice.reducer