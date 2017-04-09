import angular from 'angular';
import viewComponents from './viewComponents';

const app = angular.module('sbClient', [
  viewComponents.name
]);

export default app;
