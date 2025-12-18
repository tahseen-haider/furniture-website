import { GET } from '@services/api';
const BASE_URL = '/mock';

export const ordersAPI = {
  trackOrderById: (id) => {
    return GET(`${BASE_URL}/trackOrder.json`);
  },
};
