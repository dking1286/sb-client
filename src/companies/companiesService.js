import * as api from '../core/api';

export function getAll() {
  return api.get('/companies?include=roles.skills')
    .then(response => response.data);
}
