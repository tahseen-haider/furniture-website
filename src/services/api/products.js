import { GET, POST, PUT, DELETE } from '@services/api';
import { simulateDelay } from '@services';
const BASE_URL = '/mock';

export const productAPI = {
  fetchAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return GET(`${BASE_URL}/products.json`);
  },

  fetchByCategory: (category, page = 1, pageSize = 12) => {
    const query = new URLSearchParams({ page, limit: pageSize }).toString();
    return GET(`${BASE_URL}/products.json`);
  },

  fetchById: (id) => {
    if (id > 0 && id <= 10) {
      return simulateDelay(GET(`${BASE_URL}/product/${id}.json`));
    }
    return GET(`${BASE_URL}/product/1.json`);
  },
};
