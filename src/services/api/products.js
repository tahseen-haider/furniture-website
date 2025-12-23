import { GET } from '@services/api';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/products`;

export const productAPI = {
  fetchAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return GET(`${BASE_URL}/`);
  },

  fetchByCategory: (category, page = 1, pageSize = 12) => {
    const query = new URLSearchParams({ page, limit: pageSize }).toString();
    return GET(`${BASE_URL}/category/${category}?${query}`);
  },

  fetchById: (id) => {
    return GET(`${BASE_URL}/${id}`);
  },
};
