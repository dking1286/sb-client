import { COMPANIES_GET_ALL } from '../actions/actionTypes';
import { actionCreatorSet } from '../actions/helpers';

export const [getAll, getAllSuccess, getAllFailure] = actionCreatorSet(COMPANIES_GET_ALL);
