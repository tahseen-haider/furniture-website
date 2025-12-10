import { configureStore } from '@reduxjs/toolkit';
import { globalReducer, cartReducer } from '@store';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
