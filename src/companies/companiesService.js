import * as api from '../core/api';

export function getAll() {
  return api.get('/companies?include=roles')
    .then(response => response.data);
}
