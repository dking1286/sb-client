import { CHANGE_VIEW, COMPANIES_GET_ALL } from '../actions/actionTypes';
import { success } from '../actions/helpers';
import initialState from './initialState';

export default function uiReducer(state = initialState.ui, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_VIEW:
      return { ...state, currentView: payload.currentView };
    case success(COMPANIES_GET_ALL):
      return { ...state, companies: payload.companies };
    default:
      return state;
  }
}
