import { COMPANIES_GET_ALL } from './companiesActionTypes';
import { success } from '../core/actionHelpers';
import initialState from '../core/initialState';

export default (state = initialState.companies, action) => {
  const { type, payload } = action;
  switch (type) {
    case success(COMPANIES_GET_ALL):
      return { ...state, currentCompanies: payload };
    default:
      return state;
  }
};
