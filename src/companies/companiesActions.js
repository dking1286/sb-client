import { actionCreatorSet } from 'core/actionHelpers';
import { COMPANIES_GET_ALL } from './companiesActionTypes';

export const [
  getAll,
  getAllSuccess,
  getAllFailure
] = actionCreatorSet(COMPANIES_GET_ALL);
