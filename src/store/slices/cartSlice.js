import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { cartAPI } from '@services';

export const fetchRemoteCart = createAsyncThunk(
  'cart/fetchRemote',
  async (_, { rejectWithValue }) => {
    try {
      const data = await cartAPI.getCart();
      return data.cart || {};
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const syncCartToRemote = createAsyncThunk(
  'cart/syncRemote',
  async (cart, { rejectWithValue }) => {
    try {
      const data = await cartAPI.updateCart(cart);
      return data.cart || {};
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  store: {},
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      if (typeof action.payload !== 'object' || Array.isArray(action.payload)) return;
      state.store = action.payload;
      state.totalItems = Object.keys(action.payload).length;
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
