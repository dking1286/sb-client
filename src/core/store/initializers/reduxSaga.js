import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import rootSaga from '../../rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default {
  enhancers: [
    (createStore) => (reducers, initialState) => {
      const store = createStore(reducers, initialState);
      sagaMiddleware.run(rootSaga);
      return store;
    },
    applyMiddleware(sagaMiddleware)
  ]
};
