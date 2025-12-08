import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from '@store';

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});
