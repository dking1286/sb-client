import reduxDevTools from './reduxDevTools';
import reduxSaga from './reduxSaga';
import reducers from './reducers';
import reduxLittleRouter from './reduxLittleRouter';

export default [
  reducers,
  reduxLittleRouter,
  reduxSaga,
  reduxDevTools // This should come after all other enhancers in the stack
];
