import { fetchAPI } from './index';

export const getAllProducts = () => fetchAPI('products.json');

export const getProductById = (id) =>
  fetchAPI('products.json').then((products) => products.find((p) => p.id === parseInt(id)));

export const getProductsByCategory = (categoryId) =>
  fetchAPI('products.json').then((products) =>
    products.filter((p) => p.categoryId === parseInt(categoryId))
  );
