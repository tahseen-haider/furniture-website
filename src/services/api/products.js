import { GET, POST, PUT, DELETE } from './';

export const productAPI = {
  fetchAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return GET(`/products`);
  },

  fetchByCategory: (category, page = 1, pageSize = 12) => {
    const query = new URLSearchParams({ page, limit: pageSize }).toString();
    return GET(`/products`);
  },

  fetchById: (id) => GET(`/products/${id}`),
};
