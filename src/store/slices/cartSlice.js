import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  store: {},
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.store = action.payload;
    },
    addToCart: (state, action) => {
      const item = action.payload;
      const id = item.variantId || item.productId;
      const qty = item.quantity ?? 1;

      if (state.store[id]) {
        state.store[id].quantity += qty;
      } else {
        state.store[id] = { ...item, quantity: qty };
        state.totalItems += 1;
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload.id;
      if (state.store[id]) {
        delete state.store[id];
        state.totalItems -= 1;
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (!state.store[id]) return;
      if (quantity < 1) return;

      state.store[id].quantity = quantity;
    },
    clearCart: (state) => {
      state.store = {};
      state.totalItems = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, setCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
