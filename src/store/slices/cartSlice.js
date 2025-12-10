import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  store: {},
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const id = item.variantId || item.productId;

      const qty = item.quantity ?? 1;

      if (state.store[id]) {
        state.totalItems += qty;
        state.store[id].quantity += qty;
      } else {
        state.store[id] = { ...item, quantity: qty };
        state.totalItems += qty;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload.id;
      if (state.store[id]) {
        state.totalItems -= state.store[id].quantity;
        delete state.store[id];
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      if (!state.store[id]) return;
      if (quantity < 1) return;

      state.totalItems += quantity - state.store[id].quantity;
      state.store[id].quantity = quantity;
    },
    clearCart: (state) => {
      state.store = {};
      state.totalItems = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
