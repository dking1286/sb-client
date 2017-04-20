import { createStore, combineReducers } from 'redux';
import { buildStack } from 'redux-stack';
import initialState from '../reducer/initialState';
import stack from './initializers';

const { reducers, enhancer } = buildStack(stack);

const createCustomStore = () => createStore(
  combineReducers(reducers),
  initialState,
  enhancer
);

export default createCustomStore;
