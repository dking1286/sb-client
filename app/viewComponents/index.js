import angular from 'angular';
import appRoot from './appRoot/appRoot';
import rolesList from './rolesList/rolesList';
import roles from '../scripts/roles';

const viewComponents = angular.module('sbClient.viewComponents', [
  roles.name
]);

viewComponents
  .component('appRoot', appRoot)
  .component('rolesList', rolesList);

export default viewComponents;
