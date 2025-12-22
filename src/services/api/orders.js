import { GET, POST } from '@services/api';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/orders`;

export const ordersAPI = {
  placeOrder: (orderData) => {
    return POST(`${BASE_URL}/place-order`, orderData);
  },
  trackOrderById: (id) => {
    return GET(`${BASE_URL}/track-order/${id}`);
  },
};
