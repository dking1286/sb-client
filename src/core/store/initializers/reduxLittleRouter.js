import {applyMiddleware} from 'redux';
import {routerForBrowser} from 'redux-little-router';

const routes = {
  '/': {
    title: 'Careeer',
    '/:job': {
      title: 'Job: '
    }
  }
};
