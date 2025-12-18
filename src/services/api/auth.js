import { POST } from '@services/api';
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/auth` || 'http://localhost:5000/api';

export const authAPI = {
  signup: (data) => {
    return POST(`${BASE_URL}/signup`, data);
  },
  sendVerifyEmail: (email) => {
    return POST(`${BASE_URL}/send-verify-email`, { email });
  },
  login: (data) => {
    return POST(`${BASE_URL}/login`, data);
  },
};
