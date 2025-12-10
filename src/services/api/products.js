import { simulateDelay } from '@services';
import { GET, POST, PUT, DELETE } from '@services/api';

export const productAPI = {
  fetchAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return GET(`/products`);
  },

  fetchByCategory: (category, page = 1, pageSize = 12) => {
    const query = new URLSearchParams({ page, limit: pageSize }).toString();
    return GET(`/products`);
  },

  fetchById: (id) => {
    if (id > 0 && id <= 10) {
      return simulateDelay(GET(`/product/${id}`));
    }
    return GET(`/product/1`);
  },
};
