import * as api from '../core/api';

export function getOne(id) {
  return api.get(`/roles/${id}`)
    .then(response => response.data.role);
}
