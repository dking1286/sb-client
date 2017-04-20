/* eslint-disable no-undef */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createCustomStore from './store/createCustomStore';
import RootContainer from './containers/RootContainer';

const store = createCustomStore();

ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.querySelector('#app-root')
);
