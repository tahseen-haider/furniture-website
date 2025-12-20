import { GET, POST } from '@services/api';

const BASE_URL = import.meta.env.VITE_API_BASE_URL
  ? `${import.meta.env.VITE_API_BASE_URL}/api/auth`
  : 'http://localhost:5000/api/auth';

export const authAPI = {
  signup: (data) => POST(`${BASE_URL}/signup`, data),
  sendVerifyEmail: (email) => POST(`${BASE_URL}/send-verify-email`, { email }),
  login: (data) => POST(`${BASE_URL}/login`, data),
  logout: () => POST(`${BASE_URL}/logout`),
  getCurrentUser: () => GET(`${BASE_URL}/me`),
};
