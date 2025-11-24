import { GET, POST, PUT, DELETE } from './';

export const productAPI = {
  fetchAll: () => GET('products'),
  fetchById: (id) => GET(`products/${id}`),
  create: (data) => POST('products', data),
  update: (id, data) => PUT(`products/${id}`, data),
  delete: (id) => DELETE(`products/${id}`),
};
