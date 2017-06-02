/* eslint-disable no-undef */

/**
 * Needed for regeneratorRuntime, which is used by generator functions
 * in redux saga
 */
import 'babel-polyfill';

/**
 * Needed for correct blueprintjs styling
 */
import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider, initializeCurrentLocation } from 'redux-little-router';
import createCustomStore from 'core/store/createCustomStore';
import RootContainer from 'views/containers/RootContainer';

const store = createCustomStore();
const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider store={store}>
      <RootContainer />
    </RouterProvider>
  </Provider>,
  document.querySelector('#app-root')
);
