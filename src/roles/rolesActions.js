import { actionCreatorSet } from '../core/actionHelpers';
import { ROLES_GET_ONE } from './rolesActionTypes';

export const [
  getOne,
  getOneSuccess,
  getOneFailure
] = actionCreatorSet(ROLES_GET_ONE);
