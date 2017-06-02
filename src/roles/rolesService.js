import * as api from '../core/api';

export function getOne(id) {
  return api.get(`/roles/${id}?include=skills`)
    .then(response => response.data);
}
