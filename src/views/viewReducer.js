import { VIEW_CHANGE } from './viewActionTypes';
import initialState from '../core/initialState';

export default (state = initialState.view, action) => {
  const { type, payload } = action;
  switch (type) {
    case VIEW_CHANGE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
