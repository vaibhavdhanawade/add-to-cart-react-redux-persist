import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find(item => item.id === id);
      if (item) {
        item.quantity += quantity;
      }else{
        state.cart = [...state.cart,action.payload];
      }
    },
    increaseItemQuantity : (state,action) => {
      const { id } = action.payload;
      const item = state.cart.find(item => item.id === id);
      if (item) {
        item.quantity += 1;
      }
    },
    descreaseItemQuantity : (state,action) => {
      const { id } = action.payload;
      const item = state.cart.find(item => item.id === id);
      if (item) {
        if(item.quantity !== 1){
          item.quantity -= 1;
        }
      }
    },
    updateCart: (state,action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeFromCart:(state,action) => {
      const cart = state.cart.filter(item => item.id !== action.payload);
      state.cart = cart;
    },
    clearCart: (state) => {
      state.cart = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, increaseItemQuantity, descreaseItemQuantity, updateCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer