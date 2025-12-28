import { GET, POST, PUT, DELETE } from '@services/api';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/admin`;

export const adminAPI = {
  dashboard: {
    stats: () => GET(`${BASE_URL}/dashboard/stats`),
  },
  products: {
    fetchAll: (params = {}) =>
      GET(`${BASE_URL}/products?${new URLSearchParams(params).toString()}`),
    create: (payload) => POST(`${BASE_URL}/products`, payload),
    update: (id, payload) => PUT(`${BASE_URL}/products/${id}`, payload),
    remove: (id) => DELETE(`${BASE_URL}/products/${id}`),
  },
  categories: {
    fetchAll: () => GET(`${BASE_URL}/categories`),
    create: (payload) => POST(`${BASE_URL}/categories`, payload),
    update: (id, payload) => PUT(`${BASE_URL}/categories/${id}`, payload),
    remove: (id) => DELETE(`${BASE_URL}/categories/${id}`),
  },
  orders: {
    fetchAll: (params = {}) => GET(`${BASE_URL}/orders?${new URLSearchParams(params).toString()}`),
    fetchById: (trackingId) => GET(`${BASE_URL}/orders/${trackingId}`),
  },
  users: {
    fetchAll: (params = {}) => GET(`${BASE_URL}/users?${new URLSearchParams(params).toString()}`),
    fetchById: (userId) => GET(`${BASE_URL}/users/${userId}`),
  },
};
