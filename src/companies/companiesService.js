import * as api from '../core/api';

export function getAll() {
  return api.get('/companies')
    .then(response => response.data);
}
