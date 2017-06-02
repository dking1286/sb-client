import * as api from '../core/api';

export function getOne(id) {
  return api.get(`/roles/${id}?include=skills,company`)
    .then(response => response.data);
}
