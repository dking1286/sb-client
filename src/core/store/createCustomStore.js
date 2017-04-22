import { createStore, combineReducers } from 'redux';
import { buildStack } from 'redux-stack';
import initialState from '../initialState';
import stack from './initializers';

const { reducers, enhancer } = buildStack(stack);

const createCustomStore = () => {
  return createStore(
    combineReducers(reducers),
    initialState,
    enhancer
  );
};

export default createCustomStore;
