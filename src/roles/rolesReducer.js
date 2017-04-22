import { ROLES_GET_ONE } from './rolesActionTypes';
import { success } from '../core/actionHelpers';
import initialState from '../core/initialState';

export default (state = initialState.roles, action) => {
  const { type, payload } = action;
  switch (type) {
    case success(ROLES_GET_ONE):
      return { ...state, currentRole: payload };
    default:
      return state;
  }
};
