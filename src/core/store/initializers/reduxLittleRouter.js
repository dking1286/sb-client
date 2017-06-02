import { applyMiddleware } from 'redux';
import { routerForBrowser } from 'redux-little-router';
import routes from 'core/routes';

const { reducer, middleware, enhancer } = routerForBrowser({ routes });

export default {
  reducers: { router: reducer },
  enhancers: [enhancer, applyMiddleware(middleware)]
};
