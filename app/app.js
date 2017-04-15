import angular from 'angular';
import uiRouter from 'angular-ui-router';
import views from './views';
import routes from './routes';

const app = angular.module('sbClient', [
  uiRouter,
  views.name
]);

app.config(configureRoutes);

function configureRoutes($locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  routes.forEach(route => $stateProvider.state(route));
}

configureRoutes.$inject = ['$locationProvider', '$stateProvider'];

export default app;
