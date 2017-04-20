import * as api from '../api';

export function getAll() {
  return api.get('/companies')
    .then(response => response.data.companies);
}
