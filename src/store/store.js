import { configureStore } from '@reduxjs/toolkit';
import { globalReducer, cartReducer } from '@store';
// import logger from 'redux-logger';
import { saveCart } from '@utils';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    cart: cartReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

let prevCartState = null;

store.subscribe(() => {
  const cartState = store.getState().cart.store;
  if (cartState === prevCartState) return;
  saveCart(cartState);
  prevCartState = cartState;
});
