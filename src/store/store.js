import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { globalReducer, cartReducer, userReducer } from '@store';
import { addToCart, removeFromCart, updateQuantity, clearCart, syncCartToRemote } from '@store';
import { saveCart } from '@utils';

const cartListener = createListenerMiddleware();

cartListener.startListening({
  matcher: (action) =>
    addToCart.match(action) ||
    removeFromCart.match(action) ||
    updateQuantity.match(action) ||
    clearCart.match(action),

  effect: async (_, api) => {
    const state = api.getState();
    const cart = state.cart.store;

    saveCart(cart);

    if (state.user.isLoggedIn) {
      api.dispatch(syncCartToRemote(cart));
    }
  },
});

export const store = configureStore({
  reducer: {
    global: globalReducer,
    cart: cartReducer,
    user: userReducer,
  },
  middleware: (getDefault) => getDefault().prepend(cartListener.middleware),
});
