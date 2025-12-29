import { GET, POST } from '@services/api';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api/auth`;

const handleResponse = async (resPromise) => {
  const res = await resPromise;
  if (!res?.success) throw new Error(res?.message || 'Request failed');
  return res;
};

export const authAPI = {
  signup: (data) => handleResponse(POST(`${BASE_URL}/signup`, data)),
  sendVerifyEmail: (email) => handleResponse(POST(`${BASE_URL}/send-verify-email`, { email })),
  login: (data) => handleResponse(POST(`${BASE_URL}/login`, data)),
  logout: () => handleResponse(POST(`${BASE_URL}/logout`)),
  getCurrentUser: () => handleResponse(GET(`${BASE_URL}/me`)),
  requestPasswordSet: (email) =>
    handleResponse(POST(`${BASE_URL}/request-password-set`, { email })),
  resetPassword: (data) => handleResponse(POST(`${BASE_URL}/reset-password`, data)),
};
