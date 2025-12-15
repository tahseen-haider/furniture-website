import { GET } from '@services/api';

export const ordersAPI = {
  trackOrderById: (id) => {
    return GET('/trackOrder');
  },
};
