import { GET } from '@services/api';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/products`;

export const productAPI = {
  fetchByCategory: (category, filters) => {
    const query = new URLSearchParams({ ...filters }).toString();
    return GET(`${BASE_URL}/category/${category}?${query}`);
  },

  fetchById: (id) => {
    return GET(`${BASE_URL}/${id}`);
  },
};
