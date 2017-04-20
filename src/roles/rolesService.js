import * as api from '../api';

export function getOne(id) {
  return api.get(`/roles/${id}`)
    .then(response => response.data.role);
}
