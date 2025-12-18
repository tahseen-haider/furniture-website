import { GET } from '@services/api';
const BASE_URL = '/mock';

export const collectionsAPI = {
  fetchAll: () => GET(`${BASE_URL}/collections.json`),
};
