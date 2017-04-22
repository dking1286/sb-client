/* eslint-disable no-undef */

/**
 * Needed for regeneratorRuntime, which is used by generator functions
 * in redux saga
 */
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createCustomStore from './core/store/createCustomStore';
import RootContainer from './views/containers/RootContainer';

const store = createCustomStore();

ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.querySelector('#app-root')
);
