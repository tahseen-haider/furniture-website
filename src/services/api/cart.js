import { GET, PUT } from '@services/api';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/cart`;

const handleResponse = async (resPromise) => {
  const res = await resPromise;
  if (!res?.success) throw new Error(res?.message || 'Request failed');
  return res.data;
};

export const cartAPI = {
  getCart: () => handleResponse(GET(`${BASE_URL}`)),
  updateCart: (cart) => handleResponse(PUT(`${BASE_URL}`, { cart })),
};
