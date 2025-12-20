import { GET, PUT } from '@services/api';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/cart`;

export const cartAPI = {
  getCart: () => GET(`${BASE_URL}`),
  updateCart: (cart) => PUT(`${BASE_URL}`, { cart }),
};
