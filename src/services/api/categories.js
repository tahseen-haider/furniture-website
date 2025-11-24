import { fetchAPI } from './index';

export const getAllCategories = () => fetchAPI('categories.json');

export const getCategoryById = (id) =>
  fetchAPI('categories.json').then((categories) => categories.find((c) => c.id === parseInt(id)));
