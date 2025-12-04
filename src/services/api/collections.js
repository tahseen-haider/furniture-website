import { GET } from '.';

export const collectionsAPI = {
  fetchAll: () => GET('/collections'),
};
